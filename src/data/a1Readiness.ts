export type A1TopicBucket = {
  id: string;
  title: string;
  why: string;
  examples: string[];
  moduleIds: string[];
};

export type A1GrammarPoint = {
  title: string;
  status: "produce" | "recognise" | "chunk";
  focus: string;
  example: string;
  moduleIds: string[];
};

export type A1ExamTask = {
  skill: "Listening" | "Reading" | "Writing" | "Speaking";
  title: string;
  taskShape: string;
  promptDe: string;
  successSignal: string;
  moduleIds: string[];
};

export type A1LearningMechanic = {
  title: string;
  value: string;
  cadence: string;
};

export type A1VocabularyTarget = {
  family: string;
  activeItems: number;
  note: string;
  moduleIds: string[];
};

export const a1TopicBuckets: A1TopicBucket[] = [
  {
    id: "identity",
    title: "Personal Details",
    why: "Names, origin, address, contact data, spelling, and forms appear from the first speaking and writing tasks.",
    examples: ["Name", "Adresse", "Telefonnummer", "Geburtsdatum"],
    moduleIds: ["a1-1", "a1-2"],
  },
  {
    id: "greetings",
    title: "Greetings and Politeness",
    why: "A1 interaction starts with safe openings, formal/informal address, repetition requests, and short repairs.",
    examples: ["Guten Tag", "Wie bitte?", "Langsam bitte", "Entschuldigung"],
    moduleIds: ["a1-1"],
  },
  {
    id: "numbers-time",
    title: "Numbers, Time, and Dates",
    why: "Phone numbers, prices, appointments, birthdays, travel times, and deadlines are all number-heavy.",
    examples: ["halb elf", "am ersten Juni", "zwei Euro fünfzig", "10115"],
    moduleIds: ["a1-2", "a1-3", "a1-6"],
  },
  {
    id: "family-work-routine",
    title: "People, Work, and Routine",
    why: "Self-presentation needs family, jobs, study, daily schedules, and simple responsibilities.",
    examples: ["Familie", "arbeiten", "lernen", "jeden Tag"],
    moduleIds: ["a1-2", "a1-3"],
  },
  {
    id: "home-city",
    title: "Home, City, and Directions",
    why: "Learners need rooms, places in town, public signs, and simple route language for everyday survival.",
    examples: ["Wohnung", "Bahnhof", "geradeaus", "Ausgang"],
    moduleIds: ["a1-5"],
  },
  {
    id: "food-shopping",
    title: "Food, Shopping, and Money",
    why: "Ordering, buying, quantities, prices, and payment are high-frequency A1 service situations.",
    examples: ["Ich möchte", "Was kostet das?", "mit Karte", "ohne Milch"],
    moduleIds: ["a1-4"],
  },
  {
    id: "travel-health-appointments",
    title: "Travel, Health, and Appointments",
    why: "A1 learners should handle delays, doctor/pharmacy basics, appointment changes, and short messages.",
    examples: ["Termin", "krank", "Verspätung", "Apotheke"],
    moduleIds: ["a1-5", "a1-6"],
  },
  {
    id: "notes-forms-signs",
    title: "Notes, Forms, and Signs",
    why: "Exam tasks often ask for form filling, short messages, notices, public signs, and simple information extraction.",
    examples: ["Formular", "Ausgang", "Bitte bestätigen", "Ich kann heute nicht kommen"],
    moduleIds: ["a1-2", "a1-5", "a1-6"],
  },
];

export const a1GrammarPoints: A1GrammarPoint[] = [
  {
    title: "Sound and Spelling",
    status: "produce",
    focus: "Alphabet, umlauts, ß, spelling names, and asking for repetition.",
    example: "Können Sie das bitte buchstabieren?",
    moduleIds: ["a1-1", "a1-2"],
  },
  {
    title: "Verb-Second Statements",
    status: "produce",
    focus: "Keep the finite verb in position two, even after a time phrase.",
    example: "Heute lerne ich Deutsch.",
    moduleIds: ["a1-2", "a1-3"],
  },
  {
    title: "Questions",
    status: "produce",
    focus: "Use W-questions and yes/no questions without English helper words.",
    example: "Haben Sie eine Telefonnummer?",
    moduleIds: ["a1-1", "a1-2", "a1-3"],
  },
  {
    title: "Articles, Gender, and Plural",
    status: "produce",
    focus: "Learn nouns as article plus noun plus plural where possible.",
    example: "der Bahnhof, die Bahnhöfe",
    moduleIds: ["a1-4", "a1-5"],
  },
  {
    title: "Accusative Essentials",
    status: "produce",
    focus: "Use den/einen/keinen for masculine direct objects after need, buy, take, and order.",
    example: "Ich brauche einen Termin.",
    moduleIds: ["a1-4", "a1-6"],
  },
  {
    title: "Dative Location and Transport Chunks",
    status: "chunk",
    focus: "Use high-value location and transport phrases before overloading the full case system.",
    example: "mit dem Bus, in der Nähe, neben dem Bahnhof",
    moduleIds: ["a1-5", "a1-6"],
  },
  {
    title: "Modal and Polite Request Chunks",
    status: "produce",
    focus: "Use können, müssen, möchten, and polite service frames.",
    example: "Können wir den Termin verschieben?",
    moduleIds: ["a1-4", "a1-5", "a1-6"],
  },
  {
    title: "Narrow Past-Time Package",
    status: "recognise",
    focus: "Recognise common Perfekt forms and actively use war/hatte for basic past references.",
    example: "Gestern war ich krank.",
    moduleIds: ["a1-6"],
  },
];

export const a1ExamTasks: A1ExamTask[] = [
  {
    skill: "Speaking",
    title: "Self-Presentation",
    taskShape: "Give name, origin, city, languages, and one daily-life detail.",
    promptDe: "Guten Tag, ich heiße Mei. Ich komme aus Taiwan und wohne in Berlin.",
    successSignal: "Clear pronunciation, correct verb-second order, and one formal follow-up question.",
    moduleIds: ["a1-1", "a1-2"],
  },
  {
    skill: "Writing",
    title: "Form Filling",
    taskShape: "Read German labels and enter personal data accurately.",
    promptDe: "Name, Adresse, Telefonnummer, Geburtsdatum",
    successSignal: "Digits, dates, spelling, and formal labels are handled without translation panic.",
    moduleIds: ["a1-2"],
  },
  {
    skill: "Listening",
    title: "Number and Time Dictation",
    taskShape: "Hear an appointment sentence and write the day, date, or time.",
    promptDe: "Der Termin ist am Montag um halb elf.",
    successSignal: "The learner writes Montag and 10:30 or halb elf correctly.",
    moduleIds: ["a1-3", "a1-6"],
  },
  {
    skill: "Speaking",
    title: "Service Roleplay",
    taskShape: "Order or buy something, ask the price, and pay.",
    promptDe: "Ich möchte einen Kaffee, bitte. Kann ich mit Karte bezahlen?",
    successSignal: "Polite request chunks and masculine accusative are produced under light pressure.",
    moduleIds: ["a1-4"],
  },
  {
    skill: "Reading",
    title: "Signs and Notices",
    taskShape: "Extract useful action from short signs, station words, and office notices.",
    promptDe: "Ausgang, Eingang, Gleis eins, Bitte warten",
    successSignal: "The learner can identify direction, location, and required action.",
    moduleIds: ["a1-5"],
  },
  {
    skill: "Writing",
    title: "Short Message",
    taskShape: "Cancel, confirm, or move an appointment in two to four simple sentences.",
    promptDe: "Entschuldigung, ich bin krank und kann heute nicht kommen.",
    successSignal: "Reason, action, and polite tone are present without unnecessary complexity.",
    moduleIds: ["a1-6"],
  },
];

export const a1LearningMechanics: A1LearningMechanic[] = [
  {
    title: "Slow Audio and Shadowing",
    value: "Builds sound-to-text confidence before normal-speed listening.",
    cadence: "Repeat three sentences at 0.5x, then once at 0.75x.",
  },
  {
    title: "Dictation",
    value: "Turns numbers, dates, and short appointment lines into active listening practice.",
    cadence: "Write first, then reveal the sentence and repair one error.",
  },
  {
    title: "Retrieval Micro-Checks",
    value: "Keeps grammar and phrases recallable instead of merely familiar.",
    cadence: "Answer before opening the module sentence bank.",
  },
  {
    title: "Error-Linked Review",
    value: "Routes weak articles, word order, and number listening back into short review loops.",
    cadence: "Convert each mistake into one new sentence and one next-day recall prompt.",
  },
];

export const a1VocabularyTargets: A1VocabularyTarget[] = [
  {
    family: "Personal information, greetings, spelling",
    activeItems: 40,
    note: "Names, countries, languages, family status, and formal/informal routines.",
    moduleIds: ["a1-1", "a1-2"],
  },
  {
    family: "Numbers, money, quantities",
    activeItems: 60,
    note: "Digits, prices, weights, phone numbers, addresses, and short numeric messages.",
    moduleIds: ["a1-2", "a1-3", "a1-4"],
  },
  {
    family: "Time, date, calendar",
    activeItems: 50,
    note: "Days, months, seasons, clock time, appointments, deadlines, and birthdays.",
    moduleIds: ["a1-3", "a1-6"],
  },
  {
    family: "Home, city, shopping, travel, health",
    activeItems: 205,
    note: "Rooms, furniture, food, shops, services, transport, directions, weather, and basic health.",
    moduleIds: ["a1-4", "a1-5", "a1-6"],
  },
];

const includesModule = (moduleIds: string[], moduleId: string) => moduleIds.includes(moduleId);

export function getA1ReadinessForModule(moduleId: string) {
  return {
    topicBuckets: a1TopicBuckets.filter((item) => includesModule(item.moduleIds, moduleId)),
    grammarPoints: a1GrammarPoints.filter((item) => includesModule(item.moduleIds, moduleId)),
    examTasks: a1ExamTasks.filter((item) => includesModule(item.moduleIds, moduleId)),
    vocabularyTargets: a1VocabularyTargets.filter((item) => includesModule(item.moduleIds, moduleId)),
  };
}
