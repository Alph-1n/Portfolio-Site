'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './project-card';
import { Sparkles, Code, Terminal, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'Full-Stack', 'Backend & AI', 'Mobile & Audio', 'Academic / ML'] as const;

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="container max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
            <Layers className="h-3.5 w-3.5" />
            <span>Featured Software Engineering</span>
          </div>
          <h2 className="apple-headline text-3xl sm:text-4xl md:text-5xl text-foreground">
            Featured Projects & Apps.
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
          Production applications, digital publishing pipelines, and full-stack systems built with modern web technologies and AI workflows.
        </p>
      </div>

      {/* Dynamic Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
        {categories.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'focus-ring rounded-full px-4 py-2 text-xs font-medium transition-all duration-200',
                active
                  ? 'bg-foreground text-background shadow-md shadow-black/10 dark:shadow-white/5'
                  : 'bg-card/60 border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted/70',
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className={cn(
              'transition-all duration-300',
              p.id === 'finance-tracker' && activeCategory === 'All' ? 'md:col-span-2' : '',
            )}
          >
            <ProjectCard project={p} featured={p.id === 'finance-tracker'} />
          </div>
        ))}
      </div>
    </section>
  );
}

