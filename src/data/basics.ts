export type BasicItem = {
  de: string;
  en: string;
  zh: string;
  note?: string;
  speechText?: string;
};

export type BasicSection = {
  title: string;
  titleZh: string;
  items: BasicItem[];
};

export const basicSections: BasicSection[] = [
  {
    title: "Alphabet",
    titleZh: "字母",
    items: [
      ["A", "ah", "Anton"],
      ["B", "beh", "Berta"],
      ["C", "tseh", "Caesar"],
      ["D", "deh", "Dora"],
      ["E", "eh", "Emil"],
      ["F", "eff", "Friedrich"],
      ["G", "geh", "Gerda"],
      ["H", "hah", "Heinrich"],
      ["I", "ih", "Ida"],
      ["J", "jott", "Jürgen"],
      ["K", "kah", "Kaufmann"],
      ["L", "ell", "Lisa"],
      ["M", "emm", "Martha"],
      ["N", "enn", "Norbert"],
      ["O", "oh", "Otto"],
      ["P", "peh", "Paula"],
      ["Q", "kuh", "Quelle"],
      ["R", "err", "Richard"],
      ["S", "ess", "Siegfried"],
      ["T", "teh", "Theodor"],
      ["U", "uh", "Ulrich"],
      ["V", "fau", "Victor"],
      ["W", "weh", "Wolfgang"],
      ["X", "iks", "Xanthippe"],
      ["Y", "üpsilon", "Ypsilon"],
      ["Z", "tsett", "Zacharias"],
      ["Ä", "äh", "Ärger"],
      ["Ö", "öh", "Ökonom"],
      ["Ü", "üh", "Übermut"],
      ["ß", "esszett", "Eszett"],
    ].map(([de, en, example]) => ({
      de,
      en,
      zh: `發音：${en}`,
      note: `wie ${example}`,
      speechText: `${de} wie ${example}`,
    })),
  },
  {
    title: "Numbers",
    titleZh: "數字",
    items: [
      { de: "null", en: "0", zh: "零" },
      { de: "eins", en: "1", zh: "一" },
      { de: "zwei", en: "2", zh: "二" },
      { de: "drei", en: "3", zh: "三" },
      { de: "vier", en: "4", zh: "四" },
      { de: "fünf", en: "5", zh: "五" },
      { de: "sechs", en: "6", zh: "六" },
      { de: "sieben", en: "7", zh: "七" },
      { de: "acht", en: "8", zh: "八" },
      { de: "neun", en: "9", zh: "九" },
      { de: "zehn", en: "10", zh: "十" },
      { de: "elf", en: "11", zh: "十一" },
      { de: "zwölf", en: "12", zh: "十二" },
      { de: "zwanzig", en: "20", zh: "二十" },
      { de: "hundert", en: "100", zh: "一百" },
    ],
  },
  {
    title: "Weekdays",
    titleZh: "星期",
    items: [
      { de: "Montag", en: "Monday", zh: "星期一" },
      { de: "Dienstag", en: "Tuesday", zh: "星期二" },
      { de: "Mittwoch", en: "Wednesday", zh: "星期三" },
      { de: "Donnerstag", en: "Thursday", zh: "星期四" },
      { de: "Freitag", en: "Friday", zh: "星期五" },
      { de: "Samstag", en: "Saturday", zh: "星期六" },
      { de: "Sonntag", en: "Sunday", zh: "星期日" },
    ],
  },
  {
    title: "Pronouns with sein",
    titleZh: "代名詞",
    items: [
      { de: "Ich bin neu.", en: "I am new.", zh: "我是新來的。", note: "ich + bin" },
      { de: "Du bist nett.", en: "You are nice, informal singular.", zh: "你很友善。", note: "du + bist" },
      { de: "Er ist müde.", en: "He is tired.", zh: "他很累。", note: "er + ist" },
      { de: "Sie ist hier.", en: "She is here.", zh: "她在這裡。", note: "sie + ist" },
      { de: "Es ist klein.", en: "It is small.", zh: "它很小。", note: "es + ist" },
      { de: "Wir sind bereit.", en: "We are ready.", zh: "我們準備好了。", note: "wir + sind" },
      { de: "Ihr seid laut.", en: "You all are loud, informal.", zh: "你們很大聲。", note: "ihr + seid" },
      { de: "Sie sind freundlich.", en: "You are friendly, formal.", zh: "您很友善。", note: "Sie + sind" },
    ],
  },
  {
    title: "First Phrases",
    titleZh: "入門短句",
    items: [
      { de: "Guten Morgen", en: "Good morning", zh: "早安" },
      { de: "Guten Tag", en: "Good day / hello", zh: "您好" },
      { de: "Guten Abend", en: "Good evening", zh: "晚上好" },
      { de: "Danke", en: "Thank you", zh: "謝謝" },
      { de: "Bitte", en: "Please / you're welcome", zh: "請／不客氣" },
      { de: "Entschuldigung", en: "Excuse me / sorry", zh: "不好意思／抱歉" },
      { de: "Ich lerne Deutsch.", en: "I am learning German.", zh: "我正在學德語。" },
      { de: "Ich spreche ein bisschen Deutsch.", en: "I speak a little German.", zh: "我會說一點德語。" },
      { de: "Können Sie das bitte wiederholen?", en: "Can you repeat that, please?", zh: "您可以重複一次嗎？" },
    ],
  },
];
