import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/helpers';

const variants = {
  primary:
    'bg-secondary text-white hover:bg-ink active:translate-y-px',
  secondary:
    'bg-primary text-white hover:bg-primary-dark active:translate-y-px',
  accent:
    'bg-accent text-white hover:bg-teal-800 active:translate-y-px',
  outline:
    'border border-border-strong bg-surface text-secondary hover:border-secondary hover:bg-bg active:translate-y-px',
  ghost:
    'bg-transparent text-secondary hover:bg-bg',
  soft:
    'bg-bg text-secondary hover:bg-border/60 active:translate-y-px',
  inverted:
    'bg-white text-ink hover:bg-neutral-100 active:translate-y-px',
  outlineInverse:
    'border border-white/30 bg-transparent text-white hover:border-white/55 hover:bg-white/5 active:translate-y-px',
};

const sizes = {
  sm: 'h-9 px-3.5 text-[13px] rounded-sm',
  md: 'h-10 px-4 text-sm rounded-sm',
  lg: 'h-11 px-5 text-[15px] rounded-sm',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  type = 'button',
  disabled = false,
  loading = false,
  onClick,
  ...rest
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.01em]',
    'transition-[transform,background-color,box-shadow,border-color,color] duration-150 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-45 disabled:shadow-none',
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-disabled={disabled || loading} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled || loading} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
