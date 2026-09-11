export interface ScriptureVerse {
  num: number | string;
  zh: string;
  en: string;
}

export interface LessonInfo {
  lessonNumber: number; // 0 to 29
  weekNumber: number;   // 1 to 30
  startDate: string;    // YYYY-MM-DD
  titleZh: string;
  titleEn: string;
  referenceZh: string;
  referenceEn: string;
  keyVerseZh: string;
  keyVerseRefZh: string;
  keyVerseEn: string;
  keyVerseRefEn: string;
  keyTruthZh: string;
  keyTruthEn: string;
  audioFileName: string;
  speakerZh: string;
  speakerEn: string;
  fullVerses: ScriptureVerse[];
}

export const ROMANS_LESSONS: LessonInfo[] = [
  {
    lessonNumber: 0,
    weekNumber: 1,
    startDate: '2026-09-12',
    titleZh: '第0课：荣耀的福音与本乎信的义',
    titleEn: 'Lesson 0: The Gospel & Righteousness by Faith',
    referenceZh: '罗马书 1:1-17',
    referenceEn: 'Romans 1:1-17',
    keyVerseZh: '我不以福音为耻；这福音本是神的大能，要救一切相信的，先是犹太人，后是希利尼人。因为神的义正在这福音上显明出来；这义是本于信，以致于信。如经上所记：“义人必因信得生。”',
    keyVerseRefZh: '罗马书 1:16-17',
    keyVerseEn: 'For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile. For in the gospel the righteousness of God is revealed—a righteousness that is by faith from first to last, just as it is written: "The righteous will live by faith."',
    keyVerseRefEn: 'Romans 1:16-17',
    keyTruthZh: '福音不是人的道德功劳，而是神拯救的大能；神的义唯独借着对耶稣基督的信赐给凡相信的人。',
    keyTruthEn: 'The gospel is the power of God for salvation; God’s righteousness is received solely through faith in Jesus Christ.',
    audioFileName: 'ROM_Lecture_00_MEN_062-26.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '耶稣基督的仆人保罗，奉召为使徒，特派传神的福音。', en: 'Paul, a servant of Christ Jesus, called to be an apostle and set apart for the gospel of God—' },
      { num: 2, zh: '这福音是神从前藉众先知在圣经上所应许的，', en: 'the gospel he promised beforehand through his prophets in the Holy Scriptures' },
      { num: 3, zh: '论到他儿子—我主耶稣基督。按肉体说，是从大卫后裔生的；', en: 'regarding his Son, who as to his earthly life was a descendant of David,' },
      { num: 4, zh: '按圣善的灵说，因从死里复活，以大能显明是神的儿子。', en: 'and who through the Spirit of holiness was appointed the Son of God in power by his resurrection from the dead: Jesus Christ our Lord.' },
      { num: 5, zh: '我们从他受了恩惠并使徒的职分，在万国之中叫人为他的名信服真道；', en: 'Through him we received grace and apostleship to call all the Gentiles to the obedience that comes from faith for his name’s sake.' },
      { num: 6, zh: '其中也有你们这蒙召属耶稣基督的人。', en: 'And you also are among those Gentiles who are called to belong to Jesus Christ.' },
      { num: 7, zh: '我写信给你们在罗马、为神所爱、奉召作圣徒的众人。愿恩惠、平安从我们的父神并主耶稣基督归与你们！', en: 'To all in Rome who are loved by God and called to be his holy people: Grace and peace to you from God our Father and from the Lord Jesus Christ.' },
      { num: 8, zh: '第一，我靠着耶稣基督，为你们众人感谢我的神，因你们的信心传遍了天下。', en: 'First, I thank my God through Jesus Christ for all of you, because your faith is being reported all over the world.' },
      { num: 9, zh: '我在他儿子福音上，用心灵所事奉的神，可以见证我怎样不住地提到你们；', en: 'God, whom I serve in my spirit in preaching the gospel of his Son, is my witness how constantly I remember you' },
      { num: 10, zh: '在祷告之间常常恳求，或者照神的旨意，最终得平坦的道路往你们那里去。', en: 'in my prayers at all times; and I pray that now at last by God’s will the way may be opened for me to come to you.' },
      { num: 11, zh: '因为我切切地想见你们，要把些属灵的恩赐分给你们，使你们可以坚固；', en: 'I long to see you so that I may impart to you some spiritual gift to make you strong—' },
      { num: 12, zh: '这样，我在你们中间，因你与我彼此的信心，就可以同得安慰。', en: 'that is, that you and I may be mutually encouraged by each other’s faith.' },
      { num: 13, zh: '弟兄们，我不愿意你们不知道，我屡次定意往你们那里去，要在你们中间得些果子，如同在其余的外邦人中一样；只是到如今仍有阻隔。', en: 'I do not want you to be unaware, brothers and sisters, that I planned many times to come to you (but have been prevented from doing so until now) in order that I might have a harvest among you, just as I have had among the other Gentiles.' },
      { num: 14, zh: '无论是希利尼人、化外人、聪明人、愚拙人，我都欠他们的债，', en: 'I am obligated both to Greeks and non-Greeks, both to the wise and the foolish.' },
      { num: 15, zh: '所以情愿尽我的力量，将福音也传给你们在罗马的人。', en: 'That is why I am so eager to preach the gospel also to you who are in Rome.' },
      { num: 16, zh: '我不以福音为耻；这福音本是神的大能，要救一切相信的，先是犹太人，后是希利尼人。', en: 'For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.' },
      { num: 17, zh: '因为神的义正在这福音上显明出来；这义是本于信，以致于信。如经上所记：“义人必因信得生。”', en: 'For in the gospel the righteousness of God is revealed—a righteousness that is by faith from first to last, just as it is written: "The righteous will live by faith."' }
    ]
  },
  {
    lessonNumber: 1,
    weekNumber: 2,
    startDate: '2026-09-19',
    titleZh: '第1课：神对不虔不义的忿怒与人的败坏',
    titleEn: 'Lesson 1: God’s Wrath Revealed Against All Unrighteousness',
    referenceZh: '罗马书 1:18-32',
    referenceEn: 'Romans 1:18-32',
    keyVerseZh: '自从造天地以来，神的永能和神性是明明可知的，虽是眼不能见，但藉着所造之物就可以晓得，叫人无可推诿。',
    keyVerseRefZh: '罗马书 1:20',
    keyVerseEn: 'For since the creation of the world God’s invisible qualities—his eternal power and divine nature—have been clearly seen, being understood from what has been made, so that people are without excuse.',
    keyVerseRefEn: 'Romans 1:20',
    keyTruthZh: '受造宇宙处处彰显神的永能神性；世人蓄意压制真理并拜受造物，在公义圣洁的神面前无可推诿。',
    keyTruthEn: 'Creation displays God’s eternal power; suppressing truth leaves all mankind without excuse before a holy God.',
    audioFileName: 'ROM_Lecture_01_MEN_062-27.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 18, zh: '原来，神的忿怒从天上显明在一切不虔不义的人身上，就是那些行不义阻挡真理的人。', en: 'The wrath of God is being revealed from heaven against all the godlessness and wickedness of people, who suppress the truth by their wickedness,' },
      { num: 19, zh: '神的事情，人所能知道的，原显明在人心里，因为神已经给他们显明。', en: 'since what may be known about God is plain to them, because God has made it plain to them.' },
      { num: 20, zh: '自从造天地以来，神的永能和神性是明明可知的，虽是眼不能见，但藉着所造之物就可以晓得，叫人无可推诿。', en: 'For since the creation of the world God’s invisible qualities—his eternal power and divine nature—have been clearly seen, being understood from what has been made, so that people are without excuse.' },
      { num: 21, zh: '因为，他们虽然知道神，却不当作神荣耀他，也不感谢他。他们的思念变为虚妄，无知的心就昏暗了。', en: 'For although they knew God, they neither glorified him as God nor gave thanks to him, but their thinking became futile and their foolish hearts were darkened.' },
      { num: 22, zh: '自称为聪明，反成了愚拙，', en: 'Although they claimed to be wise, they became fools' },
      { num: 23, zh: '将不能朽坏之神的荣耀变为偶像，彷佛必朽坏的人和飞禽、走兽、昆虫的样式。', en: 'and exchanged the glory of the immortal God for images made to look like a mortal human being and birds and animals and reptiles.' },
      { num: 24, zh: '所以，神任凭他们逞着心里的情欲行污秽的事，以致彼此玷辱自己的身体。', en: 'Therefore God gave them over in the sinful desires of their hearts to sexual impurity for the degrading of their bodies with one another.' },
      { num: 25, zh: '他们将神的真实变为虚谎，去敬拜事奉受造之物，不敬奉那造物的主—主乃是可称颂的，直到永远。阿们！', en: 'They exchanged the truth about God for a lie, and worshiped and served created things rather than the Creator—who is forever praised. Amen.' },
      { num: 26, zh: '因此，神任凭他们放纵可羞耻的情欲。他们的女人把顺性的用处变为逆性的用处；', en: 'Because of this, God gave them over to shameful lusts. Even their women exchanged natural sexual relations for unnatural ones.' },
      { num: 27, zh: '男人也是如此，弃了女人顺性的用处，欲火攻心，彼此贪恋，男和男行可羞耻的事，就在自己身上受这妄为当得的报应。', en: 'In the same way the men also abandoned natural relations with women and were inflamed with lust for one another. Men committed shameful acts with other men, and received in themselves the due penalty for their error.' },
      { num: 28, zh: '他们既然故意不认识神，神就任凭他们存邪僻的心，行那些不合理的事；', en: 'Furthermore, just as they did not think it worthwhile to retain the knowledge of God, so God gave them over to a depraved mind, so that they do what ought not to be done.' },
      { num: 29, zh: '装满了各样不义、邪恶、贪婪、恶毒，满心是嫉妒、凶杀、争竞、诡诈、毒恨；', en: 'They have become filled with every kind of wickedness, evil, greed and depravity. They are full of envy, murder, strife, deceit and malice.' },
      { num: 30, zh: '又是谗毁的、背后说人的、怨恨神的、侮慢人的、狂傲的、自夸的、捏造恶事的、违背父母的、', en: 'They are gossips, slanderers, God-haters, insolent, arrogant and boastful; they invent ways of doing evil; they disobey their parents;' },
      { num: 31, zh: '无知的、背约的、无亲情的、不怜悯人的。', en: 'they have no understanding, no fidelity, no love, no mercy.' },
      { num: 32, zh: '他们虽知道神判定行这样事的人是当死的，然而他们不但自己去行，还喜欢别人去行。', en: 'Although they know God’s righteous decree that those who do such things deserve death, they not only continue to do these very things but also approve of those who practice them.' }
    ]
  },
  {
    lessonNumber: 2,
    weekNumber: 3,
    startDate: '2026-09-26',
    titleZh: '第2课：神公义真实的审判与不偏待人',
    titleEn: 'Lesson 2: God’s Righteous Judgment & Impartiality',
    referenceZh: '罗马书 2:1-16',
    referenceEn: 'Romans 2:1-16',
    keyVerseZh: '因为神不偏待人。凡在律法以外犯了罪的，也必在律法以外灭亡；凡在律法以下犯了罪的，也必按律法受审判。',
    keyVerseRefZh: '罗马书 2:11-12',
    keyVerseEn: 'For God does not show favoritism. All who sin apart from the law will also perish apart from the law, and all who sin under the law will be judged by the law.',
    keyVerseRefEn: 'Romans 2:11-12',
    keyTruthZh: '神的审判绝对真实公义且不偏待人，任何人都不能凭道德优越或外在特权逃避神的鉴察。',
    keyTruthEn: 'God judges with absolute truth and impartiality; no one can escape judgment by moral pride or outward privilege.',
    audioFileName: 'ROM_Lecture_02_MEN_062-28.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '你这论断人的，无论你是谁，也无可推诿。你在什么事上论断人，就在什么事上定自己的罪；因你这论断人的，自己所行却和别人一样。', en: 'You, therefore, have no excuse, you who pass judgment on someone else, for at whatever point you judge another, you are condemning yourself, because you who pass judgment do the same things.' },
      { num: 2, zh: '我们知道这样行的人，神必照真理审判他。', en: 'Now we know that God’s judgment against those who do such things is based on truth.' },
      { num: 3, zh: '你这人哪，你论断行这样事的人，自己所行的却和别人一样，你以为能逃脱神的审判吗？', en: 'So when you, a mere human being, pass judgment on them and yet do the same things, do you think you will escape God’s judgment?' },
      { num: 4, zh: '还是你藐视他丰富的恩慈、宽容、忍耐，不晓得他的恩慈是领你悔改呢？', en: 'Or do you show contempt for the riches of his kindness, forbearance and patience, not realizing that God’s kindness is intended to lead you to repentance?' },
      { num: 5, zh: '你竟任着你刚硬不悔改的心，为自己积蓄忿怒，以致神震怒，显他公义审判的日子来到。', en: 'But because of your stubbornness and your unrepentant heart, you are storing up wrath against yourself for the day of God’s wrath, when his righteous judgment will be revealed.' },
      { num: 6, zh: '他必照各人的行为报应各人。', en: 'God "will repay each person according to what they have done."' },
      { num: 7, zh: '凡恒心行善、寻求荣耀、尊贵和不能朽坏之福的，就以永生报应他们；', en: 'To those who by persistence in doing good seek glory, honor and immortality, he will give eternal life.' },
      { num: 8, zh: '惟有结党、不顺从真理、反顺从不义的，就以忿怒、恼恨报应他们。', en: 'But for those who are self-seeking and who reject the truth and follow evil, there will be wrath and anger.' },
      { num: 9, zh: '将患难、困苦加给一切作恶的人，先是犹太人，后是希利尼人；', en: 'There will be trouble and distress for every human being who does evil: first for the Jew, then for the Gentile;' },
      { num: 10, zh: '却将荣耀、尊贵、平安加给一切行善的人，先是犹太人，后是希利尼人。', en: 'but glory, honor and peace for everyone who does good: first for the Jew, then for the Gentile.' },
      { num: 11, zh: '因为神不偏待人。', en: 'For God does not show favoritism.' },
      { num: 12, zh: '凡没有律法犯了罪的，也必不按律法灭亡；凡在律法以下犯了罪的，也必按律法受审判。', en: 'All who sin apart from the law will also perish apart from the law, and all who sin under the law will be judged by the law.' },
      { num: 13, zh: '（原来在神面前，不是听律法的为义，乃是行律法的称义。', en: 'For it is not those who hear the law who are righteous in God’s sight, but it is those who obey the law who will be declared righteous.' },
      { num: 14, zh: '没有律法的外邦人若顺着本性行律法上的事，他们虽然没有律法，自己就是自己的律法。', en: 'Indeed, when Gentiles, who do not have the law, do by nature things required by the law, they are a law for themselves, even though they do not have the law.' },
      { num: 15, zh: '这是显出律法的功用刻在他们心里，他们是非之心同作见证，并且他们的思念互相较量，或以为是，或以为非。）', en: 'They show that the requirements of the law are written on their hearts, their consciences also bearing witness, and their thoughts sometimes accusing them and at other times even defending them.' },
      { num: 16, zh: '就在神藉耶稣基督审判人隐秘事的日子，照着我的福音所言。', en: 'This will take place on the day when God judges people’s secrets through Jesus Christ, as my gospel declares.' }
    ]
  },
  {
    lessonNumber: 3,
    weekNumber: 4,
    startDate: '2026-10-03',
    titleZh: '第3课：心里的真割礼与各样自夸的止息',
    titleEn: 'Lesson 3: Circumcision of the Heart',
    referenceZh: '罗马书 2:17-3:8',
    referenceEn: 'Romans 2:17-3:8',
    keyVerseZh: '惟有里面作的，才是真犹太人；真割礼也是心里的，在乎灵，不在乎仪文。这人的称赞不是从人来的，乃是从神来的。',
    keyVerseRefZh: '罗马书 2:29',
    keyVerseEn: 'No, a person is a Jew who is one inwardly; and circumcision is circumcision of the heart, by the Spirit, not by the written code. Such a person’s praise is not from other people, but from God.',
    keyVerseRefEn: 'Romans 2:29',
    keyTruthZh: '神所看重的是内心的顺服与圣灵的工作，而非外在的宗教仪文与血统优越。',
    keyTruthEn: 'God values the inner transformation of the heart by the Holy Spirit above external religious rituals.',
    audioFileName: 'ROM_Lecture_03_MEN_062-29.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: '2:17', zh: '你称为犹太人，又倚靠律法，且指着神夸口；', en: 'Now you, if you call yourself a Jew; if you rely on the law and boast in God;' },
      { num: '2:18', zh: '既从律法中受了教训，就晓得神的旨意，也能分别是非；', en: 'if you know his will and approve of what is superior because you are instructed by the law;' },
      { num: '2:19', zh: '又深信自己是给瞎子领路的，是黑暗中人的光，', en: 'if you are convinced that you are a guide for the blind, a light for those who are in the dark,' },
      { num: '2:20', zh: '是蠢笨人的师傅，是小孩子的先生，在律法上有知识和真理的模范。', en: 'an instructor of the foolish, a teacher of little children, because you have in the law the embodiment of knowledge and truth—' },
      { num: '2:21', zh: '你既是教导别人，还不教导自己吗？你讲说人不可偷窃，自己还偷窃吗？', en: 'you, then, who teach others, do you not teach yourself? You who preach against stealing, do you steal?' },
      { num: '2:22', zh: '你说人不可奸淫，自己还奸淫吗？你厌恶偶像，自己还偷窃庙中之物吗？', en: 'You who say that people should not commit adultery, do you commit adultery? You who abhor idols, do you rob temples?' },
      { num: '2:23', zh: '你指着律法夸口，自己倒犯律法、玷辱神吗？', en: 'You who boast in the law, do you dishonor God by breaking the law?' },
      { num: '2:24', zh: '神的名在列邦中，因你们受了亵渎，正如经上所记的。', en: 'As it is written: "God’s name is blasphemed among the Gentiles because of you."' },
      { num: '2:25', zh: '你若是行律法的，割礼固然于你有益；若是犯律法的，你的割礼就算不得割礼。', en: 'Circumcision has value if you observe the law, but if you break the law, you have become as though you had not been circumcised.' },
      { num: '2:28', zh: '因为外面作犹太人的，不是真犹太人；外面肉身的割礼，也不是真割礼。', en: 'A person is not a Jew who is one only outwardly, nor is circumcision merely outward and physical.' },
      { num: '2:29', zh: '惟有里面作的，才是真犹太人；真割礼也是心里的，在乎灵，不在乎仪文。这人的称赞不是从人来的，乃是从神来的。', en: 'No, a person is a Jew who is one inwardly; and circumcision is circumcision of the heart, by the Spirit, not by the written code. Such a person’s praise is not from other people, but from God.' },
      { num: '3:1', zh: '这样说来，犹太人有什么长处？割礼有什么益处呢？', en: 'What advantage, then, is there in being a Jew, or what value is there in circumcision?' },
      { num: '3:2', zh: '凡事大有好处：第一是神的圣言交托他们。', en: 'Much in every way! First of all, the Jews have been entrusted with the very words of God.' },
      { num: '3:3', zh: '即便有不信的，这有何妨呢？难道他们的不信就废掉神的信吗？', en: 'What if some were unfaithful? Will their unfaithfulness nullify God’s faithfulness?' },
      { num: '3:4', zh: '断乎不能！不如说，神是真实的，人都是虚谎的。如经上所记：“你责备人的时候，显为公义；被人议论的时候，可以得胜。”', en: 'Not at all! Let God be true, and every human being a liar. As it is written: "So that you may be proved right when you speak and prevail when you judge."' }
    ]
  },
  {
    lessonNumber: 4,
    weekNumber: 5,
    startDate: '2026-10-10',
    titleZh: '第4课：普世皆罪与神白白的恩典称义',
    titleEn: 'Lesson 4: Universal Sin & Justification by Grace',
    referenceZh: '罗马书 3:9-31',
    referenceEn: 'Romans 3:9-31',
    keyVerseZh: '因为世人都犯了罪，亏缺了神的荣耀；如今却蒙神的恩典，因基督耶稣的救赎，就白白地称义。',
    keyVerseRefZh: '罗马书 3:23-24',
    keyVerseEn: 'For all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus.',
    keyVerseRefEn: 'Romans 3:23-24',
    keyTruthZh: '普世之人在神律法之下无可自救；唯独藉基督挽回祭与神的救赎恩典，因信白白称义。',
    keyTruthEn: 'All humanity is silenced under sin; justification is a free gift of grace through redemption in Jesus Christ.',
    audioFileName: 'ROM_Lecture_04_MEN_062-30.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 9, zh: '这却怎么样呢？我们比他们强吗？决不是的！因我们已经证明：犹太人和希利尼人都在罪恶之下。', en: 'What shall we conclude then? Do we have any advantage? Not at all! For we have already made the charge that Jews and Gentiles alike are all under the power of sin.' },
      { num: 10, zh: '就如经上所记：“没有义人，连一个也没有！', en: 'As it is written: "There is no one righteous, not even one;' },
      { num: 11, zh: '没有明白的，没有寻求神的；', en: 'there is no one who understands; there is no one who seeks God.' },
      { num: 12, zh: '都是偏离正路，一同变为无用。没有行善的，连一个也没有！', en: 'All have turned away, they have together become worthless; there is no one who does good, not even one."' },
      { num: 19, zh: '我们晓得律法上的话都是对律法以下之人说的，好塞住各人的口，叫普世的人都伏在神审判之下。', en: 'Now we know that whatever the law says, it says to those who are under the law, so that every mouth may be silenced and the whole world held accountable to God.' },
      { num: 20, zh: '所以凡有血气的，没有一个因行律法能在神面前称义，因为律法本是叫人知罪。', en: 'Therefore no one will be declared righteous in God’s sight by the works of the law; rather, through the law we become conscious of our sin.' },
      { num: 21, zh: '但如今，神的义在律法以外已经显明出来，有律法和先知为证：', en: 'But now apart from the law the righteousness of God has been made known, to which the Law and the Prophets testify.' },
      { num: 22, zh: '就是神的义，因信耶稣基督加给一切相信的人，并没有分别。', en: 'This righteousness is given through faith in Jesus Christ to all who believe. There is no difference between Jew and Gentile,' },
      { num: 23, zh: '因为世人都犯了罪，亏缺了神的荣耀；', en: 'for all have sinned and fall short of the glory of God,' },
      { num: 24, zh: '如今却蒙神的恩典，因基督耶稣的救赎，就白白地称义。', en: 'and all are justified freely by his grace through the redemption that came by Christ Jesus.' },
      { num: 25, zh: '神设立耶稣作挽回祭，是凭着耶稣的血，藉着人的信，要显明神的义；因为他用忍耐的心宽容人先时所犯的罪，', en: 'God presented Christ as a sacrifice of atonement, through the shedding of his blood—to be received by faith. He did this to demonstrate his righteousness, because in his forbearance he had left the sins committed beforehand unpunished—' },
      { num: 26, zh: '好在今时显明他的义，使人知道他自己为义，也称信耶稣的人为义。', en: 'he did it to demonstrate his righteousness at the present time, so as to be just and the one who justifies those who have faith in Jesus.' },
      { num: 27, zh: '既是这样，哪里能夸口呢？没有可夸的了！用何法没有的呢？是用立功之法吗？不是，乃用立信之法。', en: 'Where, then, is boasting? It is excluded. Because of what law? The law that requires works? No, because of the law that requires faith.' },
      { num: 28, zh: '所以我们看定了：人称义是因着信，不在乎遵行律法。', en: 'For we maintain that a person is justified by faith apart from the works of the law.' }
    ]
  },
  {
    lessonNumber: 5,
    weekNumber: 6,
    startDate: '2026-10-17',
    titleZh: '第5课：亚伯拉罕因信称义的榜样',
    titleEn: 'Lesson 5: Abraham Justified by Faith',
    referenceZh: '罗马书 4:1-25',
    referenceEn: 'Romans 4:1-25',
    keyVerseZh: '亚伯拉罕信神，这就算为他的义。',
    keyVerseRefZh: '罗马书 4:3',
    keyVerseEn: 'Abraham believed God, and it was credited to him as righteousness.',
    keyVerseRefEn: 'Romans 4:3',
    keyTruthZh: '救恩与应许自古以来单单建立在对神的信靠上，而不是行为工价或割礼仪文。',
    keyTruthEn: 'God’s promises and righteousness have always been received through faith, not works or circumcision.',
    audioFileName: 'ROM_Lecture_05_MEN_062-31.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '如此说来，我们的祖宗亚伯拉罕凭着肉体得了什么呢？', en: 'What then shall we say that Abraham, our forefather according to the flesh, discovered in this matter?' },
      { num: 2, zh: '倘若亚伯拉罕是因行为称义，就有可夸的；只是在神面前并无可夸。', en: 'If, in fact, Abraham was justified by works, he had something to boast about—but not before God.' },
      { num: 3, zh: '经上说什么呢？说：“亚伯拉罕信神，这就算为他的义。”', en: 'What does Scripture say? "Abraham believed God, and it was credited to him as righteousness."' },
      { num: 4, zh: '做工的得工价，不算恩典，乃是该得的；', en: 'Now to the one who works, wages are not credited as a gift but as an obligation.' },
      { num: 5, zh: '惟有不做工的，只信称罪人为义的神，他的信就算为义。', en: 'However, to the one who does not work but trusts God who justifies the ungodly, their faith is credited as righteousness.' },
      { num: 20, zh: '并且仰望神的应许，总没有因不信心里起疑惑，反倒因信心里得坚固，将荣耀归给神，', en: 'Yet he did not waver through unbelief regarding the promise of God, but was strengthened in his faith and gave glory to God,' },
      { num: 21, zh: '且满心相信神所应许的必能作成。', en: 'being fully persuaded that God had power to do what he had promised.' },
      { num: 22, zh: '所以，这就算为他的义。', en: 'This is why "it was credited to him as righteousness."' },
      { num: 23, zh: '“算为他义”的这句话不是单为他一人写的，', en: 'The words "it was credited to him" were written not for him alone,' },
      { num: 24, zh: '也是为我们将来得算为义之人写的，就是我们这信神使我们的主耶稣从死里复活的人。', en: 'but also for us, to whom God will credit righteousness—for us who believe in him who raised Jesus our Lord from the dead.' },
      { num: 25, zh: '耶稣被交给人，是为我们的过犯；复活，是为叫我们称义。', en: 'He was delivered over to death for our sins and was raised to life for our justification.' }
    ]
  },
  {
    lessonNumber: 6,
    weekNumber: 7,
    startDate: '2026-10-24',
    titleZh: '第6课：因信得与神相和及患难中的喜乐',
    titleEn: 'Lesson 6: Peace with God & Joy in Suffering',
    referenceZh: '罗马书 5:1-11',
    referenceEn: 'Romans 5:1-11',
    keyVerseZh: '我们既因信称义，就藉着我们的主耶稣基督得与神相和。惟有基督在我们还作罪人的时候为我们死，神的爱就在此向我们显明了。',
    keyVerseRefZh: '罗马书 5:1, 8',
    keyVerseEn: 'Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ... But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.',
    keyVerseRefEn: 'Romans 5:1, 8',
    keyTruthZh: '称义带来真实的永恒平安与盼望，神的爱藉着十字架浇灌在我们心里，使我们在患难中仍有确据与喜乐。',
    keyTruthEn: 'Justification brings lasting peace and solid hope; God poured His love into our hearts through Christ’s death.',
    audioFileName: 'ROM_Lecture_06_MEN_062-32.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '我们既因信称义，就藉着我们的主耶稣基督得与神相和。', en: 'Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ,' },
      { num: 2, zh: '我们又藉着他，因信得进入现在所站的这恩典中，并且欢欢喜喜盼望神的荣耀。', en: 'through whom we have gained access by faith into this grace in which we now stand. And we boast in the hope of the glory of God.' },
      { num: 3, zh: '不但如此，就是在患难中也是欢欢喜喜的；因为知道患难生忍耐，', en: 'Not only so, but we also glory in our sufferings, because we know that suffering produces perseverance;' },
      { num: 4, zh: '忍耐生老练，老练生盼望；', en: 'perseverance, character; and character, hope.' },
      { num: 5, zh: '盼望不至于羞耻，因为所赐给我们的圣灵将神的爱浇灌在我们心里。', en: 'And hope does not put us to shame, because God’s love has been poured out into our hearts through the Holy Spirit, who has been given to us.' },
      { num: 6, zh: '因我们还软弱的时候，基督就按所定的日期为罪人死。', en: 'You see, at just the right time, when we were still powerless, Christ died for the ungodly.' },
      { num: 7, zh: '为义人死，是少有的；为仁人死，或者有敢做的。', en: 'Very rarely will anyone die for a righteous person, though for a good person someone might possibly dare to die.' },
      { num: 8, zh: '惟有基督在我们还作罪人的时候为我们死，神的爱就在此向我们显明了。', en: 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.' },
      { num: 9, zh: '现在我们既靠着他的血称义，就更要藉着他免去神的忿怒。', en: 'Since we have now been justified by his blood, how much more shall we be saved from God’s wrath through him!' },
      { num: 10, zh: '因为我们作仇敌的时候，且藉着神儿子的死，得与神和好；既已和好，就更要因他的生得救了。', en: 'For if, while God’s enemies, we were reconciled to him through the death of his Son, how much more, having been reconciled, shall we be saved through his life!' },
      { num: 11, zh: '不但如此，我们既藉着我主耶稣基督得与神和好，也就藉着他以神为乐。', en: 'Not only is this so, but we also boast in God through our Lord Jesus Christ, through whom we have now received reconciliation.' }
    ]
  },
  {
    lessonNumber: 7,
    weekNumber: 8,
    startDate: '2026-10-31',
    titleZh: '第7课：亚当与基督的对比—恩典的浩大',
    titleEn: 'Lesson 7: Adam and Christ: The Triumph of Grace',
    referenceZh: '罗马书 5:12-21',
    referenceEn: 'Romans 5:12-21',
    keyVerseZh: '只是过犯不如恩赐。若因一人的过犯，众人人都死了，何如何况神的恩典，与那因耶稣基督一人恩典中白白的恩赐，更加倍地临到众人。',
    keyVerseRefZh: '罗马书 5:15',
    keyVerseEn: 'But the gift is not like the trespass. For if the many died by the trespass of the one man, how much more did God’s grace and the gift that came by the grace of the one man, Jesus Christ, overflow to the many!',
    keyVerseRefEn: 'Romans 5:15',
    keyTruthZh: '基督的顺服与恩典远胜过亚当堕落所带来的咒诅，恩典藉着义作王，叫人因耶稣基督得永生。',
    keyTruthEn: 'Christ’s obedience and grace vastly exceed Adam’s fall, bringing eternal life through righteousness.',
    audioFileName: 'ROM_Lecture_07_MEN_062-33.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 12, zh: '这就如罪是从一人入了世界，死又是从罪来的；于是死就临到众人，因为众人人都犯了罪。', en: 'Therefore, just as sin entered the world through one man, and death through sin, and in this way death came to all people, because all sinned—' },
      { num: 15, zh: '只是过犯不如恩赐。若因一人的过犯，众人都死了，何况神的恩典，与那因耶稣基督一人恩典中白白恩赐，更加倍地临到众人。', en: 'But the gift is not like the trespass. For if the many died by the trespass of the one man, how much more did God’s grace and the gift that came by the grace of the one man, Jesus Christ, overflow to the many!' },
      { num: 17, zh: '若因一人的过犯，死就因这一人作了王，何况那些受洪恩又蒙所赐之义的，岂不更要因耶稣基督一人在生命中作王吗？', en: 'For if, by the trespass of the one man, death reigned through that one man, how much more will those who receive God’s abundant provision of grace and of the gift of righteousness reign in life through the one man, Jesus Christ!' },
      { num: 18, zh: '如此说来，因一次的过犯，众人都被定罪；照样，因一次的义行，众人也就被称义得生命了。', en: 'Consequently, just as one trespass resulted in condemnation for all people, so also one righteous act resulted in justification and life for all people.' },
      { num: 19, zh: '因一人的悖逆，众人成为罪人；照样，因一人的顺从，众人也成为义了。', en: 'For just as through the disobedience of the one man the many were made sinners, so also through the obedience of the one man the many will be made righteous.' },
      { num: 20, zh: '律法本是外添的，叫过犯显多；只是罪在哪里显多，恩典就更显多了。', en: 'The law was brought in so that the trespass might increase. But where sin increased, grace increased all the more,' },
      { num: 21, zh: '就如罪作王叫人死；照样，恩典也藉着义作王，叫人因我们的主耶稣基督得永生。', en: 'so that, just as sin reigned in death, so also grace might reign through righteousness to bring eternal life through Jesus Christ our Lord.' }
    ]
  },
  {
    lessonNumber: 8,
    weekNumber: 9,
    startDate: '2026-11-07',
    titleZh: '第8课：与基督同死同复活—向罪看自己是死的',
    titleEn: 'Lesson 8: Dead to Sin, Alive in Christ',
    referenceZh: '罗马书 6:1-14',
    referenceEn: 'Romans 6:1-14',
    keyVerseZh: '这样，你们向罪也当看自己是死的；向神在基督耶稣里，却当看自己是活的。',
    keyVerseRefZh: '罗马书 6:11',
    keyVerseEn: 'In the same way, count yourselves dead to sin but alive to God in Christ Jesus.',
    keyVerseRefEn: 'Romans 6:11',
    keyTruthZh: '信徒借着与基督联合，向罪的权势已死，向神的生命复活，不再作罪的奴仆。',
    keyTruthEn: 'United with Christ in death and resurrection, believers are freed from sin’s dominion to live for God.',
    audioFileName: 'ROM_Lecture_08_MEN_062-34.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '这样，怎么说呢？我们可以仍在罪中、叫恩典显多吗？', en: 'What shall we say, then? Shall we go on sinning so that grace may increase?' },
      { num: 2, zh: '断乎不可！我们在罪上死了的人岂可仍在罪中活着呢？', en: 'By no means! We are those who have died to sin; how can we live in it any longer?' },
      { num: 3, zh: '岂不知我们这受洗归入基督耶稣的人是受洗归入他的死吗？', en: 'Or don’t you know that all of us who were baptized into Christ Jesus were baptized into his death?' },
      { num: 4, zh: '所以，我们藉着洗礼归入死，和他一同埋葬，原是叫我们一举一动有新生的样式，像基督藉着父的荣耀从死里复活一样。', en: 'We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.' },
      { num: 5, zh: '我们若在他死的形状上与他联合，也要在他复活的形状上与他联合；', en: 'For if we have been united with him in a death like his, we will certainly also be united with him in a resurrection like his.' },
      { num: 6, zh: '因为知道我们的旧人和他同钉十字架，使罪身灭绝，叫我们不再作罪的奴仆；', en: 'For we know that our old self was crucified with him so that the body ruled by sin might be done away with, that we should no longer be slaves to sin—' },
      { num: 7, zh: '因为已死的人是脱离了罪。', en: 'because anyone who has died has been set free from sin.' },
      { num: 11, zh: '这样，你们向罪也当看自己是死的；向神在基督耶稣里，却当看自己是活的。', en: 'In the same way, count yourselves dead to sin but alive to God in Christ Jesus.' },
      { num: 12, zh: '所以，不要容罪在你们必死的身上作王，使你们顺从身子的私欲。', en: 'Therefore do not let sin reign in your mortal body so that you obey its evil desires.' },
      { num: 13, zh: '也不要将你们的肢体献给罪作不义的器具；倒要像从死里复活的人，将自己献给神，并将肢体作义的器具献给神。', en: 'Do not offer any part of yourself to sin as an instrument of wickedness, but rather offer yourselves to God as those who have been brought from death to life; and offer every part of yourself to him as an instrument of righteousness.' },
      { num: 14, zh: '罪必不能作你们的主，因你们不在律法之下，乃在恩典之下。', en: 'For sin shall no longer be your master, because you are not under the law, but under grace.' }
    ]
  },
  {
    lessonNumber: 9,
    weekNumber: 10,
    startDate: '2026-11-14',
    titleZh: '第9课：从罪里得释放作义的奴仆',
    titleEn: 'Lesson 9: Slaves to Righteousness',
    referenceZh: '罗马书 6:15-23',
    referenceEn: 'Romans 6:15-23',
    keyVerseZh: '因为罪的工价乃是死；惟有神的恩赐，在我们的主基督耶稣里，乃是永生。',
    keyVerseRefZh: '罗马书 6:23',
    keyVerseEn: 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.',
    keyVerseRefEn: 'Romans 6:23',
    keyTruthZh: '顺从谁就作谁的奴仆；归于基督使我们从罪中得释放，结出成圣的果子，最终进入永生。',
    keyTruthEn: 'Freed from sin and enslaved to God, believers reap the fruit of holiness, leading to eternal life.',
    audioFileName: 'ROM_Lecture_09_MEN_062-35.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 15, zh: '这却怎么样呢？我们在恩典之下，不在律法之下，就可以犯罪吗？断乎不可！', en: 'What then? Shall we sin because we are not under the law but under grace? By no means!' },
      { num: 16, zh: '岂不晓得你们献上自己作奴仆，顺从谁，就作谁的奴仆吗？或作罪的奴仆，以至于死；或作顺命的奴仆，以致成义。', en: 'Don’t you know that when you offer yourselves to someone as obedient slaves, you are slaves of the one you obey—whether you are slaves to sin, which leads to death, or to obedience, which leads to righteousness?' },
      { num: 17, zh: '感谢神！因为你们从前虽然作罪的奴仆，现今却从心里顺服了所传给你们道理的模范。', en: 'But thanks be to God that, though you used to be slaves to sin, you have come to obey from your heart the pattern of teaching that has now claimed your allegiance.' },
      { num: 18, zh: '你们既从罪里得了释放，就作了义的奴仆。', en: 'You have been set free from sin and have become slaves to righteousness.' },
      { num: 22, zh: '但现今，你们既从罪里得了释放，作了神的奴仆，就有成圣的果子，那结局就是永生。', en: 'But now that you have been set free from sin and have become slaves of God, the benefit you reap leads to holiness, and the result is eternal life.' },
      { num: 23, zh: '因为罪的工价乃是死；惟有神的恩赐，在我们的主基督耶稣里，乃是永生。', en: 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.' }
    ]
  },
  {
    lessonNumber: 10,
    weekNumber: 11,
    startDate: '2026-11-21',
    titleZh: '第10课：律法的功用与内心的交战',
    titleEn: 'Lesson 10: The Law and the Inner Struggle',
    referenceZh: '罗马书 7:1-25',
    referenceEn: 'Romans 7:1-25',
    keyVerseZh: '我真是苦啊！谁能救我脱离这取死的身体呢？感谢神，靠着我们的主耶稣基督就能脱离了。',
    keyVerseRefZh: '罗马书 7:24-25上',
    keyVerseEn: 'What a wretched man I am! Who will rescue me from this body that is subject to death? Thanks be to God, who delivers me through Jesus Christ our Lord!',
    keyVerseRefEn: 'Romans 7:24-25',
    keyTruthZh: '律法是圣洁公义良善的，却暴露肉体的无能与罪的凶恶；唯有靠主基督才能得拯救脱离肉体捆绑。',
    keyTruthEn: 'The law reveals our inability and the depth of sin; deliverance comes solely through Jesus Christ.',
    audioFileName: 'ROM_Lecture_10_MEN_062-36.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 7, zh: '这样，我们可说什么呢？律法是罪吗？断乎不是！只是非因律法，我就不知何为罪。非律法说“不可起贪心”，我就不知何为贪心。', en: 'What shall we say, then? Is the law sinful? Certainly not! Nevertheless, I would not have known what sin was had it not been for the law. For I would not have known what coveting really was if the law had not said, "You shall not covet."' },
      { num: 12, zh: '这样看来，律法是圣洁的，诫命也是圣洁、公义、良善的。', en: 'So then, the law is holy, and the commandment is holy, righteous and good.' },
      { num: 18, zh: '我也知道在我里头，就是我肉体之中，没有良善。因为，立志为善由得我，只是行出来由不得我。', en: 'For I know that good itself does not dwell in me, that is, in my sinful nature. For I have the desire to do what is good, but I cannot carry it out.' },
      { num: 19, zh: '故此，我所愿意的善，我反不做；我所不愿意的恶，我倒去做。', en: 'For I do not do the good I want to do, but the evil I do not want to do—this I keep on doing.' },
      { num: 24, zh: '我真是苦啊！谁能救我脱离这取死的身体呢？', en: 'What a wretched man I am! Who will rescue me from this body that is subject to death?' },
      { num: 25, zh: '感谢神，靠着我们的主耶稣基督就能脱离了。这样看来，我以内心顺服神的律，我肉体却顺服罪的律了。', en: 'Thanks be to God, who delivers me through Jesus Christ our Lord! So then, I myself in my mind am a slave to God’s law, but in my sinful nature a slave to the law of sin.' }
    ]
  },
  {
    lessonNumber: 11,
    weekNumber: 12,
    startDate: '2026-11-28',
    titleZh: '第11课：在圣灵里的生命与儿子的名分',
    titleEn: 'Lesson 11: Life in the Spirit & Adoption as Sons',
    referenceZh: '罗马书 8:1-17',
    referenceEn: 'Romans 8:1-17',
    keyVerseZh: '如今，那些在基督耶稣里的就不定罪了。因为赐生命圣灵的律，在基督耶稣里释放了我，使我脱离罪和死的律了。',
    keyVerseRefZh: '罗马书 8:1-2',
    keyVerseEn: 'Therefore, there is now no condemnation for those who are in Christ Jesus, because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death.',
    keyVerseRefEn: 'Romans 8:1-2',
    keyTruthZh: '在基督里再无定罪；圣灵住在我们心里，引导我们靠圣灵治死肉体恶行，同证我们是神的儿女。',
    keyTruthEn: 'No condemnation in Christ; the Spirit indwells believers, empowering holiness and testifying to our adoption as children of God.',
    audioFileName: 'ROM_Lecture_11_MEN_062-37.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '如今，那些在基督耶稣里的就不定罪了。', en: 'Therefore, there is now no condemnation for those who are in Christ Jesus,' },
      { num: 2, zh: '因为赐生命圣灵的律，在基督耶稣里释放了我，使我脱离罪和死的律了。', en: 'because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death.' },
      { num: 6, zh: '体贴肉体的，就是死；体贴圣灵的，乃是生命、平安。', en: 'The mind governed by the flesh is death, but the mind governed by the Spirit is life and peace.' },
      { num: 9, zh: '如果神的灵住在你们心里，你们就不属肉体，乃属圣灵了。人若没有基督的灵，就不是属基督的。', en: 'You, however, are not in the realm of the flesh but are in the realm of the Spirit, if indeed the Spirit of God lives in you. And if anyone does not have the Spirit of Christ, they do not belong to Christ.' },
      { num: 14, zh: '因为凡被神的灵引导的，都是神的儿子。', en: 'For those who are led by the Spirit of God are the children of God.' },
      { num: 15, zh: '你们所受的，不是奴仆的心，仍旧害怕；所受的，乃是后嗣的心，因此我们呼叫：“阿爸！父！”', en: 'The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, "Abba, Father."' },
      { num: 16, zh: '圣灵与我们的心同证我们是神的儿女；', en: 'The Spirit himself testifies with our spirit that we are God’s children.' },
      { num: 17, zh: '既是儿女，便是后嗣，就是神的后嗣，和基督同作后嗣。如果我们和他一同受苦，也必和他一同得荣耀。', en: 'Now if we are children, then we are heirs—heirs of God and co-heirs with Christ, if indeed we share in his sufferings in order that we may also share in his glory.' }
    ]
  },
  {
    lessonNumber: 12,
    weekNumber: 13,
    startDate: '2026-12-05',
    titleZh: '第12课：荣耀的盼望与神万事互相效力',
    titleEn: 'Lesson 12: Future Glory & God Working for Good',
    referenceZh: '罗马书 8:18-30',
    referenceEn: 'Romans 8:18-30',
    keyVerseZh: '我们晓得万事都互相效力，叫爱神的人得益处，就是按他旨意被召的人。',
    keyVerseRefZh: '罗马书 8:28',
    keyVerseEn: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
    keyVerseRefEn: 'Romans 8:28',
    keyTruthZh: '现在的苦楚比起将要显于我们的荣耀就不足介意了；神掌管万事，叫爱祂的人效法神儿子的模样。',
    keyTruthEn: 'Present sufferings are not worth comparing with the glory to be revealed; God orchestrates all things for our good.',
    audioFileName: 'ROM_Lecture_12_MEN_062-38.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 18, zh: '我想，现在的苦楚若比起将来要显于我们的荣耀就不足介意了。', en: 'I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.' },
      { num: 26, zh: '况且，我们的软弱有圣灵帮助；我们本不晓得当怎样祷告，只是圣灵亲自用说不出来的叹息替我们祈求。', en: 'In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.' },
      { num: 28, zh: '我们晓得万事都互相效力，叫爱神的人得益处，就是按他旨意被召的人。', en: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.' },
      { num: 29, zh: '因为他预先所知道的人，就预先定下效法他儿子的模样，使他儿子在许多弟兄中作长子。', en: 'For those God foreknew he also predestined to be conformed to the image of his Son, that he might be the firstborn among many brothers and sisters.' },
      { num: 30, zh: '预先所定下的人又召他们来；所召来的人又称他们为义；所称为义的人又叫他们得荣耀。', en: 'And those he predestined, he also called; those he called, he also justified; those he justified, he also glorified.' }
    ]
  },
  {
    lessonNumber: 13,
    weekNumber: 14,
    startDate: '2026-12-12',
    titleZh: '第13课：得胜有余与永不断绝的神之爱',
    titleEn: 'Lesson 13: More Than Conquerors in God’s Love',
    referenceZh: '罗马书 8:31-39',
    referenceEn: 'Romans 8:31-39',
    keyVerseZh: '然而，靠着爱我们的主，在这一切的事上已经得胜有余了。因为我深信无论是死，是生…都不能叫我们与神的爱隔绝；这爱是在我们的主基督耶稣里的。',
    keyVerseRefZh: '罗马书 8:37-39',
    keyVerseEn: 'No, in all these things we are more than conquerors through him who loved us. For I am convinced that neither death nor life... will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    keyVerseRefEn: 'Romans 8:37-39',
    keyTruthZh: '神既不爱惜自己的儿子为我们舍了，没有任何受造之物能使我们与神在基督里的爱隔绝。',
    keyTruthEn: 'God gave His Son for us; absolutely nothing can separate us from His unfailing love in Christ.',
    audioFileName: 'ROM_Lecture_13_MEN_062-39.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 31, zh: '既是这样，还有什么说的呢？神若帮助我们，谁能敌挡我们呢？', en: 'What, then, shall we say in response to these things? If God is for us, who can be against us?' },
      { num: 32, zh: '神既不爱惜自己的儿子，为我们众人舍了，岂不也把万物和他一同白白地赐给我们吗？', en: 'He who did not spare his own Son, but gave him up for us all—how will he not also, along with him, graciously give us all things?' },
      { num: 33, zh: '谁能控告神所拣选的人呢？有神称他们为义了。', en: 'Who will bring any charge against those whom God has chosen? It is God who justifies.' },
      { num: 34, zh: '谁能定他们的罪呢？有基督耶稣已经死了，而且从死里复活，现今在神的右边，也替我们祈求。', en: 'Who then is the one who condemns? No one. Christ Jesus who died—more than that, who was raised to life—is at the right hand of God and is also interceding for us.' },
      { num: 35, zh: '谁能使我们与基督的爱隔绝呢？难道是患难吗？是困苦吗？是逼迫吗？是饥饿吗？是赤身露体吗？是危险吗？是刀剑吗？', en: 'Who shall separate us from the love of Christ? Shall trouble or hardship or persecution or famine or nakedness or danger or sword?' },
      { num: 37, zh: '然而，靠着爱我们的主，在这一切的事上已经得胜有余了。', en: 'No, in all these things we are more than conquerors through him who loved us.' },
      { num: 38, zh: '因为我深信无论是死，是生，是天使，是掌权的，是有能的，是现在的事，是将来的事，', en: 'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers,' },
      { num: 39, zh: '是高处的，是低处的，是别的受造之物，都不能叫我们与神的爱隔绝；这爱是在我们的主基督耶稣里的。', en: 'neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.' }
    ]
  },
  {
    lessonNumber: 14,
    weekNumber: 15,
    startDate: '2026-12-19',
    titleZh: '第14课：神的主权拣选与恩待之约',
    titleEn: 'Lesson 14: God’s Sovereign Election',
    referenceZh: '罗马书 9:1-29',
    referenceEn: 'Romans 9:1-29',
    keyVerseZh: '据此看来，这不在乎那定意的，也不在乎那奔跑的，只在乎发怜悯的神。',
    keyVerseRefZh: '罗马书 9:16',
    keyVerseEn: 'It does not, therefore, depend on human desire or effort, but on God’s mercy.',
    keyVerseRefEn: 'Romans 9:16',
    keyTruthZh: '救恩完全出于神丰盛的怜悯与主权拣选，显明神向祂百姓守约施慈爱的信实。',
    keyTruthEn: 'Salvation rests upon God’s sovereign mercy and eternal purpose, demonstrating His covenant faithfulness.',
    audioFileName: 'ROM_Lecture_14_MEN_062-40.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '我在基督里说真话，并不谎言，有我良心被圣灵感动，给我作见证：', en: 'I speak the truth in Christ—I am not lying, my conscience confirms it through the Holy Spirit—' },
      { num: 2, zh: '我是大有忧愁，心里时常伤痛；', en: 'I have great sorrow and unceasing anguish in my heart.' },
      { num: 3, zh: '为我弟兄，我骨肉之亲，就是自己被咒诅，与基督分离，我也愿意。', en: 'For I could wish that I myself were cursed and cut off from Christ for the sake of my people, those of my own race,' },
      { num: 14, zh: '这样，我们可说什么呢？难道神有什么不公义吗？断乎没有！', en: 'What then shall we say? Is God unjust? Not at all!' },
      { num: 15, zh: '因他对摩西说：“我要怜悯谁就怜悯谁，要恩待谁就恩待谁。”', en: 'For he says to Moses, "I will have mercy on whom I have mercy, and I will have compassion on whom I have compassion."' },
      { num: 16, zh: '据此看来，这不在乎那定意的，也不在乎那奔跑的，只在乎发怜悯的神。', en: 'It does not, therefore, depend on human desire or effort, but on God’s mercy.' }
    ]
  },
  {
    lessonNumber: 15,
    weekNumber: 16,
    startDate: '2026-12-26',
    titleZh: '第15课：口里承认心里相信—福音的呼求',
    titleEn: 'Lesson 15: Confess with Your Mouth, Believe in Your Heart',
    referenceZh: '罗马书 9:30-10:21',
    referenceEn: 'Romans 9:30-10:21',
    keyVerseZh: '你若口里认耶稣为主，心里信神叫他从死里复活，就必得救。因为人心里相信，就可以称义；口里承认，就可以得救。凡求告主名的，就必得救。',
    keyVerseRefZh: '罗马书 10:9-10, 13',
    keyVerseEn: 'If you declare with your mouth, "Jesus is Lord," and believe in your heart that God raised him from the dead, you will be saved... for, "Everyone who calls on the name of the Lord will be saved."',
    keyVerseRefEn: 'Romans 10:9-10, 13',
    keyTruthZh: '律法的总结就是基督，使凡信祂的都得着义；凡求告主名的，不论犹太人希利尼人，都必得救。',
    keyTruthEn: 'Christ is the culmination of the law for righteousness; whoever calls upon His name in faith will be saved.',
    audioFileName: 'ROM_Lecture_15_MEN_062-41.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: '10:4', zh: '律法的总结就是基督，使可以说是凡信他的都得着义。', en: 'Christ is the culmination of the law so that there may be righteousness for everyone who believes.' },
      { num: '10:9', zh: '你若口里认耶稣为主，心里信神叫他从死里复活，就必得救。', en: 'If you declare with your mouth, "Jesus is Lord," and believe in your heart that God raised him from the dead, you will be saved.' },
      { num: '10:10', zh: '因为，人心里相信就可以称义，口里承认就可以得救。', en: 'For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved.' },
      { num: '10:13', zh: '因为“凡求告主名的，就必得救。”', en: 'for, "Everyone who calls on the name of the Lord will be saved."' },
      { num: '10:14', zh: '然而，人未曾信他，怎能求他呢？未曾听见他，怎能信他呢？没有传道的，怎能听见呢？', en: 'How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard? And how can they hear without someone preaching to them?' },
      { num: '10:15', zh: '若没有奉差遣，怎能传道呢？如经上所记：“报福音、传喜信的人，他们的脚踪何等佳美！”', en: 'And how can anyone preach unless they are sent? As it is written: "How beautiful are the feet of those who bring good news!"' },
      { num: '10:17', zh: '可见，信道是从听道来的，听道是从基督的话来的。', en: 'Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.' }
    ]
  },
  {
    lessonNumber: 16,
    weekNumber: 17,
    startDate: '2027-01-09',
    titleZh: '第16课：神未曾弃绝百姓—蒙恩的余民',
    titleEn: 'Lesson 16: The Remnant Chosen by Grace',
    referenceZh: '罗马书 11:1-12',
    referenceEn: 'Romans 11:1-12',
    keyVerseZh: '既是出于恩典，就不在乎行为；不然，恩典就不是恩典了。',
    keyVerseRefZh: '罗马书 11:6',
    keyVerseEn: 'And if by grace, then it cannot be based on works; if it were, grace would no longer be grace.',
    keyVerseRefEn: 'Romans 11:6',
    keyTruthZh: '神按着恩典的拣选保留了余民；救恩临到外邦人，反倒要激动以色列人发愤悔改。',
    keyTruthEn: 'God preserves a remnant chosen by grace; salvation to Gentiles provokes Israel to jealousy.',
    audioFileName: 'ROM_Lecture_16_MEN_062-42.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '我且说，神弃绝了他的百姓吗？断乎没有！因为我也是以色列人，亚伯拉罕的后裔，属便雅悯支派的。', en: 'I ask then: Did God reject his people? By no means! I am an Israelite myself, a descendant of Abraham, from the tribe of Benjamin.' },
      { num: 5, zh: '如今也是这样，照着拣选的恩典，还有所留的余数。', en: 'So too, at the present time there is a remnant chosen by grace.' },
      { num: 6, zh: '既是出于恩典，就不在乎行为；不然，恩典就不是恩典了。', en: 'And if by grace, then cannot be based on works; if it were, grace would no longer be grace.' }
    ]
  },
  {
    lessonNumber: 17,
    weekNumber: 18,
    startDate: '2027-01-16',
    titleZh: '第17课：接在橄榄树上—不可自夸反要惧怕',
    titleEn: 'Lesson 17: Grafted In: The Wild Olive Branch',
    referenceZh: '罗马书 11:13-24',
    referenceEn: 'Romans 11:13-24',
    keyVerseZh: '你不可自高，反要惧怕。神既不爱惜原来的枝子，也必不爱惜你。可见神的恩慈和严厉。',
    keyVerseRefZh: '罗马书 11:20下-22上',
    keyVerseEn: 'Do not be arrogant, but tremble. For if God did not spare the natural branches, he will not spare you either. Consider therefore the kindness and sternness of God.',
    keyVerseRefEn: 'Romans 11:20-22',
    keyTruthZh: '外邦信徒蒙恩得接在真橄榄树上，当存敬畏谦卑之心，切不可向本树枝子自夸。',
    keyTruthEn: 'Gentiles grafted into the rich olive root must live in humble reverence rather than haughty pride.',
    audioFileName: 'ROM_Lecture_17_MEN_062-43.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 17, zh: '若有几根枝子被折下来，你这野橄榄得接在其中，一同得着橄榄根的肥汁，', en: 'If some of the branches have been broken off, and you, though a wild olive shoot, have been grafted in among the others and now share in the nourishing sap from the olive root,' },
      { num: 18, zh: '你就不可向旧枝子夸口；若是夸口，当知道不是你托着根，乃是根托着你。', en: 'do not consider yourself to be superior to those other branches. If you do, consider this: You do not support the root, but the root supports you.' },
      { num: 20, zh: '不错！他们因为不信，所以被折下来；你因为信，所以立得住；你不可自高，反要惧怕。', en: 'Granted. But they were broken off because of unbelief, and you stand by faith. Do not be arrogant, but tremble.' }
    ]
  },
  {
    lessonNumber: 18,
    weekNumber: 19,
    startDate: '2027-01-23',
    titleZh: '第18课：以色列全家得救与万有归神的颂赞',
    titleEn: 'Lesson 18: All Israel Saved & Doxology to God',
    referenceZh: '罗马书 11:25-36',
    referenceEn: 'Romans 11:25-36',
    keyVerseZh: '深哉，神丰富的智慧和知识！他的判断何其难测！他的踪迹何其难寻！因为万有都是本于他，倚靠他，归于他。愿荣耀归给他，直到永远。阿们！',
    keyVerseRefZh: '罗马书 11:33, 36',
    keyVerseEn: 'Oh, the depth of the riches of the wisdom and knowledge of God! How unsearchable his judgments, and his paths beyond tracing out! For from him and through him and for him are all things. To him be the glory forever! Amen.',
    keyVerseRefEn: 'Romans 11:33, 36',
    keyTruthZh: '神奥秘的救赎计划彰显出无可测度的智慧与怜悯；万有都出于神、归于神，愿荣耀永归主名。',
    keyTruthEn: 'God’s glorious redemptive plan reveals infinite wisdom and mercy; all things are from Him and for Him.',
    audioFileName: 'ROM_Lecture_18_MEN_062-44.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 25, zh: '弟兄们，我不愿意你们不知道这奥秘，就是以色列人有几分是硬心的，等到外邦人的数目添满了，', en: 'I do not want you to be ignorant of this mystery, brothers and sisters, so that you may not be conceited: Israel has experienced a hardening in part until the full number of the Gentiles has come in,' },
      { num: 26, zh: '于是以色列全家都要得救。如经上所记：“必有一位救主从锡安出来，要消除雅各家的一切罪恶。”', en: 'and in this way all Israel will be saved. As it is written: "The deliverer will come from Zion; he will turn godlessness away from Jacob."' },
      { num: 33, zh: '深哉，神丰富的智慧和知识！他的判断何其难测！他的踪迹何其难寻！', en: 'Oh, the depth of the riches of the wisdom and knowledge of God! How unsearchable his judgments, and his paths beyond tracing out!' },
      { num: 36, zh: '因为万有都是本于他，倚靠他，归于他。愿荣耀归给他，直到永远。阿们！', en: 'For from him and through him and for him are all things. To him be the glory forever! Amen.' }
    ]
  },
  {
    lessonNumber: 19,
    weekNumber: 20,
    startDate: '2027-01-30',
    titleZh: '第19课：将身体献上活祭—心意更新而变化',
    titleEn: 'Lesson 19: Living Sacrifices & Transformed Minds',
    referenceZh: '罗马书 12:1-2',
    referenceEn: 'Romans 12:1-2',
    keyVerseZh: '所以弟兄们，我以神的慈悲劝你们，将身体献上，当作活祭，是圣洁的，是神所喜悦的；你们如此事奉乃是理所当然的。不要效法这个世界，只要心意更新而变化，叫你们察验何为神的善良、纯全、可喜悦的旨意。',
    keyVerseRefZh: '罗马书 12:1-2',
    keyVerseEn: 'Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship. Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.',
    keyVerseRefEn: 'Romans 12:1-2',
    keyTruthZh: '体会神的浩大慈悲，信徒应当以全人奉献当作活祭，脱离世俗模子，在心思意念上顺服神的旨意。',
    keyTruthEn: 'In view of God’s boundless mercy, believers offer their entire lives as living sacrifices transformed by renewed minds.',
    audioFileName: 'ROM_Lecture_19_MEN_062-45.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '所以弟兄们，我以神的慈悲劝你们，将身体献上，当作活祭，是圣洁的，是神所喜悦的；你们如此事奉乃是理所当然的。', en: 'Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.' },
      { num: 2, zh: '不要效法这个世界，只要心意更新而变化，叫你们察验何为神的善良、纯全、可喜悦的旨意。', en: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.' }
    ]
  },
  {
    lessonNumber: 20,
    weekNumber: 21,
    startDate: '2027-02-06',
    titleZh: '第20课：肢体配搭与真诚相爱的基督生活',
    titleEn: 'Lesson 20: One Body, Many Members & Love in Action',
    referenceZh: '罗马书 12:3-21',
    referenceEn: 'Romans 12:3-21',
    keyVerseZh: '爱人不可虚假；恶要厌恶，善要亲近。爱弟兄，要彼此亲热；恭敬人，要彼此推让。你不可为恶所胜，反要以善胜恶。',
    keyVerseRefZh: '罗马书 12:9-10, 21',
    keyVerseEn: 'Love must be sincere. Hate what is evil; cling to what is good. Be devoted to one one another in love. Honor one another above yourselves... Do not be overcome by evil, but overcome evil with good.',
    keyVerseRefEn: 'Romans 12:9-10, 21',
    keyTruthZh: '基督的爱在教会肢体中化为切实的谦卑服事与相爱，不与恶人相争，反倒以基督的良善战胜邪恶。',
    keyTruthEn: 'Sincere love expresses itself in humble servanthood among the body of Christ, overcoming evil with good.',
    audioFileName: 'ROM_Lecture_20_MEN_062-46.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 4, zh: '正如我们一个身子上有好些肢体，肢体也不都是一样的用处。', en: 'For just as each of us has one body with many members, and these members do not all have the same function,' },
      { num: 5, zh: '我们这许多人，在基督里成为一身，互相联络作肢体，也是如此。', en: 'so in Christ we, though many, form one body, and each member belongs to all the others.' },
      { num: 9, zh: '爱人不可虚假；恶要厌恶，善要亲近。', en: 'Love must be sincere. Hate what is evil; cling to what is good.' },
      { num: 10, zh: '爱弟兄，要彼此亲热；恭敬人，要彼此推让。', en: 'Be devoted to one another in love. Honor one another above yourselves.' },
      { num: 12, zh: '在指望中要喜乐，在患难中要忍耐，祷告要恒切。', en: 'Be joyful in hope, patient in affliction, faithful in prayer.' },
      { num: 21, zh: '你不可为恶所胜，反要以善胜恶。', en: 'Do not be overcome by evil, but overcome evil with good.' }
    ]
  },
  {
    lessonNumber: 21,
    weekNumber: 22,
    startDate: '2027-02-20',
    titleZh: '第21课：顺服权柄与披戴基督的圣洁行事',
    titleEn: 'Lesson 21: Submission to Authorities & Armor of Light',
    referenceZh: '罗马书 13:1-14',
    referenceEn: 'Romans 13:1-14',
    keyVerseZh: '凡事都不可亏欠人，惟有彼此相爱，要常以为亏欠；因为爱人的，就完全了律法。总要披戴主耶稣基督，不要为肉体安排去放纵私欲。',
    keyVerseRefZh: '罗马书 13:8, 14',
    keyVerseEn: 'Let no debt remain outstanding, except the continuing debt to love one another, for whoever loves others has fulfilled the law... Rather, clothe yourselves with the Lord Jesus Christ, and do not think about how to gratify the desires of the flesh.',
    keyVerseRefEn: 'Romans 13:8, 14',
    keyTruthZh: '顺服在上的掌权者以见证神的秩序；以爱常以为亏欠，黑夜已深，信徒当披戴主基督行在光明中。',
    keyTruthEn: 'Submit to authorities and fulfill the law through love; the night is nearly over, clothe yourselves with Christ.',
    audioFileName: 'ROM_Lecture_21_MEN_062-47.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '在上有权柄的，人人当顺服他，因为没有权柄不是出于神的。凡掌权的都是神所命的。', en: 'Let everyone be subject to the governing authorities, for there is no authority except that which God has established. The authorities that exist have been established by God.' },
      { num: 8, zh: '凡事都不可亏欠人，惟有彼此相爱，要常以为亏欠；因为爱人的，就完全了律法。', en: 'Let no debt remain outstanding, except the continuing debt to love one another, for whoever loves others has fulfilled the law.' },
      { num: 11, zh: '再者，你们晓得现今就是该趁早睡醒的时候；因为我们得救，现今比初信的时候更近了。', en: 'And do this, understanding the present time: The hour has already come for you to wake up from your slumber, because our salvation is nearer now than when we first believed.' },
      { num: 12, zh: '黑夜已深，白昼将近；我们就当脱去暗昧的行为，带上光明的兵器。', en: 'The night is nearly over; the day is almost here. So let us put aside the deeds of darkness and put on the armor of light.' },
      { num: 14, zh: '总要披戴主耶稣基督，不要为肉体安排，去放纵私欲。', en: 'Rather, clothe yourselves with the Lord Jesus Christ, and do not think about how to gratify the desires of the flesh.' }
    ]
  },
  {
    lessonNumber: 22,
    weekNumber: 23,
    startDate: '2027-02-27',
    titleZh: '第22课：信心软弱与坚固—不可彼此论断',
    titleEn: 'Lesson 22: The Weak and the Strong',
    referenceZh: '罗马书 14:1-12',
    referenceEn: 'Romans 14:1-12',
    keyVerseZh: '我们若活着，是为主而活；若死了，是为主而死。所以我们或活或死，总是主的人。因此基督死了又活了，为要作死人并活人的主。',
    keyVerseRefZh: '罗马书 14:8-9',
    keyVerseEn: 'If we live, we live for the Lord; and if we die, we die for the Lord. So, whether we live or die, we belong to the Lord. For this very reason, Christ died and returned to life so that he might be the Lord of both the dead and the living.',
    keyVerseRefEn: 'Romans 14:8-9',
    keyTruthZh: '信徒无论或生或死都属乎主，在非基要仪文与饮食习俗上要彼此接纳，不擅自论断弟兄。',
    keyTruthEn: 'Living or dying, we belong to the Lord; accept one another in debatable matters without passing judgment.',
    audioFileName: 'ROM_Lecture_22_MEN_062-48.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '信心软弱的，你们要接纳，但不要辩论所疑惑的事。', en: 'Accept the one whose faith is weak, without quarreling over disputable matters.' },
      { num: 7, zh: '我们没有一个人为自己活，也没有一个人为自己死。', en: 'For none of us lives for ourselves alone, and none of us dies for ourselves alone.' },
      { num: 8, zh: '我们若活着，是为主而活；若死了，是为主而死。所以，我们或活或死总是主的人。', en: 'If we live, we live for the Lord; and if we die, we die for the Lord. So, whether we live or die, we belong to the Lord.' },
      { num: 10, zh: '你这个人，为什么论断弟兄呢？又为什么轻看弟兄呢？因我们都要站在神的台前。', en: 'You, then, why do you judge your brother or sister? Or why do you treat them with contempt? For we will all stand before God’s judgment seat.' },
      { num: 12, zh: '这样看来，我们各人必要将自己的事在神面前说明。', en: 'So then, each of us will give an account of ourselves to God.' }
    ]
  },
  {
    lessonNumber: 23,
    weekNumber: 24,
    startDate: '2027-03-06',
    titleZh: '第23课：神国在乎公义和平—不使弟兄跌倒',
    titleEn: 'Lesson 23: Do Not Cause Anyone to Stumble',
    referenceZh: '罗马书 14:13-23',
    referenceEn: 'Romans 14:13-23',
    keyVerseZh: '因为神的国不在乎吃喝，只在乎公义、和平，并圣灵中的喜乐。在这几样上事奉基督的，就为神所喜悦，又为人所称许。',
    keyVerseRefZh: '罗马书 14:17-18',
    keyVerseEn: 'For the kingdom of God is not a matter of eating and drinking, but of righteousness, peace and joy in the Holy Spirit, because anyone who serves Christ in this way is pleasing to God and receives human approval.',
    keyVerseRefEn: 'Romans 14:17-18',
    keyTruthZh: '基督徒的自由当受爱心的约束；不叫弟兄因食物跌倒，追求和睦与建立德行才是神国的精髓。',
    keyTruthEn: 'Christian liberty is bounded by love; pursue what promotes peace and mutual edification.',
    audioFileName: 'ROM_Lecture_23_MEN_062-49.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 13, zh: '所以，我们不可再彼此论断，宁可定意谁也不给弟兄放下绊脚跌人之物。', en: 'Therefore let us stop passing judgment on one another. Instead, make up your mind not to put any stumbling block or obstacle in the way of a brother or sister.' },
      { num: 17, zh: '因为神的国不在乎吃喝，只在乎公义、和平，并圣灵中的喜乐。', en: 'For the kingdom of God is not a matter of eating and drinking, but of righteousness, peace and joy in the Holy Spirit,' },
      { num: 18, zh: '在这几样上事奉基督的，就为神所喜悦，又为人所称许。', en: 'because anyone who serves Christ in this way is pleasing to God and receives human approval.' },
      { num: 19, zh: '所以，我们务要追求和睦的事与彼此建立德行的事。', en: 'Let us therefore make every effort to do what leads to peace and to mutual edification.' }
    ]
  },
  {
    lessonNumber: 24,
    weekNumber: 25,
    startDate: '2027-03-13',
    titleZh: '第24课：彼此接纳同心颂赞—盼望之神充满喜乐',
    titleEn: 'Lesson 24: Accept One Another & The God of Hope',
    referenceZh: '罗马书 15:1-13',
    referenceEn: 'Romans 15:1-13',
    keyVerseZh: '但愿使人有盼望的神，因信将诸般的喜乐、平安充满你们的心，使你们藉着圣灵的能力大有盼望。',
    keyVerseRefZh: '罗马书 15:13',
    keyVerseEn: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.',
    keyVerseRefEn: 'Romans 15:13',
    keyTruthZh: '效法基督不求自己的喜悦，彼此接纳如基督接纳我们，使荣耀归给神；盼望之神必赐丰盛平安。',
    keyTruthEn: 'Accept one another as Christ accepted you to bring praise to God; may the God of hope fill you with joy.',
    audioFileName: 'ROM_Lecture_24_MEN_062-50.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '我们坚固的人应该担代不坚固人的软弱，不求自己的喜悦。', en: 'We who are strong ought to bear with the failings of the weak and not to please ourselves.' },
      { num: 2, zh: '我们各人务要叫邻舍喜悦，使他得益处，建立德行。', en: 'Each of us should please our neighbors for their good, to build them up.' },
      { num: 7, zh: '所以，你们要彼此接纳，如同基督接纳你们一样，使荣耀归与神。', en: 'Accept one another, then, just as Christ accepted you, in order to bring praise to God.' },
      { num: 13, zh: '但愿使人有盼望的神，因信将诸般的喜乐、平安充满你们的心，使你们藉着圣灵的能力大有盼望。', en: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.' }
    ]
  },
  {
    lessonNumber: 25,
    weekNumber: 26,
    startDate: '2027-03-20',
    titleZh: '第25课：保罗的宣教宣召与异象托付',
    titleEn: 'Lesson 25: Paul’s Missionary Ambition & Prayers',
    referenceZh: '罗马书 15:14-33',
    referenceEn: 'Romans 15:14-33',
    keyVerseZh: '我立了志向，不在基督的名被称过的地方传福音，免得建造在别人的根基上。',
    keyVerseRefZh: '罗马书 15:20',
    keyVerseEn: 'It has always been my ambition to preach the gospel where Christ was not known, so that I would not be building on someone else’s foundation.',
    keyVerseRefEn: 'Romans 15:20',
    keyTruthZh: '未得之民的呼求催逼福音使者前行，宣教是整个教会藉着代祷与奉献一同竭力同行的圣工。',
    keyTruthEn: 'Paul’s passion to preach where Christ is not yet known models sacrificial devotion and urgent prayer fellowship.',
    audioFileName: 'ROM_Lecture_25_MEN_062-51.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 17, zh: '所以论到神的事，我在基督耶稣里有可夸的。', en: 'Therefore I glory in Christ Jesus in my service to God.' },
      { num: 20, zh: '我立了志向，不在基督的名被称过的地方传福音，免得建造在别人的根基上。', en: 'It has always been my ambition to preach the gospel where Christ was not known, so that I would not be building on someone else’s foundation.' },
      { num: 30, zh: '弟兄们，我藉着我们主耶稣基督，又藉着圣灵的爱，劝你们与我一同竭力，为我祈求神，', en: 'I urge you, brothers and sisters, by our Lord Jesus Christ and by the love of the Spirit, to join me in my struggle by praying to God for me.' },
      { num: 33, zh: '愿赐平安的神常和你们众人同在。阿们！', en: 'The God of peace be with you all. Amen.' }
    ]
  },
  {
    lessonNumber: 26,
    weekNumber: 27,
    startDate: '2027-04-10',
    titleZh: '第26课：同工问安与主里深切情谊',
    titleEn: 'Lesson 26: Personal Greetings & Fellowship of Saints',
    referenceZh: '罗马书 16:1-16',
    referenceEn: 'Romans 16:1-16',
    keyVerseZh: '问坚革哩教会中的女执事非比安…问百基拉和亚居拉安。他们在基督耶稣里与我同工，也为我的命将自己的颈项置之度外。',
    keyVerseRefZh: '罗马书 16:1, 3-4',
    keyVerseEn: 'I commend to you our sister Phoebe, a deacon of the church in Cenchreae... Greet Priscilla and Aquila, my co-workers in Christ Jesus. They risked their lives for me.',
    keyVerseRefEn: 'Romans 16:1, 3-4',
    keyTruthZh: '福音的事工离不开众同工在主里的舍命相随与忠心守望，神记念每一个在隐藏中忠心服事的名字。',
    keyTruthEn: 'God honors every loyal servant and partner in gospel ministry through rich, interdependent fellowship.',
    audioFileName: 'ROM_Lecture_26_MEN_062-52.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 1, zh: '我对你们举荐我们的姊妹非比，她是坚革哩教会中的女执事。', en: 'I commend to you our sister Phoebe, a deacon of the church in Cenchreae.' },
      { num: 3, zh: '问百基拉和亚居拉安。他们在基督耶稣里与我同工，', en: 'Greet Priscilla and Aquila, my co-workers in Christ Jesus.' },
      { num: 4, zh: '也为我的命将自己的颈项置之度外。不但我感谢他们，就是外邦的众教会也感谢他们。', en: 'They risked their lives for me. Not only I but all the churches of the Gentiles are grateful to them.' },
      { num: 16, zh: '你们亲嘴问安，彼此务要圣洁。基督的众教会都问你们安。', en: 'Greet one another with a holy kiss. All the churches of Christ send greetings.' }
    ]
  },
  {
    lessonNumber: 27,
    weekNumber: 28,
    startDate: '2027-04-17',
    titleZh: '第27课：防备离间诱惑与永古奥秘的颂赞',
    titleEn: 'Lesson 27: Warning Against Divisiveness & Final Doxology',
    referenceZh: '罗马书 16:17-27',
    referenceEn: 'Romans 16:17-27',
    keyVerseZh: '赐平安的神快要将撒但践踏在你们脚下。愿我们主耶稣基督的恩常和你们同在！惟有神能照我所传的福音和所讲的耶稣基督…坚固你们的心。',
    keyVerseRefZh: '罗马书 16:20, 25',
    keyVerseEn: 'The God of peace will soon crush Satan under your feet. The grace of our Lord Jesus be with you... Now to him who is able to establish you in accordance with my gospel...',
    keyVerseRefEn: 'Romans 16:20, 25',
    keyTruthZh: '谨慎防备勾引人离弃真道的纷争；赐平安的神必践踏撒但，荣耀归给独一全智的神。',
    keyTruthEn: 'Beware of deceptive divisions; the God of peace will crush Satan underfoot. Glory to the only wise God!',
    audioFileName: 'ROM_Lecture_27_MEN_062-53.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: 17, zh: '弟兄们，那些离间你们、叫你们跌倒、背乎所学之道的人，我劝你们要留意躲避他们。', en: 'I urge you, brothers and sisters, to watch out for those who cause divisions and put obstacles in your way that are contrary to the teaching you have learned. Keep away from them.' },
      { num: 19, zh: '你们的顺服已经传于众人，所以我为你们欢喜；但我愿你们在善上聪明，在恶上愚拙。', en: 'Everyone has heard about your obedience, so I rejoice because of you; but I want you to be wise about what is good, and innocent about what is evil.' },
      { num: 20, zh: '赐平安的神快要将撒但践踏在你们脚下。愿我们主耶稣基督的恩常和你们同在！', en: 'The God of peace will soon crush Satan under your feet. The grace of our Lord Jesus be with you.' },
      { num: 25, zh: '惟有神能照我所传的福音和所讲的耶稣基督，并照永古隐藏不言的奥秘，坚固你们的心。', en: 'Now to him who is able to establish you in accordance with my gospel, the message I proclaim about Jesus Christ, in keeping with the revelation of the mystery hidden for long ages past,' },
      { num: 27, zh: '愿荣耀，因耶稣基督，归与独一全智的神，直到永远。阿们！', en: 'to the only wise God be glory forever through Jesus Christ! Amen.' }
    ]
  },
  {
    lessonNumber: 28,
    weekNumber: 29,
    startDate: '2027-04-24',
    titleZh: '第28课：罗马书 1-8章 核心教义总复习',
    titleEn: 'Lesson 28: Review of Romans 1-8',
    referenceZh: '罗马书 1:16-17; 3:23-24; 5:1; 8:1, 38-39',
    referenceEn: 'Romans 1:16-17; 3:23-24; 5:1; 8:1, 38-39',
    keyVerseZh: '如今，那些在基督耶稣里的就不定罪了。神既不爱惜自己的儿子，为我们众人舍了，岂不也把万物和他一同白白地赐给我们吗？',
    keyVerseRefZh: '罗马书 8:1, 32',
    keyVerseEn: 'Therefore, there is now no condemnation for those who are in Christ Jesus... He who did not spare his own Son, but gave him up for us all—how will he not also, along with him, graciously give us all things?',
    keyVerseRefEn: 'Romans 8:1, 32',
    keyTruthZh: '从普遍定罪到恩典称义，再到圣灵成圣与永恒荣耀，基督的福音是神完备救恩的大能。',
    keyTruthEn: 'From condemnation to justification, sanctification, and eternal glorification—the gospel is complete divine triumph.',
    audioFileName: 'ROM_Lecture_28_MEN_062-54.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: '1:16', zh: '我不以福音为耻；这福音本是神的大能，要救一切相信的，先是犹太人，后是希利尼人。', en: 'For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.' },
      { num: '3:23', zh: '因为世人都犯了罪，亏缺了神的荣耀；如今却蒙神的恩典，因基督耶稣的救赎，就白白地称义。', en: 'for all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus.' },
      { num: '5:1', zh: '我们既因信称义，就藉着我们的主耶稣基督得与神相和。', en: 'Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ,' },
      { num: '8:1', zh: '如今，那些在基督耶稣里的就不定罪了。', en: 'Therefore, there is now no condemnation for those who are in Christ Jesus,' },
      { num: '8:39', zh: '都不能叫我们与神的爱隔绝；这爱是在我们的主基督耶稣里的。', en: 'will be able to separate us from the love of God that is in Christ Jesus our Lord.' }
    ]
  },
  {
    lessonNumber: 29,
    weekNumber: 30,
    startDate: '2027-05-01',
    titleZh: '第29课：罗马书 9-16章 生命践行总复习与结语',
    titleEn: 'Lesson 29: Review of Romans 9-16 & Conclusion',
    referenceZh: '罗马书 10:9; 11:36; 12:1-2; 15:13',
    referenceEn: 'Romans 10:9; 11:36; 12:1-2; 15:13',
    keyVerseZh: '深哉，神丰富的智慧和知识！因为万有都是本于他，倚靠他，归于他。愿荣耀归给他，直到永远。阿们！',
    keyVerseRefZh: '罗马书 11:33, 36',
    keyVerseEn: 'Oh, the depth of the riches of the wisdom and knowledge of God! For from him and through him and for him are all things. To him be the glory forever! Amen.',
    keyVerseRefEn: 'Romans 11:33, 36',
    keyTruthZh: '经历福音恩典之人，一生当以身体献上当作活祭，在爱与和睦中荣耀基督，奔走天路。',
    keyTruthEn: 'Transformed by grace, we offer our lives as living sacrifices, walking in love and doxology.',
    audioFileName: 'ROM_Lecture_29_MEN_062-55.mp3',
    speakerZh: 'Paul Huang (DAOT-CA)',
    speakerEn: 'Paul Huang (DAOT-CA)',
    fullVerses: [
      { num: '10:9', zh: '你若口里认耶稣为主，心里信神叫他从死里复活，就必得救。', en: 'If you declare with your mouth, "Jesus is Lord," and believe in your heart that God raised him from the dead, you will be saved.' },
      { num: '11:36', zh: '因为万有都是本于他，倚靠他，归于他。愿荣耀归给他，直到永远。阿们！', en: 'For from him and through him and for him are all things. To him be the glory forever! Amen.' },
      { num: '12:1', zh: '所以弟兄们，我以神的慈悲劝你们，将身体献上，当作活祭，是圣洁的，是神所喜悦的；你们如此事奉乃是理所当然的。', en: 'Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.' },
      { num: '15:13', zh: '但愿使人有盼望的神，因信将诸般的喜乐、平安充满你们的心，使你们藉着圣灵的能力大有盼望。', en: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.' }
    ]
  }
];

/**
 * Calculates current active lesson according to user's specification:
 * - 09/14 week is Lesson 0.
 * - Before end of week 09/14 (i.e. up through Friday Sep 18, 2026), show class 0.
 * - From Saturday Sep 19, 2026, switch to class 1.
 * - From subsequent Saturdays, continue switching (Lesson 2 on Sep 26, Lesson 3 on Oct 3, etc.).
 */
export function getCurrentLessonIndex(currentDate: Date = new Date()): number {
  // Target Saturday transition: 2026-09-19T00:00:00
  // Note: Using standard date comparison in local/target timezone
  const year = currentDate.getFullYear();
  
  // If in another year earlier than 2026, or earlier than Sep 19, 2026:
  const lesson1Start = new Date(2026, 8, 19, 0, 0, 0); // Month is 0-indexed, 8 = September
  if (currentDate < lesson1Start) {
    return 0; // Class 0 (Lesson 0)
  }

  const diffMs = currentDate.getTime() - lesson1Start.getTime();
  const weekOffset = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
  const lessonIdx = 1 + weekOffset;

  return Math.min(29, Math.max(0, lessonIdx));
}
