// Prepara la carpeta www/ que Capacitor empaqueta dentro de la app de iOS.
// La versión web no necesita este paso: se sirve tal cual desde la raíz del repositorio.
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const out = "www";
rmSync(out, { recursive: true, force: true });
mkdirSync(`${out}/vendor`, { recursive: true });
for (const item of ["styles.css", "js", "icons"]) cpSync(item, `${out}/${item}`, { recursive: true });
cpSync("node_modules/@capacitor/core/dist/capacitor.js", `${out}/vendor/capacitor.js`);

// En la app no hay manifest ni service worker, y hace falta el puente de Capacitor antes que la app.
const html = readFileSync("index.html", "utf8")
  .replace(/\s*<link rel="manifest"[^>]*>/, "")
  .replace('<script type="module"', '<script src="vendor/capacitor.js"></script>\n  <script type="module"');
if (!html.includes("vendor/capacitor.js")) throw new Error("No se ha podido insertar el puente de Capacitor en index.html");
writeFileSync(`${out}/index.html`, html);
console.log(`Listo: ${out}/`);
