import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare, Send, X } from 'lucide-react';
import { brand } from '../../data/brand';

const canned = [
  'Hi — how can Assignment Solution help with your assignment today?',
  'Share your deadline and subject and we will outline next steps.',
  'For urgent work, open Order Now and pick a 24h or 12h deadline.',
];

export default function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'agent', text: canned[0] }]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener('sd-open-chat', openChat);
    return () => window.removeEventListener('sd-open-chat', openChat);
  }, []);

  const send = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { from: 'user', text }]);
    setInput('');
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: 'agent',
          text: canned[Math.min(prev.filter((m) => m.from === 'user').length, canned.length - 1)],
        },
      ]);
    }, 700);
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-elevated transition-transform hover:scale-105 hover:bg-teal-700 active:scale-95"
          aria-label="Open live chat"
        >
          <MessageSquare strokeWidth={2} className="h-5 w-5" />
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-5 z-50 flex h-[26rem] w-[min(100%-1.5rem,21rem)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated"
          >
            <div className="flex items-center justify-between bg-secondary px-4 py-3 text-white">
              <div>
                <p className="text-[13px] font-bold tracking-tight">Assignment Solution</p>
                <p className="text-[11px] text-slate-400">Usually replies in under a minute</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                aria-label="Close chat"
              >
                <X strokeWidth={2} className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 space-y-2.5 overflow-y-auto bg-bg p-3.5">
              {messages.map((m, i) => (
                <div
                  key={`${m.from}-${i}`}
                  className={`max-w-[88%] rounded-2xl px-3 py-2 text-[13px] leading-relaxed ${
                    m.from === 'user'
                      ? 'ml-auto rounded-br-md bg-primary text-white'
                      : 'rounded-bl-md bg-surface text-secondary shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <form onSubmit={send} className="flex gap-2 border-t border-border p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="field-control flex-1 !py-2"
              />
              <button
                type="submit"
                className="flex h-[2.625rem] w-[2.625rem] shrink-0 items-center justify-center rounded-[0.625rem] bg-primary text-white transition-colors hover:bg-primary-dark"
                aria-label="Send message"
              >
                <Send strokeWidth={2} className="h-4 w-4" />
              </button>
            </form>
            <p className="px-3 pb-2.5 text-[10px] text-muted">Demo chat · {brand.email}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
