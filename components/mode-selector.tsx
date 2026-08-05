'use client';

import { useMode } from './mode-context';
import { modes } from '@/data/modes';
import { cn } from '@/lib/utils';

export function ModeSelector() {
  const { modeId, setMode } = useMode();

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-3">
      <div
        role="tablist"
        aria-label="Portfolio mode"
        className="glass relative inline-flex w-full items-center justify-between rounded-full p-1"
      >
        {modes.map((m) => {
          const active = m.id === modeId;
          return (
            <button
              key={m.id}
              role="tab"
              aria-selected={active}
              onClick={() => setMode(m.id)}
              className={cn(
                'focus-ring relative flex-1 rounded-full px-3 py-2 text-xs font-medium tracking-tight transition sm:text-sm',
                active
                  ? 'text-background'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {active && (
                <span className="absolute inset-0 -z-0 rounded-full bg-foreground transition-all" />
              )}
              <span className="relative z-10">{m.shortLabel}</span>
            </button>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground/80">
        Same portfolio. Different lens.
      </p>
    </div>
  );
}
