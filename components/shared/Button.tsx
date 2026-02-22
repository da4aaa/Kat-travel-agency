import type {ButtonHTMLAttributes, ReactNode} from 'react';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent/90 shadow-[0_16px_40px_rgba(26,107,90,0.18)]',
  outline:
    'border border-text/15 text-text hover:border-text/25 hover:bg-surface',
  ghost: 'text-text hover:bg-surface'
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base'
};

export function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className = '',
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}) {
  return (
    <button
      className={[base, variants[variant], sizes[size], className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

