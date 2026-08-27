import { cn } from '@/lib/utils';

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

export function Marquee({ items, className, speed = 'normal' }: MarqueeProps) {
  const duration = speed === 'slow' ? '55s' : speed === 'fast' ? '25s' : '40s';
  const doubled = [...items, ...items];

  return (
    <div className={cn('overflow-hidden border-y border-border py-5', className)}>
      <div
        className="marquee-track flex gap-10"
        style={{ animationDuration: duration }}
        aria-hidden
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 text-sm font-medium text-muted-foreground whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
