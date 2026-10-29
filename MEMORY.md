# MEMORY.md — Inkmaster
Memoria del proyecto entre sesiones. Máximo ~50 líneas: resume o elimina lo que ya no aporte.

# Memoria del Proyecto y Reglas del Agente

## Flujo de Trabajo Automatizado (Git)
- **Desencadenante:** Cuando el usuario diga "subí los cambios", "guardá el progreso" o modifique archivos clave (`index.html`, `styles.css`, `app.js`).
- **Acción requerida:** El agente debe realizar de forma autónoma y encadenada las siguientes tareas:
  1. Ejecutar `git add .` en la terminal.
  2. Generar un mensaje de commit conciso y descriptivo en base a los cambios reales detectados (analizando `git diff`).
  3. Ejecutar `git push origin main`.
- **Restricción:** No preguntar al usuario por comandos de confirmación intermedios, procesar todo el flujo usando la herramienta `bash`.

## Estado actual
- v1 funcionando: reproduce correctamente en la web externa (solo en chrome por ahora)

## Decisiones (y por qué)
- Sin backend ni dependencias: cualquiera debe poder abrirlo con doble clic.

## Aprendizajes y errores a evitar
- (vacío por ahora)

## Próximos pasos
- (vacío por ahora)