'use client';

import { skillCategories } from '@/data/skills';
import { cn } from '@/lib/utils';
import { Cpu, Code2, Server, Smartphone, Wrench, Sparkles, Terminal } from 'lucide-react';

const categoryThemes: Record<
  string,
  { icon: typeof Code2; iconStyle: string; cardStyle: string; badgeStyle: string }
> = {
  frontend: {
    icon: Code2,
    iconStyle: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    cardStyle: 'border-sky-500/30 bg-gradient-to-br from-sky-950/20 via-card/70 to-card/40',
    badgeStyle: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
  },
  backend: {
    icon: Server,
    iconStyle: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
    cardStyle: 'border-teal-500/30 bg-gradient-to-br from-teal-950/20 via-card/70 to-card/40',
    badgeStyle: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
  },
  'ai-prototyping': {
    icon: Sparkles,
    iconStyle: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    cardStyle: 'border-purple-500/30 bg-gradient-to-br from-purple-950/20 via-card/70 to-card/40',
    badgeStyle: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  },
  'mobile-media': {
    icon: Smartphone,
    iconStyle: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    cardStyle: 'border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-card/70 to-card/40',
    badgeStyle: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  },
  'tools-devops': {
    icon: Wrench,
    iconStyle: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    cardStyle: 'border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 via-card/70 to-card/40',
    badgeStyle: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="container max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
            <Cpu className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="apple-headline text-3xl sm:text-4xl md:text-5xl text-foreground">
            Skills & Tooling Matrix.
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
          Technologies, frameworks, and system tools used for shipping responsive web products, robust APIs, and automated workflows.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => {
          const theme = categoryThemes[cat.id] ?? categoryThemes.frontend;
          const Icon = theme.icon;

          return (
            <div
              key={cat.id}
              className={cn(
                'glass-card rounded-[2rem] p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between shadow-lg',
                theme.cardStyle,
                idx === 0 ? 'lg:col-span-2' : '',
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn('flex h-11 w-11 items-center justify-center rounded-2xl border shadow-sm', theme.iconStyle)}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold tracking-tight text-foreground">
                        {cat.name}
                      </h3>
                    </div>
                  </div>
                  {cat.highlight && (
                    <span className={cn('rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest', theme.badgeStyle)}>
                      Core Focus
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/60 bg-muted/60 px-3 py-1 text-xs font-semibold text-foreground/90 transition hover:border-blue-400 hover:text-blue-400 hover:scale-105 hover:bg-muted"
                  >
                    {skill}
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


