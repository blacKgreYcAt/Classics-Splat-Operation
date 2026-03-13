import { Lesson } from '../lessons';

export const world1Lessons: Omit<Lesson, 'phoneticOriginalText'>[] = [
  {
    id: "1-1", world: 1, stage: 1, book: "學而第一", englishBook: "Xue Er I", title: "快樂的學習", englishTitle: "Joy of Learning",
    originalText: "子曰：「學而時習之，不亦說乎？有朋自遠方來，不亦樂乎？人不知而不慍，不亦君子乎？」",
    translation: "孔子說：「學了知識並經常複習，不也是很令人高興嗎？有志同道合的朋友從遠方而來，不也是很快樂嗎？別人不了解我，我也不生氣，不也是一個有德的君子嗎？」",
    storyTitle: "小明的腳踏車與遠方的朋友",
    storyContent: "有一天，小明終於學會了騎腳踏車！他覺得很開心，所以每天放學後，他都會去公園練習騎幾圈，越騎越熟練，心裡覺得非常有成就感。\n\n過了幾天，小明住在高雄的表哥來台北找他玩。小明好久沒見到表哥了，兩個人開心地聊著天，分享彼此最近發生的趣事。\n\n後來，小明在學校考試考了一百分，但是老師忘記稱讚他了。小明雖然有點失望，但他想：「沒關係，我自己知道我有努力就好，不需要因為別人不知道而生氣。」",
    flashcards: [
      { id: "f1-1-1", term: "學而時習之", definition: "學了新知識後，經常去練習它" },
      { id: "f1-1-2", term: "不亦說乎", definition: "這不是很高興嗎？（「說」通「悅」）" },
      { id: "f1-1-3", term: "不亦慍", definition: "不生氣、不怨恨" }
    ]
  },
  {
    id: "1-2", world: 1, stage: 2, book: "學而第一", englishBook: "Xue Er I", title: "孝順與友愛", englishTitle: "Filial Piety & Brotherhood",
    originalText: "有子曰：「其為人也孝弟，而好犯上者，鮮矣；不好犯上，而好作亂者，未之有也。君子務本，本立而道生。孝弟也者，其為仁之本與！」",
    translation: "有子說：「一個做人孝順父母、友愛兄弟的人，卻喜歡冒犯長輩或長官的，那是很少見的；不喜歡冒犯長輩或長官，卻喜歡搗亂造反的人，從來沒有過。君子致力於根本，根本建立了，做人的道理就會產生。孝和弟，就是『仁』的根本吧！」",
    storyTitle: "蓋房子的地基",
    storyContent: "蓋房子最重要的就是地基，地基打得穩，房子才不會倒。\n\n有子說，一個人在家裡如果能孝順父母、友愛兄弟姊妹（這就是地基），他在外面通常就不會去頂撞長輩或長官。既然不會頂撞長官，當然就不會去搗亂做壞事了。\n\n所以，一個有修養的君子，會專心把最根本的事情做好。根本建立起來了，做人處事的道理自然就會產生。孝順和友愛，就是培養『仁愛之心』的根本喔！",
    flashcards: [
      { id: "f1-2-1", term: "孝弟", definition: "孝順父母，友愛兄弟（弟通悌）" },
      { id: "f1-2-2", term: "鮮矣", definition: "很少見、極少" },
      { id: "f1-2-3", term: "務本", definition: "專心致力於根本的事物" }
    ]
  },
  {
    id: "1-3", world: 1, stage: 3, book: "學而第一", englishBook: "Xue Er I", title: "真誠最重要", englishTitle: "Sincerity Matters Most",
    originalText: "子曰：「巧言令色，鮮矣仁！」",
    translation: "孔子說：「花言巧語、滿臉討好表情的人，很少有真正的仁德。」",
    storyTitle: "糖果包裝紙",
    storyContent: "有時候我們會看到包裝得很漂亮的糖果，但打開來吃卻發現一點都不好吃。\n\n孔子說，有些人講話特別好聽（巧言），表情也故意裝得很討好別人（令色），這樣的人，心裡通常很少有真正的善良和真誠（仁）。\n\n這告訴我們，交朋友不能只看表面，真正的好朋友是真心誠意的，不需要靠花言巧語來騙人喔！",
    flashcards: [
      { id: "f1-3-1", term: "巧言", definition: "好聽但虛偽的話" },
      { id: "f1-3-2", term: "令色", definition: "討好別人的臉色" },
      { id: "f1-3-3", term: "鮮矣仁", definition: "很少有真正的仁德" }
    ]
  },
  {
    id: "1-4", world: 1, stage: 4, book: "學而第一", englishBook: "Xue Er I", title: "每天反省自己", englishTitle: "Daily Self-Reflection",
    originalText: "曾子曰：「吾日三省吾身：為人謀而不忠乎？與朋友交而不信乎？傳不習乎？」",
    translation: "曾子說：「我每天多次反省自己：替別人辦事有沒有盡心盡力？與朋友交往有沒有誠實守信？老師傳授的學業有沒有複習？」",
    storyTitle: "曾子的三本日記",
    storyContent: "孔子有一個學生叫曾子，他非常注重自己的品德。想像一下，曾子好像每天睡覺前都會寫三本心裡的日記。\n\n第一本日記問自己：「今天替別人辦事情，有沒有盡心盡力去做呢？還是隨隨便便敷衍了事？」\n\n第二本日記問自己：「今天跟朋友相處，有沒有說話算話？有沒有誠實守信？」\n\n第三本日記問自己：「今天老師教我的知識，我有沒有認真複習？還是聽過就忘記了？」",
    flashcards: [
      { id: "f1-4-1", term: "三省吾身", definition: "每天多次反省自己" },
      { id: "f1-4-2", term: "忠", definition: "盡心盡力" },
      { id: "f1-4-3", term: "信", definition: "誠實、守信用" }
    ]
  },
  {
    id: "1-5", world: 1, stage: 5, book: "學而第一", englishBook: "Xue Er I", title: "治理國家的道理", englishTitle: "Principles of Governance",
    originalText: "子曰：「道千乘之國，敬事而信，節用而愛人，使民以時。」",
    translation: "孔子說：「治理一個擁有一千輛兵車的國家，要嚴肅認真地對待政務並且守信用，節約開支並且愛護官吏，役使百姓要避開農忙時節。」",
    storyTitle: "好國王的秘密",
    storyContent: "如果讓你當一個大國家的國王，你要怎麼管理呢？\n\n孔子說，治理一個大國家，有幾個秘訣：\n第一，做事要認真負責，而且說話算話。\n第二，要節約花費，不要亂花錢，並且愛護人民。\n第三，如果需要人民幫忙做事，要在對的時間，例如不要在農夫最忙著種田的時候叫他們去蓋城牆。",
    flashcards: [
      { id: "f1-5-1", term: "道", definition: "治理（通導）" },
      { id: "f1-5-2", term: "千乘之國", definition: "擁有一千輛兵車的大國" },
      { id: "f1-5-3", term: "使民以時", definition: "在適當的時機才役使人民" }
    ]
  },
  {
    id: "1-6", world: 1, stage: 6, book: "學而第一", englishBook: "Xue Er I", title: "好學生的順序", englishTitle: "Order of Learning",
    originalText: "子曰：「弟子，入則孝，出則弟，謹而信，汎愛眾，而親仁。行有餘力，則以學文。」",
    translation: "孔子說：「弟子們在家要孝順父母，出門要敬愛兄長，做事謹慎且守信用，博愛大眾並親近仁德之人。做好了這些事還有餘力的話，就去學習文化知識。」",
    storyTitle: "學習的先後順序",
    storyContent: "小明每天都在補習班學很多才藝，但是他在家裡常常對媽媽發脾氣，在學校也會欺負同學。\n\n孔子說，一個好學生，應該先學會做人：在家孝順父母，出門尊敬長輩；做事謹慎守信，愛護大家，並且親近有道德的人。把這些「做人」的基本功都做好了，如果還有剩下的時間和精力，才去學習書本上的知識。",
    flashcards: [
      { id: "f1-6-1", term: "入則孝", definition: "在家孝順父母" },
      { id: "f1-6-2", term: "出則弟", definition: "出外敬愛兄長（弟通悌）" },
      { id: "f1-6-3", term: "學文", definition: "學習文化知識、書本學問" }
    ]
  },
  {
    id: "1-7", world: 1, stage: 7, book: "學而第一", englishBook: "Xue Er I", title: "真正的學問", englishTitle: "True Knowledge",
    originalText: "子夏曰：「賢賢易色；事父母，能竭其力；事君，能致其身；與朋友交，言而有信。雖曰未學，吾必謂之學矣。」",
    translation: "子夏說：「看重賢德而輕視美色；侍奉父母能竭盡全力；為國君效力能不惜生命；與朋友交往說話守信用。這樣的人，即使說沒學習過，我也一定說他學習過了。」",
    storyTitle: "沒上過學的智者",
    storyContent: "孔子的學生子夏說，看重別人的好品德，勝過看重美麗的外表。\n\n如果一個人侍奉父母能盡心盡力；為國家做事能不顧自身安危；和朋友交往能說話算話。這樣的人，就算別人說他沒有讀過書，我也一定會說他是一個非常有學問的人！因為他已經把道理用在生活上了。",
    flashcards: [
      { id: "f1-7-1", term: "賢賢", definition: "尊重、看重有才德的人" },
      { id: "f1-7-2", term: "易色", definition: "改變看重美色的態度" },
      { id: "f1-7-3", term: "致其身", definition: "奉獻、犧牲自己的生命" }
    ]
  },
  {
    id: "1-8", world: 1, stage: 8, book: "學而第一", englishBook: "Xue Er I", title: "君子的風度", englishTitle: "Demeanor of a Gentleman",
    originalText: "子曰：「君子不重，則不威；學則不固。主忠信。無友不如己者。過，則勿憚改。」",
    translation: "孔子說：「君子如果不莊重，就沒有威嚴，學習的知識也不穩固。要以忠誠和守信為主。不要結交品德不如自己的人。有了過錯，就不要怕改正。」",
    storyTitle: "勇敢認錯的勇士",
    storyContent: "孔子說，一個君子如果行為不莊重，就會失去威嚴，學到的知識也不會穩固。\n\n做人要以「忠誠」和「信實」為原則。不要結交品德不如自己的人當好朋友。最重要的是，如果發現自己做錯事了，千萬不要害怕去改正它！勇敢認錯並改過，才是真正的勇士。",
    flashcards: [
      { id: "f1-8-1", term: "重", definition: "莊重、穩重" },
      { id: "f1-8-2", term: "固", definition: "穩固、紮實" },
      { id: "f1-8-3", term: "勿憚改", definition: "不要害怕改正錯誤" }
    ]
  },
  {
    id: "1-9", world: 1, stage: 9, book: "學而第一", englishBook: "Xue Er I", title: "飲水思源", englishTitle: "Remembering Our Roots",
    originalText: "曾子曰：「慎終追遠，民德歸厚矣。」",
    translation: "曾子說：「謹慎地辦理父母的喪事，虔誠地祭祀遠代的祖先，百姓的品德就會趨於淳厚了。」",
    storyTitle: "清明節的意義",
    storyContent: "每年清明節，爸爸媽媽都會帶我們去掃墓，祭拜祖先。為什麼要這麼做呢？\n\n曾子說，如果我們能夠謹慎地辦理父母的喪事，並且虔誠地追念祭拜祖先，不忘記我們的根本。當大家都懂得「飲水思源」、感恩祖先的時候，整個社會的風氣就會變得越來越淳厚善良了。",
    flashcards: [
      { id: "f1-9-1", term: "慎終", definition: "謹慎地辦理父母的喪事" },
      { id: "f1-9-2", term: "追遠", definition: "虔誠地祭祀、追念祖先" },
      { id: "f1-9-3", term: "歸厚", definition: "趨於淳厚、善良" }
    ]
  },
  {
    id: "1-10", world: 1, stage: 10, book: "學而第一", englishBook: "Xue Er I", title: "孔子的風采", englishTitle: "Confucius' Manner",
    originalText: "子禽問於子貢曰：「夫子至於是邦也，必聞其政，求之與？抑與之與？」子貢曰：「夫子溫、良、恭、儉、讓以得之。夫子之求之也，其諸異乎人之求之與？」",
    translation: "子禽問子貢：「老師每到一個國家，一定能參與政事，是他求來的呢？還是人家主動給他的？」子貢說：「老師是靠溫和、善良、恭敬、節儉、謙讓得到的。老師的求法，大概跟別人的求法不一樣吧！」",
    storyTitle: "受歡迎的客人",
    storyContent: "有一個學生問子貢：「為什麼孔子每到一個地方，當地的國王都想找他商量國事呢？」\n\n子貢回答：「因為老師具備了五種好品德：溫和、善良、恭敬、節儉、謙讓。大家看到他這麼有修養，自然都想請教他。老師不需要像別人那樣去爭奪，好機會自然會找上門。」",
    flashcards: [
      { id: "f1-10-1", term: "溫良恭儉讓", definition: "溫和、善良、恭敬、節儉、謙讓" },
      { id: "f1-10-2", term: "邦", definition: "國家、城邦" },
      { id: "f1-10-3", term: "抑", definition: "還是、或者是" }
    ]
  },
  {
    id: "1-11", world: 1, stage: 11, book: "學而第一", englishBook: "Xue Er I", title: "什麼是孝順", englishTitle: "What is Filial Piety",
    originalText: "子曰：「父在，觀其志；父沒，觀其行；三年無改於父之道，可謂孝矣。」",
    translation: "孔子說：「父親在世時，觀察兒子的志向；父親過世後，觀察兒子的行為；如果多年都不改變父親合理的規矩，就可以說是孝順了。」",
    storyTitle: "傳承的好習慣",
    storyContent: "小華的爸爸教他每天都要把自己的房間整理乾淨。\n\n孔子說，當父親還在世的時候，因為孩子還不能自己做主，所以要看他的「志向」好不好；當父親過世後，孩子可以自己做主了，就要看他的「行為」好不好。如果過了好幾年，他都還能保持父親教導他的好規矩，沒有改變，這樣就是真正的孝順了！",
    flashcards: [
      { id: "f1-11-1", term: "父在觀其志", definition: "父親在世時，觀察孩子的志向" },
      { id: "f1-11-2", term: "父沒觀其行", definition: "父親過世後，觀察孩子的行為" },
      { id: "f1-11-3", term: "三年無改", definition: "多年不改變（三年代表多年）" }
    ]
  },
  {
    id: "1-12", world: 1, stage: 12, book: "學而第一", englishBook: "Xue Er I", title: "禮的用處", englishTitle: "The Use of Rites",
    originalText: "有子曰：「禮之用，和為貴。先王之道，斯為美；小大由之。有所不行，知和而和，不以禮節之，亦不可行也。」",
    translation: "有子說：「禮的功用，以和諧為最可貴。古代君王的治國之道，最美妙的地方就在這裡；無論大事小事都遵循這個原則。但如果只是一味地追求和諧，而不以禮法來節制，那也是行不通的。」",
    storyTitle: "和諧的交響樂",
    storyContent: "想像一個交響樂團，如果每個樂器都各吹各的，那會很吵。所以需要「禮」（樂譜和指揮）來讓大家和諧相處。\n\n有子說，禮最重要的目的就是讓大家「和諧」。古代優秀的國王，不管大事小事都用這個方法。但是，如果大家只是一味地追求和諧，卻忘記了規矩，那就像沒有樂譜的樂團，最後還是會亂成一團喔！",
    flashcards: [
      { id: "f1-12-1", term: "和為貴", definition: "以和諧為最可貴" },
      { id: "f1-12-2", term: "斯為美", definition: "這就是最美妙的地方" },
      { id: "f1-12-3", term: "節之", definition: "節制、規範它" }
    ]
  },
  {
    id: "1-13", world: 1, stage: 13, book: "學而第一", englishBook: "Xue Er I", title: "言行要謹慎", englishTitle: "Prudence in Words",
    originalText: "有子曰：「信近於義，言可復也。恭近於禮，遠恥辱也。因不失其親，亦可宗也。」",
    translation: "有子說：「講信用要符合道義，話才能實踐。恭敬要符合禮法，才能遠離恥辱。所依靠的人是值得親近的，也就值得尊敬了。」",
    storyTitle: "說到做到的超能力",
    storyContent: "小明答應幫小強去偷東西，這雖然是「守信用」，但這是不對的事。\n\n有子說，我們答應別人的事（信），必須是正確的事（義），這樣我們說出的話才能去實現。我們對人有禮貌（恭），也要符合規矩（禮），才不會丟臉。最後，我們要結交值得信任的好朋友，這樣的人才值得我們學習和尊敬喔！",
    flashcards: [
      { id: "f1-13-1", term: "言可復也", definition: "說出的話可以實踐、兌現" },
      { id: "f1-13-2", term: "遠恥辱", definition: "遠離羞辱、不丟臉" },
      { id: "f1-13-3", term: "可宗", definition: "值得尊敬、效法" }
    ]
  },
  {
    id: "1-14", world: 1, stage: 14, book: "學而第一", englishBook: "Xue Er I", title: "君子的生活", englishTitle: "Life of a Gentleman",
    originalText: "子曰：「君子食無求飽，居無求安，敏於事而慎於言，就有道而正焉，可謂好學也已。」",
    translation: "孔子說：「君子飲食不追求飽足，居住不追求安逸，做事勤快敏捷，說話謹慎，向有道德的人請教來修正自己，這樣可以說是好學了。」",
    storyTitle: "好學的小偵探",
    storyContent: "有一個小偵探，他每天都在學習新知識。他吃飯不挑食，只要吃飽就好；住的地方簡簡單單，他也不在意。\n\n他把所有的精力都花在做事上，動作很快，但說話很小心。最重要的是，他常常去找聰明又有品德的老師，請老師幫他看看哪裡做得不對。孔子說，像這樣不追求享受，一心只想進步的人，才是真正「好學」的人喔！",
    flashcards: [
      { id: "f1-14-1", term: "敏於事", definition: "做事勤快敏捷" },
      { id: "f1-14-2", term: "慎於言", definition: "說話謹慎小心" },
      { id: "f1-14-3", term: "就有道", definition: "親近有道德的人" }
    ]
  },
  {
    id: "1-15", world: 1, stage: 15, book: "學而第一", englishBook: "Xue Er I", title: "精益求精", englishTitle: "Strive for Perfection",
    originalText: "子貢曰：「貧而無諂，富而無驕，何如？」子曰：「可也；未若貧而樂，富而好禮者也。」子貢曰：「《詩》云：『如切如磋，如琢如磨』，其斯之謂與？」子曰：「賜也，始可與言《詩》已矣，告諸往而知來者。」",
    translation: "子貢問：「貧窮而不巴結，富有而不驕傲，怎麼樣？」孔子說：「可以了；但不如貧窮而快樂，富有而愛好禮法的人。」子貢說：「《詩經》說：『像切磋骨角，像琢磨玉石』，說的就是這個意思吧？」孔子說：「子貢啊，現在可以跟你談論《詩經》了，告訴你過去的事，你就能推想到未來的事。」",
    storyTitle: "打磨漂亮的寶石",
    storyContent: "子貢問老師：「如果一個人很窮，但他不巴結有錢人；或者一個人很有錢，但他不看不起窮人，這樣好不好？」孔子說：「這已經很好了！但是還有一種更高境界的人：雖然生活辛苦，但心裡依然很快樂；雖然家裡很有錢，但依然對每個人都很有禮貌。」\n\n子貢聽完，突然想到這就像是在雕刻象牙或打磨寶石一樣，要經過不斷地切、磋、琢、磨，才能變得完美。孔子聽了非常高興，稱讚子貢能舉一反三！",
    flashcards: [
      { id: "f1-15-1", term: "無諂", definition: "不巴結、不討好" },
      { id: "f1-15-2", term: "如切如磋", definition: "像雕刻骨角一樣細心" },
      { id: "f1-15-3", term: "如琢如磨", definition: "像打磨玉石一樣精緻" }
    ]
  },
  {
    id: "1-16", world: 1, stage: 16, book: "學而第一", englishBook: "Xue Er I", title: "了解別人", englishTitle: "Understanding Others",
    originalText: "子曰：「不患人之不己知，患不知人也。」",
    translation: "孔子說：「不擔心別人不了解自己，只擔心自己不了解別人。」",
    storyTitle: "神奇的放大鏡",
    storyContent: "小明覺得很難過，因為同學都不知道他其實很會畫畫。\n\n孔子安慰他說：「不要擔心別人不知道你的優點，我們應該把心思花在去發現別人的優點、了解別人的需要上。」當我們學會去觀察和了解別人，我們就會發現每個人都有值得學習的地方，也會交到更多好朋友喔！",
    flashcards: [
      { id: "f1-16-1", term: "不患", definition: "不擔心、不憂慮" },
      { id: "f1-16-2", term: "不己知", definition: "不了解自己" },
      { id: "f1-16-3", term: "不知人", definition: "不了解別人" }
    ]
  }
];
