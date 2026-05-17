# Technical Solution

## Summary

German2B1 is implemented as an Astro + TypeScript static web app. The MVP prioritises the durable content architecture described in `deep-research-report.md`: module pages, bilingual support, micro-checks, SRS-ready vocabulary, and official-resource links. It does not require a backend, database, accounts, payments, or runtime AI.

## Architecture

- **Framework:** Astro 6 with TypeScript.
- **Content source:** Typed module data in `src/data/modules.ts`.
- **Official resources:** Typed external links in `src/data/resources.ts`.
- **Rendering model:** Static generation at build time.
- **Interactivity:** Native HTML disclosure controls for self-check and review.
- **Hosting:** Any static host, including Vercel, Netlify, Cloudflare Pages, GitHub Pages, or a simple static server.

## Product Model

The app models each learning milestone as a module with:

- level: `A1`, `A2`, or `B1`
- ordered module id such as `a1-1`
- English and Traditional Chinese titles/goals
- German target items
- trilingual vocabulary
- micro-grammar explanations
- examples
- practice tasks
- micro-check questions
- search prompts
- related official resources

This keeps the app editable by AI and easy to validate in code.

## Current Static MVP

The MVP intentionally uses local static data instead of a CMS or database. This is faster to ship and matches the first content-building phase. The typed data files can later become import/export boundaries for:

- a headless CMS
- user progress tables
- SRS due-card tables
- writing/speaking submission records
- exam-track settings

## Future Backend Shape

When learner state becomes necessary, add:

- `users`
- `learner_profiles`
- `module_progress`
- `review_cards`
- `review_events`
- `micro_check_attempts`
- `productive_tasks`
- `exam_track_settings`

The current module ids should remain stable and become foreign keys for progress records.

## Privacy Defaults

- Do not store raw audio by default.
- Do not require accounts for public reading.
- Store productive writing/speaking work only after explicit learner action.
- Keep official exam links curated rather than scraped.

