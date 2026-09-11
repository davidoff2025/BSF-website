export type Language = 'zh' | 'en';

export type PageId = 'home' | 'audio' | 'calendar' | 'documents' | 'homiletics' | 'contact' | 'admin';

export interface WeeklyFocusScripture {
  week: number;
  lessonNumber?: number; // 0 to 29 (第0课 至 第29课)
  scriptureReferenceZh: string;
  scriptureReferenceEn: string;
  themeZh: string;
  themeEn: string;
  versesZh: string[];
  versesEn: string[];
  keyTruthZh: string;
  keyTruthEn: string;
  memoryVerseZh: string;
  memoryVerseEn: string;
  contextNoteZh: string;
  contextNoteEn: string;
}

export interface AudioLecture {
  week: number;
  lessonNumber?: number; // 0 to 29 (第0课 至 第29课)
  date: string; // e.g., '2026-09-12'
  displayDateZh: string;
  displayDateEn: string;
  fileName: string; // e.g., 'ROM_Lecture_00_MEN_062-26.mp2'
  titleZh: string;
  titleEn: string;
  scriptureZh: string;
  scriptureEn: string;
  speakerZh: string;
  speakerEn: string;
  duration: string;
  audioDurationSeconds: number;
  summaryZh: string;
  summaryEn: string;
  keyPointsZh: string[];
  keyPointsEn: string[];
  memoryVerseZh: string;
  memoryVerseEn: string;
}

export interface WeeklyScheduleItem {
  week: number;
  date: string;
  lessonNameZh: string;
  lessonNameEn: string;
  scripture: string;
  isHoliday?: boolean;
  holidayNoteZh?: string;
  holidayNoteEn?: string;
  homileticsDue?: boolean;
  homileticsDueTitleZh?: string;
  homileticsDueTitleEn?: string;
  leaderMeetingDate?: string;
}

export interface ClassCalendar {
  id: string; // e.g., '062-MEN-Tue'
  code: string; // e.g., '062-26'
  fileName: string; // e.g., '周二晚间男班日历_062-MEN-Tue.pdf'
  folderName: string; // '各班级日历'
  classNameZh: string;
  classNameEn: string;
  targetAudienceZh: string;
  targetAudienceEn: string;
  meetingTimeZh: string;
  meetingTimeEn: string;
  locationZh: string;
  locationEn: string;
  classLeadZh: string;
  classLeadEn: string;
  contentTitleZh: string;
  contentTitleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  schedule: WeeklyScheduleItem[];
}

export interface BsfResourceDocument {
  id: string;
  titleZh: string;
  titleEn: string;
  folder: string; // e.g., '各班级日历', '罗马书录音与讲义', '每周讨论问题', etc.
  fileName: string;
  fileType: 'pdf' | 'audio' | 'doc' | 'sheet' | 'folder';
  size: string;
  updatedAt: string;
  week?: number;
  isPinned?: boolean;
  docContentSummaryZh?: string;
  docContentSummaryEn?: string;
}

// Backwards compatibility alias
export type DriveDocument = BsfResourceDocument;

export interface ContactLeader {
  id: string;
  nameZh: string;
  nameEn: string;
  titleZh: string;
  titleEn: string;
  roleZh: string;
  roleEn: string;
  email: string;
  phone: string;
  officeHoursZh: string;
  officeHoursEn: string;
  bioZh: string;
  bioEn: string;
  tagZh: string;
  tagEn: string;
}

export interface HomileticsAssignment {
  week: number;
  scripture: string;
  dueDate: string;
  topicZh: string;
  topicEn: string;
  passageBackgroundZh: string;
  passageBackgroundEn: string;
  sampleDivisions: {
    verses: string;
    titleZh: string;
    titleEn: string;
    principleZh: string;
    principleEn: string;
  }[];
  subjectSentenceGuidelineZh: string;
  subjectSentenceGuidelineEn: string;
  aimGuidelineZh: string;
  aimGuidelineEn: string;
}

export interface UserHomileticsSubmission {
  week: number;
  divisions: string;
  subjectSentence: string;
  aim: string;
  outline: string;
  applications: string;
  updatedAt: string;
  isSubmitted: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  classId: string;
  groupName: string;
}

export interface LearnerProgress {
  userId: string;
  id?: string;
  name: string;
  email: string;
  classId: string;
  classNameZh?: string;
  role?: string;
  groupName?: string;
  groupNumber?: number;
  groupLeaderName?: string;
  totalViewerSeconds?: number;
  lastActive: string;
  completedLectures: number[];
  completedReadings?: number[];
  homileticsStatus?: { [week: number]: 'none' | 'draft' | 'submitted' };
  homileticsSubmissions?: {
    week: number;
    submittedAt: string;
    score: string;
    feedback: string;
  }[];
  attendanceWeeks?: number[];
  attendanceRate?: number;
}

// File-based Database schema as requested (simulating file database on cloud storage)
export interface BsfFileDatabase {
  schemaVersion: string;
  databaseType: 'file_json_store';
  updatedAt: string;
  storageFileName: string;
  totalRecordsCount: number;
  tables: {
    learners: LearnerProgress[];
    homileticsSubmissions: { [key: string]: UserHomileticsSubmission };
    weeklyAudioStatus: { [week: number]: { listenedCount: number; averageSeconds: number } };
    announcements: { id: string; title: string; date: string }[];
  };
}

export interface DailyQuestionItem {
  day: number;
  dayTitleZh: string;
  dayTitleEn: string;
  scriptureReference: string;
  questionZh: string;
  questionEn: string;
  reflectionHintZh?: string;
  reflectionHintEn?: string;
}

export interface WeeklyBundleData {
  week: number;
  date: string;
  displayDateZh: string;
  displayDateEn: string;
  scriptureReferenceZh: string;
  scriptureReferenceEn: string;
  themeZh: string;
  themeEn: string;
  memoryVerseZh: string;
  memoryVerseEn: string;
  keyTruthZh: string;
  keyTruthEn: string;
  lectureFileName: string;
  speakerZh: string;
  speakerEn: string;
  audioDuration: string;
  versesZh: string[];
  versesEn: string[];
  notesZh: {
    divisions: { range: string; title: string; explanation: string }[];
    historicalContext: string;
    theologicalTruth: string;
    practicalApplication: string[];
  };
  notesEn: {
    divisions: { range: string; title: string; explanation: string }[];
    historicalContext: string;
    theologicalTruth: string;
    practicalApplication: string[];
  };
  dailyQuestions: DailyQuestionItem[];
  homileticsInfo?: {
    topicZh: string;
    topicEn: string;
    dueDate: string;
    divisions: { verses: string; titleZh: string; principleZh: string }[];
    subjectSentenceZh: string;
    aimZh: string;
  };
}

