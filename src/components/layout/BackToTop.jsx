import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollTop } from '../../hooks/useScrollTop';

export default function BackToTop() {
  const { visible, scrollToTop } = useScrollTop(480);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-secondary shadow-elevated transition-colors hover:border-primary/30 hover:text-primary"
          aria-label="Back to top"
        >
          <ArrowUp strokeWidth={2} className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
