import { Lesson } from '../lessons';

export const world10Lessons: Omit<Lesson, 'phoneticOriginalText'>[] = [
  {
    id: "10-1", world: 10, stage: 1, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "孔子的生活禮儀", englishTitle: "Confucius' Daily Etiquette",
    originalText: "廄焚。子退朝，曰：「傷人乎？」不問馬。",
    translation: "馬廄失火了。孔子退朝回來，問：「傷到人了嗎？」沒有問馬的情況。",
    storyTitle: "愛人的心",
    storyContent: "在古代，馬是非常昂貴的財產。有一天孔子家的馬房失火了，孔子回家後第一句話就是關心人的安全，而不是關心昂貴的馬。這展現了孔子「仁」的精神：在他心裡，人的生命永遠比財產更重要。",
    flashcards: [
      { id: "f10-1-1", term: "廄", definition: "養馬的房舍" },
      { id: "f10-1-2", term: "不問馬", definition: "不先詢問馬的情況（強調愛人）" }
    ]
  },
  {
    id: "10-2", world: 10, stage: 2, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "孔子於鄉黨", englishTitle: "Confucius in His Village",
    originalText: "孔子於鄉黨，恂恂如也，似不能言者。其在宗廟朝廷，便便言，唯謹爾。",
    translation: "孔子在鄉里中，表現得溫和恭順，好像不擅長說話的樣子。但在宗廟和朝廷中，他卻口齒伶俐、辯才無礙，只是說話非常謹慎罷了。",
    storyTitle: "看場合說話",
    storyContent: "孔子非常懂得禮貌。在長輩和鄰居面前，他很謙虛、話不多；但在正式的辦公場合，他會清楚地表達意見，但依然保持禮貌。這教我們，在不同的場合要展現出適當的態度。",
    flashcards: [
      { id: "f10-2-1", term: "恂恂如", definition: "溫和恭順、謙虛的樣子" },
      { id: "f10-2-2", term: "便便言", definition: "口齒伶俐、明白流暢地說話" }
    ]
  },
  {
    id: "10-3", world: 10, stage: 3, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "朝，與下大夫言", englishTitle: "At Court",
    originalText: "朝，與下大夫言，侃侃如也；與上大夫言，誾誾如也。君在，踧踖如也，與與如也。",
    translation: "上朝時，跟下大夫說話，神態從容不迫；跟上大夫說話，神態正直而溫和。君主在場時，表現得恭敬而不安，但儀態依然和諧得體。",
    storyTitle: "優雅的社交",
    storyContent: "孔子在朝廷裡跟不同等級的官員說話，都有不同的禮節。他對每個人都很尊重，但也會根據對方的身份調整自己的態度。這不是巴結，而是一種對社會秩序的尊重。",
    flashcards: [
      { id: "f10-3-1", term: "侃侃如", definition: "從容不迫、理直氣壯的樣子" },
      { id: "f10-3-2", term: "誾誾如", definition: "正直而溫和的樣子（音同銀）" },
      { id: "f10-3-3", term: "踧踖如", definition: "恭敬不安、謹慎的樣子（音同促及）" }
    ]
  },
  {
    id: "10-4", world: 10, stage: 4, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "君召使擯", englishTitle: "Summoned by the Ruler",
    originalText: "君召使擯，色勃如也，足躩如也。揖所與立，左右手。衣前後，襜如也。趨進，翼如也。賓退，必復命曰：「賓不顧矣。」",
    translation: "君主召他去接待賓客，他神色莊重，腳步輕快。向左右兩邊的人作揖，衣服前後擺動，整齊而不亂。快步前進時，像鳥兒展開翅膀一樣優雅。客人走後，一定回報說：「客人已經不回頭看了（表示接待圓滿）。」",
    storyTitle: "專業的接待員",
    storyContent: "孔子接待外賓時非常專業。他的每一個動作、每一件衣服的擺動都經過練習，看起來既莊重又優雅。這展現了他對工作的認真和對客人的最高敬意。",
    flashcards: [
      { id: "f10-4-1", term: "擯", definition: "接待賓客（音同賓）" },
      { id: "f10-4-2", term: "襜如", definition: "衣服整齊擺動的樣子（音同沾）" },
      { id: "f10-4-3", term: "翼如", definition: "像鳥張開翅膀一樣優雅、輕快" }
    ]
  },
  {
    id: "10-5", world: 10, stage: 5, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "執圭", englishTitle: "Holding the Jade Scepter",
    originalText: "執圭，鞠躬如也，如不勝。上如揖，下如授。戰色而栗，足蹜蹜，如有循。享禮，有容色。私覿，愉愉如也。",
    translation: "拿著玉圭（出使的憑證）時，彎著腰，好像拿不動一樣。舉起時像在作揖，放下時像在遞東西。神色緊張而戰慄，腳步細碎，好像沿著線走。在正式獻禮時，神色和藹。私下會見時，輕鬆愉快。」",
    storyTitle: "出差的禮儀",
    storyContent: "孔子代表國家出差時，拿著神聖的玉圭，表現得非常謹慎、小心翼翼。但在非正式的聊天場合，他也會變得很親切、很放鬆。這教我們，要分清楚「正式」與「非正式」的界線。",
    flashcards: [
      { id: "f10-5-1", term: "圭", definition: "古代帝王或諸侯在舉行典禮時拿的長條形玉器" },
      { id: "f10-5-2", term: "蹜蹜", definition: "小步快走的樣子（音同縮）" },
      { id: "f10-5-3", term: "私覿", definition: "私下會見（音同迪）" }
    ]
  },
  {
    id: "10-6", world: 10, stage: 6, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "君子不以紺緅飾", englishTitle: "Clothing Colors",
    originalText: "君子不以紺緅飾，紅紫不以為褻服。當暑，袗絺綌，必表而出之。緇衣，羔裘；素衣，麑裘；黃衣，狐裘。褻裘長，短右袂。必有寢衣，長一身有半。狐貉之厚以居。去喪，無所不佩。非帷裳，必殺之。羔裘玄冠不以弔。吉月，必朝服而朝。",
    translation: "君子不用深青透紅或紫紅色的布鑲邊，紅紫色不用來做便服。夏天穿粗麻或細麻的單衣，一定要套在外面。黑衣服配羊皮袍，白衣服配鹿皮袍，黃衣服配狐皮袍。家常的皮袍做得長一些，右袖短一些。睡衣長度是身高的一倍半。用狐貉的厚毛皮做坐墊。喪期過後，可以佩戴各種飾物。不是正式的禮服，一定要裁剪整齊。不穿黑羊皮袍、不戴黑帽子去弔喪。每月初一，一定穿上朝服去朝見。」",
    storyTitle: "孔子的穿搭指南",
    storyContent: "孔子對穿衣服很有研究！他覺得衣服的顏色、材質和場合都要搭配好。比如弔喪不能穿得太漂亮，初一要穿得最正式。這不是愛漂亮，而是一種對生活的講究和對場合的尊重。",
    flashcards: [
      { id: "f10-6-1", term: "褻服", definition: "在家穿的便服（音同謝）" },
      { id: "f10-6-2", term: "絺綌", definition: "細麻與粗麻布（音同吃細）" },
      { id: "f10-6-3", term: "弔", definition: "弔喪、祭奠死者" }
    ]
  },
  {
    id: "10-7", world: 10, stage: 7, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "食不厭精", englishTitle: "Food Etiquette",
    originalText: "食不厭精，膾不厭細。食饐而餲，魚餒而肉敗，不食。色惡，不食。臭惡，不食。失飪，不食。不時，不食。割不正，不食。不得其醬，不食。肉雖多，不使勝食氣。唯酒無量，不及亂。沽酒市脯，不食。不撤薑食，不多食。",
    translation: "糧食不嫌精緻，肉不嫌切得細。糧食發霉變味，魚肉腐爛，不吃。顏色不好看，不吃。氣味不好，不吃。烹調得不好，不吃。不到吃飯時間，不吃。肉切得不方正，不吃。調味醬不對，不吃。肉雖然多，但不超過主食。只有酒沒有限量，但絕不喝醉。外面買來的酒和熟肉，不吃。每餐不撤去生薑，但也不多吃。」",
    storyTitle: "健康小管家",
    storyContent: "孔子對飲食非常挑剔，但他不是為了享受，而是為了「健康」。他不吃不新鮮、沒煮好、或來源不明的食物。而且他喝酒很有節制，絕對不會喝醉。這教我們要愛護自己的身體，吃得健康。",
    flashcards: [
      { id: "f10-7-1", term: "食不厭精", definition: "糧食不嫌精緻（厭：滿足、嫌）" },
      { id: "f10-7-2", term: "魚餒而肉敗", definition: "魚肉腐爛變質（餒音同內）" },
      { id: "f10-7-3", term: "不及亂", definition: "不喝到醉醺醺、神志混亂的程度" }
    ]
  },
  {
    id: "10-8", world: 10, stage: 8, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "食不語，寢不言", englishTitle: "Silence at Meals and Bed",
    originalText: "食不語，寢不言。」",
    translation: "吃飯時不說話，睡覺時不說話。」",
    storyTitle: "安靜的力量",
    storyContent: "孔子認為，吃飯要專心品嚐食物，睡覺要專心休息，所以這兩個時間都不應該聊天。這教我們要專注於當下，讓身體得到最好的照顧。",
    flashcards: [
      { id: "f10-8-1", term: "食不語", definition: "吃飯時不說話（專心進食）" },
      { id: "f10-8-2", term: "寢不言", definition: "睡覺時不說話（安靜休息）" }
    ]
  },
  {
    id: "10-9", world: 10, stage: 9, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "雖疏食菜羹", englishTitle: "Gratitude Before Meals",
    originalText: "雖疏食菜羹，瓜祭，必齊如也。」",
    translation: "即使是粗米飯、蔬菜湯，吃飯前也一定要取出一些來祭祀，而且表情嚴肅莊重。」",
    storyTitle: "感恩的心",
    storyContent: "孔子就算吃最簡單的飯菜，也會在動筷子前先祭祀，感謝大自然和祖先的賜予。這教我們，不管生活富裕還是貧窮，都要有一顆感恩的心。",
    flashcards: [
      { id: "f10-9-1", term: "疏食", definition: "粗糙的飯食" },
      { id: "f10-9-2", term: "齊如", definition: "莊重、嚴肅的樣子（齊通齋）" }
    ]
  },
  {
    id: "10-10", world: 10, stage: 10, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "席不正，不坐", englishTitle: "Sitting Properly",
    originalText: "席不正，不坐。」",
    translation: "坐席擺得不端正，不坐。」",
    storyTitle: "坐得正，行得端",
    storyContent: "孔子對生活細節很要求。如果坐墊歪了，他會先把它擺正才坐下。這代表了一種「正」的態度：從小地方開始要求自己，心裡才會跟著端正。",
    flashcards: [
      { id: "f10-10-1", term: "席", definition: "古代鋪在地上坐的墊子" },
      { id: "f10-10-2", term: "不正不坐", definition: "擺得不端正就不坐（強調規矩）" }
    ]
  },
  {
    id: "10-11", world: 10, stage: 11, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "鄉人飲酒", englishTitle: "Drinking in the Village",
    originalText: "鄉人飲酒，杖者出，斯出矣。鄉人儺，朝服而立於阼階。」",
    translation: "跟鄉親們一起喝酒，要等長輩們先離開，自己才離開。鄉里舉行驅邪儀式時，他會穿著朝服莊重地站在東邊的台階上。」",
    storyTitle: "禮讓長輩",
    storyContent: "孔子非常尊敬長輩。在聚會中，他一定會讓老人家先走，自己才走。而且對於地方上的傳統活動，他也會穿上正式衣服參加，表示對大家和傳統的尊重。",
    flashcards: [
      { id: "f10-11-1", term: "杖者", definition: "拄著拐杖的老人、長輩" },
      { id: "f10-11-2", term: "儺", definition: "古代驅除疫鬼的儀式（音同挪）" },
      { id: "f10-11-3", term: "阼階", definition: "東邊的台階，主人站立的地方（音同做）" }
    ]
  },
  {
    id: "10-12", world: 10, stage: 12, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "問人於他邦", englishTitle: "Sending Greetings",
    originalText: "問人於他邦，再拜而送之。」",
    translation: "託人向在外國的朋友問候，要向受託者拜兩次送行。」",
    storyTitle: "真誠的託付",
    storyContent: "孔子請人幫忙帶信或問候時，會非常客氣地向那個人敬禮。因為他覺得麻煩別人是一件大事，必須展現出最高的誠意。這教我們，拜託別人幫忙時要有禮貌。",
    flashcards: [
      { id: "f10-12-1", term: "他邦", definition: "別的國家、外國" },
      { id: "f10-12-2", term: "再拜", definition: "拜兩次（表示極其敬重）" }
    ]
  },
  {
    id: "10-13", world: 10, stage: 13, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "康子饋藥", englishTitle: "Medicine from Kang Zi",
    originalText: "康子饋藥，拜而受之。曰：「丘未達，不敢嘗。」",
    translation: "季康子送來藥品，孔子拜謝後接受了。但他說：「我還不了解這藥的藥性，不敢隨便嘗試。」",
    storyTitle: "謹慎對待藥物",
    storyContent: "雖然是高官送的禮物，孔子很有禮貌地收下，但他也非常理智：不知道是什麼藥，絕對不亂吃。這教我們，對健康要負責任，不能因為是別人送的就隨便嘗試。",
    flashcards: [
      { id: "f10-13-1", term: "饋", definition: "贈送（音同愧）" },
      { id: "f10-13-2", term: "未達", definition: "不了解、不明白" }
    ]
  },
  {
    id: "10-14", world: 10, stage: 14, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "入公門，鞠躬如也", englishTitle: "Entering the Palace Gate",
    originalText: "入公門，鞠躬如也，如不容。立不中門，行不履閾。過位，色勃如也，足躩如也，其言似不足者。攝齊升堂，鞠躬如也，屏氣似不息者。出，降一等，逞顏色，怡怡如也。沒階，趨進，翼如也。復其位，踧踖如也。」",
    translation: "進入宮門時，彎著腰，好像門太小進不去一樣。站立時不站在門中間，走路時不踩門檻。經過國君的座位，神色莊重，腳步輕快，說話聲音低微。提著衣服下擺上堂，彎著腰，屏住呼吸好像沒在喘氣。出來時，下了一級台階，神色放鬆，顯得輕鬆愉快。走完台階，快步前進，像鳥兒展翅。回到位置，依然恭敬謹慎。」",
    storyTitle: "宮廷裡的優雅舞步",
    storyContent: "孔子進宮辦公時，每一個動作都像在跳舞一樣精準。他非常尊敬這個神聖的地方，所以會屏住呼吸、小步快走。這展現了他對國家和制度的最高敬畏。",
    flashcards: [
      { id: "f10-14-1", term: "履閾", definition: "踩門檻（閾音同玉）" },
      { id: "f10-14-2", term: "攝齊", definition: "提起衣服的下擺（齊音同資）" },
      { id: "f10-14-3", term: "怡怡如", definition: "輕鬆愉快的樣子" }
    ]
  },
  {
    id: "10-15", world: 10, stage: 15, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "朋友死，無所歸", englishTitle: "A Friend's Death",
    originalText: "朋友死，無所歸，曰：「於我殯。」朋友之饋，雖車馬，非祭肉，不拜。」",
    translation: "朋友去世了，如果沒有親人收殮，孔子說：「由我來辦理喪事。」朋友送的禮物，即使是車馬，如果不是祭肉，他也不會行大禮跪拜。」",
    storyTitle: "真朋友的義氣",
    storyContent: "孔子對朋友非常有義氣。如果朋友沒人照顧，他會主動承擔責任。而且他覺得朋友之間送禮物是很平常的事，不需要太過客氣，除非是神聖的祭肉。這教我們，真正的友誼在於行動，而不是表面的客套。",
    flashcards: [
      { id: "f10-15-1", term: "無所歸", definition: "沒有親人、沒有依靠" },
      { id: "f10-15-2", term: "於我殯", definition: "在我這裡辦理喪事（殯音同賓）" }
    ]
  },
  {
    id: "10-16", world: 10, stage: 16, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "寢不尸", englishTitle: "Sleeping and Sitting",
    originalText: "寢不尸，居不容。」",
    translation: "睡覺時不像素食那樣挺直（像死人），在家閒居時不刻意擺出莊重的儀態。」",
    storyTitle: "自然的放鬆",
    storyContent: "孔子雖然很講禮貌，但他不古板。睡覺時他會讓身體自然彎曲，在家裡也會放鬆休息，不會整天繃著臉。這教我們，禮儀是為了生活更美好，而不是為了讓自己變得很累。",
    flashcards: [
      { id: "f10-16-1", term: "不尸", definition: "不像素食那樣挺直（古代祭祀時代表死者的人叫尸）" },
      { id: "f10-16-2", term: "不容", definition: "不刻意追求莊重的儀態（指放鬆）" }
    ]
  },
  {
    id: "10-17", world: 10, stage: 17, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "見齊衰者", englishTitle: "Meeting Those in Mourning",
    originalText: "見齊衰者，雖狎，必變。見冕者與瞽者，雖褻，必以貌。凶服者式之，式負版者。有盛饌，必變色而作。迅雷風烈必變。」",
    translation: "見到穿喪服的人，即使很親近，也一定會變得莊重。見到戴禮帽的官員和盲人，即使很熟悉，也一定會有禮貌。在車上遇到穿喪服的人或背著文書的人，會扶著車前橫木表示敬意。看到豐盛的飯菜，一定會神色莊重地站起來表示感謝。遇到雷聲大、風很猛，也一定會神色莊重（表示對自然的敬畏）。」",
    storyTitle: "對生命的敬畏",
    storyContent: "孔子對不幸的人、有殘疾的人、或是大自然的力量，都抱持著深深的敬意。他不會因為跟對方熟就隨便開玩笑。這教我們，要有一顆柔軟、體貼的心。",
    flashcards: [
      { id: "f10-17-1", term: "齊衰", definition: "古代的一種喪服（音同資崔）" },
      { id: "f10-17-2", term: "瞽者", definition: "盲人（音同古）" },
      { id: "f10-17-3", term: "式", definition: "扶著車前的橫木表示敬意（音同適）" }
    ]
  },
  {
    id: "10-18", world: 10, stage: 18, book: "鄉黨第十", englishBook: "Xiang Dang X", title: "升車，必正立", englishTitle: "Getting into a Carriage",
    originalText: "升車，必正立，執綏。車中，不內顧，不疾言，不親指。」",
    translation: "上車時，一定站正，拉好扶手繩。在車中，不東張西望，不快速說話，不指指點點。」",
    storyTitle: "乘車禮儀",
    storyContent: "孔子坐車時也非常有修養。他不會在車上大聲喧嘩或對路人指指點點。這展現了一種安靜、穩重的氣質。這教我們，在公共交通工具上也要保持禮貌。",
    flashcards: [
      { id: "f10-18-1", term: "執綏", definition: "拉著上車用的扶手繩（音同隨）" },
      { id: "f10-18-2", term: "不內顧", definition: "不東張西望、回頭看" }
    ]
  }
];
