import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ROMANS_LESSONS,
  getCurrentLessonIndex,
  LessonInfo
} from './data/romansPassages';
import {
  GOOGLE_DRIVE_LECTURE_AUDIOS
} from './data/driveAudios';
import { QRCodeSVG } from 'qrcode.react';
import { getPublicMobileUrl } from './utils/urlHelper';
import { ClassCalendarTab } from './components/ClassCalendarTab';
import { MobileLessonView } from './components/MobileLessonView';
import { QrCodeModal } from './components/QrCodeModal';
import {
  BookOpen,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Calendar,
  FileAudio,
  RotateCcw,
  Sparkles,
  ExternalLink,
  CalendarDays,
  QrCode,
  Smartphone
} from 'lucide-react';

export const App: React.FC = () => {
  // Navigation Tabs: 'lesson' (当前课程主页) | 'calendar' (各班级日历)
  const [activeTab, setActiveTab] = useState<'lesson' | 'calendar'>('lesson');

  // 1. Calculate current lesson index based on calendar rule:
  // Before end of week 09/14 (i.e. before Saturday Sep 19, 2026) -> Lesson 0
  // From Saturday Sep 19, 2026 onwards -> Lesson 1, switching each Saturday
  const currentWeekLessonIndex = useMemo(() => {
    return getCurrentLessonIndex(new Date());
  }, []);

  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(currentWeekLessonIndex);
  const [copiedKeyVerse, setCopiedKeyVerse] = useState(false);
  const [copiedFullVerses, setCopiedFullVerses] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('large');
  const [showEnglish, setShowEnglish] = useState(false);

  // View mode: 'desktop' or 'mobile'
  // Auto-detect mobile devices or '?view=mobile' in URL
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>(() => {
    if (typeof window === 'undefined') return 'desktop';
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'mobile') return 'mobile';
    if (params.get('view') === 'desktop') return 'desktop';
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || '');
    const isNarrow = window.innerWidth <= 768;
    return (isMobileUA || isNarrow) ? 'mobile' : 'desktop';
  });

  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const mobileUrl = useMemo(() => {
    return getPublicMobileUrl();
  }, []);

  // Audio state
  // Check if current lesson has an exact preset in Google Drive folder
  const driveAudio = GOOGLE_DRIVE_LECTURE_AUDIOS[selectedLessonIndex];

  // Mode: 'html5' (Default clean native audio player, no Google login or iframes) or 'gdrive_embed'
  const [playerMode, setPlayerMode] = useState<'gdrive_embed' | 'html5'>('html5');
  const [audioError, setAudioError] = useState<string | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const lesson: LessonInfo = ROMANS_LESSONS[selectedLessonIndex] || ROMANS_LESSONS[0];
  const isCurrentWeek = selectedLessonIndex === currentWeekLessonIndex;

  // Active Google Drive ID for the current lesson
  const activeDriveFileId = driveAudio ? driveAudio.driveFileId : null;

  // Current audio filename to display
  const currentFileName = driveAudio ? driveAudio.fileName : lesson.audioFileName;

  // Determine current HTML5 audio source
  const currentAudioSrc = driveAudio
    ? driveAudio.directStreamUrl
    : `/audio/${lesson.audioFileName}`;

  // Handle setting playback speed
  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  // Reset audio state when switching lessons, and set optimal player mode
  useEffect(() => {
    setAudioError(null);
    setPlayerMode('html5');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [selectedLessonIndex]);

  // Copy Key Verse
  const handleCopyKeyVerse = () => {
    const textToCopy = `【${lesson.titleZh} • 本周金句】\n“${lesson.keyVerseZh}” —— ${lesson.keyVerseRefZh}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedKeyVerse(true);
    setTimeout(() => setCopiedKeyVerse(false), 2000);
  };

  // Copy Whole Reference Scripture
  const handleCopyFullVerses = () => {
    const versesText = lesson.fullVerses
      .map(v => `${v.num} ${v.zh}${showEnglish ? `\n   ${v.en}` : ''}`)
      .join('\n');
    const fullText = `【${lesson.referenceZh} 全段经文】\n\n${versesText}`;
    navigator.clipboard.writeText(fullText);
    setCopiedFullVerses(true);
    setTimeout(() => setCopiedFullVerses(false), 2000);
  };

  // Format today's date for display
  const todayFormatted = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  }, []);

  // Mobile Minimal View when in mobile mode:
  // "如果是手机登录，针对手机适配，只显示本课背诵金句，MP3播放，以及相关经文。越简单越好。"
  if (viewMode === 'mobile') {
    return (
      <MobileLessonView
        lesson={lesson}
        selectedLessonIndex={selectedLessonIndex}
        onSelectLessonIndex={setSelectedLessonIndex}
        currentWeekLessonIndex={currentWeekLessonIndex}
        onSwitchToFullView={() => setViewMode('desktop')}
        driveAudio={driveAudio}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1917] flex flex-col antialiased">
      {/* 1. Header: Concise, dignified, clear */}
      <header className="bg-white border-b border-[#e7e5e4] sticky top-0 z-30 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#881337]/10 text-[#881337]">
                  BSF 2026-2027 学年度
                </span>
                <span className="text-xs text-[#78716c] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  今天: {todayFormatted}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#1c1917] tracking-tight mt-1">
                Atlanta BSF 辅助学习工具
              </h1>
              {/* Quick status badge directly under title */}
              <div className="mt-1.5 flex items-center gap-2">
                {isCurrentWeek ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    正在展示当周课程 (第{currentWeekLessonIndex}课)
                  </span>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedLessonIndex(currentWeekLessonIndex);
                      setActiveTab('lesson');
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    回到当周课程 (第{currentWeekLessonIndex}课)
                  </button>
                )}
              </div>
            </div>

            {/* 主页右上角：手机二维码（极简，免登录，直接可扫） */}
            <div
              onClick={() => setIsQrModalOpen(true)}
              className="flex items-center gap-2.5 bg-[#faf8f5] hover:bg-white p-2 rounded-xl border border-[#e7e5e4] hover:border-[#881337]/40 shadow-2xs transition-all self-start sm:self-center shrink-0 cursor-pointer group"
              title="微信或相机扫一扫，免登录直接在手机看"
            >
              <div className="p-1 bg-white rounded-lg border border-[#e7e5e4] shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                <QRCodeSVG
                  value={mobileUrl}
                  size={58}
                  level="M"
                />
              </div>
              <div className="flex flex-col justify-center pr-1">
                <div className="flex items-center gap-1 text-xs font-bold text-[#1c1917] group-hover:text-[#881337] transition-colors">
                  <Smartphone className="w-3.5 h-3.5 text-[#881337]" />
                  <span>手机扫码</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-medium mt-0.5">免登录 • 即扫即看</span>
                <span className="text-[10px] text-[#881337] font-semibold mt-0.5 group-hover:underline">
                  极简研读模式 →
                </span>
              </div>
            </div>
          </div>

          {/* Tab Switcher: Tab 1 = 课程研读主页, Tab 2 = 班级专属日历 + 手机快捷功能 */}
          <div className="mt-3 pt-2 border-t border-[#f5f5f4] flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setActiveTab('lesson')}
                className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold border-b-2 transition-all ${
                  activeTab === 'lesson'
                    ? 'border-[#881337] text-[#881337] bg-[#881337]/5 rounded-t-lg'
                    : 'border-transparent text-[#78716c] hover:text-[#1c1917] hover:bg-[#faf8f5] rounded-t-lg'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>本周课程与经文</span>
                <span className="text-[11px] font-normal px-1.5 py-0.2 rounded bg-stone-100 text-stone-600">
                  第 {selectedLessonIndex} 课
                </span>
              </button>

              <button
                onClick={() => setActiveTab('calendar')}
                className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold border-b-2 transition-all ${
                  activeTab === 'calendar'
                    ? 'border-[#881337] text-[#881337] bg-[#881337]/5 rounded-t-lg'
                    : 'border-transparent text-[#78716c] hover:text-[#1c1917] hover:bg-[#faf8f5] rounded-t-lg'
                }`}
              >
                <CalendarDays className="w-4 h-4" />
                <span>班级专属日历</span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  16份日历
                </span>
              </button>
            </div>

            {/* Mobile QR & Switcher Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsQrModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#881337] bg-[#881337]/10 hover:bg-[#881337]/20 border border-[#881337]/20 transition-all shadow-2xs cursor-pointer"
                title="手机微信扫码直达极简研读（免登录）"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>手机扫码 (免登录)</span>
              </button>

              <button
                onClick={() => setViewMode('mobile')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#44403c] bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-all shadow-2xs cursor-pointer"
                title="在当前窗口进入手机极简模式（仅金句、录音与经文）"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#881337]" />
                <span className="hidden sm:inline">手机极简视图</span>
              </button>
            </div>
          </div>

          {/* Lesson Navigation & Switcher bar (only shown in 'lesson' tab) */}
          {activeTab === 'lesson' && (
            <>
              <div className="mt-2 pt-2 border-t border-[#f5f5f4] flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedLessonIndex(prev => Math.max(0, prev - 1))}
                  disabled={selectedLessonIndex === 0}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md border border-[#e7e5e4] bg-[#faf8f5] hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">上一课</span>
                </button>

                {/* Dropdown Selector for all 30 Lessons */}
                <div className="flex-1 max-w-lg mx-1">
                  <select
                    id="lesson-selector"
                    value={selectedLessonIndex}
                    onChange={e => setSelectedLessonIndex(Number(e.target.value))}
                    aria-label="选择研读课次"
                    className="w-full text-xs sm:text-sm font-semibold bg-white border border-[#d6d3d1] rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#881337] truncate shadow-2xs"
                  >
                    {ROMANS_LESSONS.map((l) => (
                      <option key={l.lessonNumber} value={l.lessonNumber}>
                        {l.lessonNumber === currentWeekLessonIndex ? '★ [当周] ' : ''}
                        {l.titleZh} 【{l.referenceZh}】
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setSelectedLessonIndex(prev => Math.min(ROMANS_LESSONS.length - 1, prev + 1))}
                  disabled={selectedLessonIndex === ROMANS_LESSONS.length - 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md border border-[#e7e5e4] bg-[#faf8f5] hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <span className="hidden sm:inline">下一课</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Main Content Area: Focused, clean, readable */}
      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 flex-1">
        {activeTab === 'calendar' ? (
          <ClassCalendarTab
            currentWeekLessonIndex={currentWeekLessonIndex}
            onSelectLesson={(lessonNum) => {
              setSelectedLessonIndex(lessonNum);
              setActiveTab('lesson');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenQrModal={() => setIsQrModalOpen(true)}
          />
        ) : (
          <>
            {/* ------------------------------------------------------------- */}
            {/* SECTION 1: KEY VERSE (本周金句) */}
            {/* ------------------------------------------------------------- */}
        <section
          id="key-verse-section"
          className="bg-white rounded-xl border border-[#e7e5e4] shadow-xs p-6 sm:p-7 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#881337]"></div>

          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#881337]"></span>
              <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#881337]">
                本周背诵金句 • Memory Verse
              </h2>
            </div>

            <button
              onClick={handleCopyKeyVerse}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md border border-[#e7e5e4] bg-[#faf8f5] hover:bg-white text-[#44403c] transition-colors"
              title="复制本周金句"
            >
              {copiedKeyVerse ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">已复制</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>复制金句</span>
                </>
              )}
            </button>
          </div>

          {/* Key Verse text */}
          <blockquote className="my-4 pl-4 border-l-4 border-[#881337] bg-[#fdf2f4]/30 py-3 pr-3 rounded-r-lg">
            <p className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-[#1c1917] leading-relaxed">
              “{lesson.keyVerseZh}”
            </p>
            <footer className="mt-2 text-sm sm:text-base font-serif font-bold text-[#881337] text-right">
              —— {lesson.keyVerseRefZh}
            </footer>

            {showEnglish && (
              <p className="mt-3 text-xs sm:text-sm text-[#57534e] italic border-t border-[#f5d0dc]/60 pt-2 leading-relaxed">
                "{lesson.keyVerseEn}" — {lesson.keyVerseRefEn}
              </p>
            )}
          </blockquote>
        </section>


        {/* ------------------------------------------------------------- */}
        {/* SECTION 2: DIRECT MP3 AUDIO PLAYER (Google Drive 原生播放 & HTML5) */}
        {/* ------------------------------------------------------------- */}
        <section
          id="mp3-player-section"
          className="bg-white rounded-xl border border-[#e7e5e4] shadow-xs p-5 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-[#f5f5f4]">
            <div className="flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#881337]/10 flex items-center justify-center text-[#881337] shrink-0 mt-0.5">
                <FileAudio className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm sm:text-base font-bold text-[#1c1917]">
                    讲道录音 MP3 播放器
                  </h2>
                  {driveAudio && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      已连通云端录音库
                    </span>
                  )}
                </div>
                <div className="text-xs text-[#78716c] flex flex-wrap items-center gap-2 mt-0.5">
                  <span className="font-mono font-medium text-[#881337]">
                    {currentFileName}
                  </span>
                </div>
              </div>
            </div>

            {/* Player mode switcher & controls */}
            <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
              {/* Quick Mobile Scan button */}
              <button
                onClick={() => setIsQrModalOpen(true)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold text-[#881337] bg-[#881337]/5 hover:bg-[#881337]/15 border border-[#881337]/20 transition-colors cursor-pointer"
                title="手机扫码在手机上收听讲道录音"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>扫码手机听</span>
              </button>

              {/* Switch Player Mode */}
              <div className="flex items-center bg-[#f5f5f4] p-0.5 rounded-lg text-xs font-medium border border-[#e7e5e4]">
                <button
                  onClick={() => setPlayerMode('gdrive_embed')}
                  disabled={!activeDriveFileId}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    playerMode === 'gdrive_embed' && activeDriveFileId
                      ? 'bg-white text-[#881337] font-bold shadow-2xs'
                      : 'text-[#78716c] hover:text-[#1c1917] disabled:opacity-40 disabled:cursor-not-allowed'
                  }`}
                  title="推荐：直接通过 Google 云端硬盘在线流式播放，绕过跨域限制"
                >
                  云端原生播放
                </button>
                <button
                  onClick={() => setPlayerMode('html5')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    playerMode === 'html5'
                      ? 'bg-white text-[#881337] font-bold shadow-2xs'
                      : 'text-[#78716c] hover:text-[#1c1917]'
                  }`}
                  title="标准 HTML5 网页播放器"
                >
                  标准播放器
                </button>
              </div>

              {/* Speed only for HTML5 mode */}
              {playerMode === 'html5' && (
                <div className="flex items-center gap-1">
                  <span className="text-xs text-[#78716c] ml-1">倍速:</span>
                  {[1, 1.25, 1.5].map(spd => (
                    <button
                      key={spd}
                      onClick={() => handleSpeedChange(spd)}
                      className={`px-2 py-0.5 text-xs font-semibold rounded ${
                        playbackSpeed === spd
                          ? 'bg-[#881337] text-white'
                          : 'bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Active Player View */}
          <div className="mt-4">
            {playerMode === 'gdrive_embed' && activeDriveFileId ? (
              <div className="rounded-xl overflow-hidden border border-[#d6d3d1] bg-[#f8f9fa] shadow-inner relative">
                <iframe
                  key={activeDriveFileId}
                  src={`https://drive.google.com/file/d/${activeDriveFileId}/preview`}
                  className="w-full h-28 border-0"
                  allow="autoplay"
                  title={`音频播放 - ${currentFileName}`}
                />
              </div>
            ) : (
              <div>
                <audio
                  ref={audioRef}
                  key={`desktop-audio-${selectedLessonIndex}`}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-11 focus:outline-none rounded-lg"
                  onError={() => {
                    if (activeDriveFileId) {
                      setAudioError('网络受限或跨域缓冲超时。建议点击右上方「云端原生播放」收听。');
                    } else {
                      setAudioError('音频加载失败，请检查网络或音频链接是否有效。');
                    }
                  }}
                  onCanPlay={() => setAudioError(null)}
                >
                  <source src={currentAudioSrc} type="audio/mpeg" />
                  {driveAudio && (
                    <source src={driveAudio.fallbackStreamUrl} type="audio/mpeg" />
                  )}
                  您的浏览器不支持直接播放 HTML5 MP3 音频。
                </audio>

                {/* Error message */}
                {audioError && !activeDriveFileId && (
                  <p className="mt-2 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded px-3 py-1.5">
                    {audioError}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>


        {/* ------------------------------------------------------------- */}
        {/* SECTION 3: THE WHOLE REFERENCE BIBLE VERSES (罗马书本课完整经文) */}
        {/* ------------------------------------------------------------- */}
        <section
          id="scripture-passage-section"
          className="bg-white rounded-xl border border-[#e7e5e4] shadow-xs p-6 sm:p-7"
        >
          {/* Scripture Header & Reading Tools */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#f5f5f4]">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#881337]" />
                <h2 className="text-base sm:text-lg font-bold font-serif text-[#1c1917]">
                  本课全段经文：{lesson.referenceZh}
                </h2>
              </div>
              <p className="text-xs text-[#78716c] mt-0.5">
                完整研经段落（和合本） • 共 {lesson.fullVerses.length} 节
              </p>
            </div>

            {/* Reading preferences: Font size & Copy */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              {/* English toggle */}
              <button
                onClick={() => setShowEnglish(!showEnglish)}
                className={`px-2.5 py-1 text-xs font-medium rounded border ${
                  showEnglish
                    ? 'bg-[#881337] text-white border-[#881337]'
                    : 'bg-[#faf8f5] text-[#57534e] border-[#e7e5e4] hover:bg-white'
                } transition-colors`}
              >
                中英对照
              </button>

              {/* Font size picker */}
              <div className="flex items-center bg-[#faf8f5] border border-[#e7e5e4] rounded p-0.5 text-xs">
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-2 py-0.5 rounded ${fontSize === 'normal' ? 'bg-white font-bold text-[#881337] shadow-2xs' : 'text-[#78716c]'}`}
                  title="标准字号"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-2 py-0.5 rounded ${fontSize === 'large' ? 'bg-white font-bold text-[#881337] shadow-2xs' : 'text-[#78716c]'}`}
                  title="中字号"
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize('xlarge')}
                  className={`px-2 py-0.5 rounded ${fontSize === 'xlarge' ? 'bg-white font-bold text-[#881337] shadow-2xs' : 'text-[#78716c]'}`}
                  title="大字号"
                >
                  A++
                </button>
              </div>

              {/* Copy Full Passage Button */}
              <button
                onClick={handleCopyFullVerses}
                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-md border border-[#e7e5e4] bg-[#faf8f5] hover:bg-white text-[#44403c] transition-colors"
                title="复制整段经文"
              >
                {copiedFullVerses ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">已复制</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>复制经文</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Full Reference Scripture Verses List */}
          <div
            className={`mt-6 space-y-4 font-serif leading-relaxed ${
              fontSize === 'normal'
                ? 'text-sm sm:text-base'
                : fontSize === 'large'
                ? 'text-base sm:text-lg'
                : 'text-lg sm:text-xl'
            }`}
          >
            {lesson.fullVerses.map((verse, idx) => (
              <div
                key={idx}
                className="group p-2 -mx-2 rounded-lg hover:bg-[#faf8f5] transition-colors"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-xs sm:text-sm font-sans font-bold text-[#881337] select-none bg-[#881337]/5 px-1.5 py-0.5 rounded shrink-0">
                    {verse.num}
                  </span>
                  <p className="text-[#1c1917] tracking-normal">
                    {verse.zh}
                  </p>
                </div>

                {showEnglish && (
                  <p className="mt-1.5 ml-7 text-xs sm:text-sm font-sans text-[#78716c] leading-normal italic">
                    {verse.en}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* End of chapter badge */}
          <div className="mt-8 pt-4 border-t border-[#f5f5f4] text-center text-xs text-[#a8a29e]">
            —— 罗马书研经 • {lesson.referenceZh} 经文完毕 ——
          </div>
        </section>
        </>
        )}

      </main>

      {/* Concise Footer */}
      <footer className="mt-auto border-t border-[#e7e5e4] bg-white py-5 text-center text-xs text-[#78716c]">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>BSF 2026-2027 学年度 • 罗马书研经资料库</span>
            <span className="hidden sm:inline">•</span>
            <span>按周自动匹配当周课程 • 直接播放讲道录音</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsQrModalOpen(true)}
              className="inline-flex items-center gap-1 text-[#881337] hover:underline font-semibold cursor-pointer"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>手机扫码 (免登录)</span>
            </button>
            <span>•</span>
            <button
              onClick={() => setViewMode('mobile')}
              className="inline-flex items-center gap-1 text-[#881337] hover:underline font-semibold cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>切换手机极简视图</span>
            </button>
          </div>
        </div>
      </footer>

      {/* 页面右下角浮动扫码入口：无论滑到哪里都方便扫码 */}
      <div className="fixed bottom-5 right-5 z-40 print:hidden">
        <button
          onClick={() => setIsQrModalOpen(true)}
          className="flex items-center gap-1.5 bg-white hover:bg-[#881337] text-[#1c1917] hover:text-white px-3.5 py-2 rounded-full shadow-md hover:shadow-lg border border-[#e7e5e4] hover:border-[#881337] transition-all cursor-pointer group"
          title="手机微信扫一扫（免登录极简模式）"
        >
          <QrCode className="w-4 h-4 text-[#881337] group-hover:text-white transition-colors" />
          <span className="text-xs font-bold">手机扫码</span>
        </button>
      </div>

      {/* QR Code Popup Modal */}
      <QrCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        onSwitchToMobileView={() => setViewMode('mobile')}
      />
    </div>
  );
};

export default App;
