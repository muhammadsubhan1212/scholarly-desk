import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, X, XCircle } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { cn } from '../utils/helpers';

const icons = { success: CheckCircle2, error: XCircle, info: Info };
const iconStyles = { success: 'text-success', error: 'text-error', info: 'text-primary' };

export default function ToastViewport() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 right-4 z-[100] flex flex-col gap-2 sm:left-auto sm:w-[22rem]">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.type] || Info;
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto flex items-start gap-3 rounded-xl border border-border bg-surface p-3.5 shadow-elevated"
            >
              <Icon strokeWidth={2} className={cn('mt-0.5 h-4 w-4 shrink-0', iconStyles[toast.type])} />
              <p className="flex-1 text-[13px] font-medium leading-relaxed text-secondary">{toast.message}</p>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-bg hover:text-secondary"
                aria-label="Dismiss"
              >
                <X strokeWidth={2} className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
