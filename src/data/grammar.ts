import type { Level } from "@data/modules";
import { topics, type StudyTopic } from "@data/topics";

export type GrammarStage = "Foundation" | "Sentence Building" | "Past and Clauses" | "B1 Expansion";

export type GrammarModule = StudyTopic & {
  order: number;
  stage: GrammarStage;
  learningGoal: string;
};

const grammarDetails: Record<string, Pick<GrammarModule, "order" | "stage" | "learningGoal">> = {
  "pronunciation-alphabet": {
    order: 1,
    stage: "Foundation",
    learningGoal: "Read German aloud reliably before adding more grammar load.",
  },
  "personal-pronouns-and-verbs": {
    order: 2,
    stage: "Foundation",
    learningGoal: "Match subjects to present-tense verb endings in simple sentences.",
  },
  "sein-and-haben": {
    order: 3,
    stage: "Foundation",
    learningGoal: "Use the two most common irregular verbs for identity, condition, possession, and time.",
  },
  "articles-der-die-das": {
    order: 4,
    stage: "Foundation",
    learningGoal: "Learn nouns together with articles so gender becomes part of the word.",
  },
  "indefinite-and-negative-articles": {
    order: 5,
    stage: "Sentence Building",
    learningGoal: "Introduce things with ein/eine and negate them with kein/keine.",
  },
  "accusative-case": {
    order: 6,
    stage: "Sentence Building",
    learningGoal: "Recognise and produce basic direct objects, especially den for masculine nouns.",
  },
  "sentence-position-two": {
    order: 7,
    stage: "Sentence Building",
    learningGoal: "Keep the finite verb in position two, even when the sentence starts with time or place.",
  },
  questions: {
    order: 8,
    stage: "Sentence Building",
    learningGoal: "Build yes/no questions and W-questions without translating English helper words.",
  },
  "modal-verbs": {
    order: 9,
    stage: "Past and Clauses",
    learningGoal: "Use modal verbs with an infinitive at the end to express ability, necessity, and wishes.",
  },
  "perfekt-past": {
    order: 10,
    stage: "Past and Clauses",
    learningGoal: "Talk about completed past events with haben/sein plus a past participle.",
  },
  "subordinate-clauses": {
    order: 11,
    stage: "Past and Clauses",
    learningGoal: "Use weil, dass, and wenn while sending the conjugated verb to the end.",
  },
  "relative-clauses": {
    order: 12,
    stage: "B1 Expansion",
    learningGoal: "Add precise information about a noun with a relative clause.",
  },
  "passive-basics": {
    order: 13,
    stage: "B1 Expansion",
    learningGoal: "Understand notices and reports where the action matters more than the actor.",
  },
};

export const grammarModules: GrammarModule[] = topics
  .filter((topic) => topic.category === "Grammar")
  .map((topic) => ({
    ...topic,
    ...grammarDetails[topic.id],
  }))
  .filter((topic): topic is GrammarModule => topic.order !== undefined)
  .sort((a, b) => a.order - b.order);

export const grammarStages: GrammarStage[] = ["Foundation", "Sentence Building", "Past and Clauses", "B1 Expansion"];
export const grammarLevels: Level[] = ["A1", "A2", "B1"];

export const getGrammarModuleById = (id: string) => grammarModules.find((module) => module.id === id);
export const getGrammarModulesByLevel = (level: Level) => grammarModules.filter((module) => module.level === level);
export const getGrammarModulesByStage = (stage: GrammarStage) => grammarModules.filter((module) => module.stage === stage);
