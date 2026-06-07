# Content Model

## Module

Each module is one learner milestone and one route.

```ts
type Module = {
  id: string;
  level: "A1" | "A2" | "B1";
  order: number;
  title: string;
  theme: string;
  examBridge: string;
  summary: string;
  goalEn: string;
  targetItems: string[];
  vocabulary: VocabularyItem[];
  grammar: EnglishNote[];
  examples: GermanExample[];
  tasks: PracticeTask[];
  microChecks: MicroCheck[];
  searchPrompts: SearchPrompts;
  resourceIds: string[];
};
```

```ts
type VocabularyItem = {
  de: string;
  en: string;
  note?: string;
};

type EnglishNote = {
  en: string;
};

type GermanExample = {
  de: string;
  en: string;
};
```

## Content Rules

- Keep German examples short enough for the module level.
- Keep learner-facing explanations English-only unless localisation is intentionally reintroduced.
- Treat current `zh`, `titleZh`, and `goalZh` fields as legacy data placeholders that the UI should not render by default.
- Treat nouns as incomplete unless the article is present.
- Prefer real-life citizenship and integration contexts from A2 onward.
- Keep micro-checks objective where possible.
- Use stable module ids forever after publishing.

## A1 Registry Additions

The A1 blueprint in `docs/a1-app-blueprint.md` adds four registry families that should become typed data before any backend work:

- official A1 topic buckets
- A1 grammar inventory points
- exam-task families for listening, reading, writing, and speaking
- vocabulary targets with active/passive status

## Expansion Workflow

1. Add or edit module data in `src/data/modules.ts`.
2. Run `npm run build`.
3. Check the module route in the browser.
4. Add deeper lesson prose only after the module card and cheat sheet are clear.
