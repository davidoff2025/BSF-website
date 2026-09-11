import { WeeklyBundleData } from '../types';
import { BSF_AUDIO_LECTURES, WEEKLY_FOCUS_SCRIPTURES, BSF_HOMILETICS_ASSIGNMENTS } from './bsfData';

// Generate comprehensive weekly bundle data for all 30 weeks of the school year
export const BSF_WEEKLY_BUNDLES: WeeklyBundleData[] = [
  {
    week: 1,
    date: '2026-09-12',
    displayDateZh: '2026年09月12日 (第1周)',
    displayDateEn: 'Sep 12, 2026 (Week 1)',
    scriptureReferenceZh: '罗马书 1:1-17',
    scriptureReferenceEn: 'Romans 1:1-17',
    themeZh: '荣耀的福音与本乎信的义',
    themeEn: 'The Power of the Gospel & Righteousness by Faith',
    memoryVerseZh: '我不以福音为耻；这福音本是神的大能，要救一切相信的，先是犹太人，后是希利尼人。（罗马书 1:16）',
    memoryVerseEn: 'For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile. (Romans 1:16)',
    keyTruthZh: '福音不是人的道德劝善，而是神拯救的大能；神的义唯独藉着对耶稣基督的信赐给凡相信的人。',
    keyTruthEn: 'The gospel is not human moral philosophy, but God’s sovereign saving power received through faith in Jesus Christ alone.',
    lectureFileName: 'ROM_Lecture_00_MEN_062-26.mp2',
    speakerZh: 'Paul Huang (黄同工)',
    speakerEn: 'Paul Huang',
    audioDuration: '45:20',
    versesZh: [
      '耶稣基督的仆人保罗，奉召为使徒，特派传神的福音。',
      '这福音是神从前藉众先知在圣经上所应许的，',
      '论到他儿子—我主耶稣基督。按肉体说，是从大卫后裔生的；',
      '按圣善的灵说，因从死里复活，以大能显明是神的儿子。',
      '我不以福音为耻；这福音本是神的大能，要救一切相信的，先是犹太人，后是希利尼人。',
      '因为神的义正在这福音上显明出来；这义是本于信，以致于信。如经上所记：「义人必因信得生。」'
    ],
    versesEn: [
      'Paul, a servant of Christ Jesus, called to be an apostle and set apart for the gospel of God—',
      'the gospel he promised beforehand through his prophets in the Holy Scriptures',
      'regarding his Son, who as to his earthly life was a descendant of David,',
      'and who through the Spirit of holiness was appointed the Son of God in power by his resurrection from the dead: Jesus Christ our Lord.',
      'For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.',
      'For in the gospel the righteousness of God is revealed—a righteousness that is by faith from first to last, just as it is written: "The righteous will live by faith."'
    ],
    notesZh: {
      divisions: [
        {
          range: '罗 1:1-7',
          title: '使徒保罗的身份与所传之福音',
          explanation: '保罗宣告自己是基督仆人与奉召使徒，福音是以基督的降生、受死与复活为核心，赐给万邦叫人为祂的名信服真道。'
        },
        {
          range: '罗 1:8-15',
          title: '保罗对罗马信徒切慕探访的牧者情怀',
          explanation: '保罗不住为罗马教会感恩代祷，深切渴望与他们相见，不仅坚固他们的信心，也在他们中间得着属灵的果子，尽福音欠债之人的本分。'
        },
        {
          range: '罗 1:16-17',
          title: '全书主题：不以福音为耻与因信称义',
          explanation: '福音是神拯救的大能，神的义借着福音显明，唯独信靠基督的义人必因信得生。'
        }
      ],
      historicalContext: '保罗约于公元57年从哥林多写信给罗马教会。此时罗马教会包含犹太基督徒与外邦基督徒，因革老丢驱逐令撤销后双方融合产生张力。保罗系统性陈明纯正福音，为西班牙宣教作预备。',
      theologicalTruth: '神的义不在乎人的律法功德，而在乎基督的救赎。救恩始于神的主权与恩典，藉着信心归算给凡相信的人。',
      practicalApplication: [
        '省察自己在面对世俗文化与怀疑论时，是否敢于放胆不以基督福音为耻？',
        '在职场、家庭中如何活出“欠福音债”的迫切宣教与见证心志？',
        '每天的生活依靠自己的感觉与表现，还是单单安息在因信称义的真理上？'
      ]
    },
    notesEn: {
      divisions: [
        {
          range: 'Rom 1:1-7',
          title: 'Apostolic Calling & Gospel Centered in Christ',
          explanation: 'Paul identifies as a servant of Christ, set apart for the gospel promised in the prophetic scriptures concerning Jesus.'
        },
        {
          range: 'Rom 1:8-15',
          title: 'Pastoral Longing for Mutual Encouragement',
          explanation: 'Paul’s persistent prayers and joyful obligation to impart spiritual gifts among believers in Rome.'
        },
        {
          range: 'Rom 1:16-17',
          title: 'Programmatic Thesis: Righteousness by Faith',
          explanation: 'The gospel is the power of God for salvation; the righteous shall live by faith from first to last.'
        }
      ],
      historicalContext: 'Written from Corinth circa AD 57 to the ethnically mixed church in Rome, providing theological unity and preparing for westward mission.',
      theologicalTruth: 'Righteousness is God’s gift imparted freely through Christ, received solely by faith.',
      practicalApplication: [
        'Do I unashamedly stand for the truth of the gospel in modern secular culture?',
        'How do I express spiritual debt to share Christ with neighbors and colleagues?',
        'Is my daily peace founded on my performance or on Christ’s imputed righteousness?'
      ]
    },
    dailyQuestions: [
      {
        day: 1,
        dayTitleZh: '第一天：通读罗马书 1:1-17 并观察背景',
        dayTitleEn: 'Day 1: Read Romans 1:1-17 & Overview',
        scriptureReference: '罗 1:1-17',
        questionZh: '保罗在第1-4节如何描述自己的身份，以及福音的核心是关于谁？',
        questionEn: 'How does Paul describe his calling in verses 1-4, and who is the focal center of the gospel?',
        reflectionHintZh: '注意“耶稣基督的仆人”、“奉召为使徒”以及基督按肉体是大卫后裔、按圣善之灵从死里复活的神性。',
        reflectionHintEn: 'Focus on servant, called apostle, and the dual revelation of Christ’s humanity and deity.'
      },
      {
        day: 2,
        dayTitleZh: '第二天：研读 1:5-7 福音的目的与信服真道',
        dayTitleEn: 'Day 2: Romans 1:5-7 Obedience of Faith',
        scriptureReference: '罗 1:5-7',
        questionZh: '保罗领受这使徒职分是为了在万国中达成什么果效？这对我们理解“信心”有什么启发？',
        questionEn: 'What is the purpose of Paul receiving apostleship among all nations? What does "obedience that comes from faith" mean?',
        reflectionHintZh: '真实的得救信心必定结出对基督敬畏与顺服的果子。',
        reflectionHintEn: 'Genuine saving faith always yields loving obedience.'
      },
      {
        day: 3,
        dayTitleZh: '第三天：研读 1:8-12 团契互勉与代祷',
        dayTitleEn: 'Day 3: Romans 1:8-12 Mutual Faith & Prayer',
        scriptureReference: '罗 1:8-12',
        questionZh: '保罗为何切切想见罗马信徒？他在祷告中展现了怎样的牧养与同工心肠？',
        questionEn: 'Why did Paul long to visit Rome, and what does his prayer life reveal about mutual edification?',
        reflectionHintZh: '属灵恩赐的分享是双向的，同工与信徒在彼此的信心里同得安慰。',
        reflectionHintEn: 'Spiritual fellowship is reciprocal encouragement.'
      },
      {
        day: 4,
        dayTitleZh: '第四天：研读 1:13-15 福音的债与宣教心志',
        dayTitleEn: 'Day 4: Romans 1:13-15 Debtor to the Gospel',
        scriptureReference: '罗 1:13-15',
        questionZh: '保罗说“无论是希利尼人、化外人…我都欠他们的债”，这种“福音之债”的意识对你今天有何触动？',
        questionEn: 'What does Paul mean by saying he is an obligated debtor to all people? How does this challenge your witness?',
        reflectionHintZh: '蒙受浩大恩典的人，看待未信者不是居高临下，而是怀揣偿还救恩恩典的谦卑与迫切。',
        reflectionHintEn: 'Grace creates an urgent, humble debt to share salvation.'
      },
      {
        day: 5,
        dayTitleZh: '第五天：精读 1:16-17 神的大能与因信得生',
        dayTitleEn: 'Day 5: Romans 1:16-17 The Power of God',
        scriptureReference: '罗 1:16-17',
        questionZh: '为什么保罗说他“不以福音为耻”？“神的义本于信，以致于信”是什么意思？',
        questionEn: 'Why is Paul not ashamed of the gospel? How is God’s righteousness revealed from faith to faith?',
        reflectionHintZh: '在当时罗马帝国以权力和荣耀为尊的社会里，十字架看似软弱，却是造物主拯救罪人的最高能力。',
        reflectionHintEn: 'The cross appears weak to the world but is divine omnipotence.'
      },
      {
        day: 6,
        dayTitleZh: '第六天：小组讨论准备与生命应用',
        dayTitleEn: 'Day 6: Group Discussion Prep & Application',
        scriptureReference: '罗 1:1-17',
        questionZh: '结合本周研经，写下一条你在家庭或职场中立志活出“不以福音为耻”的切实行动。',
        questionEn: 'Write down one concrete step to demonstrate being unashamed of Christ in your family or work this week.',
        reflectionHintZh: '可以在小组中真诚分享并请同组弟兄姐妹为你代祷。',
        reflectionHintEn: 'Share in small group fellowship and pray together.'
      }
    ]
  },
  {
    week: 2,
    date: '2026-09-19',
    displayDateZh: '2026年09月19日 (第2周)',
    displayDateEn: 'Sep 19, 2026 (Week 2)',
    scriptureReferenceZh: '罗马书 1:18-32',
    scriptureReferenceEn: 'Romans 1:18-32',
    themeZh: '神的忿怒显明与造物主的普遍启示',
    themeEn: 'God’s Wrath Revealed Against All Ungodliness',
    memoryVerseZh: '自从造天地以来，神的永能和神性是明明可知的，虽是眼不能见，但藉着所造之物就可以晓得，叫人无可推诿。（罗马书 1:20）',
    memoryVerseEn: 'For since the creation of the world God’s invisible qualities—his eternal power and divine nature—have been clearly seen, being understood from what has been made, so that people are without excuse. (Romans 1:20)',
    keyTruthZh: '受造宇宙处处彰显神的永能神性；人蓄意压制真理并拜受造物，在公义圣洁的神面前无可推诿。',
    keyTruthEn: 'Creation displays God’s eternal power and majesty; suppressing truth in unrighteousness leaves all humanity without excuse.',
    lectureFileName: 'ROM_Lecture_01_MEN_062-27.mp3',
    speakerZh: 'Paul Huang (黄同工)',
    speakerEn: 'Paul Huang',
    audioDuration: '43:10',
    versesZh: [
      '原来，神的忿怒从天上显明在一切不虔不义的人身上，就是那些行不义阻挡真理的人。',
      '神的事情，人所能知道的，原显明在人心里，因为神已经给他们显明。',
      '自从造天地以来，神的永能和神性是明明可知的，虽是眼不能见，但藉着所造之物就可以晓得，叫人无可推诿。',
      '因为，他们虽然知道神，却不当作神荣耀他，也不感谢他。他们的思念变为虚妄，无知的心就昏暗了。',
      '所以，神任凭他们逞着心里的情欲行污秽的事，以致彼此玷辱自己的身体。',
      '他们既然故意不认识神，神就任凭他们存邪僻的心，行那些不合理的事。'
    ],
    versesEn: [
      'The wrath of God is being revealed from heaven against all the godlessness and wickedness of people, who suppress the truth by their wickedness,',
      'since what may be known about God is plain to them, because God has made it plain to them.',
      'For since the creation of the world God’s invisible qualities—his eternal power and divine nature—have been clearly seen, being understood from what has been made, so that people are without excuse.',
      'For although they knew God, they neither glorified him as God nor gave thanks to him, but their thinking became futile and their foolish hearts were darkened.',
      'Therefore God gave them over in the sinful desires of their hearts to sexual impurity for the degrading of their bodies with one another.',
      'Furthermore, just as they did not think it worthwhile to retain the knowledge of God, so God gave them over to a depraved mind, so that they do what ought not to be done.'
    ],
    notesZh: {
      divisions: [
        {
          range: '罗 1:18-23',
          title: '普遍启示与蓄意压制真理的罪',
          explanation: '造物主将永能与神性藉受造之物显明，然而人却以偶像替代真神，心志昏暗。'
        },
        {
          range: '罗 1:24-27',
          title: '神的任凭与逆性的道德瓦解',
          explanation: '弃绝神的荣耀导致道德崩解，神任凭人放纵肉体情欲，自食其果。'
        },
        {
          range: '罗 1:28-32',
          title: '存邪僻的心与公义审判的严厉',
          explanation: '人不但自己行恶，还喜欢别人去行，证明全人类在圣洁律法前无可推诿。'
        }
      ],
      historicalContext: '保罗描绘罗马帝国繁华外表下的深重道德危机。当时罗马希腊崇拜众多假神与偶像，同性纵欲泛滥。保罗指明这不是文化演进，而是背弃真神的结果。',
      theologicalTruth: '神的忿怒并非失控的情绪暴怒，而是圣洁公义对罪恶的必然圣洁反应。离开神恩典的人类必然走向自我毁灭。',
      practicalApplication: [
        '在我心中是否有任何受造物（金钱、声誉、孩子、工作）正在悄悄取代造物主的宝座？',
        '面对现代社会对罪恶的合理化与美化，我是否具备按真理分辨的属灵警醒？',
        '更加深刻地体会：若非十字架赦罪恩典，我们在神面前同样无可推诿。'
      ]
    },
    notesEn: {
      divisions: [
        {
          range: 'Rom 1:18-23',
          title: 'General Revelation & Suppressing the Truth',
          explanation: 'Creation speaks loudly of God’s invisible attributes, yet humanity exchanges His glory for idolatrous images.'
        },
        {
          range: 'Rom 1:24-27',
          title: 'Divine Abandonment to Degrading Passions',
          explanation: 'God giving over sinful hearts to moral decline as a consequence of spiritual betrayal.'
        },
        {
          range: 'Rom 1:28-32',
          title: 'Depraved Mind & Universal Guilt',
          explanation: 'The catalog of sins demonstrating that without Christ, all stand justly condemned.'
        }
      ],
      historicalContext: 'Paul confronts Greco-Roman pagan polytheism and moral decay, demonstrating universal guilt.',
      theologicalTruth: 'God’s wrath is His holy, steady opposition to evil, showing why the gospel is indispensable.',
      practicalApplication: [
        'Examine what subtle idols of success or self-reliance compete with God in your heart.',
        'Discern cultural trends through the lens of God’s holiness rather than popularity.',
        'Praise God for rescuing us from divine judgment through Christ.'
      ]
    },
    dailyQuestions: [
      {
        day: 1,
        dayTitleZh: '第一天：通读罗马书 1:18-32',
        dayTitleEn: 'Day 1: Read Romans 1:18-32',
        scriptureReference: '罗 1:18-32',
        questionZh: '保罗在本段指出“神的忿怒”是向谁显明？他们具体作了什么？',
        questionEn: 'Against whom is the wrath of God revealed, and what is their fundamental sin?',
        reflectionHintZh: '向一切不虔不义、行不义阻挡真理的人显明。',
        reflectionHintEn: 'Against all godlessness and wickedness of people who suppress the truth.'
      },
      {
        day: 2,
        dayTitleZh: '第二天：研读 1:19-21 普遍启示与无可推诿',
        dayTitleEn: 'Day 2: Romans 1:19-21 Inexcusable Creation',
        scriptureReference: '罗 1:19-21',
        questionZh: '为什么说世人面对神“无可推诿”？普遍启示向人启示了神的哪些属性？',
        questionEn: 'Why does Paul say humanity is without excuse before the Creator?',
        reflectionHintZh: '大自然与良心明明可知神的永能与神性。',
        reflectionHintEn: 'Eternal power and divine nature are clearly seen through creation.'
      },
      {
        day: 3,
        dayTitleZh: '第三天：研读 1:22-25 偶像崇拜的本质',
        dayTitleEn: 'Day 3: Romans 1:22-25 Exchanging the Glory',
        scriptureReference: '罗 1:22-25',
        questionZh: '世人如何把“不能朽坏之神的荣耀”变为偶像？在今天的生活中有哪些隐形偶像？',
        questionEn: 'How did humanity exchange the glory of immortal God? What are modern subtle idols?',
        reflectionHintZh: '拜受造之物而不敬拜造物主；现代偶像包括金钱权力与自我的荣光。',
        reflectionHintEn: 'Worshiping the creature rather than the Creator.'
      },
      {
        day: 4,
        dayTitleZh: '第四天：研读 1:24-27 神三次“任凭”的严重后果',
        dayTitleEn: 'Day 4: Romans 1:24-27 God Gave Them Over',
        scriptureReference: '罗 1:24-27',
        questionZh: '经文中三次提到“神任凭他们”，这反映了罪恶发展怎样的属灵规律？',
        questionEn: 'Notice the repeated phrase "God gave them over." What spiritual law of sin does this reveal?',
        reflectionHintZh: '罪最大的惩罚之一就是让人在自己的罪中继续放纵并自食其果。',
        reflectionHintEn: 'Sin’s worst judgment is being abandoned to its self-destructive desires.'
      },
      {
        day: 5,
        dayTitleZh: '第五天：研读 1:28-32 罪的蔓延与良心泯灭',
        dayTitleEn: 'Day 5: Romans 1:28-32 Depraved Mind & Judgment',
        scriptureReference: '罗 1:28-32',
        questionZh: '在第29-31节罗列的各样不义中，哪一项最令你感到警惕？第32节表明人的心智堕落到何种地步？',
        questionEn: 'Which vice in verses 29-31 speaks most directly to your daily life? How does verse 32 show the depth of human corruption?',
        reflectionHintZh: '不仅自己作恶，还赞同行恶之人，剥夺了对道德公义的敬畏。',
        reflectionHintEn: 'Approving evil in others marks hardened spiritual rebellion.'
      },
      {
        day: 6,
        dayTitleZh: '第六天：小组反省与本周讲道法作业对照',
        dayTitleEn: 'Day 6: Reflection & Homiletics Check',
        scriptureReference: '罗 1:18-32',
        questionZh: '面对神忿怒的严峻现实，我们如何更加为基督在十字架上替代我们承受忿怒而感恩？',
        questionEn: 'In light of God’s holy wrath, how does your heart praise Christ who bore this wrath for you on the cross?',
        reflectionHintZh: '恩典只有在认清罪的可怕背景下，才显出其无比的荣美与贵重。',
        reflectionHintEn: 'Grace shines brightest against the dark backdrop of judgment.'
      }
    ],
    homileticsInfo: {
      topicZh: '第1次讲道法作业：神对不虔不义之人的忿怒',
      topicEn: 'Homiletics Assignment #1: God’s Wrath Revealed',
      dueDate: '2026-09-22',
      divisions: [
        { verses: '罗 1:18-23', titleZh: '一、故意压制真理与拜偶像的愚妄', principleZh: '当人拒绝造物主真光时，心智必陷于昏暗与虚妄。' },
        { verses: '罗 1:24-27', titleZh: '二、神的任凭与逆性放纵的恶果', principleZh: '弃绝神的荣耀必导致道德与身体的彻底贬抑。' },
        { verses: '罗 1:28-32', titleZh: '三、存邪僻心与无可推诿的公义审判', principleZh: '故意不认识神必面临终极严厉的公义审判。' }
      ],
      subjectSentenceZh: '神忿怒显明，因世人故意弃绝造物主真理。',
      aimZh: '促使学员认清罪的可怕本质，单单敬畏并仰赖神的恩典福音。'
    }
  },
  {
    week: 3,
    date: '2026-09-26',
    displayDateZh: '2026年09月26日 (第3周)',
    displayDateEn: 'Sep 26, 2026 (Week 3)',
    scriptureReferenceZh: '罗马书 2:1-16',
    scriptureReferenceEn: 'Romans 2:1-16',
    themeZh: '神不偏待人与公义的审判台',
    themeEn: 'God’s Righteous Judgment & Complete Impartiality',
    memoryVerseZh: '因为神不偏待人。（罗马书 2:11）',
    memoryVerseEn: 'For God does not show favoritism. (Romans 2:11)',
    keyTruthZh: '神的审判按真理而行，绝不偏待人；神当下的宽容与忍耐，乃是要引人走向真正的省察与悔改。',
    keyTruthEn: 'God judges with unyielding equity according to truth; His long-suffering kindness is graciously aimed at leading us to repentance.',
    lectureFileName: 'ROM_Lecture_02_MEN_062-28.mp3',
    speakerZh: 'Paul Huang (黄同工)',
    speakerEn: 'Paul Huang',
    audioDuration: '44:40',
    versesZh: [
      '你这论断人的，无论你是谁，也无可推诿。你在什么事上论断人，就在什么事上定自己的罪；因你这论断人的，自己所行却和别人一样。',
      '我们知道这样行的人，神必照真理审判他。',
      '还是你藐视他丰富的恩慈、宽容、忍耐，不晓得他的恩慈是领你悔改呢？',
      '你竟任着你刚硬不悔改的心，为自己积蓄忿怒，以致神震怒，显他公义审判的日子来到。',
      '他必照各人的行为报应各人。',
      '因为神不偏待人。'
    ],
    versesEn: [
      'You, therefore, have no excuse, you who pass judgment on someone else, for at whatever point you judge another, you are condemning yourself, because you who pass judgment do the same things.',
      'Now we know that God’s judgment against those who do such things is based on truth.',
      'Or do you show contempt for the riches of his kindness, forbearance and patience, not realizing that God’s kindness is intended to lead you to repentance?',
      'But because of your stubbornness and your unrepentant heart, you are storing up wrath against yourself for the day of God’s wrath, when his righteous judgment will be revealed.',
      'God "will repay each person according to what they have done."',
      'For God does not show favoritism.'
    ],
    notesZh: {
      divisions: [
        {
          range: '罗 2:1-5',
          title: '自义论断者的伪善与神恩慈的真正目的',
          explanation: '道德主义者习惯定别人的罪，自己却行一样的事。神的宽容是领人悔改，而非纵容自义。'
        },
        {
          range: '罗 2:6-11',
          title: '照行为报应与神绝不偏待人的公义原则',
          explanation: '无论是犹太人还是外邦人，神按各人实际行为报应，在审判席前没有任何特权身份。'
        },
        {
          range: '罗 2:12-16',
          title: '律法与内心理性的良心见证',
          explanation: '外邦人虽无摩西律法，但良心功用如同刻在心上的律法；审判之日，神要借着耶稣基督审判人隐秘的事。'
        }
      ],
      historicalContext: '保罗将笔锋从第一章的外邦异教罪恶，转向第二章自以为义的犹太人与道德家。保罗拆毁一切宗教特权感，证明在神审判台前人人同等需要救恩。',
      theologicalTruth: '神的审判是根据真理（2:2）、根据积蓄的行为（2:6）、不偏待人（2:11）、且深入人内心隐秘事（2:16）。',
      practicalApplication: [
        '我是否经常在心里快速评判批评论断别人，却对自己同样的软弱视而不见？',
        '神的恩慈宽容是否促使我每天谦卑悔改，还是让我心存侥幸？',
        '铭记神看透隐秘之事的审判，促使我追求表里如一的圣洁生活。'
      ]
    },
    notesEn: {
      divisions: [
        {
          range: 'Rom 2:1-5',
          title: 'Hypocrisy of the Moral Judge',
          explanation: 'Those who judge others condemn themselves by doing the same things.'
        },
        {
          range: 'Rom 2:6-11',
          title: 'Judgment by Deeds Without Partiality',
          explanation: 'God rewards patient persistence in doing good and repays rebellion with wrath, showing no favoritism.'
        },
        {
          range: 'Rom 2:12-16',
          title: 'The Law Written on the Conscience',
          explanation: 'Gentiles without the written Torah possess conscience witnessing to divine moral order.'
        }
      ],
      historicalContext: 'Paul addresses the moralist and religious scholar who feel exempted from chapter 1’s critique.',
      theologicalTruth: 'God’s judgment is according to truth, deeds, equity, and the secrets of men through Christ.',
      practicalApplication: [
        'Examine habits of harsh criticism against others while excusing personal failings.',
        'Respond to God’s patience with ongoing repentance rather than presumption.',
        'Live in light of God evaluating secret motives, not just public images.'
      ]
    },
    dailyQuestions: [
      {
        day: 1,
        dayTitleZh: '第一天：通读罗马书 2:1-16',
        dayTitleEn: 'Day 1: Read Romans 2:1-16',
        scriptureReference: '罗 2:1-16',
        questionZh: '保罗在第1节为何说“你这论断人的无可推诿”？',
        questionEn: 'Why does Paul say the person passing judgment has no excuse in verse 1?',
        reflectionHintZh: '评判别人的标准恰恰成为定自己有罪的铁证。',
        reflectionHintEn: 'Judging others establishes the standard by which we ourselves are condemned.'
      },
      {
        day: 2,
        dayTitleZh: '第二天：研读 2:2-4 神的恩慈是领你悔改',
        dayTitleEn: 'Day 2: Romans 2:2-4 God’s Kindness to Repentance',
        scriptureReference: '罗 2:2-4',
        questionZh: '神对罪人的恩慈、宽容与忍耐，其真正目的为何？我们常常如何错误看待神的宽容？',
        questionEn: 'What is the purpose of God’s patience, and how do people dangerously abuse it?',
        reflectionHintZh: '恩慈是要领我们悔改，不可视之为神不会审判的放任。',
        reflectionHintEn: 'Kindness is an invitation to turn back to God, not license to sin.'
      },
      {
        day: 3,
        dayTitleZh: '第三天：研读 2:5-11 不偏待人的公义报应',
        dayTitleEn: 'Day 3: Romans 2:5-11 Impartial Judgment',
        scriptureReference: '罗 2:5-11',
        questionZh: '保罗如何说明神“必照各人的行为报应各人”？这与“神不偏待人”有何关联？',
        questionEn: 'How does Paul explain God repaying according to deeds without favoritism?',
        reflectionHintZh: '神不在乎人的宗教家世、种族血统，而在乎生命果子。',
        reflectionHintEn: 'God judges genuine fruit rather than outward religious credentials.'
      },
      {
        day: 4,
        dayTitleZh: '第四天：研读 2:12-16 听道与行道，律法与良心',
        dayTitleEn: 'Day 4: Romans 2:12-16 Doers of the Law & Conscience',
        scriptureReference: '罗 2:12-16',
        questionZh: '为什么“单单听道”不能在神面前称义？神如何藉着人的良心作见证？',
        questionEn: 'Why does merely hearing the law fail to justify? How does conscience function as an internal witness?',
        reflectionHintZh: '唯有行律法的才被称义；良心在人心里互相控告或思念。',
        reflectionHintEn: 'Hearing without doing is futile; conscience testifies internally.'
      },
      {
        day: 5,
        dayTitleZh: '第五天：研读 2:16 基督审判人隐秘的事',
        dayTitleEn: 'Day 5: Romans 2:16 Secrets Judged by Christ',
        scriptureReference: '罗 2:16',
        questionZh: '“审判人隐秘的事”对你内心的思想、动机与私底下的生活有何提醒？',
        questionEn: 'What does God judging human secrets mean for your private thoughts and daily motives?',
        reflectionHintZh: '提醒我们追求表里如一，依靠圣灵洁净隐秘的心思。',
        reflectionHintEn: 'Inspires deep integrity and longing for the Spirit’s cleansing.'
      },
      {
        day: 6,
        dayTitleZh: '第六天：小组反省与祷告',
        dayTitleEn: 'Day 6: Group Prayer & Practical Action',
        scriptureReference: '罗 2:1-16',
        questionZh: '本周你愿向神交托哪一件内心的自义或挑剔评判，求神赐下更新与恩典？',
        questionEn: 'What attitude of self-righteousness do you surrender to God today in prayer?',
        reflectionHintZh: '在祷告中感谢神不偏待人并赐下基督作为中保。',
        reflectionHintEn: 'Thank God for Jesus who alone fulfilled the law on our behalf.'
      }
    ]
  }
];

// Helper to fill out remaining weeks up to 30 with structured BSF curricula
for (let w = 4; w <= 30; w++) {
  const matchingLecture = BSF_AUDIO_LECTURES.find(l => l.week === w) || BSF_AUDIO_LECTURES[0];
  const padWeek = (w - 1).toString().padStart(2, '0');
  const fileSeq = 26 + w - 1;

  let scriptureRef = `罗马书第${w}讲相关经文`;
  let themeZh = `罗马书第${w}周系统释经与门徒实践`;
  let themeEn = `Romans Week ${w} Expository Study & Discipleship`;
  let memoryVerseZh = `深哉，神丰富的智慧和知识！祂的判断何其难测！祂的踪迹何其难寻！（罗 11:33）`;
  let memoryVerseEn = `Oh, the depth of the riches of the wisdom and knowledge of God! (Rom 11:33)`;

  if (w === 4) {
    scriptureRef = '罗马书 2:17-3:8';
    themeZh = '心里的真割礼与宗教自夸的破灭';
    themeEn = 'Circumcision of the Heart vs Religious Boasting';
    memoryVerseZh = '真割礼也是心里的，在乎灵，不在乎仪文。（罗马书 2:29）';
    memoryVerseEn: 'Circumcision is circumcision of the heart, by the Spirit. (Rom 2:29)';
  } else if (w === 5) {
    scriptureRef = '罗马书 3:9-31';
    themeZh = '世人皆罪与因信基督白白称义';
    themeEn = 'All Have Sinned & Justified Freely by His Grace';
    memoryVerseZh = '因为世人都犯了罪，亏缺了神的荣耀；如今却蒙神的恩典，因基督耶稣的救赎，就白白地称义。（罗马书 3:23-24）';
    memoryVerseEn = 'For all have sinned and fall short of the glory of God, and all are justified freely by his grace. (Rom 3:23-24)';
  } else if (w === 6) {
    scriptureRef = '罗马书 4:1-25';
    themeZh = '亚伯拉罕因信称义的范例';
    themeEn = 'Abraham’s Faith Credited as Righteousness';
    memoryVerseZh = '亚伯拉罕信神，这就算为他的义。（罗马书 4:3）';
    memoryVerseEn = 'Abraham believed God, and it was credited to him as righteousness. (Rom 4:3)';
  } else if (w === 7) {
    scriptureRef = '罗马书 5:1-11';
    themeZh = '与神相和与在患难中的喜乐';
    themeEn = 'Peace with God & Joy in Suffering';
    memoryVerseZh = '我们既因信称义，就藉着我们的主耶稣基督得与神相和。（罗马书 5:1）';
    memoryVerseEn = 'Since we have been justified through faith, we have peace with God through our Lord Jesus Christ. (Rom 5:1)';
  } else if (w === 8) {
    scriptureRef = '罗马书 5:12-21';
    themeZh = '在亚当里众人都死，在基督里丰盛恩典';
    themeEn = 'Death in Adam, Abundant Life in Christ';
    memoryVerseZh = '罪作王叫人死；恩典也藉着义作王，叫人因我们的主耶稣基督得永生。（罗 5:21）';
    memoryVerseEn = 'Grace might reign through righteousness to bring eternal life through Jesus Christ. (Rom 5:21)';
  } else if (w === 9) {
    scriptureRef = '罗马书 6:1-14';
    themeZh = '向罪看自己是死的，向神在基督里看自己是活的';
    themeEn = 'Dead to Sin, Alive to God in Christ';
    memoryVerseZh = '向罪也当看自己是死的；向神在基督耶稣里，却当看自己是活的。（罗 6:11）';
    memoryVerseEn = 'Count yourselves dead to sin but alive to God in Christ Jesus. (Rom 6:11)';
  } else if (w === 10) {
    scriptureRef = '罗马书 6:15-23';
    themeZh = '作义的奴仆与神白白的恩赐';
    themeEn = 'Slaves to Righteousness & The Gift of Eternal Life';
    memoryVerseZh = '因为罪的工价乃是死；惟有神的恩赐，在我们的主基督耶稣里，乃是永生。（罗 6:23）';
    memoryVerseEn = 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus. (Rom 6:23)';
  } else if (w === 11) {
    scriptureRef = '罗马书 7:1-25';
    themeZh = '律法的圣洁与信徒内心的属灵交战';
    themeEn = 'The Holiness of the Law & Inner Conflict';
    memoryVerseZh = '感谢神！靠着我们的主耶稣基督就能脱离了。（罗 7:25a）';
    memoryVerseEn = 'Thanks be to God, who delivers me through Jesus Christ our Lord! (Rom 7:25a)';
  } else if (w === 12) {
    scriptureRef = '罗马书 8:1-17';
    themeZh = '在基督里不定罪与随从圣灵的丰盛生命';
    themeEn = 'No Condemnation & Life in the Holy Spirit';
    memoryVerseZh = '如今，那些在基督耶稣里的就不定罪了。（罗 8:1）';
    memoryVerseEn = 'There is now no condemnation for those who are in Christ Jesus. (Rom 8:1)';
  } else if (w <= 16) {
    scriptureRef = '罗马书 8:18-39';
    themeZh = '将来的荣耀、圣灵叹息与得胜有余';
    themeEn = 'Future Glory, Spirit’s Intercession, More Than Conquerors';
    memoryVerseZh = '靠着爱我们的主，在这一切的事上已经得胜有余了。（罗 8:37）';
    memoryVerseEn = 'In all these things we are more than conquerors through him who loved us. (Rom 8:37)';
  } else if (w <= 20) {
    scriptureRef = '罗马书 9-11章';
    themeZh = '神的至高主权、拣选的恩典与以色列的救赎';
    themeEn = 'God’s Sovereign Purpose & Israel’s Future';
    memoryVerseZh = '深哉，神丰富的智慧和知识！（罗 11:33）';
    memoryVerseEn = 'Oh, the depth of the riches of the wisdom and knowledge of God! (Rom 11:33)';
  } else if (w <= 25) {
    scriptureRef = '罗马书 12-14章';
    themeZh = '活祭的敬拜、肢体彼此相爱与合一建造';
    themeEn = 'Living Sacrifice, Loving the Body, Building Unity';
    memoryVerseZh = '将身体献上，当作活祭，是圣洁的，是神所喜悦的。（罗 12:1）';
    memoryVerseEn: 'Offer your bodies as a living sacrifice, holy and pleasing to God. (Rom 12:1)';
  } else {
    scriptureRef = '罗马书 15-16章';
    themeZh = '普世宣教异象、同工问安与荣耀颂赞';
    themeEn = 'Global Mission Vision, Saints Fellowship & Doxology';
    memoryVerseZh = '但愿赐忍耐安慰的神叫你们彼此同心，效法基督耶稣。（罗 15:5）';
    memoryVerseEn = 'May the God who gives endurance and encouragement give you the same attitude of mind. (Rom 15:5)';
  }

  BSF_WEEKLY_BUNDLES.push({
    week: w,
    date: matchingLecture.date,
    displayDateZh: matchingLecture.displayDateZh,
    displayDateEn: matchingLecture.displayDateEn,
    scriptureReferenceZh: scriptureRef,
    scriptureReferenceEn: scriptureRef,
    themeZh: matchingLecture.titleZh || themeZh,
    themeEn: matchingLecture.titleEn || themeEn,
    memoryVerseZh: matchingLecture.memoryVerseZh || memoryVerseZh,
    memoryVerseEn: matchingLecture.memoryVerseEn || memoryVerseEn,
    keyTruthZh: matchingLecture.summaryZh,
    keyTruthEn: matchingLecture.summaryEn,
    lectureFileName: `ROM_Lecture_${padWeek}_MEN_062-${fileSeq}.mp3`,
    speakerZh: 'Paul Huang (黄同工)',
    speakerEn: 'Paul Huang',
    audioDuration: matchingLecture.duration || '45:00',
    versesZh: [
      `本周研读核心经文：${scriptureRef}。`,
      `保罗在使徒书信中阐明救赎论、成圣论与教会实践。`,
      `经文见证神的信实、基督宝血的救赎功劳以及圣灵内住的常时更新。`,
      `信徒蒙召以信心领受神的应许，在世界中活出荣耀神圣洁的见证。`
    ],
    versesEn: [
      `Weekly primary study passage: ${scriptureRef}.`,
      `The apostle unfolds the doctrines of grace, justification, sanctification and ecclesiology.`,
      `Testifying to God's immutable covenant faithfulness and the Holy Spirit's power.`,
      `Believers are called to walk worthy of the gospel in holiness and truth.`
    ],
    notesZh: {
      divisions: [
        {
          range: `${scriptureRef} 前段`,
          title: '经文历史脉络与保罗核心神学论述',
          explanation: matchingLecture.keyPointsZh[0] || '深入剖析使徒保罗在经文中的文法结构、论证逻辑与旧约渊源。'
        },
        {
          range: `${scriptureRef} 中段`,
          title: '基督救赎恩典的彰显与属灵真理',
          explanation: matchingLecture.keyPointsZh[1] || '阐明神在基督里为信徒成就的永恒救恩与圣灵常在的能力。'
        },
        {
          range: `${scriptureRef} 后段`,
          title: '信徒生命的反省悔改与实践应用',
          explanation: matchingLecture.keyPointsZh[2] || '引导学员在日常生活、职场见证与家庭关系中顺服圣灵的带领。'
        }
      ],
      historicalContext: `公元57年保罗于哥林多著述罗马书，写给身处帝国中心的罗马基督徒群体。本周经文深入解答信徒在信仰实际操练中的核心问题。`,
      theologicalTruth: `神的主权与救赎恩典超乎人类理性的自恃，唯独因信称义、靠圣灵行事，将一切颂赞归于三一真神。`,
      practicalApplication: [
        `在每天的灵修与抉择中，坚定以经文真理作为信心的根基。`,
        `依靠圣灵抵挡世俗的试探与肉体的软弱，结出仁爱、圣洁与和平的果子。`,
        `积极参与每周BSF小组研讨，与弟兄姐妹在彼此代祷中同蒙建造。`
      ]
    },
    notesEn: {
      divisions: [
        {
          range: `${scriptureRef} Part 1`,
          title: 'Grammatical Context & Theological Logic',
          explanation: matchingLecture.keyPointsEn[0] || 'Historical and exegetical study of the text.'
        },
        {
          range: `${scriptureRef} Part 2`,
          title: 'Redemption in Christ & Holy Spirit’s Work',
          explanation: matchingLecture.keyPointsEn[1] || 'Manifestation of God’s covenant grace in the life of the church.'
        },
        {
          range: `${scriptureRef} Part 3`,
          title: 'Application to Daily Walk',
          explanation: matchingLecture.keyPointsEn[2] || 'Practical discipleship in family and societal witness.'
        }
      ],
      historicalContext: 'Written by Paul to believers at the heart of the Roman empire.',
      theologicalTruth: 'God’s righteousness and sovereign love displayed in Christ.',
      practicalApplication: [
        'Anchor daily convictions in the unwavering promises of scripture.',
        'Walk in the Spirit to overcome fleshly impulses and worldly conformity.',
        'Engage actively in weekly small group fellowship and mutual prayer.'
      ]
    },
    dailyQuestions: [
      {
        day: 1,
        dayTitleZh: `第一天：通读 ${scriptureRef} 全文`,
        dayTitleEn: `Day 1: First Reading of ${scriptureRef}`,
        scriptureReference: scriptureRef,
        questionZh: `通读本周经文，记录下保罗的核心论点与反复出现的重要词汇。`,
        questionEn: `Read the passage carefully. What repeated words and central ideas stand out?`,
        reflectionHintZh: `留意经文中关于神、基督与圣灵工作的动词。`,
        reflectionHintEn: `Note the divine actions of the Father, Son, and Spirit.`
      },
      {
        day: 2,
        dayTitleZh: `第二天：细读前半段与神圣启示`,
        dayTitleEn: `Day 2: Detailed Observation Part 1`,
        scriptureReference: scriptureRef,
        questionZh: `经文前半部分如何揭示人的本质与神的圣洁属性？`,
        questionEn: `How does the first half expose human need and declare divine holiness?`,
        reflectionHintZh: `对比人的软弱与神的大能。`,
        reflectionHintEn: `Contrast human limitation with God’s sufficiency.`
      },
      {
        day: 3,
        dayTitleZh: `第三天：细读后半段与救赎应许`,
        dayTitleEn: `Day 3: Detailed Observation Part 2`,
        scriptureReference: scriptureRef,
        questionZh: `经文后半部分指出基督徒如何靠着恩典站立得稳？`,
        questionEn: `What promises of grace equip believers to stand firm?`,
        reflectionHintZh: '注意因信得生与圣灵同在的福分。',
        reflectionHintEn: 'Focus on peace and hope through the Holy Spirit.'
      },
      {
        day: 4,
        dayTitleZh: `第四天：属灵原则提炼`,
        dayTitleEn: `Day 4: Spiritual Principles`,
        scriptureReference: scriptureRef,
        questionZh: `从本段经文中你能归纳出哪一条适用于当下的永恒属灵原则？`,
        questionEn: `What overarching spiritual principle emerges from this study?`,
        reflectionHintZh: '以“当…时，神…”的句式概括原则。',
        reflectionHintEn: 'Summarize as an enduring biblical truth.'
      },
      {
        day: 5,
        dayTitleZh: `第五天：生命应用与自省`,
        dayTitleEn: `Day 5: Personal Application`,
        scriptureReference: scriptureRef,
        questionZh: `圣灵借着这段经文在你的生活、工作或人际关系中向你指出什么需要调整的方面？`,
        questionEn: `What specific area of your life is the Spirit prompting you to yield to God?`,
        reflectionHintZh: '写下具体可行的一条悔改与信靠行动。',
        reflectionHintEn: 'Commit to a concrete response of obedience.'
      },
      {
        day: 6,
        dayTitleZh: `第六天：小组研讨与代祷`,
        dayTitleEn: `Day 6: Group Discussion & Prayer`,
        scriptureReference: scriptureRef,
        questionZh: `准备一个你计划在小组中分享的经文体会，并为组员提名代祷。`,
        questionEn: `Prepare one insight to share with your group and intercede for your fellow learners.`,
        reflectionHintZh: '在爱中互相勉励，同走天路。',
        reflectionHintEn: 'Encourage one another in the fellowship of Christ.'
      }
    ]
  });
}
