import { Link } from 'react-router-dom';
import { cn } from '../utils/helpers';

export default function Logo({ className = '', compact = false, light = false }) {
  return (
    <Link to="/" className={cn('inline-flex items-center gap-2.5 group', className)} aria-label="Scholarly Desk home">
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect width="64" height="64" fill="#0B1220" />
        <path
          d="M14 44V20h12.5c5.2 0 8.5 2.4 8.5 6.4 0 2.6-1.4 4.6-3.7 5.6 3 .9 4.7 3.2 4.7 6.4 0 4.7-3.6 7.6-9.2 7.6H14zm7.2-13.2h4.8c2.5 0 3.9-1.2 3.9-3.1s-1.4-3-3.8-3H21.2v6.1zm0 6.2v6.4h5.4c2.8 0 4.4-1.3 4.4-3.4s-1.5-3-4.4-3h-5.4z"
          fill="#F5F5F4"
        />
        <rect x="44" y="18" width="6" height="26" fill="#0F766E" />
      </svg>
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span
            className={cn(
              'font-display text-[1.05rem] font-extrabold tracking-tight',
              light ? 'text-white' : 'text-secondary',
            )}
          >
            Scholarly Desk
          </span>
          <span className={cn('text-[0.7rem] font-medium', light ? 'text-slate-400' : 'text-muted')}>
            Clear writing. Confident grades.
          </span>
        </span>
      )}
    </Link>
  );
}
