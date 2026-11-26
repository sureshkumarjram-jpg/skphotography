import React from 'react';
import { Star, Quote, Sparkles, MapPin, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950/90">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Client Love & Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white">
            WORDS FROM <span className="gold-gradient-text">OUR COUPLES</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal">
            Real feedback from newlyweds across Tando Adam, Shahdadpur, Sanghar, and Hyderabad.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#0f0f0f] border border-neutral-800 hover:border-amber-400/40 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 relative group"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic font-serif-luxury">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-cinzel font-bold text-white text-base">
                    {t.couple}
                  </h4>
                  <p className="text-xs text-amber-400/90 font-medium">
                    {t.event}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
