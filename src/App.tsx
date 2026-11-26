/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { PackagesSection } from './components/PackagesSection';
import { PaymentSection } from './components/PaymentSection';
import { GeminiChatSection } from './components/GeminiChatSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GeminiChatModal } from './components/GeminiChatModal';
import { BookingCalendar } from './components/BookingCalendar';
import { MessageCircle, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from './data/studioData';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* Navigation Bar */}
      <Navbar
        onOpenChat={() => setIsChatOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          onOpenChat={() => setIsChatOpen(true)}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 4 Core Services */}
        <ServicesSection />

        {/* Interactive Portfolio Gallery */}
        <PortfolioGallery />

        {/* 2026 Packages & Custom Price Estimator */}
        <PackagesSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
        />

        {/* EasyPaisa & JazzCash Advance Payment Box */}
        <PaymentSection />

        {/* Gemini AI Wedding Concierge In-Page Feature */}
        <GeminiChatSection onOpenFullChat={() => setIsChatOpen(true)} />

        {/* Couple Testimonials */}
        <Testimonials />

        {/* Contact Us: Suresh Kumar, Mobile, Address, WhatsApp */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <GeminiChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      <BookingCalendar
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Floating AI Concierge Button */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-neutral-900 border border-amber-400/60 text-amber-300 hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-xl shadow-amber-500/20 active:scale-95"
          aria-label="Open AI Concierge"
        >
          <Sparkles className="w-4 h-4 text-amber-400 group-hover:text-black animate-pulse" />
          <span className="text-xs font-bold tracking-wide">AI Concierge</span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
        </button>

        {/* Floating WhatsApp Button */}
        <a
          href={STUDIO_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all duration-300 shadow-xl shadow-green-500/30 active:scale-95 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold tracking-wide hidden sm:inline">WhatsApp 0308-3947436</span>
        </a>
      </div>
    </div>
  );
}
