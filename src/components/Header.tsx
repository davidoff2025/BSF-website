import React from 'react';
import {
  BookOpen,
  Calendar,
  Headphones,
  FolderDown,
  PenTool,
  Users,
  BarChart3,
  Globe,
  Clock,
  Volume2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';
import { BsfLogo } from './BsfLogo';

export const Header: React.FC = () => {
  const {
    language,
    toggleLanguage,
    currentPage,
    setCurrentPage,
    openContactModal,
    sessionSeconds,
    isPlaying,
    currentLecture
  } = useApp();

  const formatSessionTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const navItems: { id: PageId; labelZh: string; labelEn: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', labelZh: '首页经文', labelEn: 'Home & Scripture', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'audio', labelZh: '讲道音频', labelEn: 'Audio Lectures', icon: <Headphones className="w-4 h-4" />, badge: '30周' },
    { id: 'calendar', labelZh: '各班级日历', labelEn: 'Class Calendars', icon: <Calendar className="w-4 h-4" /> },
    { id: 'documents', labelZh: '官方研经资料', labelEn: 'Study Archives', icon: <FolderDown className="w-4 h-4" /> },
    { id: 'homiletics', labelZh: '讲道法作业', labelEn: 'Homiletics', icon: <PenTool className="w-4 h-4" /> },
    { id: 'contact', labelZh: '同工联络', labelEn: 'Leadership Team', icon: <Users className="w-4 h-4" /> },
    { id: 'admin', labelZh: '数据与管理', labelEn: 'File Database & Admin', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  return (
    <header className="border-b border-[#e7e5e4] bg-[#faf9f5] sticky top-0 z-40 shadow-xs">
      {/* Editorial Top Utility Bar */}
      <div className="border-b border-[#e7e5e4] bg-[#f4f2ea] text-xs text-[#57534e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-serif tracking-wide text-[#78350f] font-bold">
              {language === 'zh' ? 'BSF 2026-2027 学年度 • 罗马书研读' : 'BSF 2026-2027 Academic Year • Romans Study'}
            </span>
            <span className="hidden md:inline-block text-[#d6d3d1]">|</span>
            <span className="hidden lg:inline-block italic text-[#44403c]">
              {language === 'zh'
                ? '“我不以福音为耻；这福音本是神的大能，要救一切相信的。”（罗 1:16）'
                : '“For I am not ashamed of the gospel, because it is the power of God that brings salvation.” (Rom 1:16)'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Study Session Timer */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e7e5e4] text-[#292524] text-[11px] font-medium"
              title={language === 'zh' ? '本次在线研读计时' : 'Current Online Study Session'}
            >
              <Clock className="w-3 h-3 text-[#881337] animate-pulse" />
              <span>{language === 'zh' ? '研读中' : 'Session'}: {formatSessionTime(sessionSeconds)}</span>
            </div>

            {/* In-Browser Playing Indicator */}
            {isPlaying && currentLecture && (
              <button
                onClick={() => setCurrentPage('audio')}
                className="flex items-center gap-1 text-[11px] text-[#881337] font-semibold hover:underline bg-[#fce7f3] px-2 py-0.5 rounded transition-all"
              >
                <Volume2 className="w-3 h-3 animate-bounce" />
                <span>W{currentLecture.week} {language === 'zh' ? '正在播放' : 'Playing'}</span>
              </button>
            )}

            {/* Language Switcher */}
            <button
              id="header-lang-toggle"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#d6d3d1] hover:border-[#881337] bg-white text-[#1c1917] hover:text-[#881337] transition-all font-semibold text-[11px]"
              title={language === 'zh' ? 'Switch to English' : '切换为简体中文'}
            >
              <Globe className="w-3.5 h-3.5 text-[#881337]" />
              <span>{language === 'zh' ? 'EN' : '中文'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Publication Masthead with Official BSF Logo in Top-Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Brand on the Left */}
          <div
            onClick={() => setCurrentPage('home')}
            className="cursor-pointer flex items-center gap-4 group"
            id="header-brand-link"
          >
            {/* Top-Left Official Logo as requested */}
            <div className="shrink-0 p-1 bg-white border border-[#e7e5e4] rounded shadow-2xs group-hover:border-[#881337] transition-colors">
              <BsfLogo className="h-10 sm:h-12 w-auto" showText={false} />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-bold tracking-widest text-[#78350f] uppercase">
                  Bible Study Fellowship • 查经团契
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-black tracking-tight text-[#1c1917] group-hover:text-[#881337] transition-colors">
                {language === 'zh' ? '罗马书研经官方数字化资源库' : 'Romans Digital Study & Document Hub'}
              </h1>
              <p className="text-xs text-[#78716c] hidden sm:block mt-0.5">
                {language === 'zh'
                  ? '2026-2027 全学年官方资料 • 逐周讲道音频在线聆听 • 各班级日历 • 讲道法作业'
                  : 'Academic Year 2026-2027 • Streamable Lectures • Class Calendars • Homiletics Portal'}
              </p>
            </div>
          </div>

          {/* Quick Direct Actions on Right */}
          <div className="flex items-center gap-2.5">
            <button
              id="header-contact-btn"
              onClick={() => openContactModal()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded bg-[#881337] hover:bg-[#700f2b] text-white transition-all shadow-xs"
            >
              <Users className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '专职同工窗口' : 'Contact Leaders'}</span>
            </button>
            <button
              id="header-play-audio-btn"
              onClick={() => setCurrentPage('audio')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded border border-[#d6d3d1] hover:border-[#881337] bg-white text-[#292524] hover:text-[#881337] transition-all"
            >
              <Headphones className="w-3.5 h-3.5 text-[#881337]" />
              <span>{language === 'zh' ? '在线听讲道' : 'Listen Online'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="border-t border-[#e7e5e4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar">
            <div className="flex space-x-1 sm:space-x-2 py-1">
              {navItems.map(item => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-item-${item.id}`}
                    onClick={() => setCurrentPage(item.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium transition-all whitespace-nowrap border-b-2 ${
                      isActive
                        ? 'border-[#881337] text-[#881337] font-bold bg-[#faf7f5]'
                        : 'border-transparent text-[#57534e] hover:text-[#1c1917] hover:border-[#d6d3d1]'
                    }`}
                  >
                    {item.icon}
                    <span>{language === 'zh' ? item.labelZh : item.labelEn}</span>
                    {item.badge && (
                      <span className="ml-0.5 px-1.5 py-0.2 bg-[#f4f2ea] text-[#78350f] text-[10px] font-bold rounded-full border border-[#e7e5e4]">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
