import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Headphones,
  FolderDown,
  PenTool,
  Users,
  Play,
  Pause,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Sparkles,
  Volume2,
  CheckCircle2,
  Share2,
  Layers,
  ChevronDown,
  FileAudio,
  Radio,
  Clock,
  UserCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AudioPlayer } from './AudioPlayer';
import {
  BSF_AUDIO_LECTURES,
  BSF_CONTACTS,
  BSF_CLASS_CALENDARS,
  BSF_HOMILETICS_ASSIGNMENTS,
  WEEKLY_FOCUS_SCRIPTURES
} from '../data/bsfData';

export const HomePage: React.FC = () => {
  const {
    language,
    setCurrentPage,
    currentLecture,
    isPlaying,
    playLecture,
    togglePlay,
    openContactModal,
    setSelectedCalendarId,
    openWeeklyBundle
  } = useApp();

  // Focus week: 1 to 30 (representing Lesson 0 to Lesson 29)
  const [focusWeek, setFocusWeek] = useState<number>(1);
  const [copiedVerse, setCopiedVerse] = useState<boolean>(false);
  const [copiedMemoryVerse, setCopiedMemoryVerse] = useState<boolean>(false);

  // Find the selected weekly focus scripture
  const activeScripture =
    WEEKLY_FOCUS_SCRIPTURES.find(s => s.week === focusWeek) ||
    WEEKLY_FOCUS_SCRIPTURES[0];

  // Current lesson number (0 to 29)
  const currentLessonNumber = activeScripture.lessonNumber ?? (activeScripture.week - 1);

  // Corresponding audio lecture for the selected week
  const matchingLecture =
    BSF_AUDIO_LECTURES.find(l => l.week === focusWeek) ||
    BSF_AUDIO_LECTURES[0];

  const handleCopyScripture = () => {
    const textToCopy =
      language === 'zh'
        ? `【${activeScripture.scriptureReferenceZh}】\n${activeScripture.versesZh.join('\n')}\n\n属灵核心真理：${activeScripture.keyTruthZh}`
        : `【${activeScripture.scriptureReferenceEn}】\n${activeScripture.versesEn.join('\n')}\n\nSpiritual Truth: ${activeScripture.keyTruthEn}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedVerse(true);
    setTimeout(() => setCopiedVerse(false), 2200);
  };

  const handleCopyMemoryVerse = () => {
    const textToCopy =
      language === 'zh'
        ? `【BSF 罗马书第${currentLessonNumber}课背诵金句】\n${activeScripture.memoryVerseZh}`
        : `【BSF Romans Lesson ${currentLessonNumber} Memory Verse】\n${activeScripture.memoryVerseEn}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedMemoryVerse(true);
    setTimeout(() => setCopiedMemoryVerse(false), 2200);
  };

  const handlePlayFocusWeek = () => {
    if (matchingLecture) {
      playLecture(matchingLecture);
    }
  };

  const handlePrevLesson = () => {
    setFocusWeek(prev => (prev > 1 ? prev - 1 : WEEKLY_FOCUS_SCRIPTURES.length));
  };

  const handleNextLesson = () => {
    setFocusWeek(prev => (prev < WEEKLY_FOCUS_SCRIPTURES.length ? prev + 1 : 1));
  };

  return (
    <div className="space-y-10 pb-10">
      {/* 0. LESSON & WEEK SELECTOR DROPDOWN BAR (一共30多周，第0课到第29课，下拉菜单选择) */}
      <section
        id="lesson-dropdown-control-bar"
        className="bg-gradient-to-r from-[#faf8f5] via-white to-[#fdfcf9] border-2 border-[#881337]/30 rounded-xl p-4 sm:p-5 shadow-xs"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#881337] text-white text-[11px] font-bold uppercase tracking-wider">
                {language === 'zh' ? '全学年课程选择' : 'Curriculum Navigation'}
              </span>
              <span className="text-xs font-serif font-bold text-[#78350f]">
                {language === 'zh'
                  ? `共 30 周研读（第 0 课 至 第 29 课）`
                  : `30 Weeks in Total (Lesson 0 to Lesson 29)`}
              </span>
            </div>
            <label
              htmlFor="lesson-select-dropdown"
              className="block text-base sm:text-lg font-serif font-bold text-[#1c1917]"
            >
              {language === 'zh' ? '▼ 选择研经周次与课节（第0课 ~ 第29课）：' : '▼ Select Study Week & Lesson (Lesson 0 ~ 29):'}
            </label>
          </div>

          {/* Quick Stepper + Lesson Dropdown */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handlePrevLesson}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg bg-white border border-[#d6d3d1] hover:border-[#881337] text-[#57534e] hover:text-[#881337] transition-all shadow-2xs"
              title={language === 'zh' ? '切换至上一课' : 'Previous Lesson'}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{language === 'zh' ? '上一课' : 'Prev Lesson'}</span>
            </button>

            {/* Main Dropdown Menu for All 30 Lessons */}
            <div className="relative min-w-[260px] sm:min-w-[340px] max-w-full">
              <select
                id="lesson-select-dropdown"
                value={focusWeek}
                onChange={e => setFocusWeek(Number(e.target.value))}
                className="w-full text-xs sm:text-sm font-semibold py-2.5 pl-3.5 pr-9 rounded-lg border-2 border-[#881337] bg-white text-[#1c1917] shadow-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#881337]/30 transition-all appearance-none"
              >
                {WEEKLY_FOCUS_SCRIPTURES.map(item => {
                  const lessonNo = item.lessonNumber ?? (item.week - 1);
                  return (
                    <option key={item.week} value={item.week}>
                      {language === 'zh'
                        ? `第 ${lessonNo} 课 (第${item.week}周) • ${item.themeZh} [${item.scriptureReferenceZh}]`
                        : `Lesson ${lessonNo} (Week ${item.week}) • ${item.themeEn} [${item.scriptureReferenceEn}]`}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#881337]">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            <button
              onClick={handleNextLesson}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg bg-white border border-[#d6d3d1] hover:border-[#881337] text-[#57534e] hover:text-[#881337] transition-all shadow-2xs"
              title={language === 'zh' ? '切换至下一课' : 'Next Lesson'}
            >
              <span>{language === 'zh' ? '下一课' : 'Next Lesson'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Milestone Quick Jump Tags */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-[#e7e5e4]">
          <span className="text-[11px] font-medium text-[#78716c] mr-1">
            {language === 'zh' ? '里程碑课节快捷跳转：' : 'Quick Jump:'}
          </span>
          {[
            { wk: 1, labelZh: '第0课 导论', labelEn: 'Lesson 0 Intro' },
            { wk: 2, labelZh: '第1课 神的忿怒', labelEn: 'Lesson 1 Wrath' },
            { wk: 5, labelZh: '第4课 白白称义', labelEn: 'Lesson 4 Justified' },
            { wk: 9, labelZh: '第8课 同死同活', labelEn: 'Lesson 8 Alive in Christ' },
            { wk: 12, labelZh: '第11课 圣灵中的生命', labelEn: 'Lesson 11 Life in Spirit' },
            { wk: 14, labelZh: '第13课 得胜有余', labelEn: 'Lesson 13 Conquerors' },
            { wk: 20, labelZh: '第19课 献上活祭', labelEn: 'Lesson 19 Living Sacrifice' },
            { wk: 30, labelZh: '第29课 永古奥秘', labelEn: 'Lesson 29 Doxology' }
          ].map(m => {
            const isCurrent = focusWeek === m.wk;
            return (
              <button
                key={m.wk}
                onClick={() => setFocusWeek(m.wk)}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  isCurrent
                    ? 'bg-[#881337] text-white shadow-2xs'
                    : 'bg-white text-[#57534e] border border-[#d6d3d1] hover:border-[#881337] hover:text-[#881337]'
                }`}
              >
                {language === 'zh' ? m.labelZh : m.labelEn}
              </button>
            );
          })}
        </div>
      </section>

      {/* 1. WEEKLY FOCUS SCRIPTURE - GRAND EDITORIAL HERO (大字展示每周重点经文) */}
      <section
        id="weekly-focus-scripture-section"
        className="bg-gradient-to-b from-[#fdfcf9] to-[#faf7f0] border border-[#e7e5e4] rounded-xl p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden"
      >
        {/* Subtle decorative watermark */}
        <div className="absolute right-4 top-4 text-[#78350f]/5 text-8xl lg:text-9xl font-serif font-black select-none pointer-events-none">
          ROM
        </div>

        {/* Top bar with Lesson and Week Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e5e4]/80 pb-4 mb-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 py-1 bg-[#881337] text-white text-xs font-bold tracking-wider uppercase rounded-md shadow-2xs">
              {language === 'zh'
                ? `第 ${currentLessonNumber} 课 (第 ${activeScripture.week} 周)`
                : `Lesson ${currentLessonNumber} (Week ${activeScripture.week})`}
            </span>
            <span className="text-base font-serif font-bold text-[#78350f]">
              {language === 'zh' ? activeScripture.themeZh : activeScripture.themeEn}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id={`home-open-bundle-wk-${activeScripture.week}`}
              onClick={() => openWeeklyBundle(activeScripture.week)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md bg-[#78350f] hover:bg-[#58250b] text-white transition-all shadow-xs"
              title={language === 'zh' ? `打开第${currentLessonNumber}课完整研读包` : `Open Lesson ${currentLessonNumber} Study Bundle`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? `打开第${currentLessonNumber}课研读包` : `Lesson ${currentLessonNumber} Bundle`}</span>
            </button>
          </div>
        </div>

        {/* Large Typography Scripture Showcase */}
        <div className="relative z-10 space-y-6 max-w-4xl mx-auto text-center my-4">
          <div className="inline-block px-3.5 py-1 bg-[#f4f2ea] border border-[#e7e5e4] rounded-full text-xs font-serif font-bold text-[#78350f] tracking-wide">
            📖 {language === 'zh' ? activeScripture.scriptureReferenceZh : activeScripture.scriptureReferenceEn}
          </div>

          {/* Big Editorial Scripture Verses */}
          <div className="space-y-4">
            {(language === 'zh' ? activeScripture.versesZh : activeScripture.versesEn).map((verse, idx) => (
              <blockquote
                key={idx}
                className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-[#1c1917] leading-relaxed tracking-normal"
              >
                “{verse}”
              </blockquote>
            ))}
          </div>

          {/* Spiritual Key Truth Callout */}
          <div className="pt-4 border-t border-[#e7e5e4]/70 mt-6 max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm font-serif italic text-[#78716c]">
              <strong className="text-[#881337] not-italic font-sans font-bold mr-1">
                {language === 'zh' ? '【本周属灵核心真理】' : '【Core Spiritual Truth】'}
              </strong>
              {language === 'zh' ? activeScripture.keyTruthZh : activeScripture.keyTruthEn}
            </p>
          </div>
        </div>

        {/* Scripture Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#e7e5e4] relative z-10 bg-white/70 -mx-6 sm:-mx-8 lg:-mx-10 -mb-6 sm:-mb-8 lg:-mb-10 px-6 sm:px-8 lg:px-10 py-3.5">
          <div className="flex items-center gap-2 text-xs text-[#57534e]">
            <BookOpen className="w-4 h-4 text-[#881337]" />
            <span>
              <strong>{language === 'zh' ? '研读经文范围：' : 'Scripture Passage: '}</strong>
              {language === 'zh' ? activeScripture.scriptureReferenceZh : activeScripture.scriptureReferenceEn}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyScripture}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded border border-[#d6d3d1] hover:border-[#881337] bg-white text-[#292524] transition-colors shadow-2xs"
            >
              {copiedVerse ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">{language === 'zh' ? '已复制重点经文' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#57534e]" />
                  <span>{language === 'zh' ? '复制重点经文' : 'Copy Scripture'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED MEMORY VERSE SHOWCASE (背诵金句专栏卡片) */}
      <section
        id="weekly-memory-verse-section"
        className="bg-gradient-to-r from-[#fffbeb] via-[#fef3c7]/40 to-[#fffbeb] border-2 border-[#f59e0b]/40 rounded-xl p-6 sm:p-7 shadow-xs relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#fde68a] pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#fef3c7] border border-[#f59e0b]/50 text-[#b45309] flex items-center justify-center">
              <Bookmark className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#b45309] text-white text-[10px] font-bold uppercase tracking-wider">
                  {language === 'zh' ? '本周背诵金句' : 'MEMORY VERSE'}
                </span>
                <span className="text-xs font-mono font-semibold text-[#78350f]">
                  {language === 'zh' ? `第 ${currentLessonNumber} 课` : `Lesson ${currentLessonNumber}`}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#451a03] mt-0.5">
                {language === 'zh' ? '将神的话语藏在心里 • 每日背诵默想' : 'Hide God’s Word in Your Heart • Daily Memorization'}
              </h3>
            </div>
          </div>

          <button
            onClick={handleCopyMemoryVerse}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-md bg-white border border-[#f59e0b] hover:bg-[#fef3c7] text-[#b45309] transition-all shadow-2xs self-start md:self-auto"
          >
            {copiedMemoryVerse ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">{language === 'zh' ? '已复制金句' : 'Copied!'}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>{language === 'zh' ? '一键复制背诵金句' : 'Copy Memory Verse'}</span>
              </>
            )}
          </button>
        </div>

        {/* Memory Verse Text */}
        <div className="py-2 max-w-3xl">
          <blockquote className="text-lg sm:text-xl font-serif font-semibold text-[#78350f] leading-relaxed">
            “{language === 'zh' ? activeScripture.memoryVerseZh : activeScripture.memoryVerseEn}”
          </blockquote>
        </div>

        <div className="mt-4 pt-3 border-t border-[#fde68a]/80 flex flex-wrap items-center justify-between gap-2 text-xs text-[#92400e]">
          <span className="italic">
            {language === 'zh'
              ? '💡 建议：每周一至周五清晨朗读3遍并默想其在工作与人际关系中的属灵应用。'
              : '💡 Tip: Read aloud 3 times each morning and meditate on practical life applications.'}
          </span>
          <span className="font-semibold text-[#b45309]">
            {language === 'zh' ? `第${currentLessonNumber}课金句已同步至研读包` : `Synced with Weekly Bundle`}
          </span>
        </div>
      </section>

      {/* 3. OFFICIAL AUDIO FILE & DIRECT IN-BROWSER MP3 PLAYER (官方 audio 文件与内置播放器) */}
      <section
        id="official-audio-player-section"
        className="bg-white border-2 border-[#881337]/20 rounded-xl p-5 sm:p-7 shadow-xs space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e5e4] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#fdf2f4] text-[#881337] flex items-center justify-center">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#881337] text-white text-[10px] font-bold uppercase tracking-wider">
                  {language === 'zh' ? '官方 AUDIO 讲道' : 'OFFICIAL AUDIO LECTURE'}
                </span>
                <span className="text-xs font-mono font-semibold text-[#881337] bg-[#fdf2f4] px-2 py-0.5 rounded">
                  {matchingLecture.fileName}
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1c1917] mt-0.5">
                {language === 'zh' ? matchingLecture.titleZh : matchingLecture.titleEn}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayFocusWeek}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-[#881337] hover:bg-[#700f2b] text-white transition-all shadow-xs"
            >
              {isPlaying && currentLecture?.week === activeScripture.week ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>{language === 'zh' ? '正在播放本课录音' : 'Playing Now'}</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>{language === 'zh' ? `内置播放器直接播放第${currentLessonNumber}课录音` : `Play Lesson ${currentLessonNumber} MP3 Online`}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Audio Meta Information Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-[#faf8f5] rounded-lg border border-[#e7e5e4] text-xs">
          <div>
            <span className="text-[#78716c] block text-[11px]">{language === 'zh' ? '官方主讲讲员' : 'Lecturer'}</span>
            <strong className="text-[#1c1917]">{language === 'zh' ? matchingLecture.speakerZh : matchingLecture.speakerEn}</strong>
          </div>
          <div>
            <span className="text-[#78716c] block text-[11px]">{language === 'zh' ? '对应经文范围' : 'Scripture'}</span>
            <strong className="text-[#1c1917]">{language === 'zh' ? matchingLecture.scriptureZh : matchingLecture.scriptureEn}</strong>
          </div>
          <div>
            <span className="text-[#78716c] block text-[11px]">{language === 'zh' ? '音频时长 / 码率' : 'Duration / Quality'}</span>
            <strong className="text-[#1c1917]">{matchingLecture.duration} • 128kbps MP3</strong>
          </div>
          <div>
            <span className="text-[#78716c] block text-[11px]">{language === 'zh' ? '录音发布日期' : 'Release Date'}</span>
            <strong className="text-[#1c1917]">{matchingLecture.date}</strong>
          </div>
        </div>

        {/* Live Audio Player Widget */}
        <div className="pt-2">
          <AudioPlayer />
        </div>
      </section>

      {/* 4. ESSENTIAL GATEWAYS (包含 14 个班级日历入口) */}
      <section className="space-y-4">
        <div className="border-b border-[#e7e5e4] pb-2 flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#78716c]">
            {language === 'zh' ? '学年研经核心导航' : 'Essential Study Portals'}
          </h3>
          <span className="text-xs text-[#a8a29e]">
            {language === 'zh' ? '2026-2027 罗马书 • 14个班级' : 'Romans 2026-2027 • 14 Classes'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: 14 Class Calendars */}
          <div
            onClick={() => {
              setSelectedCalendarId('062-MEN-Tue');
              setCurrentPage('calendar');
            }}
            className="bg-white p-5 rounded-lg border-2 border-[#e7e5e4] hover:border-[#881337] cursor-pointer group shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded bg-[#fdf2f4] text-[#881337] flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <h4 className="font-serif font-bold text-base text-[#1c1917] group-hover:text-[#881337] transition-colors">
                  {language === 'zh' ? '各班级日历 (共14班)' : 'Class Calendars (14 Classes)'}
                </h4>
                <span className="px-1.5 py-0.5 rounded bg-[#881337] text-white text-[10px] font-bold">14</span>
              </div>
              <p className="text-xs text-[#78716c] mt-1.5 leading-relaxed">
                {language === 'zh'
                  ? '官方日程表：包含男班、女班、青年班、双语班、长青长者班、职场班、夫妻家庭班及线上班等全部14个班级专属日历与下拉选择。'
                  : 'Official schedules for all 14 BSF classes including Men, Women, Young Adults, Seniors, Professionals, and Online cohorts.'}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#881337] group-hover:translate-x-0.5 transition-transform">
              <span>{language === 'zh' ? '进入14班日历下拉窗' : 'Open 14 Calendars'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Card 2: Homiletics Assignment */}
          <div
            onClick={() => setCurrentPage('homiletics')}
            className="bg-white p-5 rounded-lg border-2 border-[#e7e5e4] hover:border-[#6d28d9] cursor-pointer group shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded bg-[#f5f3ff] text-[#6d28d9] flex items-center justify-center mb-3">
                <PenTool className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#1c1917] group-hover:text-[#6d28d9] transition-colors">
                {language === 'zh' ? '讲道法作业' : 'Homiletics Portal'}
              </h4>
              <p className="text-xs text-[#78716c] mt-1.5 leading-relaxed">
                {language === 'zh'
                  ? '经文分段 (Divisions)、主旨句 (Subject Sentence)、目的 (Aim) 与实际应用撰写，支持实时云端同步与批改。'
                  : 'Divisions, Subject Sentences, Aims, and practical applications worksheet with real-time saving.'}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#6d28d9] group-hover:translate-x-0.5 transition-transform">
              <span>{language === 'zh' ? '进入作业工作台' : 'Open Homiletics'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Card 3: Documents Archive */}
          <div
            onClick={() => setCurrentPage('documents')}
            className="bg-white p-5 rounded-lg border-2 border-[#e7e5e4] hover:border-[#1d4ed8] cursor-pointer group shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded bg-[#eff6ff] text-[#1d4ed8] flex items-center justify-center mb-3">
                <FolderDown className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#1c1917] group-hover:text-[#1d4ed8] transition-colors">
                {language === 'zh' ? '官方研经资料库' : 'Study Document Archive'}
              </h4>
              <p className="text-xs text-[#78716c] mt-1.5 leading-relaxed">
                {language === 'zh'
                  ? '涵盖14个班级日历PDF、罗马书逐课释经讲义、每周讨论问题及小组长指导手册，支持在线阅览。'
                  : 'Access 14 class calendars, lecture notes, weekly questions, and leader manuals.'}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#1d4ed8] group-hover:translate-x-0.5 transition-transform">
              <span>{language === 'zh' ? '浏览资料库' : 'Browse Documents'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Card 4: Contact Leaders */}
          <div
            onClick={() => setCurrentPage('contact')}
            className="bg-white p-5 rounded-lg border-2 border-[#e7e5e4] hover:border-[#15803d] cursor-pointer group shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded bg-[#f0fdf4] text-[#15803d] flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#1c1917] group-hover:text-[#15803d] transition-colors">
                {language === 'zh' ? '专职同工团队' : 'Contact Leadership'}
              </h4>
              <p className="text-xs text-[#78716c] mt-1.5 leading-relaxed">
                {language === 'zh'
                  ? 'Larry Lu（DOT）、Devin Wang(DAOT)、Jonathan Chao DAOT、Paul Huang - DAOT-CA 专职服务窗口。'
                  : 'Direct window for Larry Lu (DOT), Devin Wang (DAOT), Jonathan Chao (DAOT), Paul Huang (DAOT-CA).'}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#15803d] group-hover:translate-x-0.5 transition-transform">
              <span>{language === 'zh' ? '联络同工' : 'Contact Team'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </section>

      {/* 5. KEY LEADERSHIP CONTACTS (4位专职核心同工) */}
      <section className="bg-[#faf8f5] border border-[#e7e5e4] rounded-xl p-6 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e5e4] pb-3">
          <div>
            <h3 className="text-base font-serif font-bold text-[#1c1917]">
              {language === 'zh' ? 'BSF 研学督导与领导同工团队' : 'BSF Leadership Team & Academic Oversight'}
            </h3>
            <p className="text-xs text-[#78716c]">
              {language === 'zh'
                ? '若您在14个班级日历、音频收听、讲道法作业或小组关怀中有任何疑问，欢迎直接联络专职同工。'
                : 'Reach out directly for class calendars, audio streaming, homiletics mentoring, or pastoral care.'}
            </p>
          </div>

          <button
            onClick={() => openContactModal()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded bg-[#881337] hover:bg-[#700f2b] text-white transition-colors shadow-2xs"
          >
            <span>{language === 'zh' ? '一键发送留言' : 'Send Message'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BSF_CONTACTS.map(contact => (
            <div
              key={contact.id}
              onClick={() => openContactModal(contact)}
              className="bg-white p-4 rounded-lg border border-[#e7e5e4] hover:border-[#881337] cursor-pointer transition-all hover:shadow-2xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#881337] bg-[#fdf2f4] px-1.5 py-0.5 rounded">
                  {language === 'zh' ? contact.tagZh : contact.tagEn}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" title="Online" />
              </div>

              <h4 className="font-serif font-bold text-sm text-[#1c1917]">
                {language === 'zh' ? contact.nameZh : contact.nameEn}
              </h4>

              <p className="text-[11px] font-medium text-[#57534e]">
                {language === 'zh' ? contact.titleZh : contact.titleEn}
              </p>

              <div className="pt-2 border-t border-[#f5f5f4] text-[11px] text-[#78716c] truncate font-mono">
                {contact.email}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
