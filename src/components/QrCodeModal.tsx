import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { getPublicMobileUrl } from '../utils/urlHelper';
import {
  Smartphone,
  Copy,
  Check,
  X,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToMobileView: () => void;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({
  isOpen,
  onClose,
  onSwitchToMobileView
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Use the public shared URL that never asks for Google account login
  const mobileUrl = getPublicMobileUrl();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(mobileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#e7e5e4] text-[#1c1917] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#78716c] hover:text-[#1c1917] hover:bg-[#faf8f5] transition-colors"
          aria-label="关闭窗口"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-9 h-9 rounded-xl bg-[#881337]/10 flex items-center justify-center text-[#881337] shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-lg font-bold font-serif text-[#1c1917]">
                手机扫码直达
              </h3>
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                <ShieldCheck className="w-3 h-3" />
                免登录
              </span>
            </div>
            <p className="text-xs text-[#78716c]">
              微信或手机相机扫码即开，无需任何账号或密码
            </p>
          </div>
        </div>

        {/* QR Code Container */}
        <div className="my-4 flex flex-col items-center justify-center">
          <div className="p-4 bg-white rounded-xl border-2 border-[#881337]/30 shadow-md flex items-center justify-center">
            <QRCodeSVG
              value={mobileUrl}
              size={190}
              level="M"
              bgColor="#ffffff"
              fgColor="#1c1917"
              includeMargin={false}
            />
          </div>

          <p className="mt-2.5 text-xs text-[#57534e] text-center font-medium">
            微信扫一扫 或 手机相机扫描，直接打开手机极简版
          </p>
          <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mt-1">
            ✓ 公开共享链接 • 不要求登录 Google 账号
          </span>
        </div>

        {/* Features Summary */}
        <div className="p-3 bg-[#faf8f5] rounded-xl border border-[#e7e5e4] text-xs text-[#57534e] space-y-1.5">
          <div className="flex items-center gap-1.5 font-semibold text-[#881337]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>手机极简模式三大内容（越简单越好）：</span>
          </div>
          <div className="grid grid-cols-3 gap-1 pt-0.5 text-center font-medium text-[11px] text-[#44403c]">
            <div className="bg-white p-1.5 rounded border border-[#e7e5e4]">
              ✨ 本课背诵金句
            </div>
            <div className="bg-white p-1.5 rounded border border-[#e7e5e4]">
              🎧 MP3录音播放
            </div>
            <div className="bg-white p-1.5 rounded border border-[#e7e5e4]">
              📖 相关经文阅读
            </div>
          </div>
        </div>

        {/* Link Actions */}
        <div className="space-y-2 pt-3 mt-3 border-t border-[#f5f5f4]">
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={mobileUrl}
              className="flex-1 text-xs bg-[#faf8f5] border border-[#d6d3d1] rounded-lg px-2.5 py-1.5 text-[#57534e] font-mono select-all focus:outline-none"
            />
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#881337] text-white hover:bg-[#6e0f2c] text-xs font-semibold transition-colors shrink-0 shadow-2xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>已复制</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>复制链接</span>
                </>
              )}
            </button>
          </div>

          {/* Quick toggle in current browser */}
          <button
            onClick={() => {
              onClose();
              onSwitchToMobileView();
            }}
            className="w-full py-2 text-center text-xs font-semibold text-[#881337] bg-[#881337]/5 hover:bg-[#881337]/10 rounded-lg border border-[#881337]/20 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>在当前窗口直接切换为【手机极简视图】</span>
          </button>
        </div>
      </div>
    </div>
  );
};
