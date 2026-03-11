import { Lesson } from '../lessons';

export const world20Lessons: Omit<Lesson, 'phoneticOriginalText'>[] = [
  {
    id: "20-1", world: 20, stage: 1, book: "堯曰第二十", englishBook: "Yao Yue XX", title: "堯曰：咨！爾舜！", englishTitle: "Yao Spoke to Shun",
    originalText: "堯曰：「咨！爾舜！天之曆數在爾躬，允執其中。四海困窮，天祿永終。」舜亦以命禹。",
    translation: "堯說：「嘿！你這舜啊！上天安排的運數已經落在你身上了，你要真誠地把握中正之道。如果天下百姓都陷入困苦貧窮，上天給你的祿位也就永遠結束了。」舜也用這話告誡禹。」",
    storyTitle: "權力的責任",
    storyContent: "這是古代賢君傳位時的叮嚀。他們覺得當國王不是為了享福，而是為了讓百姓過好日子。如果百姓受苦，國王就失職了。這教我們，能力越大，責任越大，要隨時關心身邊的人。",
    flashcards: [
      { id: "f20-1-1", term: "允執其中", definition: "真誠地把握中正之道，不偏不倚" },
      { id: "f20-1-2", term: "天祿", definition: "上天賜予的祿位、福分" }
    ]
  },
  {
    id: "20-2", world: 20, stage: 2, book: "堯曰第二十", englishBook: "Yao Yue XX", title: "尊五美，屏四惡", englishTitle: "Five Beauties and Four Evils",
    originalText: "子張問於孔子曰：「何如斯可以從政矣？」子曰：「尊五美，屏四惡，斯可以從政矣。」子張曰：「何謂五美？」子曰：「君子惠而不費，勞而不怨，欲而不貪，泰而不驕，威而不猛。」子張曰：「何謂四惡？」子曰：「不教而殺謂之虐；不戒視成謂之暴；慢令致期謂之賊；猶之與人也，出納之吝謂之有司。」",
    translation: "子張問：「怎樣才可以治理政事呢？」孔子說：「尊重五種美德，排除四種惡行，就可以治理政事了。」五種美德是：給人恩惠卻不浪費，讓人勞動卻不招怨，有願望卻不貪婪，莊重卻不驕傲，威嚴卻不兇猛。四種惡行是：不教導就殺掉叫虐，不先警告就要求成功叫暴，命令鬆懈卻突然限期完成叫賊，給人東西卻斤斤計較叫小氣。」",
    storyTitle: "好領導的五美四惡",
    storyContent: "孔子教我們怎麼當一個受人尊敬的領導者。要大方、勤勞、知足、莊重、有威嚴。同時要避免殘暴、不講理、小氣。這教我們，管理別人之前，要先管理好自己的品德。",
    flashcards: [
      { id: "f20-2-1", term: "惠而不費", definition: "給人恩惠，但自己不浪費（指順應民心做有益的事）" },
      { id: "f20-2-2", term: "屏", definition: "排除、除去（音同餅）" }
    ]
  },
  {
    id: "20-3", world: 20, stage: 3, book: "堯曰第二十", englishBook: "Yao Yue XX", title: "不知命，無以為君子", englishTitle: "Understanding Fate",
    originalText: "子曰：「不知命，無以為君子也；不知禮，無以立也；不知言，無以知人也。」",
    translation: "孔子說：「不懂得天命，就沒辦法當君子；不懂得禮儀，就沒辦法在社會自立；不懂得分辨言論，就沒辦法了解別人。」",
    storyTitle: "最後的一課",
    storyContent: "這是《論語》的最後一段話，也是孔子給我們的畢業叮嚀。他希望我們能明白自己的責任（命）、學會禮貌（禮）、並擁有看穿真相的智慧（知言）。這教我們，學習是為了讓我們成為一個更完整、更有智慧的人。",
    flashcards: [
      { id: "f20-3-1", term: "不知命", definition: "不明白上天的旨意或自己的使命" },
      { id: "f20-3-2", term: "知言", definition: "聽懂別人的話，分辨是非真偽" }
    ]
  }
];
