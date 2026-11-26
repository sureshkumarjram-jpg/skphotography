import React from 'react';
import { Camera, Film, HeartHandshake, PartyPopper, Sparkles, MessageCircle, ArrowRight, Video, Flame, Star } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'photo',
      icon: Camera,
      title: 'Professional Wedding Photography',
      badge: 'Signature Craft',
      tagline: 'Timeless bridal portraits & authentic candid moments',
      description:
        'Every gaze, smile, tear, and ritual captured with high-resolution clarity. From regal stage portraits of the bride and groom to spontaneous family emotions.',
      highlights: [
        'Bridal & Groom Solo Portraiture',
        'Traditional Stage & Family Group Photos',
        'Emotional Candid Moments & Rituals',
        'Master Retouching & Natural Skin Tones',
      ],
      gear: 'High-speed prime optics & creative lighting',
      whatsappMsg: 'Hi Suresh Bhai, I am inquiring about Professional Wedding Photography packages for our wedding.',
    },
    {
      id: 'film',
      icon: Film,
      title: 'Cinematic Wedding Movie & Film',
      badge: '4K Ultra-HD',
      tagline: 'Movie-grade storytelling with emotional background score',
      description:
        'We turn your love story into a Bollywood-caliber cinematic masterpiece. Featuring dramatic slow-motion entries, gimbal tracking, crystal-clear audio recording, and aerial drone vistas.',
      highlights: [
        '1-3 Min Viral Cinematic Teaser for Reels',
        '40-60 Min Full Master Wedding Film',
        'Drone Aerial Filming for Baraat & Venue',
        'Professional Color Grading & Cinematic Audio',
      ],
      gear: 'Cinematic cinema cameras, 3-axis gimbals & 4K drones',
      whatsappMsg: 'Hi Suresh Bhai, I want details and samples of your Cinematic Wedding Movie & Film packages.',
    },
    {
      id: 'mehndi',
      icon: HeartHandshake,
      title: 'Engagement & Mehndi Coverage',
      badge: 'Vibrant Celebrations',
      tagline: 'Colorful ceremonies, henna details & energetic dance beats',
      description:
        'From the romantic sparkle of the Ring Ceremony to the electric music of Mehndi and Mayun. We capture the vivid yellow and green hues, dance performances, and festive laughter.',
      highlights: [
        'Henna & Jewelry Macro Photography',
        'Dance Performance Multicam Video',
        'Haldi / Mayun Traditional Rituals',
        'Couple Romantic Ring Ceremony Shoot',
      ],
      gear: 'High-ISO low-light sensors for vibrant evening parties',
      whatsappMsg: 'Hi Suresh Bhai, I am looking for Engagement and Mehndi ceremony coverage for our upcoming function.',
    },
    {
      id: 'events',
      icon: PartyPopper,
      title: 'Birthday & Special Events',
      badge: 'All Celebrations',
      tagline: 'Milestones, anniversaries & corporate cultural gatherings',
      description:
        'Whether celebrating a grand 1st birthday, silver anniversary, school convocation, or corporate event in Tando Adam and across Sindh, we deliver memorable visual documentation.',
      highlights: [
        'Cake Cutting & Confetti Highlights',
        'Guest Welcomes & Candids',
        'Theme Decor & Stage Setup Shots',
        'Fast Same-Week Digital Delivery',
      ],
      gear: 'Versatile zoom kits for rapid party coverage',
      whatsappMsg: 'Hi Suresh Bhai, I want photography and video coverage for a Birthday / Event.',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            What We Do
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white">
            OUR <span className="gold-gradient-text">SERVICES</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal">
            Specialized in high-end wedding cinematography and artistic photography in Tando Adam,
            Shahdadpur, Sanghar, Hyderabad, and across Sindh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const encodedMsg = encodeURIComponent(service.whatsappMsg);
            const waUrl = `${STUDIO_INFO.whatsappUrl}?text=${encodedMsg}`;

            return (
              <div
                key={service.id}
                className="group relative bg-[#0e0e0e] border border-neutral-800 hover:border-amber-400/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-neutral-900 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold uppercase rounded-full bg-neutral-900 text-amber-300 border border-neutral-700">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-amber-400/90 italic mb-4 font-serif-luxury">
                    "{service.tagline}"
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      What's Included:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                      {service.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-neutral-800/80 flex items-center justify-between gap-4">
                  <span className="text-[11px] text-neutral-500 italic truncate">
                    Equipment: {service.gear}
                  </span>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-black bg-[#ffcc00] hover:bg-amber-300 px-4 py-2 rounded-full transition-transform active:scale-95 shrink-0 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-black" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
