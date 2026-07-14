import { cn } from '../../utils/helpers';

export default function Card({
  as: Tag = 'div',
  interactive = false,
  padded = true,
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        'surface-card',
        interactive && 'surface-card-interactive',
        padded && 'p-5 md:p-6',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
