import React, { useState } from 'react';
import {
  FolderDown,
  Folder,
  FileText,
  FileAudio,
  Search,
  Filter,
  CheckCircle2,
  Calendar,
  Layers,
  BookOpen,
  Headphones,
  Eye,
  X,
  Printer
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BSF_RESOURCE_DOCUMENTS, BSF_AUDIO_LECTURES } from '../data/bsfData';
import { BsfResourceDocument } from '../types';

export const DocumentsPage: React.FC = () => {
  const { language, setCurrentPage, setSelectedCalendarId, playLecture } = useApp();
  const [selectedFolder, setSelectedFolder] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewDoc, setPreviewDoc] = useState<BsfResourceDocument | null>(null);

  const folders = [
    { id: 'all', labelZh: '全部研经文件', labelEn: 'All Documents' },
    { id: '各班级日历', labelZh: '各班级日历 (核心)', labelEn: 'Class Calendars' },
    { id: '罗马书录音与音频', labelZh: '讲道录音与音频', labelEn: 'Lecture Audios' },
    { id: '讲道法作业与指南', labelZh: '讲道法作业与指南', labelEn: 'Homiletics Guides' },
    { id: '每周讨论问题', labelZh: '每周讨论问题集', labelEn: 'Discussion Questions' },
    { id: '每周讲义与经文注释', labelZh: '经文讲义与注释', labelEn: 'Study Notes & Exegesis' },
    { id: '同工与小组长资料', labelZh: '同工与组长手册', labelEn: 'Leader Handbooks' }
  ];

  const filteredDocs = BSF_RESOURCE_DOCUMENTS.filter(doc => {
    if (selectedFolder !== 'all' && doc.folder !== selectedFolder) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      doc.titleZh.toLowerCase().includes(q) ||
      doc.titleEn.toLowerCase().includes(q) ||
      doc.fileName.toLowerCase().includes(q) ||
      doc.folder.toLowerCase().includes(q)
    );
  });

  const handleOpenCalendar = (fileName: string) => {
    if (fileName.includes('062-MEN-Tue')) setSelectedCalendarId('062-MEN-Tue');
    else if (fileName.includes('062-WOM-Wed')) setSelectedCalendarId('062-WOM-Wed');
    else if (fileName.includes('062-YA-Thu')) setSelectedCalendarId('062-YA-Thu');
    else if (fileName.includes('062-BI-Sat')) setSelectedCalendarId('062-BI-Sat');
    else if (fileName.includes('062-OL-Online')) setSelectedCalendarId('062-OL-Online');
    setCurrentPage('calendar');
  };

  const handlePlayAudio = (fileName: string) => {
    const lecture = BSF_AUDIO_LECTURES.find(l => l.fileName === fileName);
    if (lecture) {
      playLecture(lecture);
    }
    setCurrentPage('audio');
  };

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="border-b border-[#e7e5e4] pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#881337] font-semibold uppercase tracking-wider mb-1">
              <FolderDown className="w-3.5 h-3.5" />
              <span>BSF 2026-2027 • Central Digital Study Archive</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c1917]">
              {language === 'zh' ? '官方研经资料库与讲义总汇' : 'Official Central Study Resource Archive'}
            </h2>
            <p className="text-sm text-[#78716c] mt-1 max-w-3xl">
              {language === 'zh'
                ? '集中整合呈现全学年官方学习资料，包含各班级日历、逐周音频讲义、释经注释、每周讨论问题及同工指南。所有文件支持在网页端直接预览与研读。'
                : 'Centralized repository of all official study documents: class calendars, lecture audios, exegesis notes, and leader handbooks. Fully accessible directly within the platform.'}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded bg-[#f4f2ea] text-[#78350f] border border-[#e7e5e4]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{language === 'zh' ? '资源库全量在线可用' : 'Library Fully Synced & Available'}</span>
          </div>
        </div>
      </div>

      {/* Category Folders Filter */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 border-b border-[#e7e5e4]">
        {folders.map(f => (
          <button
            key={f.id}
            onClick={() => setSelectedFolder(f.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-t-md transition-all whitespace-nowrap border-b-2 -mb-px ${
              selectedFolder === f.id
                ? 'border-[#881337] text-[#881337] font-bold bg-white'
                : 'border-transparent text-[#78716c] hover:text-[#1c1917]'
            }`}
          >
            {language === 'zh' ? f.labelZh : f.labelEn}
          </button>
        ))}
      </div>

      {/* Search and Table Statistics */}
      <div className="bg-white border border-[#e7e5e4] p-3 sm:p-4 rounded-lg shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-[#57534e]">
          <Folder className="w-4 h-4 text-[#881337]" />
          <span>
            {language === 'zh'
              ? `共检索到 ${filteredDocs.length} 个资料文件`
              : `Showing ${filteredDocs.length} documents`}
          </span>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-[#a8a29e] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={language === 'zh' ? '搜索资料名称、分类或文件名...' : 'Search document title or file...'}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#f5f5f4] border border-[#d6d3d1] focus:border-[#881337] focus:bg-white rounded outline-none transition-all"
          />
        </div>
      </div>

      {/* Documents Table */}
      <div className="bg-white border border-[#e7e5e4] rounded-lg shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f5f5f4] text-[#78716c] border-b border-[#e7e5e4]">
              <tr>
                <th className="py-2.5 px-4 font-semibold">{language === 'zh' ? '资料标题 / 文件名' : 'Document / File'}</th>
                <th className="py-2.5 px-4 font-semibold">{language === 'zh' ? '所属分类' : 'Category'}</th>
                <th className="py-2.5 px-4 font-semibold">{language === 'zh' ? '文件大小' : 'Size'}</th>
                <th className="py-2.5 px-4 font-semibold">{language === 'zh' ? '更新日期' : 'Updated'}</th>
                <th className="py-2.5 px-4 font-semibold text-right">{language === 'zh' ? '操作' : 'Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f5f5f4]">
              {filteredDocs.map(doc => {
                const isAudio = doc.fileType === 'audio';
                const isCalendar = doc.folder === '各班级日历';

                return (
                  <tr
                    key={doc.id}
                    id={`doc-row-${doc.id}`}
                    className="hover:bg-[#faf9f5] transition-colors group"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded bg-[#f5f5f4] group-hover:bg-[#fdf2f4] text-[#881337] flex items-center justify-center shrink-0 transition-colors">
                          {isAudio ? (
                            <FileAudio className="w-4 h-4" />
                          ) : isCalendar ? (
                            <Calendar className="w-4 h-4" />
                          ) : (
                            <FileText className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-sm text-[#1c1917] group-hover:text-[#881337] transition-colors">
                              {language === 'zh' ? doc.titleZh : doc.titleEn}
                            </span>
                            {doc.isPinned && (
                              <span className="px-1.5 py-0.2 bg-[#fdf2f4] text-[#881337] text-[10px] font-bold rounded">
                                {language === 'zh' ? '置顶' : 'Pinned'}
                              </span>
                            )}
                          </div>
                          <div className="font-mono text-[11px] text-[#78716c] mt-0.5">
                            {doc.fileName}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-[#f5f5f4] text-[#57534e] text-[11px] font-medium border border-[#e7e5e4]">
                        {doc.folder}
                      </span>
                    </td>

                    <td className="py-3 px-4 font-mono text-[#78716c]">
                      {doc.size}
                    </td>

                    <td className="py-3 px-4 font-mono text-[#78716c]">
                      {doc.updatedAt}
                    </td>

                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {isCalendar && (
                          <button
                            onClick={() => handleOpenCalendar(doc.fileName)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-[#881337] bg-[#fdf2f4] hover:bg-[#881337] hover:text-white rounded transition-colors"
                          >
                            <Calendar className="w-3 h-3" />
                            <span>{language === 'zh' ? '在日历页查看' : 'View Calendar'}</span>
                          </button>
                        )}

                        {isAudio && (
                          <button
                            onClick={() => handlePlayAudio(doc.fileName)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-[#881337] bg-[#fdf2f4] hover:bg-[#881337] hover:text-white rounded transition-colors"
                          >
                            <Headphones className="w-3 h-3" />
                            <span>{language === 'zh' ? '在线播放' : 'Stream Online'}</span>
                          </button>
                        )}

                        <button
                          onClick={() => setPreviewDoc(doc)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-[#292524] bg-white border border-[#d6d3d1] hover:border-[#881337] hover:text-[#881337] rounded transition-colors"
                        >
                          <Eye className="w-3 h-3 text-[#78716c]" />
                          <span>{language === 'zh' ? '在线预览' : 'Preview'}</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* In-Browser Document Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full border border-[#e7e5e4] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-5 border-b border-[#e7e5e4] flex items-center justify-between bg-[#faf9f5]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-[#fdf2f4] text-[#881337] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78350f]">
                    {previewDoc.folder}
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#1c1917]">
                    {language === 'zh' ? previewDoc.titleZh : previewDoc.titleEn}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="p-1 rounded-md text-[#78716c] hover:text-[#1c1917] hover:bg-[#e7e5e4] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-sm">
              <div className="p-3 bg-[#f5f5f4] rounded-lg space-y-1 font-mono text-xs">
                <div><strong>{language === 'zh' ? '系统文件名：' : 'File Name: '}</strong>{previewDoc.fileName}</div>
                <div><strong>{language === 'zh' ? '存储分类：' : 'Category: '}</strong>{previewDoc.folder}</div>
                <div><strong>{language === 'zh' ? '文件容量：' : 'Size: '}</strong>{previewDoc.size}</div>
                <div><strong>{language === 'zh' ? '更新日期：' : 'Updated: '}</strong>{previewDoc.updatedAt}</div>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif font-bold text-[#1c1917] text-base">
                  {language === 'zh' ? '资料说明与内容摘要' : 'Document Summary & Context'}
                </h4>
                <p className="text-[#57534e] text-xs leading-relaxed">
                  {language === 'zh'
                    ? `本文件属于BSF 2026-2027学年罗马书研读官方文库，专供注册学员与同工研讨使用。严格遵循圣经以经解经、逐章逐节原则，内容经过严谨神学督导审核。`
                    : `Official study resource for the BSF 2026-2027 Romans study curriculum. Prepared for registered learners and leaders.`}
                </p>
              </div>

              {previewDoc.folder === '各班级日历' && (
                <div className="p-4 rounded-lg bg-[#faf8f5] border border-[#e7e5e4] space-y-2">
                  <div className="text-xs font-bold text-[#881337]">
                    {language === 'zh' ? '各班级专属日程' : 'Class Specific Syllabus'}
                  </div>
                  <p className="text-xs text-[#57534e]">
                    {language === 'zh'
                      ? '本文件内含全学年开学日、每周课程进度、讲道法作业截止日及组长预备会时间。请点击下方按钮直接跳转至交互式日历查看对应班级。'
                      : 'Contains the complete syllabus and schedule. Click below to view the interactive calendar.'}
                  </p>
                  <button
                    onClick={() => {
                      handleOpenCalendar(previewDoc.fileName);
                      setPreviewDoc(null);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#881337] text-white hover:bg-[#700f2b]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{language === 'zh' ? '在日历页中打开该班级' : 'Open in Calendar View'}</span>
                  </button>
                </div>
              )}

              {previewDoc.fileType === 'audio' && (
                <div className="p-4 rounded-lg bg-[#faf8f5] border border-[#e7e5e4] space-y-2">
                  <div className="text-xs font-bold text-[#881337]">
                    {language === 'zh' ? '讲道录音在线收听' : 'Online Audio Streaming'}
                  </div>
                  <p className="text-xs text-[#57534e]">
                    {language === 'zh'
                      ? '支持在网页控制台中直接播放，可调节语速（0.75x~1.5x）、快进快退，并在后台持续计时记录研读时长。'
                      : 'Stream directly in the in-browser player with playback controls and timer tracking.'}
                  </p>
                  <button
                    onClick={() => {
                      handlePlayAudio(previewDoc.fileName);
                      setPreviewDoc(null);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#881337] text-white hover:bg-[#700f2b]"
                  >
                    <Headphones className="w-3.5 h-3.5" />
                    <span>{language === 'zh' ? '进入播放控制台' : 'Open Streaming Console'}</span>
                  </button>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-[#e7e5e4] bg-[#faf9f5] flex justify-end gap-2">
              <button
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2 text-xs font-medium text-[#57534e] hover:bg-[#e7e5e4] rounded transition-colors"
              >
                {language === 'zh' ? '关闭预览' : 'Close Preview'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
