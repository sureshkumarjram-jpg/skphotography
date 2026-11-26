import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, Trash2, Copy, Check, MessageCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { ChatMessage } from '../types';
import { STUDIO_INFO } from '../data/studioData';

interface GeminiChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GeminiChatModal: React.FC<GeminiChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      content: `Assalam-o-Alaikum & Welcome to **SK Production Tando Adam**! 🎬✨

I am your AI Wedding & Event Concierge. Suresh Kumar and our team are ready to make your special moments unforgettable!

How can I help you today?
- **2026 Wedding Season Packages** (Silver, Gold, Royal Platinum)
- **Cinematic 4K Films & Drone Coverage**
- **Advance Booking via EasyPaisa & JazzCash** (0308-3947436)
- **Event Shot Lists & Timeline Advice** (English, Urdu & Sindhi)`,
      timestamp: 'Just now',
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const starterSuggestions = [
    'What packages are available for 2026 weddings?',
    'How do I send advance via EasyPaisa or JazzCash?',
    'Can you suggest a timeline and shot list for Barat?',
    'Is drone footage included for our entrance in Tando Adam?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // Send conversation history to backend /api/chat route (using gemini-3.8-flash)
      const payload = {
        messages: newMessages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        userMessage: text,
      };

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with ${response.status}`);
      }

      const data = await response.json();
      const replyContent = data.reply || data.fallbackReply || "Thank you for contacting SK Production Tando Adam!";

      const modelMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        content: replyContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        content: `I'm currently unable to connect to the AI service. You can chat directly with **Suresh Kumar** on WhatsApp at **03083947436** for instant booking assistance!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const copyMessage = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'model',
        content: 'Chat reset. How else can I assist you with your wedding or event coverage?',
        timestamp: 'Just now',
      },
    ]);
  };

  // Helper to render markdown-like formatting (bold, bullets)
  const formatText = (content: string) => {
    return content.split('\n').map((line, idx) => {
      // Process bold markers **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="text-amber-300 font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
        return (
          <li key={idx} className="ml-4 list-disc text-neutral-200 my-0.5">
            {formattedParts}
          </li>
        );
      }

      return (
        <p key={idx} className={line.trim() === '' ? 'h-2' : 'my-1'}>
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-2xl h-[92vh] sm:h-[82vh] bg-[#0f0f0f] border border-amber-400/35 rounded-3xl flex flex-col shadow-2xl overflow-hidden">
        {/* Chat Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-neutral-900 via-neutral-900 to-black border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shadow-sm">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel font-bold text-white text-base sm:text-lg">
                  SK Production AI Concierge
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 rounded-full">
                  Gemini 3.8
                </span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Suresh Kumar's Virtual Consultant • Tando Adam, Sindh
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={clearChat}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
              title="Reset Conversation"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
              title="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar">
          {messages.map((message) => {
            const isUser = message.role === 'user';

            return (
              <div
                key={message.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm relative group ${
                    isUser
                      ? 'bg-amber-400 text-black font-medium rounded-tr-none shadow-md'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-tl-none leading-relaxed'
                  }`}
                >
                  <div className="space-y-1">{formatText(message.content)}</div>

                  {/* Actions for Model Responses */}
                  {!isUser && (
                    <div className="mt-3 pt-2.5 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                      <span>{message.timestamp}</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => copyMessage(message.content, message.id)}
                          className="hover:text-amber-400 transition-colors flex items-center gap-1"
                          title="Copy message"
                        >
                          {copiedId === message.id ? (
                            <Check className="w-3.5 h-3.5 text-green-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                          <span>{copiedId === message.id ? 'Copied' : 'Copy'}</span>
                        </button>
                        <span>•</span>
                        <a
                          href={`${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(
                            `Hi Suresh Bhai, I was chatting with your AI Concierge about: ${message.content.slice(0, 100)}...`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-amber-400 text-amber-300 transition-colors flex items-center gap-1 font-semibold"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-amber-300" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {isUser && (
                    <div className="mt-1 text-[10px] text-black/70 text-right">
                      {message.timestamp}
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Loading Indicator */}
          {loading && (
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>SK Concierge is typing response...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Starter Pills (shown if few messages) */}
        {messages.length <= 3 && (
          <div className="px-4 py-2 border-t border-neutral-800/60 bg-neutral-950/40 overflow-x-auto flex gap-2 no-scrollbar">
            {starterSuggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(s)}
                disabled={loading}
                className="px-3 py-1.5 rounded-full text-[11px] bg-neutral-900 border border-neutral-800 hover:border-amber-400/40 text-neutral-300 hover:text-white shrink-0 transition-colors text-left"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input Form */}
        <div className="p-4 bg-neutral-950 border-t border-neutral-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about 2026 packages, dates, drone filming, EasyPaisa/JazzCash..."
              disabled={loading}
              className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none text-white text-xs sm:text-sm placeholder:text-neutral-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-3 rounded-xl bg-[#ffcc00] text-black hover:bg-amber-300 disabled:opacity-40 disabled:hover:bg-[#ffcc00] transition-colors shadow-md shadow-amber-500/20 shrink-0 font-bold"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-500 px-1">
            <span>Powered by Gemini 3.8 Flash</span>
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400/80 hover:text-amber-300 transition-colors"
            >
              Direct Owner: Suresh Kumar (0308-3947436)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
