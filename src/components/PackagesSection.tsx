import React, { useState } from 'react';
import { Check, Star, Sparkles, MessageCircle, ArrowRight, ShieldCheck, CreditCard, Sliders, Calculator } from 'lucide-react';
import { PACKAGES, STUDIO_INFO } from '../data/studioData';
import confetti from 'canvas-confetti';

interface PackagesSectionProps {
  onOpenBooking: () => void;
  onOpenChat: () => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenBooking, onOpenChat }) => {
  // Custom Quote Builder State
  const [eventType, setEventType] = useState<'single' | 'double' | 'three' | 'birthday'>('double');
  const [needDrone, setNeedDrone] = useState<boolean>(true);
  const [needLuxuryAlbum, setNeedLuxuryAlbum] = useState<boolean>(true);
  const [needPreWeddingShoot, setNeedPreWeddingShoot] = useState<boolean>(false);
  const [extraCinematographer, setExtraCinematographer] = useState<boolean>(false);

  // Price Calculation Logic
  const basePrices = {
    single: 35000,
    double: 75000,
    three: 125000,
    birthday: 25000,
  };

  const calculatedTotal =
    basePrices[eventType] +
    (needDrone ? 15000 : 0) +
    (needLuxuryAlbum ? 12000 : 0) +
    (needPreWeddingShoot ? 18000 : 0) +
    (extraCinematographer ? 15000 : 0);

  const getEventName = () => {
    switch (eventType) {
      case 'single':
        return '1-Day Event (Barat or Mehndi)';
      case 'double':
        return '2-Day Wedding (Barat + Walima)';
      case 'three':
        return '3-Day Complete Wedding (Mehndi + Barat + Walima)';
      case 'birthday':
        return 'Birthday / Family Celebration';
    }
  };

  const handleSendCustomQuote = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ffcc00', '#ffffff', '#e5a900'],
    });

    const addOnsList: string[] = [];
    if (needDrone) addOnsList.push('4K Drone Aerial Pilot');
    if (needLuxuryAlbum) addOnsList.push('Luxury Velvet Layflat Album');
    if (needPreWeddingShoot) addOnsList.push('Pre-wedding Shoot');
    if (extraCinematographer) addOnsList.push('2nd Cinematographer');

    const msg = `Assalam-o-Alaikum Suresh Kumar Bhai,
I used the 2026 Package Builder on your website for SK Production Tando Adam:
- Event: ${getEventName()}
- Add-ons: ${addOnsList.length > 0 ? addOnsList.join(', ') : 'None'}
- Estimated Estimate: PKR ${calculatedTotal.toLocaleString()}
Please confirm date availability and advance booking details via EasyPaisa / JazzCash.`;

    const url = `${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Season 2026 Booking Rates
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white">
            PACKAGES & <span className="gold-gradient-text">PRICING</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Transparent investment for priceless memories. Easy advance reservations via EasyPaisa or JazzCash.
          </p>
        </div>

        {/* 2026 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            const waMessage = `Hi Suresh Bhai, I would like to book the "${pkg.name}" (${pkg.price}) for our upcoming 2026 wedding with SK Production Tando Adam.`;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#121212] border-2 border-amber-400 shadow-2xl shadow-amber-500/20 transform lg:-translate-y-2'
                    : 'bg-[#0d0d0d] border border-neutral-800 hover:border-amber-400/40 hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-bold uppercase rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 text-black shadow-md">
                      ★ {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-cinzel font-bold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-amber-300/90 font-medium mb-4">
                      {pkg.duration}
                    </p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl sm:text-4xl font-bold font-cinzel text-white">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-neutral-400">/ estimated starting</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-neutral-800">
                    <p className="text-xs font-bold uppercase text-neutral-300 tracking-wider">
                      Included In Package:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-xs text-neutral-300">
                          <div className="w-4 h-4 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-amber-400" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-neutral-800/80">
                  <div className="text-[11px] text-amber-400/80 italic text-center">
                    Best for: {pkg.recommendedFor}
                  </div>

                  <a
                    href={`${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md ${
                      isPopular
                        ? 'bg-[#ffcc00] text-black hover:bg-amber-300'
                        : 'bg-neutral-800 hover:bg-amber-400 hover:text-black text-white border border-neutral-700'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>GET PRICE ON WHATSAPP</span>
                  </a>

                  <button
                    onClick={onOpenBooking}
                    className="w-full text-center text-xs text-neutral-400 hover:text-amber-300 py-1"
                  >
                    Lock 2026 Date With Advance
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Quote Calculator */}
        <div id="calculator" className="bg-[#101010] border border-amber-400/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold">
                <Calculator className="w-3.5 h-3.5" />
                Custom Package Estimator
              </div>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
                Calculate Your <span className="gold-gradient-text">Wedding Budget</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                Tailor your exact requirements for photography, cinematic video, drone, and albums.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3">
                    1. Select Event Scope:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'single', label: '1 Day Event', sub: 'Barat or Mehndi' },
                      { id: 'double', label: '2 Days Wedding', sub: 'Barat + Walima' },
                      { id: 'three', label: '3 Days Grand', sub: 'Mehndi + Barat + Walima' },
                      { id: 'birthday', label: 'Birthday / Party', sub: 'Single Event' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setEventType(opt.id as any)}
                        className={`p-3 rounded-xl text-left border transition-all text-xs ${
                          eventType === opt.id
                            ? 'bg-amber-400/15 border-amber-400 text-white font-semibold'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                        }`}
                      >
                        <p className="font-bold text-sm text-amber-300">{opt.label}</p>
                        <p className="text-[11px] text-neutral-400">{opt.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3">
                    2. Optional Add-ons & Equipment:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 cursor-pointer hover:border-neutral-700">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={needDrone}
                          onChange={(e) => setNeedDrone(e.target.checked)}
                          className="w-4 h-4 accent-amber-400 rounded"
                        />
                        <span className="text-xs text-neutral-200">
                          4K Drone Aerial Filming (Baraat Entry & Venue)
                        </span>
                      </div>
                      <span className="text-xs font-bold text-amber-400">+PKR 15,000</span>
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 cursor-pointer hover:border-neutral-700">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={needLuxuryAlbum}
                          onChange={(e) => setNeedLuxuryAlbum(e.target.checked)}
                          className="w-4 h-4 accent-amber-400 rounded"
                        />
                        <span className="text-xs text-neutral-200">
                          Luxury Velvet Layflat Printed Album (30 Pages)
                        </span>
                      </div>
                      <span className="text-xs font-bold text-amber-400">+PKR 12,000</span>
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 cursor-pointer hover:border-neutral-700">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={needPreWeddingShoot}
                          onChange={(e) => setNeedPreWeddingShoot(e.target.checked)}
                          className="w-4 h-4 accent-amber-400 rounded"
                        />
                        <span className="text-xs text-neutral-200">
                          Pre-Wedding Golden Hour Outdoor Couple Shoot
                        </span>
                      </div>
                      <span className="text-xs font-bold text-amber-400">+PKR 18,000</span>
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 cursor-pointer hover:border-neutral-700">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={extraCinematographer}
                          onChange={(e) => setExtraCinematographer(e.target.checked)}
                          className="w-4 h-4 accent-amber-400 rounded"
                        />
                        <span className="text-xs text-neutral-200">
                          Additional 2nd Cinematic Camera Operator
                        </span>
                      </div>
                      <span className="text-xs font-bold text-amber-400">+PKR 15,000</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Live Estimation Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/90 border border-amber-400/40 text-center space-y-6">
                <div>
                  <span className="text-xs text-neutral-400 uppercase tracking-widest block mb-1">
                    Estimated 2026 Package Value
                  </span>
                  <div className="text-4xl sm:text-5xl font-cinzel font-black text-amber-400 drop-shadow-md">
                    PKR {calculatedTotal.toLocaleString()}
                  </div>
                  <p className="text-xs text-neutral-400 mt-2">
                    For {getEventName()} in Tando Adam / Sindh
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-neutral-800 text-[11px] text-neutral-300 space-y-1 text-left">
                  <p className="font-semibold text-amber-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    SK Production Guarantee:
                  </p>
                  <p>• Lock your auspicious date with 20% advance via EasyPaisa / JazzCash</p>
                  <p>• Remaining balance split on event day & final album delivery</p>
                </div>

                <button
                  onClick={handleSendCustomQuote}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold text-xs uppercase bg-[#ffcc00] text-black hover:bg-amber-300 transition-transform active:scale-95 shadow-xl shadow-amber-500/25"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Send This Quote to Suresh Kumar on WhatsApp</span>
                </button>

                <button
                  onClick={onOpenChat}
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-300 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Need advice? Ask our AI Wedding Concierge</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
