# A1 German App Blueprint

## Executive Summary

The attached A1 report is directionally strong: it correctly argues that German2B1 should become a complete A1 preparation system before investing in heavier AI features. This cleaned blueprint turns that report into an implementation-ready plan for the current repo.

The priority is not a new UI concept. The current app already has modules, grammar pages, topics, a reader, review cards, and official resources. The priority is to complete the A1 content inventory, connect it to official exam task types, and make the data reusable across lessons, reader sentences, review, and future mini-mocks.

## Source Anchors

| Source | Use in the app |
| --- | --- |
| [Goethe-Zertifikat A1: Start Deutsch 1](https://www.goethe.de/ins/us/en/sta/bos/prf/gzsd1.cfm) | Official A1 exam sections, task types, and 80-200 lesson estimate. |
| [Goethe A1 exam training](https://www.goethe.de/en/spr/prf/ueb/pa1.html) | Practice PDFs, listening audio, accessible digital training, and A1 vocabulary list. |
| [telc Start Deutsch 1 / Deutsch A1](https://www.telc.net/en/language-examinations/certificate-exams/german/start-german1-telc-german-a1/) | Secondary A1 exam reference and mock-exam orientation. |

## What To Improve From The Report

The original report had good substance but needed cleanup:

- Replace unusable citation tokens with direct source links.
- Move assumptions near the top.
- Separate findings, implementation plan, and technical appendix.
- Make the roadmap concrete enough to turn into backlog items.
- Keep learner-facing app copy English-only, matching `DEV_GUIDE.md`.
- Avoid claiming corpus frequency rankings until a real lexical pipeline exists.

## Current A1 Gaps

| Area | Current state | Improvement |
| --- | --- | --- |
| Official resources | Some A1 modules pointed at B1 resources. | Add Goethe A1, Goethe A1 practice, and telc A1 resources. |
| Grammar visibility | Modal verbs and Perfekt were A2-labelled only. | Make modal verbs A1-visible and expose a narrow selected-Perfekt/past-time layer from A1-6. |
| Exam tasks | A1 readiness exists, but full timed drills are future-state. | Add listening, reading, writing, and speaking mini-mock models. |
| Review | Reveal cards and due counts are calm but manual. | Later add scheduled retrieval, typed recall, audio recall, and error tags. |
| Reader | Word glossing exists. | Later add phrase chunks, sentence replay, dictation, and save-to-review. |

## A1 Topic Inventory

The A1 content layer should cover these topic families:

| Topic | Active target | Must-have examples |
| --- | ---: | --- |
| Greetings and politeness | 20 | Guten Tag, Wie bitte?, Langsam bitte, Entschuldigung |
| Personal details and family | 30 | Name, Adresse, Telefonnummer, Familie, ledig |
| Alphabet and spelling | 8 | letter names, umlauts, ss/ß, email spelling |
| Numbers, money, quantities | 25 | prices, phone numbers, weights, postal codes |
| Date, weekday, time, calendar | 20 | weekdays, months, clock time, appointments |
| Food and drink | 30 | cafe orders, drinks, meals, menu language |
| Shopping and clothing | 20 | prices, colours, sizes, payment |
| Home and furniture | 20 | rooms, furniture, apartment basics |
| City, directions, transport | 30 | station language, places, signs, route phrases |
| Travel and accommodation | 15 | hotel, booking, luggage, arrival/departure |
| Work, school, learning German | 20 | jobs, course language, languages, workplace basics |
| Health and body | 15 | symptoms, doctor, pharmacy, cancellations |
| Leisure, hobbies, media | 15 | hobbies, sports, simple media vocabulary |
| Weather, seasons, colours | 15 | seasons, everyday weather, colour words |
| Services and public life | 15 | post, bank, telecom, police, public offices |
| Core adjectives, adverbs, connectors | 32 | good/bad, today/tomorrow, and/or/but/then |

Target total: about 350 active items, with wider passive recognition against the Goethe A1 vocabulary list.

## A1 Grammar Inventory

| Pack | A1 handling |
| --- | --- |
| Sound, spelling, alphabet | Productive from A1-1. |
| Personal pronouns and present endings | Productive. |
| `sein` and `haben` | Productive and frequently reviewed. |
| Articles and noun gender | Productive with noun chunks. |
| Indefinite, negative, and possessive articles | Productive for common patterns. |
| Nominative and accusative | Productive for core service situations. |
| Dative | Chunk-first: `mit dem Bus`, `in der Nähe`, `mir geht es gut`. |
| Questions | Productive: W-questions and yes/no questions. |
| Word order | Productive: verb-second, question order, modal bracket. |
| Modal verbs | A1-visible for `können`, `müssen`, `möchten`, `wollen`. |
| Separable verbs | Chunk-first: `anrufen`, `absagen`, `ausfüllen`. |
| Imperative | Recognition plus basic service/direction commands. |
| Negation | Productive contrast: `kein` vs `nicht`. |
| Prepositions | High-frequency temporal/local/modal chunks. |
| Adjectives and comparison | Basic predicative adjectives and simple comparison. |
| Past-time mini-set | Selected Perfekt plus `war`/`hatte`, especially in health/appointment contexts. |
| Orthography | Capitalisation, punctuation, umlauts, ß, forms and addresses. |

## Exam-Shaped A1 Tasks

| Skill | App task model |
| --- | --- |
| Listening | Short conversations, public announcements, telephone/voicemail messages, number/date/time dictation. |
| Reading | Notes, emails, ads, signs, notices, form labels. |
| Writing | Form fill, appointment note, confirmation/cancellation, short personal message. |
| Speaking | Self-introduction, spelling/name/number, ask-answer cards, request-and-response prompts. |

## Content Model

Each A1 item should become reusable data, not one-off page prose.

```ts
type A1ContentItem = {
  id: string;
  level: "A1";
  kind: "vocab" | "grammar" | "sentence" | "listening" | "writing" | "speaking";
  topicTags: string[];
  skillTags: Array<"listening" | "reading" | "writing" | "speaking">;
  german: string;
  english: string;
  grammarTags?: string[];
  examTaskFamily?: string;
  source?: "local-authored" | "official-inspired";
};
```

## Implementation Backlog

1. Add official A1 resources to `src/data/resources.ts`.
2. Replace A1 module links to B1 resources with A1-specific links.
3. Mark modal verbs as A1-visible.
4. Mark selected Perfekt/past-time chunks as A1-visible while keeping full Perfekt expansion in A2.
5. Expand `src/data/a1Readiness.ts` with services, clothing, accommodation, and fuller family/person coverage.
6. Add A1 task-family data for listening, reading, writing, and speaking mini-mocks.
7. Expand sentence banks for every A1 module before adding adaptive AI.
8. Add typed recall and error tags after progress state exists.

## Quality Rules

- German examples must be natural and short enough for A1.
- Every noun should include its article where useful.
- Examples should prefer formal `Sie` for exam/service contexts unless the lesson is explicitly informal.
- Do not claim exact corpus frequency until imported from a real corpus source.
- Keep official exam materials as links and inspiration, not copied content.
- Keep rendered learner explanations English-only.
