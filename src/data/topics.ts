export type TopicCategory = "Grammar" | "Vocabulary" | "Communication";

export type TopicPattern = {
  label: string;
  de: string;
  en: string;
};

export type TopicCheck = {
  prompt: string;
  answer: string;
};

export type StudyTopic = {
  id: string;
  category: TopicCategory;
  title: string;
  summary: string;
  level: "A1" | "A2" | "B1";
  focus: string[];
  explanation?: string[];
  patterns: TopicPattern[];
  commonMistakes?: string[];
  practice: string[];
  checks?: TopicCheck[];
  moduleIds: string[];
};

export const topics: StudyTopic[] = [
  {
    id: "pronunciation-alphabet",
    category: "Grammar",
    title: "Pronunciation and Alphabet",
    summary: "Build confidence with German sounds, spelling, umlauts, and useful classroom repair phrases.",
    level: "A1",
    focus: ["alphabet", "umlauts", "spelling", "classroom phrases"],
    explanation: [
      "German spelling is more regular than English. At A1, the goal is not a perfect accent; it is being understandable and recognising words when you hear them.",
      "Learn letters together with spelling phrases because real conversations often require names, email addresses, and street names.",
      "Umlauts change the vowel sound. Treat ä, ö, and ü as separate sounds to practise, not as decorations on normal letters.",
    ],
    patterns: [
      { label: "spell", de: "Wie schreibt man das?", en: "How do you spell that?" },
      { label: "repeat", de: "Können Sie das bitte wiederholen?", en: "Can you repeat that, please?" },
      { label: "slowly", de: "Bitte langsam.", en: "Slowly, please." },
      { label: "email", de: "Meine E-Mail-Adresse ist ...", en: "My email address is ..." },
      { label: "letter", de: "A wie Anton.", en: "A as in Anton." },
    ],
    commonMistakes: [
      "Do not pronounce every German vowel like English. Listen first, then repeat.",
      "Do not ignore ß. It sounds like a clear s, as in heiße.",
      "When you spell an email address, say Punkt for dot and at for @ if you need to be understood quickly.",
    ],
    practice: [
      "Spell your first name, last name, and email address aloud three times.",
      "Make a slow recording of ä, ö, ü, and ß words, then listen back once.",
      "Practise asking for repetition before checking the written sentence.",
      "Read five German words aloud before tapping the audio.",
    ],
    checks: [
      { prompt: "How do you ask: Can you repeat that, please?", answer: "Können Sie das bitte wiederholen?" },
      { prompt: "What does Wie schreibt man das? mean?", answer: "How do you spell that?" },
      { prompt: "Which letter is not the same as ss in spelling: s / ß?", answer: "ß" },
    ],
    moduleIds: ["a1-1", "a1-2"],
  },
  {
    id: "personal-pronouns-and-verbs",
    category: "Grammar",
    title: "Personal Pronouns and Verb Endings",
    summary: "Use ich, du, er/sie/es, wir, ihr, sie/Sie with basic present-tense verb endings.",
    level: "A1",
    focus: ["pronouns", "verb endings", "kommen", "sprechen"],
    explanation: [
      "German verbs change with the subject. At A1, you need the most common present-tense endings for everyday speaking.",
      "The verb ending often tells you who is doing the action: ich komme, du kommst, er kommt.",
      "Formal Sie uses the same verb form as plural sie: Sie kommen, sie kommen.",
    ],
    patterns: [
      { label: "ich", de: "Ich komme aus Hongkong.", en: "I come from Hong Kong." },
      { label: "du", de: "Du sprichst Deutsch.", en: "You speak German." },
      { label: "er", de: "Er wohnt in Berlin.", en: "He lives in Berlin." },
      { label: "wir", de: "Wir lernen Deutsch.", en: "We are learning German." },
      { label: "formal", de: "Sprechen Sie Englisch?", en: "Do you speak English?" },
    ],
    commonMistakes: [
      "Do not use the infinitive after ich in simple present sentences. Say ich komme, not ich kommen.",
      "Remember du often takes -st: du wohnst, du kommst, du lernst.",
      "Capital Sie is formal you. Lowercase sie can mean she or they.",
    ],
    practice: [
      "Conjugate wohnen with ich, du, er, wir, ihr, and Sie.",
      "Change five ich sentences into du questions.",
      "Read a sentence and identify the subject before translating it.",
      "Write three sentences about yourself and three about another person.",
    ],
    checks: [
      { prompt: "Complete: Ich ___ in Berlin. (wohnen)", answer: "wohne" },
      { prompt: "Complete: Du ___ Deutsch. (lernen)", answer: "lernst" },
      { prompt: "Formal or informal: Sprechen Sie Deutsch?", answer: "formal" },
    ],
    moduleIds: ["a1-1", "a1-2", "a1-3"],
  },
  {
    id: "sein-and-haben",
    category: "Grammar",
    title: "sein and haben",
    summary: "Master the two highest-frequency German verbs for identity, location, possession, time, and needs.",
    level: "A1",
    focus: ["sein", "haben", "identity", "possession"],
    explanation: [
      "sein means to be and is used for identity, condition, and location: Ich bin Johnny. Ich bin krank. Ich bin hier.",
      "haben means to have and is used for possession, appointments, time, and many useful phrases: Ich habe Zeit.",
      "These verbs are irregular, so memorise them as whole forms instead of trying to guess the endings.",
    ],
    patterns: [
      { label: "identity", de: "Ich bin Softwareentwickler.", en: "I am a software engineer." },
      { label: "condition", de: "Ich bin krank.", en: "I am sick." },
      { label: "time", de: "Hast du am Samstag Zeit?", en: "Do you have time on Saturday?" },
      { label: "object", de: "Ich habe eine Telefonnummer.", en: "I have a phone number." },
      { label: "formal question", de: "Haben Sie Wasser?", en: "Do you have water?" },
    ],
    commonMistakes: [
      "Do not say ich habe krank. Say ich bin krank.",
      "Do not say ich bin Zeit. Say ich habe Zeit.",
      "For questions, the verb moves first: Hast du Zeit?",
    ],
    practice: [
      "Make five ich bin sentences and five ich habe sentences.",
      "Turn three haben statements into questions.",
      "Sort phrases into sein or haben: Zeit, krank, neu, eine Adresse, müde.",
      "Say the full conjugation of sein and haben once per day for a week.",
    ],
    checks: [
      { prompt: "Complete: Ich ___ krank.", answer: "bin" },
      { prompt: "Complete: Ich ___ keine Zeit.", answer: "habe" },
      { prompt: "Translate: Do you have time?", answer: "Hast du Zeit?" },
    ],
    moduleIds: ["a1-1", "a1-2", "a1-3", "a1-6"],
  },
  {
    id: "articles-der-die-das",
    category: "Grammar",
    title: "Articles: der, die, das",
    summary: "Learn every noun with its article, then practise gender and plural patterns.",
    level: "A1",
    focus: ["noun gender", "definite articles", "plural article die"],
    explanation: [
      "German nouns have grammatical gender. The article is part of the word you need to learn.",
      "At A1, do not try to predict every gender. Learn strong daily nouns as chunks: der Bahnhof, die Schule, das Café.",
      "Plural nouns use die in the nominative: die Bücher, die Tomaten, die Sprachen.",
    ],
    patterns: [
      { label: "masculine", de: "der Bahnhof", en: "the train station" },
      { label: "feminine", de: "die Schule", en: "the school" },
      { label: "neuter", de: "das Café", en: "the cafe" },
      { label: "plural", de: "die Bücher", en: "the books" },
      { label: "sentence", de: "Der Bahnhof ist hier.", en: "The train station is here." },
      { label: "sentence", de: "Die Apotheke ist links.", en: "The pharmacy is on the left." },
    ],
    commonMistakes: [
      "Do not learn Bahnhof alone. Learn der Bahnhof.",
      "Do not assume biological gender tells you grammar gender. The article belongs to the noun.",
      "Plural die is not the same idea as feminine die. It is the plural article.",
    ],
    practice: [
      "Sort new nouns into der, die, and das groups.",
      "Say each noun aloud with its article before checking the meaning.",
      "Write five sentences with Das ist ... and a noun you know.",
      "Create a mini noun list from your room or street and add an article to every noun.",
    ],
    checks: [
      { prompt: "What article goes with Bahnhof?", answer: "der Bahnhof" },
      { prompt: "What article goes with Schule?", answer: "die Schule" },
      { prompt: "What article do plural nouns use in this topic?", answer: "die" },
    ],
    moduleIds: ["a1-4", "a1-5"],
  },
  {
    id: "indefinite-and-negative-articles",
    category: "Grammar",
    title: "ein, eine, kein, keine",
    summary: "Build simple positive and negative noun phrases for everyday objects and places.",
    level: "A1",
    focus: ["indefinite articles", "negative articles", "noun phrase contrast"],
    explanation: [
      "ein/eine means a or one. Use it when you introduce a thing for the first time.",
      "kein/keine negates a noun: kein Bahnhof means no train station or not a train station.",
      "At A1, focus first on nominative forms: ein Bahnhof, eine Schule, ein Café, keine Bücher.",
    ],
    patterns: [
      { label: "positive", de: "Das ist ein Supermarkt.", en: "That is a supermarket." },
      { label: "negative", de: "Das ist kein Supermarkt.", en: "That is not a supermarket." },
      { label: "no time", de: "Ich habe keine Zeit.", en: "I have no time." },
      { label: "feminine", de: "Das ist eine Apotheke.", en: "That is a pharmacy." },
      { label: "neuter", de: "Das ist ein Café.", en: "That is a cafe." },
      { label: "plural", de: "Ich habe keine Bücher.", en: "I have no books." },
    ],
    commonMistakes: [
      "Do not use nicht before a noun when kein is needed. Say kein Supermarkt, not nicht ein Supermarkt.",
      "eine is for feminine nouns in this basic pattern: eine Schule, eine Adresse.",
      "kein follows the article pattern: kein Bahnhof, keine Schule, kein Café.",
    ],
    practice: [
      "Transform five ein/eine phrases into kein/keine phrases.",
      "Point at objects around you and say Das ist ein/eine ...",
      "Make three useful no-sentences with Ich habe keine ...",
      "Write pairs: Das ist ein ... / Das ist kein ...",
    ],
    checks: [
      { prompt: "Negate: Das ist ein Bahnhof.", answer: "Das ist kein Bahnhof." },
      { prompt: "Choose: ein Schule / eine Schule", answer: "eine Schule" },
      { prompt: "Translate: I have no time.", answer: "Ich habe keine Zeit." },
    ],
    moduleIds: ["a1-2", "a1-5"],
  },
  {
    id: "accusative-case",
    category: "Grammar",
    title: "Accusative Case",
    summary: "Practise the direct object pattern, especially masculine changes: der/ein becomes den/einen.",
    level: "A1",
    focus: ["direct objects", "masculine article change", "shopping and ordering"],
    explanation: [
      "The accusative often marks the direct object: the thing you buy, need, have, see, or order.",
      "The most important A1 change is masculine: der becomes den, and ein becomes einen.",
      "Feminine, neuter, and plural articles mostly look the same in the basic accusative forms you need first.",
    ],
    patterns: [
      { label: "masculine", de: "Ich möchte einen Kaffee.", en: "I would like a coffee." },
      { label: "feminine", de: "Ich kaufe eine Banane.", en: "I buy a banana." },
      { label: "neuter", de: "Ich nehme das Brot.", en: "I will take the bread." },
      { label: "definite masculine", de: "Ich sehe den Bahnhof.", en: "I see the train station." },
      { label: "negative", de: "Ich mag keinen Fisch.", en: "I do not like fish." },
      { label: "need", de: "Ich brauche einen Termin.", en: "I need an appointment." },
    ],
    commonMistakes: [
      "Do not say Ich möchte ein Kaffee when Kaffee is masculine in this ordering pattern. Say einen Kaffee.",
      "Remember that only masculine visibly changes in these first forms.",
      "After haben, brauchen, kaufen, nehmen, sehen, mögen, and möchten, check whether the object is masculine.",
    ],
    practice: [
      "Mark the object in each shopping sentence.",
      "Convert der/ein masculine nouns to den/einen after kaufen, nehmen, haben, or möchten.",
      "Write a five-item shopping list using Ich brauche ...",
      "Make three sentences with keinen for things you do not like or do not have.",
    ],
    checks: [
      { prompt: "Choose: Ich möchte ein Kaffee / einen Kaffee.", answer: "Ich möchte einen Kaffee." },
      { prompt: "Complete: Ich sehe ___ Bahnhof.", answer: "den" },
      { prompt: "Translate: I do not like fish.", answer: "Ich mag keinen Fisch." },
    ],
    moduleIds: ["a1-4", "a1-5"],
  },
  {
    id: "sentence-position-two",
    category: "Grammar",
    title: "Sentence Position 2",
    summary: "Train the German verb to stay in second position in normal statements.",
    level: "A1",
    focus: ["main clauses", "time first", "verb placement"],
    explanation: [
      "In a normal German statement, the conjugated verb is usually in position 2.",
      "Position 1 can be the subject, a time phrase, or a place phrase. The verb still stays second.",
      "This is one of the most useful A1 grammar habits because it makes your sentences sound German quickly.",
    ],
    patterns: [
      { label: "subject first", de: "Ich lerne heute Deutsch.", en: "I am learning German today." },
      { label: "time first", de: "Heute lerne ich Deutsch.", en: "Today I am learning German." },
      { label: "place first", de: "In Berlin wohne ich.", en: "I live in Berlin." },
      { label: "weekday first", de: "Am Montag arbeite ich.", en: "On Monday I work." },
      { label: "contrast", de: "Jetzt wohne ich in Berlin.", en: "Now I live in Berlin." },
    ],
    commonMistakes: [
      "Do not keep English word order after a time phrase. Say Heute lerne ich, not Heute ich lerne.",
      "The verb is the anchor. Find it first when checking a sentence.",
      "This rule is for main clauses. Later, subordinate clauses like weil use different word order.",
    ],
    practice: [
      "Reorder scrambled sentences and check whether the verb is second.",
      "Start three sentences with Heute, Am Montag, and In Berlin.",
      "Read the sentence aloud once slowly and once naturally.",
      "Rewrite five ich-first sentences with a time phrase first.",
    ],
    checks: [
      { prompt: "Reorder: Heute / ich / lerne / Deutsch.", answer: "Heute lerne ich Deutsch." },
      { prompt: "Where is the verb in a normal statement?", answer: "Position 2" },
      { prompt: "Correct it: Am Montag ich arbeite.", answer: "Am Montag arbeite ich." },
    ],
    moduleIds: ["a1-2", "a1-3", "a2-6"],
  },
  {
    id: "questions",
    category: "Grammar",
    title: "Questions",
    summary: "Build W-questions and yes/no questions for real conversations.",
    level: "A1",
    focus: ["W-questions", "yes/no questions", "formal and informal address"],
    explanation: [
      "W-questions start with a question word, then the conjugated verb: Wo wohnst du?",
      "Yes/no questions start with the verb: Wohnst du in Berlin?",
      "Formal questions use Sie and the matching verb form: Sprechen Sie Deutsch?",
    ],
    patterns: [
      { label: "W-question", de: "Wo wohnst du?", en: "Where do you live?" },
      { label: "formal", de: "Wie heißen Sie?", en: "What is your name?" },
      { label: "yes/no", de: "Hast du am Montag Zeit?", en: "Do you have time on Monday?" },
      { label: "origin", de: "Woher kommst du?", en: "Where do you come from?" },
      { label: "language", de: "Welche Sprachen sprichst du?", en: "Which languages do you speak?" },
      { label: "place", de: "Ist hier ein Supermarkt?", en: "Is there a supermarket here?" },
    ],
    commonMistakes: [
      "Do not translate English do/does into German. German does not need a helper word for basic questions.",
      "In yes/no questions, put the verb first: Hast du Zeit?",
      "Keep Sie capitalised when it means formal you.",
    ],
    practice: [
      "Turn five answers into questions.",
      "Make one formal and one informal version of the same question.",
      "Ask and answer the question aloud without reading the English.",
      "Write one question with each word: wie, wo, woher, was, wann, welche.",
    ],
    checks: [
      { prompt: "Translate: Where do you live?", answer: "Wo wohnst du?" },
      { prompt: "Make a yes/no question: Du hast Zeit.", answer: "Hast du Zeit?" },
      { prompt: "Formal or informal: Wie heißen Sie?", answer: "formal" },
    ],
    moduleIds: ["a1-1", "a1-2", "a1-3"],
  },
  {
    id: "modal-verbs",
    category: "Grammar",
    title: "Modal Verbs",
    summary: "Use können, müssen, möchten, and wollen to express ability, obligation, wishes, and plans.",
    level: "A2",
    focus: ["modal verb conjugation", "second verb at the end", "polite requests"],
    patterns: [
      { label: "can", de: "Ich kann Deutsch lernen.", en: "I can learn German." },
      { label: "must", de: "Ich muss heute arbeiten.", en: "I have to work today." },
      { label: "would like", de: "Ich möchte einen Kaffee.", en: "I would like a coffee." },
    ],
    practice: [
      "Underline the modal verb and circle the final infinitive.",
      "Make three useful sentences with ich kann, ich muss, and ich möchte.",
      "Change one direct request into a polite möchten or könnten request.",
    ],
    moduleIds: ["a1-4", "a1-5", "a2-1", "a2-4"],
  },
  {
    id: "perfekt-past",
    category: "Grammar",
    title: "Perfekt Past",
    summary: "Tell simple past events with haben or sein plus a past participle.",
    level: "A2",
    focus: ["haben/sein choice", "past participles", "narrative time phrases"],
    patterns: [
      { label: "haben", de: "Gestern habe ich Deutsch gelernt.", en: "Yesterday I learned German." },
      { label: "sein", de: "Ich bin zum Arzt gegangen.", en: "I went to the doctor." },
      { label: "sequence", de: "Danach habe ich eingekauft.", en: "After that I shopped." },
    ],
    practice: [
      "Sort ten verbs into haben or sein groups.",
      "Write five sentences about yesterday.",
      "Retell the same event with gestern, danach, and am Abend.",
    ],
    moduleIds: ["a2-2"],
  },
  {
    id: "subordinate-clauses",
    category: "Grammar",
    title: "weil, dass, wenn",
    summary: "Connect ideas with subordinate clauses and move the verb to the end.",
    level: "A2",
    focus: ["verb-final clauses", "reasons", "opinions", "conditions"],
    patterns: [
      { label: "reason", de: "Ich lerne Deutsch, weil ich in Deutschland lebe.", en: "I learn German because I live in Germany." },
      { label: "opinion", de: "Ich finde, dass Deutsch wichtig ist.", en: "I think German is important." },
      { label: "condition", de: "Wenn ich Zeit habe, lerne ich.", en: "When I have time, I study." },
    ],
    practice: [
      "Move the conjugated verb to the end after weil, dass, or wenn.",
      "Write three reasons why German matters to your life.",
      "Combine two short sentences into one connected sentence.",
    ],
    moduleIds: ["a2-6", "b1-1"],
  },
  {
    id: "relative-clauses",
    category: "Grammar",
    title: "Relative Clauses",
    summary: "Describe people and things more precisely with der, die, and das as relative pronouns.",
    level: "B1",
    focus: ["relative pronouns", "noun description", "verb-final relative clause"],
    patterns: [
      { label: "feminine", de: "Ich suche eine Arbeit, die zu mir passt.", en: "I am looking for a job that suits me." },
      { label: "masculine", de: "Das ist der Kurs, der mir hilft.", en: "That is the course that helps me." },
      { label: "neuter", de: "Ich lese ein Buch, das interessant ist.", en: "I am reading a book that is interesting." },
    ],
    practice: [
      "Pick one noun and add a relative clause to describe it.",
      "Check that the relative-clause verb is at the end.",
      "Make three sentences about work, study, or housing.",
    ],
    moduleIds: ["b1-2"],
  },
  {
    id: "passive-basics",
    category: "Grammar",
    title: "Passive Basics",
    summary: "Recognise common passive forms in notices, repairs, complaints, and formal messages.",
    level: "B1",
    focus: ["werden + participle", "notices", "problem descriptions"],
    patterns: [
      { label: "repair", de: "Die Heizung wird repariert.", en: "The heating is being repaired." },
      { label: "notice", de: "Der Termin wird verschoben.", en: "The appointment is being moved." },
      { label: "formal", de: "Die Unterlagen werden geprüft.", en: "The documents are being checked." },
    ],
    practice: [
      "Find wird or werden and identify the action at the end.",
      "Turn three active service sentences into passive notice sentences.",
      "Use passive forms when the person doing the action is not important.",
    ],
    moduleIds: ["b1-3", "b1-4"],
  },
  {
    id: "directions-and-places",
    category: "Communication",
    title: "Directions and Places",
    summary: "Ask where things are and understand simple directions around town.",
    level: "A1",
    focus: ["places", "directions", "polite street questions"],
    explanation: [
      "For A1, you only need simple direction language: left, right, straight ahead, and a polite opening.",
      "Use Entschuldigung before asking a stranger. Use Sie forms when giving polite directions.",
      "Practise directions with real places near you, because the words become easier when they are attached to your daily route.",
    ],
    patterns: [
      { label: "ask", de: "Entschuldigung, wo ist der Bahnhof?", en: "Excuse me, where is the train station?" },
      { label: "straight", de: "Gehen Sie geradeaus.", en: "Go straight ahead." },
      { label: "turn", de: "Biegen Sie links ab.", en: "Turn left." },
      { label: "right", de: "Biegen Sie rechts ab.", en: "Turn right." },
      { label: "near", de: "Der Supermarkt ist neben dem Bahnhof.", en: "The supermarket is next to the train station." },
      { label: "there is", de: "Hier gibt es eine Apotheke.", en: "There is a pharmacy here." },
    ],
    commonMistakes: [
      "Do not forget the polite opening when talking to strangers: Entschuldigung.",
      "links and rechts are easy to mix up under pressure. Practise them with hand gestures.",
      "For simple A1 directions, short sentences are better than complicated explanations.",
    ],
    practice: [
      "Describe a route using links, rechts, and geradeaus.",
      "Ask for three places near your apartment.",
      "Listen to a direction sentence before reading it.",
      "Draw a tiny map and say five directions aloud.",
    ],
    checks: [
      { prompt: "Translate: Go straight ahead.", answer: "Gehen Sie geradeaus." },
      { prompt: "Translate: Turn right.", answer: "Biegen Sie rechts ab." },
      { prompt: "How do you politely start a street question?", answer: "Entschuldigung" },
    ],
    moduleIds: ["a1-5"],
  },
  {
    id: "greetings-and-introductions",
    category: "Communication",
    title: "Greetings and Introductions",
    summary: "Handle first meetings with greetings, names, origin, languages, and simple follow-up questions.",
    level: "A1",
    focus: ["greetings", "farewells", "self-introduction", "small talk"],
    explanation: [
      "A1 speaking begins with predictable social language. Memorise a few whole scripts so you can start conversations calmly.",
      "Use du with classmates or friends, and Sie with strangers, teachers, offices, and service situations unless invited to use du.",
      "A good A1 introduction is short: name, origin, current city, languages, job or study.",
    ],
    patterns: [
      { label: "hello", de: "Guten Tag.", en: "Good day / hello." },
      { label: "name", de: "Hallo, ich heiße Johnny.", en: "Hello, my name is Johnny." },
      { label: "origin", de: "Ich komme aus Hongkong und wohne in Berlin.", en: "I come from Hong Kong and live in Berlin." },
      { label: "languages", de: "Ich spreche Englisch und ein bisschen Deutsch.", en: "I speak English and a little German." },
      { label: "wellbeing", de: "Wie geht es dir?", en: "How are you?" },
      { label: "farewell", de: "Auf Wiedersehen.", en: "Goodbye." },
    ],
    commonMistakes: [
      "Do not overbuild your first introduction. Clear and short is better than long and fragile.",
      "Use Guten Tag safely in formal situations. Hallo is friendly but less formal.",
      "Keep the verb second: Ich heiße Johnny. Ich komme aus Hongkong.",
    ],
    practice: [
      "Memorise a six-sentence self-introduction.",
      "Record your introduction at 0.75x speed, then at normal speed.",
      "Ask and answer: Wie heißt du? Woher kommst du? Wo wohnst du?",
      "Make one formal version and one informal version of a greeting dialogue.",
    ],
    checks: [
      { prompt: "Translate: My name is Johnny.", answer: "Ich heiße Johnny." },
      { prompt: "Translate: I live in Berlin.", answer: "Ich wohne in Berlin." },
      { prompt: "Which is more formal: Hallo / Guten Tag?", answer: "Guten Tag" },
    ],
    moduleIds: ["a1-1", "a1-2"],
  },
  {
    id: "hobbies-and-meetings",
    category: "Communication",
    title: "Hobbies and Meetings",
    summary: "Say what you like doing, ask about free time, and arrange simple meetings.",
    level: "A1",
    focus: ["gern", "hobbies", "weekdays", "appointments"],
    explanation: [
      "Use gern after the verb to say you like doing something: Ich lese gern.",
      "For meeting plans, combine haben, Zeit, and weekdays: Hast du am Montag Zeit?",
      "A1 meeting language works best with short yes/no answers plus one alternative time.",
    ],
    patterns: [
      { label: "hobby", de: "Ich lese gern.", en: "I like reading." },
      { label: "sport", de: "Ich gehe gern ins Fitnessstudio.", en: "I like going to the gym." },
      { label: "ask hobby", de: "Was machst du gern?", en: "What do you like doing?" },
      { label: "ask time", de: "Hast du am Samstag Zeit?", en: "Do you have time on Saturday?" },
      { label: "meet", de: "Wir treffen uns am Dienstag.", en: "We meet on Tuesday." },
      { label: "decline", de: "Leider habe ich keine Zeit.", en: "Unfortunately I have no time." },
    ],
    commonMistakes: [
      "Do not translate like as mögen for every hobby sentence. Ich lese gern is a very natural A1 pattern.",
      "Use am with weekdays: am Montag, am Dienstag.",
      "If you decline, add a simple alternative if possible: Aber am Sonntag geht es.",
    ],
    practice: [
      "List five hobbies and make one gern sentence for each.",
      "Ask three meeting questions with different weekdays.",
      "Write a four-line dialogue arranging a meeting.",
      "Say your real weekly availability in German.",
    ],
    checks: [
      { prompt: "Translate: I like reading.", answer: "Ich lese gern." },
      { prompt: "Translate: Do you have time on Saturday?", answer: "Hast du am Samstag Zeit?" },
      { prompt: "What preposition is used with weekdays: in Montag / am Montag?", answer: "am Montag" },
    ],
    moduleIds: ["a1-3"],
  },
  {
    id: "personal-information",
    category: "Vocabulary",
    title: "Personal Information",
    summary: "Practise the core words and sentences for name, origin, address, languages, and contact details.",
    level: "A1",
    focus: ["name", "origin", "languages", "contact details"],
    explanation: [
      "Personal information is an A1 survival topic because it appears in introductions, forms, appointments, and classes.",
      "Practise both giving information and asking for it. A form may ask you to recognise the same words in a different order.",
      "For phone numbers and email addresses, clarity matters more than speed.",
    ],
    patterns: [
      { label: "name", de: "Ich heiße Johnny.", en: "My name is Johnny." },
      { label: "origin", de: "Ich komme aus Hongkong.", en: "I come from Hong Kong." },
      { label: "languages", de: "Ich spreche Englisch und ein bisschen Deutsch.", en: "I speak English and a little German." },
      { label: "home", de: "Ich wohne in Berlin.", en: "I live in Berlin." },
      { label: "job", de: "Ich bin Softwareentwickler.", en: "I am a software engineer." },
      { label: "question", de: "Welche Sprachen sprechen Sie?", en: "Which languages do you speak?" },
    ],
    commonMistakes: [
      "Use aus for origin: Ich komme aus Hongkong.",
      "Use in for current city: Ich wohne in Berlin.",
      "Do not rush spelling. Ask for repetition if needed.",
    ],
    practice: [
      "Record a 30-second self-introduction.",
      "Spell your name and email address aloud.",
      "Ask and answer three personal-information questions.",
      "Fill a fictional registration form with German labels.",
    ],
    checks: [
      { prompt: "Translate: I come from Hong Kong.", answer: "Ich komme aus Hongkong." },
      { prompt: "Translate: Which languages do you speak?", answer: "Welche Sprachen sprechen Sie?" },
      { prompt: "Which preposition means from in origin sentences?", answer: "aus" },
    ],
    moduleIds: ["a1-1", "a1-2"],
  },
  {
    id: "numbers-time-and-dates",
    category: "Vocabulary",
    title: "Numbers, Time, and Dates",
    summary: "Strengthen numbers for phone numbers, prices, times, weekdays, months, and appointments.",
    level: "A1",
    focus: ["numbers", "weekdays", "months", "appointments"],
    explanation: [
      "A1 numbers are not only for counting. You need them for phone numbers, addresses, prices, times, dates, and platforms.",
      "German numbers above 20 say the ones before the tens: einundzwanzig is one-and-twenty.",
      "Practise numbers in realistic chunks rather than only counting from 1 to 100.",
    ],
    patterns: [
      { label: "phone", de: "Meine Telefonnummer ist null eins zwei.", en: "My phone number is zero one two." },
      { label: "time", de: "Es ist neun Uhr.", en: "It is nine o'clock." },
      { label: "weekday", de: "Hast du am Montag Zeit?", en: "Do you have time on Monday?" },
      { label: "price", de: "Das kostet zwei Euro fünfzig.", en: "That costs two euros fifty." },
      { label: "month", de: "Der Termin ist im Mai.", en: "The appointment is in May." },
      { label: "platform", de: "Der Zug fährt von Gleis eins.", en: "The train leaves from platform one." },
    ],
    commonMistakes: [
      "Do not read phone numbers as one large number. Say the digits clearly.",
      "Remember the reversed structure after 20: dreiundzwanzig, not zwanzig-drei.",
      "Use am with weekdays and im with months: am Montag, im Mai.",
    ],
    practice: [
      "Read random phone numbers aloud digit by digit.",
      "Say five times and five prices without looking.",
      "Make three appointment sentences with weekdays.",
      "Listen to numbers and write the digits before checking.",
    ],
    checks: [
      { prompt: "What is 21 in German?", answer: "einundzwanzig" },
      { prompt: "Translate: It is nine o'clock.", answer: "Es ist neun Uhr." },
      { prompt: "Choose: am Mai / im Mai", answer: "im Mai" },
    ],
    moduleIds: ["a1-2", "a1-3", "a1-6"],
  },
  {
    id: "work-places-and-services",
    category: "Vocabulary",
    title: "Work, Places, and Services",
    summary: "Review practical nouns and verbs for jobs, city places, transport, public offices, and service problems.",
    level: "A2",
    focus: ["jobs", "places", "transport", "services"],
    patterns: [
      { label: "work", de: "Ich arbeite im Büro.", en: "I work in an office." },
      { label: "city", de: "In meiner Stadt gibt es einen Bahnhof.", en: "There is a train station in my city." },
      { label: "service", de: "Die Waschmaschine ist kaputt.", en: "The washing machine is broken." },
    ],
    practice: [
      "Group nouns by topic and always include the article.",
      "Describe three places near your home.",
      "Write one short service problem with object, issue, and request.",
    ],
    moduleIds: ["a1-5", "a2-1", "a2-4", "a2-5"],
  },
  {
    id: "food-and-shopping",
    category: "Communication",
    title: "Food and Shopping",
    summary: "Order food, ask prices, and say what you like or do not like.",
    level: "A1",
    focus: ["ordering", "prices", "food preferences", "accusative objects"],
    explanation: [
      "Food and shopping combine vocabulary with useful grammar: möchten, brauchen, mögen, prices, and accusative objects.",
      "Use Ich möchte ... bitte as a safe polite ordering pattern.",
      "Use mögen for preferences and möchten for wishes or orders.",
    ],
    patterns: [
      { label: "order", de: "Ich möchte einen Kaffee, bitte.", en: "I would like a coffee, please." },
      { label: "price", de: "Was kostet das?", en: "How much does that cost?" },
      { label: "preference", de: "Ich mag keinen Fisch.", en: "I do not like fish." },
      { label: "need", de: "Ich brauche Brot und Milch.", en: "I need bread and milk." },
      { label: "available", de: "Haben Sie Tomaten?", en: "Do you have tomatoes?" },
      { label: "pay", de: "Kann ich bitte bezahlen?", en: "Can I pay, please?" },
      { label: "bill", de: "Die Rechnung, bitte.", en: "The bill, please." },
    ],
    commonMistakes: [
      "Use möchten for ordering politely: Ich möchte einen Kaffee.",
      "Use mögen for likes: Ich mag Kaffee.",
      "Check masculine accusative: einen Kaffee, keinen Fisch.",
    ],
    practice: [
      "Build a six-line cafe dialogue.",
      "Say five prices aloud in German.",
      "Make three like and dislike sentences with mögen.",
      "Write a short shopping list and turn it into Ich brauche ... sentences.",
      "Practise asking Was kostet das? with five objects.",
    ],
    checks: [
      { prompt: "Translate: I would like a coffee.", answer: "Ich möchte einen Kaffee." },
      { prompt: "Translate: How much does that cost?", answer: "Was kostet das?" },
      { prompt: "Use mögen or möchten: I like coffee.", answer: "Ich mag Kaffee." },
    ],
    moduleIds: ["a1-4"],
  },
  {
    id: "transport-and-basic-travel",
    category: "Communication",
    title: "Transport and Basic Travel",
    summary: "Understand simple transport words, platforms, delays, and travel questions.",
    level: "A1",
    focus: ["transport", "platforms", "departure", "delays"],
    explanation: [
      "A1 transport language should help you recognise signs and ask simple questions.",
      "Learn the article with transport nouns: der Bus, die U-Bahn, die S-Bahn, der Zug, das Auto.",
      "Short travel sentences are enough at first: where, when, platform, and delay.",
    ],
    patterns: [
      { label: "bus", de: "Ich fahre mit dem Bus.", en: "I travel by bus." },
      { label: "train", de: "Der Zug kommt um acht Uhr.", en: "The train arrives at eight o'clock." },
      { label: "platform", de: "Wo ist Gleis eins?", en: "Where is platform one?" },
      { label: "delay", de: "Der Zug hat Verspätung.", en: "The train is delayed." },
      { label: "walk", de: "Ich gehe zu Fuß.", en: "I go on foot." },
    ],
    commonMistakes: [
      "Do not try to explain a whole journey at first. Start with one transport method and one time.",
      "Gleis is platform for trains. Haltestelle is stop for bus or tram contexts.",
      "mit dem Bus is a fixed useful chunk for A1 travel.",
    ],
    practice: [
      "Say how you get to work, class, and home.",
      "Practise three sentences with der Bus, die U-Bahn, and der Zug.",
      "Read a simple departure sentence and identify the time.",
      "Make two questions: where is the platform, and when does the train come?",
    ],
    checks: [
      { prompt: "Translate: The train is delayed.", answer: "Der Zug hat Verspätung." },
      { prompt: "What does Gleis mean?", answer: "platform" },
      { prompt: "Translate: I travel by bus.", answer: "Ich fahre mit dem Bus." },
    ],
    moduleIds: ["a1-5", "a1-6"],
  },
  {
    id: "appointments-and-health",
    category: "Communication",
    title: "Appointments and Health",
    summary: "Make, move, or cancel simple appointments and explain basic health problems.",
    level: "A1",
    focus: ["appointments", "health", "cancellation", "short messages"],
    explanation: [
      "This topic is useful because offices, doctors, and classes often require short, clear appointment language.",
      "Use Ich brauche einen Termin for requesting an appointment.",
      "For A1 health, focus on simple condition sentences: Ich bin krank. Ich habe Kopfschmerzen.",
    ],
    patterns: [
      { label: "need", de: "Ich brauche einen Termin.", en: "I need an appointment." },
      { label: "sick", de: "Ich bin krank.", en: "I am sick." },
      { label: "cancel", de: "Ich sage den Termin ab.", en: "I cancel the appointment." },
      { label: "move", de: "Können wir den Termin verschieben?", en: "Can we move the appointment?" },
      { label: "cannot come", de: "Ich kann heute nicht kommen.", en: "I cannot come today." },
      { label: "short message", de: "Entschuldigung, ich bin krank.", en: "Sorry, I am sick." },
    ],
    commonMistakes: [
      "Say Ich bin krank, not Ich habe krank.",
      "Termin is masculine, so in accusative it becomes einen Termin or den Termin.",
      "For a short message, include reason and action: sick, cannot come, cancel or move appointment.",
    ],
    practice: [
      "Write a two-sentence cancellation message.",
      "Practise asking for an appointment with bitte.",
      "Make three health sentences with Ich bin ... or Ich habe ...",
      "Record a short voicemail opening with name, problem, and request.",
    ],
    checks: [
      { prompt: "Translate: I need an appointment.", answer: "Ich brauche einen Termin." },
      { prompt: "Correct it: Ich habe krank.", answer: "Ich bin krank." },
      { prompt: "Complete: Ich sage den Termin ___.", answer: "ab" },
    ],
    moduleIds: ["a1-6"],
  },
  {
    id: "weather-and-seasons",
    category: "Vocabulary",
    title: "Weather and Seasons",
    summary: "Talk about basic weather, seasons, temperature, and simple plans connected to the weather.",
    level: "A1",
    focus: ["weather", "seasons", "temperature", "simple opinions"],
    explanation: [
      "Weather is small talk, planning language, and listening vocabulary. Keep it simple at A1: condition plus one reaction.",
      "Use im with seasons and months: im Sommer, im Januar.",
      "Weather phrases often use es: Es regnet. Es ist kalt. Es ist warm.",
    ],
    patterns: [
      { label: "question", de: "Wie ist das Wetter?", en: "What is the weather like?" },
      { label: "rain", de: "Es regnet.", en: "It is raining." },
      { label: "cold", de: "Es ist kalt.", en: "It is cold." },
      { label: "warm", de: "Im Sommer ist es warm.", en: "In summer it is warm." },
      { label: "plan", de: "Bei gutem Wetter gehen wir spazieren.", en: "In good weather we go for a walk." },
    ],
    commonMistakes: [
      "Do not translate English it is raining word by word. German says Es regnet.",
      "Use im for seasons: im Winter, im Frühling, im Sommer, im Herbst.",
      "For A1, one weather sentence plus one simple plan is enough.",
    ],
    practice: [
      "Say today's weather in one sentence.",
      "Make four season sentences with im.",
      "Write two plans: one for good weather and one for bad weather.",
      "Listen to five weather sentences and identify the season or condition.",
    ],
    checks: [
      { prompt: "Translate: It is raining.", answer: "Es regnet." },
      { prompt: "Choose: am Sommer / im Sommer", answer: "im Sommer" },
      { prompt: "Translate: What is the weather like?", answer: "Wie ist das Wetter?" },
    ],
    moduleIds: ["a1-3", "a1-6"],
  },
  {
    id: "forms-notes-and-signs",
    category: "Communication",
    title: "Forms, Notes, and Signs",
    summary: "Read short public information, fill simple forms, and write two- to four-sentence messages.",
    level: "A1",
    focus: ["forms", "notices", "signs", "short messages"],
    explanation: [
      "A1 exams and everyday life both use very short practical texts: forms, signs, notes, messages, and notices.",
      "For forms, recognise labels before translating every word. For messages, include reason, action, and polite closing.",
      "Public signs often name a place or action: Eingang, Ausgang, Bitte warten.",
    ],
    patterns: [
      { label: "form", de: "Bitte füllen Sie das Formular aus.", en: "Please fill out the form." },
      { label: "label", de: "Name, Adresse, Telefonnummer", en: "Name, address, phone number" },
      { label: "sign", de: "Ausgang", en: "Exit" },
      { label: "notice", de: "Bitte warten Sie hier.", en: "Please wait here." },
      { label: "message", de: "Entschuldigung, ich kann heute nicht kommen.", en: "Sorry, I cannot come today." },
      { label: "close", de: "Vielen Dank und freundliche Grüße", en: "Many thanks and kind regards" },
    ],
    commonMistakes: [
      "Do not write long explanations for an A1 short message. Keep it clear and practical.",
      "Do not ignore form labels. Name, address, phone number, and date of birth are core A1 words.",
      "A sign may not be a full sentence; still learn it as useful language.",
    ],
    practice: [
      "Fill one fictional form using German labels.",
      "Sort signs into place, direction, or action.",
      "Write a cancellation message with reason and request.",
      "Read a short notice and underline the time, place, or required action.",
    ],
    checks: [
      { prompt: "What does Ausgang mean?", answer: "exit" },
      { prompt: "Translate: Please wait here.", answer: "Bitte warten Sie hier." },
      { prompt: "What three things should a short cancellation message include?", answer: "Reason, action, and polite tone." },
    ],
    moduleIds: ["a1-2", "a1-5", "a1-6"],
  },
];

export const topicCategories: TopicCategory[] = ["Grammar", "Vocabulary", "Communication"];

export function getTopicById(id: string) {
  return topics.find((topic) => topic.id === id);
}

export function getTopicsByCategory(category: TopicCategory) {
  return topics.filter((topic) => topic.category === category);
}
