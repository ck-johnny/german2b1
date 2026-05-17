# Content Model

## Module

Each module is one learner milestone and one route.

```ts
type Module = {
  id: string;
  level: "A1" | "A2" | "B1";
  order: number;
  title: string;
  titleZh: string;
  theme: string;
  examBridge: string;
  summary: string;
  goalEn: string;
  goalZh: string;
  targetItems: string[];
  vocabulary: VocabularyItem[];
  grammar: BilingualNote[];
  examples: TrilingualExample[];
  tasks: PracticeTask[];
  microChecks: MicroCheck[];
  searchPrompts: SearchPrompts;
  resourceIds: string[];
};
```

## Content Rules

- Keep German examples short enough for the module level.
- Include Traditional Chinese for learner-facing explanations.
- Treat nouns as incomplete unless the article is present.
- Prefer real-life citizenship and integration contexts from A2 onward.
- Keep micro-checks objective where possible.
- Use stable module ids forever after publishing.

## Expansion Workflow

1. Add or edit module data in `src/data/modules.ts`.
2. Run `npm run build`.
3. Check the module route in the browser.
4. Add deeper lesson prose only after the module card and cheat sheet are clear.

