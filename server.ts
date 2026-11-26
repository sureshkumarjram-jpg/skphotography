import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

const SYSTEM_INSTRUCTION = `You are the Virtual Wedding & Event Concierge for "SK PRODUCTION TANDO ADAM", owned and directed by Suresh Kumar.
Your role is to help clients with wedding packages, cinematic film queries, photography advice, event schedules, pricing estimates, and fast WhatsApp bookings.

Key Business Information:
- Business: SK Production Tando Adam (Wedding Movie & Photography)
- Owner: Suresh Kumar
- Location / Studio: Chhatri Chowk, Tando Adam, Sindh, Pakistan
- Official Phone / WhatsApp: 03083947436 (International format: +923083947436)
- Payment Methods: EasyPaisa, JazzCash, Direct Bank Transfer, and Studio Cash Deposit
- Status: Booking OPEN for 2026 Wedding Season! (Advance booking recommended to secure auspicious dates)

Services Offered:
1. Professional Wedding Photography:
   - High-resolution bridal and groom portraiture
   - Candid moments, family portraits, stage & ritual coverage
   - Traditional & contemporary styles
2. Cinematic Wedding Movie & Film:
   - 4K cinematic highlight teaser (1-3 minutes, perfect for Instagram/WhatsApp status)
   - Full-length documentary master film (40-60 minutes) with color grading & custom soundtrack
   - High-end gimbal stabilizers, drone aerial shots (for grand barat entries & venue views)
3. Pre-Wedding & Engagement:
   - Couple photoshoot sessions, Ring Ceremony coverage
4. Mehndi, Mayun, Haldi & Sangeet:
   - Vibrant lighting capture, dance performances, candid joyful reactions
5. Barat & Walima / Reception:
   - Complete multi-camera coverage of departures, arrivals, dining, stage rituals
6. Birthday & Other Celebrations:
   - Milestones, anniversaries, corporate and cultural events

Popular Packages (Guideline estimates in PKR for 2026 season):
- Silver Package (~PKR 35,000 - 45,000 / day): 1 Senior Photographer, unlimited raw + edited high-res digital photos, digital album delivery.
- Gold Cinematic Package (~PKR 65,000 - 85,000 / day): 1 Cinematic Videographer + 1 Senior Photographer, 4K Cinematic Teaser, Full HD Wedding Film, Custom Printed Photo Album.
- Royal Platinum Package (~PKR 120,000 - 160,000 for 2-3 events): 2 Videographers + 2 Photographers, Drone aerial coverage, 4K Cinematic Trailer, Master Film, Luxury Velvet Layflat Photo Book, Pre-event photoshoot.
(Customized quotes available based on number of days, venues, and specific requests. Note: Final pricing confirmed directly with Suresh Kumar on WhatsApp).

Tone and Personality:
- Extremely warm, hospitable, polite, respectful, and celebratory (congratulate couples with "Mubarakbaad / Lakh Lakh Mubarak").
- Fluent in English, Urdu, Sindhi, and Roman Urdu/Sindhi. Always adapt naturally to the user's language.
- Keep answers organized, easy to read, with bullet points and friendly emojis.
- Proactively offer to connect them directly to Suresh Kumar on WhatsApp at 03083947436 with pre-filled message text whenever they express interest in booking or receiving a custom quote.`;

// Helper for delay
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Intelligent local answers if Gemini encounters temporary upstream spikes
function getSmartStudioReply(query: string): string {
  const q = query.toLowerCase();
  if (q.includes('price') || q.includes('package') || q.includes('cost') || q.includes('rate') || q.includes('اگهه') || q.includes('پیکیج')) {
    return `Mubarakbaad! Here are **SK Production Tando Adam's 2026 Season Packages**:

- 🌟 **Silver Classic Photo (~PKR 35,000 / day):** 1 Senior Photographer, unlimited high-res DSLR photos, master retouching, digital cloud album.
- 🎬 **Gold Cinematic Signature (~PKR 75,000 / day - Most Popular):** 1 Cinematic Filmmaker + 1 Photographer, 4K Cinematic Teaser, Full HD Master Wedding Movie (40-60 min), Custom Hardcover Photo Album, Gimbal tracking.
- 👑 **Royal Platinum 3-Day Grand (~PKR 145,000):** Full crew of 4 (2 videographers + 2 photographers), 4K Drone Aerial Filming for Baraat entry, 2x Luxury Velvet Layflat Photo Albums, Pre-wedding shoot, Mehndi, Barat & Walima.

Would you like to customize a package or reserve your date? Contact **Suresh Kumar** directly at **0308-3947436** (WhatsApp: wa.me/923083947436)!`;
  }
  if (q.includes('easypaisa') || q.includes('jazzcash') || q.includes('payment') || q.includes('advance') || q.includes('deposit')) {
    return `Booking your date with SK Production is easy! 
We accept **EasyPaisa** and **JazzCash** mobile transfers from all over Pakistan:
- **Title:** Suresh Kumar
- **Mobile Account:** 0308-3947436

A 20% token deposit confirms your 2026 wedding date, and Suresh Bhai sends you an instant signed digital booking voucher on WhatsApp!`;
  }
  if (q.includes('drone') || q.includes('video') || q.includes('film') || q.includes('movie')) {
    return `Yes! We specialize in **4K Cinematic Wedding Films & Drone Aerial Filming**. 
We capture dramatic slow-motion entries, groom baraat processions, and fireworks with high-precision gimbals and cinema lenses. Drone coverage is included in our Gold & Royal Platinum packages or available as an add-on!`;
  }
  return `Thank you for reaching out to **SK Production Tando Adam**! 
Directed by **Suresh Kumar**, we make your special moments unforgettable across Tando Adam, Shahdadpur, Sanghar, Hyderabad, and all Sindh.
- 📞 **Phone / WhatsApp:** 03083947436 (wa.me/923083947436)
- 📍 **Studio:** Chhatri Chowk, Tando Adam, Sindh
- 💳 **Payments:** EasyPaisa & JazzCash Available for 2026 advance reservations.
How can I assist you with your wedding or event schedule today?`;
}

// POST /api/chat - Multi-turn conversation endpoint using gemini-3.8-flash
app.post('/api/chat', async (req, res) => {
  const { messages, userMessage } = req.body;
  const latestText = userMessage || (Array.isArray(messages) && messages[messages.length - 1]?.content) || '';

  if (!latestText) {
    return res.status(400).json({ error: 'Message content is required' });
  }

  if (!ai) {
    return res.json({ reply: getSmartStudioReply(latestText) });
  }

  // Format conversation history
  const formattedContents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

  if (Array.isArray(messages)) {
    for (const msg of messages) {
      if (msg.role === 'user' || msg.role === 'model' || msg.role === 'assistant') {
        formattedContents.push({
          role: msg.role === 'assistant' ? 'model' : (msg.role as 'user' | 'model'),
          parts: [{ text: msg.content || msg.text || '' }],
        });
      }
    }
  }

  if (latestText) {
    const last = formattedContents[formattedContents.length - 1];
    if (!last || last.role !== 'user' || last.parts[0]?.text !== latestText) {
      formattedContents.push({
        role: 'user',
        parts: [{ text: latestText }],
      });
    }
  }

  // Attempt generateContent with 1 automatic retry
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: formattedContents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      if (response && response.text) {
        return res.json({ reply: response.text });
      }
    } catch (err: any) {
      console.warn(`Gemini attempt ${attempt} failed:`, err?.message || err);
      if (attempt === 1) {
        await sleep(1000);
      }
    }
  }

  // If upstream API is temporarily unavailable, gracefully serve the tailored concierge response
  return res.json({
    reply: getSmartStudioReply(latestText),
  });
});

// Production or Dev Vite setup
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    // Serve production static files from dist
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Development mode: Vite middleware
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SK Production server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
