'use client';

import type { Project } from '@/lib/types';
import { ArrowUpRight, Github, Sparkles, CheckCircle2, Layers, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const categoryColors: Record<string, { badge: string; border: string; glow: string }> = {
  'Full-Stack': {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    glow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  'Backend & AI': {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    border: 'border-blue-500/20 hover:border-blue-500/50',
    glow: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
  'Mobile & Audio': {
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    border: 'border-amber-500/20 hover:border-amber-500/50',
    glow: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  'Academic / ML': {
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    border: 'border-purple-500/20 hover:border-purple-500/50',
    glow: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const theme = categoryColors[project.category] ?? {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    border: 'border-border/60 hover:border-blue-500/40',
    glow: 'from-blue-500/15 via-purple-500/10 to-transparent',
  };

  return (
    <div
      className={cn(
        'glass-card group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-6 sm:p-8 transition-all duration-300',
        featured
          ? 'border-emerald-500/40 bg-gradient-to-br from-emerald-950/30 via-card/80 to-blue-950/30 shadow-xl shadow-emerald-500/5'
          : `${theme.border} bg-card/60`,
      )}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br opacity-30 blur-3xl transition duration-500 group-hover:opacity-70',
          theme.glow,
        )}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Top bar: Category + Year + Working Demo Badge */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className={cn('rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-md', theme.badge)}>
                {project.category}
              </span>
              {project.isWorkingDemo && (
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-1 text-[11px] font-bold text-emerald-400 backdrop-blur-md shadow-sm shadow-emerald-500/20">
                  <Sparkles className="h-3 w-3" />
                  Live Working Demo
                </span>
              )}
            </div>
            <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {project.subtitle}
          </p>

          {/* Highlights */}
          <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-foreground/85">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar: Tech chips + Action links */}
        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/60 bg-muted/60 px-2.5 py-0.5 text-[11px] font-medium text-foreground/80 hover:border-blue-500/40 transition"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="rounded-full border border-border/40 bg-muted/30 px-2 py-0.5 text-[10px] text-muted-foreground">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-primary text-xs py-2 px-4 shadow-md shadow-blue-500/25"
              >
                <span>Live App</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-secondary text-xs py-2 px-3.5"
                aria-label={`${project.title} GitHub Source`}
              >
                <Github className="h-3.5 w-3.5" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


