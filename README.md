# German2B1

A web-first self-study app for a flexible path from zero German to B1 readiness, aimed at citizenship-related goals.

The product follows the thesis from `deep-research-report.md`: **one module = one page = one achievable unit of progress**. The MVP is static and content-first, while the data model is ready for later learner accounts, SRS scheduling, micro-assessment history, and exam-track logic.

## Current MVP

- 18 level-based module pages from A1-1 through B1-6.
- Topic-based study path alongside modules, organised by Grammar, Vocabulary, and Communication.
- A1 Basics surface with an interactive number converter (0–999,999) and tappable alphabet, pronouns, and starter phrases.
- Reader tool for pasting German lines and previewing word-level audio and glosses.
- Manual SRS-style review cards grouped by module.
- Official resource hub for BAMF, Goethe, telc, ÖSD, and self-study links.
- Tap-to-listen German throughout, via `GermanText.astro` with a global playback-speed preset bar.
- Installable PWA shell with manifest and service worker.
- Learner-facing copy is English-only by default.

## Commands

```bash
npm install
npm run dev
npm run build      # runs astro check then astro build
npm run preview
```

## Project Structure

```text
deep-research-report.md       Research blueprint and source thesis
DEV_GUIDE.md                  Product rules, patterns, and lessons learned
docs/                         Product, technical, and implementation planning
public/                       PWA manifest, service worker, icons
src/data/                     Module, topic, basics, resource, and study-extras data
src/pages/                    Static app routes
src/components/               Reusable learning UI (GermanText, CheatSheet, MicroCheck, …)
src/layouts/BaseLayout.astro  Shared layout, side nav, speech engine, speed control
src/styles/global.css         Global design system
src/utils/                    Path helpers, language helpers, sentence bank
```

## Routes

- `/` — dashboard, priority topics, and recommended module path.
- `/topics` — topic shelf with A1 essentials and category groupings.
- `/topics/[id]` — topic page with patterns, common mistakes, practice, and self-checks.
- `/basics` — A1 basics: number converter, alphabet, pronouns, starter phrases.
- `/modules` — searchable module shelf by level.
- `/modules/[id]` — module page with cheat sheet, tasks, micro-checks, and SRS cards.
- `/reader` — paste-and-listen reader for German lines.
- `/review` — manual review cards grouped by module.
- `/resources` — official and primary resource hub.
- `/dashboard` — progress model and future-state design.

## Deployment

Astro static site, configured for GitHub Pages at `https://ck-johnny.github.io/german2b1` via `astro.config.mjs`. CI lives in `.github/`.
