# PokerListings Clone — APUESTAS

Clon 100% de la página principal de [PokerListings](https://www.pokerlistings.com/), incluyendo tanto el **volcado estático completo** de referencia como la **aplicación web editable en Next.js + React + TypeScript**.

## Estructura del Proyecto

- `static-dump/` — Volcado estático 100% autocontenido:
  - `static-dump/index.html` — Página HTML completa lista para visualizar con pestañas, carruseles y menús funcionales.
  - `static-dump/styles.css` — Todas las hojas de estilo originales consolidadas (`655 KB`).
  - `static-dump/assets/` — Más de 235 archivos originales descargados (imágenes `.webp`/`.png`/`.jpg`, sprites SVG, íconos de proveedores y fuentes `Inter` + `icon.woff`).
  - `static-dump/screenshot-full.png` — Captura completa de referencia de pies a cabeza.
- `src/` — Aplicación web editable (Next.js 15 App Router):
  - `src/app/page.tsx` — Página principal modularizada por secciones.
  - `src/components/PokerListingsSections.tsx` — Componentes individuales de cada bloque (Header, Hero Main Screen con pestañas Poker/Casino/Betting, Banner VIP, Hot News, Latest Materials + Top Players, Instagram Feed, Poker Education + Poker Tutorial, Calculadoras/Herramientas, Quiz, Soporte, Tipos de Juegos de Casino, Slots Populares, Casino Education, YouTube Shorts, About, Newsletter, Software Profesional y Footer).
  - `src/components/InteractiveController.tsx` — Controlador interactivo de cliente para pestañas (`role="tablist"`), sliders horizontales (`data-slider`), menú móvil y formulario de suscripción.
  - `src/data/pokerlistings-sections.json` — Datos y marcado estructurado de cada sección para edición rápida.
- `public/` — Recursos estáticos servidos por Next.js (`/assets/...` y `/styles.css`).

## Cómo Ejecutar

### 1. Aplicación Web Editable (Next.js)
```bash
npm install
npm run dev
```
Abre `http://localhost:3000` en tu navegador.

### 2. Volcado Estático Directo
```bash
npm run serve:static
```
O abre directamente `static-dump/index.html` con un servidor local.
