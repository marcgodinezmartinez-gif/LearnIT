// Estado de la app, guardado en el dispositivo (localStorage).
import { UNITS } from "./content.js";
import { LEVELS, PASS_LESSON } from "./course.js";

const KEY = "learnit.v1";
export const PLAN_DAYS = UNITS.length * 7;

const defaults = () => ({
  v: 1,
  name: "",
  tripDate: "2027-01-29",
  done: {}, // día del plan -> fecha en que se completó
  progress: null, // { day, date, ids: [pasos hechos] }
  cards: {}, // id de frase -> { ivl, ease, reps, due }
  custom: [], // frases propias: { it, es }
  activity: {}, // fecha -> true
  course: { placed: null, lessons: {}, exams: {} }, // nivel inicial, mejor nota por tema y por examen
  settings: { rate: 0.9, voice: "", apiKey: "", model: "claude-opus-5-5", hideText: false, noSR: false },
});

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    if (raw && raw.v === 1) {
      const d = defaults();
      return { ...d, ...raw, settings: { ...d.settings, ...raw.settings }, course: { ...d.course, ...raw.course } };
    }
  } catch {}
  return defaults();
}

export let state = load();
export const save = () => localStorage.setItem(KEY, JSON.stringify(state));
export function replaceState(next) {
  const d = defaults();
  state = { ...d, ...next, settings: { ...d.settings, ...(next.settings || {}) }, course: { ...d.course, ...(next.course || {}) } };
  save();
}
export function resetState() {
  state = defaults();
  save();
}

// ---- Fechas (siempre en hora local) ----
export const dateStr = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
export const today = () => dateStr();
export function addDays(str, n) {
  const [y, m, d] = str.split("-").map(Number);
  return dateStr(new Date(y, m - 1, d + n));
}
export function daysBetween(a, b) {
  const p = (s) => { const [y, m, d] = s.split("-").map(Number); return Date.UTC(y, m - 1, d); };
  return Math.round((p(b) - p(a)) / 86400000);
}

// ---- Frases ----
export function phrase(id) {
  if (id.startsWith("c-")) {
    const c = state.custom[+id.slice(2)];
    return c ? { id, it: c.it, es: c.es } : null;
  }
  if (id.startsWith("v-")) {
    const [, L, l, i] = id.split("-").map(Number);
    const w = LEVELS[L]?.lessons[l]?.vocab[i];
    return w ? { id, it: w[0], es: w[1] } : null;
  }
  const [u, i] = id.split("-").map(Number);
  const p = UNITS[u]?.phrases[i];
  return p ? { id, it: p[0], es: p[1], note: p[2], unit: u } : null;
}

// ---- Repaso espaciado ----
const MAX_IVL = 21; // el plan dura dos meses: nada debe desaparecer más de tres semanas

export function learn(id) {
  if (!state.cards[id]) state.cards[id] = { ivl: 0, ease: 2.3, reps: 0, due: addDays(today(), 1) };
}

// q: 0 = otra vez, 1 = difícil, 2 = bien, 3 = fácil
export function grade(id, q) {
  const c = state.cards[id] || (state.cards[id] = { ivl: 0, ease: 2.3, reps: 0, due: today() });
  if (q === 0) {
    c.reps = 0; c.ivl = 0; c.ease = Math.max(1.5, c.ease - 0.2);
    c.due = today();
  } else {
    if (q === 1) { c.ivl = Math.max(1, Math.round(c.ivl * 1.2)); c.ease = Math.max(1.5, c.ease - 0.15); }
    if (q === 2) c.ivl = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(c.ivl * c.ease);
    if (q === 3) { c.ivl = c.reps === 0 ? 3 : Math.round(Math.max(c.ivl, 1) * c.ease * 1.3); c.ease += 0.15; }
    c.ivl = Math.min(MAX_IVL, c.ivl);
    c.reps++;
    c.due = addDays(today(), c.ivl);
  }
  save();
}

export function dueCards(limit = 25) {
  const t = today();
  return Object.entries(state.cards)
    .filter(([id, c]) => c.due <= t && phrase(id))
    .sort((a, b) => (a[1].due < b[1].due ? -1 : 1))
    .slice(0, limit)
    .map(([id]) => id);
}

// ---- Progreso ----
export const doneCount = () => Object.keys(state.done).length;
export function currentDay() {
  for (let d = 0; d < PLAN_DAYS; d++) if (!state.done[d]) return d;
  return PLAN_DAYS - 1;
}
export function streak() {
  let d = today(), n = 0;
  if (!state.activity[d]) d = addDays(d, -1);
  while (state.activity[d]) { n++; d = addDays(d, -1); }
  return n;
}

// ---- Curso por niveles ----
export const lessonScore = (L, i) => state.course.lessons[`${L}-${i}`] ?? null;
export const lessonPassed = (L, i) => (lessonScore(L, i) ?? 0) >= PASS_LESSON;
export const startLevel = () => state.course.placed ?? 0;
// Siguiente tema pendiente a partir de tu nivel: { L, i } o null si lo has terminado todo.
export function nextLesson() {
  for (let L = startLevel(); L < LEVELS.length; L++)
    for (let i = 0; i < LEVELS[L].lessons.length; i++) if (!lessonPassed(L, i)) return { L, i };
  return null;
}
