import { cn } from '../../utils/helpers';

export function Field({ label, hint, error, htmlFor, children, className }) {
  return (
    <div className={cn('grid', className)}>
      {label && (
        <label htmlFor={htmlFor} className="field-label">
          {label}
        </label>
      )}
      {children}
      {error ? <p className="field-error">{error}</p> : hint ? <p className="field-hint">{hint}</p> : null}
    </div>
  );
}

export function Input({ className, invalid, ...props }) {
  return (
    <input
      className={cn('field-control', className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

export function Select({ className, invalid, children, ...props }) {
  return (
    <select className={cn('field-control', className)} aria-invalid={invalid || undefined} {...props}>
      {children}
    </select>
  );
}

export function Textarea({ className, invalid, ...props }) {
  return (
    <textarea
      className={cn('field-control resize-y min-h-[7.5rem]', className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}
