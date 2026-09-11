import React from 'react';
import {
  Clock,
  Globe,
  Headphones,
  Mail,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BSF_CONTACTS } from '../data/bsfData';
import { BsfLogo } from './BsfLogo';

export const Footer: React.FC = () => {
  const { language, setLanguage, setCurrentPage, sessionSeconds } = useApp();

  const formatSessionTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}m ${s}s`;
  };

  return (
    <footer className="mt-16 bg-[#182a3e] text-[#94a3b8] text-xs border-t-4 border-[#881337]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#334155]">
          {/* Col 1: Brand & Editorial Mission */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="p-1 bg-white rounded">
                <BsfLogo className="h-7 w-auto" showText={false} />
              </div>
              <span className="font-serif font-bold tracking-wider text-base text-white">
                BSF STUDY HUB
              </span>
            </div>
            <p className="text-xs text-[#cbd5e1] font-serif leading-relaxed">
              {language === 'zh'
                ? 'BSF 全学年研经资料官方数字化中心。秉承深入研读神话语、扎根基督真理的使命，以严谨社论典雅排版呈现。'
                : 'Centralized document & study repository for the BSF school year, presenting scripture, exegesis, audio, and calendar schedules.'}
            </p>
            <div className="pt-1 flex items-center gap-2 text-[11px] text-[#94a3b8]">
              <Clock className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>
                {language === 'zh' ? '当前会话研读：' : 'Session Active: '} {formatSessionTime(sessionSeconds)}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-white text-xs uppercase tracking-wider">
              {language === 'zh' ? '研经快捷导航' : 'Directory'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => setCurrentPage('home')}
                  className="hover:text-white transition-colors"
                >
                  {language === 'zh' ? '首页经文展台 (Home & Scripture)' : 'Home & Scripture'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('audio')}
                  className="hover:text-white transition-colors"
                >
                  {language === 'zh' ? '每周讲道音频在线播放 (Audio)' : 'Audio Lectures'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('calendar')}
                  className="hover:text-white transition-colors"
                >
                  {language === 'zh' ? '各班级日历日程 (Calendars)' : 'Class Calendars'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('homiletics')}
                  className="hover:text-white transition-colors"
                >
                  {language === 'zh' ? '讲道法作业工作台 (Homiletics)' : 'Homiletics Portal'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('documents')}
                  className="hover:text-white transition-colors"
                >
                  {language === 'zh' ? '官方研经文库 (Study Archives)' : 'Study Archives'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('admin')}
                  className="hover:text-white transition-colors"
                >
                  {language === 'zh' ? '文件数据库与管理 (File DB)' : 'File DB & Admin'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Leadership Staff */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-white text-xs uppercase tracking-wider">
              {language === 'zh' ? '专职同工团队' : 'BSF Leadership Team'}
            </h4>
            <div className="space-y-2 text-xs">
              {BSF_CONTACTS.map(contact => (
                <div key={contact.id} className="flex flex-col">
                  <span className="text-white font-medium">
                    {language === 'zh' ? contact.nameZh : contact.nameEn}
                  </span>
                  <span className="text-[11px] text-[#94a3b8]">
                    {language === 'zh' ? contact.roleZh : contact.roleEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Platform & Language Switcher */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-xs uppercase tracking-wider">
              {language === 'zh' ? '系统技术服务' : 'Digital Platform Support'}
            </h4>
            <p className="text-xs text-[#cbd5e1] leading-relaxed">
              {language === 'zh'
                ? '全学年音频与文档均在网页端直接流式提供，免下载随点随听。支持中英双语研读。'
                : 'All study audio and documents stream directly online without required downloads.'}
            </p>

            <div className="pt-2">
              <span className="text-[11px] text-[#94a3b8] block mb-1">
                {language === 'zh' ? '语言切换 / Language' : 'Select Language'}
              </span>
              <div className="inline-flex rounded border border-[#334155] overflow-hidden">
                <button
                  onClick={() => setLanguage('zh')}
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    language === 'zh' ? 'bg-[#881337] text-white font-bold' : 'bg-[#182a3e] text-[#94a3b8] hover:text-white'
                  }`}
                >
                  中文版
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    language === 'en' ? 'bg-[#881337] text-white font-bold' : 'bg-[#182a3e] text-[#94a3b8] hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#94a3b8] gap-3">
          <div>
            © 2026-2027 Bible Study Fellowship (BSF) Digital Study Hub. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Font & Layout inspired by Christianity Today (今日基督教)</span>
            <span>•</span>
            <span className="font-mono">Romans School Year 062</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
