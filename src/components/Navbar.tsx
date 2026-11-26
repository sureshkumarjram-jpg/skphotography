import React, { useState, useEffect } from 'react';
import { Camera, Phone, MessageCircle, Sparkles, Menu, X, CalendarCheck } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface NavbarProps {
  onOpenChat: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Packages 2026', href: '#packages' },
    { name: 'Custom Quote', href: '#calculator' },
    { name: 'Payments', href: '#payments' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-amber-400/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/95 via-black/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-400/40 transition-shadow">
              <div className="w-full h-full bg-[#0d0d0d] rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel font-bold text-lg sm:text-xl text-white tracking-wider group-hover:text-amber-400 transition-colors">
                  SK PRODUCTION
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 rounded-full">
                  Tando Adam
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 tracking-wider">
                Wedding Movie & Photography • Sindh
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* AI Assistant Button */}
            <button
              onClick={onOpenChat}
              className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-400/40 hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-sm"
              title="Ask SK Production AI Wedding Concierge"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:text-black animate-pulse" />
              <span>AI Concierge</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            </button>

            {/* Quick WhatsApp CTA */}
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#ffcc00] text-black hover:bg-amber-300 transition-transform active:scale-95 shadow-md shadow-amber-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>WhatsApp Booking</span>
            </a>

            {/* Quick Call */}
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="p-2 rounded-full border border-neutral-700 hover:border-amber-400 text-neutral-300 hover:text-amber-400 transition-colors"
              title={`Call Suresh Kumar at ${STUDIO_INFO.phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu & Quick AI Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenChat}
              className="p-2 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-400"
              aria-label="AI Concierge"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#ffcc00] text-black"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/95 border-b border-amber-400/20 backdrop-blur-xl px-4 pt-4 pb-6 mt-2 space-y-3">
          <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-amber-300">Wedding Season 2026 Open</p>
              <p className="text-[11px] text-neutral-400">EasyPaisa & JazzCash Advance Accepted</p>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="px-2.5 py-1 text-xs font-semibold bg-amber-400 text-black rounded-lg"
            >
              Book Date
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-200 hover:bg-neutral-900 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold bg-neutral-900 border border-amber-400/30 text-amber-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              Chat with AI Wedding Concierge
            </button>
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold bg-neutral-800 text-neutral-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call Suresh Kumar ({STUDIO_INFO.phone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
