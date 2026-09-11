// BSF Class Calendar data for all classes + Leader Calendar from Google Drive folder:
// https://drive.google.com/drive/folders/1kWDx71IRn91Vcyd52qXTkDgXEws439wA?usp=drive_link
// DOLM #7461 罗马书研经课程班级与同工专属日历

export interface ClassContact {
  role: string;
  name: string;
  phone: string;
}

export interface ClassCalendarEntry {
  lessonNumber: number; // 0 to 29, or -1 for breaks, -2 for special night, -3 for workshop
  lessonCode?: string; // e.g., 'W', 'Intro', '1', '2'
  dateStr?: string; // e.g., '09/14/26' or '5/10/2027'
  activityZh: string; // e.g., '罗马书：世上影响至为深远的信'
  doctrine?: string; // 教义: e.g., '圣经', '因信称义'
  passage?: string; // 经文内容: e.g., '罗马书 1:1-17'
  fellowship?: string; // 团契: e.g., '06:00-09:00 AM', 'Fellowship'
  isBreak?: boolean;
  isSpecialNight?: boolean;
  isWorkshop?: boolean;
  breakType?: 'christmas' | 'spring';
}

export interface BSFClassInfo {
  id: string;
  docId: string;
  docUrl: string;
  fileName?: string;
  filename?: string;
  nameZh: string;
  shortName: string;
  scheduleInfo: string; // e.g. '周一  7:00-8:30 PM'
  isLeaderCalendar?: boolean;
  contacts?: ClassContact[];
  calendar: ClassCalendarEntry[];
}

export const BSF_CLASSES_FOLDER_URL =
  'https://drive.google.com/drive/folders/1kWDx71IRn91Vcyd52qXTkDgXEws439wA?usp=drive_link';

export const BSF_CLASSES: BSFClassInfo[] = [
  {
    "id": "atlanta_dolm_7461_leaders",
    "docId": "1_dntHwbEmZ_jmEuzi_Xx3Ee_7gg4rDcqMw68SO8a5WQ",
    "docUrl": "https://docs.google.com/document/d/1_dntHwbEmZ_jmEuzi_Xx3Ee_7gg4rDcqMw68SO8a5WQ/edit",
    "filename": "Atlanta中文BSF DOLM #7461_同工日历",
    "fileName": "Atlanta中文BSF DOLM #7461_同工日历",
    "nameZh": "Atlanta中文BSF DOLM #7461_同工日历",
    "shortName": "Atlanta中文 同工日历",
    "scheduleInfo": "周六 06:00-09:00 AM（线上 / 同工会）",
    "isLeaderCalendar": true,
    "contacts": [
      {
        "role": "DOT",
        "name": "吕利波",
        "phone": "404.542.6834"
      },
      {
        "role": "DAOT",
        "name": "王涛",
        "phone": "470.767.2049"
      },
      {
        "role": "DAOT",
        "name": "赵鸿翔",
        "phone": "732.687.4949"
      },
      {
        "role": "CA",
        "name": "Paul Huang",
        "phone": "510-965-8188"
      }
    ],
    "calendar": [
      {
        "lessonCode": "W",
        "lessonNumber": -3,
        "dateStr": "08/29/26",
        "activityZh": "同工工作坊",
        "doctrine": "服事",
        "passage": "线上",
        "fellowship": "同工培训工作坊",
        "isBreak": false,
        "isWorkshop": true
      },
      {
        "lessonCode": "Intro",
        "lessonNumber": 0,
        "dateStr": "09/12/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论",
        "fellowship": "06:00-09:00 AM",
        "isBreak": false
      },
      {
        "lessonNumber": 1,
        "dateStr": "9/19/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 2,
        "dateStr": "9/26/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 3,
        "dateStr": "10/3/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2",
        "fellowship": "06:00-09:00 AM",
        "isBreak": false
      },
      {
        "lessonNumber": 4,
        "dateStr": "10/10/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 5,
        "dateStr": "10/17/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 6,
        "dateStr": "10/24/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 7,
        "dateStr": "10/31/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 8,
        "dateStr": "11/7/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11",
        "fellowship": "06:00-09:00 AM",
        "isBreak": false
      },
      {
        "lessonNumber": 9,
        "dateStr": "11/14/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 10,
        "dateStr": "11/21/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 11,
        "dateStr": "11/28/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 12,
        "dateStr": "12/5/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7",
        "fellowship": "06:00-09:00 AM",
        "isBreak": false
      },
      {
        "lessonNumber": 13,
        "dateStr": "12/12/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": -1,
        "dateStr": "12/19-1/2",
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/19/2026、12/26/2026、1/2/2027"
      },
      {
        "lessonNumber": 14,
        "dateStr": "1/9/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27",
        "fellowship": "06:00-09:00 AM",
        "isBreak": false
      },
      {
        "lessonNumber": 15,
        "dateStr": "1/16/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 16,
        "dateStr": "1/23/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 17,
        "dateStr": "1/30/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 18,
        "dateStr": "2/6/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21",
        "fellowship": "06:00-09:00 AM",
        "isBreak": false
      },
      {
        "lessonNumber": 19,
        "dateStr": "2/13/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 20,
        "dateStr": "2/20/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 21,
        "dateStr": "2/27/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 22,
        "dateStr": "3/6/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21",
        "fellowship": "06:00-09:00 AM",
        "isBreak": false
      },
      {
        "lessonNumber": 23,
        "dateStr": "3/13/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 24,
        "dateStr": "3/20/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 25,
        "dateStr": "3/27/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": -1,
        "dateStr": "4/5-4/9",
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "dateStr": "4/10/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 27,
        "dateStr": "4/17/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 28,
        "dateStr": "4/24/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 29,
        "dateStr": "5/1/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结",
        "fellowship": null,
        "isBreak": false
      },
      {
        "lessonNumber": 30,
        "dateStr": "5/8/27",
        "activityZh": "同工分享日",
        "doctrine": "感恩",
        "passage": "线上",
        "fellowship": "Fellowship (同工团契)",
        "isBreak": false,
        "isSpecialNight": true
      },
      {
        "lessonNumber": -2,
        "dateStr": "05/10/27",
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "5/10/27   所有组员分享之夜   7:00-8:30 PM   线上"
      }
    ]
  },
  {
    "id": "1_hN3Y0Rw6TvVv4V_s3jdBfI6N4-ZSYCXI0dfVRBzhSo",
    "docId": "1_hN3Y0Rw6TvVv4V_s3jdBfI6N4-ZSYCXI0dfVRBzhSo",
    "docUrl": "https://docs.google.com/document/d/1_hN3Y0Rw6TvVv4V_s3jdBfI6N4-ZSYCXI0dfVRBzhSo/edit",
    "filename": "ACCCN（北堂男生中文）_2026-09-14_1",
    "nameZh": "ACCCN（北堂男生中文）",
    "scheduleInfo": "周一  7:00-8:30 PM",
    "shortName": "ACCCN（北堂男生中文）",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/14/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/21/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/28/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/05/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/12/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/19/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/26/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/02/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/09/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/16/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/23/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "11/30/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/07/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/14/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/21/2026、12/28/2026、1/4/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/11/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/18/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/25/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/01/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/08/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/15/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/22/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/01/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/08/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/15/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/22/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/29/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/12/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/19/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/26/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/03/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1i74KrXWvumSv4rRgnDxYQheLdiA6blTgN4ImSVVX5Pw",
    "docId": "1i74KrXWvumSv4rRgnDxYQheLdiA6blTgN4ImSVVX5Pw",
    "docUrl": "https://docs.google.com/document/d/1i74KrXWvumSv4rRgnDxYQheLdiA6blTgN4ImSVVX5Pw/edit",
    "filename": "ACCCNW（西北堂男生中文）_2026-09-14_1",
    "nameZh": "ACCCNW（西北堂男生中文）",
    "scheduleInfo": "周一  7:30-9:00 PM",
    "shortName": "ACCCNW（西北堂男生中文）",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/14/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/21/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/28/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/05/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/12/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/19/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/26/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/02/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/09/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/16/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/23/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "11/30/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/07/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/14/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/21/2026、12/28/2026、1/4/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/11/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/18/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/25/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/01/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/08/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/15/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/22/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/01/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/08/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/15/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/22/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/29/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/12/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/19/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/26/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/03/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1bLAwIZvtolNLCGkluOpS9yKeYod3HpihF83idCBcqFQ",
    "docId": "1bLAwIZvtolNLCGkluOpS9yKeYod3HpihF83idCBcqFQ",
    "docUrl": "https://docs.google.com/document/d/1bLAwIZvtolNLCGkluOpS9yKeYod3HpihF83idCBcqFQ/edit",
    "filename": "Atlanta BSF Online（男生中文）_2026-09-15_1",
    "nameZh": "Atlanta BSF Online（男生中文）",
    "scheduleInfo": "周二  7:00-8:30 PM",
    "shortName": "Atlanta BSF Online",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/15/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/22/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/29/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/06/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/13/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/20/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/27/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/03/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/10/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/17/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/24/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "12/01/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/08/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/15/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/22/2026、12/29/2026、1/5/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/12/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/19/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/26/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/02/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/09/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/16/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/23/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/02/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/09/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/16/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/23/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/30/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/13/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/20/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/27/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/04/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "140qmfrsjPs5pl36sGVR59jF8RJr4wGBx3SVXg95U9yc",
    "docId": "140qmfrsjPs5pl36sGVR59jF8RJr4wGBx3SVXg95U9yc",
    "docUrl": "https://docs.google.com/document/d/140qmfrsjPs5pl36sGVR59jF8RJr4wGBx3SVXg95U9yc/edit",
    "filename": "CCCGJ 杰克逊华人基督教会男生中文组_2026-09-14_1",
    "nameZh": "CCCGJ 杰克逊华人基督教会男生中文组",
    "scheduleInfo": "周一  7:30-9:00 PM",
    "shortName": "CCCGJ 杰克逊华人基督教会",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/14/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/21/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/28/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/05/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/12/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/19/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/26/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/02/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/09/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/16/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/23/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "11/30/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/07/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/14/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/21/2026、12/28/2026、1/4/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/11/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/18/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/25/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/01/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/08/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/15/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/22/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/01/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/08/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/15/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/22/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/29/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/12/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/19/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/26/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/03/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1m1u_V3liVO3sEjCfCNJkRxtzCvYmB6h1_W-hOoFL8Bs",
    "docId": "1m1u_V3liVO3sEjCfCNJkRxtzCvYmB6h1_W-hOoFL8Bs",
    "docUrl": "https://docs.google.com/document/d/1m1u_V3liVO3sEjCfCNJkRxtzCvYmB6h1_W-hOoFL8Bs/edit",
    "filename": "German ECM Chinese 德国ECM晚间线上（男生中文）_2026-09-14_1",
    "nameZh": "German ECM Chinese 德国ECM晚间线上（男生中文）",
    "scheduleInfo": "周一  2:00-3:30 PM",
    "shortName": "German ECM Chinese 德国ECM晚间线上",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/14/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/21/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/28/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/05/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/12/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/19/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/26/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/02/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/09/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/16/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/23/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "11/30/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/07/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/14/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/21/2026、12/28/2026、1/4/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/11/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/18/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/25/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/01/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/08/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/15/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/22/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/01/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/08/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/15/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/22/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/29/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/12/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/19/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/26/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/03/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1ygZmUu5OhT35XFdDERuAE36q3s1OhpJsyr0VhtW58Wg",
    "docId": "1ygZmUu5OhT35XFdDERuAE36q3s1OhpJsyr0VhtW58Wg",
    "docUrl": "https://docs.google.com/document/d/1ygZmUu5OhT35XFdDERuAE36q3s1OhpJsyr0VhtW58Wg/edit",
    "filename": "Jacksonville BSF（男生中文）_2026-09-15_1",
    "nameZh": "Jacksonville BSF（男生中文）",
    "scheduleInfo": "周二  7:30-9:00 PM",
    "shortName": "Jacksonville BSF",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/15/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/22/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/29/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/06/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/13/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/20/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/27/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/03/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/10/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/17/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/24/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "12/01/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/08/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/15/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/22/2026、12/29/2026、1/5/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/12/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/19/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/26/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/02/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/09/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/16/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/23/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/02/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/09/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/16/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/23/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/30/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/13/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/20/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/27/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/04/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1FxNPCz6zAzOlaH1Ea0nJXWh9e0L8ItmCVfY-WYVsRRc",
    "docId": "1FxNPCz6zAzOlaH1Ea0nJXWh9e0L8ItmCVfY-WYVsRRc",
    "docUrl": "https://docs.google.com/document/d/1FxNPCz6zAzOlaH1Ea0nJXWh9e0L8ItmCVfY-WYVsRRc/edit",
    "filename": "Lexington BSF（男生中文）_2026-09-14",
    "nameZh": "Lexington BSF（男生中文）",
    "scheduleInfo": "周一  6:40-8:10 PM",
    "shortName": "Lexington BSF",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/14/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/21/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/28/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/05/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/12/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/19/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/26/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/02/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/09/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/16/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/23/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "11/30/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/07/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/14/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/21/2026、12/28/2026、1/4/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/11/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/18/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/25/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/01/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/08/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/15/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/22/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/01/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/08/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/15/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/22/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/29/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/12/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/19/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/26/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/03/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1jLXkTr0c3QW6kqyKWvcSczAp0HIeY2K-cRPqV6w-gEU",
    "docId": "1jLXkTr0c3QW6kqyKWvcSczAp0HIeY2K-cRPqV6w-gEU",
    "docUrl": "https://docs.google.com/document/d/1jLXkTr0c3QW6kqyKWvcSczAp0HIeY2K-cRPqV6w-gEU/edit",
    "filename": "Mount Pisgah Church（男生中文）_2026-09-15_2",
    "nameZh": "Mount Pisgah Church（男生中文）",
    "scheduleInfo": "周二  7:00-8:30 PM",
    "shortName": "Mount Pisgah Church",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/15/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/22/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/29/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/06/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/13/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/20/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/27/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/03/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/10/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/17/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/24/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "12/01/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/08/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/15/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/22/2026、12/29/2026、1/5/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/12/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/19/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/26/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/02/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/09/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/16/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/23/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/02/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/09/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/16/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/23/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/30/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/13/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/20/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/27/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/04/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1FwlSYPg4CN9j0Hbm7U9WQJQKu0rWRA06b-tT6TJL9Ks",
    "docId": "1FwlSYPg4CN9j0Hbm7U9WQJQKu0rWRA06b-tT6TJL9Ks",
    "docUrl": "https://docs.google.com/document/d/1FwlSYPg4CN9j0Hbm7U9WQJQKu0rWRA06b-tT6TJL9Ks/edit",
    "filename": "NJ - Long Island（男生中文线上）_2026-09-14_3",
    "nameZh": "NJ - Long Island（男生中文线上）",
    "scheduleInfo": "周一  7:30-9:00 PM",
    "shortName": "NJ - Long Island",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/14/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/21/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/28/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/05/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/12/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/19/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/26/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/02/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/09/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/16/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/23/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "11/30/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/07/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/14/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/21/2026、12/28/2026、1/4/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/11/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/18/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/25/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/01/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/08/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/15/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/22/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/01/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/08/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/15/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/22/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/29/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/12/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/19/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/26/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/03/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1Yk39VoGojWyON2Hg-Q_4JlvEosDCsUnipiVE0vkkIMk",
    "docId": "1Yk39VoGojWyON2Hg-Q_4JlvEosDCsUnipiVE0vkkIMk",
    "docUrl": "https://docs.google.com/document/d/1Yk39VoGojWyON2Hg-Q_4JlvEosDCsUnipiVE0vkkIMk/edit",
    "filename": "NJ美门华人教会（男生实体）_2026-09-16_2",
    "nameZh": "NJ美门华人教会（男生实体）",
    "scheduleInfo": "周三  9:30-11:00 AM",
    "shortName": "NJ美门华人教会",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/16/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/23/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/30/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/07/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/14/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/21/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/28/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/04/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/11/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/18/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/25/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "12/02/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/09/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/16/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/23/2026、12/30/2026、1/6/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/13/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/20/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/27/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/03/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/10/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/17/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/24/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/03/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/10/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/17/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/24/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/31/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/14/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/21/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/28/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/05/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1XiFswLn3WIhMn7bKScc_UkcUWpNMFHZ2cmIkKAcMLZo",
    "docId": "1XiFswLn3WIhMn7bKScc_UkcUWpNMFHZ2cmIkKAcMLZo",
    "docUrl": "https://docs.google.com/document/d/1XiFswLn3WIhMn7bKScc_UkcUWpNMFHZ2cmIkKAcMLZo/edit",
    "filename": "Shadowbrook Baptist Church（男生中文）_2026-09-14_1",
    "nameZh": "Shadowbrook Baptist Church（男生中文）",
    "scheduleInfo": "周一  7:00-8:30 PM",
    "shortName": "Shadowbrook Baptist Church",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/14/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/21/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/28/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/05/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/12/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/19/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/26/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/02/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/09/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/16/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/23/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "11/30/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/07/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/14/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/21/2026、12/28/2026、1/4/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/11/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/18/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/25/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/01/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/08/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/15/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/22/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/01/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/08/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/15/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/22/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/29/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/12/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/19/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/26/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/03/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1V5KhKCLglC98wgv_UBs6-qEoPfQwWdjQ-rFxn6Ic80Q",
    "docId": "1V5KhKCLglC98wgv_UBs6-qEoPfQwWdjQ-rFxn6Ic80Q",
    "docUrl": "https://docs.google.com/document/d/1V5KhKCLglC98wgv_UBs6-qEoPfQwWdjQ-rFxn6Ic80Q/edit",
    "filename": "Toledo BSF（男生中文）_2026-09-15",
    "nameZh": "Toledo BSF（男生中文）",
    "scheduleInfo": "周二  7:00-8:30 PM",
    "shortName": "Toledo BSF",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/15/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/22/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/29/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/06/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/13/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/20/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/27/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/03/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/10/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/17/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/24/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "12/01/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/08/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/15/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/22/2026、12/29/2026、1/5/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/12/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/19/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/26/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/02/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/09/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/16/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/23/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/02/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/09/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/16/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/23/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/30/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/13/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/20/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/27/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/04/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1HSkNH1bbALMYqcH2hVDyUW8wNrK0GYzBPQLC7hq8dEs",
    "docId": "1HSkNH1bbALMYqcH2hVDyUW8wNrK0GYzBPQLC7hq8dEs",
    "docUrl": "https://docs.google.com/document/d/1HSkNH1bbALMYqcH2hVDyUW8wNrK0GYzBPQLC7hq8dEs/edit",
    "filename": "灵粮堂男生中文小组_2026-09-14_1",
    "nameZh": "灵粮堂男生中文小组",
    "scheduleInfo": "周一  7:00-8:30 PM",
    "shortName": "灵粮堂",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/14/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/21/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/28/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/05/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/12/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/19/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/26/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/02/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/09/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/16/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/23/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "11/30/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/07/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/14/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/21/2026、12/28/2026、1/4/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/11/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/18/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/25/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/01/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/08/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/15/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/22/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/01/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/08/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/15/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/22/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/29/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/12/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/19/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/26/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/03/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1BbD-S_V3laRLCoN2TY6AcVWUV24dxB8r9G7wOZwgCbM",
    "docId": "1BbD-S_V3laRLCoN2TY6AcVWUV24dxB8r9G7wOZwgCbM",
    "docUrl": "https://docs.google.com/document/d/1BbD-S_V3laRLCoN2TY6AcVWUV24dxB8r9G7wOZwgCbM/edit",
    "filename": "费城日间线上中文组（男生）_2026-09-17_1",
    "nameZh": "费城日间线上中文组（男生）",
    "scheduleInfo": "周四  10:30 AM-12:00 PM",
    "shortName": "费城日间线上中文组",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/17/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/24/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "10/01/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/08/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/15/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/22/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/29/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/05/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/12/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/19/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/26/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "12/03/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/10/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/17/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/24/2026、12/31/2026、1/7/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/14/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/21/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/28/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/04/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/11/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/18/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/25/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/04/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/11/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/18/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/25/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "04/01/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/15/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/22/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/29/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/06/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  },
  {
    "id": "1SmSen3byMVzHGO9LGQSM2n4YmU3nZ5vTtpfZ7J7QxrA",
    "docId": "1SmSen3byMVzHGO9LGQSM2n4YmU3nZ5vTtpfZ7J7QxrA",
    "docUrl": "https://docs.google.com/document/d/1SmSen3byMVzHGO9LGQSM2n4YmU3nZ5vTtpfZ7J7QxrA/edit",
    "filename": "费城晚间线上中文组（男生）_2026-09-14_1",
    "nameZh": "费城晚间线上中文组（男生）",
    "scheduleInfo": "周一  7:30-9:00 PM",
    "shortName": "费城晚间线上中文组",
    "calendar": [
      {
        "lessonNumber": 0,
        "isBreak": false,
        "dateStr": "09/14/26",
        "activityZh": "罗马书：世上影响至为深远的信",
        "doctrine": "圣经",
        "passage": "罗马书导论"
      },
      {
        "lessonNumber": 1,
        "isBreak": false,
        "dateStr": "09/21/26",
        "activityZh": "人类需要福音",
        "doctrine": "义",
        "passage": "罗马书 1:1-17"
      },
      {
        "lessonNumber": 2,
        "isBreak": false,
        "dateStr": "09/28/26",
        "activityZh": "上帝对罪恶人类的愤怒",
        "doctrine": "上帝的愤怒",
        "passage": "罗马书 1:18-32"
      },
      {
        "lessonNumber": 3,
        "isBreak": false,
        "dateStr": "10/05/26",
        "activityZh": "谁都无可推诿",
        "doctrine": "审判",
        "passage": "罗马书 2"
      },
      {
        "lessonNumber": 4,
        "isBreak": false,
        "dateStr": "10/12/26",
        "activityZh": "没有义人",
        "doctrine": "罪",
        "passage": "罗马书 3:1-20"
      },
      {
        "lessonNumber": 5,
        "isBreak": false,
        "dateStr": "10/19/26",
        "activityZh": "上帝如何拯救罪人",
        "doctrine": "救赎",
        "passage": "* 罗马书 3:21-26"
      },
      {
        "lessonNumber": 6,
        "isBreak": false,
        "dateStr": "10/26/26",
        "activityZh": "因信称义（一）",
        "doctrine": "信心",
        "passage": "* 罗马书 3:27-31"
      },
      {
        "lessonNumber": 7,
        "isBreak": false,
        "dateStr": "11/02/26",
        "activityZh": "因信称义（二）",
        "doctrine": "称义",
        "passage": "* 罗马书 4"
      },
      {
        "lessonNumber": 8,
        "isBreak": false,
        "dateStr": "11/09/26",
        "activityZh": "与上帝相和",
        "doctrine": "和好",
        "passage": "* 罗马书 5:1-11"
      },
      {
        "lessonNumber": 9,
        "isBreak": false,
        "dateStr": "11/16/26",
        "activityZh": "义，上帝的恩赐",
        "doctrine": "恩典",
        "passage": "* 罗马书 5:12-21"
      },
      {
        "lessonNumber": 10,
        "isBreak": false,
        "dateStr": "11/23/26",
        "activityZh": "向罪是死的",
        "doctrine": "救恩",
        "passage": "* 罗马书 6:1-11"
      },
      {
        "lessonNumber": 11,
        "isBreak": false,
        "dateStr": "11/30/26",
        "activityZh": "向上帝是活的",
        "doctrine": "救赎",
        "passage": "* 罗马书 6:12-23"
      },
      {
        "lessonNumber": 12,
        "isBreak": false,
        "dateStr": "12/07/26",
        "activityZh": "律法与信徒",
        "doctrine": "成圣",
        "passage": "* 罗马书 7"
      },
      {
        "lessonNumber": 13,
        "isBreak": false,
        "dateStr": "12/14/26",
        "activityZh": "随从圣灵而活",
        "doctrine": "圣灵",
        "passage": "* 罗马书 8:1-17"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "christmas",
        "activityZh": "停课 3 周 - 圣诞假期 12/21/2026、12/28/2026、1/4/2027 ｜ 假期中继续听课、复习、祷告"
      },
      {
        "lessonNumber": 14,
        "isBreak": false,
        "dateStr": "01/11/27",
        "activityZh": "患难与荣耀",
        "doctrine": "患难",
        "passage": "* 罗马书 8:18-27"
      },
      {
        "lessonNumber": 15,
        "isBreak": false,
        "dateStr": "01/18/27",
        "activityZh": "在上帝爱中安稳无虞",
        "doctrine": "永恒保障",
        "passage": "* 罗马书 8:28-39"
      },
      {
        "lessonNumber": 16,
        "isBreak": false,
        "dateStr": "01/25/27",
        "activityZh": "上帝在救恩中的主权",
        "doctrine": "拣选",
        "passage": "* 罗马书 9:1-29"
      },
      {
        "lessonNumber": 17,
        "isBreak": false,
        "dateStr": "02/01/27",
        "activityZh": "我们在救恩中的责任",
        "doctrine": "义",
        "passage": "* 罗马书 9:30-10:13"
      },
      {
        "lessonNumber": 18,
        "isBreak": false,
        "dateStr": "02/08/27",
        "activityZh": "我们在救恩中的特权",
        "doctrine": "悔改",
        "passage": "* 罗马书 10:14-21"
      },
      {
        "lessonNumber": 19,
        "isBreak": false,
        "dateStr": "02/15/27",
        "activityZh": "给外邦人也给以色列的救恩",
        "doctrine": "预言",
        "passage": "* 罗马书 11:1-32"
      },
      {
        "lessonNumber": 20,
        "isBreak": false,
        "dateStr": "02/22/27",
        "activityZh": "所有荣耀都归给上帝直到永远",
        "doctrine": "天父",
        "passage": "* 罗马书 11:33-36"
      },
      {
        "lessonNumber": 21,
        "isBreak": false,
        "dateStr": "03/01/27",
        "activityZh": "基督徒的敬拜与侍奉",
        "doctrine": "教会",
        "passage": "* 罗马书 12:1-8"
      },
      {
        "lessonNumber": 22,
        "isBreak": false,
        "dateStr": "03/08/27",
        "activityZh": "基督徒的爱",
        "doctrine": "爱",
        "passage": "* 罗马书 12:9-21"
      },
      {
        "lessonNumber": 23,
        "isBreak": false,
        "dateStr": "03/15/27",
        "activityZh": "基督徒对掌权者的顺服",
        "doctrine": "主权",
        "passage": "* 罗马书 13:1-7"
      },
      {
        "lessonNumber": 24,
        "isBreak": false,
        "dateStr": "03/22/27",
        "activityZh": "基督徒的生活",
        "doctrine": "再来",
        "passage": "* 罗马书 13:8-14"
      },
      {
        "lessonNumber": 25,
        "isBreak": false,
        "dateStr": "03/29/27",
        "activityZh": "基督徒的自由",
        "doctrine": "审判",
        "passage": "* 罗马书 14"
      },
      {
        "lessonNumber": -1,
        "isBreak": true,
        "breakType": "spring",
        "activityZh": "停课 1 周 - 春假 4/5/2027-4/9/2027"
      },
      {
        "lessonNumber": 26,
        "isBreak": false,
        "dateStr": "04/12/27",
        "activityZh": "基督徒的合一",
        "doctrine": "合一",
        "passage": "* 罗马书 15:1-13"
      },
      {
        "lessonNumber": 27,
        "isBreak": false,
        "dateStr": "04/19/27",
        "activityZh": "保罗的事工与计划",
        "doctrine": "行动",
        "passage": "* 罗马书 15:14-33"
      },
      {
        "lessonNumber": 28,
        "isBreak": false,
        "dateStr": "04/26/27",
        "activityZh": "福音在罗马与哥林多的影响",
        "doctrine": "教会",
        "passage": "* 罗马书 16"
      },
      {
        "lessonNumber": 29,
        "isBreak": false,
        "dateStr": "05/03/27",
        "activityZh": "回应世上最具影响力的书信",
        "doctrine": "目的",
        "passage": "总结"
      },
      {
        "lessonNumber": -2,
        "isBreak": false,
        "isSpecialNight": true,
        "activityZh": "所有组员分享之夜 7:00-8:30 PM 线上",
        "dateStr": "5/10/2027"
      }
    ]
  }
];
