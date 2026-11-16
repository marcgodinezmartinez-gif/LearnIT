// Puente con la app de iOS (Capacitor). En la versión web todo esto queda desactivado.
const cap = window.Capacitor;
const core = window.capacitorExports; // lo carga vendor/capacitor.js solo dentro de la app

export const isNative = !!(cap?.isNativePlatform?.() && core);
const plugin = (name) => (isNative ? core.registerPlugin(name) : null);

export const SpeechRecognition = plugin("SpeechRecognition");
export const LocalNotifications = plugin("LocalNotifications");
export const Preferences = plugin("Preferences");

const REMINDER_ID = 1;

// Programa (o quita, si time está vacío) el recordatorio diario. time = "HH:MM".
export async function setReminder(time) {
  if (!isNative) return false;
  await LocalNotifications.cancel({ notifications: [{ id: REMINDER_ID }] }).catch(() => {});
  if (!time) return true;
  const perm = await LocalNotifications.requestPermissions();
  if (perm.display !== "granted") return false;
  const [hour, minute] = time.split(":").map(Number);
  await LocalNotifications.schedule({
    notifications: [{
      id: REMINDER_ID,
      title: "LearnIT",
      body: "Tu sesión de italiano de hoy te espera.",
      schedule: { on: { hour, minute }, allowWhileIdle: true },
    }],
  });
  return true;
}
