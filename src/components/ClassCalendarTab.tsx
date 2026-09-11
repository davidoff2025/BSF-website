import React, { useState, useMemo } from 'react';
import {
  BSF_CLASSES,
  BSFClassInfo,
  BSF_CLASSES_FOLDER_URL,
  ClassCalendarEntry
} from '../data/bsfClasses';
import {
  ROMANS_LESSONS,
  LessonInfo
} from '../data/romansPassages';
import {
  Calendar as CalendarIcon,
  Clock,
  ArrowRight,
  Info,
  Coffee,
  ExternalLink,
  FileText,
  Building2,
  Sparkles,
  Search,
  Users,
  Phone,
  Filter,
  CheckCircle2,
  QrCode
} from 'lucide-react';

interface ClassCalendarTabProps {
  onSelectLesson: (lessonNumber: number) => void;
  currentWeekLessonIndex: number;
  onOpenQrModal?: () => void;
}

export const ClassCalendarTab: React.FC<ClassCalendarTabProps> = ({
  onSelectLesson,
  currentWeekLessonIndex,
  onOpenQrModal
}) => {
  // Default to the first calendar: Atlanta中文BSF DOLM #7461_同工日历
  const [selectedClassId, setSelectedClassId] = useState<string>(BSF_CLASSES[0].id);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [fellowshipOnly, setFellowshipOnly] = useState<boolean>(false);

  const selectedClass: BSFClassInfo = useMemo(() => {
    return BSF_CLASSES.find(c => c.id === selectedClassId) || BSF_CLASSES[0];
  }, [selectedClassId]);

  // Find corresponding lesson info helper
  const getLessonInfo = (lessonNum: number): LessonInfo | undefined => {
    return ROMANS_LESSONS.find(l => l.lessonNumber === lessonNum);
  };

  // Count fellowship events in current selected class
  const fellowshipCount = useMemo(() => {
    return selectedClass.calendar.filter(e => Boolean(e.fellowship)).length;
  }, [selectedClass]);

  // Filter entries if search query or fellowship filter exists
  const displayedCalendar = useMemo(() => {
    let list = selectedClass.calendar;

    if (fellowshipOnly) {
      list = list.filter(entry => Boolean(entry.fellowship));
    }

    if (!searchTerm.trim()) return list;
    const term = searchTerm.toLowerCase();
    return list.filter(entry => {
      const act = (entry.activityZh || '').toLowerCase();
      const doc = (entry.doctrine || '').toLowerCase();
      const pass = (entry.passage || '').toLowerCase();
      const dt = (entry.dateStr || '').toLowerCase();
      const fel = (entry.fellowship || '').toLowerCase();
      const lNum = String(entry.lessonNumber);
      return act.includes(term) || doc.includes(term) || pass.includes(term) || dt.includes(term) || fel.includes(term) || lNum.includes(term);
    });
  }, [selectedClass, searchTerm, fellowshipOnly]);

  return (
    <div className="space-y-6">
      {/* 1. Class Selector & Metadata Banner */}
      <section className="bg-white rounded-xl border border-[#e7e5e4] shadow-xs p-5 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#f5f5f4]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#881337]"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-[#881337]">
                2026-2027 DOLM #7461 日历总览
              </span>
              {selectedClass.isLeaderCalendar && (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  ⭐ 默认首页 • 同工专属日历
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl font-bold font-serif text-[#1c1917] mt-1">
              {selectedClass.isLeaderCalendar ? '同工与班级专属研经日程表' : '各班级专属研经日程表'}
            </h2>
            <p className="text-xs text-[#78716c] mt-0.5">
              默认展示同工团契日历，亦可随时切换至全教区 15 个班级专属日程。
            </p>
          </div>

          {/* Calendar Selector Dropdown */}
          <div className="w-full md:w-96">
            <label htmlFor="bsf-class-select" className="block text-xs font-bold text-[#44403c] mb-1 flex items-center justify-between">
              <span>选择查看日历（同工日历 + 15 个班级）：</span>
              <span className="text-[11px] font-normal text-[#881337] font-mono">16 Calendars</span>
            </label>
            <select
              id="bsf-class-select"
              value={selectedClassId}
              onChange={(e) => {
                setSelectedClassId(e.target.value);
                setSearchTerm('');
                setFellowshipOnly(false);
              }}
              className="w-full text-sm font-semibold bg-[#faf8f5] hover:bg-white border-2 border-[#881337]/30 focus:border-[#881337] rounded-lg px-3 py-2 text-[#1c1917] focus:outline-none focus:ring-2 focus:ring-[#881337]/20 transition-all cursor-pointer shadow-2xs"
            >
              <optgroup label="⭐ 同工专属日历（默认首页）">
                <option value={BSF_CLASSES[0].id}>
                  ⭐ {BSF_CLASSES[0].nameZh} 【{BSF_CLASSES[0].scheduleInfo}】
                </option>
              </optgroup>
              <optgroup label="🏛️ 各班级日程表（15 个班级）">
                {BSF_CLASSES.slice(1).map((c, i) => (
                  <option key={c.id} value={c.id}>
                    {i + 1}. {c.nameZh} 【{c.scheduleInfo}】
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        {/* Selected Calendar Key Details Card */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#faf8f5] p-3.5 rounded-lg border border-[#e7e5e4]">
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${
              selectedClass.isLeaderCalendar ? 'bg-amber-100 text-amber-800' : 'bg-[#881337]/10 text-[#881337]'
            }`}>
              {selectedClass.isLeaderCalendar ? <Users className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
            </div>
            <div className="min-w-0">
              <span className="text-[11px] text-[#78716c] block">
                {selectedClass.isLeaderCalendar ? '当前日历属性' : '当前班级名称'}
              </span>
              <span className="text-xs font-semibold text-[#1c1917] truncate block" title={selectedClass.nameZh}>
                {selectedClass.nameZh}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${
              selectedClass.isLeaderCalendar ? 'bg-amber-100 text-amber-800' : 'bg-[#881337]/10 text-[#881337]'
            }`}>
              <Clock className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] text-[#78716c] block">聚会/活动时间</span>
              <span className="text-xs font-semibold text-[#1c1917] truncate block">
                {selectedClass.scheduleInfo}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${
                selectedClass.isLeaderCalendar ? 'bg-amber-100 text-amber-800' : 'bg-[#881337]/10 text-[#881337]'
              }`}>
                <FileText className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-[#78716c] block">官方原件文档</span>
                <span className="text-xs font-semibold text-[#1c1917] truncate block">
                  Google Docs 原件
                </span>
              </div>
            </div>

            <a
              href={selectedClass.docUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded border border-[#d6d3d1] bg-white hover:bg-[#881337] hover:text-white hover:border-[#881337] text-[#44403c] transition-colors shrink-0"
              title="在 Google Docs 打开日历原件"
            >
              <span>查看原件</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Leadership Contacts Panel if Viewing Leader Calendar */}
        {selectedClass.contacts && selectedClass.contacts.length > 0 && (
          <div className="mt-3.5 p-3.5 bg-amber-50/60 rounded-lg border border-amber-200">
            <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-amber-200/60">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-800" />
                <span className="text-xs font-bold text-amber-950">
                  同工团队联络方式（DOLM #7461 Leadership Team）
                </span>
              </div>
              <span className="text-[11px] text-amber-800 font-medium">
                4 位同工
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {selectedClass.contacts.map((contact, idx) => (
                <div key={idx} className="bg-white/80 rounded-md p-2 border border-amber-200 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#1c1917]">{contact.name}</span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-amber-200 text-amber-900">
                      {contact.role}
                    </span>
                  </div>
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center gap-1 text-[11px] text-[#78716c] hover:text-amber-900 font-mono mt-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{contact.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Global folder link */}
        <div className="mt-3 pt-2 border-t border-[#f5f5f4] flex flex-wrap items-center justify-between gap-2 text-xs text-[#78716c]">
          <span>
            所属计划：<strong>DOLM #7461 罗马书研经课程</strong>（共包含同工工作坊、30 课研经、节期停课与分享之夜）
          </span>
          <a
            href={BSF_CLASSES_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#881337] hover:underline font-medium text-[11px]"
          >
            <span>访问 Google Drive 全日历文件夹</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* 2. Calendar Schedule List */}
      <section className="bg-white rounded-xl border border-[#e7e5e4] shadow-xs overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 sm:p-5 border-b border-[#f5f5f4] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-bold text-[#1c1917]">
              {selectedClass.nameZh} • 完整日程安排
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] bg-stone-100 text-stone-600 font-medium">
              共 {displayedCalendar.length} 项日程
            </span>
            {fellowshipCount > 0 && (
              <span className="px-2 py-0.5 rounded text-[11px] bg-amber-100 text-amber-900 font-semibold border border-amber-200 flex items-center gap-1">
                <Users className="w-3 h-3" />
                包含 {fellowshipCount} 次同工团契
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Toggle Fellowship Only Filter */}
            {fellowshipCount > 0 && (
              <button
                onClick={() => setFellowshipOnly(!fellowshipOnly)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold border transition-all ${
                  fellowshipOnly
                    ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                    : 'bg-[#faf8f5] hover:bg-amber-50 text-amber-900 border-amber-200'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                <span>{fellowshipOnly ? '显示全部日程' : '仅看同工团契周次'}</span>
              </button>
            )}

            {/* Quick QR code button */}
            {onOpenQrModal && (
              <button
                onClick={onOpenQrModal}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold border bg-white hover:bg-stone-50 text-[#44403c] hover:text-[#881337] border-[#d6d3d1] transition-all cursor-pointer shadow-2xs"
                title="手机微信或相机扫一扫（免登录直接看）"
              >
                <QrCode className="w-3.5 h-3.5 text-[#881337]" />
                <span className="hidden sm:inline">手机扫码</span>
              </button>
            )}

            {/* Search/Filter within schedule */}
            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#a8a29e]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜索主题、教义、经文或团契..."
                className="w-full text-xs pl-8 pr-3 py-1.5 bg-[#faf8f5] border border-[#d6d3d1] rounded-md focus:outline-none focus:ring-1 focus:ring-[#881337]"
              />
            </div>
          </div>
        </div>

        {/* Schedule Items List */}
        <div className="divide-y divide-[#f5f5f4]">
          {displayedCalendar.map((item, idx) => {
            const isHolidayBreak = item.isBreak;
            const isSpecialNight = item.isSpecialNight;
            const isWorkshop = item.isWorkshop;
            const hasFellowship = Boolean(item.fellowship);
            const lessonInfo = (!isHolidayBreak && !isSpecialNight && !isWorkshop) ? getLessonInfo(item.lessonNumber) : null;
            const isCurrentClassWeek = item.lessonNumber === currentWeekLessonIndex;

            // Compute background and border styles with priority:
            // 1. If hasFellowship: prominent warm amber highlight with border
            // 2. If isCurrentClassWeek: burgundy highlight
            // 3. If holiday break: warm stone/amber
            // 4. If special night: rose
            let rowStyle = 'hover:bg-[#faf8f5]';
            if (hasFellowship) {
              rowStyle = 'bg-amber-50/70 hover:bg-amber-100/60 border-l-4 border-l-amber-500 ring-1 ring-amber-200/60';
            } else if (isCurrentClassWeek) {
              rowStyle = 'bg-[#881337]/5 border-l-4 border-l-[#881337]';
            } else if (isHolidayBreak) {
              rowStyle = 'bg-amber-50/40 text-[#78716c]';
            } else if (isSpecialNight) {
              rowStyle = 'bg-rose-50/40 text-[#881337]';
            }

            return (
              <div
                key={idx}
                className={`p-4 sm:px-6 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3 ${rowStyle}`}
              >
                {/* Left: Date & Badges */}
                <div className="flex items-start sm:items-center gap-3">
                  <div className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg border shrink-0 text-[#44403c] ${
                    hasFellowship
                      ? 'bg-amber-100/90 border-amber-300 text-amber-950 font-bold'
                      : 'bg-stone-100 border-stone-200'
                  }`}>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                      hasFellowship ? 'text-amber-800' : 'text-[#78716c]'
                    }`}>
                      {isWorkshop ? '工作坊' : isHolidayBreak ? '休会' : isSpecialNight ? '特别' : hasFellowship ? '团契' : '日期'}
                    </span>
                    <span className="text-xs font-bold font-mono leading-tight text-center px-1">
                      {item.dateStr || '休假'}
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      {isWorkshop ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-600 text-white">
                          <Sparkles className="w-3 h-3" />
                          同工工作坊
                        </span>
                      ) : isHolidayBreak ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-900">
                          <Coffee className="w-3 h-3" />
                          节期停课
                        </span>
                      ) : isSpecialNight ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-100 text-rose-900">
                          <Sparkles className="w-3 h-3" />
                          {item.activityZh.includes('同工') ? '同工分享日' : '分享之夜'}
                        </span>
                      ) : (
                        <>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold font-mono ${
                            isCurrentClassWeek
                              ? 'bg-[#881337] text-white'
                              : hasFellowship
                              ? 'bg-amber-200 text-amber-950'
                              : 'bg-stone-200 text-stone-800'
                          }`}>
                            {item.lessonNumber === 0 ? '第 0 课（导论）' : `第 ${item.lessonNumber} 课`}
                          </span>

                          {isCurrentClassWeek && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                              当前研习周
                            </span>
                          )}
                        </>
                      )}

                      {/* Prominent Fellowship Highlight Badge */}
                      {hasFellowship && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-500 text-white shadow-2xs">
                          <Users className="w-3 h-3" />
                          同工团契：{item.fellowship}
                        </span>
                      )}

                      {item.doctrine && (
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-medium bg-stone-100 text-[#78716c] border border-stone-200">
                          教义：{item.doctrine}
                        </span>
                      )}
                    </div>

                    {/* Lesson Title or Activity */}
                    <div className={`text-sm sm:text-base font-semibold ${
                      hasFellowship ? 'text-amber-950 font-bold' : 'text-[#1c1917]'
                    }`}>
                      {item.activityZh}
                    </div>

                    {/* Scripture Reference */}
                    {item.passage && (
                      <div className="text-xs text-[#78716c] flex items-center gap-2 mt-0.5">
                        <span className="font-serif font-medium text-[#881337]">
                          {item.passage.includes('线上') ? '形式：' : '经文：'}{item.passage}
                        </span>
                        {lessonInfo && lessonInfo.referenceEn && (
                          <>
                            <span>•</span>
                            <span className="text-[#a8a29e]">{lessonInfo.referenceEn}</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Action: Direct Jump to Lesson Tab */}
                {!isHolidayBreak && !isSpecialNight && !isWorkshop && item.lessonNumber >= 0 && (
                  <div className="self-end md:self-center shrink-0">
                    <button
                      onClick={() => onSelectLesson(item.lessonNumber)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#d6d3d1] bg-white hover:bg-[#881337] hover:text-white hover:border-[#881337] text-[#44403c] transition-all shadow-2xs group"
                    >
                      <span>研读本课经文与讲道</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Helpful Info footer */}
      <div className="p-4 bg-stone-100/70 rounded-xl border border-stone-200 text-xs text-[#78716c] flex items-start gap-2.5">
        <Info className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <p className="font-semibold text-[#44403c]">💡 日历与同工团契说明：</p>
          <p>
            • <strong>同工专属日历</strong>（已设为当前默认首页）：包含了周六 06:00-09:00 AM 的同工团契高亮标记、同工工作坊与分享日安排，以及四位同工负责人的即时联络方式。
            <br />
            • <strong>各班级日历</strong>：下拉菜单亦可随时切换至 ACCCN 北堂、西北堂、Atlanta、Jacksonville、Lexington、Mount Pisgah、NJ 美门、Shadowbrook、Toledo、灵粮堂、费城等全部 15 个班级。
          </p>
        </div>
      </div>
    </div>
  );
};
