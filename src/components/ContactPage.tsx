import React, { useState } from 'react';
import {
  Users,
  Mail,
  Phone,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BSF_CONTACTS } from '../data/bsfData';

export const ContactPage: React.FC = () => {
  const { language, openContactModal } = useApp();
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryTarget, setInquiryTarget] = useState(BSF_CONTACTS[0].id);
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setInquiryMessage('');
    }, 4000);
  };

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-[#e7e5e4] pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#881337] font-semibold uppercase tracking-wider mb-1">
              <Users className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? 'BSF 同工事奉团队' : 'BSF Leadership & Staff Team'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c1917]">
              {language === 'zh' ? '班级同工联络窗口与专职团队' : 'Leadership & Staff Contact Window'}
            </h2>
            <p className="text-sm text-[#78716c] mt-1 max-w-3xl">
              {language === 'zh'
                ? 'BSF 2026-2027学年罗马书研读专属同工团队。包含行政主管、数字资源技术负责人、小组长协调人与讲道带领人，竭诚为您提供研经支持与关怀。'
                : 'Dedicated leadership team for the 2026-2027 Romans study year. Meet our administrators, digital coordinators, and teaching leaders.'}
            </p>
          </div>

          <button
            onClick={() => openContactModal()}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded bg-[#881337] hover:bg-[#700f2b] text-white transition-all shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{language === 'zh' ? '打开快捷联络浮窗' : 'Open Contact Window'}</span>
          </button>
        </div>
      </div>

      {/* 4 Core Contacts Grid (Larry Lu, Devin Wang, Jonathan Chao, Paul Huang) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {BSF_CONTACTS.map(contact => (
          <div
            key={contact.id}
            id={`contact-card-${contact.id}`}
            className="bg-white border border-[#e7e5e4] rounded-lg p-5 sm:p-6 shadow-xs hover:border-[#d6d3d1] transition-all relative overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-[#fdf2f4] text-[#881337] border border-[#f43f5e]/20 mb-1">
                  {language === 'zh' ? contact.tagZh : contact.tagEn}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#1c1917]">
                  {language === 'zh' ? contact.nameZh : contact.nameEn}
                </h3>
                <p className="text-xs font-semibold text-[#881337]">
                  {language === 'zh' ? contact.titleZh : contact.titleEn}
                </p>
              </div>

              <button
                onClick={() => openContactModal(contact)}
                className="shrink-0 text-xs px-2.5 py-1 rounded bg-[#f5f5f4] text-[#57534e] hover:bg-[#881337] hover:text-white transition-colors"
              >
                {language === 'zh' ? '专线咨询' : 'Message'}
              </button>
            </div>

            <p className="text-xs text-[#57534e] leading-relaxed mb-4">
              {language === 'zh' ? contact.bioZh : contact.bioEn}
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2 pt-3 border-t border-[#f5f5f4] text-xs">
              <div className="flex items-center gap-2 text-[#44403c]">
                <Mail className="w-3.5 h-3.5 text-[#881337] shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:underline font-mono text-[#881337] font-medium"
                >
                  {contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-[#44403c]">
                <Phone className="w-3.5 h-3.5 text-[#78716c] shrink-0" />
                <span className="font-mono">{contact.phone}</span>
              </div>

              <div className="flex items-start gap-2 text-[#78716c]">
                <Clock className="w-3.5 h-3.5 text-[#78716c] shrink-0 mt-0.5" />
                <span>{language === 'zh' ? contact.officeHoursZh : contact.officeHoursEn}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Online Contact / Inquiry Window Box */}
      <div className="bg-white border border-[#e7e5e4] rounded-lg p-6 shadow-xs">
        <div className="border-b border-[#f5f5f4] pb-3 mb-4">
          <h3 className="font-serif font-bold text-lg text-[#1c1917] flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#881337]" />
            <span>{language === 'zh' ? '在线联络信箱 (直接致函同工)' : 'Online Contact Inquiry Form'}</span>
          </h3>
          <p className="text-xs text-[#78716c] mt-0.5">
            {language === 'zh'
              ? '如需关于班级分班、Google Drive资料权限、讲道法作业批阅或属灵代祷，请填写下表。'
              : 'Submit questions regarding class placements, Drive permissions, homiletics exegesis, or prayer requests.'}
          </p>
        </div>

        {isSent ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-800 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>
              {language === 'zh'
                ? '您的信息已成功发送至负责同工邮箱！我们将在24小时内与您联络。'
                : 'Your message has been sent to the designated leader! We will respond within 24 hours.'}
            </span>
          </div>
        ) : (
          <form onSubmit={handleSendInquiry} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="font-bold text-[#1c1917] block mb-1">
                  {language === 'zh' ? '您的姓名' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  value={inquiryName}
                  onChange={e => setInquiryName(e.target.value)}
                  placeholder={language === 'zh' ? '例如：王弟兄' : 'e.g. Brother Wang'}
                  className="w-full p-2.5 rounded border border-[#d6d3d1] focus:border-[#881337] bg-[#faf9f5]"
                />
              </div>

              <div>
                <label className="font-bold text-[#1c1917] block mb-1">
                  {language === 'zh' ? '联系邮箱' : 'Email Address'}
                </label>
                <input
                  type="email"
                  required
                  value={inquiryEmail}
                  onChange={e => setInquiryEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full p-2.5 rounded border border-[#d6d3d1] focus:border-[#881337] bg-[#faf9f5]"
                />
              </div>

              <div>
                <label className="font-bold text-[#1c1917] block mb-1">
                  {language === 'zh' ? '致信同工' : 'Direct To'}
                </label>
                <select
                  value={inquiryTarget}
                  onChange={e => setInquiryTarget(e.target.value)}
                  className="w-full p-2.5 rounded border border-[#d6d3d1] focus:border-[#881337] bg-[#faf9f5]"
                >
                  {BSF_CONTACTS.map(c => (
                    <option key={c.id} value={c.id}>
                      {language === 'zh' ? `${c.nameZh} (${c.titleZh})` : `${c.nameEn} (${c.titleEn})`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="font-bold text-[#1c1917] block mb-1">
                {language === 'zh' ? '留言或提问内容' : 'Message or Study Inquiry'}
              </label>
              <textarea
                rows={3}
                required
                value={inquiryMessage}
                onChange={e => setInquiryMessage(e.target.value)}
                placeholder={language === 'zh' ? '请输入您的问题，例如：关于罗马书音频下载方式、各班级日历查询、或讲道法作业辅导...' : 'Please enter your inquiry...'}
                className="w-full p-2.5 rounded border border-[#d6d3d1] focus:border-[#881337] bg-[#faf9f5]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded bg-[#881337] hover:bg-[#700f2b] text-white font-semibold transition-colors shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '发送咨询' : 'Send Message'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
