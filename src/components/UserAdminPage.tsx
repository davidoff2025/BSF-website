import React, { useState } from 'react';
import {
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  User,
  Users,
  Download,
  Calendar,
  Headphones,
  Award,
  BookOpen,
  Filter,
  RefreshCw,
  Eye,
  Database,
  Upload,
  FileJson,
  Check,
  Shield,
  Layers,
  Copy
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BSF_CLASS_CALENDARS, DEFAULT_FILE_DATABASE } from '../data/bsfData';
import { BsfFileDatabase } from '../types';

export const UserAdminPage: React.FC = () => {
  const {
    language,
    sessionSeconds,
    totalViewerSeconds,
    currentUser,
    setCurrentUser,
    learners,
    currentLearnerProgress,
    toggleLectureCompleted,
    toggleReadingCompleted,
    setCurrentPage
  } = useApp();

  const [activeTab, setActiveTab] = useState<'personal' | 'supervisor' | 'database'>('personal');
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('all');
  const [exportNotice, setExportNotice] = useState<string | null>(null);
  const [fileDbData, setFileDbData] = useState<BsfFileDatabase>(DEFAULT_FILE_DATABASE);
  const [copiedDbJson, setCopiedDbJson] = useState<boolean>(false);

  const formatHoursMins = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m ${seconds}s`;
    }
    return `${mins}m ${seconds}s`;
  };

  const filteredLearners = learners.filter(l => {
    if (selectedClassFilter === 'all') return true;
    return l.classId === selectedClassFilter;
  });

  const totalCohortSeconds = learners.reduce((sum, l) => sum + l.totalViewerSeconds, 0);
  const totalSubmissions = learners.reduce((sum, l) => {
    const subs = Object.values(l.homileticsStatus).filter(s => s === 'submitted').length;
    return sum + subs;
  }, 0);

  const handleExportCSV = () => {
    const headers = 'UserId,Name,Email,ClassId,GroupName,TotalViewerSeconds,TotalViewerMinutes,CompletedLecturesCount,HomileticsStatus\n';
    const rows = learners
      .map(
        l =>
          `"${l.userId}","${l.name}","${l.email}","${l.classId}","${l.groupName}",${l.totalViewerSeconds},${Math.round(
            l.totalViewerSeconds / 60
          )},${l.completedLectures.length},"${JSON.stringify(l.homileticsStatus).replace(/"/g, "'")}"`
      )
      .join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `BSF_Study_Completion_Dashboard_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setExportNotice('CSV 报表导出成功');
    setTimeout(() => setExportNotice(null), 3000);
  };

  const handleExportDatabaseJSON = () => {
    const updatedDb: BsfFileDatabase = {
      ...fileDbData,
      learners: learners,
      lastSyncTimestamp: new Date().toISOString()
    };
    const jsonStr = JSON.stringify(updatedDb, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `bsf_master_database.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setExportNotice('文件数据库 (bsf_master_database.json) 导出成功');
    setTimeout(() => setExportNotice(null), 3000);
  };

  const handleCopyDbJson = () => {
    const jsonStr = JSON.stringify(fileDbData, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopiedDbJson(true);
    setTimeout(() => setCopiedDbJson(false), 2000);
  };

  const handleResetDatabase = () => {
    setFileDbData({
      ...DEFAULT_FILE_DATABASE,
      lastSyncTimestamp: new Date().toISOString()
    });
    setExportNotice('文件数据库已重置为系统默认架构');
    setTimeout(() => setExportNotice(null), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="border-b border-[#e7e5e4] pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#881337] font-semibold uppercase tracking-wider mb-1">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '学员时长与作业管理' : 'Study Tracker & Dashboard'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c1917]">
              {language === 'zh' ? '学年学习进度与督导管理看板' : 'Academic Completion & Viewer Admin Dashboard'}
            </h2>
            <p className="text-sm text-[#78716c] mt-1 max-w-3xl">
              {language === 'zh'
                ? '自动记录会话访问时长与音频研读时间；学员可核验逐周讲义音频、灵修经文研读与讲道法作业提交进度；同工可查阅全班完成看板与文件型数据库状态。'
                : 'Tracks active session viewer time and lecture listening; records weekly scripture study, homiletics submissions, and supervisor class roster overview.'}
            </p>
          </div>

          {/* Switch Tab Buttons */}
          <div className="flex items-center gap-1 bg-[#f5f5f4] p-1 rounded-lg border border-[#e7e5e4]">
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'personal'
                  ? 'bg-white text-[#881337] shadow-xs'
                  : 'text-[#57534e] hover:text-[#1c1917]'
              }`}
            >
              {language === 'zh' ? '个人学习档案' : 'Personal Tracker'}
            </button>
            <button
              onClick={() => setActiveTab('supervisor')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'supervisor'
                  ? 'bg-white text-[#881337] shadow-xs'
                  : 'text-[#57534e] hover:text-[#1c1917]'
              }`}
            >
              {language === 'zh' ? '同工督导看板' : 'Supervisor Roster'}
            </button>
            <button
              onClick={() => setActiveTab('database')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'database'
                  ? 'bg-white text-[#881337] shadow-xs'
                  : 'text-[#57534e] hover:text-[#1c1917]'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '文件型数据库' : 'File Database'}</span>
            </button>
          </div>
        </div>
      </div>

      {exportNotice && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-md text-xs font-semibold flex items-center justify-between animate-in fade-in">
          <span>{exportNotice}</span>
          <Check className="w-4 h-4 text-emerald-600" />
        </div>
      )}

      {/* Top 4 KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Session Viewer Time */}
        <div className="bg-white p-4 sm:p-5 rounded-lg border border-[#e7e5e4] shadow-xs">
          <div className="flex items-center justify-between text-[#78716c] text-xs mb-2">
            <span className="font-semibold uppercase tracking-wider">
              {language === 'zh' ? '本次会话浏览时长' : 'Current Session Time'}
            </span>
            <Clock className="w-4 h-4 text-[#881337] animate-pulse" />
          </div>
          <div className="text-2xl font-mono font-bold text-[#1c1917]">
            {formatHoursMins(sessionSeconds)}
          </div>
          <p className="text-[11px] text-[#a8a29e] mt-1">
            {language === 'zh' ? '活跃页面研读中计时' : 'Live timer updating'}
          </p>
        </div>

        {/* Cumulative Viewer Time */}
        <div className="bg-white p-4 sm:p-5 rounded-lg border border-[#e7e5e4] shadow-xs">
          <div className="flex items-center justify-between text-[#78716c] text-xs mb-2">
            <span className="font-semibold uppercase tracking-wider">
              {language === 'zh' ? '累计研读总时长' : 'Total Viewer Time'}
            </span>
            <Eye className="w-4 h-4 text-[#881337]" />
          </div>
          <div className="text-2xl font-mono font-bold text-[#881337]">
            {formatHoursMins(totalViewerSeconds)}
          </div>
          <p className="text-[11px] text-[#a8a29e] mt-1">
            {language === 'zh' ? '音频聆听与讲义阅读累计' : 'Across lecture & document reading'}
          </p>
        </div>

        {/* Lecture Audio Completed */}
        <div className="bg-white p-4 sm:p-5 rounded-lg border border-[#e7e5e4] shadow-xs">
          <div className="flex items-center justify-between text-[#78716c] text-xs mb-2">
            <span className="font-semibold uppercase tracking-wider">
              {language === 'zh' ? '讲道录音研习进度' : 'Lectures Completed'}
            </span>
            <Headphones className="w-4 h-4 text-[#881337]" />
          </div>
          <div className="text-2xl font-mono font-bold text-[#1c1917]">
            {currentLearnerProgress.completedLectures.length} / 30
          </div>
          <p className="text-[11px] text-emerald-600 mt-1 font-semibold">
            {Math.round((currentLearnerProgress.completedLectures.length / 30) * 100)}% {language === 'zh' ? '完成率' : 'Completed'}
          </p>
        </div>

        {/* Homiletics Submissions */}
        <div className="bg-white p-4 sm:p-5 rounded-lg border border-[#e7e5e4] shadow-xs">
          <div className="flex items-center justify-between text-[#78716c] text-xs mb-2">
            <span className="font-semibold uppercase tracking-wider">
              {language === 'zh' ? '讲道法作业提交' : 'Homiletics Done'}
            </span>
            <FileCheck className="w-4 h-4 text-[#881337]" />
          </div>
          <div className="text-2xl font-mono font-bold text-[#1c1917]">
            {Object.values(currentLearnerProgress.homileticsStatus).filter(s => s === 'submitted').length}
          </div>
          <p className="text-[11px] text-[#78716c] mt-1">
            {language === 'zh' ? '已提交至组长批阅' : 'Submitted for review'}
          </p>
        </div>
      </div>

      {activeTab === 'personal' && (
        /* Personal Study Tracker View */
        <div className="space-y-6">
          {/* User Profile Card */}
          <div className="bg-white border border-[#e7e5e4] p-5 rounded-lg shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#881337] text-white flex items-center justify-center font-serif font-bold text-lg">
                  {currentUser.name.slice(0, 1)}
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#1c1917]">{currentUser.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#78716c] mt-0.5">
                    <span className="font-mono">{currentUser.email}</span>
                    <span>•</span>
                    <span className="font-semibold text-[#881337]">{currentUser.groupName}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage('homiletics')}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded bg-[#881337] text-white hover:bg-[#700f2b] transition-colors"
                >
                  {language === 'zh' ? '填写本周讲道法作业' : 'Go to Homiletics'}
                </button>
              </div>
            </div>
          </div>

          {/* Weekly Checklist Matrix */}
          <div className="bg-white border border-[#e7e5e4] rounded-lg shadow-xs overflow-hidden">
            <div className="p-4 bg-[#faf8f5] border-b border-[#e7e5e4] flex items-center justify-between">
              <h3 className="font-serif font-bold text-sm sm:text-base text-[#1c1917] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#881337]" />
                <span>{language === 'zh' ? '逐周研读与作业完成核验表' : 'Weekly Study Verification Matrix'}</span>
              </h3>
              <span className="text-[11px] text-[#78716c]">
                {language === 'zh' ? '点击复选框可手动标记完成状态' : 'Click to toggle completion'}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f5f5f4] text-[#57534e] uppercase font-serif tracking-wider border-b border-[#e7e5e4]">
                  <tr>
                    <th className="py-2.5 px-4 font-semibold w-16 text-center">{language === 'zh' ? '周次' : 'Wk'}</th>
                    <th className="py-2.5 px-4 font-semibold">{language === 'zh' ? '讲道录音文件' : 'Lecture Audio File'}</th>
                    <th className="py-2.5 px-4 font-semibold text-center w-32">{language === 'zh' ? '录音完成' : 'Audio Done'}</th>
                    <th className="py-2.5 px-4 font-semibold text-center w-32">{language === 'zh' ? '经文预习' : 'Reading Done'}</th>
                    <th className="py-2.5 px-4 font-semibold text-center w-40">{language === 'zh' ? '讲道法作业状态' : 'Homiletics'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f5f5f4]">
                  {Array.from({ length: 15 }, (_, i) => i + 1).map(week => {
                    const audioDone = currentLearnerProgress.completedLectures.includes(week);
                    const readDone = currentLearnerProgress.weeklyReadingProgress[week] || false;
                    const homStatus = currentLearnerProgress.homileticsStatus[week] || 'not_started';
                    const fileName =
                      week === 1
                        ? 'ROM_Lecture_00_MEN_062-26.mp2'
                        : `ROM_Lecture_${(week - 1).toString().padStart(2, '0')}_MEN_062-${26 + week - 1}.mp3`;

                    return (
                      <tr key={week} className="hover:bg-[#faf9f5] transition-colors">
                        <td className="py-2.5 px-4 text-center font-bold text-[#881337]">
                          W{week}
                        </td>
                        <td className="py-2.5 px-4 font-mono text-[11px] text-[#44403c]">
                          {fileName}
                        </td>
                        <td className="py-2.5 px-4 text-center">
                          <button
                            onClick={() => toggleLectureCompleted(week)}
                            className={`p-1 rounded transition-colors ${
                              audioDone ? 'text-emerald-600' : 'text-[#d6d3d1] hover:text-[#a8a29e]'
                            }`}
                          >
                            <CheckCircle2 className="w-5 h-5 inline-block" />
                          </button>
                        </td>
                        <td className="py-2.5 px-4 text-center">
                          <button
                            onClick={() => toggleReadingCompleted(week)}
                            className={`p-1 rounded transition-colors ${
                              readDone ? 'text-emerald-600' : 'text-[#d6d3d1] hover:text-[#a8a29e]'
                            }`}
                          >
                            <CheckCircle2 className="w-5 h-5 inline-block" />
                          </button>
                        </td>
                        <td className="py-2.5 px-4 text-center">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                              homStatus === 'submitted'
                                ? 'bg-emerald-100 text-emerald-800'
                                : homStatus === 'draft'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-[#f5f5f4] text-[#78716c]'
                            }`}
                          >
                            {homStatus === 'submitted'
                              ? (language === 'zh' ? '已提交批阅' : 'Submitted')
                              : homStatus === 'draft'
                              ? (language === 'zh' ? '草稿编辑中' : 'Draft')
                              : (language === 'zh' ? '尚未开始' : 'Not Started')}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'supervisor' && (
        /* Supervisor Cohort View */
        <div className="space-y-6">
          <div className="bg-white border border-[#e7e5e4] p-4 rounded-lg shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#57534e] flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" />
                {language === 'zh' ? '筛选班级:' : 'Filter Class:'}
              </span>
              <button
                onClick={() => setSelectedClassFilter('all')}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
                  selectedClassFilter === 'all'
                    ? 'bg-[#881337] text-white'
                    : 'bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]'
                }`}
              >
                {language === 'zh' ? '全部班级' : 'All Classes'}
              </button>
              {BSF_CLASS_CALENDARS.map(cal => (
                <button
                  key={cal.id}
                  onClick={() => setSelectedClassFilter(cal.id)}
                  className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
                    selectedClassFilter === cal.id
                      ? 'bg-[#881337] text-white'
                      : 'bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]'
                  }`}
                >
                  {cal.code}
                </button>
              ))}
            </div>

            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded bg-white text-[#881337] border border-[#881337] hover:bg-[#881337] hover:text-white transition-all shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '导出全班督导报表 (CSV)' : 'Export Roster CSV'}</span>
            </button>
          </div>

          {/* Roster Table */}
          <div className="bg-white border border-[#e7e5e4] rounded-lg shadow-xs overflow-hidden">
            <div className="p-4 bg-[#faf8f5] border-b border-[#e7e5e4] flex items-center justify-between">
              <h3 className="font-serif font-bold text-sm sm:text-base text-[#1c1917] flex items-center gap-2">
                <Users className="w-4 h-4 text-[#881337]" />
                <span>{language === 'zh' ? '学员研学时长与作业提交总册' : 'Learner Study Completion Roster'}</span>
              </h3>
              <span className="text-xs text-[#78716c]">
                {language === 'zh' ? `共 ${filteredLearners.length} 位注册学员` : `${filteredLearners.length} Registered Learners`}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f5f5f4] text-[#57534e] uppercase font-serif tracking-wider border-b border-[#e7e5e4]">
                  <tr>
                    <th className="py-2.5 px-4 font-semibold">{language === 'zh' ? '学员姓名 / 邮箱' : 'Learner / Email'}</th>
                    <th className="py-2.5 px-4 font-semibold">{language === 'zh' ? '所属小组 / 班级' : 'Group / Class'}</th>
                    <th className="py-2.5 px-4 font-semibold text-center">{language === 'zh' ? '累计研读时长' : 'Total Viewer Time'}</th>
                    <th className="py-2.5 px-4 font-semibold text-center">{language === 'zh' ? '音频完成周数' : 'Audio Weeks'}</th>
                    <th className="py-2.5 px-4 font-semibold text-center">{language === 'zh' ? '第1周讲道法' : 'W1 Homiletics'}</th>
                    <th className="py-2.5 px-4 font-semibold text-center">{language === 'zh' ? '最近活跃' : 'Last Active'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f5f5f4]">
                  {filteredLearners.map(learner => {
                    const hom1 = learner.homileticsStatus[1] || 'not_started';
                    return (
                      <tr key={learner.userId} className="hover:bg-[#faf9f5] transition-colors">
                        <td className="py-3 px-4">
                          <div className="font-serif font-bold text-[#1c1917]">{learner.name}</div>
                          <div className="text-[11px] font-mono text-[#78716c]">{learner.email}</div>
                        </td>

                        <td className="py-3 px-4">
                          <span className="font-semibold text-[#44403c] block">{learner.groupName}</span>
                          <span className="text-[10px] text-[#a8a29e] font-mono">{learner.classId}</span>
                        </td>

                        <td className="py-3 px-4 text-center font-mono font-bold text-[#881337]">
                          {formatHoursMins(learner.totalViewerSeconds)}
                        </td>

                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-2 py-0.5 rounded bg-[#f5f5f4] font-mono font-semibold">
                            {learner.completedLectures.length} / 30
                          </span>
                        </td>

                        <td className="py-3 px-4 text-center">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                              hom1 === 'submitted'
                                ? 'bg-emerald-100 text-emerald-800'
                                : hom1 === 'draft'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-[#f5f5f4] text-[#78716c]'
                            }`}
                          >
                            {hom1 === 'submitted'
                              ? (language === 'zh' ? '已提交' : 'Submitted')
                              : hom1 === 'draft'
                              ? (language === 'zh' ? '草稿中' : 'Draft')
                              : (language === 'zh' ? '未提交' : 'Pending')}
                          </span>
                        </td>

                        <td className="py-3 px-4 text-center font-mono text-[#78716c] text-[11px]">
                          {learner.lastActive}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'database' && (
        /* File-Based Database View (User Requirement 6: "如果需要数据库，可以直接在google drive建立文件类型的数据库") */
        <div className="space-y-6 animate-in fade-in">
          {/* Architecture Card */}
          <div className="bg-[#faf8f5] border border-[#e7e5e4] p-5 sm:p-6 rounded-xl shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e5e4] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#881337] text-white flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#1c1917] flex items-center gap-2">
                    <span>{language === 'zh' ? '云端文件类型数据库' : 'File-Based Cloud Database Engine'}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 font-semibold">
                      Synced & Isolated
                    </span>
                  </h3>
                  <p className="text-xs text-[#78716c] mt-0.5">
                    {language === 'zh'
                      ? '存储模式：以结构化 JSON 文件 (bsf_master_database.json) 存储全部学员数据、作业与打卡状态。底层完全隔离，前台无感读写。'
                      : 'Storage Schema: Persisted as a structured JSON file (bsf_master_database.json) containing all learner records, assignments, and study syncs.'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportDatabaseJSON}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded bg-[#881337] hover:bg-[#700f2b] text-white transition-all shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{language === 'zh' ? '导出数据库 JSON 文件' : 'Export JSON DB'}</span>
                </button>
                <button
                  onClick={handleCopyDbJson}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded border border-[#d6d3d1] hover:border-[#881337] bg-white text-[#292524] transition-all"
                >
                  <Copy className="w-3.5 h-3.5 text-[#78716c]" />
                  <span>{copiedDbJson ? (language === 'zh' ? '已复制' : 'Copied') : (language === 'zh' ? '复制代码' : 'Copy JSON')}</span>
                </button>
              </div>
            </div>

            {/* Database Tables Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="bg-white p-3.5 rounded-lg border border-[#e7e5e4] shadow-2xs">
                <div className="text-[#a8a29e] uppercase text-[10px] font-bold tracking-wider mb-1">
                  Table 1: learners
                </div>
                <div className="text-xl font-mono font-bold text-[#1c1917]">
                  {fileDbData.learners.length} 条记录
                </div>
                <div className="text-[11px] text-[#78716c] mt-0.5">学员档案、时长与完成状态</div>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#e7e5e4] shadow-2xs">
                <div className="text-[#a8a29e] uppercase text-[10px] font-bold tracking-wider mb-1">
                  Table 2: homileticsSubmissions
                </div>
                <div className="text-xl font-mono font-bold text-[#1c1917]">
                  {fileDbData.homileticsSubmissions.length} 份作业
                </div>
                <div className="text-[11px] text-[#78716c] mt-0.5">结构化讲道法讲道大纲</div>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#e7e5e4] shadow-2xs">
                <div className="text-[#a8a29e] uppercase text-[10px] font-bold tracking-wider mb-1">
                  Table 3: weeklyAudioStatus
                </div>
                <div className="text-xl font-mono font-bold text-[#1c1917]">
                  {fileDbData.weeklyAudioStatus.length} 周音频
                </div>
                <div className="text-[11px] text-[#78716c] mt-0.5">30周音频流媒体状态映射</div>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#e7e5e4] shadow-2xs">
                <div className="text-[#a8a29e] uppercase text-[10px] font-bold tracking-wider mb-1">
                  Database File Version
                </div>
                <div className="text-base font-mono font-bold text-[#881337]">
                  {fileDbData.version}
                </div>
                <div className="text-[11px] text-[#78716c] mt-0.5">
                  上次同步：{fileDbData.lastSyncTimestamp.slice(0, 10)}
                </div>
              </div>
            </div>
          </div>

          {/* Real-Time Database Inspector / Code Viewer */}
          <div className="bg-white border border-[#e7e5e4] rounded-lg shadow-xs overflow-hidden">
            <div className="p-4 bg-[#292524] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileJson className="w-4 h-4 text-[#f59e0b]" />
                <span className="font-mono text-xs font-semibold">bsf_master_database.json (实时数据预览)</span>
              </div>
              <button
                onClick={handleResetDatabase}
                className="inline-flex items-center gap-1 text-xs text-[#a8a29e] hover:text-white transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>{language === 'zh' ? '重置为默认数据' : 'Reset Schema'}</span>
              </button>
            </div>
            <pre className="p-4 bg-[#1c1917] text-[#e7e5e4] text-[11px] font-mono overflow-x-auto max-h-96 leading-relaxed">
              {JSON.stringify(fileDbData, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
