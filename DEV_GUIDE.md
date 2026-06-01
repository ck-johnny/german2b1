# German2B1 Development Guide

## Purpose

German2B1 should feel like a compact self-study app, not a marketing site. Learners should be able to open a module and study useful German immediately, with minimal searching and minimal extra clicking.

## Development Rules

- Prefer compact lesson UI: smaller headers, tight spacing, dense study cards, and no redundant route buttons when the top navigation already covers the action.
- Keep navigation in the hamburger side menu so the top header stays small.
- Any German learner-facing word, phrase, or sentence should use `GermanText.astro` so the learner can tap it and hear German speech.
- German audio must respect the global playback speed control; do not hard-code a one-size-fits-all speech rate in individual components.
- Keep answer reveal only for real recall/self-test flows, such as micro-checks and review cards.
- Add enough in-page material for self-study: vocabulary, pronunciation notes, phrase banks, sentence drills, examples, and practice tasks.
- Keep learner-facing explanations English-only unless the user explicitly asks for another support language.
- Avoid hiding core study material behind accordions. Show learning content directly.
- Run `npm run build` after code/content changes.
- Browser-check at least one module page and the review page on desktop and mobile after UI changes.

## Current Patterns

- Shared UI styles live in `src/styles/global.css`.
- Module content lives in `src/data/modules.ts`.
- Extra self-study material lives in `src/data/studyExtras.ts`.
- German tap-to-play rendering is handled by `src/components/GermanText.astro` and the speech script in `src/layouts/BaseLayout.astro`. It uses native browser speech when available and a remote TTS audio fallback when native speech is unavailable.
- Pronunciation speed is controlled globally in `src/layouts/BaseLayout.astro` with a bottom preset bar and numeric speed buttons. Save to `localStorage` first, with a cookie fallback for embedded browsers that block local storage.
- Module pages combine the base module data, extra study material, tasks, micro-checks, and official resources.
- Basics content is split into compact modules through `src/data/basics.ts` and `src/pages/basics/[id].astro`.
- Grammar content is exposed as a learning path through `src/data/grammar.ts` and `src/pages/grammar/[id].astro`, reusing grammar topic material where possible.
- The old `learn-lang` repo was a listening/PWA experiment. Compatible ideas already ported here are: global speed controls, tappable cheat-sheet basics, and the compact Reader tool for pasted German lines.
- Module metadata such as goals, target items, study status, and completion criteria should stay collapsible so the study material remains the main surface.
- Phrase Bank, Examples, and Sentence Builder are merged into one expandable phrase-and-sentence bank with word-level German audio and English glosses.

## Lessons Learned

- 2026-05-16: Oversized hero-style headings made the app feel less useful. Keep study pages compact and make first-screen content practical.
- 2026-05-16: Redundant buttons like "Open modules" and "Official resources" add noise when the nav already exposes those routes.
- 2026-05-16: German text should be listenable by default. New German content should not be rendered as plain text unless there is a specific reason.
- 2026-05-16: The first content pass was too thin for self-study. Add phrase banks, pronunciation help, and sentence drills directly inside modules.
- 2026-05-16: The in-app browser may not expose native `speechSynthesis`; keep a fallback path for tap-to-listen German audio.
- 2026-05-17: Pronunciation speed should be learner-controlled. Different users need different playback rates depending on comfort and familiarity.
- 2026-05-17: The audio speed control should be a bottom preset bar with numeric speed choices, not hidden in the side menu.
- 2026-05-17: Marketing copy and repeated page descriptions waste space. Default to direct study surfaces, especially for the zero-to-B1 path.
- 2026-05-17: A1 and A2 learners need built-in basics too, not only B1 exam material. Keep alphabet, numbers, pronouns, early phrases, and level-by-level modules easy to reach.
- 2026-05-17: Chinese was removed from the learner-facing app. Do not render Chinese labels, translations, or bilingual headings by default.
- 2026-06-01: When changing app-shell pages or cached navigation routes, bump `CACHE_NAME` in `public/sw.js` before browser QA so old service-worker content cannot mask current markup.

## Maintenance

Update this guide whenever a new product rule, UI issue, or implementation pattern is discovered. The goal is to prevent the same usability/content mistakes from returning.
