import React, { useState } from 'react';
import {
  X,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Users,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BSF_CONTACTS } from '../data/bsfData';

export const ContactModal: React.FC = () => {
  const {
    language,
    isContactModalOpen,
    closeContactModal,
    selectedContactLeader
  } = useApp();

  const [activeLeaderId, setActiveLeaderId] = useState<string>(
    selectedContactLeader ? selectedContactLeader.id : BSF_CONTACTS[1].id
  );
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isContactModalOpen) return null;

  const currentLeader =
    BSF_CONTACTS.find(c => c.id === activeLeaderId) || BSF_CONTACTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setMessage('');
      closeContactModal();
    }, 2500);
  };

  return (
    <div
      id="contact-window-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity"
      onClick={e => {
        if (e.target === e.currentTarget) closeContactModal();
      }}
    >
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e7e5e4] animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#e7e5e4] bg-[#faf8f5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#881337]" />
            <div>
              <h3 className="font-serif font-bold text-lg text-[#1c1917]">
                {language === 'zh' ? 'BSF 同工联络窗口 (Contact Window)' : 'BSF Leadership Contact Window'}
              </h3>
              <p className="text-xs text-[#78716c]">
                {language === 'zh' ? 'Larry Lu • Devin Wang • Jonathan Wang • Paul Huang' : 'Direct contact with class administrators and teaching leaders'}
              </p>
            </div>
          </div>
          <button
            onClick={closeContactModal}
            className="p-1 rounded-md text-[#78716c] hover:text-[#1c1917] hover:bg-[#e7e5e4]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Leaders Switcher Strip */}
        <div className="p-3 bg-[#f5f5f4] border-b border-[#e7e5e4] flex flex-wrap gap-1.5">
          {BSF_CONTACTS.map(contact => {
            const isSelected = contact.id === activeLeaderId;
            return (
              <button
                key={contact.id}
                onClick={() => setActiveLeaderId(contact.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#881337] text-white shadow-xs'
                    : 'bg-white text-[#57534e] hover:bg-[#e7e5e4]'
                }`}
              >
                {language === 'zh' ? contact.nameZh.split(' (')[0] : contact.nameEn}
              </button>
            );
          })}
        </div>

        {/* Selected Leader Info Panel */}
        <div className="p-5 space-y-4">
          <div className="bg-[#faf8f5] p-4 rounded-lg border border-[#e7e5e4]">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#881337] bg-[#fdf2f4] px-2 py-0.5 rounded">
                  {language === 'zh' ? currentLeader.tagZh : currentLeader.tagEn}
                </span>
                <h4 className="text-lg font-serif font-bold text-[#1c1917] mt-1">
                  {language === 'zh' ? currentLeader.nameZh : currentLeader.nameEn}
                </h4>
                <p className="text-xs font-semibold text-[#881337]">
                  {language === 'zh' ? currentLeader.titleZh : currentLeader.titleEn}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#57534e] mt-2 leading-relaxed">
              {language === 'zh' ? currentLeader.bioZh : currentLeader.bioEn}
            </p>

            <div className="mt-3 pt-3 border-t border-[#e7e5e4] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#881337]" />
                <a href={`mailto:${currentLeader.email}`} className="font-mono text-[#881337] hover:underline">
                  {currentLeader.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#78716c]" />
                <span className="font-mono text-[#44403c]">{currentLeader.phone}</span>
              </div>
              <div className="flex items-center gap-2 col-span-full text-[#78716c]">
                <Clock className="w-3.5 h-3.5 text-[#78716c]" />
                <span>{language === 'zh' ? currentLeader.officeHoursZh : currentLeader.officeHoursEn}</span>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          {submitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>
                {language === 'zh'
                  ? `已将信息发送给 ${currentLeader.nameZh}！感谢您的垂询。`
                  : `Message sent to ${currentLeader.nameEn}! Thank you.`}
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#1c1917] block mb-1">
                    {language === 'zh' ? '您的姓名' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={e => setSenderName(e.target.value)}
                    placeholder={language === 'zh' ? '例如：王弟兄' : 'Your name'}
                    className="w-full p-2 rounded border border-[#d6d3d1] focus:border-[#881337] bg-[#faf9f5]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#1c1917] block mb-1">
                    {language === 'zh' ? '您的邮箱' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={e => setSenderEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full p-2 rounded border border-[#d6d3d1] focus:border-[#881337] bg-[#faf9f5]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-[#1c1917] block mb-1">
                  {language === 'zh' ? '留言内容' : 'Message'}
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder={language === 'zh' ? `致 ${currentLeader.nameZh} 的提问或建议...` : `Message to ${currentLeader.nameEn}...`}
                  className="w-full p-2 rounded border border-[#d6d3d1] focus:border-[#881337] bg-[#faf9f5]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={closeContactModal}
                  className="px-3 py-1.5 rounded border border-[#d6d3d1] text-[#57534e] hover:bg-[#f5f5f4]"
                >
                  {language === 'zh' ? '关闭' : 'Close'}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-[#881337] hover:bg-[#700f2b] text-white font-semibold shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === 'zh' ? '发送至该同工' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
