import React, { useState } from 'react';
import {
  PenTool,
  BookOpen,
  Calendar,
  Save,
  Send,
  CheckCircle2,
  Copy,
  Info,
  HelpCircle,
  FileText,
  User,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BSF_HOMILETICS_ASSIGNMENTS } from '../data/bsfData';

export const HomileticsPage: React.FC = () => {
  const {
    language,
    currentUser,
    homileticsSubmissions,
    saveHomileticsDraft,
    submitHomiletics,
    setCurrentPage
  } = useApp();

  const [selectedWeek, setSelectedWeek] = useState<number>(BSF_HOMILETICS_ASSIGNMENTS[0].week);
  const [showGuidelines, setShowGuidelines] = useState(true);
  const [copiedNotification, setCopiedNotification] = useState(false);

  const currentAssignment =
    BSF_HOMILETICS_ASSIGNMENTS.find(a => a.week === selectedWeek) || BSF_HOMILETICS_ASSIGNMENTS[0];

  const currentSubmission = homileticsSubmissions[selectedWeek] || {
    week: selectedWeek,
    divisions: '',
    subjectSentence: '',
    aim: '',
    outline: '',
    applications: '',
    updatedAt: '',
    isSubmitted: false
  };

  const handleChange = (field: keyof typeof currentSubmission, value: string) => {
    saveHomileticsDraft(selectedWeek, { [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitHomiletics(selectedWeek);
  };

  const handleCopyFormatted = () => {
    const text = `【BSF 讲道法作业 - Week ${selectedWeek}】\n经文: ${currentAssignment.scripture}\n学员: ${currentUser.name} (${currentUser.groupName})\n状态: ${currentSubmission.isSubmitted ? '已提交' : '草稿'}\n\n1. 经文分段:\n${currentSubmission.divisions}\n\n2. 主题句 (Subject Sentence):\n${currentSubmission.subjectSentence}\n\n3. 主旨 (AIM):\n${currentSubmission.aim}\n\n4. 大纲与属灵原则 (Outline & Principles):\n${currentSubmission.outline}\n\n5. 生活应用问题 (Applications):\n${currentSubmission.applications}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    });
  };

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="border-b border-[#e7e5e4] pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#881337] font-semibold uppercase tracking-wider mb-1">
              <PenTool className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '每周讲道法研读专区' : 'Weekly Homiletics Studio'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c1917]">
              {language === 'zh' ? '讲道法研经作业入口 (Homiletics)' : 'Homiletics Assignment & Exegesis Portal'}
            </h2>
            <p className="text-sm text-[#78716c] mt-1 max-w-3xl">
              {language === 'zh'
                ? 'BSF经典五步讲道法研经工具。每周更新指定作业经文，学员登录后可直接在线草拟、保存并提交作业，同步记录于学员管理进度看板中。'
                : 'BSF classic 5-step homiletics methodology worksheet. Updates weekly, allows draft saving, direct submission, and sync with your personal study tracker.'}
            </p>
          </div>

          {/* User Session Bar */}
          <div className="flex items-center gap-2.5 bg-white border border-[#e7e5e4] px-3.5 py-2 rounded-lg text-xs">
            <User className="w-4 h-4 text-[#881337]" />
            <div>
              <span className="font-bold text-[#1c1917] block">{currentUser.name}</span>
              <span className="text-[11px] text-[#78716c]">{currentUser.groupName}</span>
            </div>
            <button
              onClick={() => setCurrentPage('admin')}
              className="ml-2 text-[11px] text-[#881337] underline font-medium"
            >
              {language === 'zh' ? '查看看板' : 'Admin'}
            </button>
          </div>
        </div>
      </div>

      {/* Week Selector Chips */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#57534e] uppercase tracking-wider">
          {language === 'zh' ? '选择作业周次：' : 'Select Assignment Week:'}
        </label>
        <div className="flex flex-wrap gap-2">
          {BSF_HOMILETICS_ASSIGNMENTS.map(item => {
            const isSelected = item.week === selectedWeek;
            const sub = homileticsSubmissions[item.week];
            const isDone = sub?.isSubmitted;

            return (
              <button
                key={item.week}
                onClick={() => setSelectedWeek(item.week)}
                className={`px-4 py-2 rounded-lg border text-xs font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'border-[#881337] bg-[#881337] text-white shadow-xs'
                    : 'border-[#e7e5e4] bg-white text-[#292524] hover:bg-[#faf9f5]'
                }`}
              >
                <span>Week {item.week}</span>
                <span className="opacity-80">({item.scripture.split(' ')[0]})</span>
                {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Assignment Overview Banner */}
      <div className="bg-white border border-[#e7e5e4] rounded-lg p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#f5f5f4] pb-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-[#fdf2f4] text-[#881337] text-xs font-bold font-mono">
                Week {currentAssignment.week}
              </span>
              <span className="text-xs text-[#78716c] flex items-center gap-1 font-mono">
                <Calendar className="w-3 h-3" />
                {language === 'zh' ? `截止日: ${currentAssignment.dueDate}` : `Due: ${currentAssignment.dueDate}`}
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1c1917]">
              {language === 'zh' ? currentAssignment.topicZh : currentAssignment.topicEn}
            </h3>
            <div className="flex items-center gap-2 text-xs text-[#881337] font-semibold mt-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{currentAssignment.scripture}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-1 text-xs font-bold rounded-full border ${
                currentSubmission.isSubmitted
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                  : 'bg-amber-50 text-amber-700 border-amber-300'
              }`}
            >
              {currentSubmission.isSubmitted
                ? (language === 'zh' ? '✓ 已正式提交' : '✓ Submitted')
                : (language === 'zh' ? '✎ 编辑草稿中' : '✎ Draft in Progress')}
            </span>

            <button
              onClick={handleCopyFormatted}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded border border-[#d6d3d1] hover:border-[#881337] bg-white text-[#292524] transition-colors"
              title="Copy formatted text"
            >
              <Copy className="w-3.5 h-3.5 text-[#78716c]" />
              <span>{copiedNotification ? (language === 'zh' ? '已复制!' : 'Copied!') : (language === 'zh' ? '复制全文' : 'Copy')}</span>
            </button>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed">
          {language === 'zh' ? currentAssignment.passageBackgroundZh : currentAssignment.passageBackgroundEn}
        </p>

        {/* Collapsible Guidelines Box */}
        <div className="mt-4 pt-3 border-t border-[#f5f5f4]">
          <button
            onClick={() => setShowGuidelines(!showGuidelines)}
            className="flex items-center justify-between w-full text-xs font-bold text-[#881337] hover:underline"
          >
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              {language === 'zh' ? '查看本周研经参考分段与提示' : 'View Sample Divisions & Exegesis Tips'}
            </span>
            {showGuidelines ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showGuidelines && (
            <div className="mt-3 bg-[#faf9f6] p-4 rounded-md border border-[#e7e5e4] text-xs space-y-3">
              <div>
                <span className="font-bold text-[#1c1917] block mb-1">
                  {language === 'zh' ? '推荐参考经文分段 (Divisions):' : 'Suggested Scripture Divisions:'}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {currentAssignment.sampleDivisions.map((div, i) => (
                    <div key={i} className="bg-white p-2.5 rounded border border-[#e7e5e4]">
                      <span className="font-bold text-[#881337] block font-mono">{div.verses}</span>
                      <span className="font-serif font-semibold text-[#1c1917] block mt-0.5">
                        {language === 'zh' ? div.titleZh : div.titleEn}
                      </span>
                      <p className="text-[11px] text-[#78716c] mt-1 italic">
                        {language === 'zh' ? div.principleZh : div.principleEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#57534e] pt-1">
                <div>
                  <span className="font-bold text-[#1c1917]">{language === 'zh' ? '主题句规范：' : 'Subject Sentence Rule:'} </span>
                  {language === 'zh' ? currentAssignment.subjectSentenceGuidelineZh : currentAssignment.subjectSentenceGuidelineEn}
                </div>
                <div>
                  <span className="font-bold text-[#1c1917]">{language === 'zh' ? '主旨(AIM)规范：' : 'AIM Rule:'} </span>
                  {language === 'zh' ? currentAssignment.aimGuidelineZh : currentAssignment.aimGuidelineEn}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 5-Step Worksheet Form */}
      <form onSubmit={handleSubmit} className="bg-white border border-[#e7e5e4] rounded-lg p-5 sm:p-6 shadow-xs space-y-5">
        <div className="border-b border-[#f5f5f4] pb-3 flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg text-[#1c1917] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#881337]" />
            <span>{language === 'zh' ? 'BSF 讲道法五步答题纸' : '5-Step Homiletics Worksheet'}</span>
          </h3>
          <span className="text-[11px] text-[#a8a29e]">
            {language === 'zh' ? '输入内容将自动保存在本机会话' : 'Drafts auto-save to browser session'}
          </span>
        </div>

        {/* Step 1: Divisions */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#1c1917] flex items-center justify-between">
            <span>
              1. {language === 'zh' ? '经文分段 (Divisions & Titles)' : 'Passage Divisions & Paragraph Titles'}
            </span>
            <span className="text-[11px] text-[#78716c] font-normal">
              {language === 'zh' ? '划分2-4个段落并写明节数' : 'Divide passage into 2-4 sections'}
            </span>
          </label>
          <textarea
            rows={3}
            value={currentSubmission.divisions}
            onChange={e => handleChange('divisions', e.target.value)}
            placeholder={language === 'zh' ? '例如：\n罗 1:18-23 故意压制真理与偶像虚妄\n罗 1:24-27 神三次任凭与道德自食恶果\n罗 1:28-32 存邪僻之心与公义定罪' : 'Enter your section breakdown and section headers...'}
            className="w-full p-3 text-xs sm:text-sm rounded border border-[#d6d3d1] focus:outline-hidden focus:border-[#881337] bg-[#faf9f6]"
          />
        </div>

        {/* Step 2: Subject Sentence */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#1c1917] flex items-center justify-between">
            <span>
              2. {language === 'zh' ? '主题句 (Subject Sentence - 10字以内)' : 'Subject Sentence (10 words or fewer)'}
            </span>
            <span className="text-[11px] text-[#78716c] font-normal">
              {language === 'zh' ? '概括全章整段核心信息' : 'Summarize the whole text in one sentence'}
            </span>
          </label>
          <input
            type="text"
            value={currentSubmission.subjectSentence}
            onChange={e => handleChange('subjectSentence', e.target.value)}
            placeholder={language === 'zh' ? '例如：神忿怒显明，因世人弃绝造物主真理。' : 'e.g. God’s wrath is revealed because humanity rejects divine truth.'}
            className="w-full p-3 text-xs sm:text-sm rounded border border-[#d6d3d1] focus:outline-hidden focus:border-[#881337] bg-[#faf9f6]"
          />
        </div>

        {/* Step 3: AIM */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#1c1917] flex items-center justify-between">
            <span>
              3. {language === 'zh' ? '主旨 (AIM - 教学与改变目的)' : 'AIM (Purpose / Heart Conviction)'}
            </span>
            <span className="text-[11px] text-[#78716c] font-normal">
              {language === 'zh' ? '使听众/学员因这经文产生什么悔改或回应' : 'To cause the learner to...'}
            </span>
          </label>
          <input
            type="text"
            value={currentSubmission.aim}
            onChange={e => handleChange('aim', e.target.value)}
            placeholder={language === 'zh' ? '例如：叫学员认清罪恶的真实可怖，专一敬畏并紧紧依靠主基督的福音。' : 'e.g. To cause learners to recognize the gravity of sin and rely solely on Christ.'}
            className="w-full p-3 text-xs sm:text-sm rounded border border-[#d6d3d1] focus:outline-hidden focus:border-[#881337] bg-[#faf9f6]"
          />
        </div>

        {/* Step 4: Outline & Principles */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#1c1917] flex items-center justify-between">
            <span>
              4. {language === 'zh' ? '大纲与属灵原则 (Outline & Principles)' : 'Outline Points & Spiritual Principles'}
            </span>
            <span className="text-[11px] text-[#78716c] font-normal">
              {language === 'zh' ? '每个大纲要点提炼一条永恒真理原则' : 'State each point with a timeless truth'}
            </span>
          </label>
          <textarea
            rows={4}
            value={currentSubmission.outline}
            onChange={e => handleChange('outline', e.target.value)}
            placeholder={language === 'zh' ? 'I. 压制真理招致心智昏昧 (1:18-23)\n原则：离开神的真理，人无可避免走向虚妄。\n\nII. 离开神荣耀招致道德沉沦 (1:24-27)\n原则：将受造物代替造物主必招致生命的毁坏。' : 'I. Outline Point I\nPrinciple: ...\n\nII. Outline Point II\nPrinciple: ...'}
            className="w-full p-3 text-xs sm:text-sm rounded border border-[#d6d3d1] focus:outline-hidden focus:border-[#881337] bg-[#faf9f6]"
          />
        </div>

        {/* Step 5: Application Questions */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#1c1917] flex items-center justify-between">
            <span>
              5. {language === 'zh' ? '生活应用问题 (Application Questions)' : 'Personal Application Questions'}
            </span>
            <span className="text-[11px] text-[#78716c] font-normal">
              {language === 'zh' ? '以“我如何...”或“在我生命中...”提问' : 'How does this truth challenge my walk?'}
            </span>
          </label>
          <textarea
            rows={3}
            value={currentSubmission.applications}
            onChange={e => handleChange('applications', e.target.value)}
            placeholder={language === 'zh' ? '1. 在我的生活与工作中，是否存在故意不承认神的隐秘角落？\n2. 面对周围世俗思潮对信仰的嘲弄，我是否依然以福音为耻？' : '1. In what areas of my life am I tempted to suppress God’s truth?\n2. How will I actively confess Christ this week?'}
            className="w-full p-3 text-xs sm:text-sm rounded border border-[#d6d3d1] focus:outline-hidden focus:border-[#881337] bg-[#faf9f6]"
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-[#f5f5f4] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#78716c]">
            {currentSubmission.updatedAt && (
              <span>
                {language === 'zh' ? '最后保存时间：' : 'Last Saved: '} {currentSubmission.updatedAt}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => saveHomileticsDraft(selectedWeek, {})}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-semibold border border-[#d6d3d1] hover:border-[#881337] bg-white text-[#292524] transition-colors"
            >
              <Save className="w-3.5 h-3.5 text-[#78716c]" />
              <span>{language === 'zh' ? '保存草稿' : 'Save Draft'}</span>
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded text-xs font-semibold bg-[#881337] hover:bg-[#700f2b] text-white shadow-xs transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '提交作业至组长' : 'Submit Assignment'}</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
