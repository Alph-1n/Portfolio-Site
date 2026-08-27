'use client';

import { projects } from '@/data/projects';
import { ProjectCard } from './project-card';

export function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="container max-w-[1400px] px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
          <h2 className="section-heading">Projects</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed self-end">
            Production applications, digital publishing pipelines, and full-stack systems built
            with modern web technologies and AI workflows — from enterprise tools to personal demos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
