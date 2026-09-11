import React, { useState, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  BookOpen,
  Calendar,
  User,
  Radio,
  FileAudio,
  Upload,
  Layers,
  Sparkles,
  Link2,
  Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AudioPlayer: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const {
    language,
    currentLecture,
    isPlaying,
    currentTime,
    duration,
    playbackRate,
    volume,
    togglePlay,
    seekTo,
    skip,
    setPlaybackRate,
    setVolume,
    setCurrentPage,
    currentSpokenTranscript,
    customAudioSources,
    setCustomAudioSource,
    openWeeklyBundle
  } = useApp();

  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(volume);
  const [showFileUploader, setShowFileUploader] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!currentLecture) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleToggleMute = () => {
    if (isMuted) {
      setVolume(prevVolume || 0.8);
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      setVolume(0);
      setIsMuted(true);
    }
  };

  const handleSeekClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    seekTo(ratio * duration);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && currentLecture) {
      const blobUrl = URL.createObjectURL(file);
      setCustomAudioSource(currentLecture.fileName, blobUrl);
      setShowFileUploader(false);
    }
  };

  const handleApplyUrl = () => {
    if (inputUrl.trim() && currentLecture) {
      setCustomAudioSource(currentLecture.fileName, inputUrl.trim());
      setInputUrl('');
      setShowFileUploader(false);
    }
  };

  const hasCustomAudio = Boolean(customAudioSources[currentLecture.fileName]);

  return (
    <div
      id="bsf-audio-player"
      className={`border border-[#e7e5e4] bg-white rounded-lg shadow-xs overflow-hidden ${
        compact ? 'p-3' : 'p-4 sm:p-6'
      }`}
    >
      {/* Player Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f4f2ea] pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#881337] text-white text-xs font-bold font-serif">
            W{currentLecture.week}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#881337] bg-[#fdf2f4] px-2 py-0.5 rounded font-semibold">
                <FileAudio className="w-3 h-3" />
                {currentLecture.fileName}
              </span>
              <span className="text-[11px] text-[#78716c] flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {language === 'zh' ? currentLecture.displayDateZh : currentLecture.displayDateEn}
              </span>
              {hasCustomAudio && (
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                  {language === 'zh' ? '已挂载本地录音源' : 'Custom Audio Loaded'}
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1c1917] mt-0.5">
              {language === 'zh' ? currentLecture.titleZh : currentLecture.titleEn}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Open Weekly Bundle Button */}
          <button
            id="audio-open-weekly-bundle-btn"
            onClick={() => openWeeklyBundle(currentLecture.week)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold bg-[#881337] text-white hover:bg-[#700f2b] transition-all shadow-xs"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{language === 'zh' ? '打开本周研读包' : 'Weekly Bundle'}</span>
          </button>

          <button
            onClick={() => setShowFileUploader(!showFileUploader)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-medium text-[#57534e] hover:text-[#881337] bg-[#f5f5f4] hover:bg-[#fdf2f4] transition-colors"
            title={language === 'zh' ? '自定义挂载本地MP3/MP2文件或直接流媒体链接' : 'Load local MP3 or stream link'}
          >
            <Upload className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'zh' ? '挂载音频' : 'Source'}</span>
          </button>

          <button
            onClick={() => setCurrentPage('audio')}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-semibold text-[#881337] hover:bg-[#fdf2f4] transition-colors"
          >
            <Radio className="w-3.5 h-3.5" />
            <span>{language === 'zh' ? '选周换课' : 'All Weeks'}</span>
          </button>
        </div>
      </div>

      {/* Custom Audio File Mount Panel (Collapsible) */}
      {showFileUploader && (
        <div className="mb-4 p-3 bg-[#faf9f5] border border-[#e7e5e4] rounded-lg text-xs space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#1c1917]">
              {language === 'zh' ? '为本周课件指定 MP3/MP2 音频源：' : 'Specify Audio Source for this Lecture:'}
            </span>
            <button
              onClick={() => setShowFileUploader(false)}
              className="text-[#78716c] hover:text-[#1c1917]"
            >
              ✕
            </button>
          </div>
          <p className="text-[11px] text-[#78716c]">
            {language === 'zh'
              ? '支持直接选取本地下载的录音文件（如 ROM_Lecture_00_MEN_062-26.mp2 / mp3），或输入任意在线音频链接，网页将自动直接播放。'
              : 'Select a local audio file or provide a direct web stream URL for in-browser playback.'}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <input
              type="file"
              ref={fileInputRef}
              accept="audio/*,.mp3,.mp2,.m4a,.wav"
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-1.5 bg-white border border-[#d6d3d1] hover:border-[#881337] rounded font-medium text-[#1c1917] inline-flex items-center gap-1"
            >
              <Upload className="w-3.5 h-3.5 text-[#881337]" />
              <span>{language === 'zh' ? '从电脑中选取音频文件' : 'Select Local Audio File'}</span>
            </button>

            <span className="text-[#a8a29e]">{language === 'zh' ? '或输入链接：' : 'or URL:'}</span>

            <input
              type="text"
              placeholder="https://.../lecture.mp3"
              value={inputUrl}
              onChange={e => setInputUrl(e.target.value)}
              className="flex-1 min-w-[180px] px-2.5 py-1 text-xs border border-[#d6d3d1] rounded bg-white"
            />
            <button
              onClick={handleApplyUrl}
              disabled={!inputUrl.trim()}
              className="px-3 py-1 bg-[#881337] text-white rounded font-medium disabled:opacity-40"
            >
              {language === 'zh' ? '应用' : 'Apply'}
            </button>
          </div>
        </div>
      )}

      {/* Meta Pills (Scripture & Speaker) */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-[#57534e] mb-3">
        <div className="inline-flex items-center gap-1.5 bg-[#f5f5f4] px-2.5 py-1 rounded text-[#292524] font-medium">
          <BookOpen className="w-3.5 h-3.5 text-[#881337]" />
          <span>{language === 'zh' ? currentLecture.scriptureZh : currentLecture.scriptureEn}</span>
        </div>
        <div className="inline-flex items-center gap-1.5 bg-[#f5f5f4] px-2.5 py-1 rounded text-[#292524]">
          <User className="w-3.5 h-3.5 text-[#78716c]" />
          <span>{language === 'zh' ? currentLecture.speakerZh : currentLecture.speakerEn}</span>
        </div>
        <div className="ml-auto text-[11px] text-[#78716c] flex items-center gap-1.5">
          {isPlaying && (
            <div className="flex items-center gap-0.5 text-[#881337] mr-1">
              <span className="w-1 h-3 bg-[#881337] animate-pulse" />
              <span className="w-1 h-4 bg-[#881337] animate-bounce" />
              <span className="w-1 h-2 bg-[#881337] animate-pulse" />
            </div>
          )}
          <span>{language === 'zh' ? 'BSF 罗马书逐章解经录音' : 'BSF Expository Series'}</span>
        </div>
      </div>

      {/* Live Spoken Lecture Transcript Box */}
      {isPlaying && (
        <div className="mb-4 p-3 rounded-lg bg-[#fcf8f2] border border-[#fef3c7] text-xs text-[#78350f] animate-fadeIn flex items-start gap-2">
          <span className="px-1.5 py-0.5 rounded bg-[#881337] text-white text-[10px] font-bold uppercase shrink-0 mt-0.5">
            🎙️ {language === 'zh' ? '讲道录音原声播放中' : 'Lecture Voiced Online'}
          </span>
          <p className="italic text-[#451a03] leading-relaxed">
            {currentSpokenTranscript || (language === 'zh' ? `${currentLecture.speakerZh} 正在宣讲 ${currentLecture.titleZh}，剖析神公义救赎的奥秘...` : `Paul Huang is delivering the expository lecture on ${currentLecture.scriptureEn}...`)}
          </p>
        </div>
      )}

      {/* Interactive Progress Scrubber */}
      <div className="space-y-1.5 mb-4">
        <div
          id="audio-progress-bar"
          onClick={handleSeekClick}
          className="relative w-full h-2.5 bg-[#e7e5e4] rounded-full cursor-pointer group overflow-hidden"
          title={language === 'zh' ? '点击跳转进度' : 'Click to seek'}
        >
          <div
            className="absolute top-0 left-0 h-full bg-[#881337] group-hover:bg-[#9f1239] transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[11px] font-mono text-[#78716c]">
          <span>{formatTime(currentTime)}</span>
          <span className="text-[10px] uppercase text-[#a8a29e]">
            {isPlaying ? (language === 'zh' ? '正在播放中 • 记录研学时长' : 'Playing • Tracking Time') : (language === 'zh' ? '已暂停' : 'Paused')}
          </span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Control Buttons Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Speed Controls */}
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-medium text-[#78716c] mr-1 hidden sm:inline">
            {language === 'zh' ? '倍速:' : 'Speed:'}
          </span>
          {[0.75, 1.0, 1.25, 1.5].map(rate => (
            <button
              key={rate}
              onClick={() => setPlaybackRate(rate)}
              className={`px-2 py-0.5 text-xs font-semibold rounded ${
                playbackRate === rate
                  ? 'bg-[#881337] text-white'
                  : 'bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]'
              }`}
            >
              {rate}x
            </button>
          ))}
        </div>

        {/* Center Primary Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => skip(-15)}
            className="p-2 rounded-full hover:bg-[#f5f5f4] text-[#57534e] transition-colors"
            title={language === 'zh' ? '快退15秒' : 'Rewind 15s'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            id="audio-play-pause-btn"
            onClick={togglePlay}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-[#881337] hover:bg-[#700f2b] text-white shadow-xs transition-all transform active:scale-95"
            title={isPlaying ? (language === 'zh' ? '暂停' : 'Pause') : (language === 'zh' ? '播放录音' : 'Play')}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>

          <button
            onClick={() => skip(15)}
            className="p-2 rounded-full hover:bg-[#f5f5f4] text-[#57534e] transition-colors"
            title={language === 'zh' ? '快进15秒' : 'Forward 15s'}
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleMute}
            className="text-[#57534e] hover:text-[#881337]"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-[#a8a29e]" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={e => {
              const val = parseFloat(e.target.value);
              setVolume(val);
              if (val > 0 && isMuted) setIsMuted(false);
            }}
            className="w-16 sm:w-20 accent-[#881337] cursor-pointer"
          />
        </div>
      </div>

      {/* Memory Verse Callout */}
      {!compact && currentLecture.memoryVerseZh && (
        <div className="mt-4 pt-3 border-t border-[#f4f2ea] text-xs text-[#57534e] bg-[#faf8f2] p-3 rounded-md editorial-quote-border flex items-start justify-between gap-3">
          <div>
            <span className="font-serif font-bold text-[#881337] mr-1.5">
              {language === 'zh' ? '本周背诵金句：' : 'Memory Verse:'}
            </span>
            <span className="italic">
              {language === 'zh' ? currentLecture.memoryVerseZh : currentLecture.memoryVerseEn}
            </span>
          </div>
          <button
            onClick={() => openWeeklyBundle(currentLecture.week)}
            className="text-[11px] font-bold text-[#881337] underline hover:text-[#700f2b] shrink-0"
          >
            {language === 'zh' ? '查看整周讲义与习题 →' : 'View Weekly Bundle →'}
          </button>
        </div>
      )}
    </div>
  );
};
