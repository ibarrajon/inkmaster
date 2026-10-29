# Inkmaster

Web de reproducción de videos de Inkmaster con menú de temporadas y capítulos. Los videos se abren en la página nativa de Dailymotion para garantizar reproducción con sonido y pantalla completa.

## Estructura

Solo 3 archivos estáticos, sin frameworks, sin librerías, sin compilación:

- `index.html` — interfaz con menú de temporadas y capítulos
- `styles.css` — estilos, diseño responsivo (celular, PC, smart TV)
- `app.js` — datos de temporadas/capítulos y lógica de apertura de video

## Cómo probar / ejecutar

Abrir `index.html` con doble clic. No necesita servidor ni instalación.

## Datos de video

Los IDs de video están hardcodeados en `app.js` dentro de `temporadas[]`:

- **Temporada 1:** capítulos 5, 6, 7, 8
- **Temporada 2:** capítulos 1 al 13

## Reproducción

Al hacer clic en un capítulo, el video se abre en una pestaña nueva del navegador en `https://www.dailymotion.com/video/{videoId}`.

**Nota:** Dailymotion devuelve `HTTP 403 Forbidden` al intentar cargar su reproductor embebido (`<iframe>`) desde un origen local (`file://` o `localhost`). Por ese motivo no se puede incrustar directamente dentro de la web; se abre en la página nativa de Dailymotion donde se reproduce con sonido y permite pantalla completa.

## Restricciones del proyecto

- Sin frameworks, sin librerías, sin compilar nada.
- Solo los tres archivos arriba (`index.html`, `styles.css`, `app.js`); no agregar dependencias ni archivos extra.
- Textos de interfaz en español.
- Diseño limpio y moderno, responsivo para celular, PC y smart TV.
- Cualquier cambio en video IDs o capítulos se hace únicamente en `app.js`.

## Despliegue en Vercel

Proyecto desplegado en Vercel: `jon-5da9/inkmaster`

- Acceso directo (alias corto): `https://inkjon.vercel.app` (requiere desactivar Deployment Protection en Vercel para acceso público sin login)
- Despliegue actual: `https://inkmaster-3wquhnq7j-jon-5da9.vercel.app`
