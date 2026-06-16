# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio site for Cameron Cary, deployed to `cameroncary.com` via GitHub Pages (CNAME configured). No build framework or package manager is tracked in the repo.

## Tailwind CSS

Tailwind is used for all styling. The compiled output is `tailwind.css` (committed to the repo). To regenerate it after changing classes in `index.html`:

```bash
npx tailwindcss -i ./tailwind.css -o ./tailwind.css --watch
# or one-shot:
npx tailwindcss -i ./input.css -o ./tailwind.css
```

The config is in `tailwind.config.js`. Custom design tokens:
- **Colors:** `primary` (#D50032 crimson), `accent` (#FFC0CB soft pink), `background` (#2C2C2C dark / #FFFAFA light), `muted` (#4A4A4A)
- **Fonts:** `font-sans` (Inter), `font-heading` (Space Grotesk), `font-accent` (Poppins) — loaded from Google Fonts in `index.html`
- **Dark mode:** class-based (`dark:` prefix), toggled via `#theme-toggle` button in `main.js`

## Architecture

- `index.html` — single-page site with sections: Navbar, About, Projects, Contact
- `global.css` — any hand-written global styles (in addition to Tailwind)
- `tailwind.css` — compiled Tailwind output (committed, do not hand-edit)
- `tailwind.config.js` — Tailwind configuration and design tokens
- `vanilla-tilt.js` — vendored tilt effect library for project cards
- `main.js` — currently contains a Three.js experiment (not wired into the portfolio page)
- `assets/` — static images (e.g. project screenshots)
- `deprecated/` — old version of the site; ignore

## Local Development

No build step is required to view the site. Serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```
