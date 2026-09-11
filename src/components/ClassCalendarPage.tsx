import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  UserCheck,
  Search,
  AlertCircle,
  Coffee,
  Printer,
  ChevronDown,
  Layers,
  FileText
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BSF_CLASS_CALENDARS } from '../data/bsfData';

export const ClassCalendarPage: React.FC = () => {
  const {
    language,
    selectedCalendarId,
    setSelectedCalendarId,
    setCurrentPage,
    openWeeklyBundle
  } = useApp();

  const [searchKeyword, setSearchKeyword] = useState('');

  const currentCalendar =
    BSF_CLASS_CALENDARS.find(c => c.id === selectedCalendarId) || BSF_CLASS_CALENDARS[0];

  const filteredSchedule = currentCalendar.schedule.filter(item => {
    if (!searchKeyword.trim()) return true;
    const term = searchKeyword.toLowerCase();
    return (
      item.lessonNameZh.toLowerCase().includes(term) ||
      item.lessonNameEn.toLowerCase().includes(term) ||
      item.scripture.toLowerCase().includes(term) ||
      item.date.includes(term)
    );
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Editorial Title Banner (Christianity Today style) */}
      <div className="border-b border-[#e7e5e4] pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#881337] font-semibold uppercase tracking-wider mb-1">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>
                {language === 'zh' ? 'BSF 2026-2027学年 教学进程' : 'BSF 2026-2027 Academic Year'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c1917]">
              {language === 'zh' ? '各班级学年学习日历' : 'Class Schedules & Academic Calendars'}
            </h2>
            <p className="text-sm text-[#78716c] mt-1 max-w-3xl">
              {language === 'zh'
                ? '支持在线切换全学年各班级日历。请在下方下拉窗中选取班级名称，即可即时查阅对应的课程日期、讲道法作业截止日及每周研读学习包。'
                : 'Switch between class calendars using the dropdown menu below. View meeting dates, scripture assignments, homiletics deadlines, and weekly bundles.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded bg-[#881337] hover:bg-[#700f2b] text-white transition-all shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '打印当前班级日历' : 'Print Current Calendar'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Prominent Class Selector Dropdown (用户需求：下拉窗列出所有班级名称，选择后显示对应日历) */}
      <div className="p-4 sm:p-5 bg-[#faf8f5] border-2 border-[#881337]/30 rounded-xl shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <div>
            <label
              htmlFor="class-calendar-dropdown"
              className="block text-sm sm:text-base font-serif font-bold text-[#1c1917]"
            >
              {language === 'zh' ? '▼ 选择班级名称调取日历：' : '▼ Select Class Name to View Calendar:'}
            </label>
            <p className="text-xs text-[#78716c] mt-0.5">
              {language === 'zh'
                ? '点击下拉窗直接切换班级，下方将自动同步展示该班级的全学年学习日程：'
                : 'Select from the dropdown to load the corresponding class schedule below:'}
            </p>
          </div>

          <div className="text-xs font-mono text-[#881337] font-semibold bg-white px-3 py-1 rounded-md border border-[#881337]/20 self-start md:self-auto">
            {language === 'zh' ? `当前班级编号: ${currentCalendar.code}` : `Class Code: ${currentCalendar.code}`}
          </div>
        </div>

        {/* Dropdown Select Menu */}
        <div className="relative">
          <select
            id="class-calendar-dropdown"
            value={selectedCalendarId}
            onChange={e => setSelectedCalendarId(e.target.value)}
            className="w-full text-sm sm:text-base font-medium py-3.5 pl-4 pr-10 rounded-lg border-2 border-[#881337] bg-white text-[#1c1917] shadow-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#881337]/30 transition-all appearance-none"
          >
            {BSF_CLASS_CALENDARS.map(cal => (
              <option key={cal.id} value={cal.id}>
                {language === 'zh'
                  ? `${cal.classNameZh} — [编号: ${cal.code}]`
                  : `${cal.classNameEn} — [Code: ${cal.code}]`}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#881337]">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>

        {/* Quick-select pills */}
        <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-[#e7e5e4]">
          <span className="text-xs text-[#78716c] font-medium mr-1">
            {language === 'zh' ? '快捷点击：' : 'Quick Pick:'}
          </span>
          {BSF_CLASS_CALENDARS.map(cal => {
            const isSelected = cal.id === selectedCalendarId;
            return (
              <button
                key={cal.id}
                onClick={() => setSelectedCalendarId(cal.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#881337] text-white shadow-xs'
                    : 'bg-white text-[#57534e] border border-[#d6d3d1] hover:border-[#881337] hover:text-[#881337]'
                }`}
              >
                {language === 'zh' ? cal.classNameZh.split(' (')[0] : cal.code}
              </button>
            );
          })}
        </div>
      </div>

      {/* Calendar Document Viewer & Content Card */}
      <div className="bg-white border border-[#e7e5e4] rounded-lg shadow-xs overflow-hidden">
        {/* Document Header Panel */}
        <div className="p-4 sm:p-6 bg-[#faf8f5] border-b border-[#e7e5e4]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 bg-[#881337] text-white text-xs font-bold rounded">
                  {currentCalendar.code}
                </span>
                <span className="text-xs font-mono font-semibold text-[#881337] bg-white px-2 py-0.5 rounded border border-[#f43f5e]/20">
                  {currentCalendar.fileName}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1c1917]">
                {language === 'zh' ? currentCalendar.contentTitleZh : currentCalendar.contentTitleEn}
              </h3>
              <p className="text-xs sm:text-sm text-[#78716c] mt-1">
                {language === 'zh' ? currentCalendar.descriptionZh : currentCalendar.descriptionEn}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-white text-[#881337] border border-[#881337] hover:bg-[#881337] hover:text-white transition-all shadow-2xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{language === 'zh' ? '打印 / 导出日历' : 'Print / Export'}</span>
              </button>
            </div>
          </div>

          {/* Class Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 pt-4 border-t border-[#e7e5e4] text-xs">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#a8a29e] block">{language === 'zh' ? '聚会时间' : 'Meeting Time'}</span>
                <span className="font-semibold text-[#1c1917]">
                  {language === 'zh' ? currentCalendar.meetingTimeZh : currentCalendar.meetingTimeEn}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#a8a29e] block">{language === 'zh' ? '聚会地点' : 'Location'}</span>
                <span className="font-semibold text-[#1c1917]">
                  {language === 'zh' ? currentCalendar.locationZh : currentCalendar.locationEn}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <UserCheck className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#a8a29e] block">{language === 'zh' ? '同工与带领人' : 'Leadership'}</span>
                <span className="font-semibold text-[#1c1917]">
                  {language === 'zh' ? currentCalendar.classLeadZh : currentCalendar.classLeadEn}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CalendarIcon className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#a8a29e] block">{language === 'zh' ? '对象群体' : 'Target Audience'}</span>
                <span className="font-semibold text-[#1c1917]">
                  {language === 'zh' ? currentCalendar.targetAudienceZh : currentCalendar.targetAudienceEn}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Filter & Search Bar */}
        <div className="p-4 border-b border-[#e7e5e4] bg-white flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#1c1917]">
              {language === 'zh' ? '全学年教学与作业进程' : 'Full Academic Schedule Matrix'}
            </span>
            <span className="text-xs text-[#78716c]">
              ({filteredSchedule.length} {language === 'zh' ? '周记录' : 'weeks listed'})
            </span>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#a8a29e]" />
            <input
              type="text"
              value={searchKeyword}
              onChange={e => setSearchKeyword(e.target.value)}
              placeholder={language === 'zh' ? '搜索课程、经文或日期...' : 'Search lesson, scripture...'}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded border border-[#d6d3d1] focus:outline-hidden focus:border-[#881337] bg-[#faf9f5]"
            />
          </div>
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f5f5f4] text-[#57534e] uppercase font-serif tracking-wider border-b border-[#e7e5e4]">
              <tr>
                <th className="py-2.5 px-4 font-semibold w-16 text-center">{language === 'zh' ? '周次' : 'Wk'}</th>
                <th className="py-2.5 px-4 font-semibold w-28">{language === 'zh' ? '班级日期' : 'Date'}</th>
                <th className="py-2.5 px-4 font-semibold">{language === 'zh' ? '课程主题' : 'Lesson Topic'}</th>
                <th className="py-2.5 px-4 font-semibold w-40">{language === 'zh' ? '研读经文' : 'Scripture'}</th>
                <th className="py-2.5 px-4 font-semibold w-44">{language === 'zh' ? '讲道法作业' : 'Homiletics Due'}</th>
                <th className="py-2.5 px-4 font-semibold w-36 text-center">{language === 'zh' ? '研读学习包' : 'Weekly Bundle'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f5f5f4]">
              {filteredSchedule.map(item => {
                return (
                  <tr
                    key={item.week}
                    className={`hover:bg-[#faf9f5] transition-colors ${
                      item.isHoliday ? 'bg-[#fffbeb]/50' : ''
                    }`}
                  >
                    <td className="py-3 px-4 text-center font-mono font-bold text-[#881337]">
                      {item.week}
                    </td>

                    <td className="py-3 px-4 font-mono text-[#57534e] whitespace-nowrap">
                      {item.date}
                    </td>

                    <td className="py-3 px-4 font-medium text-[#1c1917]">
                      <div className="flex items-center gap-2">
                        {item.isHoliday ? (
                          <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded text-[11px] font-semibold">
                            <Coffee className="w-3 h-3" />
                            {language === 'zh' ? item.lessonNameZh : item.lessonNameEn}
                          </span>
                        ) : (
                          <span className="font-serif">
                            {language === 'zh' ? item.lessonNameZh : item.lessonNameEn}
                          </span>
                        )}
                      </div>
                      {item.holidayNoteZh && (
                        <p className="text-[11px] text-[#a8a29e] mt-0.5 italic">
                          {language === 'zh' ? item.holidayNoteZh : item.holidayNoteEn}
                        </p>
                      )}
                    </td>

                    <td className="py-3 px-4 font-serif text-[#44403c] whitespace-nowrap">
                      {item.scripture}
                    </td>

                    <td className="py-3 px-4 whitespace-nowrap">
                      {item.homileticsDue ? (
                        <div className="flex items-center gap-1.5">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-[#fdf2f4] text-[#881337] border border-[#f43f5e]/30">
                            <AlertCircle className="w-3 h-3" />
                            {language === 'zh' ? item.homileticsDueTitleZh : item.homileticsDueTitleEn}
                          </span>
                          <button
                            onClick={() => setCurrentPage('homiletics')}
                            className="text-[10px] text-[#881337] underline hover:text-[#9f1239]"
                          >
                            {language === 'zh' ? '去填写' : 'Open'}
                          </button>
                        </div>
                      ) : (
                        <span className="text-[#a8a29e] text-[11px]">
                          {item.isHoliday ? '-' : (language === 'zh' ? '无独立作业' : 'None')}
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4 text-center whitespace-nowrap">
                      <button
                        id={`open-weekly-bundle-wk-${item.week}`}
                        onClick={() => openWeeklyBundle(item.week)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-md bg-[#881337] text-white hover:bg-[#700f2b] transition-colors shadow-2xs"
                        title={language === 'zh' ? `打开第 ${item.week} 周完整研读包` : `Open Week ${item.week} Bundle`}
                      >
                        <Layers className="w-3 h-3" />
                        <span>{language === 'zh' ? `第${item.week}周研读包` : `Bundle W${item.week}`}</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
