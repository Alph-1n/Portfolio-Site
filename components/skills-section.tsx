'use client';

import { useMode } from './mode-context';
import { skillCategories } from '@/data/skills';
import { cn } from '@/lib/utils';

export function SkillsSection() {
  const { mode } = useMode();
  const highlighted = new Set(mode.highlightedSkillCategories);

  return (
    <section id="skills" className="container relative py-20 sm:py-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Capabilities</p>
          <h2 className="mt-3 headline text-balance text-4xl sm:text-5xl">
            Skills, quietly <span className="italic">grouped</span>.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Highlighted for {mode.shortLabel.toLowerCase()}. The rest are still on the table.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => {
          const on = highlighted.has(cat.id);
          return (
            <div
              key={cat.id}
              className={cn(
                'group relative overflow-hidden rounded-2xl border p-6 transition',
                on
                  ? 'border-foreground/25 bg-card/60 shadow-[0_1px_0_hsl(var(--foreground)/0.06)_inset]'
                  : 'border-border/50 bg-card/20 opacity-80 hover:opacity-100',
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium tracking-tight">{cat.name}</h3>
                {on && (
                  <span className="rounded-full bg-foreground px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-background">
                    Focus
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className={cn(
                      'rounded-full border px-2.5 py-0.5 text-[11px]',
                      on
                        ? 'border-border/70 bg-background/50 text-foreground'
                        : 'border-border/40 bg-background/30 text-muted-foreground',
                    )}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
