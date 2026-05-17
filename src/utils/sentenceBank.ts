import type { LearningModule, TrilingualExample } from "@data/modules";
import type { StudyExtra } from "@data/studyExtras";

export type SentenceBankItem = TrilingualExample & {
  category: string;
  label: "Core sentence" | "Phrase" | "Builder";
};

export type SentenceBankGroup = {
  category: string;
  items: SentenceBankItem[];
};

const includesAny = (text: string, words: string[]) => words.some((word) => text.includes(word));

const categorizeSentence = (item: TrilingualExample, label: SentenceBankItem["label"]) => {
  const text = item.de.toLocaleLowerCase("de-DE");

  if (
    text.startsWith("guten ") ||
    text.startsWith("gute ") ||
    includesAny(text, ["hallo", "tschüss", "auf wiedersehen", "wie geht", "mir geht"])
  ) {
    return "Guten / Gute greetings";
  }

  if (includesAny(text, ["heiße", "name", "komme aus", "wohne", "adresse", "telefonnummer", "sprachen"])) {
    return "Personal details";
  }

  if (
    text.includes("?") ||
    text.startsWith("wie ") ||
    text.startsWith("wo ") ||
    text.startsWith("welche ") ||
    text.startsWith("haben sie") ||
    text.startsWith("können ") ||
    text.startsWith("kann ")
  ) {
    return "Questions";
  }

  if (includesAny(text, ["bitte", "möchte", "nehme", "brauche", "könnten", "termin", "anmelden", "bezahlen"])) {
    return "Requests and appointments";
  }

  if (
    includesAny(text, [
      "heute",
      "morgen",
      "gestern",
      "montag",
      "samstag",
      "sonntag",
      "uhr",
      "letzte",
      "danach",
      "nach der arbeit",
    ])
  ) {
    return "Time and plans";
  }

  if (includesAny(text, ["bahnhof", "links", "rechts", "geradeaus", "stadt", "wohnung", "haltestelle", "büro"])) {
    return "Places and directions";
  }

  if (includesAny(text, ["problem", "hilfe", "kaputt", "krank", "verspätung", "funktioniert nicht", "fehler"])) {
    return "Problems and help";
  }

  if (includesAny(text, ["weil", "dass", "wenn", "meiner meinung", "finde", "vorteil", "trotzdem", "deshalb"])) {
    return "Opinions and reasons";
  }

  if (includesAny(text, ["arbeite", "arbeit", "ausbildung", "lerne", "deutschkurs", "prüfung", "aufgaben"])) {
    return "Work and study";
  }

  return label === "Builder" ? "Sentence builders" : "Core phrases";
};

export function getSentenceBank(module: LearningModule, extra?: StudyExtra): SentenceBankItem[] {
  const bankItems: SentenceBankItem[] = [];
  const seenGerman = new Set<string>();

  const addBankItem = (item: TrilingualExample, label: SentenceBankItem["label"]) => {
    if (seenGerman.has(item.de)) return;
    seenGerman.add(item.de);
    bankItems.push({ ...item, category: categorizeSentence(item, label), label });
  };

  module.examples.forEach((example) => addBankItem(example, "Core sentence"));
  extra?.phrases.forEach((phrase) => addBankItem(phrase, "Phrase"));
  extra?.sentenceDrills.forEach((drill) => addBankItem(drill, "Builder"));

  return bankItems;
}

export function getSentenceBankGroups(module: LearningModule, extra?: StudyExtra): SentenceBankGroup[] {
  return getSentenceBank(module, extra).reduce<SentenceBankGroup[]>((groups, item) => {
    const group = groups.find((currentGroup) => currentGroup.category === item.category);
    if (group) {
      group.items.push(item);
    } else {
      groups.push({ category: item.category, items: [item] });
    }

    return groups;
  }, []);
}
