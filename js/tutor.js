// Tutor de conversación con Claude. La clave de API se guarda solo en este dispositivo
// y las peticiones salen directamente del navegador a la API de Anthropic.
import { state } from "./store.js";

const SDK_URL = "https://esm.sh/@anthropic-ai/sdk";
const SEPARATOR = "###";

let sdk = null;
let client = null;
let clientKey = "";

async function getClient() {
  if (!sdk) sdk = (await import(SDK_URL)).default;
  if (!client || clientKey !== state.settings.apiKey) {
    clientKey = state.settings.apiKey;
    client = new sdk({ apiKey: clientKey, dangerouslyAllowBrowser: true });
  }
  return client;
}

function rolePrompt(scenario) {
  const who = state.name ? `, called ${state.name}` : "";
  return `You are a conversation partner inside an Italian speaking-practice app.

About the learner: a native Spanish and Catalan speaker${who}. He understands Italian well but is shy about speaking it. At the end of January he visits his Italian girlfriend's family and wants to hold real conversations with them. What he needs most is many low-pressure turns of actually speaking, so the purpose of every reply is to keep him talking.

Your role in this scene: ${scenario.role}

How to speak: natural, neutral, everyday Italian, the way a warm person really talks, at roughly B1 level. Your replies are read aloud by a text-to-speech voice and he answers by voice, so keep each reply to one to three short sentences, with no emoji, lists or stage directions, and end with a question or prompt that invites him to say more. Stay in character and in Italian even if he switches to Spanish or Catalan; if he is stuck or asks how to say something, give him the Italian words briefly, in character, and carry on. His messages come from speech recognition, so ignore punctuation, capitalization and oddly transcribed words that were probably right when spoken.

Format every reply exactly like this: your in-character Italian reply, then a line containing only ${SEPARATOR}, then a short note in Spanish for the learner. The note corrects the single most important mistake in his last message: show the corrected Italian and say in a few words why (calques from Spanish or Catalan are the usual cause). If his last message was fine, or for your opening line, the note is just OK.`;
}

async function call(system, messages) {
  const c = await getClient();
  const params = {
    model: state.settings.model,
    max_tokens: 16000,
    output_config: { effort: "low" },
    system,
    messages,
  };
  let res;
  try {
    // Si un filtro de seguridad rechazara la petición, la API la reintenta sola en otro modelo.
    res = await c.beta.messages.create({ ...params, betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" });
  } catch (err) {
    if (!(err instanceof sdk.BadRequestError)) throw err;
    res = await c.messages.create(params); // modelos sin soporte de fallbacks
  }
  if (res.stop_reason === "refusal") throw new Error("El tutor no ha podido responder a eso. Prueba con otra frase.");
  return res.content.filter((b) => b.type === "text").map((b) => b.text).join("").trim();
}

export function explainError(err) {
  if (sdk) {
    if (err instanceof sdk.AuthenticationError) return "La clave de API no es válida. Revísala en Ajustes.";
    if (err instanceof sdk.PermissionDeniedError) return "Tu clave no tiene permiso para usar este modelo. Prueba con otro en Ajustes.";
    if (err instanceof sdk.NotFoundError) return "El modelo elegido no está disponible para tu cuenta. Cámbialo en Ajustes.";
    if (err instanceof sdk.RateLimitError) return "Demasiadas peticiones seguidas. Espera unos segundos y reintenta.";
    if (err instanceof sdk.APIConnectionError) return "No hay conexión con el tutor. Comprueba internet y reintenta.";
    if (err instanceof sdk.APIError) return `El tutor ha devuelto un error (${err.status ?? "?"}). Reintenta en un momento.`;
  }
  if (/import|fetch|module/i.test(String(err?.message))) return "No se ha podido cargar el tutor. Comprueba la conexión a internet.";
  return err?.message || "Algo ha fallado. Reintenta.";
}

export const OPENING = "(Inizia tu la conversazione.)";

// history: [{ role, content }] — los turnos del tutor se guardan tal cual llegaron.
export async function tutorReply(scenario, history) {
  const raw = await call(rolePrompt(scenario), history);
  const [reply, note = ""] = raw.split(SEPARATOR).map((s) => s.trim());
  return { raw, reply, note: /^ok\.?$/i.test(note) ? "" : note };
}

export async function tutorFeedback(scenario, history) {
  const transcript = history
    .filter((m) => m.content !== OPENING)
    .map((m) => `${m.role === "user" ? "Learner" : "Partner"}: ${m.content.split(SEPARATOR)[0].trim()}`)
    .join("\n");
  const system = `You are an encouraging Italian coach reviewing a practice conversation. The learner is a native Spanish and Catalan speaker who understands Italian well but is shy about speaking, preparing to visit his Italian girlfriend's family. His lines were transcribed by speech recognition, so ignore punctuation and likely transcription glitches.

Write the feedback in Spanish, as plain text without markdown symbols, in three short parts with these headings on their own lines: "Lo que has hecho bien" (two or three specific things, quoting him), "Para pulir" (the three corrections that matter most, each as: what he said → better version, with a brief reason), and "Frases para la próxima vez" (three natural Italian phrases, with Spanish translation, that would have helped in this conversation). Keep it under 200 words and make it feel like progress.`;
  return call(system, [{ role: "user", content: `Scene: ${scenario.title}\n\n${transcript}` }]);
}
