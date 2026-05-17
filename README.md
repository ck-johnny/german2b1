# German2B1

A web-first learning system for a flexible path from zero German to B1 readiness for citizenship-related goals.

The product follows the thesis from `deep-research-report.md`: **one module = one page = one achievable unit of progress**. The MVP is static and content-first, while the data model is ready for later learner accounts, SRS scheduling, micro-assessment history, and exam-track logic.

## Current MVP

- 18 module pages from A1-1 through B1-6.
- English and Traditional Chinese learner support.
- Trilingual cheat sheets: German, English, Traditional Chinese.
- Micro-checks and “done when” style practice tasks.
- Manual SRS-style review cards.
- Official resource hub for BAMF, Goethe, telc, ÖSD, and self-study links.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Project Structure

```text
deep-research-report.md       Research blueprint and source thesis
docs/                         Product, technical, and implementation planning
src/data/                     Module and official-resource data
src/pages/                    Static app routes
src/components/               Reusable learning UI components
src/styles/                   Global design system
```

## Routes

- `/` - dashboard and recommended path.
- `/modules` - searchable course shelf by level.
- `/modules/[id]` - module page with cheat sheet, tasks, micro-checks, and SRS cards.
- `/review` - manual review cards grouped by module.
- `/dashboard` - progress model and future state design.
- `/resources` - official and primary resource hub.

