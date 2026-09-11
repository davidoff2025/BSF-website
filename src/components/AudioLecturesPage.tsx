import React, { useState } from 'react';
import {
  Headphones,
  Play,
  Pause,
  Calendar,
  Clock,
  BookOpen,
  User,
  Search,
  CheckCircle2,
  Filter,
  FileAudio,
  Radio,
  Volume2,
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BSF_AUDIO_LECTURES } from '../data/bsfData';
import { AudioPlayer } from './AudioPlayer';

export const AudioLecturesPage: React.FC = () => {
  const {
    language,
    currentLecture,
    isPlaying,
    playLecture,
    togglePlay,
    currentLearnerProgress,
    toggleLectureCompleted,
    openWeeklyBundle
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWeekFilter, setSelectedWeekFilter] = useState<'all' | 'early' | 'mid' | 'advanced'>('all');

  const filteredLectures = BSF_AUDIO_LECTURES.filter(lec => {
    // Week range filter
    if (selectedWeekFilter === 'early' && (lec.week < 1 || lec.week > 10)) return false;
    if (selectedWeekFilter === 'mid' && (lec.week < 11 || lec.week > 20)) return false;
    if (selectedWeekFilter === 'advanced' && lec.week < 21) return false;

    // Search keyword
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      lec.fileName.toLowerCase().includes(term) ||
      lec.titleZh.toLowerCase().includes(term) ||
      lec.titleEn.toLowerCase().includes(term) ||
      lec.scriptureZh.toLowerCase().includes(term) ||
      lec.scriptureEn.toLowerCase().includes(term) ||
      lec.date.includes(term)
    );
  });

  return (
    <div className="space-y-6">
      {/* Top Editorial Banner */}
      <div className="border-b border-[#e7e5e4] pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#881337] font-semibold uppercase tracking-wider mb-1">
              <Headphones className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '全学年序列录音：罗马书' : 'Full School Year Audio Archive: Romans'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c1917]">
              {language === 'zh' ? '每周讲道音频 • 在线直接播放' : 'Weekly Expository Lecture Audio • Online Player'}
            </h2>
            <p className="text-sm text-[#78716c] mt-1 max-w-3xl">
              {language === 'zh'
                ? '自2026年9月12日第1周起，严格按顺序列载全学年逐周录音文件（首周为 ROM_Lecture_00_MEN_062-26.mp2，次周为 ROM_Lecture_01_MEN_062-27.mp3 并持续顺延）。所有音频可在网页直接播放，无需下载。'
                : 'Starting Week 1 on Sep 12, 2026, sequentially indexed (Week 1: ROM_Lecture_00_MEN_062-26.mp2, Week 2: ROM_Lecture_01_MEN_062-27.mp3, continuing sequentially). All audio plays directly in browser without downloading.'}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded bg-[#f4f2ea] text-[#78350f] border border-[#e7e5e4]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{language === 'zh' ? '30周全学年在线音频库' : '30-Week Online Audio Stream'}</span>
          </div>
        </div>
      </div>

      {/* Featured Master Audio Player */}
      <div>
        <div className="text-xs font-bold text-[#57534e] uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5 text-[#881337]" />
          <span>{language === 'zh' ? '当前在线播放控制台' : 'Active Audio Streaming Console'}</span>
        </div>
        <AudioPlayer />
      </div>

      {/* Search & Range Filters */}
      <div className="bg-white border border-[#e7e5e4] p-4 rounded-lg shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[#57534e] flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            {language === 'zh' ? '阶段筛选:' : 'Term Filter:'}
          </span>
          <button
            onClick={() => setSelectedWeekFilter('all')}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
              selectedWeekFilter === 'all'
                ? 'bg-[#881337] text-white'
                : 'bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]'
            }`}
          >
            {language === 'zh' ? '全部 (30周)' : 'All 30 Weeks'}
          </button>
          <button
            onClick={() => setSelectedWeekFilter('early')}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
              selectedWeekFilter === 'early'
                ? 'bg-[#881337] text-white'
                : 'bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]'
            }`}
          >
            {language === 'zh' ? '第1~10周 (秋季初段)' : 'Weeks 1-10 (Early)'}
          </button>
          <button
            onClick={() => setSelectedWeekFilter('mid')}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
              selectedWeekFilter === 'mid'
                ? 'bg-[#881337] text-white'
                : 'bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]'
            }`}
          >
            {language === 'zh' ? '第11~20周 (冬季中段)' : 'Weeks 11-20 (Mid)'}
          </button>
          <button
            onClick={() => setSelectedWeekFilter('advanced')}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
              selectedWeekFilter === 'advanced'
                ? 'bg-[#881337] text-white'
                : 'bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]'
            }`}
          >
            {language === 'zh' ? '第21~30周 (春季后段)' : 'Weeks 21-30 (Spring)'}
          </button>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-[#a8a29e] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder={language === 'zh' ? '搜索经文、讲题或文件名...' : 'Search scripture, title, file...'}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#f5f5f4] border border-[#d6d3d1] focus:border-[#881337] focus:bg-white rounded outline-none transition-all"
          />
        </div>
      </div>

      {/* Sequential Lectures Listing */}
      <div className="space-y-3">
        {filteredLectures.map(lecture => {
          const isThisPlaying = currentLecture?.week === lecture.week && isPlaying;
          const isThisLoaded = currentLecture?.week === lecture.week;
          const isCompleted = currentLearnerProgress.completedLectures.includes(lecture.week);

          return (
            <div
              key={lecture.week}
              id={`lecture-item-${lecture.week}`}
              className={`border rounded-lg p-4 sm:p-5 transition-all bg-white shadow-xs ${
                isThisLoaded
                  ? 'border-[#881337] ring-1 ring-[#881337]/20 bg-[#fdfafb]'
                  : 'border-[#e7e5e4] hover:border-[#d6d3d1]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                {/* Left side: Play button & Lecture content */}
                <div className="flex items-start gap-3.5 flex-1">
                  <button
                    onClick={() => {
                      if (isThisLoaded) {
                        togglePlay();
                      } else {
                        playLecture(lecture);
                      }
                    }}
                    className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-xs ${
                      isThisPlaying
                        ? 'bg-[#881337] text-white hover:bg-[#700f2b]'
                        : 'bg-[#f4f2ea] hover:bg-[#881337] text-[#881337] hover:text-white'
                    }`}
                    title={isThisPlaying ? '暂停播放' : '在网页中直接播放此讲道'}
                  >
                    {isThisPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 bg-[#f4f2ea] text-[#78350f] text-xs font-bold rounded">
                        {language === 'zh' ? `第 ${lecture.week} 周` : `Week ${lecture.week}`}
                      </span>

                      {/* Explicit Required File Name sequence representation */}
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#881337] bg-[#fdf2f4] px-2 py-0.5 rounded font-semibold">
                        <FileAudio className="w-3 h-3" />
                        {lecture.fileName}
                      </span>

                      <span className="text-xs text-[#78716c] flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {language === 'zh' ? lecture.displayDateZh : lecture.displayDateEn}
                      </span>

                      <span className="text-xs text-[#78716c] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {lecture.duration}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#1c1917] leading-snug">
                      {language === 'zh' ? lecture.titleZh : lecture.titleEn}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#57534e]">
                      <span className="inline-flex items-center gap-1 font-medium text-[#881337]">
                        <BookOpen className="w-3.5 h-3.5" />
                        {language === 'zh' ? lecture.scriptureZh : lecture.scriptureEn}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#a8a29e]" />
                        {language === 'zh' ? lecture.speakerZh : lecture.speakerEn}
                      </span>
                    </div>

                    <p className="text-xs text-[#57534e] line-clamp-2 leading-relaxed pt-1">
                      {language === 'zh' ? lecture.summaryZh : lecture.summaryEn}
                    </p>

                    {/* Key points tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {(language === 'zh' ? lecture.keyPointsZh : lecture.keyPointsEn).map((pt, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 bg-[#f5f5f4] text-[#44403c] rounded-xs border border-[#e7e5e4]"
                        >
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side action buttons */}
                <div className="flex flex-wrap md:flex-col items-center md:items-end justify-between gap-2 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-[#f5f5f4]">
                  {/* Open Weekly Bundle Button */}
                  <button
                    id={`open-bundle-btn-wk-${lecture.week}`}
                    onClick={() => openWeeklyBundle(lecture.week)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-[#faf8f5] text-[#78350f] border border-[#d6d3d1] hover:border-[#78350f] hover:bg-[#f4f2ea] transition-all shadow-2xs"
                    title={language === 'zh' ? `打开第${lecture.week}周讲义、习题与经文研读包` : `Open Week ${lecture.week} Study Bundle`}
                  >
                    <Layers className="w-3.5 h-3.5 text-[#78350f]" />
                    <span>{language === 'zh' ? `第${lecture.week}周研读包` : `Week ${lecture.week} Bundle`}</span>
                  </button>

                  {/* Mark completed toggle */}
                  <button
                    onClick={() => toggleLectureCompleted(lecture.week)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all ${
                      isCompleted
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-[#f5f5f4] text-[#78716c] hover:bg-[#e7e5e4]'
                    }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-600' : 'text-[#a8a29e]'}`} />
                    <span>{isCompleted ? (language === 'zh' ? '已研读完成' : 'Completed') : (language === 'zh' ? '标记完成' : 'Mark Done')}</span>
                  </button>

                  {/* Direct in-browser play action */}
                  <button
                    onClick={() => {
                      if (isThisLoaded) {
                        togglePlay();
                      } else {
                        playLecture(lecture);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-[#881337] hover:bg-[#700f2b] text-white transition-colors shadow-2xs"
                  >
                    {isThisPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-current" />
                        <span>{language === 'zh' ? '暂停播放' : 'Pause'}</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{language === 'zh' ? '网页直接播放' : 'Play Online'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
