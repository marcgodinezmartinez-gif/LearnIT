// Voz: síntesis (la app habla), reconocimiento (te escucha) y grabación (te oyes).
import { state, save } from "./store.js";

// ---- Síntesis ----
const synth = window.speechSynthesis;
let voices = [];
const loadVoices = () => { voices = synth ? synth.getVoices().filter((v) => v.lang.toLowerCase().startsWith("it")) : []; };
if (synth) { loadVoices(); synth.addEventListener?.("voiceschanged", loadVoices); }

export const italianVoices = () => { loadVoices(); return voices; };

function pickVoice() {
  loadVoices();
  return (
    voices.find((v) => v.voiceURI === state.settings.voice) ||
    voices.find((v) => /premium|enhanced|mejorada|siri/i.test(v.name)) ||
    voices.find((v) => v.lang === "it-IT") ||
    voices[0]
  );
}

let speakToken = 0;
export function stopSpeaking() { speakToken++; synth?.cancel(); }

export function speak(text, { rate } = {}) {
  if (!synth) return Promise.resolve();
  stopSpeaking();
  const token = speakToken;
  return new Promise((resolve) => {
    const u = new SpeechSynthesisUtterance(text.replace(/[«»]/g, ""));
    u.lang = "it-IT";
    const v = pickVoice();
    if (v) u.voice = v;
    u.rate = rate ?? state.settings.rate;
    let finished = false;
    const end = () => { if (!finished) { finished = true; clearInterval(watch); resolve(); } };
    u.onend = u.onerror = end;
    // Algunos navegadores no avisan al terminar: vigilamos el estado por si acaso.
    let idle = 0;
    const watch = setInterval(() => {
      if (token !== speakToken) return end();
      idle = synth.speaking || synth.pending ? 0 : idle + 1;
      if (idle >= 3) end();
    }, 250);
    synth.speak(u);
  });
}

// ---- Reconocimiento ----
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
export const canRecognize = () => !!SR && !state.settings.noSR;

let activeRec = null;
export function stopListening() { try { activeRec?.stop(); } catch {} }

// Devuelve las alternativas que ha entendido (puede ser una lista vacía).
export function listen() {
  return new Promise((resolve, reject) => {
    stopSpeaking();
    const r = new SR();
    activeRec = r;
    r.lang = "it-IT";
    r.interimResults = false;
    r.maxAlternatives = 3;
    let settled = false;
    r.onresult = (e) => {
      settled = true;
      const last = e.results[e.results.length - 1];
      resolve([...last].map((a) => a.transcript));
    };
    r.onerror = (e) => {
      if (settled) return;
      settled = true;
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        state.settings.noSR = true; // pasamos al modo «grábate y compárate»
        save();
        reject(new Error("denied"));
      } else if (e.error === "no-speech" || e.error === "aborted") resolve([]);
      else reject(new Error(e.error));
    };
    r.onend = () => { if (!settled) resolve([]); };
    try { r.start(); } catch (err) { reject(err); }
  });
}

// ---- Grabación ----
export const canRecord = () => !!(navigator.mediaDevices?.getUserMedia && window.MediaRecorder);

export async function startRecording() {
  stopSpeaking();
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const rec = new MediaRecorder(stream);
  const chunks = [];
  rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
  rec.start();
  return {
    stop: () =>
      new Promise((resolve) => {
        rec.onstop = () => {
          stream.getTracks().forEach((t) => t.stop());
          resolve(URL.createObjectURL(new Blob(chunks, { type: rec.mimeType })));
        };
        rec.stop();
      }),
  };
}

// ---- Comparar lo dicho con el modelo ----
const tokens = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim().split(" ").filter(Boolean);

export const normalize = (s) => tokens(s).join(" ");

function close(a, b) {
  if (a === b) return true;
  if (a.length < 4 || Math.abs(a.length - b.length) > 1) return false;
  // distancia de edición <= 1
  let i = 0, j = 0, edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++edits > 1) return false;
    if (a.length > b.length) i++; else if (b.length > a.length) j++; else { i++; j++; }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

// Devuelve { score 0..1, words: [{ text, ok }] } respecto a la frase modelo.
export function compare(target, heardAlternatives) {
  const alts = [].concat(heardAlternatives).filter(Boolean);
  let best = null;
  for (const heard of alts.length ? alts : [""]) {
    const pool = tokens(heard);
    const used = new Set();
    let total = 0, hit = 0;
    const words = target.split(/\s+/).map((text) => {
      const ts = tokens(text);
      if (!ts.length) return { text, ok: true };
      let ok = true;
      for (const t of ts) {
        total++;
        const k = pool.findIndex((p, idx) => !used.has(idx) && close(t, p));
        if (k >= 0) { used.add(k); hit++; } else ok = false;
      }
      return { text, ok };
    });
    const res = { score: total ? hit / total : 0, words, heard };
    if (!best || res.score > best.score) best = res;
  }
  return best;
}
