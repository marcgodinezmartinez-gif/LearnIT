# LearnIT

App web (PWA) para aprender a hablar italiano en 8 semanas, pensada para un hablante de
español y catalán que entiende bastante pero no se atreve a hablar.

- **Sesión diaria guiada** (30-40 min): repaso hablado, frases nuevas, diálogo, clave u oído, y hablar.
- **8 semanas / 56 días**: 240 frases, 16 diálogos con la familia, 24 claves desde el español y el catalán.
- **Voz**: la app habla italiano, te escucha y marca qué palabras se te han entendido.
- **Tutor de IA opcional**: conversación por voz con correcciones (necesita una clave de API de Anthropic).
- Sin servidor ni instalación: el progreso se guarda en el dispositivo y funciona sin conexión (salvo el tutor).

## Usarla en el iPad

1. Publica el repositorio con GitHub Pages (Settings › Pages › Deploy from a branch).
2. Abre la dirección en **Safari** en el iPad.
3. Compartir › **Añadir a pantalla de inicio**.
4. Para que te escuche: Ajustes del iPad › General › Teclado › **Activar dictado**.

## Probarla en local

```
python3 -m http.server 8000
```

No hay paso de compilación: es HTML, CSS y JavaScript sin dependencias. El contenido está en `js/content.js`.
