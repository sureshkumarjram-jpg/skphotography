import React, { useState } from 'react';
import { Sparkles, Maximize2, X, MessageCircle, MapPin, Play, Tag, Eye } from 'lucide-react';
import { GALLERY_ITEMS, STUDIO_INFO } from '../data/studioData';
import { GalleryItem } from '../types';

export const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'cinematic', label: 'Cinematic Films' },
    { id: 'bridal', label: 'Bridal & Groom' },
    { id: 'mehndi', label: 'Mehndi & Mayun' },
    { id: 'barat', label: 'Barat & Walima' },
    { id: 'candid', label: 'Candid Moments' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Our Visual Craft
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white">
            RECENT <span className="gold-gradient-text">PORTFOLIO</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal">
            Real weddings captured across Tando Adam, Shahdadpur, Sanghar, Hyderabad, and greater Sindh.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/25'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-800/80 hover:border-amber-400/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Tag */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-black/60 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                  {item.tag}
                </span>
              </div>

              {/* View Overlay Button */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-black/70 border border-neutral-600 flex items-center justify-center text-white backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <h4 className="font-cinzel font-bold text-base text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-300 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#0d0d0d] border border-amber-400/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-neutral-800 text-white transition-colors border border-neutral-700"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Container */}
              <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full max-h-[60vh] md:max-h-[80vh] object-cover"
                />
              </div>

              {/* Information Panel */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                    <Tag className="w-3 h-3" />
                    <span>{selectedItem.tag}</span>
                  </div>

                  <h3 className="text-2xl font-cinzel font-bold text-white">
                    {selectedItem.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Captured at {selectedItem.location}</span>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedItem.caption}
                  </p>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                    <p className="text-xs font-semibold text-neutral-200">
                      Director: Suresh Kumar
                    </p>
                    <p className="text-xs text-neutral-400">
                      Studio: Chhatri Chowk, Tando Adam, Sindh
                    </p>
                    <p className="text-xs text-amber-400/90 font-medium">
                      Filmed with 4K Cinema Optics & Color Mastery
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-800 mt-6 space-y-3">
                  <a
                    href={`${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(
                      `Hi Suresh Bhai! I saw your portfolio shot "${selectedItem.title}" and would love similar coverage for our wedding.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-[#ffcc00] text-black hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>Request Similar Style on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-2.5 rounded-xl text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
