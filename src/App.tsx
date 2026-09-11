import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ROMANS_LESSONS,
  getCurrentLessonIndex,
  LessonInfo
} from './data/romansPassages';
import {
  GOOGLE_DRIVE_LECTURE_AUDIOS
} from './data/driveAudios';
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
  ExternalLink
} from 'lucide-react';

export const App: React.FC = () => {
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

  // Audio state
  // Check if current lesson has an exact preset in Google Drive folder
  const driveAudio = GOOGLE_DRIVE_LECTURE_AUDIOS[selectedLessonIndex];

  // Mode: 'gdrive_embed' (Default, guaranteed to play without CORS block), 'html5' (native audio element)
  const [playerMode, setPlayerMode] = useState<'gdrive_embed' | 'html5'>(
    driveAudio ? 'gdrive_embed' : 'html5'
  );
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
    ? driveAudio.directDownloadUrl
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
    const hasDriveAudio = !!GOOGLE_DRIVE_LECTURE_AUDIOS[selectedLessonIndex];
    setPlayerMode(hasDriveAudio ? 'gdrive_embed' : 'html5');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [selectedLessonIndex]);

  // Copy Key Verse
  const handleCopyKeyVerse = () => {
    const textToCopy = `【${lesson.titleZh} • 本周金句】\n“${lesson.keyVerseZh}” —— ${lesson.keyVerseRefZh}\n\n【核心属灵真理】\n${lesson.keyTruthZh}`;
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

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1917] flex flex-col antialiased">
      {/* 1. Header: Concise, dignified, clear */}
      <header className="bg-white border-b border-[#e7e5e4] sticky top-0 z-30 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
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
                罗马书研经 • 每周核心经文与录音
              </h1>
            </div>

            {/* Quick status badge */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              {isCurrentWeek ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  正在展示当周课程 (第{currentWeekLessonIndex}课)
                </span>
              ) : (
                <button
                  onClick={() => setSelectedLessonIndex(currentWeekLessonIndex)}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  回到当周课程 (第{currentWeekLessonIndex}课)
                </button>
              )}
            </div>
          </div>

          {/* Lesson Navigation & Switcher bar */}
          <div className="mt-4 pt-3 border-t border-[#f5f5f4] flex items-center justify-between gap-2">
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

          {/* Schedule note requested by user */}
          <div className="mt-2 text-[11px] text-[#78716c] flex items-center justify-between">
            <span>
              💡 <strong>排课规则：</strong> 9/14 当周显示第 0 课；每周六（9/19、9/26...）自动顺延切换至下一课。
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area: Focused, clean, readable */}
      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 flex-1">

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

          {/* Core spiritual truth */}
          <div className="mt-4 pt-3 border-t border-[#f5f5f4] flex items-start gap-2 text-xs sm:text-sm text-[#57534e]">
            <Sparkles className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1c1917]">核心属灵真理：</strong>
              <span>{lesson.keyTruthZh}</span>
            </div>
          </div>
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
                  <span>•</span>
                  <span>讲员: {lesson.speakerZh}</span>
                </div>
              </div>
            </div>

            {/* Player mode switcher & controls */}
            <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
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
              <div className="space-y-2">
                <div className="rounded-xl overflow-hidden border border-[#d6d3d1] bg-[#f8f9fa] shadow-inner relative">
                  <iframe
                    key={activeDriveFileId}
                    src={`https://drive.google.com/file/d/${activeDriveFileId}/preview`}
                    className="w-full h-28 border-0"
                    allow="autoplay"
                    title={`Google Drive 音频播放 - ${currentFileName}`}
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between text-xs text-[#78716c] px-1 gap-2">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    使用 Google 云端硬盘原生流媒体播放（无需下载，即点即播）
                  </span>

                  <a
                    href={`https://drive.google.com/file/d/${activeDriveFileId}/view`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#881337] hover:underline font-medium"
                  >
                    <span>在新窗口中打开 Google Drive</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <audio
                  ref={audioRef}
                  controls
                  src={currentAudioSrc}
                  className="w-full h-11 focus:outline-none rounded-lg"
                  onError={() => {
                    if (activeDriveFileId) {
                      setAudioError('Google Drive 触发了访问保护或大文件安全扫描。已为您准备好了原生播放器，建议点击右上角「云端原生播放」直接收听。');
                    } else {
                      setAudioError('音频加载失败，请检查网络或音频链接是否有效。');
                    }
                  }}
                  onCanPlay={() => setAudioError(null)}
                >
                  您的浏览器不支持直接播放 HTML5 MP3 音频。
                </audio>

                {/* Direct helper if audio cannot stream via HTML5 tag */}
                {activeDriveFileId && (
                  <div className="mt-2.5 flex items-center justify-between bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-xs text-amber-900">
                    <span className="leading-relaxed">
                      💡 若此标准播放器显示 0:00 无法缓冲，请一键切换到：
                    </span>
                    <button
                      onClick={() => setPlayerMode('gdrive_embed')}
                      className="ml-2 px-3 py-1 bg-[#881337] text-white font-medium rounded-md hover:bg-[#6e0f2c] transition-colors shrink-0 shadow-2xs"
                    >
                      切换为云端原生播放器
                    </button>
                  </div>
                )}

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

      </main>

      {/* Concise Footer */}
      <footer className="mt-auto border-t border-[#e7e5e4] bg-white py-5 text-center text-xs text-[#78716c]">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>BSF 2026-2027 学年度 • 罗马书研经资料库</span>
          <span>按周自动匹配当周课程 • 直接播放讲道录音</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
