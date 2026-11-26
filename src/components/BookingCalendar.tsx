import React, { useState } from 'react';
import { Calendar, CheckCircle2, MessageCircle, MapPin, X, Sparkles, CreditCard, Clock } from 'lucide-react';
import { STUDIO_INFO, PACKAGES } from '../data/studioData';
import confetti from 'canvas-confetti';

interface BookingCalendarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingCalendar: React.FC<BookingCalendarProps> = ({ isOpen, onClose }) => {
  const [clientName, setClientName] = useState('');
  const [eventDate, setEventDate] = useState('2026-12-15');
  const [eventType, setEventType] = useState('Wedding / Barat');
  const [city, setCity] = useState('Tando Adam');
  const [venue, setVenue] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Gold Cinematic Signature (PKR 75,000)');
  const [advanceMethod, setAdvanceMethod] = useState<'easypaisa' | 'jazzcash' | 'cash'>('easypaisa');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffcc00', '#ffd700', '#ffffff', '#e5a900'],
    });

    const msg = `*NEW 2026 BOOKING INQUIRY - SK PRODUCTION TANDO ADAM*
*Client Name:* ${clientName || 'Valued Guest'}
*Event Date:* ${eventDate}
*Event Type:* ${eventType}
*Location/City:* ${city} ${venue ? `(${venue})` : ''}
*Selected Package:* ${selectedPackage}
*Preferred Advance Payment:* ${advanceMethod.toUpperCase()} (03083947436)
${notes ? `*Special Notes:* ${notes}\n` : ''}
Assalam-o-Alaikum Suresh Bhai, please confirm date availability and send advance booking confirmation.`;

    const url = `${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-2xl w-full bg-[#111111] border border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors border border-neutral-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            2026 Season Priority Calendar
          </div>
          <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
            RESERVE YOUR <span className="gold-gradient-text">WEDDING DATE</span>
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400">
            Secure Suresh Kumar & SK Production's master crew before dates get fully booked.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                Your Full Name / Family Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Farhan Ali / Khan Family"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-amber-400 focus:outline-none text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                Target 2026 Event Date
              </label>
              <input
                type="date"
                required
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-amber-400 focus:outline-none text-white text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                Event Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-amber-400 focus:outline-none text-white text-sm"
              >
                <option value="Wedding / Barat">Wedding / Barat</option>
                <option value="Walima / Reception">Walima / Reception</option>
                <option value="Mehndi / Sangeet Night">Mehndi / Sangeet Night</option>
                <option value="Engagement / Ring Ceremony">Engagement / Ring Ceremony</option>
                <option value="Complete 3-Day Wedding">Complete 3-Day Wedding</option>
                <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                <option value="Other Event">Other Event</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                City / Region in Sindh
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-amber-400 focus:outline-none text-white text-sm"
              >
                <option value="Tando Adam">Tando Adam</option>
                <option value="Shahdadpur">Shahdadpur</option>
                <option value="Sanghar">Sanghar</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Nawabshah (Shaheed Benazirabad)">Nawabshah</option>
                <option value="Mirpurkhas">Mirpurkhas</option>
                <option value="Hala">Hala</option>
                <option value="Karachi">Karachi</option>
                <option value="Other Sindh City">Other Sindh City</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
              Venue / Hall / Home Lawn (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Royal Marquee Tando Adam / Home Courtyard"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-amber-400 focus:outline-none text-white text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
              Preferred Package
            </label>
            <select
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-amber-400 focus:outline-none text-white text-sm"
            >
              <option value="Silver Classic Photo (PKR 35,000)">
                Silver Classic Photo (PKR 35,000)
              </option>
              <option value="Gold Cinematic Signature (PKR 75,000)">
                Gold Cinematic Signature (PKR 75,000) - Most Popular
              </option>
              <option value="Royal Platinum 3-Day Grand (PKR 145,000)">
                Royal Platinum 3-Day Grand (PKR 145,000) - VIP
              </option>
              <option value="Custom Tailored Package">Custom Tailored Package</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
              Preferred Advance Payment Method
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setAdvanceMethod('easypaisa')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  advanceMethod === 'easypaisa'
                    ? 'bg-green-500/20 border-green-500 text-green-300'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>EasyPaisa</span>
              </button>

              <button
                type="button"
                onClick={() => setAdvanceMethod('jazzcash')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  advanceMethod === 'jazzcash'
                    ? 'bg-red-500/20 border-red-500 text-red-300'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>JazzCash</span>
              </button>

              <button
                type="button"
                onClick={() => setAdvanceMethod('cash')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  advanceMethod === 'cash'
                    ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Studio Cash</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
              Additional Requests / Drone / Pre-Shoot Notes
            </label>
            <textarea
              rows={2}
              placeholder="Any specific wishes, timing, or special moments you want covered..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-amber-400 focus:outline-none text-white text-sm"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold text-sm uppercase bg-[#ffcc00] text-black hover:bg-amber-300 transition-all duration-300 shadow-xl shadow-amber-500/25 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>CONFIRM 2026 DATE ON WHATSAPP</span>
            </button>
          </div>

          <p className="text-[11px] text-center text-neutral-400">
            Suresh Kumar will immediately review and send you the verified booking slip.
          </p>
        </form>
      </div>
    </div>
  );
};
