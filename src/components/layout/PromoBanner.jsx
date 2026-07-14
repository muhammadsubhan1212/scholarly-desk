import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PromoBanner() {
  return (
    <div className="border-b border-white/5 bg-secondary text-white">
      <div className="container-app flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 py-2 text-center text-[12px] leading-snug sm:text-[13px]">
        <Sparkles strokeWidth={2} className="hidden h-3.5 w-3.5 text-accent sm:inline" aria-hidden="true" />
        <p className="text-slate-300">
          Writers on desk 24/7 —{' '}
          <Link to="/order-now" className="font-semibold text-white underline-offset-2 hover:underline">
            start an order
          </Link>{' '}
          or split payment into two parts.
        </p>
      </div>
    </div>
  );
}
