import React from 'react';
import { Camera, Heart, MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-neutral-900 py-14 px-4 sm:px-6 lg:px-8 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-400">
                <Camera className="w-5 h-5" />
              </div>
              <span className="font-cinzel font-bold text-lg text-white">
                SK PRODUCTION TANDO ADAM
              </span>
            </div>
            <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
              We Make Your Special Moments Unforgettable. Professional wedding movies, 4K cinematic highlights, portraiture, engagement, mehndi and birthday coverage across Sindh.
            </p>
            <p className="text-neutral-400 text-xs">
              <b className="text-neutral-200">Owner & Director:</b> Suresh Kumar •{' '}
              <b className="text-neutral-200">Address:</b> Chhatri Chowk, Tando Adam, Sindh
            </p>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <p className="font-bold text-xs uppercase tracking-wider text-neutral-200">
              Quick Navigation
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors">
                  Cinematic Portfolio
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-400 transition-colors">
                  2026 Packages & Pricing
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Wedding Budget Calculator
                </a>
              </li>
              <li>
                <a href="#payments" className="hover:text-amber-400 transition-colors">
                  EasyPaisa & JazzCash
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <p className="font-bold text-xs uppercase tracking-wider text-neutral-200">
              Bookings & Inquiries
            </p>
            <p className="text-neutral-300">
              Call:{' '}
              <a href={`tel:${STUDIO_INFO.phone}`} className="text-amber-400 font-bold hover:underline">
                {STUDIO_INFO.phone}
              </a>
            </p>
            <p className="text-neutral-300">
              WhatsApp:{' '}
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 font-bold hover:underline"
              >
                0308-3947436
              </a>
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-green-950 text-green-300 border border-green-800 text-[10px] font-bold">
                EasyPaisa
              </span>
              <span className="px-2.5 py-1 rounded bg-red-950 text-red-300 border border-red-800 text-[10px] font-bold">
                JazzCash
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line matching original brief */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-neutral-400 text-xs">
            © 2026 SK Production Tando Adam - All Rights Reserved
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
