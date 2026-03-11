import { Lesson } from '../lessons';

export const world12Lessons: Omit<Lesson, 'phoneticOriginalText'>[] = [
  {
    id: "12-1", world: 12, stage: 1, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "克己復禮為仁", englishTitle: "Restraining Oneself",
    originalText: "顏淵問仁。子曰：「克己復禮為仁。一日克己復禮，天下歸仁焉。為仁由己，而由人乎哉？」顏淵曰：「請問其目。」子曰：「非禮勿視，非禮勿聽，非禮勿言，非禮勿動。」",
    translation: "顏淵問什麼是仁。孔子說：「克制自己的私欲，使言語行動回到禮的規範，這就是仁。一旦做到了，天下的人都會稱許你是個仁人。實行仁德全靠自己，難道還靠別人嗎？」顏淵問：「請問具體做法。」孔子說：「不合禮的不看，不合禮的不聽，不合禮的不說，不合禮的不做。」",
    storyTitle: "仁者的四個不",
    storyContent: "孔子教顏回，要做一個善良的人（仁），首先要學會管理好自己。他給了四個超級實用的建議：不看壞東西、不聽壞話、不說髒話、不做壞事。這教我們，品德是從拒絕誘惑、守住規矩開始的。",
    flashcards: [
      { id: "f12-1-1", term: "克己復禮", definition: "克制私欲，使行為符合禮儀規範" },
      { id: "f12-1-2", term: "非禮勿視", definition: "不合乎禮儀規範的事物不去看" }
    ]
  },
  {
    id: "12-2", world: 12, stage: 2, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "己所不欲，勿施於人", englishTitle: "The Golden Rule",
    originalText: "仲弓問仁。子曰：「出門如見大賓，使民如承大祭。己所不欲，勿施於人。在邦無怨，在家無怨。」",
    translation: "仲弓問什麼是仁。孔子說：「出門辦事像接待貴賓一樣莊重，使喚百姓像舉行大祭一樣嚴肅。自己不想要的，不要施加在別人身上。在國家做事不招人怨恨，在家族做事也不招人怨恨。」",
    storyTitle: "同理心小超人",
    storyContent: "孔子說，如果你不喜歡被別人推擠，那就不要推擠別人。這就是有名的「黃金法則」：己所不欲，勿施於人。這教我們要學會換位思考，尊重別人的感受。",
    flashcards: [
      { id: "f12-2-1", term: "己所不欲", definition: "自己不想要、不喜歡的事物" },
      { id: "f12-2-2", term: "勿施於人", definition: "不要強加在別人身上" }
    ]
  },
  {
    id: "12-3", world: 12, stage: 3, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "仁者其言也訒", englishTitle: "Cautious in Speech",
    originalText: "司馬牛問仁。子曰：「仁者其言也訒。」曰：「其言也訒，斯謂之仁已乎？」子曰：「為之難，言之得無訒乎？」",
    translation: "司馬牛問什麼是仁。孔子說：「仁人說話是慎重的。」司馬牛問：「說話慎重，這就可以說是仁了嗎？」孔子說：「做起來那麼困難，說起來能不慎重嗎？」",
    storyTitle: "說話前先想想",
    storyContent: "孔子覺得，要做一個好人很難，所以我們說話不能太隨便。如果你隨便答應別人卻做不到，那就不是仁了。這教我們，說話要負責任，不要只會吹牛。",
    flashcards: [
      { id: "f12-3-1", term: "訒", definition: "說話遲鈍、慎重的樣子（音同認）" },
      { id: "f12-3-2", term: "得無", definition: "能不、難道不" }
    ]
  },
  {
    id: "12-4", world: 12, stage: 4, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "君子不憂不懼", englishTitle: "No Anxiety or Fear",
    originalText: "司馬牛問君子。子曰：「君子不憂不懼。」曰：「不憂不懼，斯謂之君子已乎？」子曰：「內省不疚，夫何憂何懼？」",
    translation: "司馬牛問什麼是君子。孔子說：「君子不憂慮，不恐懼。」司馬牛問：「不憂慮不恐懼，這就可以說是君子了嗎？」孔子說：「自我反省而沒有愧疚，還有什麼好憂慮和恐懼的呢？」",
    storyTitle: "問心無愧",
    storyContent: "孔子說，如果你每天都做對的事，沒有做任何對不起別人的壞事，那你心裡就會非常踏實。這種「問心無愧」的感覺，能讓你變得非常勇敢，什麼都不怕！",
    flashcards: [
      { id: "f12-4-1", term: "內省不疚", definition: "自我反省而沒有感到愧疚（疚音同舊）" },
      { id: "f12-4-2", term: "夫", definition: "發語詞，這裡指「那」（音同扶）" }
    ]
  },
  {
    id: "12-5", world: 12, stage: 5, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "死生有命", englishTitle: "Life and Death",
    originalText: "司馬牛憂曰：「人皆有兄弟，我獨亡。」子夏曰：「商聞之矣：死生有命，富貴在天。君子敬而無失，與人恭而有禮，四海之內，皆兄弟也。君子何患乎無兄弟也？」",
    translation: "司馬牛憂愁地說：「別人家都有兄弟，唯獨我沒有。」子夏說：「我聽說過：死生由命運決定，富貴由上天安排。君子只要做事認真沒有過失，對人恭敬有禮，那麼天下的人都是你的兄弟。君子何必擔心沒有兄弟呢？」",
    storyTitle: "全世界都是好朋友",
    storyContent: "子夏安慰司馬牛：雖然你沒有親兄弟，但只要你是一個有禮貌、負責任的好人，大家都會喜歡你，把你當成好兄弟。這教我們，只要真心待人，你永遠不會孤單。",
    flashcards: [
      { id: "f12-5-1", term: "四海之內皆兄弟", definition: "只要待人真誠，天下的人都可以成為好朋友" },
      { id: "f12-5-2", term: "敬而無失", definition: "做事認真、謹慎而沒有過失" }
    ]
  },
  {
    id: "12-6", world: 12, stage: 6, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "浸潤之譖", englishTitle: "Slander and Complaints",
    originalText: "子張問明。子曰：「浸潤之譖，膚受之愬，不行焉，可謂明也已矣。浸潤之譖，膚受之愬，不行焉，可謂遠也已矣。」",
    translation: "子張問什麼是明察。孔子說：「像水滲透一樣的讒言，像切膚之痛一樣的投訴，在你這裡都行不通，那就可以說是明察了。能做到這樣，也可以說是眼光遠大了。」",
    storyTitle: "聰明的判斷力",
    storyContent: "孔子提醒我們：有些人會在你耳邊慢慢說別人的壞話（讒言），或者裝得很可憐來告狀。如果你能冷靜思考，不隨便相信這些話，你就是一個聰明、有遠見的人。這教我們不要聽信謠言。",
    flashcards: [
      { id: "f12-6-1", term: "浸潤之譖", definition: "像水滲透一樣慢慢影響人的壞話（譖音同怎）" },
      { id: "f12-6-2", term: "膚受之愬", definition: "像切膚之痛一樣急迫的投訴（愬音同訴）" }
    ]
  },
  {
    id: "12-7", world: 12, stage: 7, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "足食，足兵", englishTitle: "Food, Weapons, and Trust",
    originalText: "子貢問政。子曰：「足食，足兵，民信之矣。」子貢曰：「必不得已而去，於斯三者何先？」曰：「去兵。」子貢曰：「必不得已而去，於斯二者何先？」曰：「去食。自古皆有死，民無信不立。」",
    translation: "子貢問政。孔子說：「糧食充足，軍備充足，百姓信任政府。」子貢問：「如果非去掉一項不可，先去掉哪項？」孔子說：「去掉軍備。」子貢問：「如果再去掉一項呢？」孔子說：「去掉糧食。自古以來人都會死，但如果百姓不信任政府，國家就站不住腳了。」",
    storyTitle: "信用是國家的靈魂",
    storyContent: "孔子覺得，一個國家最重要的不是武器或錢財，而是「信用」。如果大家都不相信政府、不相信彼此，那國家就會垮掉。這教我們，信用是做人、做事最根本的基石。",
    flashcards: [
      { id: "f12-7-1", term: "民無信不立", definition: "如果失去百姓的信任，國家就無法生存" },
      { id: "f12-7-2", term: "足兵", definition: "軍隊與武器充足" }
    ]
  },
  {
    id: "12-8", world: 12, stage: 8, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "文猶質也", englishTitle: "Refinement and Substance",
    originalText: "棘子成曰：「君子質而已矣，何以文為？」子貢曰：「惜乎！夫子之說君子也。駟不及舌。文猶質也，質猶文也。虎豹之鞟猶犬羊之鞟。」",
    translation: "棘子成說：「君子只要品質好就行了，何必要那些外表的文飾呢？」子貢說：「可惜啊！您這樣談論君子。話一出口，四匹馬拉的車也追不回。文飾和品質是一樣重要的。如果把虎豹的皮毛拔光，那剩下的皮革跟狗羊的皮革也沒什麼兩樣了。」",
    storyTitle: "內在與外在都要好",
    storyContent: "子貢反駁別人：雖然內心善良（質）很重要，但外表的禮貌和修養（文）也同樣重要。就像老虎之所以威風，是因為牠有漂亮的斑紋。這教我們，要做一個內外兼修的人。",
    flashcards: [
      { id: "f12-8-1", term: "駟不及舌", definition: "話一說出口，連快馬也追不回來（形容說話要慎重）" },
      { id: "f12-8-2", term: "鞟", definition: "去毛的皮革（音同括）" }
    ]
  },
  {
    id: "12-9", world: 12, stage: 9, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "盍徹乎", englishTitle: "Why Not Use the Tithe?",
    originalText: "哀公問於有若曰：「年饑，用不足，如之何？」有若對曰：「盍徹乎？」曰：「二，吾猶不足，如之何其徹也？」對曰：「百姓足，君孰與不足？百姓不足，君孰與足？」",
    translation: "魯哀公問有若：「年成不好，國庫不夠用，怎麼辦？」有若說：「為什麼不實行十分之一的稅率呢？」哀公說：「現在抽十分之二我都不夠用了，怎麼能實行十分之一呢？」有若說：「如果百姓富足，您怎麼會不夠用？如果百姓貧窮，您又怎麼能獨自富足呢？」",
    storyTitle: "藏富於民",
    storyContent: "有若教國王一個道理：如果百姓過得好，國家自然會強大。如果國王一直收很重的稅，讓大家變窮，那國家最後也會跟著變窮。這教我們，要懂得分享和照顧別人的利益。",
    flashcards: [
      { id: "f12-9-1", term: "盍徹乎", definition: "為什麼不實行十分之一的稅法呢？（盍：何不）" },
      { id: "f12-9-2", term: "孰與", definition: "跟誰、怎麼會" }
    ]
  },
  {
    id: "12-10", world: 12, stage: 10, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "崇德辨惑", englishTitle: "Exalting Virtue",
    originalText: "子張問崇德、辨惑。子曰：「主忠信，徙義，崇德也。愛之欲其生，惡之欲其死。既欲其生，又欲其死，是惑也。」",
    translation: "子張問怎麼提高品德、辨別迷惑。孔子說：「以忠誠守信為主，看到正義就去做，這就是提高品德。愛一個人就希望他活得好，討厭一個人就恨不得他死掉。既要他生又要他死，這就是迷惑。」",
    storyTitle: "冷靜的情緒管理",
    storyContent: "孔子說，提高品德的方法就是「誠實」和「勇敢做對的事」。而且他提醒我們：不要被情緒沖昏頭，一下子愛得要命，一下子恨得要死。這教我們要保持理智，不要感情用事。",
    flashcards: [
      { id: "f12-10-1", term: "崇德", definition: "提高、崇尚品德" },
      { id: "f12-10-2", term: "徙義", definition: "向正義靠攏、實踐正義（徙音同喜）" }
    ]
  },
  {
    id: "12-11", world: 12, stage: 11, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "君君，臣臣", englishTitle: "Rulers and Subjects",
    originalText: "齊景公問政於孔子。孔子對曰：「君君，臣臣，父父，子子。」公曰：「善哉！信如君不君，臣不臣，父不父，子不子，雖有粟，吾得而食諸？」",
    translation: "齊景公問政。孔子說：「君主要像君主，臣子要像臣子，父親要像父親，兒子要像兒子。」景公說：「講得太好了！如果大家都不守本分，就算糧食再多，我能吃得安穩嗎？」",
    storyTitle: "做好自己的角色",
    storyContent: "孔子說，社會要和諧，每個人都要把自己的角色演好。學生要像學生，老師要像老師。如果大家都不負責任，世界就會亂成一團。這教我們要盡到自己的本分。",
    flashcards: [
      { id: "f12-11-1", term: "君君臣臣", definition: "每個人都應盡到自己職位或角色的責任" },
      { id: "f12-11-2", term: "粟", definition: "糧食、小米（音同速）" }
    ]
  },
  {
    id: "12-12", world: 12, stage: 12, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "片言可以折獄", englishTitle: "Settling Disputes",
    originalText: "子曰：「片言可以折獄者，其由也與！」子路無宿諾。」",
    translation: "孔子說：「只聽單方面的話就能判斷案件的，大概只有仲由（子路）吧！」子路從來不把答應別人的事拖到第二天。」",
    storyTitle: "說到做到的子路",
    storyContent: "子路是一個非常有信用的人。他答應別人的事，一定會立刻去做，絕對不拖延。所以大家都非常信任他。這教我們，信用是靠「行動」累積出來的，不要開空頭支票。",
    flashcards: [
      { id: "f12-12-1", term: "折獄", definition: "判斷案件、斷案" },
      { id: "f12-12-2", term: "無宿諾", definition: "不把答應的事留到隔夜（指立刻執行）" }
    ]
  },
  {
    id: "12-13", world: 12, stage: 13, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "聽訟，吾猶人也", englishTitle: "Hearing Lawsuits",
    originalText: "子曰：「聽訟，吾猶人也，必也使無訟乎！」",
    translation: "孔子說：「審理訴訟，我跟別人差不多。但我最希望的是：讓世界上根本沒有訴訟發生！」",
    storyTitle: "沒有爭吵的世界",
    storyContent: "孔子覺得，打官司雖然能分出誰對誰錯，但最好的方法是教大家學會互相禮讓、互相關愛。如果大家都不吵架，那就不需要法官了。這教我們，和諧比爭贏更重要。",
    flashcards: [
      { id: "f12-13-1", term: "聽訟", definition: "審理官司、訴訟" },
      { id: "f12-13-2", term: "無訟", definition: "沒有爭端、沒有官司" }
    ]
  },
  {
    id: "12-14", world: 12, stage: 14, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "居之無倦", englishTitle: "Serving Without Weariness",
    originalText: "子張問政。子曰：「居之無倦，行之以忠。」",
    translation: "子張問政。孔子說：「在位時不懈怠，執行任務時要忠誠。」",
    storyTitle: "認真工作的秘訣",
    storyContent: "孔子教子路怎麼當一個好官：第一，不要偷懶，要保持熱情；第二，對工作要真心誠意。這教我們，不管做什麼事，只要不懈怠、夠忠誠，就一定能做好。",
    flashcards: [
      { id: "f12-14-1", term: "無倦", definition: "不倦怠、不偷懶、不厭倦" },
      { id: "f12-14-2", term: "行之以忠", definition: "用忠誠、負責的態度去執行" }
    ]
  },
  {
    id: "12-15", world: 12, stage: 15, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "博學於文", englishTitle: "Extensive Learning",
    originalText: "子曰：「博學於文，約之以禮，亦可以弗畔矣夫！」",
    translation: "孔子說：「廣泛地學習文化知識，再用禮儀來約束自己，也就可以不背離正道了。」",
    storyTitle: "學習的兩大支柱",
    storyContent: "孔子說，變強大的方法有兩個：一是「多讀書」，增加知識；二是「守規矩」，不亂來。這教我們，聰明的人如果不守規矩會變壞，守規矩的人如果不讀書會變笨，兩者都要兼顧喔！",
    flashcards: [
      { id: "f12-15-1", term: "博學於文", definition: "廣泛地學習各種文化知識" },
      { id: "f12-15-2", term: "弗畔", definition: "不背離、不違反（正道）（音同服判）" }
    ]
  },
  {
    id: "12-16", world: 12, stage: 16, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "君子成人之美", englishTitle: "Helping Others Succeed",
    originalText: "子曰：「君子成人之美，不成人之惡。小人反是。」",
    translation: "孔子說：「君子成全別人的好事，不促成別人的壞事。小人則相反。」",
    storyTitle: "幫別人一把",
    storyContent: "孔子說，如果你看到同學想做好事，你應該去幫他；如果你看到他想做壞事，你應該阻止他。這就是「成人之美」。這教我們要有一顆善良的心，多給別人正能量。",
    flashcards: [
      { id: "f12-16-1", term: "成人之美", definition: "成全別人的好事、美德" },
      { id: "f12-16-2", term: "反是", definition: "與此相反" }
    ]
  },
  {
    id: "12-17", world: 12, stage: 17, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "政者，正也", englishTitle: "Governance is Rectitude",
    originalText: "季康子問政於孔子。孔子對曰：「政者，正也。子帥以正，孰敢不正？」",
    translation: "季康子問政。孔子說：「政就是正的意思。如果您帶頭走正路，誰敢不走正路呢？」",
    storyTitle: "帶頭做榜樣",
    storyContent: "孔子說，領導者就像領頭羊。如果班長自己不遲到，同學就不敢遲到；如果國王不貪錢，百姓就不會偷竊。這教我們，「身教」比「言教」更有力量。",
    flashcards: [
      { id: "f12-17-1", term: "政者正也", definition: "政治的本質就是公正、端正" },
      { id: "f12-17-2", term: "帥以正", definition: "帶頭示範正確的行為" }
    ]
  },
  {
    id: "12-18", world: 12, stage: 18, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "子為善，而民善矣", englishTitle: "Leading to Goodness",
    originalText: "季康子患盜，問於孔子。孔子對曰：「苟子之不欲，雖賞之不竊。」",
    translation: "季康子擔心小偷太多，問孔子。孔子說：「如果您自己不貪心，就算獎勵他們去偷，他們也不會去偷的。」",
    storyTitle: "貪心的源頭",
    storyContent: "孔子說，如果上面的官員都很貪心、愛錢，那百姓就會跟著學壞。所以要解決小偷問題，官員要先變得清廉。這教我們，環境的風氣是由大家共同建立的，尤其是領袖。",
    flashcards: [
      { id: "f12-18-1", term: "患盜", definition: "擔心、憂慮小偷太多" },
      { id: "f12-18-2", term: "不欲", definition: "不貪心、沒有過分的欲望" }
    ]
  },
  {
    id: "12-19", world: 12, stage: 19, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "君子之德風", englishTitle: "Virtue is Like the Wind",
    originalText: "季康子問政於孔子曰：「如殺無道，以就有道，何如？」孔子對曰：「子為政，焉用殺？子欲善，而民善矣。君子之德風，小人之德草。草上之風，必偃。」",
    translation: "季康子問：「如果殺掉壞人來親近好人，怎麼樣？」孔子說：「您治理國家，哪裡用得著殺人？只要您想做好事，百姓就會跟著做好事。君子的品德像風，小人的品德像草。風吹在草上，草一定會順著風倒。」",
    storyTitle: "風與草的對話",
    storyContent: "孔子用了一個很美的比喻：好人的影響力就像風，大家就像草。風往哪裡吹，草就往哪裡倒。所以，只要我們堅持做對的事，身邊的人也會慢慢被我們影響喔！",
    flashcards: [
      { id: "f12-19-1", term: "焉用殺", definition: "哪裡用得著殺人呢？" },
      { id: "f12-19-2", term: "必偃", definition: "一定會倒下、順從（音同眼）" }
    ]
  },
  {
    id: "12-20", world: 12, stage: 20, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "察言而觀色", englishTitle: "Observing Words and Expressions",
    originalText: "子張問：「士何如斯可謂之達矣？」子曰：「何哉，爾所謂達者？」子張對曰：「在邦必聞，在家必聞。」子曰：「是聞也，非達也。夫達也者，質直而好義，察言而觀色，慮以下人。在邦必達，在家必達。夫聞也者，色取仁而行違，居之不疑。在邦必聞，在家必聞。」",
    translation: "子張問：「讀書人要怎樣才算發達？」孔子問：「你說的發達是什麼意思？」子張說：「在國家有名聲，在家族有名聲。」孔子說：「那是出名，不是發達。真正的發達，是品質正直且愛好正義，善於觀察別人的言語神色，對人謙虛。而出名的人，只是表面裝得仁慈，行為卻相反，還自以為是。這種人雖然有名，卻不是真正的發達。」",
    storyTitle: "出名不等於成功",
    storyContent: "孔子教子張：不要只追求「有名」（聞），要追求「實力」和「品德」（達）。有些人雖然很有名，但其實是假裝出來的。真正的成功是內心正直、懂得體諒別人。這教我們不要愛慕虛榮。",
    flashcards: [
      { id: "f12-20-1", term: "察言觀色", definition: "觀察別人的言語和神色（指體察民情或體諒他人）" },
      { id: "f12-20-2", term: "下人", definition: "對人謙虛、不擺架子" }
    ]
  },
  {
    id: "12-21", world: 12, stage: 21, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "樊遲從遊於舞雩之下", englishTitle: "Walking Under the Rain Altar",
    originalText: "樊遲從遊於舞雩之下，曰：「敢問崇德、修慝、辨惑。」子曰：「大哉問！先事後得，非崇德與？攻其惡，無攻人之惡，非修慝與？一朝之忿，忘其身，以及其親，非惑與？」",
    translation: "樊遲陪孔子在祭壇下散步，問怎麼提高品德、改正錯誤、辨別迷惑。孔子說：「問得好！先付出努力再考慮收穫，這不是提高品德嗎？多反省自己的錯，少批評別人的錯，這不是改正錯誤嗎？因為一時衝動就忘記危險，甚至連累父母，這不是迷惑嗎？」",
    storyTitle: "散步時的智慧",
    storyContent: "孔子在散步時教了樊遲三個錦囊：\n1. 努力工作，不急著要獎勵。\n2. 多看自己的缺點，少看別人的缺點。\n3. 不要衝動，衝動會害了自己和家人。這教我們要腳踏實地、自我反省和冷靜思考。",
    flashcards: [
      { id: "f12-21-1", term: "修慝", definition: "改正邪惡的念頭、修養品德（慝音同特）" },
      { id: "f12-21-2", term: "一朝之忿", definition: "一時的憤怒、衝動" }
    ]
  },
  {
    id: "12-22", world: 12, stage: 22, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "樊遲問仁", englishTitle: "Fan Chi Asks About Benevolence",
    originalText: "樊遲問仁。子曰：「愛人。」問知。子曰：「知人。」樊遲未達。子曰：「舉直錯諸枉，能使枉者直。」",
    translation: "樊遲問什麼是仁。孔子說：「愛人。」問什麼是智。孔子說：「了解人。」樊遲不明白。孔子說：「選拔正直的人，放在不正直的人上面，就能使不正直的人也變得正直。」",
    storyTitle: "愛與智慧",
    storyContent: "孔子說，最偉大的品德就是「愛人」，最聰明的智慧就是「看清人」。如果你能讓好人去帶領壞人，那壞人也會慢慢變好。這教我們，好的領導和榜樣能改變整個世界。",
    flashcards: [
      { id: "f12-22-1", term: "知人", definition: "了解人的品德和能力（知音同智）" },
      { id: "f12-22-2", term: "舉直錯諸枉", definition: "選拔正直的人，安置在邪曲的人之上（錯通措，放置）" }
    ]
  },
  {
    id: "12-23", world: 12, stage: 23, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "忠告而善道之", englishTitle: "Advising Friends",
    originalText: "子貢問友。子曰：「忠告而善道之，不可則止，毋自辱焉。」",
    translation: "子貢問怎麼對待朋友。孔子說：「忠心地勸告並耐心地引導他，如果他不聽，就停止，不要自取其辱。」",
    storyTitle: "交友的界線",
    storyContent: "孔子說，當朋友做錯事時，我們要真心提醒他。但如果他堅持不聽，我們也不要一直唸，否則會讓朋友變敵人。這教我們，友誼要建立在互相尊重的基礎上。",
    flashcards: [
      { id: "f12-23-1", term: "善道之", definition: "耐心地引導他（道通導）" },
      { id: "f12-23-2", term: "毋自辱", definition: "不要自取其辱" }
    ]
  },
  {
    id: "12-24", world: 12, stage: 24, book: "顏淵第十二", englishBook: "Yan Yuan XII", title: "以文會友", englishTitle: "Meeting Friends Through Culture",
    originalText: "曾子曰：「君子以文會友，以友輔仁。」",
    translation: "曾子說：「君子透過文化知識來結交朋友，透過朋友的幫助來增進仁德。」",
    storyTitle: "一起變強的好朋友",
    storyContent: "曾子覺得，最好的朋友是那種可以一起讀書、一起討論怎麼變更好的人。大家互相鼓勵、互相學習，品德就會越來越進步。這教我們，要結交志同道合的好朋友。",
    flashcards: [
      { id: "f12-24-1", term: "以文會友", definition: "透過文化、學問來結交朋友" },
      { id: "f12-24-2", term: "以友輔仁", definition: "透過朋友的幫助來提升自己的品德" }
    ]
  }
];
