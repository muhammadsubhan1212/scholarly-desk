import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, X } from 'lucide-react';
import Button from '../ui/Button';

const STORAGE_KEY = 'sd_notice_seen';

export default function NoticeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-secondary/50 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="notice-title"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-bg hover:text-secondary"
              aria-label="Close notice"
            >
              <X strokeWidth={2} className="h-4 w-4" />
            </button>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <BookOpen strokeWidth={1.75} className="h-5 w-5" />
            </div>
            <h2 id="notice-title" className="font-display text-xl font-bold tracking-tight text-secondary">
              Welcome to Scholarly Desk
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              Share your deadline and subject — we match a writer and keep you updated until delivery.
              Ethical academic support only.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button to="/order-now" onClick={close}>
                Place an order
              </Button>
              <Button variant="outline" onClick={close}>
                Keep browsing
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
