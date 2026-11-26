import React, { useState } from 'react';
import { Sparkles, MessageSquare, Send, Bot, User, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface GeminiChatSectionProps {
  onOpenFullChat: () => void;
}

export const GeminiChatSection: React.FC<GeminiChatSectionProps> = ({ onOpenFullChat }) => {
  const [quickQuestion, setQuickQuestion] = useState('');

  const sampleQuestions = [
    {
      q: 'Which package includes 4K drone cinematography?',
      hint: 'Gold & Royal Platinum',
    },
    {
      q: 'How does advance booking with JazzCash work?',
      hint: '20% token deposit to 03083947436',
    },
    {
      q: 'Do you cover weddings in Shahdadpur & Sanghar?',
      hint: 'Full Sindh coverage',
    },
    {
      q: 'سندھی ۾ شادي پيڪيجز جا اگهه ڇا آهن؟',
      hint: 'Sindhi language support',
    },
  ];

  return (
    <section id="ai-concierge" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-neutral-950 via-[#0d0d0d] to-black">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/70 border border-amber-400/30 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          {/* Decorative ambient radial glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>AI Wedding & Event Concierge</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-white leading-tight">
                Plan Your Big Day with Our{' '}
                <span className="gold-gradient-text">Gemini AI Assistant</span>
              </h2>

              <p className="text-sm text-neutral-300 leading-relaxed">
                Have questions about 2026 dates, shot lists, drone permissions, albums, or EasyPaisa/JazzCash advance booking? Our AI assistant represents Suresh Kumar's studio and provides instant tailored guidance in English, Urdu, and Sindhi.
              </p>

              {/* Sample Prompts */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Popular Client Questions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sampleQuestions.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={onOpenFullChat}
                      className="p-3 text-left rounded-xl bg-black/60 border border-neutral-800 hover:border-amber-400/50 transition-colors group flex items-start justify-between gap-2"
                    >
                      <div>
                        <p className="text-xs font-medium text-neutral-200 group-hover:text-amber-300">
                          "{item.q}"
                        </p>
                        <p className="text-[10px] text-amber-400/80 mt-1">{item.hint}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 shrink-0 mt-0.5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Mockup Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#141414] border border-amber-400/40 rounded-2xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-neutral-800">
                  <div className="w-9 h-9 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-cinzel font-bold text-white text-sm">
                      SK Production Assistant
                    </h4>
                    <span className="text-[10px] text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                      Active & Ready
                    </span>
                  </div>
                </div>

                {/* Simulated message thread snippet */}
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300">
                    <p className="font-semibold text-amber-300 mb-1">
                      Mubarakbaad! Welcome to SK Production.
                    </p>
                    <p>
                      We're taking advance bookings for the 2026 wedding season. How can we make your celebrations unforgettable?
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-400 text-black font-medium ml-4 text-right">
                    Can we customize a package with 4K Drone and Mehndi coverage?
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300">
                    Yes! Suresh Kumar offers customized 2-day and 3-day coverage including 4K Drone aerial perspectives and custom albums.
                  </div>
                </div>

                {/* Action Launch */}
                <button
                  onClick={onOpenFullChat}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase bg-[#ffcc00] text-black hover:bg-amber-300 transition-all duration-300 shadow-lg shadow-amber-500/20"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Start Full Multi-Turn Chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
