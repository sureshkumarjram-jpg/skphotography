import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Clock, Mail, ChevronDown, CheckCircle2, Navigation, Sparkles } from 'lucide-react';
import { STUDIO_INFO, FAQS } from '../data/studioData';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white">
            CONTACT <span className="gold-gradient-text">US</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Visit our studio at Chhatri Chowk, Tando Adam or connect with Suresh Kumar directly on WhatsApp and phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Card (matching original content) */}
          <div className="lg:col-span-5 bg-[#111111] border border-amber-400/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative space-y-8">
            <div className="space-y-3">
              <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                Official Studio
              </span>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
                SK PRODUCTION TANDO ADAM
              </h3>
              <p className="text-xs text-neutral-400">
                Managed & Directed by Master Cinematographer Suresh Kumar
              </p>
            </div>

            <div className="space-y-5 text-sm">
              {/* Owner */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <span className="font-cinzel font-bold text-base">SK</span>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">Owner & Director</p>
                  <p className="text-base font-bold text-white">Suresh Kumar</p>
                  <p className="text-xs text-amber-300/80">Senior Cinematographer & Creative Head</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">Mobile & Direct Line</p>
                  <a
                    href={`tel:${STUDIO_INFO.phone}`}
                    className="text-lg font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                  <p className="text-xs text-neutral-400">Available 9:00 AM – 11:00 PM</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">Studio Address</p>
                  <p className="text-base font-bold text-white">Chhatri Chowk, Tando Adam, Sindh</p>
                  <p className="text-xs text-neutral-400 mb-2">Sindh, Pakistan</p>
                  <a
                    href="https://maps.google.com/?q=Chhatri+Chowk,+Tando+Adam,+Sindh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-400 hover:text-amber-300 underline"
                  >
                    <span>View on Google Maps</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 fill-green-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">WhatsApp</p>
                  <p className="text-base font-bold text-white">wa.me/923083947436</p>
                  <p className="text-xs text-neutral-400">Fast 24/7 Chat & Advance Confirmation</p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full font-bold text-xs uppercase bg-[#ffcc00] text-black hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>CALL NOW</span>
              </a>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full font-bold text-xs uppercase bg-neutral-900 border border-amber-400/50 text-amber-300 hover:bg-neutral-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP CHAT</span>
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Accordion & Service Coverage Areas */}
          <div className="lg:col-span-7 space-y-8">
            {/* Service Coverage Area Banner */}
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Regions & Cities We Regularly Cover</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {STUDIO_INFO.serviceAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-black/60 border border-neutral-800 text-neutral-200"
                  >
                    📍 {area}
                  </span>
                ))}
              </div>
              <p className="text-xs text-neutral-400">
                We bring full camera rigs, lights, and drone equipment directly to your banquet, marquee, or ancestral home in Sindh.
              </p>
            </div>

            {/* FAQs */}
            <div className="space-y-3">
              <h4 className="text-xl font-cinzel font-bold text-white mb-4">
                FREQUENTLY ASKED <span className="gold-gradient-text">QUESTIONS</span>
              </h4>

              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-neutral-800 rounded-2xl bg-neutral-950/70 overflow-hidden transition-colors hover:border-neutral-700"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-neutral-200 hover:text-white"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-amber-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 border-t border-neutral-900 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
