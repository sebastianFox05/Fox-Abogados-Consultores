# Plan del proyecto

Estado general: completado-home-nosotros
Fecha base: 2026-06-04
Zona horaria: America/Bogota

## Flujo obligatorio de agentes

Antes de ejecutar cualquier cambio, cada agente debe:

1. Leer este archivo.
2. Registrar la tarea como `por-hacer`.
3. Cambiarla a `en-curso` al empezar.
4. Cambiarla a `completado` al terminar.
5. Anotar hora, archivos afectados y resumen del cambio.

## Estados

- `por-hacer`: tarea planificada y pendiente.
- `en-curso`: tarea iniciada.
- `completado`: tarea terminada y revisada.

## Registro de cambios

| estado | hora | agente | cambio | archivos |
| --- | --- | --- | --- | --- |
| completado | 2026-06-04 17:13 -05:00 | timmy | Crear estructura inicial del home con HTML semantico y CSS SUIT responsive. | `index.html`, `assets/css/main.css`, `assets/img/*` |
| completado | 2026-06-04 17:13 -05:00 | javascript | Crear interacciones no intrusivas para menu, header, animaciones y carrusel. | `assets/js/main.js` |
| completado | 2026-06-04 17:13 -05:00 | review | Revisar accesibilidad, SEO, nombres, responsive y reglas de la rubrica. | `index.html`, `assets/css/main.css`, `assets/js/main.js` |
| completado | 2026-06-04 17:13 -05:00 | timmy | Centrar footer compartido y construir pagina Nosotros con componentes SUIT CSS responsive. | `index.html`, `nosotros.html`, `assets/css/main.css`, `assets/img/page-hero-contacto.jpg` |
| completado | 2026-06-04 17:13 -05:00 | javascript | Agregar progreso de scroll, volver arriba, contadores, barras animadas, tilt, seleccion de equipo, modal de casos y enlaces magneticos. | `assets/js/main.js` |
| completado | 2026-06-04 17:13 -05:00 | review | Verificar sintaxis JS y escanear malas practicas directas. El navegador interno no pudo abrir por fallo del runtime local. | `assets/js/main.js`, `index.html`, `nosotros.html`, `assets/css/main.css` |
| completado | 2026-06-04 17:13 -05:00 | timmy | Construir pagina Servicios tomando como referencia el proyecto actualizado y completar todas las tarjetas de especialidades. | `servicios.html`, `assets/css/main.css`, `assets/img/*` |
| completado | 2026-06-04 17:13 -05:00 | javascript | Agregar filtros, scroll de galeria, modal de detalle por servicio y proceso interactivo. | `assets/js/main.js` |
| completado | 2026-06-04 17:13 -05:00 | review | Verificar sintaxis JS, escanear malas practicas directas y aligerar assets pesados. | `servicios.html`, `assets/css/main.css`, `assets/js/main.js`, `assets/img/*` |
| completado | 2026-06-04 17:13 -05:00 | timmy | Corregir carrusel de servicios con viewport independiente, hover a color, valores extendidos y proceso ajustado al ejemplo. | `servicios.html`, `assets/css/main.css`, `assets/js/main.js` |
| completado | 2026-06-04 18:35 -05:00 | timmy | Redisenar Proceso de Trabajo como timeline horizontal con CTA oscuro siguiendo la referencia visual. | `servicios.html`, `assets/css/main.css` |
| completado | 2026-06-04 18:44 -05:00 | timmy | Centrar encabezado de Proceso de Trabajo y construir pagina Blog siguiendo el proyecto de ejemplo con grilla, assets y modal interactivo. | `blog.html`, `assets/css/main.css`, `assets/js/main.js`, `assets/img/blog*.jpg` |
| completado | 2026-06-04 18:52 -05:00 | timmy | Sincronizar Home y Nosotros con el proyecto actualizado: textos, equipo, casos, historia y assets comprimidos nuevos. | `index.html`, `nosotros.html`, `assets/js/main.js`, `assets/img/angie-del-castillo.jpg`, `assets/img/karina-sandoval.jpg`, `assets/img/boris-batista.jpg`, `assets/img/equipo-fox.jpg`, `assets/img/fac-*.jpg` |
| completado | 2026-06-04 19:00 -05:00 | timmy | Ajustar Home y Nosotros a imagenes exactas del ejemplo y redisenar casos recientes con isotipo sobre fondo crema. | `index.html`, `nosotros.html`, `assets/css/main.css`, `assets/img/rinaldi-card.jpg`, `assets/img/brandon-card.jpg`, `assets/img/edward-card.jpg`, `assets/img/sebastian-card.jpg`, `assets/img/rinaldi-about.jpg` |
| completado | 2026-06-04 22:28 -05:00 | timmy | Corregir imagenes del modal de Servicios y construir pagina Casos con filtros, tarjetas, confidencialidad y modal navegable como el ejemplo. | `servicios.html`, `casos.html`, `assets/css/main.css`, `assets/js/main.js` |
| completado | 2026-06-04 22:46 -05:00 | timmy | Construir pagina Contacto con formulario, mapa y CTAs funcionales de asesoria enlazados a WhatsApp con mensajes organizados. | `contacto.html`, `index.html`, `nosotros.html`, `blog.html`, `servicios.html`, `casos.html`, `assets/css/main.css`, `assets/js/main.js` |
| completado | 2026-06-04 22:58 -05:00 | timmy | Quitar fondo blanco del mapa, aplicar escala de grises y redisenar casos de estudio recientes con fotos reales del ejemplo y hover animado. | `contacto.html`, `nosotros.html`, `assets/css/main.css` |
| completado | 2026-06-04 23:04 -05:00 | timmy | Corregir ruta del hover en casos de estudio y usar la foto exacta `espacios.jpg` del proyecto de ejemplo para Traffic Tickets. | `nosotros.html`, `assets/css/main.css`, `assets/img/case-espacios.jpg` |
| completado | 2026-06-04 23:12 -05:00 | timmy | Mostrar completa la imagen principal de Nosotros y evitar desborde del correo en las tarjetas de Contacto. | `assets/css/main.css` |
| completado | 2026-06-04 23:20 -05:00 | timmy | Quitar porcentajes visibles del panel de areas y refinar iconos sociales del footer con estilo profesional. | `nosotros.html`, `assets/css/main.css` |
| completado | 2026-06-04 23:34 -05:00 | timmy | Actualizar seccion Casos con 10 tarjetas: casos documentados del Word y casos complementarios aleatorios por area, manteniendo resumen y modal. | `casos.html` |
| completado | 2026-06-04 23:40 -05:00 | timmy | Cambiar imagen hero del home para usar `fac-35.jpg`, la misma foto del proyecto de ejemplo. | `assets/css/main.css` |
| completado | 2026-06-04 23:46 -05:00 | timmy | Unificar hero interno de Blog, Servicios y Casos con la imagen de balanza del proyecto de ejemplo. | `assets/css/main.css` |
| completado | 2026-06-04 23:50 -05:00 | timmy | Refinar iconos sociales del hero home con botones circulares elegantes y hover dorado. | `assets/css/main.css` |
| completado | 2026-06-04 23:58 -05:00 | timmy | Quitar fondo de iconos sociales del home y usar imagen de biblioteca juridica generada como hero interno en Nosotros, Blog, Servicios, Casos y Contacto. | `assets/css/main.css`, `assets/img/page-hero-library.jpg` |
| completado | 2026-06-05 00:04 -05:00 | timmy | Confirmar flujo de formulario por WhatsApp y ajustar texto del boton de contacto para reflejarlo claramente. | `contacto.html`, `assets/js/main.js` |
| completado | 2026-06-05 00:09 -05:00 | timmy | Cambiar tipografia del subtitulo del hero home a sans corporativa para que el ampersand se vea profesional. | `assets/css/main.css` |
| completado | 2026-06-05 00:13 -05:00 | timmy | Reemplazar imagenes no deseadas del carrusel de Servicios y retirar la segunda imagen de Desarrollo frontend por una foto juridica institucional. | `servicios.html`, `assets/js/main.js` |

## Pendiente

- Verificar visualmente home y nosotros en navegador cuando el runtime local permita abrirlo.
- Verificar visualmente Contacto cuando el runtime local permita abrir navegador.
