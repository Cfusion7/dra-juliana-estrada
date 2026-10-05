# Sitio web — Dra. Juliana Estrada

Catálogo de tratamientos con lista "Me interesa" y solicitud de valoración por WhatsApp.
Hecho en Next.js + Tailwind. Se publica en Vercel.

## Cómo cambiar cosas

| Quiero cambiar…                                  | Archivo                                |
| ------------------------------------------------ | -------------------------------------- |
| WhatsApp, dirección, ciudad, horario, Instagram | `src/data/negocio.ts`                  |
| Nombre, descripción u opciones de un tratamiento | `src/data/tratamientos.ts`             |
| Colores del sitio                                | `src/app/globals.css` (bloque `@theme`) |
| Una foto                                         | `public/img/<categoria>/<tratamiento>.jpg` (mismo nombre) |
| Fotos del antes y después                        | `public/img/antes-despues/`            |

Si un dato de contacto queda vacío, el sitio no lo muestra.

## Pendientes

- Número de WhatsApp (mientras esté vacío, el botón abre WhatsApp para elegir contacto).
- Ciudad, dirección y horario del consultorio.
- Instagram (opcional).
