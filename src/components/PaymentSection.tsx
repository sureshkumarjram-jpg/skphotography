import React, { useState } from 'react';
import { CreditCard, Smartphone, CheckCircle, Copy, Check, MessageCircle, Shield, Award } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const PaymentSection: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyNumber = (number: string, label: string) => {
    navigator.clipboard.writeText(number);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section id="payments" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5" />
            Seamless Transactions
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white">
            EASYPAISA & <span className="gold-gradient-text">JAZZCASH</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Convenient and instant mobile account payments for advance date booking across Pakistan.
          </p>
        </div>

        {/* Featured Payment Box (from user brief) */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#ffcc00] via-[#f7c000] to-[#e5a900] text-black rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/15 pb-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-black text-[#ffcc00] text-xs font-extrabold uppercase tracking-wider inline-block mb-2">
                  Official Studio Accounts
                </span>
                <h3 className="text-3xl sm:text-4xl font-cinzel font-extrabold tracking-tight">
                  BOOKING OPEN 2026
                </h3>
                <p className="text-sm font-semibold opacity-90 mt-1">
                  Advance Booking Started for Wedding Season
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* EasyPaisa Pill */}
                <div className="bg-white/95 px-4 py-2 rounded-xl shadow-md flex items-center gap-2 border border-black/10">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="font-black text-sm text-green-700 tracking-tight">EasyPaisa</span>
                </div>
                {/* JazzCash Pill */}
                <div className="bg-white/95 px-4 py-2 rounded-xl shadow-md flex items-center gap-2 border border-black/10">
                  <div className="w-3 h-3 rounded-full bg-red-600" />
                  <span className="font-black text-sm text-red-600 tracking-tight">JazzCash</span>
                </div>
              </div>
            </div>

            {/* Account Details Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* EasyPaisa Details */}
              <div className="bg-black/90 text-white p-5 rounded-2xl border border-black flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-green-400 flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4" />
                      EasyPaisa Account
                    </span>
                    <span className="text-[11px] bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400">Account Title:</p>
                  <p className="text-base font-bold text-white mb-2">Suresh Kumar</p>
                  <p className="text-xs text-neutral-400">Mobile Account Number:</p>
                  <p className="text-xl font-mono font-bold text-amber-400">0308-3947436</p>
                </div>

                <div className="pt-4 mt-2 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">03083947436</span>
                  <button
                    onClick={() => copyNumber('03083947436', 'easypaisa')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
                  >
                    {copied === 'easypaisa' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* JazzCash Details */}
              <div className="bg-black/90 text-white p-5 rounded-2xl border border-black flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4" />
                      JazzCash Account
                    </span>
                    <span className="text-[11px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400">Account Title:</p>
                  <p className="text-base font-bold text-white mb-2">Suresh Kumar</p>
                  <p className="text-xs text-neutral-400">Mobile Account Number:</p>
                  <p className="text-xl font-mono font-bold text-amber-400">0308-3947436</p>
                </div>

                <div className="pt-4 mt-2 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">03083947436</span>
                  <button
                    onClick={() => copyNumber('03083947436', 'jazzcash')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
                  >
                    {copied === 'jazzcash' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-black/15">
              <div className="flex items-center gap-2 text-xs font-medium text-black">
                <Shield className="w-4 h-4 shrink-0" />
                <span>Instant digital confirmation receipt provided via WhatsApp after deposit</span>
              </div>

              <a
                href={`${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi Suresh Bhai, I would like to make an advance deposit via EasyPaisa/JazzCash to lock our 2026 wedding date.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-extrabold text-sm bg-black text-[#ffcc00] hover:bg-neutral-900 transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-[#ffcc00]" />
                <span>SEND DEPOSIT CONFIRMATION ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Step Advance Process */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
            <span className="w-8 h-8 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs font-bold">
              01
            </span>
            <h4 className="text-base font-bold text-white">Select Event & Date</h4>
            <p className="text-xs text-neutral-400">
              Check availability with Suresh Kumar on WhatsApp or using the 2026 calendar.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
            <span className="w-8 h-8 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs font-bold">
              02
            </span>
            <h4 className="text-base font-bold text-white">Transfer Advance</h4>
            <p className="text-xs text-neutral-400">
              Send a 20% token deposit through EasyPaisa or JazzCash to 0308-3947436.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
            <span className="w-8 h-8 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs font-bold">
              03
            </span>
            <h4 className="text-base font-bold text-white">Confirmed Booking</h4>
            <p className="text-xs text-neutral-400">
              Receive your confirmed date contract voucher and schedule pre-shoot planning!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
