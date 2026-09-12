import React, { useState, useRef, useEffect } from 'react';
import { LessonInfo, ROMANS_LESSONS } from '../data/romansPassages';
import { DriveLectureAudio } from '../data/driveAudios';
import {
  Volume2,
  BookOpen,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Monitor,
  RotateCcw,
  Sparkles,
  Play,
  Pause
} from 'lucide-react';

interface MobileLessonViewProps {
  lesson: LessonInfo;
  selectedLessonIndex: number;
  onSelectLessonIndex: (index: number) => void;
  currentWeekLessonIndex: number;
  onSwitchToFullView: () => void;
  driveAudio?: DriveLectureAudio;
}

export const MobileLessonView: React.FC<MobileLessonViewProps> = ({
  lesson,
  selectedLessonIndex,
  onSelectLessonIndex,
  currentWeekLessonIndex,
  onSwitchToFullView,
  driveAudio
}) => {
  const [copiedVerse, setCopiedVerse] = useState(false);
  const [copiedScripture, setCopiedScripture] = useState(false);
  const [fontSize, setFontSize] = useState<'base' | 'lg' | 'xl'>('lg');
  const [playerType, setPlayerType] = useState<'embed' | 'html5'>('html5');
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioLoadError, setAudioLoadError] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isCurrentWeek = selectedLessonIndex === currentWeekLessonIndex;

  // Reset audio error on lesson switch
  useEffect(() => {
    setAudioLoadError(false);
    setIsPlaying(false);
  }, [selectedLessonIndex]);

  // Copy key verse
  const handleCopyKeyVerse = () => {
    const text = `【${lesson.titleZh} • 本周金句】\n“${lesson.keyVerseZh}” —— ${lesson.keyVerseRefZh}`;
    navigator.clipboard.writeText(text);
    setCopiedVerse(true);
    setTimeout(() => setCopiedVerse(false), 2000);
  };

  // Copy whole scripture
  const handleCopyScripture = () => {
    const text = `【${lesson.referenceZh} 全段经文】\n\n` +
      lesson.fullVerses.map(v => `${v.num} ${v.zh}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedScripture(true);
    setTimeout(() => setCopiedScripture(false), 2000);
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1917] flex flex-col font-sans pb-12">
      {/* 1. Mobile Minimal Header */}
      <header className="bg-white border-b border-[#e7e5e4] sticky top-0 z-40 px-3 py-2.5 shadow-2xs">
        <div className="flex items-center justify-between gap-2">
          {/* Previous Lesson */}
          <button
            onClick={() => onSelectLessonIndex(Math.max(0, selectedLessonIndex - 1))}
            disabled={selectedLessonIndex === 0}
            className="p-1.5 rounded-md border border-[#e7e5e4] bg-[#faf8f5] disabled:opacity-30 disabled:pointer-events-none active:bg-stone-200"
            aria-label="上一课"
          >
            <ChevronLeft className="w-5 h-5 text-[#44403c]" />
          </button>

          {/* Lesson Selector Dropdown */}
          <div className="flex-1 min-w-0 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-0.5">
              <span className="text-[11px] font-bold px-1.5 py-0.2 rounded bg-[#881337] text-white">
                第 {selectedLessonIndex} 课
              </span>
              {isCurrentWeek ? (
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">
                  当周课程
                </span>
              ) : (
                <button
                  onClick={() => onSelectLessonIndex(currentWeekLessonIndex)}
                  className="text-[10px] text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded flex items-center gap-0.5"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  回第{currentWeekLessonIndex}课
                </button>
              )}
            </div>

            <select
              value={selectedLessonIndex}
              onChange={(e) => onSelectLessonIndex(Number(e.target.value))}
              aria-label="选择课程"
              className="w-full text-xs font-bold text-[#1c1917] bg-transparent text-center focus:outline-none truncate py-0.5"
            >
              {ROMANS_LESSONS.map((l) => (
                <option key={l.lessonNumber} value={l.lessonNumber}>
                  {l.lessonNumber === currentWeekLessonIndex ? '★ ' : ''}
                  第{l.lessonNumber}课：{l.referenceZh}
                </option>
              ))}
            </select>
          </div>

          {/* Next Lesson */}
          <button
            onClick={() => onSelectLessonIndex(Math.min(ROMANS_LESSONS.length - 1, selectedLessonIndex + 1))}
            disabled={selectedLessonIndex === ROMANS_LESSONS.length - 1}
            className="p-1.5 rounded-md border border-[#e7e5e4] bg-[#faf8f5] disabled:opacity-30 disabled:pointer-events-none active:bg-stone-200"
            aria-label="下一课"
          >
            <ChevronRight className="w-5 h-5 text-[#44403c]" />
          </button>
        </div>
      </header>

      {/* Main Minimal Content (只显示本课背诵金句，MP3播放，以及相关经文) */}
      <main className="px-3.5 py-4 space-y-4 max-w-lg mx-auto w-full flex-1">

        {/* ============================================================ */}
        {/* 1. 本课背诵金句 */}
        {/* ============================================================ */}
        <section
          id="mobile-key-verse"
          className="bg-white rounded-xl border border-[#e7e5e4] p-4 shadow-xs relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#881337]"></div>

          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[#881337] tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#881337]"></span>
              本课背诵金句
            </span>

            <button
              onClick={handleCopyKeyVerse}
              className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded border border-[#e7e5e4] bg-[#faf8f5] active:bg-stone-200 text-[#44403c]"
            >
              {copiedVerse ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700">已复制</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>复制</span>
                </>
              )}
            </button>
          </div>

          <div className="pl-3 border-l-3 border-[#881337] bg-[#fdf2f4]/30 py-2.5 pr-2 rounded-r-lg my-2">
            <p className="font-serif text-base sm:text-lg font-semibold text-[#1c1917] leading-relaxed">
              “{lesson.keyVerseZh}”
            </p>
            <div className="text-right text-xs font-serif font-bold text-[#881337] mt-1.5">
              —— {lesson.keyVerseRefZh}
            </div>
          </div>
        </section>


        {/* ============================================================ */}
        {/* 2. MP3 播放 */}
        {/* ============================================================ */}
        <section
          id="mobile-mp3-player"
          className="bg-white rounded-xl border border-[#e7e5e4] p-4 shadow-xs"
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1.5 min-w-0">
              <div className="w-6 h-6 rounded bg-[#881337]/10 flex items-center justify-center text-[#881337] shrink-0">
                <Volume2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-[#1c1917] truncate">
                讲道录音 MP3
              </span>
            </div>

            <span className="text-[11px] text-[#78716c] truncate font-mono">
              第 {selectedLessonIndex} 课音频
            </span>
          </div>

          {/* Player Mode Choice */}
          {driveAudio ? (
            <div>
              {/* Google Drive Preview Player (Guaranteed to stream without CORS or mobile background drop) */}
              {playerType === 'embed' ? (
                <div className="space-y-2">
                  <div className="w-full h-24 sm:h-28 rounded-lg overflow-hidden border border-[#e7e5e4] bg-stone-900 shadow-inner">
                    <iframe
                      src={driveAudio.drivePreviewUrl}
                      title={`第 ${selectedLessonIndex} 课录音`}
                      className="w-full h-full border-0"
                      allow="autoplay"
                    />
                  </div>

                  <div className="flex items-center justify-end text-[11px] px-1">
                    <button
                      onClick={() => setPlayerType('html5')}
                      className="text-[#881337] hover:underline font-medium cursor-pointer"
                    >
                      切换极简播放条
                    </button>
                  </div>
                </div>
              ) : (
                /* Native HTML5 Compact Player */
                <div className="bg-[#faf8f5] p-3 rounded-lg border border-[#e7e5e4] space-y-2.5">
                  <audio
                    ref={audioRef}
                    key={`mobile-audio-${selectedLessonIndex}`}
                    preload="metadata"
                    playsInline
                    controls
                    className="w-full h-10"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    onError={() => setAudioLoadError(true)}
                  >
                    <source src={driveAudio.directStreamUrl} type="audio/mpeg" />
                    <source src={driveAudio.fallbackStreamUrl} type="audio/mpeg" />
                    您的手机浏览器暂不支持直接音频播放
                  </audio>

                  {audioLoadError && (
                    <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 space-y-1.5">
                      <p className="font-semibold flex items-center gap-1">
                        <span>⚠️ 直接播放遇到网络受限</span>
                      </p>
                      <p className="text-[11px] text-amber-800 leading-normal">
                        若您在微信或特定网络下无法加载，可切换备用播放器或下载：
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <button
                          onClick={() => setPlayerType('embed')}
                          className="px-2.5 py-1 rounded bg-[#881337] text-white text-[11px] font-bold cursor-pointer"
                        >
                          切换备用播放器 ▶
                        </button>
                        <a
                          href={driveAudio.directDownloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded bg-white border border-amber-300 text-amber-900 text-[11px] font-bold inline-flex items-center gap-1"
                        >
                          <span>下载 MP3</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#e7e5e4] text-xs">
                    <div className="flex items-center gap-1 text-[11px] text-[#78716c]">
                      <span>倍速:</span>
                      {[1, 1.25, 1.5].map((speed) => (
                        <button
                          key={speed}
                          onClick={() => handleSpeedChange(speed)}
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold cursor-pointer ${
                            playbackSpeed === speed
                              ? 'bg-[#881337] text-white'
                              : 'bg-white text-[#44403c] border border-[#d6d3d1]'
                          }`}
                        >
                          {speed}x
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => setPlayerType('embed')}
                        className="text-[11px] text-[#881337] hover:underline font-medium cursor-pointer"
                      >
                        备用播放器
                      </button>
                      <a
                        href={driveAudio.directDownloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#78716c] hover:text-[#881337] inline-flex items-center gap-0.5"
                        title="下载 MP3"
                      >
                        <span>下载</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-3 bg-stone-50 rounded-lg text-center text-xs text-[#78716c]">
              暂未收录该课录音，请关注后续更新。
            </div>
          )}
        </section>


        {/* ============================================================ */}
        {/* 3. 相关经文 */}
        {/* ============================================================ */}
        <section
          id="mobile-scripture"
          className="bg-white rounded-xl border border-[#e7e5e4] p-4 shadow-xs"
        >
          {/* Scripture Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#f5f5f4]">
            <div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#881337]" />
                <h2 className="text-sm font-bold font-serif text-[#1c1917]">
                  本课经文：{lesson.referenceZh}
                </h2>
              </div>
              <span className="text-[11px] text-[#78716c]">
                共 {lesson.fullVerses.length} 节
              </span>
            </div>

            {/* Reading font size & Copy */}
            <div className="flex items-center gap-1.5">
              {/* Font size */}
              <div className="flex items-center bg-[#faf8f5] border border-[#e7e5e4] rounded p-0.5 text-xs">
                <button
                  onClick={() => setFontSize('base')}
                  className={`px-1.5 py-0.5 rounded text-[11px] ${
                    fontSize === 'base' ? 'bg-white font-bold text-[#881337] shadow-2xs' : 'text-[#78716c]'
                  }`}
                  title="标准字号"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('lg')}
                  className={`px-1.5 py-0.5 rounded text-[11px] ${
                    fontSize === 'lg' ? 'bg-white font-bold text-[#881337] shadow-2xs' : 'text-[#78716c]'
                  }`}
                  title="中字号"
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize('xl')}
                  className={`px-1.5 py-0.5 rounded text-[11px] ${
                    fontSize === 'xl' ? 'bg-white font-bold text-[#881337] shadow-2xs' : 'text-[#78716c]'
                  }`}
                  title="大字号"
                >
                  A++
                </button>
              </div>

              {/* Copy */}
              <button
                onClick={handleCopyScripture}
                className="p-1.5 rounded border border-[#e7e5e4] bg-[#faf8f5] active:bg-stone-200 text-[#44403c]"
                title="复制整段经文"
              >
                {copiedScripture ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Scripture Verse List */}
          <div
            className={`mt-4 space-y-3 font-serif leading-relaxed ${
              fontSize === 'base'
                ? 'text-sm'
                : fontSize === 'lg'
                ? 'text-base'
                : 'text-lg'
            }`}
          >
            {lesson.fullVerses.map((verse, idx) => (
              <div key={idx} className="flex items-baseline gap-2">
                <span className="text-xs font-sans font-bold text-[#881337] bg-[#881337]/10 px-1.5 py-0.2 rounded shrink-0 select-none">
                  {verse.num}
                </span>
                <p className="text-[#1c1917] tracking-normal">
                  {verse.zh}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-3 border-t border-[#f5f5f4] text-center text-[11px] text-[#a8a29e]">
            —— {lesson.referenceZh} 经文完毕 ——
          </div>
        </section>
      </main>

      {/* Bottom Switcher: Switch to Full Desktop Mode */}
      <footer className="mt-auto px-4 py-3 bg-white border-t border-[#e7e5e4] text-center">
        <div className="flex flex-col items-center justify-center gap-1.5">
          <button
            onClick={onSwitchToFullView}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#d6d3d1] bg-[#faf8f5] hover:bg-white text-xs font-semibold text-[#44403c] active:bg-stone-200 shadow-2xs transition-colors"
          >
            <Monitor className="w-3.5 h-3.5 text-[#881337]" />
            <span>切换至电脑完整版（含16份班级日历）</span>
          </button>
          <span className="text-[10px] text-[#a8a29e]">
            当前已开启手机极简研习模式 • 仅保留金句、录音与经文
          </span>
        </div>
      </footer>
    </div>
  );
};
