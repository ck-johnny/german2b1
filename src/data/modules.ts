export type Level = "A1" | "A2" | "B1";

export type VocabularyItem = {
  de: string;
  en: string;
  zh: string;
  note?: string;
};

export type BilingualNote = {
  en: string;
  zh: string;
};

export type TrilingualExample = {
  de: string;
  en: string;
  zh: string;
};

export type PracticeTask = {
  title: string;
  minutes: number;
  description: string;
};

export type MicroCheck = {
  prompt: string;
  answer: string;
};

export type LearningModule = {
  id: string;
  level: Level;
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
  searchPrompts: {
    en: string;
    zh: string;
  };
  resourceIds: string[];
};

const baseModules: LearningModule[] = [
  {
    id: "a1-1",
    level: "A1",
    order: 1,
    title: "Sounds and Greetings",
    titleZh: "發音與問候",
    theme: "Identity, register, pronunciation",
    examBridge: "Goethe A1 speaking basics",
    summary: "Start speaking immediately: greetings, names, origin, and the sounds that make German readable.",
    goalEn: "Greet politely, spell your name, say where you are from, and recognise key German sounds.",
    goalZh: "能禮貌問候、拼出姓名、說明來自哪裡，並辨認德語常見發音。",
    targetItems: ["alphabet", "ä/ö/ü and ß", "formal Sie vs informal du", "sein in present tense"],
    vocabulary: [
      { de: "Guten Tag", en: "good day / hello", zh: "您好" },
      { de: "Entschuldigung", en: "excuse me / sorry", zh: "不好意思" },
      { de: "ich heiße", en: "my name is", zh: "我叫作" },
      { de: "kommen aus", en: "come from", zh: "來自" },
    ],
    grammar: [
      { en: "German nouns are capitalised.", zh: "德語名詞一律大寫。" },
      { en: "The verb often comes second in a statement: Ich heiße Mei.", zh: "直述句中動詞通常在第二位：Ich heiße Mei。" },
    ],
    examples: [
      { de: "Guten Tag, ich heiße Mei.", en: "Good day, my name is Mei.", zh: "您好，我叫 Mei。" },
      { de: "Woher kommen Sie?", en: "Where do you come from?", zh: "您來自哪裡？" },
    ],
    tasks: [
      { title: "Pronunciation loop", minutes: 8, description: "Read the alphabet, umlauts, and ß aloud three times." },
      { title: "Self-introduction", minutes: 10, description: "Record a 30-second introduction with name, country, and languages." },
    ],
    microChecks: [
      { prompt: "Choose the formal question: Woher kommst du? / Woher kommen Sie?", answer: "Woher kommen Sie?" },
      { prompt: "Translate: My name is Mei.", answer: "Ich heiße Mei." },
    ],
    searchPrompts: {
      en: "German A1 greetings formal informal Sie du pronunciation umlauts",
      zh: "德語 A1 問候 Sie du 發音 母音變音",
    },
    resourceIds: ["goethe-b1", "vhs-lernportal"],
  },
  {
    id: "a1-2",
    level: "A1",
    order: 2,
    title: "Personal Details and Questions",
    titleZh: "個人資料與問句",
    theme: "Forms, names, countries, languages",
    examBridge: "A1 reading and speaking forms",
    summary: "Answer basic form questions and ask for essential personal information.",
    goalEn: "Give name, address, phone number, nationality, and language information.",
    goalZh: "能提供姓名、地址、電話、國籍與語言資訊。",
    targetItems: ["W-questions", "numbers in contact data", "haben", "personal pronouns"],
    vocabulary: [
      { de: "der Name", en: "name", zh: "姓名" },
      { de: "die Adresse", en: "address", zh: "地址" },
      { de: "die Telefonnummer", en: "phone number", zh: "電話號碼" },
      { de: "die Sprache", en: "language", zh: "語言" },
    ],
    grammar: [
      { en: "W-questions put the question word first and the verb second.", zh: "W 問句中疑問詞第一位，動詞第二位。" },
      { en: "Use ich habe for information you possess: Ich habe eine Telefonnummer.", zh: "表示擁有資料可用 ich habe：Ich habe eine Telefonnummer。" },
    ],
    examples: [
      { de: "Wie ist Ihre Adresse?", en: "What is your address?", zh: "您的地址是什麼？" },
      { de: "Ich spreche Englisch und Chinesisch.", en: "I speak English and Chinese.", zh: "我會說英文和中文。" },
    ],
    tasks: [
      { title: "Form drill", minutes: 12, description: "Fill a fictional registration form in German." },
      { title: "Question swap", minutes: 8, description: "Turn five answers into questions with wie, wo, or welche." },
    ],
    microChecks: [
      { prompt: "Translate: What is your phone number?", answer: "Wie ist Ihre Telefonnummer?" },
      { prompt: "Which is formal: deine Adresse / Ihre Adresse?", answer: "Ihre Adresse" },
    ],
    searchPrompts: {
      en: "German A1 personal information questions forms address phone number",
      zh: "德語 A1 個人資料 問句 表格 地址 電話",
    },
    resourceIds: ["vhs-lernportal"],
  },
  {
    id: "a1-3",
    level: "A1",
    order: 3,
    title: "Time and Routine",
    titleZh: "時間與日常作息",
    theme: "Numbers, dates, present tense",
    examBridge: "A1 listening and writing",
    summary: "Describe the day with times, weekdays, and regular present-tense actions.",
    goalEn: "Understand simple schedules and describe your daily routine.",
    goalZh: "能理解簡單時程並描述日常作息。",
    targetItems: ["numbers", "time with Uhr", "regular present tense", "word order with time phrases"],
    vocabulary: [
      { de: "heute", en: "today", zh: "今天" },
      { de: "morgen", en: "tomorrow", zh: "明天" },
      { de: "arbeiten", en: "to work", zh: "工作" },
      { de: "lernen", en: "to learn", zh: "學習" },
    ],
    grammar: [
      { en: "Many regular verbs use -e with ich: ich lerne.", zh: "許多規則動詞搭配 ich 時字尾為 -e：ich lerne。" },
      { en: "Time can come first, then the verb still stays second: Heute lerne ich.", zh: "時間可放句首，但動詞仍在第二位：Heute lerne ich。" },
    ],
    examples: [
      { de: "Heute lerne ich Deutsch.", en: "Today I am learning German.", zh: "今天我學德語。" },
      { de: "Ich arbeite um neun Uhr.", en: "I work at nine o'clock.", zh: "我九點工作。" },
    ],
    tasks: [
      { title: "Routine timeline", minutes: 12, description: "Write six times and actions from your real day." },
      { title: "Listening check", minutes: 8, description: "Read times aloud and point to the matching number." },
    ],
    microChecks: [
      { prompt: "Put the verb second: Heute / ich / lerne / Deutsch.", answer: "Heute lerne ich Deutsch." },
      { prompt: "Translate: at nine o'clock", answer: "um neun Uhr" },
    ],
    searchPrompts: {
      en: "German A1 time routine present tense word order",
      zh: "德語 A1 時間 作息 現在式 語序",
    },
    resourceIds: ["vhs-lernportal"],
  },
  {
    id: "a1-4",
    level: "A1",
    order: 4,
    title: "Food and Shopping",
    titleZh: "飲食與購物",
    theme: "Ordering, prices, accusative basics",
    examBridge: "A1 practical communication",
    summary: "Buy everyday things, order food, and ask about prices politely.",
    goalEn: "Order food and buy simple items with prices and polite phrases.",
    goalZh: "能用價格與禮貌用語點餐、購買簡單物品。",
    targetItems: ["ich möchte", "accusative articles", "prices", "polite requests"],
    vocabulary: [
      { de: "der Kaffee", en: "coffee", zh: "咖啡" },
      { de: "das Brot", en: "bread", zh: "麵包" },
      { de: "die Rechnung", en: "bill / receipt", zh: "帳單" },
      { de: "Wie viel kostet das?", en: "How much does that cost?", zh: "這個多少錢？" },
    ],
    grammar: [
      { en: "Masculine der often becomes einen after verbs like nehmen: einen Kaffee.", zh: "陽性 der 在 nehmen 等動詞後常變成 einen：einen Kaffee。" },
      { en: "Ich möchte is a polite default for ordering.", zh: "Ich möchte 是點餐時安全禮貌的預設說法。" },
    ],
    examples: [
      { de: "Ich möchte einen Kaffee, bitte.", en: "I would like a coffee, please.", zh: "我想要一杯咖啡，謝謝。" },
      { de: "Die Rechnung, bitte.", en: "The bill, please.", zh: "請給我帳單。" },
    ],
    tasks: [
      { title: "Cafe dialogue", minutes: 10, description: "Write a six-line order and payment dialogue." },
      { title: "Price practice", minutes: 8, description: "Say five prices aloud in German." },
    ],
    microChecks: [
      { prompt: "Choose: Ich nehme der Kaffee / Ich nehme einen Kaffee.", answer: "Ich nehme einen Kaffee." },
      { prompt: "Translate: The bill, please.", answer: "Die Rechnung, bitte." },
    ],
    searchPrompts: {
      en: "German A1 ordering food prices accusative einen Kaffee",
      zh: "德語 A1 點餐 價格 受格 einen Kaffee",
    },
    resourceIds: ["vhs-lernportal"],
  },
  {
    id: "a1-5",
    level: "A1",
    order: 5,
    title: "Home and City Basics",
    titleZh: "住家與城市基礎",
    theme: "Housing, directions, modal verbs",
    examBridge: "A1 situation handling",
    summary: "Talk about your home, rooms, places in town, and very simple directions.",
    goalEn: "Describe where you live and ask for basic places in the city.",
    goalZh: "能描述住處並詢問城市中的基本地點。",
    targetItems: ["there is / es gibt", "modal verb können", "directions", "location phrases"],
    vocabulary: [
      { de: "die Wohnung", en: "apartment", zh: "公寓" },
      { de: "der Bahnhof", en: "train station", zh: "火車站" },
      { de: "links", en: "left", zh: "左邊" },
      { de: "rechts", en: "right", zh: "右邊" },
    ],
    grammar: [
      { en: "Use es gibt for there is / there are.", zh: "表示有某物可用 es gibt。" },
      { en: "Modal verbs push the second verb to the end: Ich kann Deutsch lernen.", zh: "情態動詞會把第二個動詞推到句尾：Ich kann Deutsch lernen。" },
    ],
    examples: [
      { de: "In meiner Stadt gibt es einen Bahnhof.", en: "There is a train station in my city.", zh: "我的城市有一個火車站。" },
      { de: "Gehen Sie rechts.", en: "Go right.", zh: "請往右走。" },
    ],
    tasks: [
      { title: "City map", minutes: 12, description: "Describe three places near your home." },
      { title: "Direction drill", minutes: 8, description: "Give directions using links, rechts, and geradeaus." },
    ],
    microChecks: [
      { prompt: "Translate: There is a train station.", answer: "Es gibt einen Bahnhof." },
      { prompt: "Where does lernen go? Ich kann Deutsch ____.", answer: "lernen" },
    ],
    searchPrompts: {
      en: "German A1 city directions es gibt modal verb können",
      zh: "德語 A1 城市 方向 es gibt 情態動詞 können",
    },
    resourceIds: ["vhs-lernportal"],
  },
  {
    id: "a1-6",
    level: "A1",
    order: 6,
    title: "Appointments, Travel, Health",
    titleZh: "約時間、出行、健康",
    theme: "Appointments, problems, short messages",
    examBridge: "A1 checkpoint",
    summary: "Handle short messages for appointments, travel needs, and basic health problems.",
    goalEn: "Make a simple appointment and explain a basic problem.",
    goalZh: "能約簡單時間並說明基本問題。",
    targetItems: ["appointments", "separable verbs", "short written messages", "basic health phrases"],
    vocabulary: [
      { de: "der Termin", en: "appointment", zh: "預約" },
      { de: "krank", en: "sick", zh: "生病" },
      { de: "der Zug", en: "train", zh: "火車" },
      { de: "absagen", en: "to cancel", zh: "取消" },
    ],
    grammar: [
      { en: "Separable prefixes often move to the end: Ich sage den Termin ab.", zh: "可分動詞前綴常移到句尾：Ich sage den Termin ab。" },
      { en: "Short messages can be direct and polite.", zh: "簡訊可直接但保持禮貌。" },
    ],
    examples: [
      { de: "Ich bin krank und sage den Termin ab.", en: "I am sick and cancel the appointment.", zh: "我生病了，要取消預約。" },
      { de: "Der Zug kommt um acht Uhr.", en: "The train arrives at eight o'clock.", zh: "火車八點到。" },
    ],
    tasks: [
      { title: "Appointment note", minutes: 12, description: "Write a short message cancelling or confirming an appointment." },
      { title: "A1 checkpoint", minutes: 15, description: "Review modules A1-1 to A1-6 and mark weak topics." },
    ],
    microChecks: [
      { prompt: "Move the prefix: Ich sage den Termin ___.", answer: "ab" },
      { prompt: "Translate: I am sick.", answer: "Ich bin krank." },
    ],
    searchPrompts: {
      en: "German A1 appointment health travel short message absagen",
      zh: "德語 A1 預約 健康 出行 簡訊 absagen",
    },
    resourceIds: ["goethe-b1", "vhs-lernportal"],
  },
  {
    id: "a2-1",
    level: "A2",
    order: 7,
    title: "Family, Work and Study",
    titleZh: "家庭、工作與學習",
    theme: "Everyday life and responsibilities",
    examBridge: "A2 productive language",
    summary: "Connect personal life to work, study, and regular responsibilities.",
    goalEn: "Talk about family, job, study, and responsibilities with more detail.",
    goalZh: "能較具體談論家庭、工作、學習與責任。",
    targetItems: ["possessives", "modal verbs", "job vocabulary", "routine connectors"],
    vocabulary: [
      { de: "die Ausbildung", en: "vocational training", zh: "職業訓練" },
      { de: "die Arbeit", en: "work", zh: "工作" },
      { de: "die Familie", en: "family", zh: "家庭" },
      { de: "müssen", en: "must / have to", zh: "必須" },
    ],
    grammar: [
      { en: "Modal verbs help express obligations: Ich muss arbeiten.", zh: "情態動詞可表示義務：Ich muss arbeiten。" },
      { en: "Use connectors like aber, und, dann to extend sentences.", zh: "用 aber、und、dann 延長句子。" },
    ],
    examples: [
      { de: "Ich arbeite im Büro und lerne am Abend Deutsch.", en: "I work in an office and learn German in the evening.", zh: "我在辦公室工作，晚上學德語。" },
      { de: "Meine Schwester macht eine Ausbildung.", en: "My sister is doing vocational training.", zh: "我妹妹在做職業訓練。" },
    ],
    tasks: [
      { title: "Responsibility map", minutes: 12, description: "List five weekly responsibilities and say what you must do." },
      { title: "Two-minute talk", minutes: 10, description: "Speak about family, work, and study without reading." },
    ],
    microChecks: [
      { prompt: "Complete: Ich ___ heute arbeiten.", answer: "muss" },
      { prompt: "Translate: vocational training", answer: "die Ausbildung" },
    ],
    searchPrompts: {
      en: "German A2 family work study modal verbs Ausbildung",
      zh: "德語 A2 家庭 工作 學習 情態動詞 Ausbildung",
    },
    resourceIds: ["vhs-lernportal"],
  },
  {
    id: "a2-2",
    level: "A2",
    order: 8,
    title: "Past Events",
    titleZh: "過去事件",
    theme: "Perfekt, narrative basics",
    examBridge: "A2 writing and speaking",
    summary: "Tell what happened yesterday, last week, or during an appointment.",
    goalEn: "Narrate simple past events with Perfekt.",
    goalZh: "能用完成式敘述簡單過去事件。",
    targetItems: ["Perfekt with haben/sein", "time phrases", "common participles", "narrative order"],
    vocabulary: [
      { de: "gestern", en: "yesterday", zh: "昨天" },
      { de: "letzte Woche", en: "last week", zh: "上週" },
      { de: "gemacht", en: "done / made", zh: "做了" },
      { de: "gegangen", en: "gone", zh: "去了" },
    ],
    grammar: [
      { en: "Perfekt usually uses haben plus a past participle.", zh: "完成式通常用 haben 加過去分詞。" },
      { en: "Movement verbs often use sein: Ich bin gegangen.", zh: "移動動詞常用 sein：Ich bin gegangen。" },
    ],
    examples: [
      { de: "Gestern habe ich Deutsch gelernt.", en: "Yesterday I learned German.", zh: "昨天我學了德語。" },
      { de: "Ich bin zum Arzt gegangen.", en: "I went to the doctor.", zh: "我去看醫生了。" },
    ],
    tasks: [
      { title: "Yesterday story", minutes: 12, description: "Write five sentences about yesterday using Perfekt." },
      { title: "Haben or sein", minutes: 8, description: "Sort ten verbs into likely haben or sein groups." },
    ],
    microChecks: [
      { prompt: "Choose: Ich habe gegangen / Ich bin gegangen.", answer: "Ich bin gegangen." },
      { prompt: "Translate: Yesterday I worked.", answer: "Gestern habe ich gearbeitet." },
    ],
    searchPrompts: {
      en: "German A2 Perfekt haben sein past participles",
      zh: "德語 A2 完成式 haben sein 過去分詞",
    },
    resourceIds: ["vhs-lernportal"],
  },
  {
    id: "a2-3",
    level: "A2",
    order: 9,
    title: "Invitations and Plans",
    titleZh: "邀請與計畫",
    theme: "Comparisons, adjective basics",
    examBridge: "A2 interaction",
    summary: "Invite someone, accept or decline politely, and compare options.",
    goalEn: "Make plans, respond to invitations, and compare simple choices.",
    goalZh: "能規劃活動、回應邀請並比較簡單選項。",
    targetItems: ["invitations", "möchten/wollen", "comparative forms", "polite refusal"],
    vocabulary: [
      { de: "die Einladung", en: "invitation", zh: "邀請" },
      { de: "passen", en: "to suit / fit", zh: "合適" },
      { de: "lieber", en: "rather / preferably", zh: "比較想" },
      { de: "später", en: "later", zh: "晚一點" },
    ],
    grammar: [
      { en: "Use leider to soften a refusal: Leider kann ich nicht.", zh: "用 leider 可讓拒絕更委婉：Leider kann ich nicht。" },
      { en: "Comparatives often add -er: schneller, besser, später.", zh: "比較級常加 -er：schneller、besser、später。" },
    ],
    examples: [
      { de: "Möchtest du am Samstag kommen?", en: "Would you like to come on Saturday?", zh: "你星期六想來嗎？" },
      { de: "Leider passt es mir nicht.", en: "Unfortunately it does not work for me.", zh: "不好意思，這時間我不方便。" },
    ],
    tasks: [
      { title: "Invitation reply", minutes: 12, description: "Write one acceptance and one polite refusal." },
      { title: "Plan negotiation", minutes: 10, description: "Compare two meeting times and choose one." },
    ],
    microChecks: [
      { prompt: "Translate: Unfortunately I cannot.", answer: "Leider kann ich nicht." },
      { prompt: "What means invitation?", answer: "die Einladung" },
    ],
    searchPrompts: {
      en: "German A2 invitations plans polite refusal comparative",
      zh: "德語 A2 邀請 計畫 婉拒 比較級",
    },
    resourceIds: ["vhs-lernportal"],
  },
  {
    id: "a2-4",
    level: "A2",
    order: 10,
    title: "Problems and Requests",
    titleZh: "問題與請求",
    theme: "Complaints, phone calls, service",
    examBridge: "A2 practical writing",
    summary: "Explain practical problems and ask for help by phone, email, or at a service desk.",
    goalEn: "Make clear requests and simple complaints in everyday service situations.",
    goalZh: "能在日常服務場景提出請求與簡單抱怨。",
    targetItems: ["könnten Sie", "problem description", "phone phrases", "service emails"],
    vocabulary: [
      { de: "das Problem", en: "problem", zh: "問題" },
      { de: "kaputt", en: "broken", zh: "壞掉" },
      { de: "helfen", en: "to help", zh: "幫助" },
      { de: "Könnten Sie ...?", en: "Could you ...?", zh: "您可以……嗎？" },
    ],
    grammar: [
      { en: "Könnten Sie is a polite request frame.", zh: "Könnten Sie 是禮貌請求句型。" },
      { en: "Describe the object first, then the problem: Die Heizung ist kaputt.", zh: "先說物品，再說問題：Die Heizung ist kaputt。" },
    ],
    examples: [
      { de: "Könnten Sie mir bitte helfen?", en: "Could you please help me?", zh: "您可以幫我嗎？" },
      { de: "Die Waschmaschine ist kaputt.", en: "The washing machine is broken.", zh: "洗衣機壞了。" },
    ],
    tasks: [
      { title: "Service email", minutes: 15, description: "Write a short email about a broken object and request help." },
      { title: "Phone opening", minutes: 8, description: "Practice opening a phone call with name, reason, and request." },
    ],
    microChecks: [
      { prompt: "Make it polite: Helfen Sie mir.", answer: "Könnten Sie mir bitte helfen?" },
      { prompt: "Translate: broken", answer: "kaputt" },
    ],
    searchPrompts: {
      en: "German A2 service complaint phone call Könnten Sie kaputt",
      zh: "德語 A2 服務 抱怨 電話 Könnten Sie kaputt",
    },
    resourceIds: ["vhs-lernportal"],
  },
  {
    id: "a2-5",
    level: "A2",
    order: 11,
    title: "Housing, Transport and Services",
    titleZh: "住房、交通與服務",
    theme: "Two-way prepositions, reflexives",
    examBridge: "A2 mobility and housing tasks",
    summary: "Handle everyday housing, transport, and public-service situations.",
    goalEn: "Describe location, movement, and appointments related to housing and transport.",
    goalZh: "能描述住房與交通相關的位置、移動與預約。",
    targetItems: ["two-way prepositions", "dative vs accusative location", "reflexive basics", "service vocabulary"],
    vocabulary: [
      { de: "die Miete", en: "rent", zh: "房租" },
      { de: "die Haltestelle", en: "stop / station", zh: "站牌／站點" },
      { de: "sich anmelden", en: "to register", zh: "登記／報到" },
      { de: "zwischen", en: "between", zh: "在……之間" },
    ],
    grammar: [
      { en: "Two-way prepositions use dative for location and accusative for movement.", zh: "雙向介系詞：位置用與格，移動方向用受格。" },
      { en: "Some verbs use a reflexive pronoun: Ich melde mich an.", zh: "有些動詞需要反身代詞：Ich melde mich an。" },
    ],
    examples: [
      { de: "Die Haltestelle ist vor dem Haus.", en: "The stop is in front of the house.", zh: "站牌在房子前面。" },
      { de: "Ich melde mich morgen an.", en: "I will register tomorrow.", zh: "我明天去登記。" },
    ],
    tasks: [
      { title: "Location notes", minutes: 12, description: "Describe five places near your apartment." },
      { title: "Registration script", minutes: 10, description: "Prepare a simple script for Anmeldung or an appointment." },
    ],
    microChecks: [
      { prompt: "Translate: rent", answer: "die Miete" },
      { prompt: "Complete: Ich melde ___ an.", answer: "mich" },
    ],
    searchPrompts: {
      en: "German A2 housing transport two-way prepositions Anmeldung",
      zh: "德語 A2 住房 交通 雙向介系詞 Anmeldung",
    },
    resourceIds: ["bamf-naturalisation", "vhs-lernportal"],
  },
  {
    id: "a2-6",
    level: "A2",
    order: 12,
    title: "Reasons and Opinions",
    titleZh: "理由與意見",
    theme: "weil, dass, wenn",
    examBridge: "A2 checkpoint and bridge to B1",
    summary: "Move from isolated sentences into connected reasons, opinions, and conditions.",
    goalEn: "Give reasons and simple opinions with subordinate clauses.",
    goalZh: "能用從屬子句表達理由與簡單意見。",
    targetItems: ["weil", "dass", "wenn", "verb-final subordinate clauses"],
    vocabulary: [
      { de: "weil", en: "because", zh: "因為" },
      { de: "dass", en: "that", zh: "（引導內容子句）" },
      { de: "wenn", en: "if / when", zh: "如果／當……時" },
      { de: "die Meinung", en: "opinion", zh: "意見" },
    ],
    grammar: [
      { en: "Subordinate clauses often send the verb to the end.", zh: "從屬子句常把動詞放到句尾。" },
      { en: "Use ich finde, dass ... for a simple opinion.", zh: "用 ich finde, dass ... 表達簡單意見。" },
    ],
    examples: [
      { de: "Ich lerne Deutsch, weil ich in Deutschland leben möchte.", en: "I learn German because I want to live in Germany.", zh: "我學德語，因為我想住在德國。" },
      { de: "Ich finde, dass Deutsch wichtig ist.", en: "I think German is important.", zh: "我覺得德語很重要。" },
    ],
    tasks: [
      { title: "Reason ladder", minutes: 12, description: "Write five reasons why German matters to your life." },
      { title: "A2 checkpoint", minutes: 15, description: "Record a two-minute opinion and identify grammar gaps." },
    ],
    microChecks: [
      { prompt: "Where is the verb? weil ich in Deutschland leben ___.", answer: "möchte" },
      { prompt: "Translate: I think that German is important.", answer: "Ich finde, dass Deutsch wichtig ist." },
    ],
    searchPrompts: {
      en: "German A2 weil dass wenn subordinate clause verb final",
      zh: "德語 A2 weil dass wenn 從屬子句 動詞句尾",
    },
    resourceIds: ["goethe-b1", "vhs-lernportal"],
  },
  {
    id: "b1-1",
    level: "B1",
    order: 13,
    title: "Connected Opinions",
    titleZh: "連貫表達意見",
    theme: "Connectors, short arguments",
    examBridge: "Goethe B1 forum post and speaking",
    summary: "Turn everyday opinions into structured short arguments.",
    goalEn: "Write and speak connected opinions with examples and reasons.",
    goalZh: "能用理由與例子連貫寫出或說出意見。",
    targetItems: ["connectors", "argument structure", "examples", "contrast"],
    vocabulary: [
      { de: "meiner Meinung nach", en: "in my opinion", zh: "依我看" },
      { de: "außerdem", en: "besides / additionally", zh: "此外" },
      { de: "trotzdem", en: "nevertheless", zh: "儘管如此" },
      { de: "das Beispiel", en: "example", zh: "例子" },
    ],
    grammar: [
      { en: "Connectors guide the reader through reason, contrast, and addition.", zh: "連接詞能引導讀者理解理由、轉折與補充。" },
      { en: "B1 writing should be clear before it is fancy.", zh: "B1 寫作先求清楚，不必追求華麗。" },
    ],
    examples: [
      { de: "Meiner Meinung nach ist Deutsch wichtig, weil man im Alltag viel versteht.", en: "In my opinion, German is important because you understand a lot in everyday life.", zh: "依我看，德語很重要，因為日常生活能懂很多事情。" },
      { de: "Außerdem hilft Deutsch bei der Arbeit.", en: "Additionally, German helps at work.", zh: "此外，德語對工作有幫助。" },
    ],
    tasks: [
      { title: "Forum post", minutes: 20, description: "Write a 100-word opinion with reason, example, and contrast." },
      { title: "Speaking outline", minutes: 10, description: "Create a one-minute opinion outline with three connectors." },
    ],
    microChecks: [
      { prompt: "Translate: in my opinion", answer: "meiner Meinung nach" },
      { prompt: "Which connector adds information: trotzdem / außerdem?", answer: "außerdem" },
    ],
    searchPrompts: {
      en: "German B1 opinion connectors forum post Goethe B1",
      zh: "德語 B1 意見 連接詞 論壇貼文 Goethe B1",
    },
    resourceIds: ["goethe-b1"],
  },
  {
    id: "b1-2",
    level: "B1",
    order: 14,
    title: "Work and Applications",
    titleZh: "工作與求職",
    theme: "CV, interview, relative clauses",
    examBridge: "BAMF life topics and B1 writing",
    summary: "Prepare practical language for applications, interviews, work history, and skills.",
    goalEn: "Write about work experience and handle basic application conversations.",
    goalZh: "能描述工作經驗並處理基本求職對話。",
    targetItems: ["CV vocabulary", "relative clauses", "formal email", "interview answers"],
    vocabulary: [
      { de: "die Bewerbung", en: "application", zh: "求職申請" },
      { de: "der Lebenslauf", en: "CV / resume", zh: "履歷" },
      { de: "die Erfahrung", en: "experience", zh: "經驗" },
      { de: "zuverlässig", en: "reliable", zh: "可靠的" },
    ],
    grammar: [
      { en: "Relative clauses describe a noun: eine Arbeit, die zu mir passt.", zh: "關係子句用來描述名詞：eine Arbeit, die zu mir passt。" },
      { en: "Formal emails need greeting, reason, request, and closing.", zh: "正式郵件需有問候、原因、請求與結尾。" },
    ],
    examples: [
      { de: "Ich suche eine Arbeit, die zu meiner Erfahrung passt.", en: "I am looking for a job that fits my experience.", zh: "我在找一份符合我經驗的工作。" },
      { de: "Anbei sende ich Ihnen meinen Lebenslauf.", en: "Attached I send you my CV.", zh: "附件中寄上我的履歷。" },
    ],
    tasks: [
      { title: "CV paragraph", minutes: 20, description: "Write one paragraph about your experience and strengths." },
      { title: "Interview answers", minutes: 15, description: "Prepare answers for three common interview questions." },
    ],
    microChecks: [
      { prompt: "Translate: application", answer: "die Bewerbung" },
      { prompt: "Complete: eine Arbeit, ___ zu mir passt.", answer: "die" },
    ],
    searchPrompts: {
      en: "German B1 job application Lebenslauf Bewerbung relative clauses",
      zh: "德語 B1 求職 Bewerbung Lebenslauf 關係子句",
    },
    resourceIds: ["bamf-integration-final", "goethe-b1"],
  },
  {
    id: "b1-3",
    level: "B1",
    order: 15,
    title: "Authorities and Formal Messages",
    titleZh: "行政單位與正式訊息",
    theme: "Forms, appointments, formal tone",
    examBridge: "Citizenship-life alignment",
    summary: "Read and write formal messages for offices, appointments, and documents.",
    goalEn: "Communicate with offices using clear formal language.",
    goalZh: "能用清楚正式的語言與行政單位溝通。",
    targetItems: ["formal requests", "documents", "deadlines", "appointment changes"],
    vocabulary: [
      { de: "die Behörde", en: "authority / public office", zh: "行政機關" },
      { de: "der Antrag", en: "application / request form", zh: "申請" },
      { de: "die Frist", en: "deadline", zh: "期限" },
      { de: "die Unterlagen", en: "documents", zh: "文件資料" },
    ],
    grammar: [
      { en: "Formal writing should be direct, polite, and organised.", zh: "正式寫作要直接、禮貌且結構清楚。" },
      { en: "Use deshalb or daher to link reason and consequence.", zh: "用 deshalb 或 daher 連接理由與結果。" },
    ],
    examples: [
      { de: "Ich kann den Termin leider nicht wahrnehmen.", en: "Unfortunately, I cannot attend the appointment.", zh: "不好意思，我無法出席該預約。" },
      { de: "Könnten Sie mir bitte eine neue Frist geben?", en: "Could you please give me a new deadline?", zh: "您能否給我一個新的期限？" },
    ],
    tasks: [
      { title: "Office email", minutes: 20, description: "Write a formal email asking to change an appointment." },
      { title: "Document checklist", minutes: 10, description: "Create a German checklist for documents you need." },
    ],
    microChecks: [
      { prompt: "Translate: deadline", answer: "die Frist" },
      { prompt: "Polite request frame: ___ Sie mir bitte helfen?", answer: "Könnten" },
    ],
    searchPrompts: {
      en: "German B1 formal email Behörde Antrag Frist appointment",
      zh: "德語 B1 正式郵件 行政機關 Antrag Frist 預約",
    },
    resourceIds: ["bamf-naturalisation", "bamf-test-centre"],
  },
  {
    id: "b1-4",
    level: "B1",
    order: 16,
    title: "Health, Housing and Disputes",
    titleZh: "健康、住房與糾紛",
    theme: "Explanations, complaints, passive basics",
    examBridge: "B1 practical problem solving",
    summary: "Explain problems with health, housing, contracts, and service disputes.",
    goalEn: "Describe a problem, explain consequences, and ask for a practical solution.",
    goalZh: "能描述問題、說明後果並請求實際解決方案。",
    targetItems: ["complaint structure", "passive basics", "consequence connectors", "health and housing vocabulary"],
    vocabulary: [
      { de: "die Beschwerde", en: "complaint", zh: "投訴" },
      { de: "der Mangel", en: "defect", zh: "缺陷" },
      { de: "die Versicherung", en: "insurance", zh: "保險" },
      { de: "die Lösung", en: "solution", zh: "解決方案" },
    ],
    grammar: [
      { en: "A complaint should name the problem, impact, and requested solution.", zh: "投訴應說明問題、影響與希望的解決方案。" },
      { en: "Passive basics appear often in notices: wird repariert.", zh: "被動語態常出現在通知中：wird repariert。" },
    ],
    examples: [
      { de: "Die Heizung funktioniert seit drei Tagen nicht.", en: "The heating has not worked for three days.", zh: "暖氣已經三天不能用了。" },
      { de: "Ich bitte Sie um eine schnelle Lösung.", en: "I ask you for a quick solution.", zh: "請您盡快提供解決方案。" },
    ],
    tasks: [
      { title: "Complaint email", minutes: 25, description: "Write a structured complaint about housing or service." },
      { title: "Doctor summary", minutes: 12, description: "Prepare a clear symptom and timeline summary." },
    ],
    microChecks: [
      { prompt: "Translate: complaint", answer: "die Beschwerde" },
      { prompt: "What should a complaint request?", answer: "A practical solution." },
    ],
    searchPrompts: {
      en: "German B1 complaint housing health Versicherung Mangel passive",
      zh: "德語 B1 投訴 住房 健康 保險 Mangel 被動",
    },
    resourceIds: ["bamf-integration-final", "vhs-lernportal"],
  },
  {
    id: "b1-5",
    level: "B1",
    order: 17,
    title: "Discussion and Joint Planning",
    titleZh: "討論與共同規劃",
    theme: "Suggestions, negotiation, politeness",
    examBridge: "Goethe B1 speaking tasks",
    summary: "Plan something with another person, make suggestions, react, and compromise.",
    goalEn: "Handle B1-style joint planning with polite suggestions and negotiation.",
    goalZh: "能用禮貌建議與協商完成 B1 共同規劃任務。",
    targetItems: ["suggestions", "agreement/disagreement", "compromise phrases", "speaking structure"],
    vocabulary: [
      { de: "vorschlagen", en: "to suggest", zh: "建議" },
      { de: "einverstanden", en: "agreed", zh: "同意" },
      { de: "der Vorschlag", en: "suggestion", zh: "建議" },
      { de: "der Kompromiss", en: "compromise", zh: "折衷" },
    ],
    grammar: [
      { en: "Use Wie wäre es mit ...? for gentle suggestions.", zh: "用 Wie wäre es mit ...? 提出委婉建議。" },
      { en: "Respond before changing direction: Das ist eine gute Idee, aber ...", zh: "轉向前先回應對方：Das ist eine gute Idee, aber ..." },
    ],
    examples: [
      { de: "Wie wäre es mit einem Treffen am Samstag?", en: "How about a meeting on Saturday?", zh: "星期六見面如何？" },
      { de: "Ich bin einverstanden, aber wir brauchen einen Plan.", en: "I agree, but we need a plan.", zh: "我同意，但我們需要一個計畫。" },
    ],
    tasks: [
      { title: "Planning roleplay", minutes: 20, description: "Plan a class party, trip, or appointment with a partner or AI prompt." },
      { title: "Phrase bank", minutes: 10, description: "Memorise five agreement and five disagreement phrases." },
    ],
    microChecks: [
      { prompt: "Translate: I agree.", answer: "Ich bin einverstanden." },
      { prompt: "Gentle suggestion frame: Wie wäre es mit ___?", answer: "a noun phrase, e.g. einem Treffen" },
    ],
    searchPrompts: {
      en: "German B1 speaking joint planning suggestions compromise Goethe",
      zh: "德語 B1 口說 共同規劃 建議 協商 Goethe",
    },
    resourceIds: ["goethe-b1"],
  },
  {
    id: "b1-6",
    level: "B1",
    order: 18,
    title: "B1 Exam and Citizenship Bundle",
    titleZh: "B1 考試與入籍整合",
    theme: "Full mock and naturalisation prep",
    examBridge: "Goethe, DTZ, telc, ÖSD readiness",
    summary: "Bundle the language exam path with citizenship-related official resources and mock routines.",
    goalEn: "Run a B1 readiness loop across reading, listening, writing, speaking, and citizenship resources.",
    goalZh: "能整合閱讀、聽力、寫作、口說與入籍資源，進行 B1 準備循環。",
    targetItems: ["exam modules", "mock timing", "citizenship resources", "weakness recovery"],
    vocabulary: [
      { de: "die Prüfung", en: "exam", zh: "考試" },
      { de: "bestehen", en: "to pass", zh: "通過" },
      { de: "die Einbürgerung", en: "naturalisation", zh: "入籍" },
      { de: "die Vorbereitung", en: "preparation", zh: "準備" },
    ],
    grammar: [
      { en: "Exam readiness is skill-specific: reading, listening, writing, and speaking can fail separately.", zh: "考試準備需分技能看：閱讀、聽力、寫作、口說可能各自有弱點。" },
      { en: "A recovery plan should pick the next weakest module, not restart the whole course.", zh: "補救計畫應選下一個最弱模組，而不是整個課程重來。" },
    ],
    examples: [
      { de: "Ich bereite mich auf die B1-Prüfung vor.", en: "I am preparing for the B1 exam.", zh: "我正在準備 B1 考試。" },
      { de: "Nach dem Test wiederhole ich meine schwächsten Themen.", en: "After the test, I review my weakest topics.", zh: "測驗後我複習最弱的主題。" },
    ],
    tasks: [
      { title: "Mock day", minutes: 90, description: "Run one timed reading/writing block and one speaking recording." },
      { title: "Citizenship companion", minutes: 20, description: "Open the official test centre and practise one question set." },
    ],
    microChecks: [
      { prompt: "Translate: naturalisation", answer: "die Einbürgerung" },
      { prompt: "What should a recovery plan target?", answer: "The weakest module or skill." },
    ],
    searchPrompts: {
      en: "German B1 exam citizenship naturalisation Goethe DTZ telc ÖSD preparation",
      zh: "德語 B1 考試 入籍 Goethe DTZ telc ÖSD 準備",
    },
    resourceIds: ["bamf-naturalisation", "bamf-integration-final", "bamf-test-centre", "goethe-b1", "telc-b1", "osd-b1"],
  },
];

type ModuleExpansion = Partial<Pick<LearningModule, "vocabulary" | "grammar" | "examples" | "tasks" | "microChecks">>;

const moduleExpansions: Record<string, ModuleExpansion> = {
  "a1-1": {
    vocabulary: [
      { de: "der Vorname", en: "first name", zh: "" },
      { de: "der Nachname", en: "last name", zh: "" },
      { de: "buchstabieren", en: "to spell", zh: "" },
      { de: "die Herkunft", en: "origin", zh: "" },
    ],
    grammar: [
      { en: "Use heißen for names: Ich heiße Mei. For formal questions, use Wie heißen Sie?", zh: "" },
      { en: "Use woher for origin and aus for the country or city: Ich komme aus Taiwan.", zh: "" },
    ],
    examples: [
      { de: "Mein Vorname ist Mei.", en: "My first name is Mei.", zh: "" },
      { de: "Mein Nachname ist Lin.", en: "My last name is Lin.", zh: "" },
      { de: "Können Sie das bitte buchstabieren?", en: "Can you spell that, please?", zh: "" },
      { de: "Ich komme aus Taiwan und wohne in Berlin.", en: "I come from Taiwan and live in Berlin.", zh: "" },
    ],
    tasks: [
      {
        title: "Alphabet dictation",
        minutes: 8,
        description: "Spell your name, email address, and one street name aloud, then write the letters you hear.",
      },
      {
        title: "Slow-audio shadowing",
        minutes: 6,
        description: "Play three greeting sentences at 0.5x, repeat them, then repeat once at 0.75x.",
      },
    ],
    microChecks: [
      { prompt: "Ask politely: Can you spell that, please?", answer: "Können Sie das bitte buchstabieren?" },
      { prompt: "What German repair phrase means Slowly, please?", answer: "Langsam bitte." },
    ],
  },
  "a1-2": {
    vocabulary: [
      { de: "das Geburtsdatum", en: "date of birth", zh: "" },
      { de: "die Straße", en: "street", zh: "" },
      { de: "die Postleitzahl", en: "postal code", zh: "" },
      { de: "ledig", en: "single / unmarried", zh: "" },
    ],
    grammar: [
      { en: "Formal your is Ihr/Ihre: Ihr Name, Ihre Adresse, Ihre Telefonnummer.", zh: "" },
      { en: "Yes/no questions usually start with the verb: Haben Sie eine E-Mail-Adresse?", zh: "" },
    ],
    examples: [
      { de: "Mein Geburtsdatum ist der dritte Mai.", en: "My date of birth is the third of May.", zh: "" },
      { de: "Die Postleitzahl ist eins null eins eins fünf.", en: "The postal code is 10115.", zh: "" },
      { de: "Ich bin ledig.", en: "I am single.", zh: "" },
      { de: "Haben Sie eine E-Mail-Adresse?", en: "Do you have an email address?", zh: "" },
    ],
    tasks: [
      {
        title: "Official-form scan",
        minutes: 10,
        description: "Read a short form label set and fill name, address, phone number, date of birth, and language.",
      },
      {
        title: "Phone-number dictation",
        minutes: 8,
        description: "Listen to three spoken phone numbers and write digits before checking the German words.",
      },
    ],
    microChecks: [
      { prompt: "Translate: date of birth", answer: "das Geburtsdatum" },
      { prompt: "Read 10115 as separate digits.", answer: "eins null eins eins fünf" },
    ],
  },
  "a1-3": {
    vocabulary: [
      { de: "aufstehen", en: "to get up", zh: "" },
      { de: "frühstücken", en: "to have breakfast", zh: "" },
      { de: "jeden Tag", en: "every day", zh: "" },
      { de: "der Feierabend", en: "end of the workday", zh: "" },
    ],
    grammar: [
      { en: "Separable verbs split in main clauses: Ich stehe um sieben Uhr auf.", zh: "" },
      { en: "Use am with weekdays and parts of the day: am Montag, am Abend.", zh: "" },
    ],
    examples: [
      { de: "Ich stehe um sieben Uhr auf.", en: "I get up at seven o'clock.", zh: "" },
      { de: "Am Morgen frühstücke ich zu Hause.", en: "In the morning I have breakfast at home.", zh: "" },
      { de: "Jeden Tag lerne ich zehn Minuten Deutsch.", en: "Every day I study German for ten minutes.", zh: "" },
      { de: "Nach Feierabend habe ich Zeit.", en: "After work I have time.", zh: "" },
    ],
    tasks: [
      {
        title: "Time and date dictation",
        minutes: 10,
        description: "Write the day and time from five spoken appointment sentences before revealing the text.",
      },
      {
        title: "Calendar conversion",
        minutes: 8,
        description: "Turn five numeric dates into spoken German date phrases with am plus the ordinal form.",
      },
    ],
    microChecks: [
      { prompt: "What time is halb elf?", answer: "10:30" },
      { prompt: "Translate: on the first of June", answer: "am ersten Juni" },
    ],
  },
  "a1-4": {
    vocabulary: [
      { de: "das Wasser", en: "water", zh: "" },
      { de: "der Tee", en: "tea", zh: "" },
      { de: "bar", en: "in cash", zh: "" },
      { de: "mit Karte", en: "by card", zh: "" },
    ],
    grammar: [
      { en: "After nehmen or möchten, masculine der becomes einen, but neuter das stays ein.", zh: "" },
      { en: "Use gern to say what you like: Ich trinke gern Tee.", zh: "" },
    ],
    examples: [
      { de: "Ich trinke gern Tee.", en: "I like drinking tea.", zh: "" },
      { de: "Ich nehme ein Wasser und einen Kaffee.", en: "I will take a water and a coffee.", zh: "" },
      { de: "Kann ich mit Karte bezahlen?", en: "Can I pay by card?", zh: "" },
      { de: "Nein danke, das ist alles.", en: "No thanks, that is everything.", zh: "" },
    ],
    tasks: [
      {
        title: "Price and payment roleplay",
        minutes: 10,
        description: "Build a short shop dialogue with greeting, item, price question, payment, and closing.",
      },
      {
        title: "Article basket",
        minutes: 8,
        description: "Sort ten food nouns by article, then order each one with ich möchte or ich nehme.",
      },
    ],
    microChecks: [
      { prompt: "Choose: Ich nehme ein Wasser / einen Wasser.", answer: "Ich nehme ein Wasser." },
      { prompt: "Translate: Can I pay by card?", answer: "Kann ich mit Karte bezahlen?" },
    ],
  },
  "a1-5": {
    vocabulary: [
      { de: "geradeaus", en: "straight ahead", zh: "" },
      { de: "die Apotheke", en: "pharmacy", zh: "" },
      { de: "in der Nähe", en: "nearby", zh: "" },
      { de: "neben", en: "next to", zh: "" },
    ],
    grammar: [
      { en: "Use dative for fixed location after in, neben, vor, hinter: in der Stadt.", zh: "" },
      { en: "Formal directions often use the verb first: Gehen Sie geradeaus.", zh: "" },
    ],
    examples: [
      { de: "Gibt es eine Apotheke in der Nähe?", en: "Is there a pharmacy nearby?", zh: "" },
      { de: "Der Park ist neben dem Bahnhof.", en: "The park is next to the train station.", zh: "" },
      { de: "Gehen Sie geradeaus und dann links.", en: "Go straight ahead and then left.", zh: "" },
      { de: "Ich wohne in einer kleinen Wohnung.", en: "I live in a small apartment.", zh: "" },
    ],
    tasks: [
      {
        title: "Signs and places scan",
        minutes: 10,
        description: "Read short station and city signs, then decide whether they tell you place, direction, or action.",
      },
      {
        title: "Route prompt",
        minutes: 8,
        description: "Describe a route with three steps using geradeaus, links, rechts, and one nearby place.",
      },
    ],
    microChecks: [
      { prompt: "Translate: Is there a pharmacy nearby?", answer: "Gibt es eine Apotheke in der Nähe?" },
      { prompt: "What does Ausgang mean on a sign?", answer: "exit" },
    ],
  },
  "a1-6": {
    vocabulary: [
      { de: "der Arzt", en: "doctor", zh: "" },
      { de: "die Verspätung", en: "delay", zh: "" },
      { de: "verschieben", en: "to postpone / move", zh: "" },
      { de: "die Nachricht", en: "message", zh: "" },
      { de: "die Kopfschmerzen", en: "headache", zh: "" },
      { de: "war", en: "was", zh: "" },
      { de: "hatte", en: "had", zh: "" },
    ],
    grammar: [
      { en: "Use nicht before the final infinitive: Ich kann heute nicht kommen.", zh: "" },
      { en: "Und connects two complete ideas without changing the word order.", zh: "" },
      { en: "For A1 past references, learn war and hatte as ready-to-use chunks before expanding the full past tense.", zh: "" },
    ],
    examples: [
      { de: "Ich habe morgen einen Termin beim Arzt.", en: "I have an appointment with the doctor tomorrow.", zh: "" },
      { de: "Der Bus hat zehn Minuten Verspätung.", en: "The bus is ten minutes late.", zh: "" },
      { de: "Können wir den Termin auf Freitag verschieben?", en: "Can we move the appointment to Friday?", zh: "" },
      { de: "Ich schreibe Ihnen eine kurze Nachricht.", en: "I am writing you a short message.", zh: "" },
      { de: "Gestern war ich krank.", en: "Yesterday I was sick.", zh: "" },
      { de: "Ich hatte einen Termin.", en: "I had an appointment.", zh: "" },
    ],
    tasks: [
      {
        title: "Short-message repair",
        minutes: 12,
        description: "Write a two- to four-sentence message that gives a reason, cancels or moves an appointment, and closes politely.",
      },
      {
        title: "Appointment voicemail",
        minutes: 8,
        description: "Record your name, problem, appointment time, and request in one slow formal message.",
      },
    ],
    microChecks: [
      { prompt: "Translate: Yesterday I was sick.", answer: "Gestern war ich krank." },
      { prompt: "Translate: I have a headache.", answer: "Ich habe Kopfschmerzen." },
    ],
  },
  "a2-1": {
    vocabulary: [
      { de: "der Beruf", en: "profession", zh: "" },
      { de: "die Kollegin", en: "female colleague", zh: "" },
      { de: "der Haushalt", en: "household", zh: "" },
      { de: "sich kümmern um", en: "to take care of", zh: "" },
    ],
    grammar: [
      { en: "Possessives change with the noun: mein Bruder, meine Schwester, meine Arbeit.", zh: "" },
      { en: "Modal verbs create a sentence bracket: Ich muss heute lange arbeiten.", zh: "" },
    ],
    examples: [
      { de: "Mein Beruf ist praktisch und interessant.", en: "My profession is practical and interesting.", zh: "" },
      { de: "Meine Kollegin hilft mir oft.", en: "My colleague often helps me.", zh: "" },
      { de: "Ich kümmere mich am Abend um den Haushalt.", en: "In the evening I take care of the household.", zh: "" },
      { de: "Meine Familie unterstützt mich beim Deutschlernen.", en: "My family supports me with learning German.", zh: "" },
    ],
  },
  "a2-2": {
    vocabulary: [
      { de: "besucht", en: "visited", zh: "" },
      { de: "gekauft", en: "bought", zh: "" },
      { de: "gefahren", en: "travelled / driven", zh: "" },
      { de: "früher", en: "earlier / formerly", zh: "" },
    ],
    grammar: [
      { en: "Many regular participles use ge- and -t: machen, gemacht; kaufen, gekauft.", zh: "" },
      { en: "Put the time phrase first when it is the frame: Gestern habe ich gearbeitet.", zh: "" },
    ],
    examples: [
      { de: "Letzten Monat habe ich meine Freundin besucht.", en: "Last month I visited my friend.", zh: "" },
      { de: "Ich habe im Supermarkt Brot gekauft.", en: "I bought bread at the supermarket.", zh: "" },
      { de: "Wir sind mit der Bahn nach Hamburg gefahren.", en: "We travelled to Hamburg by train.", zh: "" },
      { de: "Früher habe ich weniger Deutsch gesprochen.", en: "Earlier I spoke less German.", zh: "" },
    ],
  },
  "a2-3": {
    vocabulary: [
      { de: "absagen", en: "to cancel", zh: "" },
      { de: "zusagen", en: "to accept / confirm", zh: "" },
      { de: "die Verabredung", en: "arrangement / date", zh: "" },
      { de: "besser", en: "better", zh: "" },
    ],
    grammar: [
      { en: "Möchten is softer than wollen for invitations and plans.", zh: "" },
      { en: "Use als after comparatives: Sonntag ist besser als Samstag.", zh: "" },
    ],
    examples: [
      { de: "Ich muss die Verabredung leider absagen.", en: "Unfortunately I have to cancel the arrangement.", zh: "" },
      { de: "Sonntag ist für mich besser als Samstag.", en: "Sunday is better for me than Saturday.", zh: "" },
      { de: "Ich sage gern zu.", en: "I am happy to accept.", zh: "" },
      { de: "Wollen wir später telefonieren?", en: "Shall we talk on the phone later?", zh: "" },
    ],
  },
  "a2-4": {
    vocabulary: [
      { de: "die Reparatur", en: "repair", zh: "" },
      { de: "der Kundendienst", en: "customer service", zh: "" },
      { de: "die Bestellnummer", en: "order number", zh: "" },
      { de: "dringend", en: "urgent", zh: "" },
    ],
    grammar: [
      { en: "Wegen introduces the reason for a call or email: Ich rufe wegen der Rechnung an.", zh: "" },
      { en: "Put bitte near the request to sound polite: Bitte schicken Sie mir eine Antwort.", zh: "" },
    ],
    examples: [
      { de: "Ich brauche dringend eine Reparatur.", en: "I urgently need a repair.", zh: "" },
      { de: "Meine Bestellnummer ist vier fünf sechs.", en: "My order number is 456.", zh: "" },
      { de: "Der Kundendienst hat noch nicht geantwortet.", en: "Customer service has not answered yet.", zh: "" },
      { de: "Bitte rufen Sie mich heute zurück.", en: "Please call me back today.", zh: "" },
    ],
  },
  "a2-5": {
    vocabulary: [
      { de: "umziehen", en: "to move house", zh: "" },
      { de: "das Amt", en: "public office", zh: "" },
      { de: "die Anmeldung", en: "registration", zh: "" },
      { de: "gegenüber", en: "opposite", zh: "" },
    ],
    grammar: [
      { en: "Use accusative for direction: Ich gehe in das Büro.", zh: "" },
      { en: "Use dative for position: Ich warte in dem Büro.", zh: "" },
    ],
    examples: [
      { de: "Ich ziehe nächste Woche um.", en: "I am moving next week.", zh: "" },
      { de: "Das Amt ist gegenüber vom Bahnhof.", en: "The public office is opposite the train station.", zh: "" },
      { de: "Für die Anmeldung brauche ich meinen Pass.", en: "For registration I need my passport.", zh: "" },
      { de: "Ich fahre jeden Morgen mit der Straßenbahn.", en: "I take the tram every morning.", zh: "" },
    ],
  },
  "a2-6": {
    vocabulary: [
      { de: "deshalb", en: "therefore", zh: "" },
      { de: "trotzdem", en: "nevertheless", zh: "" },
      { de: "der Grund", en: "reason", zh: "" },
      { de: "wichtig", en: "important", zh: "" },
    ],
    grammar: [
      { en: "After a subordinate clause at the start, the main verb comes immediately after the comma.", zh: "" },
      { en: "Denn gives a reason but does not send the verb to the end.", zh: "" },
    ],
    examples: [
      { de: "Ich habe wenig Zeit, trotzdem lerne ich jeden Tag.", en: "I have little time; nevertheless, I study every day.", zh: "" },
      { de: "Deutsch ist wichtig, denn ich brauche es bei der Arbeit.", en: "German is important because I need it at work.", zh: "" },
      { de: "Wenn ich müde bin, höre ich kurze Dialoge.", en: "When I am tired, I listen to short dialogues.", zh: "" },
      { de: "Der Grund ist einfach: Ich möchte selbstständiger werden.", en: "The reason is simple: I want to become more independent.", zh: "" },
    ],
  },
  "b1-1": {
    vocabulary: [
      { de: "einerseits", en: "on the one hand", zh: "" },
      { de: "andererseits", en: "on the other hand", zh: "" },
      { de: "der Vorteil", en: "advantage", zh: "" },
      { de: "der Nachteil", en: "disadvantage", zh: "" },
    ],
    grammar: [
      { en: "Connectors like außerdem and trotzdem occupy position one, so the verb follows immediately.", zh: "" },
      { en: "A useful B1 opinion paragraph has opinion, reason, example, contrast, and conclusion.", zh: "" },
    ],
    examples: [
      { de: "Einerseits ist Online-Lernen flexibel.", en: "On the one hand, online learning is flexible.", zh: "" },
      { de: "Andererseits brauche ich manchmal direkten Kontakt.", en: "On the other hand, I sometimes need direct contact.", zh: "" },
      { de: "Ein Vorteil ist, dass ich mein Tempo wählen kann.", en: "One advantage is that I can choose my pace.", zh: "" },
      { de: "Ein Nachteil ist die fehlende Übung im Gespräch.", en: "One disadvantage is the missing practice in conversation.", zh: "" },
    ],
  },
  "b1-2": {
    vocabulary: [
      { de: "die Stelle", en: "position / job", zh: "" },
      { de: "die Kenntnisse", en: "skills / knowledge", zh: "" },
      { de: "das Vorstellungsgespräch", en: "job interview", zh: "" },
      { de: "kündigen", en: "to quit / terminate", zh: "" },
    ],
    grammar: [
      { en: "Relative pronouns must match gender and case: eine Stelle, die gut passt.", zh: "" },
      { en: "Use Perfekt for experience in conversation and Präteritum often in written CV notes.", zh: "" },
    ],
    examples: [
      { de: "Ich suche eine Stelle, die zu meinen Kenntnissen passt.", en: "I am looking for a position that fits my skills.", zh: "" },
      { de: "Das Vorstellungsgespräch findet am Dienstag statt.", en: "The job interview takes place on Tuesday.", zh: "" },
      { de: "Ich habe gute Computerkenntnisse.", en: "I have good computer skills.", zh: "" },
      { de: "Ich möchte meine alte Stelle nicht sofort kündigen.", en: "I do not want to quit my old job immediately.", zh: "" },
    ],
  },
  "b1-3": {
    vocabulary: [
      { de: "die Bescheinigung", en: "certificate / confirmation", zh: "" },
      { de: "die Gebühr", en: "fee", zh: "" },
      { de: "zuständig", en: "responsible / competent", zh: "" },
      { de: "einreichen", en: "to submit", zh: "" },
    ],
    grammar: [
      { en: "Formal requests often use könnten, würden, or ich bitte Sie.", zh: "" },
      { en: "Use clear sequence words in formal messages: zuerst, danach, anschließend.", zh: "" },
    ],
    examples: [
      { de: "Welche Behörde ist dafür zuständig?", en: "Which public office is responsible for that?", zh: "" },
      { de: "Ich muss die Unterlagen bis Freitag einreichen.", en: "I must submit the documents by Friday.", zh: "" },
      { de: "Wie hoch ist die Gebühr?", en: "How high is the fee?", zh: "" },
      { de: "Könnten Sie mir eine Bescheinigung schicken?", en: "Could you send me a certificate?", zh: "" },
    ],
  },
  "b1-4": {
    vocabulary: [
      { de: "der Vertrag", en: "contract", zh: "" },
      { de: "die Kündigung", en: "termination / cancellation", zh: "" },
      { de: "der Schaden", en: "damage", zh: "" },
      { de: "die Krankmeldung", en: "sick note", zh: "" },
    ],
    grammar: [
      { en: "Passive with werden appears in notices: Die Heizung wird morgen repariert.", zh: "" },
      { en: "Use seit with present tense for situations still continuing: Seit drei Tagen funktioniert es nicht.", zh: "" },
    ],
    examples: [
      { de: "Der Schaden wurde nicht repariert.", en: "The damage was not repaired.", zh: "" },
      { de: "Ich möchte den Vertrag prüfen.", en: "I would like to check the contract.", zh: "" },
      { de: "Meine Krankmeldung liegt der Firma vor.", en: "My sick note has been submitted to the company.", zh: "" },
      { de: "Bitte bestätigen Sie die Kündigung schriftlich.", en: "Please confirm the cancellation in writing.", zh: "" },
    ],
  },
  "b1-5": {
    vocabulary: [
      { de: "organisieren", en: "to organise", zh: "" },
      { de: "vereinbaren", en: "to arrange", zh: "" },
      { de: "ablehnen", en: "to reject / decline", zh: "" },
      { de: "der Ablauf", en: "schedule / process", zh: "" },
    ],
    grammar: [
      { en: "Konjunktiv II makes suggestions softer: Wir könnten den Raum reservieren.", zh: "" },
      { en: "React first, then disagree: Das verstehe ich, aber ich sehe ein Problem.", zh: "" },
    ],
    examples: [
      { de: "Wir könnten zuerst den Ablauf besprechen.", en: "We could first discuss the schedule.", zh: "" },
      { de: "Diesen Vorschlag muss ich leider ablehnen.", en: "Unfortunately I have to reject this suggestion.", zh: "" },
      { de: "Lass uns einen Termin vereinbaren.", en: "Let us arrange an appointment.", zh: "" },
      { de: "Ich organisiere die Getränke und du reservierst den Raum.", en: "I will organise the drinks and you reserve the room.", zh: "" },
    ],
  },
  "b1-6": {
    vocabulary: [
      { de: "die Fertigkeit", en: "skill", zh: "" },
      { de: "die Anmeldung", en: "registration", zh: "" },
      { de: "die Simulation", en: "simulation / mock run", zh: "" },
      { de: "auswerten", en: "to evaluate", zh: "" },
    ],
    grammar: [
      { en: "For exam writing, keep clauses controlled: one main idea per sentence is enough.", zh: "" },
      { en: "After a mock exam, rewrite weak sentences with the same grammar but new vocabulary.", zh: "" },
    ],
    examples: [
      { de: "Ich trainiere jede Fertigkeit separat.", en: "I train each skill separately.", zh: "" },
      { de: "Nach der Simulation werte ich meine Fehler aus.", en: "After the mock run I evaluate my mistakes.", zh: "" },
      { de: "Die Anmeldung für die Prüfung ist online möglich.", en: "Registration for the exam is possible online.", zh: "" },
      { de: "Ich wiederhole besonders die Aufgaben, die schwierig waren.", en: "I especially review the tasks that were difficult.", zh: "" },
    ],
  },
};

export const modules: LearningModule[] = baseModules.map((module) => {
  const expansion = moduleExpansions[module.id];

  if (!expansion) return module;

  return {
    ...module,
    vocabulary: [...module.vocabulary, ...(expansion.vocabulary ?? [])],
    grammar: [...module.grammar, ...(expansion.grammar ?? [])],
    examples: [...module.examples, ...(expansion.examples ?? [])],
    tasks: [...module.tasks, ...(expansion.tasks ?? [])],
    microChecks: [...module.microChecks, ...(expansion.microChecks ?? [])],
  };
});

export const levels: Level[] = ["A1", "A2", "B1"];

export function getModuleById(id: string) {
  return modules.find((module) => module.id === id);
}

export function getModulesByLevel(level: Level) {
  return modules.filter((module) => module.level === level);
}

export function getAdjacentModules(id: string) {
  const index = modules.findIndex((module) => module.id === id);
  return {
    previous: index > 0 ? modules[index - 1] : undefined,
    next: index >= 0 && index < modules.length - 1 ? modules[index + 1] : undefined,
  };
}
