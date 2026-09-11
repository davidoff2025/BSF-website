import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Headphones,
  FileText,
  HelpCircle,
  PenTool,
  Calendar,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Printer,
  Copy,
  Check,
  Download,
  Share2,
  Clock,
  User,
  Radio,
  ExternalLink,
  Layers,
  Sparkles,
  Volume2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BSF_WEEKLY_BUNDLES } from '../data/weeklyBundles';
import { BSF_AUDIO_LECTURES, BSF_CLASS_CALENDARS } from '../data/bsfData';

interface WeeklyBundleModalProps {
  week: number;
  onClose: () => void;
  onSelectWeek: (week: number) => void;
}

export const WeeklyBundleModal: React.FC<WeeklyBundleModalProps> = ({
  week,
  onClose,
  onSelectWeek
}) => {
  const {
    language,
    currentLecture,
    isPlaying,
    currentTime,
    duration,
    playbackRate,
    playLecture,
    togglePlay,
    seekTo,
    skip,
    setPlaybackRate,
    setCurrentPage
  } = useApp();

  const [activeTab, setActiveTab] = useState<'scripture' | 'audio' | 'notes' | 'questions' | 'homiletics' | 'calendar'>('scripture');
  const [copiedVerse, setCopiedVerse] = useState(false);

  const bundle = BSF_WEEKLY_BUNDLES.find(b => b.week === week) || BSF_WEEKLY_BUNDLES[0];
  const matchingLecture = BSF_AUDIO_LECTURES.find(l => l.week === week) || BSF_AUDIO_LECTURES[0];

  const handleCopyScripture = () => {
    const text = language === 'zh'
      ? `${bundle.scriptureReferenceZh}：\n${bundle.versesZh.join('\n')}\n\n背诵经文：${bundle.memoryVerseZh}`
      : `${bundle.scriptureReferenceEn}:\n${bundle.versesEn.join('\n')}\n\nMemory Verse: ${bundle.memoryVerseEn}`;
    navigator.clipboard.writeText(text);
    setCopiedVerse(true);
    setTimeout(() => setCopiedVerse(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePlayCurrentWeek = () => {
    if (matchingLecture) {
      playLecture(matchingLecture);
    }
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div
      id="weekly-bundle-modal"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl border border-[#e7e5e4] w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden my-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="bg-[#faf8f5] border-b border-[#e7e5e4] p-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center px-2.5 py-1 rounded bg-[#881337] text-white text-xs font-serif font-bold uppercase tracking-wider">
              {language === 'zh' ? `第 ${bundle.week} 周研读学习包` : `Week ${bundle.week} Study Bundle`}
            </span>
            <div className="flex items-center gap-1.5 bg-white border border-[#d6d3d1] rounded-lg p-0.5">
              <button
                onClick={() => onSelectWeek(bundle.week > 1 ? bundle.week - 1 : BSF_WEEKLY_BUNDLES.length)}
                className="p-1 text-[#57534e] hover:text-[#881337] hover:bg-[#f4f2ea] rounded transition-colors"
                title={language === 'zh' ? '上一周' : 'Previous Week'}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Jump Dropdown Selector */}
              <select
                value={bundle.week}
                onChange={e => onSelectWeek(Number(e.target.value))}
                aria-label={language === 'zh' ? '选择周次' : 'Select Week'}
                className="text-xs font-bold text-[#881337] bg-transparent outline-none cursor-pointer px-1 py-0.5"
              >
                {BSF_WEEKLY_BUNDLES.map(b => (
                  <option key={b.week} value={b.week}>
                    {language === 'zh' ? `第 ${b.week} 周 (${b.date})` : `W${b.week} (${b.date})`}
                  </option>
                ))}
              </select>

              <button
                onClick={() => onSelectWeek(bundle.week < BSF_WEEKLY_BUNDLES.length ? bundle.week + 1 : 1)}
                className="p-1 text-[#57534e] hover:text-[#881337] hover:bg-[#f4f2ea] rounded transition-colors"
                title={language === 'zh' ? '下一周' : 'Next Week'}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyScripture}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-medium text-[#57534e] hover:text-[#881337] bg-white border border-[#d6d3d1] hover:border-[#881337] transition-all"
              title={language === 'zh' ? '复制经文' : 'Copy Scripture'}
            >
              {copiedVerse ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedVerse ? (language === 'zh' ? '已复制' : 'Copied') : (language === 'zh' ? '复制经文' : 'Copy')}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-medium text-[#57534e] hover:text-[#881337] bg-white border border-[#d6d3d1] hover:border-[#881337] transition-all"
              title={language === 'zh' ? '打印本周资料' : 'Print Bundle'}
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{language === 'zh' ? '打印' : 'Print'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#78716c] hover:text-[#1c1917] hover:bg-[#e7e5e4] transition-colors"
              title={language === 'zh' ? '关闭' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bundle Title Header */}
        <div className="p-4 sm:px-6 bg-white border-b border-[#e7e5e4] shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#78350f] mb-1">
                <span className="font-semibold bg-[#f4f2ea] px-2 py-0.5 rounded border border-[#e7e5e4]">
                  📖 {language === 'zh' ? bundle.scriptureReferenceZh : bundle.scriptureReferenceEn}
                </span>
                <span className="font-mono text-[#78716c]">
                  🎧 {bundle.lectureFileName}
                </span>
                <span className="text-[#a8a29e]">
                  📅 {language === 'zh' ? bundle.displayDateZh : bundle.displayDateEn}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#1c1917]">
                {language === 'zh' ? bundle.themeZh : bundle.themeEn}
              </h2>
            </div>

            {/* Quick Audio Play Button inside Bundle */}
            <button
              onClick={handlePlayCurrentWeek}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shrink-0 ${
                currentLecture?.week === bundle.week && isPlaying
                  ? 'bg-[#881337] text-white shadow-xs animate-pulse'
                  : 'bg-[#fdf2f4] text-[#881337] hover:bg-[#881337] hover:text-white border border-[#f43f5e]/30'
              }`}
            >
              {currentLecture?.week === bundle.week && isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>{language === 'zh' ? '讲道录音播放中...' : 'Lecture Playing...'}</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>{language === 'zh' ? '在线播放本周讲道' : 'Play Week Lecture'}</span>
                </>
              )}
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pt-3 mt-2 border-t border-[#f5f5f4]">
            {[
              { id: 'scripture', labelZh: '核心经文与真理', labelEn: 'Scripture & Truths', icon: <BookOpen className="w-3.5 h-3.5" /> },
              { id: 'audio', labelZh: '讲道录音在线试听', labelEn: 'Lecture Audio Stream', icon: <Headphones className="w-3.5 h-3.5" /> },
              { id: 'notes', labelZh: '官方讲义与释经注释', labelEn: 'Study Notes & Exegesis', icon: <FileText className="w-3.5 h-3.5" /> },
              { id: 'questions', labelZh: '每日研学讨论问题集', labelEn: 'Daily Study Questions', icon: <HelpCircle className="w-3.5 h-3.5" /> },
              { id: 'homiletics', labelZh: '本周讲道法指引', labelEn: 'Homiletics Worksheet', icon: <PenTool className="w-3.5 h-3.5" /> },
              { id: 'calendar', labelZh: '班级日历同步', labelEn: 'Class Schedule', icon: <Calendar className="w-3.5 h-3.5" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#881337] text-white shadow-2xs'
                    : 'text-[#78716c] hover:text-[#1c1917] hover:bg-[#f5f5f4]'
                }`}
              >
                {tab.icon}
                <span>{language === 'zh' ? tab.labelZh : tab.labelEn}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-[#faf9f5]">
          {/* TAB 1: SCRIPTURE & TRUTHS */}
          {activeTab === 'scripture' && (
            <div className="space-y-6">
              {/* Memory Verse Callout */}
              <div className="bg-[#fefce8] border border-amber-200 rounded-lg p-4 shadow-2xs">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold text-amber-800 tracking-wider uppercase flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {language === 'zh' ? '本周背诵金句 (Memory Verse)' : 'Weekly Memory Verse'}
                  </span>
                  <button
                    onClick={handleCopyScripture}
                    className="text-[11px] font-semibold text-amber-900 underline hover:text-amber-700"
                  >
                    {language === 'zh' ? '一键复制' : 'Copy'}
                  </button>
                </div>
                <p className="font-serif text-sm sm:text-base font-bold text-[#1c1917] leading-relaxed">
                  “{language === 'zh' ? bundle.memoryVerseZh : bundle.memoryVerseEn}”
                </p>
              </div>

              {/* Core Scripture Verses */}
              <div className="bg-white border border-[#e7e5e4] rounded-lg p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#e7e5e4] pb-2">
                  <h3 className="font-serif font-bold text-base text-[#1c1917] flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#881337]" />
                    <span>{language === 'zh' ? `${bundle.scriptureReferenceZh} 经文全文` : `Passage: ${bundle.scriptureReferenceEn}`}</span>
                  </h3>
                  <span className="text-xs text-[#78716c] font-mono">
                    {bundle.versesZh.length} {language === 'zh' ? '个段落' : 'sections'}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  {(language === 'zh' ? bundle.versesZh : bundle.versesEn).map((verse, idx) => (
                    <div key={idx} className="flex gap-3 text-sm text-[#292524] leading-relaxed">
                      <span className="font-mono text-xs text-[#881337] font-bold select-none shrink-0 w-6 text-right">
                        {idx + 1}.
                      </span>
                      <p className="font-serif">{verse}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Spiritual Truth */}
              <div className="bg-white border border-[#e7e5e4] rounded-lg p-5 shadow-xs space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#78350f]">
                  {language === 'zh' ? '属灵核心真理 (Key Spiritual Principle)' : 'Key Spiritual Principle'}
                </h4>
                <p className="text-sm text-[#44403c] leading-relaxed">
                  {language === 'zh' ? bundle.keyTruthZh : bundle.keyTruthEn}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: AUDIO STREAM */}
          {activeTab === 'audio' && (
            <div className="space-y-6">
              <div className="bg-white border border-[#e7e5e4] rounded-lg p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#e7e5e4] pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#fdf2f4] text-[#881337] flex items-center justify-center">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-[#1c1917]">
                        {language === 'zh' ? '官方音频讲道在线收听' : 'Official Lecture Audio Online'}
                      </h3>
                      <p className="text-xs text-[#78716c] font-mono">
                        {bundle.lectureFileName} • {matchingLecture.duration}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f4f2ea] text-xs font-semibold text-[#78350f]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{language === 'zh' ? '网页端直接播放，无需下载' : 'In-Browser Streaming'}</span>
                  </span>
                </div>

                {/* Direct Playback Controls */}
                <div className="p-4 bg-[#faf9f5] rounded-lg border border-[#e7e5e4] space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handlePlayCurrentWeek}
                        className="w-11 h-11 rounded-full bg-[#881337] text-white flex items-center justify-center shadow-md hover:bg-[#700f2b] transition-transform active:scale-95"
                      >
                        {currentLecture?.week === bundle.week && isPlaying ? (
                          <Pause className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        )}
                      </button>

                      <div>
                        <div className="text-xs font-serif font-bold text-[#1c1917]">
                          {language === 'zh' ? matchingLecture.titleZh : matchingLecture.titleEn}
                        </div>
                        <div className="text-[11px] text-[#78716c] flex items-center gap-2">
                          <span>{language === 'zh' ? matchingLecture.speakerZh : matchingLecture.speakerEn}</span>
                          <span>•</span>
                          <span className="font-mono">
                            {currentLecture?.week === bundle.week ? formatTime(currentTime) : '00:00'} / {matchingLecture.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => skip(-15)}
                        className="px-2 py-1 text-xs rounded bg-white border border-[#d6d3d1] text-[#57534e] hover:text-[#881337]"
                      >
                        -15s
                      </button>
                      <button
                        onClick={() => skip(15)}
                        className="px-2 py-1 text-xs rounded bg-white border border-[#d6d3d1] text-[#57534e] hover:text-[#881337]"
                      >
                        +15s
                      </button>
                      <select
                        value={playbackRate}
                        onChange={e => setPlaybackRate(Number(e.target.value))}
                        aria-label={language === 'zh' ? '播放倍速' : 'Playback speed'}
                        className="px-2 py-1 text-xs rounded bg-white border border-[#d6d3d1] text-[#57534e] outline-none"
                      >
                        <option value={0.75}>0.75x</option>
                        <option value={1}>1.0x</option>
                        <option value={1.25}>1.25x</option>
                        <option value={1.5}>1.5x</option>
                      </select>
                    </div>
                  </div>

                  {/* Scrub Bar */}
                  {currentLecture?.week === bundle.week && (
                    <div
                      onClick={e => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickRatio = (e.clientX - rect.left) / rect.width;
                        seekTo(clickRatio * duration);
                      }}
                      className="w-full h-2 bg-[#e7e5e4] rounded-full cursor-pointer relative overflow-hidden"
                    >
                      <div
                        className="h-full bg-[#881337] transition-all"
                        style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                      />
                    </div>
                  )}
                </div>

                {/* Lecture Expository Outline */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#57534e]">
                    {language === 'zh' ? '讲道录音核心要点 (Expository Points)' : 'Lecture Key Points'}
                  </h4>
                  <div className="space-y-2">
                    {(language === 'zh' ? matchingLecture.keyPointsZh : matchingLecture.keyPointsEn).map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#292524]">
                        <span className="w-4 h-4 rounded-full bg-[#f4f2ea] text-[#78350f] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p>{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: STUDY NOTES & COMMENTARY */}
          {activeTab === 'notes' && (
            <div className="space-y-6">
              <div className="bg-white border border-[#e7e5e4] rounded-lg p-5 shadow-xs space-y-4">
                <div className="border-b border-[#e7e5e4] pb-2">
                  <span className="text-[11px] font-bold text-[#881337] uppercase tracking-wider">
                    BSF Official Exegesis & Study Notes
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1c1917] mt-0.5">
                    {language === 'zh' ? '经文释经注释与大纲分段' : 'Expository Divisions & Commentary'}
                  </h3>
                </div>

                {/* Divisions */}
                <div className="space-y-3">
                  {(language === 'zh' ? bundle.notesZh.divisions : bundle.notesEn.divisions).map((div, i) => (
                    <div key={i} className="border border-[#e7e5e4] rounded-lg p-3.5 bg-[#faf9f5]">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-[#881337] text-white text-[11px] font-bold rounded">
                          {div.range}
                        </span>
                        <h4 className="font-serif font-bold text-sm text-[#1c1917]">
                          {div.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#57534e] leading-relaxed mt-1">
                        {div.explanation}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Historical & Theological Insights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#f5f5f4] p-4 rounded-lg border border-[#e7e5e4]">
                    <h5 className="text-xs font-bold text-[#78350f] uppercase tracking-wider mb-1">
                      {language === 'zh' ? '历史与文脉背景' : 'Historical Context'}
                    </h5>
                    <p className="text-xs text-[#44403c] leading-relaxed">
                      {language === 'zh' ? bundle.notesZh.historicalContext : bundle.notesEn.historicalContext}
                    </p>
                  </div>

                  <div className="bg-[#f5f5f4] p-4 rounded-lg border border-[#e7e5e4]">
                    <h5 className="text-xs font-bold text-[#78350f] uppercase tracking-wider mb-1">
                      {language === 'zh' ? '教义与神学核心' : 'Theological Core'}
                    </h5>
                    <p className="text-xs text-[#44403c] leading-relaxed">
                      {language === 'zh' ? bundle.notesZh.theologicalTruth : bundle.notesEn.theologicalTruth}
                    </p>
                  </div>
                </div>

                {/* Practical Life Applications */}
                <div className="bg-[#faf8f5] border border-[#e7e5e4] p-4 rounded-lg space-y-2">
                  <h5 className="text-xs font-bold text-[#1c1917] uppercase tracking-wider">
                    {language === 'zh' ? '个人生命与属灵应用思考' : 'Practical Discipleship Applications'}
                  </h5>
                  <ul className="space-y-1.5 text-xs text-[#44403c] list-disc list-inside">
                    {(language === 'zh' ? bundle.notesZh.practicalApplication : bundle.notesEn.practicalApplication).map((app, i) => (
                      <li key={i}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DAILY STUDY QUESTIONS */}
          {activeTab === 'questions' && (
            <div className="space-y-4">
              <div className="bg-white border border-[#e7e5e4] rounded-lg p-5 shadow-xs">
                <div className="border-b border-[#e7e5e4] pb-2 mb-4">
                  <span className="text-[11px] font-bold text-[#881337] uppercase tracking-wider">
                    BSF 6-Day Structured Lesson
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1c1917] mt-0.5">
                    {language === 'zh' ? '每日研读讨论问题集 (Day 1 - Day 6)' : 'Daily Discussion Questions (Day 1 - Day 6)'}
                  </h3>
                  <p className="text-xs text-[#78716c] mt-1">
                    {language === 'zh'
                      ? '建议每天完成一天的经文细读、默想与问题解答，在周末的小组研讨中坦诚交流。'
                      : 'Recommended to engage one day at a time for deeper reflection ahead of your group session.'}
                  </p>
                </div>

                <div className="space-y-3">
                  {bundle.dailyQuestions.map(q => (
                    <div key={q.day} className="border border-[#e7e5e4] rounded-lg p-4 bg-[#faf9f5]">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-serif font-bold text-xs sm:text-sm text-[#881337]">
                          {language === 'zh' ? q.dayTitleZh : q.dayTitleEn}
                        </span>
                        <span className="px-2 py-0.5 bg-white border border-[#d6d3d1] rounded text-[11px] font-mono text-[#57534e]">
                          {q.scriptureReference}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#1c1917] font-medium leading-relaxed mb-2">
                        {language === 'zh' ? q.questionZh : q.questionEn}
                      </p>
                      {q.reflectionHintZh && (
                        <div className="text-[11px] text-[#78716c] bg-white p-2.5 rounded border border-[#e7e5e4] italic">
                          💡 {language === 'zh' ? `默想与提示：${q.reflectionHintZh}` : `Hint: ${q.reflectionHintEn}`}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: HOMILETICS */}
          {activeTab === 'homiletics' && (
            <div className="space-y-4">
              <div className="bg-white border border-[#e7e5e4] rounded-lg p-5 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e7e5e4] pb-3">
                  <div>
                    <span className="text-[11px] font-bold text-[#6d28d9] uppercase tracking-wider">
                      BSF 5-Step Homiletics Methodology
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#1c1917] mt-0.5">
                      {bundle.homileticsInfo ? (language === 'zh' ? bundle.homileticsInfo.topicZh : bundle.homileticsInfo.topicEn) : (language === 'zh' ? '本周讲道法练习' : 'Weekly Homiletics Exercise')}
                    </h3>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      setCurrentPage('homiletics');
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#6d28d9] hover:bg-[#5b21b6] rounded-lg transition-colors shrink-0 shadow-xs"
                  >
                    <PenTool className="w-3.5 h-3.5" />
                    <span>{language === 'zh' ? '在讲道法工作台填写提交' : 'Open Homiletics Workbench'}</span>
                  </button>
                </div>

                {bundle.homileticsInfo ? (
                  <div className="space-y-4">
                    <div className="p-3 bg-[#f5f3ff] border border-purple-200 rounded-lg text-xs text-[#5b21b6]">
                      <span className="font-bold">{language === 'zh' ? '作业截止日期：' : 'Due Date: '}</span>
                      <span>{bundle.homileticsInfo.dueDate}</span>
                    </div>

                    {/* Divisions */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[#1c1917] uppercase tracking-wider">
                        {language === 'zh' ? '参考经文分段 (Divisions & Principles)' : 'Divisions & Principles'}
                      </h4>
                      {bundle.homileticsInfo.divisions.map((d, i) => (
                        <div key={i} className="p-3 bg-[#faf9f5] border border-[#e7e5e4] rounded-lg text-xs">
                          <div className="font-bold text-[#881337]">{d.verses} • {d.titleZh}</div>
                          <div className="text-[#57534e] mt-1 italic">属灵原则：{d.principleZh}</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#faf9f5] border border-[#e7e5e4] p-3.5 rounded-lg space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-[#78350f]">主旨句 (Subject Sentence)：</span>
                        <span className="text-[#1c1917] ml-1">{bundle.homileticsInfo.subjectSentenceZh}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#78350f]">目的 (Aim)：</span>
                        <span className="text-[#1c1917] ml-1">{bundle.homileticsInfo.aimZh}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 text-center text-xs text-[#78716c] bg-[#faf9f5] rounded-lg border border-[#e7e5e4]">
                    {language === 'zh'
                      ? '本周无独立讲道法作业截止。学员可专注于每日读经与经文释经注释预习。'
                      : 'No formal homiletics submission due for this week. Enjoy the regular exegesis.'}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 6: CLASS CALENDAR */}
          {activeTab === 'calendar' && (
            <div className="space-y-4">
              <div className="bg-white border border-[#e7e5e4] rounded-lg p-5 shadow-xs space-y-4">
                <div className="border-b border-[#e7e5e4] pb-2">
                  <span className="text-[11px] font-bold text-[#881337] uppercase tracking-wider">
                    Weekly Schedule Across All Classes
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1c1917] mt-0.5">
                    {language === 'zh' ? '全班级日程同步安排 (各班级日历)' : 'All Classes Weekly Schedule Alignment'}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BSF_CLASS_CALENDARS.map(cal => {
                    const sched = cal.schedule.find(s => s.week === bundle.week);
                    return (
                      <div key={cal.id} className="border border-[#e7e5e4] rounded-lg p-3.5 bg-[#faf9f5]">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-[#881337] text-white rounded">
                            {cal.code}
                          </span>
                          <span className="text-xs font-mono text-[#57534e]">
                            {sched?.date || cal.meetingTimeZh.split(' ')[0]}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-sm text-[#1c1917]">
                          {language === 'zh' ? cal.classNameZh : cal.classNameEn}
                        </h4>
                        <p className="text-xs text-[#78716c] mt-1">
                          {sched ? (language === 'zh' ? sched.lessonNameZh : sched.lessonNameEn) : (language === 'zh' ? '研经周' : 'Study Session')}
                        </p>
                        <div className="text-[11px] text-[#a8a29e] mt-2">
                          📍 {language === 'zh' ? cal.locationZh : cal.locationEn}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
