import { UNITS, FREE_SCENARIO } from "./content.js";
import {
  state, save, replaceState, resetState, today, daysBetween, phrase, learn, grade, dueCards,
  doneCount, currentDay, streak, PLAN_DAYS,
} from "./store.js";
import { LEVELS, PASS_LESSON, PASS_EXAM } from "./course.js";
import { VERBS, TENSES, PERSONS, conjugate, accepted } from "./verbs.js";
import { lessonScore, lessonPassed, startLevel, nextLesson } from "./store.js";
import * as voice from "./speech.js";
import { tutorReply, tutorFeedback, explainError, OPENING } from "./tutor.js";

// ---------- Utilidades de interfaz ----------
function h(sel, props, ...kids) {
  const [tag, ...cls] = sel.split(".");
  const el = document.createElement(tag || "div");
  if (cls.length) el.className = cls.join(" ");
  if (props != null && (typeof props !== "object" || props instanceof Node || Array.isArray(props))) {
    kids.unshift(props);
    props = null;
  }
  for (const [k, v] of Object.entries(props || {})) {
    if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else if (k === "html") el.innerHTML = v;
    else if (k === "value") el.value = v;
    else if (v !== false && v != null) el.setAttribute(k, v === true ? "" : v);
  }
  el.append(...kids.flat(Infinity).filter((x) => x != null && x !== false));
  return el;
}
const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const view = document.getElementById("view");
const go = (hash) => { location.hash = hash; };

const playBtn = (text, label = "Escuchar") =>
  h("button.btn.ghost", { onclick: () => voice.speak(text) }, "🔊 ", label);
const slowBtn = (text) =>
  h("button.btn.ghost", { onclick: () => voice.speak(text, { rate: 0.6 }) }, "🐢 Lento");

// Botón de micrófono. Con `target` compara lo que dices con la frase modelo;
// si el navegador no reconoce voz, te graba para que te compares tú.
function micWidget(target, { onResult } = {}) {
  const out = h("div.mic-out");
  const btn = h("button.btn.mic");
  const box = h("div.mic-box", btn, out);
  let recorder = null, busy = false;

  const mode = () => (voice.canRecognize() ? "sr" : voice.canRecord() ? "rec" : "none");
  const label = () => {
    btn.textContent = busy ? (mode() === "sr" ? "Te escucho…" : "⏹ Parar") : mode() === "sr" ? "🎤 Dilo" : "🎤 Grábate";
    btn.classList.toggle("live", busy);
  };
  if (mode() === "none") {
    box.replaceChildren(h("p.hint", "Dilo en voz alta, sin miedo: nadie te oye."));
    return box;
  }
  label();

  btn.onclick = async () => {
    if (mode() === "sr") {
      if (busy) return voice.stopListening();
      busy = true; label(); out.replaceChildren();
      try {
        const alts = await voice.listen();
        if (!alts.length) out.replaceChildren(h("p.hint", "No te he oído. Acércate y prueba otra vez."));
        else if (target) {
          const r = voice.compare(target, alts);
          const pct = Math.round(r.score * 100);
          out.replaceChildren(
            h("p.heard", r.words.map((w) => h(w.ok ? "span.ok" : "span.miss", w.text + " "))),
            h("p.hint", pct >= 85 ? `Se te entiende perfectamente (${pct} %).` : pct >= 50 ? `Casi (${pct} %). He entendido: «${r.heard}»` : `He entendido: «${r.heard}». Escúchala otra vez y repite.`),
          );
          onResult?.(r);
        } else onResult?.({ heard: alts[0] });
      } catch (err) {
        out.replaceChildren(h("p.hint", err.message === "denied"
          ? "El reconocimiento de voz no está disponible aquí. A partir de ahora puedes grabarte y compararte."
          : "No he podido escucharte. Prueba otra vez."));
      }
      busy = false; label();
    } else {
      if (!busy) {
        try { recorder = await voice.startRecording(); busy = true; label(); out.replaceChildren(); }
        catch { out.replaceChildren(h("p.hint", "Necesito permiso para usar el micrófono.")); }
      } else {
        const url = await recorder.stop();
        busy = false; label();
        const audio = h("audio", { src: url, controls: true });
        out.replaceChildren(audio, target ? h("p.hint", "Compárate con el modelo: ¿suena parecido?") : null);
        audio.play().catch(() => {});
        onResult?.({ url });
      }
    }
  };
  return box;
}

// ---------- Plan ----------
const unitOf = (day) => UNITS[Math.floor(day / 7)];

function buildSteps(day) {
  const u = Math.floor(day / 7), k = day % 7, unit = UNITS[u];
  const steps = [];
  const due = dueCards(25);
  if (due.length) steps.push({ id: "repaso", title: "Repaso hablado", min: 8, run: (el, next) => runReview(el, due, next) });

  if (k < 6) {
    const ids = [0, 1, 2, 3, 4].map((i) => `${u}-${k * 5 + i}`);
    steps.push({ id: "nuevas", title: "Frases nuevas", min: 8, run: (el, next) => runNew(el, ids, next) });
    const dlg = unit.dialogues[k < 3 ? 0 : 1];
    steps.push({ id: "dialogo", title: `Diálogo: ${dlg.title}`, min: 8, run: (el, next) => runDialogue(el, dlg, k % 3, next) });
    if (k % 2 === 0) {
      const clave = unit.claves[k / 2];
      steps.push({ id: "clave", title: `Clave: ${clave.title}`, min: 5, run: (el, next) => runClave(el, clave, next) });
    } else {
      const pool = Array.from({ length: (k + 1) * 5 }, (_, i) => `${u}-${i}`);
      steps.push({ id: "oido", title: "Oído", min: 5, run: (el, next) => runOido(el, pool, u, next) });
    }
  } else {
    const all = unit.phrases.map((_, i) => `${u}-${i}`);
    steps.push({ id: "oido", title: "Oído: toda la semana", min: 6, run: (el, next) => runOido(el, all, u, next, 8) });
    unit.dialogues.forEach((dlg, i) =>
      steps.push({ id: `dialogo${i}`, title: `De memoria: ${dlg.title}`, min: 6, run: (el, next) => runDialogue(el, dlg, 2, next) }));
  }
  steps.push({
    id: "hablar",
    title: state.settings.apiKey ? `Conversación: ${unit.tutor.title}` : "Habla tú",
    min: 8,
    run: (el, next) => (state.settings.apiKey ? runChat(el, unit.tutor, next) : runMonologue(el, unit.prompts[k % unit.prompts.length], next)),
  });
  return steps;
}

// ---------- Pasos de la sesión ----------
function runReview(el, ids, next) {
  const queue = [...ids];
  let done = 0;
  const show = () => {
    if (!queue.length) return next();
    const id = queue.shift(), p = phrase(id);
    const answer = h("div.answer", { hidden: true },
      h("p.it", p.it), p.note && h("p.note", p.note),
      h("div.row", playBtn(p.it), slowBtn(p.it)),
      h("p.hint", "¿Cómo te ha salido?"),
      h("div.row.grades", [["Otra vez", 0], ["Difícil", 1], ["Bien", 2], ["Fácil", 3]].map(([t, q]) =>
        h(`button.btn.g${q}`, { onclick: () => { grade(id, q); if (q === 0) queue.push(id); else done++; show(); } }, t))),
    );
    const reveal = h("button.btn.primary", { onclick: () => { reveal.hidden = true; answer.hidden = false; voice.speak(p.it); } }, "Ver respuesta");
    el.replaceChildren(
      h("p.count", `${done} hechas · ${queue.length + 1} pendientes`),
      h("div.card.big",
        h("p.label", "Dilo en italiano, en voz alta"),
        h("p.es", p.es),
        micWidget(p.it, { onResult: (r) => { if (r.score >= 0.85 && !reveal.hidden) reveal.click(); } }),
        reveal, answer),
    );
  };
  show();
}

function runNew(el, ids, next) {
  let i = 0;
  const show = () => {
    if (i >= ids.length) { save(); return next(); }
    const p = phrase(ids[i]);
    el.replaceChildren(
      h("p.count", `Frase ${i + 1} de ${ids.length}`),
      h("div.card.big",
        h("p.label", "Escucha y repite en voz alta"),
        h("p.it", p.it), h("p.es", p.es), p.note && h("p.note", p.note),
        h("div.row", playBtn(p.it), slowBtn(p.it)),
        micWidget(p.it),
        h("button.btn.primary", { onclick: () => { learn(p.id); i++; show(); } }, i + 1 < ids.length ? "Siguiente" : "Continuar")),
    );
    voice.speak(p.it);
  };
  show();
}

const DIALOGUE_MODES = [
  ["Escucha y repite", "Oirás todo el diálogo. Después de cada frase tuya, repítela en voz alta."],
  ["Tu papel", "Ahora tus frases no suenan: léelas tú en voz alta cuando te toque."],
  ["De memoria", "Solo verás la pista en español. Di tu frase en italiano y luego compruébala."],
];

function runDialogue(el, dlg, mode, next) {
  const log = h("div.chat");
  const foot = h("div.foot");
  let i = 0, alive = true;
  el.replaceChildren(
    h("div.card", h("p.label", `${DIALOGUE_MODES[mode][0]} · con ${dlg.who}`), h("p", dlg.scene), h("p.hint", DIALOGUE_MODES[mode][1])),
    log, foot,
  );
  const bubble = (who, it, es) => {
    const b = h(`div.bubble.${who === "a" ? "them" : "me"}`, h("p.it", it), h("p.es", es));
    b.onclick = () => voice.speak(it);
    log.append(b);
    b.scrollIntoView({ block: "nearest", behavior: "smooth" });
    return b;
  };
  const step = async () => {
    if (!alive || !el.isConnected) return;
    if (i >= dlg.lines.length) {
      foot.replaceChildren(h("div.row",
        h("button.btn.ghost", { onclick: () => runDialogue(el, dlg, mode, next) }, "Repetir"),
        h("button.btn.primary", { onclick: next }, "Continuar")));
      return;
    }
    const [who, it, es] = dlg.lines[i++];
    foot.replaceChildren();
    if (who === "a") {
      bubble("a", it, es);
      await voice.speak(it);
      return step();
    }
    const cont = h("button.btn.primary", { onclick: step }, "Seguir");
    if (mode === 0) {
      bubble("tu", it, es);
      await voice.speak(it);
      if (!el.isConnected) return;
      foot.replaceChildren(h("p.hint", "Tu turno: repítela."), micWidget(it), cont);
    } else if (mode === 1) {
      bubble("tu", it, es);
      foot.replaceChildren(h("p.hint", "Tu turno: léela en voz alta."), micWidget(it), cont);
    } else {
      const b = h("div.bubble.me.pending", h("p.es", es));
      log.append(b);
      b.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const reveal = () => {
        b.remove(); bubble("tu", it, es);
        voice.speak(it);
        foot.replaceChildren(cont);
      };
      foot.replaceChildren(
        h("p.hint", "Tu turno: dila en italiano."),
        micWidget(it, { onResult: (r) => r.score >= 0.85 && reveal() }),
        h("button.btn.ghost", { onclick: reveal }, "Comprobar"));
    }
  };
  step();
  return () => { alive = false; };
}

function quizCard(q, onDone) {
  const opts = h("div.opts");
  const fb = h("div");
  q.opts.forEach((t, idx) => {
    const b = h("button.btn.opt", { onclick: () => {
      [...opts.children].forEach((c, j) => { c.disabled = true; if (j === q.a) c.classList.add("right"); });
      if (idx !== q.a) b.classList.add("wrong");
      fb.replaceChildren(q.after || null, h("button.btn.primary", { onclick: () => onDone(idx === q.a) }, "Seguir"));
    } }, t);
    opts.append(b);
  });
  return h("div.card", q.head || null, h("p.q", q.q), opts, fb);
}

function runClave(el, clave, next) {
  const quiz = (i) => {
    if (i >= clave.quiz.length) return next();
    el.replaceChildren(h("p.count", `Pregunta ${i + 1} de ${clave.quiz.length}`), quizCard(clave.quiz[i], () => quiz(i + 1)));
  };
  el.replaceChildren(
    h("div.card.prose", h("h2", clave.title), h("div", { html: clave.body })),
    h("button.btn.primary", { onclick: () => quiz(0) }, "Comprobar que lo tengo"),
  );
}

function runOido(el, pool, u, next, n = 6) {
  const items = shuffle(pool).slice(0, n).map(phrase);
  const nDict = Math.min(2, items.length);
  let i = 0;
  const show = () => {
    if (i >= items.length) return next();
    const p = items[i], dictation = i >= items.length - nDict;
    const head = h("div",
      h("p.label", dictation ? "Dictado: escribe lo que oyes" : "¿Qué ha dicho?"),
      h("div.row", h("button.btn.ghost", { onclick: () => voice.speak(p.it, { rate: 1 }) }, "🔊 Otra vez"), slowBtn(p.it)));
    const after = h("div", h("p.it", p.it), h("p.es", p.es));
    const advance = () => { i++; show(); };
    let card;
    if (dictation) {
      const input = h("input.input", { type: "text", placeholder: "Escribe en italiano…", autocapitalize: "off", autocorrect: "off", spellcheck: "false" });
      const fb = h("div");
      const check = h("button.btn.primary", { onclick: () => {
        const r = voice.compare(p.it, input.value);
        check.hidden = true; input.disabled = true;
        fb.replaceChildren(h("p.heard", r.words.map((w) => h(w.ok ? "span.ok" : "span.miss", w.text + " "))), h("p.es", p.es),
          h("button.btn.primary", { onclick: advance }, "Seguir"));
      } }, "Comprobar");
      card = h("div.card", head, input, check, fb);
    } else {
      const others = shuffle(UNITS[u].phrases.map((x) => x[1]).filter((es) => es !== p.es)).slice(0, 2);
      const opts = shuffle([p.es, ...others]);
      card = quizCard({ head, q: "", opts, a: opts.indexOf(p.es), after }, advance);
    }
    el.replaceChildren(h("p.count", `${i + 1} de ${items.length}`), card);
    voice.speak(p.it, { rate: 1 });
  };
  show();
}

function runMonologue(el, prompt, next) {
  el.replaceChildren(
    h("div.card.big",
      h("p.label", "Habla tú, un minuto, sin parar"),
      h("p.es", prompt),
      h("p.hint", "No busques la perfección: si te falta una palabra, rodéala o di «come si dice…» y sigue. Luego escúchate."),
      micWidgetFree(),
      h("button.btn.primary", { onclick: next }, "Hecho")),
    !state.settings.apiKey && h("p.hint.center", "Con el tutor de IA activado (en Ajustes), aquí tendrías una conversación real con respuestas y correcciones."),
  );
}
// Grabación libre (sin frase modelo): siempre graba, para que puedas oírte.
function micWidgetFree() {
  if (!voice.canRecord()) return h("p.hint", "Habla en voz alta durante un minuto.");
  const out = h("div.mic-out");
  let rec = null;
  const btn = h("button.btn.mic", { onclick: async () => {
    if (!rec) {
      try { rec = await voice.startRecording(); btn.textContent = "⏹ Parar"; btn.classList.add("live"); out.replaceChildren(); }
      catch { out.replaceChildren(h("p.hint", "Necesito permiso para usar el micrófono.")); }
    } else {
      const url = await rec.stop(); rec = null;
      btn.textContent = "🎤 Grabar otra vez"; btn.classList.remove("live");
      out.replaceChildren(h("audio", { src: url, controls: true }));
    }
  } }, "🎤 Grabar");
  return h("div.mic-box", btn, out);
}

// ---------- Conversación con el tutor ----------
function runChat(el, scenario, next) {
  const history = [{ role: "user", content: OPENING }];
  const log = h("div.chat");
  const status = h("p.hint.center");
  const input = h("input.input", { type: "text", placeholder: "…o escribe aquí", autocapitalize: "off", onkeydown: (e) => e.key === "Enter" && send(input.value) });
  const micBtn = h("button.btn.mic", { onclick: talk }, "🎤 Hablar");
  const controls = h("div.foot", status,
    h("div.row", voice.canRecognize() ? micBtn : null, input, h("button.btn.primary", { onclick: () => send(input.value) }, "Enviar")));
  const endBtn = h("button.btn.ghost", { onclick: finish }, "Terminar y ver mi feedback");
  let waiting = false, lastUserBubble = null, userTurns = 0;

  el.replaceChildren(
    h("div.card", h("p.label", `Conversación · ${scenario.title}`),
      h("p.hint", "Responde hablando. Las correcciones aparecen bajo tu frase; no te pares por ellas.")),
    log, controls, h("div.row.center", endBtn, next && h("button.btn.ghost", { onclick: next }, "Saltar")),
  );

  const add = (cls, ...kids) => { const b = h(`div.bubble.${cls}`, ...kids); log.append(b); b.scrollIntoView({ block: "nearest", behavior: "smooth" }); return b; };
  const setWaiting = (w, msg = "") => { waiting = w; status.textContent = msg; micBtn.disabled = w; };

  async function ask() {
    setWaiting(true, "Pensando…");
    try {
      const r = await tutorReply(scenario, history);
      if (!el.isConnected) return;
      history.push({ role: "assistant", content: r.raw });
      if (r.note && lastUserBubble) lastUserBubble.append(h("p.note", "✏️ " + r.note));
      const text = h("p.it", r.reply);
      const b = add("them", text, h("button.link", { onclick: (e) => { e.stopPropagation(); voice.speak(r.reply); } }, "🔊 Repetir"));
      if (state.settings.hideText) {
        text.classList.add("blur");
        b.append(h("button.link", { onclick: (e) => { e.stopPropagation(); text.classList.remove("blur"); e.target.remove(); } }, "Ver texto"));
      }
      setWaiting(false);
      voice.speak(r.reply);
    } catch (err) {
      setWaiting(false);
      add("error", h("p", explainError(err)), h("button.link", { onclick: (e) => { e.target.closest(".bubble").remove(); ask(); } }, "Reintentar"));
    }
  }
  function send(text) {
    text = text.trim();
    if (!text || waiting) return;
    input.value = "";
    voice.stopSpeaking();
    lastUserBubble = add("me", h("p.it", text));
    history.push({ role: "user", content: text });
    userTurns++;
    ask();
  }
  async function talk() {
    if (micBtn.classList.contains("live")) return voice.stopListening();
    micBtn.classList.add("live"); micBtn.textContent = "Te escucho…";
    try {
      const alts = await voice.listen();
      if (alts.length) send(alts[0]); else status.textContent = "No te he oído. Prueba otra vez.";
    } catch { status.textContent = "El micrófono no está disponible: escribe tu respuesta."; micBtn.hidden = !voice.canRecognize(); }
    micBtn.classList.remove("live"); micBtn.textContent = "🎤 Hablar";
  }
  async function finish() {
    voice.stopSpeaking();
    if (userTurns < 2 || history[history.length - 1].role !== "assistant") return next ? next() : go("#/hoy");
    controls.hidden = true; endBtn.disabled = true; endBtn.textContent = "Preparando tu feedback…";
    try {
      const fb = await tutorFeedback(scenario, history);
      if (!el.isConnected) return;
      el.replaceChildren(h("div.card.prose", h("h2", "Tu feedback"), h("p.pre", fb)),
        h("button.btn.primary", { onclick: () => (next ? next() : route()) }, next ? "Continuar" : "Otra conversación"));
    } catch (err) {
      endBtn.disabled = false; endBtn.textContent = "Reintentar feedback";
      status.textContent = explainError(err); controls.hidden = false;
    }
  }
  ask();
}

// ---------- Vistas ----------
function viewHoy() {
  const day = currentDay(), unit = unitOf(day), finished = doneCount() >= PLAN_DAYS;
  const left = daysBetween(today(), state.tripDate);
  const margin = left - (PLAN_DAYS - doneCount());
  const steps = buildSteps(day);
  const doneToday = Object.values(state.done).includes(today());
  const hour = new Date().getHours();
  const hello = hour < 13 ? "Buongiorno" : hour < 19 ? "Buon pomeriggio" : "Buonasera";

  const pace = left < 0 ? "El viaje ya ha pasado. Cambia la fecha en Ajustes para el próximo."
    : finished ? "Has completado el plan. Sigue con el repaso y el tutor hasta el viaje."
    : margin >= 0 ? `Vas bien: con una sesión al día terminas con ${margin} días de margen.`
    : `Vas justo: te faltan ${PLAN_DAYS - doneCount()} sesiones y quedan ${left} días. Algún día haz dos.`;

  const grid = h("div.weeks", UNITS.map((u, w) =>
    h("div.week", h("p.wk", `S${w + 1}`), h("p.wt", u.title),
      h("div.days", Array.from({ length: 7 }, (_, k) => {
        const d = w * 7 + k;
        return h(`button.day${state.done[d] ? ".done" : ""}${d === day ? ".now" : ""}`, { onclick: () => go(`#/sesion/${d}`), "aria-label": `Día ${d + 1}` }, String(k + 1));
      })))));

  view.replaceChildren(
    h("header.top", h("h1", `${hello}${state.name ? ", " + state.name : ""}!`),
      h("p.sub", left >= 0 ? `Faltan ${left} días para el viaje.` : "")),
    h("div.stats",
      h("div.stat", h("b", String(streak())), h("span", "días seguidos")),
      h("div.stat", h("b", `${doneCount()}/${PLAN_DAYS}`), h("span", "sesiones")),
      h("div.stat", h("b", String(Object.keys(state.cards).length)), h("span", "frases aprendidas")),
      h("div.stat", h("b", String(dueCards(999).length)), h("span", "para repasar hoy"))),
    h("div.card.hero",
      h("p.label", `Día ${day + 1} · Semana ${Math.floor(day / 7) + 1}`),
      h("h2", unit.title), h("p.sub", `${unit.es}. ${unit.goal}`),
      h("ol.steps", steps.map((s) => h("li", s.title, h("span", ` · ${s.min} min`)))),
      h("button.btn.primary.xl", { onclick: () => go(`#/sesion/${day}`) },
        doneToday ? "Hacer otra sesión" : state.progress?.day === day && state.progress.date === today() ? "Continuar la sesión" : "Empezar la sesión"),
      h("p.hint", `Unos ${steps.reduce((a, s) => a + s.min, 0)} minutos. ${doneToday ? "La de hoy ya está hecha: lo que hagas ahora es extra." : ""}`)),
    h("p.hint.center", pace),
    courseCard(),
    h("h3", "Tu plan de 8 semanas"), grid,
  );
}

function viewSesion(day) {
  if (!(day >= 0 && day < PLAN_DAYS)) return go("#/hoy");
  const steps = buildSteps(day);
  const prog = state.progress?.day === day && state.progress.date === today() ? state.progress : (state.progress = { day, date: today(), ids: [] });
  const bar = h("div.bar");
  const title = h("h2");
  const body = h("div.step");
  view.replaceChildren(
    h("header.top.row", h("button.btn.ghost", { onclick: () => go("#/hoy") }, "← Salir"),
      h("p.sub", `Día ${day + 1} · ${unitOf(day).title}`)),
    bar, title, body);

  const run = () => {
    voice.stopSpeaking();
    const idx = steps.findIndex((s) => !prog.ids.includes(s.id));
    bar.replaceChildren(...steps.map((s, i) => h(`span${prog.ids.includes(s.id) ? ".done" : i === idx ? ".now" : ""}`)));
    if (idx < 0) return finish();
    const s = steps[idx];
    title.textContent = s.title;
    window.scrollTo(0, 0);
    s.run(body, () => { prog.ids.push(s.id); save(); run(); });
  };
  const finish = () => {
    if (!state.done[day]) state.done[day] = today();
    state.activity[today()] = true;
    state.progress = null;
    save();
    title.textContent = "";
    body.replaceChildren(h("div.card.big.center",
      h("p.emoji", "🎉"), h("h2", "Bravissimo!"),
      h("p", `Día ${day + 1} completado. Llevas ${streak()} ${streak() === 1 ? "día" : "días seguidos"}.`),
      h("p.hint", "Reto de hoy: dile a tu novia una de las frases nuevas, en voz alta."),
      h("button.btn.primary.xl", { onclick: () => go("#/hoy") }, "Volver al inicio")));
  };
  save();
  run();
}

function viewSituaciones() {
  const detail = h("div");
  const open = (make) => { detail.replaceChildren(h("button.btn.ghost", { onclick: () => route() }, "← Volver"), h("div.step", {}, [])); make(detail.lastChild); list.hidden = true; window.scrollTo(0, 0); };
  const list = h("div", UNITS.map((u, w) =>
    h("div.card", h("p.label", `Semana ${w + 1}`), h("h2", u.title), h("p.sub", u.goal),
      h("div.chips",
        u.dialogues.map((d) => h("div.chipgroup", h("span", `💬 ${d.title}`),
          DIALOGUE_MODES.map(([name], m) => h("button.chip", { onclick: () => open((el) => runDialogue(el, d, m, () => route())) }, name)))),
        h("div.chipgroup", h("span", "💡 Claves"),
          u.claves.map((c) => h("button.chip", { onclick: () => open((el) => runClave(el, c, () => route())) }, c.title)))))));
  view.replaceChildren(h("header.top", h("h1", "Situaciones"), h("p.sub", "Practica cualquier diálogo o clave cuando quieras.")), list, detail);
}

function viewFrases() {
  const search = h("input.input", { type: "search", placeholder: "Buscar en italiano o español…", oninput: () => render() });
  const listEl = h("div");
  const it = h("input.input", { type: "text", placeholder: "En italiano", autocapitalize: "off" });
  const es = h("input.input", { type: "text", placeholder: "En español" });
  const addBox = h("div.card", h("p.label", "Añadir una frase tuya"),
    h("p.hint", "¿Has oído algo en casa de tu novia que quieres recordar? Añádelo y entrará en tu repaso."),
    h("div.row", it, es, h("button.btn.primary", { onclick: () => {
      if (!it.value.trim() || !es.value.trim()) return;
      state.custom.push({ it: it.value.trim(), es: es.value.trim() });
      learn(`c-${state.custom.length - 1}`); save(); it.value = es.value = ""; render();
    } }, "Añadir")));

  const row = (p) => h("div.prow", { onclick: () => voice.speak(p.it) },
    h("div", h("p.it", p.it), h("p.es", p.es)),
    h("span.tag" + (state.cards[p.id] ? ".on" : ""), state.cards[p.id] ? "aprendida" : "nueva"));
  const render = () => {
    const q = search.value.trim().toLowerCase();
    const match = (p) => !q || p.it.toLowerCase().includes(q) || p.es.toLowerCase().includes(q);
    const groups = [
      ["Mis frases", state.custom.map((_, i) => phrase(`c-${i}`))],
      ...UNITS.map((u, w) => [`Semana ${w + 1} · ${u.title}`, u.phrases.map((_, i) => phrase(`${w}-${i}`))]),
    ];
    listEl.replaceChildren(...groups.map(([name, ps]) => {
      const hits = ps.filter(match);
      return hits.length ? h("section", h("h3", name), h("div.card.flush", hits.map(row))) : null;
    }).filter(Boolean));
  };
  const due = dueCards(40);
  view.replaceChildren(
    h("header.top", h("h1", "Frases"), h("p.sub", "Toca cualquier frase para oírla.")),
    due.length ? h("button.btn.primary", { onclick: () => {
      const el = h("div.step"); view.replaceChildren(h("button.btn.ghost", { onclick: () => route() }, "← Volver"), el);
      runReview(el, due, () => { state.activity[today()] = true; save(); route(); });
    } }, `Repasar ahora (${due.length})`) : null,
    addBox, search, listEl);
  render();
}

function viewTutor() {
  if (!state.settings.apiKey) {
    return view.replaceChildren(
      h("header.top", h("h1", "Tutor de conversación")),
      h("div.card.prose",
        h("p", "El tutor es una IA que hace de suegra, de tío o de camarero: te habla en italiano, tú respondes hablando y te corrige con suavidad. Es la forma más directa de perder la vergüenza antes del viaje."),
        h("p", "Para activarlo necesitas una clave de API de Anthropic. Cada conversación de diez minutos cuesta unos céntimos."),
        h("button.btn.primary", { onclick: () => go("#/ajustes") }, "Activarlo en Ajustes")));
  }
  const scenarios = [FREE_SCENARIO, ...UNITS.map((u) => u.tutor)];
  const body = h("div.step");
  const pick = h("div.card", h("p.label", "Elige una situación"),
    h("div.chips", scenarios.map((s) => h("button.chip.lg", { onclick: () => { pick.hidden = true; runChat(body, s, null); } }, s.title))));
  view.replaceChildren(h("header.top", h("h1", "Tutor de conversación"), h("p.sub", "Habla sin miedo: aquí nadie te juzga.")), pick, body);
}

function viewAjustes() {
  const s = state.settings;
  const field = (label, control, hint) => h("label.field", h("span", label), control, hint && h("small", hint));
  const bind = (el, set) => { el.addEventListener("change", () => { set(el.type === "checkbox" ? el.checked : el.value); save(); }); return el; };

  const voices = voice.italianVoices();
  const voiceSel = bind(h("select.input", h("option", { value: "" }, "Automática"),
    voices.map((v) => h("option", { value: v.voiceURI, selected: v.voiceURI === s.voice }, v.name))), (v) => (s.voice = v));
  const rate = bind(h("input", { type: "range", min: "0.6", max: "1.1", step: "0.05", value: s.rate }), (v) => (s.rate = +v));
  const model = bind(h("select.input",
    [["claude-opus-5-5", "Claude Opus 5.5 (recomendado)"], ["claude-sonnet-5-5", "Claude Sonnet 5.5 (más barato)"], ["claude-haiku-5-5", "Claude Haiku 5.5 (el más barato)"]]
      .map(([id, name]) => h("option", { value: id, selected: id === s.model }, name))), (v) => (s.model = v));
  const file = h("input", { type: "file", accept: "application/json", hidden: true, onchange: async () => {
    try { replaceState(JSON.parse(await file.files[0].text())); route(); } catch { alert("Ese archivo no es una copia válida."); }
  } });

  view.replaceChildren(
    h("header.top", h("h1", "Ajustes")),
    h("div.card", h("h3", "Tú y el viaje"),
      field("Tu nombre", bind(h("input.input", { type: "text", value: state.name }), (v) => (state.name = v.trim()))),
      field("Fecha del viaje", bind(h("input.input", { type: "date", value: state.tripDate }), (v) => (state.tripDate = v || state.tripDate)))),
    h("div.card", h("h3", "Voz"),
      field("Voz italiana", voiceSel, voices.length
        ? "Para una voz más natural, descarga una voz «mejorada» en Ajustes del iPad › Accesibilidad › Contenido leído › Voces › Italiano."
        : "Este dispositivo no tiene voces italianas instaladas."),
      field("Velocidad", rate, "Empieza despacio y súbela cada semana."),
      h("button.btn.ghost", { onclick: () => voice.speak("Ciao! Sono la tua voce italiana. Come stai oggi?") }, "🔊 Probar")),
    h("div.card", h("h3", "Tutor de IA"),
      h("p.hint", "Crea una clave en console.anthropic.com, ponle un límite de gasto y pégala aquí. Se guarda solo en este iPad y se usa únicamente para hablar con el tutor."),
      field("Clave de API", bind(h("input.input", { type: "password", value: s.apiKey, placeholder: "sk-ant-…", autocomplete: "off" }), (v) => (s.apiKey = v.trim()))),
      field("Modelo", model),
      field("Entrenar el oído", h("div.row", bind(h("input", { type: "checkbox", checked: s.hideText }), (v) => (s.hideText = v)), h("span", "Ocultar el texto del tutor hasta que lo pida")))),
    h("div.card", h("h3", "Tus datos"),
      h("p.hint", "Tu progreso se guarda solo en este dispositivo. Haz una copia de vez en cuando."),
      h("div.row",
        h("button.btn.ghost", { onclick: () => {
          const a = h("a", { href: URL.createObjectURL(new Blob([JSON.stringify(state)], { type: "application/json" })), download: `learnit-${today()}.json` });
          a.click();
        } }, "Exportar copia"),
        h("button.btn.ghost", { onclick: () => file.click() }, "Importar copia"), file,
        h("button.btn.danger", { onclick: () => { if (confirm("¿Borrar todo tu progreso? No se puede deshacer.")) { resetState(); route(); } } }, "Borrar progreso"))),
  );
}

// ---------- Curso por niveles ----------
// Recorre una lista de ejercicios y devuelve la proporción de aciertos.
function runExercises(el, list, done) {
  let i = 0, right = 0;
  const advance = (ok) => { if (ok) right++; i++; show(); };
  const show = () => {
    if (i >= list.length) return done(right / list.length);
    const [type, prompt, ...rest] = list[i];
    const count = h("p.count", `${i + 1} de ${list.length}`);
    if (type === "c") {
      const opts = shuffle(rest);
      return el.replaceChildren(count, quizCard({ q: prompt, opts, a: opts.indexOf(rest[0]) }, advance));
    }
    const alts = rest[0].split("|");
    const fb = h("div.fb");
    const verdict = (ok, say) => {
      check.hidden = true;
      fb.replaceChildren(h(`p.verdict.${ok ? "ok" : "no"}`, ok ? "Correcto" : "No del todo"),
        h("p.it", alts[0]), h("button.btn.primary", { onclick: () => advance(ok) }, "Seguir"));
      if (say) voice.speak(alts[0]);
      fb.lastChild.focus();
    };
    let body, check;
    if (type === "o") {
      const words = alts[0].split(" ");
      let pool = shuffle(words.map((w, k) => ({ w, k })));
      if (words.length > 1 && pool.every((p, k) => p.k === k)) pool.reverse();
      const picked = [];
      const answer = h("div.words.answer-line"), bank = h("div.words");
      const draw = () => {
        answer.replaceChildren(...picked.map((p) => h("button.word", { onclick: () => { if (check.hidden) return; picked.splice(picked.indexOf(p), 1); pool.push(p); draw(); } }, p.w)));
        bank.replaceChildren(...pool.map((p) => h("button.word", { onclick: () => { pool.splice(pool.indexOf(p), 1); picked.push(p); draw(); } }, p.w)));
        check.disabled = pool.length > 0;
      };
      check = h("button.btn.primary", { onclick: () => verdict(voice.normalize(picked.map((p) => p.w).join(" ")) === voice.normalize(alts[0]), true) }, "Comprobar");
      body = [h("p.label", "Ordena las palabras"), h("p.q", prompt), answer, bank, check, fb];
      draw();
    } else {
      const input = h("input.input", { type: "text", placeholder: type === "g" ? "Escribe lo que falta…" : "Escribe en italiano…", autocapitalize: "off", autocorrect: "off", spellcheck: "false",
        onkeydown: (e) => e.key === "Enter" && !check.hidden && check.click() });
      check = h("button.btn.primary", { onclick: () => {
        const typed = voice.normalize(input.value);
        if (!typed) return input.focus();
        input.disabled = true;
        const ok = type === "g"
          ? alts.some((a) => voice.normalize(a) === typed)
          : alts.some((a) => voice.compare(a, input.value).score >= 0.9 && typed.split(" ").length <= voice.normalize(a).split(" ").length + 1);
        verdict(ok, type === "t");
      } }, "Comprobar");
      const dictate = type === "t" && voice.canRecognize() && h("button.btn.ghost", { onclick: async (e) => {
        e.target.textContent = "Te escucho…";
        try { const alt = await voice.listen(); if (alt.length) input.value = alt[0]; } catch {}
        e.target.textContent = "🎤 Dilo";
      } }, "🎤 Dilo");
      body = [h("p.label", type === "g" ? "Completa" : "Traduce al italiano"), h("p.q", prompt), h("div.row", input, dictate), check, fb];
      setTimeout(() => input.focus(), 50);
    }
    el.replaceChildren(count, h("div.card", body));
  };
  show();
}

const pct = (x) => `${Math.round(x * 100)} %`;
const markActive = () => { state.activity[today()] = true; save(); };

function courseCard() {
  const n = nextLesson();
  if (!n) return h("div.card", h("p.label", "Curso"), h("p", "Has superado todos los temas del curso. Repasa con los exámenes de nivel y el entrenador de verbos."));
  const lv = LEVELS[n.L], les = lv.lessons[n.i];
  return h("div.card",
    h("p.label", `Curso · Nivel ${lv.id} · Tema ${n.i + 1} de ${lv.lessons.length}`),
    h("h2", les.t), h("p.sub", `Teoría, ${les.vocab.length} palabras y ${les.ex.length} ejercicios. Unos 15 minutos.`),
    h("div.row", h("button.btn.primary", { onclick: () => go(`#/curso/${lv.id}/${n.i}`) }, "Estudiar este tema"),
      state.course.placed == null && h("button.btn.ghost", { onclick: () => go("#/curso/nivel") }, "Hacer la prueba de nivel")));
}

function viewCurso() {
  const next = nextLesson();
  view.replaceChildren(
    h("header.top", h("h1", "Curso"), h("p.sub", "El libro de italiano, resumido: pocos temas por nivel, cada uno con su teoría, su vocabulario y sus ejercicios.")),
    state.course.placed == null
      ? h("div.card.hero", h("p.label", "Empieza por aquí"), h("h2", "Prueba de nivel"),
          h("p.sub", "Unas pocas preguntas por nivel para no hacerte estudiar lo que ya sabes. Cinco minutos."),
          h("button.btn.primary", { onclick: () => go("#/curso/nivel") }, "Hacer la prueba"))
      : h("p.hint", `Tu nivel de partida es ${LEVELS[state.course.placed].id}. `, h("button.link", { onclick: () => go("#/curso/nivel") }, "Repetir la prueba")),
    h("div.card", h("p.label", "Entrenador"), h("h2", "Verbos"), h("p.sub", "Diez conjugaciones por ronda, en los tiempos que elijas."),
      h("button.btn.ghost", { onclick: () => go("#/curso/verbos") }, "Practicar verbos")),
    ...LEVELS.map((lv, L) => {
      const passed = lv.lessons.filter((_, i) => lessonPassed(L, i)).length;
      const skipped = L < startLevel();
      const exam = state.course.exams[lv.id];
      return h("section",
        h("h3", `Nivel ${lv.id} · ${lv.name}`),
        h("p.hint", skipped ? "Convalidado por la prueba de nivel. Puedes repasarlo cuando quieras." : lv.desc),
        h("div.card.flush",
          lv.lessons.map((les, i) => {
            const sc = lessonScore(L, i), isNext = next && next.L === L && next.i === i;
            return h("div.prow" + (isNext ? ".next" : ""), { onclick: () => go(`#/curso/${lv.id}/${i}`) },
              h("div", h("p.it", `${i + 1}. ${les.t}`), h("p.es", les.vocabTitle)),
              h("span.tag" + (lessonPassed(L, i) ? ".on" : ""), sc == null ? (isNext ? "siguiente" : skipped ? "convalidado" : "pendiente") : pct(sc)));
          }),
          h("div.prow", { onclick: () => go(`#/curso/${lv.id}/examen`) },
            h("div", h("p.it", `Examen de nivel ${lv.id}`), h("p.es", `${passed} de ${lv.lessons.length} temas superados`)),
            h("span.tag" + (exam >= PASS_EXAM ? ".on" : ""), exam == null ? "examen" : pct(exam)))));
    }),
    h("div.card", h("p.label", "Nivel C1"), h("p.sub", "A partir de B2 se avanza con italiano real: series, lectura y conversación. Usa el tutor de IA para practicar y corregirte.")),
  );
}

function viewCursoDetalle(arg, arg2) {
  if (arg === "nivel") return viewPrueba();
  if (arg === "verbos") return viewVerbos();
  const L = LEVELS.findIndex((lv) => lv.id === arg);
  if (L < 0) return go("#/curso");
  if (arg2 === "examen") return viewExamen(L);
  const i = Number(arg2);
  if (!LEVELS[L].lessons[i]) return go("#/curso");
  viewLeccion(L, i);
}

function viewLeccion(L, i) {
  const lv = LEVELS[L], les = lv.lessons[i];
  const bar = h("div.bar"), body = h("div.step");
  const stage = (n) => { bar.replaceChildren(...[0, 1, 2].map((k) => h(`span${k < n ? ".done" : k === n ? ".now" : ""}`))); window.scrollTo(0, 0); };
  view.replaceChildren(
    h("header.top.row", h("button.btn.ghost", { onclick: () => go("#/curso") }, "← Curso"), h("p.sub", `Nivel ${lv.id} · Tema ${i + 1}`)),
    bar, h("h2", les.t), body);

  const theory = () => {
    stage(0);
    body.replaceChildren(h("div.card.prose", h("div", { html: les.body })),
      h("button.btn.primary", { onclick: vocab }, "Vocabulario"));
  };
  const vocab = () => {
    stage(1);
    body.replaceChildren(
      h("p.hint", `${les.vocabTitle}. Toca cada palabra, escúchala y repítela en voz alta. Entrarán en tu repaso diario.`),
      h("div.card.flush", les.vocab.map(([it, es]) => h("div.prow", { onclick: () => voice.speak(it) }, h("div", h("p.it", it), h("p.es", es)), h("span", "🔊")))),
      h("div.row", h("button.btn.ghost", { onclick: theory }, "Volver a la teoría"),
        h("button.btn.primary", { onclick: () => { les.vocab.forEach((_, k) => learn(`v-${L}-${i}-${k}`)); save(); exercises(); } }, "Ejercicios")));
  };
  const exercises = () => {
    stage(2);
    runExercises(body, les.ex, (score) => {
      state.course.lessons[`${L}-${i}`] = Math.max(score, lessonScore(L, i) ?? 0);
      markActive();
      stage(3);
      const ok = score >= PASS_LESSON, n = nextLesson();
      body.replaceChildren(h("div.card.big.center",
        h("p.emoji", ok ? "✅" : "💪"), h("h2", ok ? "Tema superado" : "Casi"),
        h("p", `Has acertado el ${pct(score)}. ${ok ? "" : `Necesitas un ${pct(PASS_LESSON)} para darlo por superado: repasa la teoría y repite.`}`),
        h("div.row.center",
          h("button.btn.ghost", { onclick: theory }, "Repasar la teoría"),
          h("button.btn.ghost", { onclick: exercises }, "Repetir ejercicios"),
          ok && n && h("button.btn.primary", { onclick: () => go(`#/curso/${LEVELS[n.L].id}/${n.i}`) }, "Siguiente tema"),
          h("button.btn" + (ok && n ? ".ghost" : ".primary"), { onclick: () => go("#/curso") }, "Volver al curso"))));
    });
  };
  theory();
}

function viewExamen(L) {
  const lv = LEVELS[L], body = h("div.step");
  const list = shuffle(lv.lessons.flatMap((les) => shuffle(les.ex).slice(0, 3))).slice(0, 15);
  view.replaceChildren(
    h("header.top.row", h("button.btn.ghost", { onclick: () => go("#/curso") }, "← Curso"), h("p.sub", `Examen de nivel ${lv.id}`)), body);
  body.replaceChildren(h("div.card.big",
    h("h2", `Examen de nivel ${lv.id}`),
    h("p", `${list.length} preguntas de todos los temas del nivel. Lo superas con un ${pct(PASS_EXAM)}.`),
    h("button.btn.primary", { onclick: () => runExercises(body, list, (score) => {
      state.course.exams[lv.id] = Math.max(score, state.course.exams[lv.id] ?? 0);
      markActive();
      const ok = score >= PASS_EXAM;
      body.replaceChildren(h("div.card.big.center",
        h("p.emoji", ok ? "🏅" : "💪"), h("h2", ok ? `Nivel ${lv.id} superado` : "Todavía no"),
        h("p", `Has acertado el ${pct(score)}. ${ok ? "" : "Repasa los temas con peor nota y vuelve a intentarlo."}`),
        h("button.btn.primary", { onclick: () => go("#/curso") }, "Volver al curso")));
    }) }, "Empezar")));
}

function viewPrueba() {
  const body = h("div.step");
  const PER_LEVEL = 6, NEED = 5;
  view.replaceChildren(
    h("header.top.row", h("button.btn.ghost", { onclick: () => go("#/curso") }, "← Curso"), h("p.sub", "Prueba de nivel")), body);
  const finish = (L) => {
    state.course.placed = L; save();
    body.replaceChildren(h("div.card.big.center",
      h("p.emoji", "🎯"), h("h2", `Empiezas en el nivel ${LEVELS[L].id}`),
      h("p", L === 0 ? "Empezamos por los cimientos. Irás rápido: mucho te sonará del español y del catalán."
        : `Los niveles anteriores quedan convalidados, pero siguen abiertos por si quieres repasar algo.`),
      h("button.btn.primary", { onclick: () => go("#/curso") }, "Ver mi curso")));
  };
  const level = (L) => {
    const list = shuffle(LEVELS[L].lessons.flatMap((les) => les.ex.filter((e) => e[0] === "c"))).slice(0, PER_LEVEL);
    body.replaceChildren(h("p.label", `Bloque ${L + 1} de ${LEVELS.length} · Nivel ${LEVELS[L].id}`), h("div.step"));
    runExercises(body.lastChild, list, (score) => {
      if (Math.round(score * list.length) < NEED || L === LEVELS.length - 1) finish(L);
      else level(L + 1);
    });
  };
  body.replaceChildren(h("div.card.big",
    h("h2", "¿Por dónde empiezas?"),
    h("p", `Hasta ${LEVELS.length} bloques de ${PER_LEVEL} preguntas, de más fácil a más difícil. Si aciertas ${NEED} o más pasas al siguiente; si no, ese es tu nivel de partida.`),
    h("p.hint", "No adivines: si no lo sabes, falla. Así el curso empieza donde te toca."),
    h("button.btn.primary", { onclick: () => level(0) }, "Empezar")));
}

function viewVerbos() {
  const active = new Set(TENSES.filter((t) => t.level <= Math.max(1, nextLesson()?.L ?? LEVELS.length)).map((t) => t.id));
  const body = h("div.step");
  const chips = h("div.chipgroup", TENSES.map((t) => {
    const c = h("button.chip" + (active.has(t.id) ? "" : ".off"), { onclick: () => {
      if (active.has(t.id) && active.size > 1) active.delete(t.id); else active.add(t.id);
      c.classList.toggle("off", !active.has(t.id));
    } }, t.name);
    return c;
  }));
  view.replaceChildren(
    h("header.top.row", h("button.btn.ghost", { onclick: () => go("#/curso") }, "← Curso"), h("p.sub", "Entrenador de verbos")),
    h("div.card", h("p.label", "Tiempos que quieres practicar"), chips), body);

  const table = (v, tense) => h("table", conjugate(v, tense).map((f, p) => h("tr", h("td", PERSONS[p]), h("td", f))));
  const round = () => {
    let n = 0, right = 0;
    const TOTAL = 10;
    const ask = () => {
      if (n >= TOTAL) {
        markActive();
        return body.replaceChildren(h("div.card.big.center", h("p.emoji", right >= 8 ? "🔥" : "💪"), h("h2", `${right} de ${TOTAL}`),
          h("button.btn.primary", { onclick: round }, "Otra ronda")));
      }
      const v = VERBS[Math.floor(Math.random() * VERBS.length)];
      const tense = TENSES.filter((t) => active.has(t.id))[Math.floor(Math.random() * active.size)];
      const person = Math.floor(Math.random() * 6);
      const ok = accepted(v, tense.id, person);
      const fb = h("div.fb");
      const input = h("input.input", { type: "text", placeholder: "Escribe la forma…", autocapitalize: "off", autocorrect: "off", spellcheck: "false",
        onkeydown: (e) => e.key === "Enter" && !check.hidden && check.click() });
      const check = h("button.btn.primary", { onclick: () => {
        if (!input.value.trim()) return input.focus();
        const good = ok.some((f) => voice.normalize(f) === voice.normalize(input.value));
        if (good) right++;
        n++; check.hidden = true; input.disabled = true;
        fb.replaceChildren(h(`p.verdict.${good ? "ok" : "no"}`, good ? "Correcto" : "No del todo"), h("p.it", ok[0]),
          h("details", h("summary", `Ver «${v.inf}» completo en ${tense.name.toLowerCase()}`), table(v, tense.id)),
          h("button.btn.primary", { onclick: ask }, "Seguir"));
        voice.speak(ok[0]);
        fb.lastChild.focus();
      } }, "Comprobar");
      body.replaceChildren(h("p.count", `${n + 1} de ${TOTAL}`),
        h("div.card.big", h("p.label", tense.name), h("p.it", v.inf), h("p.es", v.es), h("p.q", PERSONS[person]), input, check, fb));
      setTimeout(() => input.focus(), 50);
    };
    ask();
  };
  round();
}

// ---------- Navegación ----------
const ROUTES = { hoy: viewHoy, curso: viewCurso, situaciones: viewSituaciones, frases: viewFrases, tutor: viewTutor, ajustes: viewAjustes };

function route() {
  voice.stopSpeaking();
  voice.stopListening();
  const [, name = "hoy", arg, arg2] = location.hash.split("/");
  document.querySelectorAll("#nav a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === `#/${name === "sesion" ? "hoy" : name}`));
  window.scrollTo(0, 0);
  if (name === "sesion") viewSesion(Number(arg));
  else if (name === "curso" && arg) viewCursoDetalle(arg, arg2);
  else (ROUTES[name] || viewHoy)();
}

window.addEventListener("hashchange", route);
route();

if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});
