export type PronunciationNote = {
  de: string;
  en: string;
  zh: string;
};

export type StudyPhrase = {
  de: string;
  en: string;
  zh: string;
};

export type StudyExtra = {
  pronunciation: PronunciationNote[];
  phrases: StudyPhrase[];
  sentenceDrills: StudyPhrase[];
};

export const studyExtras: Record<string, StudyExtra> = {
  "a1-1": {
    pronunciation: [
      { de: "ich heiße", en: "The ch in ich is soft; ß sounds like a clear s.", zh: "ich 的 ch 較輕柔；ß 發清楚的 s 音。" },
      { de: "Guten Abend", en: "In natural speech, final -en can sound short and light.", zh: "自然語速中，字尾 -en 常較短、較輕。" },
    ],
    phrases: [
      { de: "Guten Morgen", en: "Good morning", zh: "早安" },
      { de: "Guten Tag", en: "Good day / hello", zh: "您好" },
      { de: "Guten Abend", en: "Good evening", zh: "晚上好" },
      { de: "Gute Nacht", en: "Good night", zh: "晚安" },
      { de: "Hallo", en: "Hello", zh: "哈囉" },
      { de: "Tschüss", en: "Bye", zh: "掰掰" },
      { de: "Auf Wiedersehen", en: "Goodbye", zh: "再見" },
      { de: "Wie geht es Ihnen?", en: "How are you? formal", zh: "您好嗎？正式" },
      { de: "Mir geht es gut, danke.", en: "I am fine, thank you.", zh: "我很好，謝謝。" },
    ],
    sentenceDrills: [
      { de: "Guten Abend, ich heiße Mei.", en: "Good evening, my name is Mei.", zh: "晚上好，我叫 Mei。" },
      { de: "Hallo, ich komme aus Taiwan.", en: "Hello, I come from Taiwan.", zh: "哈囉，我來自台灣。" },
      { de: "Entschuldigung, wie heißen Sie?", en: "Excuse me, what is your name?", zh: "不好意思，請問您叫什麼名字？" },
    ],
  },
  "a1-2": {
    pronunciation: [
      { de: "die Telefonnummer", en: "Break long nouns into parts: Telefon + Nummer.", zh: "長名詞分段讀：Telefon + Nummer。" },
      { de: "Ihre Adresse", en: "Ihre begins with a long ee-like sound.", zh: "Ihre 開頭接近長 ee 音。" },
    ],
    phrases: [
      { de: "Wie heißen Sie?", en: "What is your name?", zh: "您叫什麼名字？" },
      { de: "Wie ist Ihre Adresse?", en: "What is your address?", zh: "您的地址是什麼？" },
      { de: "Meine Telefonnummer ist null eins zwei.", en: "My phone number is zero one two.", zh: "我的電話號碼是 012。" },
      { de: "Welche Sprachen sprechen Sie?", en: "Which languages do you speak?", zh: "您會說哪些語言？" },
      { de: "Ich spreche ein bisschen Deutsch.", en: "I speak a little German.", zh: "我會說一點德語。" },
    ],
    sentenceDrills: [
      { de: "Mein Name ist Mei Lin.", en: "My name is Mei Lin.", zh: "我的名字是 Mei Lin。" },
      { de: "Ich wohne in Berlin.", en: "I live in Berlin.", zh: "我住在柏林。" },
      { de: "Ich habe eine E-Mail-Adresse.", en: "I have an email address.", zh: "我有一個電子郵件地址。" },
    ],
  },
  "a1-3": {
    pronunciation: [
      { de: "um neun Uhr", en: "Uhr is short and starts with a rounded u sound.", zh: "Uhr 短而圓唇，接近 u 音。" },
      { de: "Heute lerne ich Deutsch.", en: "Keep the verb lerne in the second position.", zh: "動詞 lerne 保持在第二位。" },
    ],
    phrases: [
      { de: "Wie spät ist es?", en: "What time is it?", zh: "現在幾點？" },
      { de: "Es ist neun Uhr.", en: "It is nine o'clock.", zh: "現在九點。" },
      { de: "Heute lerne ich Deutsch.", en: "Today I learn German.", zh: "今天我學德語。" },
      { de: "Morgen arbeite ich.", en: "Tomorrow I work.", zh: "明天我工作。" },
      { de: "Am Abend habe ich Zeit.", en: "In the evening I have time.", zh: "晚上我有時間。" },
    ],
    sentenceDrills: [
      { de: "Um acht Uhr trinke ich Kaffee.", en: "At eight o'clock I drink coffee.", zh: "八點我喝咖啡。" },
      { de: "Heute Abend lerne ich zehn Minuten.", en: "This evening I study for ten minutes.", zh: "今晚我學十分鐘。" },
      { de: "Am Montag arbeite ich von neun bis fünf.", en: "On Monday I work from nine to five.", zh: "星期一我從九點工作到五點。" },
    ],
  },
  "a1-4": {
    pronunciation: [
      { de: "Ich möchte", en: "The ch in möchte is soft after the umlaut sound.", zh: "möchte 的 ch 在變音後較輕柔。" },
      { de: "die Rechnung, bitte", en: "Say bitte clearly; it is the safest polite ending.", zh: "bitte 要清楚，是最安全的禮貌結尾。" },
    ],
    phrases: [
      { de: "Ich möchte einen Kaffee.", en: "I would like a coffee.", zh: "我想要一杯咖啡。" },
      { de: "Ich nehme das Brot.", en: "I will take the bread.", zh: "我要這個麵包。" },
      { de: "Wie viel kostet das?", en: "How much does that cost?", zh: "這個多少錢？" },
      { de: "Haben Sie Wasser?", en: "Do you have water?", zh: "您有水嗎？" },
      { de: "Die Rechnung, bitte.", en: "The bill, please.", zh: "請給我帳單。" },
    ],
    sentenceDrills: [
      { de: "Ich möchte einen Kaffee und ein Brot.", en: "I would like a coffee and a bread.", zh: "我想要一杯咖啡和一個麵包。" },
      { de: "Das kostet drei Euro.", en: "That costs three euros.", zh: "這個三歐元。" },
      { de: "Kann ich bitte bezahlen?", en: "Can I pay, please?", zh: "請問我可以結帳嗎？" },
    ],
  },
  "a1-5": {
    pronunciation: [
      { de: "der Bahnhof", en: "Bahnhof has a long ah sound in Bahn.", zh: "Bahnhof 的 Bahn 有較長的 ah 音。" },
      { de: "Gehen Sie rechts.", en: "Keep gehen smooth; rechts ends with a strong s sound.", zh: "gehen 連貫讀；rechts 結尾有明顯 s 音。" },
    ],
    phrases: [
      { de: "Wo ist der Bahnhof?", en: "Where is the train station?", zh: "火車站在哪裡？" },
      { de: "Gehen Sie links.", en: "Go left.", zh: "請往左走。" },
      { de: "Gehen Sie rechts.", en: "Go right.", zh: "請往右走。" },
      { de: "Gehen Sie geradeaus.", en: "Go straight ahead.", zh: "請直走。" },
      { de: "In meiner Stadt gibt es einen Park.", en: "There is a park in my city.", zh: "我的城市有一個公園。" },
    ],
    sentenceDrills: [
      { de: "Meine Wohnung ist klein, aber hell.", en: "My apartment is small but bright.", zh: "我的公寓小但明亮。" },
      { de: "Der Supermarkt ist neben dem Bahnhof.", en: "The supermarket is next to the station.", zh: "超市在火車站旁邊。" },
      { de: "Ich kann Ihnen helfen.", en: "I can help you.", zh: "我可以幫您。" },
    ],
  },
  "a1-6": {
    pronunciation: [
      { de: "Ich sage den Termin ab.", en: "The prefix ab moves to the end and stays clear.", zh: "可分前綴 ab 移到句尾，仍需清楚讀出。" },
      { de: "krank", en: "The r is light; the final k is crisp.", zh: "r 較輕，結尾 k 要清楚。" },
    ],
    phrases: [
      { de: "Ich brauche einen Termin.", en: "I need an appointment.", zh: "我需要一個預約。" },
      { de: "Ich bin krank.", en: "I am sick.", zh: "我生病了。" },
      { de: "Ich sage den Termin ab.", en: "I cancel the appointment.", zh: "我要取消預約。" },
      { de: "Der Zug hat Verspätung.", en: "The train is delayed.", zh: "火車誤點了。" },
      { de: "Können wir den Termin verschieben?", en: "Can we move the appointment?", zh: "我們可以改時間嗎？" },
    ],
    sentenceDrills: [
      { de: "Ich bin krank und kann heute nicht kommen.", en: "I am sick and cannot come today.", zh: "我生病了，今天不能來。" },
      { de: "Der Zug kommt um acht Uhr.", en: "The train arrives at eight o'clock.", zh: "火車八點到。" },
      { de: "Ich schreibe eine kurze Nachricht.", en: "I write a short message.", zh: "我寫一則簡短訊息。" },
    ],
  },
  "a2-1": {
    pronunciation: [
      { de: "die Ausbildung", en: "Aus starts like ow; Bildung has a clear d sound.", zh: "Aus 接近 ow；Bildung 的 d 要清楚。" },
      { de: "Ich muss arbeiten.", en: "muss is short; arbeiten has three clear parts.", zh: "muss 短促；arbeiten 可分三段讀。" },
    ],
    phrases: [
      { de: "Ich arbeite im Büro.", en: "I work in an office.", zh: "我在辦公室工作。" },
      { de: "Ich mache eine Ausbildung.", en: "I am doing vocational training.", zh: "我在做職業訓練。" },
      { de: "Meine Familie wohnt in Taiwan.", en: "My family lives in Taiwan.", zh: "我的家人住在台灣。" },
      { de: "Ich muss heute lernen.", en: "I have to study today.", zh: "我今天必須學習。" },
      { de: "Am Abend habe ich Deutschkurs.", en: "In the evening I have German class.", zh: "晚上我有德語課。" },
    ],
    sentenceDrills: [
      { de: "Ich arbeite und lerne am Abend Deutsch.", en: "I work and learn German in the evening.", zh: "我工作，晚上學德語。" },
      { de: "Meine Schwester sucht eine Ausbildung.", en: "My sister is looking for vocational training.", zh: "我妹妹在找職業訓練。" },
      { de: "Ich muss jeden Tag viele Aufgaben machen.", en: "I must do many tasks every day.", zh: "我每天要做很多任務。" },
    ],
  },
  "a2-2": {
    pronunciation: [
      { de: "gestern habe ich gelernt", en: "In Perfekt, the participle often comes at the end.", zh: "完成式中，過去分詞常在句尾。" },
      { de: "Ich bin gegangen.", en: "Movement verbs often use bin, not habe.", zh: "移動動詞常用 bin，不用 habe。" },
    ],
    phrases: [
      { de: "Gestern habe ich gearbeitet.", en: "Yesterday I worked.", zh: "昨天我工作了。" },
      { de: "Letzte Woche war ich krank.", en: "Last week I was sick.", zh: "上週我生病了。" },
      { de: "Ich bin zum Arzt gegangen.", en: "I went to the doctor.", zh: "我去看醫生了。" },
      { de: "Ich habe Deutsch gelernt.", en: "I learned German.", zh: "我學了德語。" },
      { de: "Danach habe ich eingekauft.", en: "After that I shopped.", zh: "之後我買了東西。" },
    ],
    sentenceDrills: [
      { de: "Am Montag habe ich einen Termin gemacht.", en: "On Monday I made an appointment.", zh: "星期一我預約了。" },
      { de: "Gestern bin ich mit dem Bus gefahren.", en: "Yesterday I rode the bus.", zh: "昨天我搭公車。" },
      { de: "Nach der Arbeit habe ich gekocht.", en: "After work I cooked.", zh: "下班後我煮飯。" },
    ],
  },
  "a2-3": {
    pronunciation: [
      { de: "Leider kann ich nicht.", en: "Leider softens refusal; say it gently.", zh: "leider 可軟化拒絕，語氣放柔。" },
      { de: "später", en: "ä is an open e-like sound.", zh: "ä 接近較開的 e 音。" },
    ],
    phrases: [
      { de: "Möchtest du am Samstag kommen?", en: "Would you like to come on Saturday?", zh: "你星期六想來嗎？" },
      { de: "Leider kann ich nicht.", en: "Unfortunately I cannot.", zh: "不好意思，我不能。" },
      { de: "Das passt mir gut.", en: "That works well for me.", zh: "這時間我方便。" },
      { de: "Können wir uns später treffen?", en: "Can we meet later?", zh: "我們可以晚一點見面嗎？" },
      { de: "Ich komme lieber am Sonntag.", en: "I would rather come on Sunday.", zh: "我比較想星期日來。" },
    ],
    sentenceDrills: [
      { de: "Danke für die Einladung.", en: "Thanks for the invitation.", zh: "謝謝你的邀請。" },
      { de: "Samstag passt mir nicht, aber Sonntag geht.", en: "Saturday does not work, but Sunday is okay.", zh: "星期六我不方便，但星期日可以。" },
      { de: "Ich finde den späteren Termin besser.", en: "I find the later appointment better.", zh: "我覺得晚一點的時間比較好。" },
    ],
  },
  "a2-4": {
    pronunciation: [
      { de: "Könnten Sie mir bitte helfen?", en: "Use a polite rising tone for requests.", zh: "請求句可用禮貌上揚語氣。" },
      { de: "kaputt", en: "Stress the second syllable: ka-PUTT.", zh: "重音在第二段：ka-PUTT。" },
    ],
    phrases: [
      { de: "Ich habe ein Problem.", en: "I have a problem.", zh: "我有一個問題。" },
      { de: "Die Heizung ist kaputt.", en: "The heating is broken.", zh: "暖氣壞了。" },
      { de: "Könnten Sie mir bitte helfen?", en: "Could you please help me?", zh: "您可以幫我嗎？" },
      { de: "Ich rufe wegen der Rechnung an.", en: "I am calling about the bill.", zh: "我打電話是關於帳單。" },
      { de: "Bitte schicken Sie mir eine Antwort.", en: "Please send me an answer.", zh: "請回覆我。" },
    ],
    sentenceDrills: [
      { de: "Meine Waschmaschine funktioniert nicht.", en: "My washing machine does not work.", zh: "我的洗衣機不能用了。" },
      { de: "Ich brauche schnell Hilfe.", en: "I need help quickly.", zh: "我很快需要幫忙。" },
      { de: "Könnten Sie morgen vorbeikommen?", en: "Could you come by tomorrow?", zh: "您明天可以過來嗎？" },
    ],
  },
  "a2-5": {
    pronunciation: [
      { de: "sich anmelden", en: "Reflexive mich/sich is short but important.", zh: "反身代詞 mich/sich 短但很重要。" },
      { de: "zwischen", en: "The zw sound starts with ts plus v.", zh: "zw 開頭像 ts 加 v。" },
    ],
    phrases: [
      { de: "Ich möchte mich anmelden.", en: "I would like to register.", zh: "我想登記。" },
      { de: "Die Haltestelle ist vor dem Haus.", en: "The stop is in front of the house.", zh: "站牌在房子前面。" },
      { de: "Die Miete ist zu hoch.", en: "The rent is too high.", zh: "房租太高。" },
      { de: "Ich fahre mit der Bahn.", en: "I travel by train.", zh: "我搭火車。" },
      { de: "Der Termin ist zwischen neun und zehn.", en: "The appointment is between nine and ten.", zh: "預約在九點到十點之間。" },
    ],
    sentenceDrills: [
      { de: "Ich melde mich morgen beim Amt an.", en: "I register at the office tomorrow.", zh: "我明天去行政單位登記。" },
      { de: "Die Wohnung liegt neben der Haltestelle.", en: "The apartment is next to the stop.", zh: "公寓在站牌旁邊。" },
      { de: "Ich gehe in das Büro und warte dort.", en: "I go into the office and wait there.", zh: "我走進辦公室並在那裡等。" },
    ],
  },
  "a2-6": {
    pronunciation: [
      { de: "weil ich Deutsch lerne", en: "After weil, the verb moves to the end.", zh: "weil 後面動詞移到句尾。" },
      { de: "Ich finde, dass Deutsch wichtig ist.", en: "After dass, ist goes to the end.", zh: "dass 後面 ist 到句尾。" },
    ],
    phrases: [
      { de: "Ich lerne Deutsch, weil ich hier lebe.", en: "I learn German because I live here.", zh: "我學德語，因為我住在這裡。" },
      { de: "Ich finde, dass Deutsch wichtig ist.", en: "I think that German is important.", zh: "我覺得德語很重要。" },
      { de: "Wenn ich Zeit habe, lerne ich.", en: "When I have time, I study.", zh: "我有時間時就學習。" },
      { de: "Meiner Meinung nach ist das gut.", en: "In my opinion, that is good.", zh: "依我看，這很好。" },
      { de: "Das ist schwierig, aber möglich.", en: "That is difficult but possible.", zh: "這很難，但有可能。" },
    ],
    sentenceDrills: [
      { de: "Ich lerne jeden Tag, weil ich die Prüfung bestehen möchte.", en: "I study every day because I want to pass the exam.", zh: "我每天學，因為我想通過考試。" },
      { de: "Ich hoffe, dass ich bald besser spreche.", en: "I hope that I speak better soon.", zh: "我希望我很快說得更好。" },
      { de: "Wenn ich einen Fehler mache, wiederhole ich den Satz.", en: "When I make a mistake, I repeat the sentence.", zh: "我犯錯時，就重複句子。" },
    ],
  },
  "b1-1": {
    pronunciation: [
      { de: "meiner Meinung nach", en: "This phrase is often placed at the start; keep nach light.", zh: "此片語常放句首；nach 輕短即可。" },
      { de: "außerdem", en: "äu sounds like oy.", zh: "äu 接近 oy 音。" },
    ],
    phrases: [
      { de: "Meiner Meinung nach ist Deutsch wichtig.", en: "In my opinion, German is important.", zh: "依我看，德語很重要。" },
      { de: "Außerdem hilft Deutsch bei der Arbeit.", en: "Additionally, German helps at work.", zh: "此外，德語對工作有幫助。" },
      { de: "Trotzdem ist das Lernen manchmal schwer.", en: "Nevertheless, learning is sometimes hard.", zh: "儘管如此，學習有時很難。" },
      { de: "Ein gutes Beispiel ist der Alltag.", en: "A good example is everyday life.", zh: "一個好例子是日常生活。" },
      { de: "Deshalb lerne ich regelmäßig.", en: "Therefore I study regularly.", zh: "因此我規律學習。" },
    ],
    sentenceDrills: [
      { de: "Ich bin dafür, weil man dadurch selbstständiger wird.", en: "I am in favor because it makes you more independent.", zh: "我支持，因為這會讓人更獨立。" },
      { de: "Ich sehe einen Vorteil, aber auch ein Problem.", en: "I see an advantage, but also a problem.", zh: "我看到一個優點，但也有一個問題。" },
      { de: "Zum Schluss möchte ich sagen, dass Übung wichtig ist.", en: "In closing, I want to say that practice is important.", zh: "最後我想說，練習很重要。" },
    ],
  },
  "b1-2": {
    pronunciation: [
      { de: "die Bewerbung", en: "Stress the second part: Be-WER-bung.", zh: "重音在第二段：Be-WER-bung。" },
      { de: "zuverlässig", en: "z starts like ts; ä sounds like open e.", zh: "z 像 ts；ä 接近開口 e 音。" },
    ],
    phrases: [
      { de: "Ich suche eine neue Arbeit.", en: "I am looking for a new job.", zh: "我在找新工作。" },
      { de: "Anbei sende ich Ihnen meinen Lebenslauf.", en: "Attached I send you my CV.", zh: "附件中寄上我的履歷。" },
      { de: "Ich habe Erfahrung im Kundenservice.", en: "I have experience in customer service.", zh: "我有客服經驗。" },
      { de: "Ich bin zuverlässig und motiviert.", en: "I am reliable and motivated.", zh: "我可靠且有動力。" },
      { de: "Ich freue mich auf Ihre Antwort.", en: "I look forward to your reply.", zh: "期待您的回覆。" },
    ],
    sentenceDrills: [
      { de: "Ich suche eine Stelle, die zu meiner Erfahrung passt.", en: "I am looking for a position that fits my experience.", zh: "我在找符合我經驗的職位。" },
      { de: "In meiner letzten Arbeit habe ich viel organisiert.", en: "In my last job I organized a lot.", zh: "在上一份工作中我組織了很多事情。" },
      { de: "Gern erkläre ich meine Motivation in einem Gespräch.", en: "I would gladly explain my motivation in an interview.", zh: "我很樂意在面談中說明我的動機。" },
    ],
  },
  "b1-3": {
    pronunciation: [
      { de: "die Behörde", en: "ö is rounded; keep the middle syllable clear.", zh: "ö 需圓唇；中間音節要清楚。" },
      { de: "Könnten Sie mir bitte", en: "This polite frame should sound calm and steady.", zh: "禮貌句型語氣要平穩。" },
    ],
    phrases: [
      { de: "Ich habe eine Frage zu meinem Antrag.", en: "I have a question about my application.", zh: "我對我的申請有一個問題。" },
      { de: "Welche Unterlagen brauche ich?", en: "Which documents do I need?", zh: "我需要哪些文件？" },
      { de: "Ich kann den Termin leider nicht wahrnehmen.", en: "Unfortunately, I cannot attend the appointment.", zh: "不好意思，我無法出席該預約。" },
      { de: "Könnten Sie mir eine neue Frist geben?", en: "Could you give me a new deadline?", zh: "您可以給我新的期限嗎？" },
      { de: "Vielen Dank für Ihre Hilfe.", en: "Thank you very much for your help.", zh: "非常感謝您的幫助。" },
    ],
    sentenceDrills: [
      { de: "Ich schreibe Ihnen, weil ich meinen Termin ändern muss.", en: "I am writing because I must change my appointment.", zh: "我寫信是因為我必須改預約。" },
      { de: "Leider fehlen mir noch zwei Unterlagen.", en: "Unfortunately, I am still missing two documents.", zh: "不好意思，我還缺兩份文件。" },
      { de: "Bitte teilen Sie mir mit, was ich tun soll.", en: "Please tell me what I should do.", zh: "請告訴我該怎麼做。" },
    ],
  },
  "b1-4": {
    pronunciation: [
      { de: "die Beschwerde", en: "Stress the second syllable: Be-SCHWER-de.", zh: "重音在第二段：Be-SCHWER-de。" },
      { de: "die Lösung", en: "ö is rounded; -ung is short.", zh: "ö 圓唇；-ung 短促。" },
    ],
    phrases: [
      { de: "Ich möchte eine Beschwerde schreiben.", en: "I would like to write a complaint.", zh: "我想寫一封投訴。" },
      { de: "Die Heizung funktioniert nicht.", en: "The heating does not work.", zh: "暖氣不能用。" },
      { de: "Das Problem besteht seit drei Tagen.", en: "The problem has existed for three days.", zh: "這個問題已經三天了。" },
      { de: "Ich bitte Sie um eine schnelle Lösung.", en: "I ask you for a quick solution.", zh: "請您盡快提供解決方案。" },
      { de: "Bitte melden Sie sich bis Freitag.", en: "Please contact me by Friday.", zh: "請您在星期五前聯絡我。" },
    ],
    sentenceDrills: [
      { de: "Wegen des Mangels kann ich das Zimmer nicht benutzen.", en: "Because of the defect, I cannot use the room.", zh: "因為這個缺陷，我不能使用房間。" },
      { de: "Ich habe schon zweimal angerufen, aber keine Antwort bekommen.", en: "I have already called twice but received no answer.", zh: "我已經打過兩次電話，但沒有收到回覆。" },
      { de: "Falls möglich, schicken Sie bitte morgen jemanden vorbei.", en: "If possible, please send someone tomorrow.", zh: "如果可以，請明天派人過來。" },
    ],
  },
  "b1-5": {
    pronunciation: [
      { de: "Wie wäre es mit", en: "This suggestion frame should sound open, not forceful.", zh: "此建議句型語氣要開放，不要太強硬。" },
      { de: "einverstanden", en: "Break it into ein + verstanden.", zh: "可分成 ein + verstanden 來讀。" },
    ],
    phrases: [
      { de: "Wie wäre es mit einem Treffen am Samstag?", en: "How about a meeting on Saturday?", zh: "星期六見面如何？" },
      { de: "Das ist eine gute Idee.", en: "That is a good idea.", zh: "這是個好主意。" },
      { de: "Ich bin einverstanden.", en: "I agree.", zh: "我同意。" },
      { de: "Ich habe einen anderen Vorschlag.", en: "I have another suggestion.", zh: "我有另一個建議。" },
      { de: "Wir brauchen einen Kompromiss.", en: "We need a compromise.", zh: "我們需要一個折衷方案。" },
    ],
    sentenceDrills: [
      { de: "Zuerst sollten wir den Termin festlegen.", en: "First we should set the date.", zh: "首先我們應該確定時間。" },
      { de: "Danach können wir die Aufgaben verteilen.", en: "After that we can divide the tasks.", zh: "之後我們可以分配任務。" },
      { de: "Wenn du einverstanden bist, reserviere ich den Raum.", en: "If you agree, I will reserve the room.", zh: "如果你同意，我來預訂房間。" },
    ],
  },
  "b1-6": {
    pronunciation: [
      { de: "die Einbürgerung", en: "ü is rounded; keep bürger clear.", zh: "ü 需圓唇；bürger 要清楚。" },
      { de: "Ich bereite mich vor.", en: "vor is the separable prefix and comes at the end.", zh: "vor 是可分前綴，放在句尾。" },
    ],
    phrases: [
      { de: "Ich bereite mich auf die B1-Prüfung vor.", en: "I am preparing for the B1 exam.", zh: "我正在準備 B1 考試。" },
      { de: "Ich möchte die Prüfung bestehen.", en: "I want to pass the exam.", zh: "我想通過考試。" },
      { de: "Ich übe Lesen, Hören, Schreiben und Sprechen.", en: "I practice reading, listening, writing, and speaking.", zh: "我練習閱讀、聽力、寫作和口說。" },
      { de: "Nach dem Test wiederhole ich meine schwachen Themen.", en: "After the test I review my weak topics.", zh: "測驗後我複習弱項。" },
      { de: "Ich lerne auch für die Einbürgerung.", en: "I also study for naturalisation.", zh: "我也準備入籍。" },
    ],
    sentenceDrills: [
      { de: "Heute mache ich eine Schreibaufgabe und nehme meine Antwort auf.", en: "Today I do a writing task and record my answer.", zh: "今天我做一個寫作任務並錄下回答。" },
      { de: "Wenn ich einen Fehler finde, schreibe ich den Satz noch einmal.", en: "When I find a mistake, I write the sentence again.", zh: "我發現錯誤時，就再寫一次句子。" },
      { de: "Am Wochenende mache ich eine Prüfungssimulation.", en: "On the weekend I do an exam simulation.", zh: "週末我做一次模擬考。" },
    ],
  },
};

const studyExtraExpansions: Record<string, StudyExtra> = {
  "a1-1": {
    pronunciation: [
      { de: "Können Sie das bitte wiederholen?", en: "Say it in three calm groups: Können Sie das / bitte / wiederholen?", zh: "" },
      { de: "Woher kommen Sie?", en: "Let the question rise slightly at the end, but keep kommen relaxed.", zh: "" },
    ],
    phrases: [
      { de: "Wie bitte?", en: "Pardon?", zh: "" },
      { de: "Langsam bitte.", en: "Slowly, please.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Guten Tag, können Sie langsam sprechen?", en: "Hello, can you speak slowly?", zh: "" },
    ],
  },
  "a1-2": {
    pronunciation: [
      { de: "Postleitzahl", en: "Break the compound into Post + Leit + Zahl.", zh: "" },
      { de: "Geburtsdatum", en: "The ts sound in Geburts is crisp before datum.", zh: "" },
    ],
    phrases: [
      { de: "Wie schreibt man das?", en: "How do you write that?", zh: "" },
      { de: "Ich bin ledig.", en: "I am single.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Meine Adresse ist in der Hauptstraße.", en: "My address is on Hauptstrasse.", zh: "" },
    ],
  },
  "a1-3": {
    pronunciation: [
      { de: "Ich stehe um sieben Uhr auf.", en: "Keep auf audible at the end; it carries the separable prefix.", zh: "" },
      { de: "frühstücken", en: "ü is rounded; say früh and stück as two clear parts.", zh: "" },
    ],
    phrases: [
      { de: "Ich stehe früh auf.", en: "I get up early.", zh: "" },
      { de: "Ich habe Feierabend.", en: "I am done with work.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Nach der Arbeit lerne ich kurz Deutsch.", en: "After work I study German briefly.", zh: "" },
    ],
  },
  "a1-4": {
    pronunciation: [
      { de: "mit Karte bezahlen", en: "Keep Karte and bezahlen separate; do not swallow the t.", zh: "" },
      { de: "Wie viel kostet das?", en: "Wie viel is often spoken as one smooth question chunk.", zh: "" },
    ],
    phrases: [
      { de: "Ich zahle bar.", en: "I pay in cash.", zh: "" },
      { de: "Noch etwas?", en: "Anything else?", zh: "" },
    ],
    sentenceDrills: [
      { de: "Ich möchte zahlen, bitte.", en: "I would like to pay, please.", zh: "" },
    ],
  },
  "a1-5": {
    pronunciation: [
      { de: "geradeaus", en: "The word flows as ge-ra-de-aus; keep the final aus clear.", zh: "" },
      { de: "in der Nähe", en: "Nähe has a long open ä sound.", zh: "" },
    ],
    phrases: [
      { de: "Ist das weit?", en: "Is that far?", zh: "" },
      { de: "Es ist in der Nähe.", en: "It is nearby.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Die Apotheke ist rechts neben dem Supermarkt.", en: "The pharmacy is on the right next to the supermarket.", zh: "" },
    ],
  },
  "a1-6": {
    pronunciation: [
      { de: "verschieben", en: "Stress schie in verschieben and keep the final -ben light.", zh: "" },
      { de: "Verspätung", en: "ä is open and -ung is short, not a full ung.", zh: "" },
    ],
    phrases: [
      { de: "Ich komme später.", en: "I am coming later.", zh: "" },
      { de: "Gute Besserung.", en: "Get well soon.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Leider hat mein Bus Verspätung.", en: "Unfortunately my bus is delayed.", zh: "" },
    ],
  },
  "a2-1": {
    pronunciation: [
      { de: "sich kümmern um", en: "Keep kümmern rounded and short; the reflexive sich is light.", zh: "" },
      { de: "Deutschlernen", en: "In compounds, keep both Deutsch and lernen understandable.", zh: "" },
    ],
    phrases: [
      { de: "Ich arbeite in Teilzeit.", en: "I work part time.", zh: "" },
      { de: "Ich kümmere mich um meine Familie.", en: "I take care of my family.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Nach der Arbeit mache ich den Haushalt.", en: "After work I do the housework.", zh: "" },
    ],
  },
  "a2-2": {
    pronunciation: [
      { de: "Ich bin gefahren.", en: "Movement uses bin; keep the participle at the end.", zh: "" },
      { de: "letzten Monat", en: "The z/t cluster in letzten is crisp but short.", zh: "" },
    ],
    phrases: [
      { de: "Was hast du gemacht?", en: "What did you do?", zh: "" },
      { de: "Ich bin zu Hause geblieben.", en: "I stayed at home.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Am Wochenende habe ich Freunde besucht.", en: "On the weekend I visited friends.", zh: "" },
    ],
  },
  "a2-3": {
    pronunciation: [
      { de: "absagen", en: "In a main clause, ab moves to the end and should still be heard.", zh: "" },
      { de: "Verabredung", en: "Break it into Ver + ab + redung to avoid rushing.", zh: "" },
    ],
    phrases: [
      { de: "Ich sage gern zu.", en: "I am happy to accept.", zh: "" },
      { de: "Das ist mir lieber.", en: "I prefer that.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Freitag passt mir besser als Donnerstag.", en: "Friday suits me better than Thursday.", zh: "" },
    ],
  },
  "a2-4": {
    pronunciation: [
      { de: "dringend", en: "The final -d sounds like t; keep the word firm but polite.", zh: "" },
      { de: "Bestellnummer", en: "Break the compound into Bestell + Nummer.", zh: "" },
    ],
    phrases: [
      { de: "Es ist dringend.", en: "It is urgent.", zh: "" },
      { de: "Ich warte auf Ihre Antwort.", en: "I am waiting for your reply.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Ich rufe wegen meiner Bestellnummer an.", en: "I am calling about my order number.", zh: "" },
    ],
  },
  "a2-5": {
    pronunciation: [
      { de: "gegenüber", en: "ü is rounded and the final -ber is light.", zh: "" },
      { de: "Anmeldung", en: "The stress is on An; -meldung stays clear.", zh: "" },
    ],
    phrases: [
      { de: "Ich ziehe bald um.", en: "I am moving soon.", zh: "" },
      { de: "Das Amt ist geöffnet.", en: "The office is open.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Für die Anmeldung brauche ich eine Bescheinigung.", en: "For registration I need a certificate.", zh: "" },
    ],
  },
  "a2-6": {
    pronunciation: [
      { de: "trotzdem", en: "Stress trotz and keep dem short.", zh: "" },
      { de: "Der Grund ist einfach.", en: "Grund has a rounded u; final d sounds like t.", zh: "" },
    ],
    phrases: [
      { de: "Der Grund ist einfach.", en: "The reason is simple.", zh: "" },
      { de: "Ich habe wenig Zeit.", en: "I have little time.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Obwohl ich wenig Zeit habe, lerne ich regelmäßig.", en: "Although I have little time, I study regularly.", zh: "" },
    ],
  },
  "b1-1": {
    pronunciation: [
      { de: "einerseits", en: "Pause slightly after einerseits when it starts an argument.", zh: "" },
      { de: "andererseits", en: "Keep the d and r light so the connector stays fluent.", zh: "" },
    ],
    phrases: [
      { de: "Das hat Vor- und Nachteile.", en: "That has advantages and disadvantages.", zh: "" },
      { de: "Ich sehe das etwas anders.", en: "I see that a bit differently.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Einerseits spart man Zeit, andererseits fehlt der Kontakt.", en: "On the one hand you save time; on the other hand contact is missing.", zh: "" },
    ],
  },
  "b1-2": {
    pronunciation: [
      { de: "Vorstellungsgespräch", en: "This long compound has three clear parts: Vorstellung + Gespräch.", zh: "" },
      { de: "Kenntnisse", en: "The double n is held briefly; -nisse is soft.", zh: "" },
    ],
    phrases: [
      { de: "Ich habe gute Kenntnisse in Excel.", en: "I have good skills in Excel.", zh: "" },
      { de: "Wann findet das Gespräch statt?", en: "When does the interview take place?", zh: "" },
    ],
    sentenceDrills: [
      { de: "Ich suche eine Stelle mit festen Arbeitszeiten.", en: "I am looking for a job with fixed working hours.", zh: "" },
    ],
  },
  "b1-3": {
    pronunciation: [
      { de: "zuständig", en: "z sounds like ts; ä stays open.", zh: "" },
      { de: "einreichen", en: "ei sounds like eye; ch is soft after ei.", zh: "" },
    ],
    phrases: [
      { de: "Wer ist dafür zuständig?", en: "Who is responsible for that?", zh: "" },
      { de: "Ich reiche die Unterlagen ein.", en: "I submit the documents.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Bitte teilen Sie mir mit, welche Gebühr ich zahlen muss.", en: "Please let me know which fee I have to pay.", zh: "" },
    ],
  },
  "b1-4": {
    pronunciation: [
      { de: "Kündigung", en: "ü is rounded; -ung is short and light.", zh: "" },
      { de: "schriftlich", en: "The ch at the end is soft after i.", zh: "" },
    ],
    phrases: [
      { de: "Der Schaden ist groß.", en: "The damage is serious.", zh: "" },
      { de: "Bitte bestätigen Sie das schriftlich.", en: "Please confirm that in writing.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Seit Montag kann ich die Heizung nicht benutzen.", en: "Since Monday I cannot use the heating.", zh: "" },
    ],
  },
  "b1-5": {
    pronunciation: [
      { de: "vereinbaren", en: "The ei sounds like eye; keep bar clear near the end.", zh: "" },
      { de: "Ablauf", en: "Stress Ab and keep lauf as one smooth diphthong.", zh: "" },
    ],
    phrases: [
      { de: "Lass uns den Ablauf klären.", en: "Let us clarify the schedule.", zh: "" },
      { de: "Ich verstehe deinen Punkt.", en: "I understand your point.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Wir könnten die Aufgaben fair verteilen.", en: "We could divide the tasks fairly.", zh: "" },
    ],
  },
  "b1-6": {
    pronunciation: [
      { de: "auswerten", en: "The aus is clear; werten keeps a soft final -en.", zh: "" },
      { de: "Simulation", en: "The final -tion sounds like tsion.", zh: "" },
    ],
    phrases: [
      { de: "Ich werte meine Fehler aus.", en: "I evaluate my mistakes.", zh: "" },
      { de: "Ich übe jede Fertigkeit.", en: "I practise every skill.", zh: "" },
    ],
    sentenceDrills: [
      { de: "Nach jeder Simulation schreibe ich einen kurzen Lernplan.", en: "After every mock run I write a short study plan.", zh: "" },
    ],
  },
};

Object.entries(studyExtraExpansions).forEach(([moduleId, expansion]) => {
  const current = studyExtras[moduleId];

  if (!current) {
    studyExtras[moduleId] = expansion;
    return;
  }

  current.pronunciation.push(...expansion.pronunciation);
  current.phrases.push(...expansion.phrases);
  current.sentenceDrills.push(...expansion.sentenceDrills);
});

export function getStudyExtra(moduleId: string) {
  return studyExtras[moduleId];
}
