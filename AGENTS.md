# AGENTS.md — Inkmaster

## Memoria
- Al empezar, lee `MEMORY.md` para conocer el estado del proyecto y las decisiones tomadas.
- Al terminar una tarea, actualízalo: estado actual, decisiones importantes (con su porqué) y errores a evitar.
- Mantenlo breve (máximo ~50 líneas): resume o elimina lo que ya no aporte.
- Si algo se convierte en una regla permanente, propón moverlo a `AGENTS.md` en lugar de dejarlo en la memoria.
- No guardes nunca datos sensibles (claves, tokens, datos personales)

## Estructura
Solo 3 archivos estáticos, sin framework, sin librerías, sin compilación:
- `index.html` — interfaz con menú de temporadas y capítulos
- `styles.css` — estilos, diseño responsivo (celular, PC, smart TV)
- `app.js` — datos de temporadas/capítulos y lógica de apertura de video

## Cómo probar / ejecutar
- Abrir `index.html` con doble clic funciona directamente (no necesita servidor).
- No requiere Live Server ni ningún servidor HTTP local.

## Datos de video
Hardcodeados en `app.js` dentro de `temporadas[]` (T1: capítulos 5-8; T2: capítulos 1-13). Cada uno tiene `numero` y `videoId`.

## Reproducción (comportamiento actual)
- Al clic en un capítulo se abre `https://www.dailymotion.com/video/{videoId}` en una pestaña nueva del navegador (`window.open`).
- El video se reproduce con sonido en la página nativa de Dailymotion.
- Desde ahí el usuario puede poner pantalla completa con un clic.

## Por qué no hay reproductor embebido (iframe)
- Dailymotion devuelve **HTTP 403 Forbidden** al intentar cargar su reproductor dentro de un `<iframe>` desde `localhost` o `file://`. Es una restricción del servidor de Dailymotion, no del código.
- Ningún cambio en HTML/CSS/JS del lado del cliente puede forzar a Dailymotion a aceptar el embebido si su servidor rechaza la petición.
- La alternativa funcional dentro de las restricciones del proyecto (solo 3 archivos, sin servidor, sin instalar nada) es abrir el video en pestaña nueva.

## Restricciones del proyecto
- Sin frameworks, sin librerías, sin compilar nada.
- Solo los tres archivos arriba; no agregar dependencias ni archivos extra.
- Textos de interfaz en español.
- Diseño limpio y moderno, responsivo para celular, PC y smart TV.
- Siempre: actualizar `MEMORY.md` al terminar cada tarea.

## Convenciones
- Nada de build, test, lint, typecheck ni CI.
- Cualquier cambio en video IDs o capítulos se hace únicamente en `app.js`.

