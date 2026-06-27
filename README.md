# EduBand — Website

The informational marketing site for **EduBand**: speech analytics that turns how
students actually speak into a kind, trackable five-skill report.

This is a **purely informational** site (no app features) — it explains what
EduBand does, the principles behind it, and the long-term vision.

## Stack

- **React 18** + **Vite** (static build, no server)
- Type system: **Bricolage Grotesque** (display) · **Inter** (body) ·
  **JetBrains Mono** (metrics/labels) via Google Fonts
- Signature element: a live, canvas-rendered **voice waveform** — sound made visible
- Respects `prefers-reduced-motion`; responsive down to mobile

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build & host

```bash
npm run build    # outputs static site to dist/
npm run preview  # preview the production build locally
```

Deploy `dist/` to any static host:

- **Netlify / Vercel** — connect the repo; build `npm run build`, publish `dist`
- **GitHub Pages / Cloudflare Pages** — serve the `dist/` folder

## Structure

```
src/
  components/   Nav, Hero, Steps, Pillars, Principles, Personas, Vision, Footer
  hooks/        useReveal (scroll-in animations)
  index.css     design tokens + reset
  App.css       component styles
```
