import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/home';
import { cn } from '../../utils/helpers';

export default function FaqAccordion({ items = faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.q} className={cn(index > 0 && 'border-t border-border')}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-bg/70"
              onClick={() => setOpenIndex(open ? -1 : index)}
              aria-expanded={open}
            >
              <span className="font-display text-[15px] font-semibold tracking-[-0.015em] text-secondary">
                {item.q}
              </span>
              <span
                className={cn(
                  'flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors',
                  open ? 'bg-primary-soft text-primary' : 'bg-bg text-muted',
                )}
              >
                <ChevronDown
                  strokeWidth={2}
                  className={cn('h-4 w-4 transition-transform duration-200', open && 'rotate-180')}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-[14px] leading-relaxed text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
