'use client';

import { useMode } from './mode-context';
import { orderedFeaturedProjects } from '@/data/projects';
import { ProjectCard } from './project-card';

export function FeaturedProjects() {
  const { mode } = useMode();
  const list = orderedFeaturedProjects(mode.featuredProjectIds);

  return (
    <section id="work" className="container relative py-20 sm:py-28">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</p>
          <h2 className="mt-3 headline text-balance text-4xl sm:text-5xl">
            Ordered for the <span className="italic">{mode.shortLabel.toLowerCase()}</span> lens.
          </h2>
        </div>
        <p className="hidden max-w-xs text-sm text-muted-foreground sm:block">
          The same three projects appear across every mode — the framing shifts.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {list.map((p, i) => (
          <div
            key={p.id}
            className={i === 0 ? 'lg:col-span-2 animate-fade-up' : 'animate-fade-up'}
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <ProjectCard project={p} mode={mode} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
