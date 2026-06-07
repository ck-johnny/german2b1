# German2B1 Research Blueprint

## Executive Summary

German2B1 should remain a compact, web-first self-study app: one module, one page, one achievable unit of progress. The product goal is a flexible path from zero German to B1 readiness for Germany-related citizenship and everyday-life needs.

The strongest product thesis is still valid: organise the app around practical modules rather than calendar weeks. Learners with irregular schedules need restartable lessons, clear "done when" criteria, review recovery after gaps, and direct links to official exam and citizenship resources.

The previous version of this report mixed source notes, implementation ideas, bilingual-localisation plans, and raw research citations in one long artifact. This cleaned version keeps the useful decisions, removes unusable citation tokens, and updates the direction to match the current app rule: learner-facing content is English-only by default.

## Assumptions

- The primary learner is an adult self-studying German for life in Germany, eventual B1 certification, and citizenship-related confidence.
- The current MVP is an Astro static app, not a backend product with accounts.
- The app should avoid scraping official exam content. Official providers should be represented through curated links and locally authored practice material.
- Chinese fields still exist in some data types as legacy/localisation placeholders, but the rendered learner-facing app should stay English-only unless localisation is intentionally reintroduced.

## Official Anchors

These sources should be treated as product constraints:

| Area | Source | Product implication |
| --- | --- | --- |
| Citizenship test | [BAMF naturalisation guidance](https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Einbuergerung/einbuergerung-node.html) | The naturalisation test uses 33 questions, 60 minutes, and 17 correct answers as the pass threshold. |
| Integration-course route | [BAMF final examination in the integration course](https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/Abschlusspruefung/abschlusspruefung-node.html) | DTZ and Life in Germany resources should sit beside B1 preparation rather than replacing it. |
| Goethe A1 | [Goethe-Zertifikat A1: Start Deutsch 1](https://www.goethe.de/ins/us/en/sta/bos/prf/gzsd1.cfm) | A1 preparation must cover listening, reading, writing, and speaking, with short everyday tasks. |
| Goethe A1 practice | [Goethe A1 exam training](https://www.goethe.de/en/spr/prf/ueb/pa1.html) | The app should mirror official task families and link to official paper, audio, digital training, and vocabulary materials. |
| Goethe B1 | [Goethe-Zertifikat B1 information](https://www.goethe.de/ins/us/en/sta/wsh/prf/gzb1/inf.html) | B1 readiness should be tracked by reading, listening, writing, and speaking, not as one generic score. |
| telc A1 | [Start Deutsch 1 / telc Deutsch A1](https://www.telc.net/en/language-examinations/certificate-exams/german/start-german1-telc-german-a1/) | telc is useful as a second A1 exam-style reference, especially for mock-exam structure. |
| telc B1 | [telc Deutsch B1](https://www.telc.net/en/language-examinations/certificate-exams/german/telc-deutsch-b1/) | Provider-specific scoring should only appear when a learner selects that track. |
| ÖSD B1 | [ÖSD Zertifikat B1](https://www.osd.at/en/exams/osd-exams/osd-zertifikat-b1-zb1/) | Keep B1 exam-provider selection modular. |

## Product Thesis

German2B1 should be a content-first study system with four durable surfaces:

| Surface | Purpose |
| --- | --- |
| Learn | Small modules that teach a practical life or exam skill. |
| Review | Retrieval cards and sentence recall tied to the modules. |
| Reference | Grammar tables, topic lists, phrase banks, and official links. |
| Checkpoint | Timed mini-tests and official-style practice loops. |

The module path should stay life-first rather than textbook-first. A learner should see why each unit matters: forms, calls, appointments, shopping, housing, health, work, official letters, and exam tasks.

## Current MVP Fit

The current app already supports the thesis well:

- 18 module pages from A1-1 to B1-6.
- A1 Basics, Grammar, Topics, Reader, Review, Resources, and Dashboard routes.
- Tap-to-listen German through `GermanText.astro`.
- Global audio speed controls.
- Manual review cards.
- Official resource hub.
- English-only rendered learner copy.

The main issue is no longer app shape. The next improvements should deepen the content and connect the surfaces more tightly.

## Improvement Priorities

| Priority | Improvement | Why it matters |
| --- | --- | --- |
| P0 | Complete the A1 inventory layer | A1 needs more than six modules: it needs topic, grammar, phrase, listening, writing, and speaking coverage mapped to official task families. |
| P0 | Add official A1 resources to the resource hub | Early modules should not point only at B1 resources. |
| P0 | Reclassify modal verbs and selected past-time chunks as A1-visible | Goethe A1 preparation includes high-value modal and selected past forms, even if full expansion waits until A2. |
| P1 | Upgrade Review from reveal cards to scheduled retrieval | Calm review is good, but due scheduling, typed recall, and error tags are necessary for retention. |
| P1 | Make the Reader phrase-aware | A1 reading and listening are phrase-level. Word glosses should support, not dominate, the learning experience. |
| P1 | Add exam-shaped mini-mocks | A1 and B1 readiness should be measured by task type and skill, not by pages visited. |
| P2 | Add citizenship companion practice | Start lightweight civics practice around late A2/B1 so citizenship prep is integrated but not distracting. |

## Recommended Module Spine

Keep the 18-module structure:

| Level | Modules | Role |
| --- | --- | --- |
| A1 | A1-1 to A1-6 | Survival communication, official A1 scope, forms, signs, appointments, simple messages. |
| A2 | A2-1 to A2-6 | More detailed life topics, past events, requests, service problems, reasons, and opinions. |
| B1 | B1-1 to B1-6 | Connected opinions, work/applications, formal messages, complaints, joint planning, and exam/citizenship readiness. |

Each module should expose:

- a goal;
- target German items;
- short German examples with English support;
- grammar notes;
- phrase/sentence bank;
- practice tasks;
- micro-checks;
- review cards;
- official links when relevant.

## A1 Completion Targets

The A1 layer should be treated as a complete product inside the larger B1 path. See [docs/a1-app-blueprint.md](docs/a1-app-blueprint.md) for the detailed A1 implementation plan.

Minimum A1 target:

| Asset | Target |
| --- | ---: |
| Active vocabulary | 350 to 400 items |
| Passive/recognition vocabulary | around 650 official-list-aligned items |
| Grammar/reference cards | 25 to 35 |
| Sentence bank | 600 to 900 short sentences |
| Listening items | 150 to 250 |
| Guided writing prompts | 60 to 100 |
| Exam-style mini-tests | 12 to 20 |

## Technical Direction

The current static Astro implementation is appropriate. Do not introduce accounts or a database until progress state is necessary.

Recommended near-term implementation:

1. Keep module content in typed data files.
2. Add structured A1 registry data for official topics, grammar points, exam tasks, and vocabulary targets.
3. Add more resources and connect A1 modules to A1 resources.
4. Build exportable/reusable content objects before building adaptive AI features.
5. Add local progress/SRS only after the static content layer is complete enough to review.

Recommended future backend tables:

- `users`
- `learner_profiles`
- `module_progress`
- `review_cards`
- `review_events`
- `micro_check_attempts`
- `productive_tasks`
- `exam_track_settings`

## Privacy Defaults

- Do not store raw voice by default.
- Prefer transcript-only storage for speaking practice.
- Make audio upload opt-in with clear retention text.
- Keep official-resource clicks as local navigation or aggregate analytics only.
- Avoid high-stakes pronunciation scoring until the method is validated.

## Roadmap

| Phase | Outcome |
| --- | --- |
| Phase 1 | Clean research docs, source links, and A1 official resources. |
| Phase 2 | Complete A1 topic/grammar inventory data and fix resource routing. |
| Phase 3 | Expand A1 sentence banks, writing prompts, listening items, and exam mini-mocks. |
| Phase 4 | Add SRS scheduling and typed/audio recall once progress state exists. |
| Phase 5 | Add B1 provider-specific checkpoints and citizenship companion practice. |

## Open Questions

- Should localisation be reintroduced later, or should legacy Chinese fields be removed from the data model?
- Should the app stay purely static through the full A1 content expansion?
- Should A1 mock tests follow Goethe first, telc first, or a provider-neutral task model with provider links?
- Should SRS live only in-browser at first, or should it wait for accounts?
