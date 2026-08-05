import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'thick' | 'thin';
  as?: 'div' | 'section' | 'article' | 'aside';
}

export function GlassPanel({
  className,
  variant = 'thick',
  as: Tag = 'div',
  children,
  ...props
}: GlassPanelProps) {
  const Component = Tag as any;
  return (
    <Component
      className={cn(
        variant === 'thin' ? 'glass-thin' : 'glass',
        'rounded-2xl',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
