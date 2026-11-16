# LearnIT

App web (PWA) para aprender a hablar italiano en 8 semanas, pensada para un hablante de
español y catalán que entiende bastante pero no se atreve a hablar.

- **Sesión diaria guiada** (30-40 min): repaso hablado, frases nuevas, diálogo, clave u oído, y hablar.
- **8 semanas / 56 días**: 240 frases, 16 diálogos con la familia, 24 claves desde el español y el catalán.
- **Curso por niveles (A1-B2)**: 28 temas con teoría resumida, vocabulario y ejercicios, prueba de nivel, examen por nivel y entrenador de verbos.
- **Voz**: la app habla italiano, te escucha y marca qué palabras se te han entendido.
- **Tutor de IA opcional**: conversación por voz con correcciones (necesita una clave de API de Anthropic).
- Sin servidor ni instalación: el progreso se guarda en el dispositivo y funciona sin conexión (salvo el tutor).

## App de iOS (TestFlight)

La app de iOS es la misma web empaquetada con Capacitor, con reconocimiento de voz nativo,
recordatorio diario y copia del progreso en el almacenamiento del sistema. El proyecto de Xcode
no está en el repositorio: lo genera el flujo `.github/workflows/ios-testflight.yml` en cada compilación.

Configuración, una sola vez:

1. En [App Store Connect](https://appstoreconnect.apple.com) › Apps › **+** › Nueva app: plataforma iOS,
   y un identificador de paquete (bundle ID) nuevo, por ejemplo `com.tunombre.learnit`
   (se registra antes en developer.apple.com › Identifiers).
2. En App Store Connect › Usuarios y acceso › Integraciones › **Claves de API de App Store Connect**:
   crea una clave con rol **Admin** y descarga el archivo `.p8`.
3. En GitHub › Settings › Secrets and variables › Actions:
   - Variables: `BUNDLE_ID` (el identificador del paso 1) y `APPLE_TEAM_ID` (developer.apple.com › Membership).
   - Secrets: `ASC_KEY_ID`, `ASC_ISSUER_ID` y `ASC_KEY_P8` (el contenido completo del archivo `.p8`).

Cada vez que quieras una versión nueva (o cuando caduque a los 90 días): pestaña **Actions** ›
**iOS · TestFlight** › **Run workflow**. A los pocos minutos de terminar aparece en la app TestFlight.

## Usarla como web

1. Publica el repositorio con GitHub Pages (Settings › Pages › Deploy from a branch).
2. Abre la dirección en **Safari** y pulsa Compartir › **Añadir a pantalla de inicio**.

## Probarla en local

```
python3 -m http.server 8000
```

La versión web no necesita compilación: es HTML, CSS y JavaScript sin dependencias.
El contenido está en `js/content.js` (ruta del viaje) y `js/course-a.js` / `js/course-b.js` (curso).
