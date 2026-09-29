import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  Minimize2,
  Maximize2,
  ChefHat,
  Flame,
  HelpCircle,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

const QUICK_SUGGESTIONS = [
  'What can I cook with tomato, onion, and lentils?',
  'How do I fix a curry that is too salty or spicy?',
  'What is the best substitute for tamarind paste?',
  'Give me a 15-minute quick dinner recipe idea',
];

const N8N_DIRECT_WEBHOOK = 'https://navyakamala07.app.n8n.cloud/webhook/688efbf8-f1b4-4b45-94d2-941a39289456/chat';

export const N8nChatWidget: React.FC<{
  isOpen?: boolean;
  onToggle?: () => void;
  selectedPantryItems?: string[];
}> = ({ isOpen: controlledIsOpen, onToggle: controlledOnToggle, selectedPantryItems = [] }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const toggleOpen = () => {
    if (controlledOnToggle) {
      controlledOnToggle();
    } else {
      setInternalIsOpen((prev) => !prev);
    }
  };

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem('rasoi_n8n_chat_history');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [
      {
        id: 'welcome',
        sender: 'bot',
        text: 'Namaste & Welcome to Rasoi AI! 🍳 I am your personal culinary assistant connected via n8n.\n\nAsk me anything about recipe ideas, spice chemistry, quick cooking hacks, or how to rescue a dish!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];
  });

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState<string>(() => {
    const stored = localStorage.getItem('rasoi_n8n_session_id');
    if (stored) return stored;
    const newId = `session-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
    localStorage.setItem('rasoi_n8n_session_id', newId);
    return newId;
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Persist chat history
  useEffect(() => {
    try {
      localStorage.setItem('rasoi_n8n_chat_history', JSON.stringify(messages));
    } catch (e) {
      console.warn('Failed to save chat to localStorage', e);
    }
  }, [messages]);

  // Auto-scroll on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Attempt backend proxy first, fallback to direct webhook
      let replyText = '';
      try {
        const proxyRes = await fetch('/api/n8n/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chatInput: text,
            message: text,
            sessionId: sessionId,
            context: {
              pantryItems: selectedPantryItems,
              source: 'Rasoi & World Kitchen App',
            },
          }),
        });

        if (proxyRes.ok) {
          const proxyData = await proxyRes.json();
          replyText = proxyData.output || proxyData.text || proxyData.response || (typeof proxyData === 'string' ? proxyData : '');
        }
      } catch (proxyErr) {
        console.warn('Proxy route failed, trying direct n8n webhook:', proxyErr);
      }

      // If proxy didn't return text, try direct POST
      if (!replyText) {
        const directRes = await fetch(N8N_DIRECT_WEBHOOK, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*',
          },
          body: JSON.stringify({
            chatInput: text,
            message: text,
            sessionId: sessionId,
            pantryItems: selectedPantryItems,
          }),
        });

        if (directRes.ok) {
          const contentType = directRes.headers.get('content-type') || '';
          if (contentType.includes('application/json')) {
            const directData = await directRes.json();
            replyText = directData.output || directData.text || directData.response || directData.message || (Array.isArray(directData) && directData[0]?.output) || JSON.stringify(directData);
          } else {
            replyText = await directRes.text();
          }
        }
      }

      if (!replyText) {
        replyText = "Chef AI received your message! If the n8n workflow is currently activating, please try again in a few seconds.";
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error: any) {
      console.error('Chat error:', error);
      const errorMsg: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        sender: 'bot',
        text: 'Sorry, I had trouble reaching the n8n server. Please verify your connection or try again in a moment!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: 'Chat cleared! How can I assist with your cooking today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Action Trigger Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={toggleOpen}
          aria-label="Open Rasoi AI Chat Assistant"
          className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-700 text-white font-bold shadow-xl shadow-emerald-950/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all border border-emerald-500/30"
        >
          <div className="relative">
            <ChefHat className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-emerald-900" />
          </div>
          <span className="text-xs tracking-wide">Ask Rasoi AI</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-emerald-950/60 text-emerald-200 border border-emerald-700/50 font-mono">
            n8n
          </span>
        </button>
      </div>

      {/* Slide-Up / Floating Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden animate-fade-in">
          {/* Chat Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-900 via-emerald-950 to-stone-900 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center text-amber-300 shadow-inner">
                <ChefHat className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white tracking-tight">Rasoi AI Assistant</h3>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Live n8n Cloud
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-200/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Always ready to help you cook</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-stone-300">
              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                title="Clear Chat History"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={toggleOpen}
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                title="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-stone-50/70 text-xs sm:text-sm">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs ${
                      isUser
                        ? 'bg-emerald-800 text-white'
                        : 'bg-stone-800 text-amber-300'
                    }`}
                  >
                    {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  <div
                    className={`max-w-[82%] rounded-2xl p-3.5 leading-relaxed shadow-2xs ${
                      isUser
                        ? 'bg-emerald-800 text-white rounded-tr-xs'
                        : 'bg-white text-stone-800 border border-stone-200/80 rounded-tl-xs'
                    }`}
                  >
                    <p className="whitespace-pre-wrap font-sans text-xs sm:text-sm selection:bg-amber-300 selection:text-stone-900">
                      {msg.text}
                    </p>
                    <span
                      className={`block text-[10px] mt-1.5 text-right ${
                        isUser ? 'text-emerald-200/80' : 'text-stone-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Typing Loader */}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-lg bg-stone-800 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white border border-stone-200 rounded-2xl rounded-tl-xs p-3.5 shadow-2xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-xs text-stone-500 ml-1.5">Rasoi AI is cooking up an answer...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="px-3 py-2 bg-stone-100/90 border-t border-stone-200 overflow-x-auto scrollbar-none flex items-center gap-1.5 shrink-0">
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>Ask:</span>
            </span>
            {QUICK_SUGGESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-lg bg-white hover:bg-emerald-50 text-[11px] text-stone-700 hover:text-emerald-900 border border-stone-200 hover:border-emerald-300 font-medium whitespace-nowrap transition-all shadow-2xs disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-white border-t border-stone-200 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Ask anything about recipes, substitutes, tips..."
              disabled={isLoading}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 transition-all bg-stone-50/50 focus:bg-white"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isLoading}
              className="p-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 disabled:opacity-40 text-white transition-all shadow-md flex items-center justify-center shrink-0"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
