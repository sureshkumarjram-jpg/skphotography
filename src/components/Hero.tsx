import React from 'react';
import { MessageCircle, Sparkles, Calendar, CheckCircle2, Film, ShieldCheck, CreditCard, ChevronDown } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface HeroProps {
  onOpenChat: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat, onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with cinematic visual layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Cinematic Wedding Photography in Sindh"
          className="w-full h-full object-cover object-center brightness-[0.28] contrast-[1.15] scale-105 transform animate-pulse duration-[10000ms]"
        />
        {/* Radial ambient lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/60 to-black/80" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* 2026 Season Live Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-amber-400/40 backdrop-blur-md shadow-lg shadow-amber-500/10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold text-amber-300 tracking-wide uppercase">
            Booking Open 2026 • Advance Dates Started
          </span>
          <span className="hidden sm:inline-block text-neutral-500">|</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs text-neutral-300">
            <CreditCard className="w-3.5 h-3.5 text-amber-400" />
            EasyPaisa / JazzCash Available
          </span>
        </div>

        {/* Main Royal Titles */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-black tracking-tight text-white uppercase drop-shadow-2xl">
            <span className="block text-neutral-300 text-lg sm:text-2xl font-serif-luxury tracking-widest lowercase italic mb-2">
              suresh kumar presents
            </span>
            <span className="gold-gradient-text block">SK PRODUCTION</span>
            <span className="text-2xl sm:text-4xl md:text-5xl font-cinzel font-semibold tracking-wider text-neutral-200 block mt-1">
              Tando Adam
            </span>
          </h1>

          <p className="text-lg sm:text-2xl font-medium text-amber-200/90 font-serif-luxury italic max-w-2xl mx-auto drop-shadow-md">
            "We Make Your Special Moments Unforgettable"
          </p>

          <p className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400 max-w-xl mx-auto font-medium">
            Wedding <span className="text-amber-400">•</span> Cinematic Movie{' '}
            <span className="text-amber-400">•</span> Engagement{' '}
            <span className="text-amber-400">•</span> Mehndi{' '}
            <span className="text-amber-400">•</span> Birthday & Events
          </p>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Main WhatsApp CTA */}
          <a
            href={STUDIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base bg-[#ffcc00] text-black hover:bg-amber-300 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-xl shadow-amber-500/25 group"
          >
            <MessageCircle className="w-5 h-5 fill-black group-hover:scale-110 transition-transform" />
            <span>BOOK ON WHATSAPP</span>
          </a>

          {/* AI Concierge Chat CTA */}
          <button
            onClick={onOpenChat}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm bg-neutral-900/90 border border-amber-400/40 text-amber-300 hover:bg-amber-400 hover:text-black transition-all duration-300 backdrop-blur-md shadow-lg group"
          >
            <Sparkles className="w-4 h-4 text-amber-400 group-hover:text-black group-hover:rotate-12 transition-all" />
            <span>AI Wedding Concierge</span>
          </button>

          {/* Date Picker Button */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-sm text-neutral-300 hover:text-white bg-black/40 border border-neutral-800 hover:border-neutral-600 transition-colors"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Check 2026 Availability</span>
          </button>
        </div>

        {/* Trust & Studio Proof Badges */}
        <div className="pt-8 border-t border-neutral-800/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
            <Film className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Cinematic 4K</p>
              <p className="text-[11px] text-neutral-400">Drone & Gimbal Filming</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
            <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">500+ Weddings</p>
              <p className="text-[11px] text-neutral-400">Filmed Across Sindh</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
            <CreditCard className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">EasyPaisa / JazzCash</p>
              <p className="text-[11px] text-neutral-400">Instant Advance Deposit</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
            <CheckCircle2 className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Chhatri Chowk</p>
              <p className="text-[11px] text-neutral-400">Studio in Tando Adam, Sindh</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-4 flex justify-center">
          <a
            href="#services"
            className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-amber-400 transition-colors"
          >
            <span>Explore Services & Packages</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
