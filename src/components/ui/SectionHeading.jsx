import { cn } from '../../utils/helpers';

export default function SectionHeading({
  eyebrow,
  title,
  body,
  center = false,
  className = '',
  titleClassName = '',
}) {
  return (
    <div className={cn(center ? 'mx-auto mb-10 max-w-2xl text-center' : 'mb-9 max-w-2xl', className)}>
      {eyebrow && (
        <p className={cn('section-eyebrow', center && 'w-full justify-center')}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          'font-display text-[1.75rem] font-bold tracking-[-0.03em] text-secondary md:text-[2rem]',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {body && (
        <p className={cn('mt-3 text-[0.9375rem] leading-relaxed text-muted', center && 'mx-auto')}>
          {body}
        </p>
      )}
    </div>
  );
}
