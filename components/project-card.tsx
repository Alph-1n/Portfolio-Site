'use client';

import type { Project } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const href = project.liveUrl ?? project.githubUrl ?? `/projects/${project.slug}`;

  return (
    <a
      href={href}
      target={project.liveUrl || project.githubUrl ? '_blank' : undefined}
      rel={project.liveUrl || project.githubUrl ? 'noopener noreferrer' : undefined}
      className="group bento-card p-6 sm:p-8 flex flex-col justify-between min-h-[280px] hover:border-muted-foreground/30 transition-colors"
    >
      <div>
        {project.isWorkingDemo && (
          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-coral mb-4">
            Live demo
          </span>
        )}
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-coral transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          Built using {project.technologies.slice(0, 5).join(', ')}
          {project.technologies.length > 5 ? ' and more.' : '.'}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-medium">
        <span>Open project</span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}
