'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import type { RoleMode } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  mode: RoleMode;
  index: number;
}

export function ProjectCard({ project, mode, index }: ProjectCardProps) {
  const roleSummary = project.roleSummaries[mode.id];
  const cover = project.images[0];
  const [imgOk, setImgOk] = useState(true);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="focus-ring group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/30 backdrop-blur-md transition duration-500 hover:bg-card/50"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div
          aria-hidden
          className={cn(
            'absolute inset-0 bg-gradient-to-br opacity-90 transition duration-700 group-hover:scale-[1.03]',
            project.accent,
          )}
        />
        {imgOk && cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="relative z-10 object-cover mix-blend-luminosity opacity-90 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <span className="headline text-6xl italic text-white/70">{project.title.split(' ')[0]}</span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 z-20 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute left-5 top-5 z-30 flex items-center gap-2">
          <span className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur">
            {project.year}
          </span>
          <span className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur">
            {roleSummary.relevance}% match · {mode.shortLabel}
          </span>
        </div>
        <div className="absolute right-5 top-5 z-30 opacity-0 transition group-hover:opacity-100">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <div>
          <h3 className="headline text-2xl sm:text-3xl">{project.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.subtitle}</p>
        </div>
        <p className="text-sm leading-relaxed text-foreground/85">{roleSummary.summary}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/60 bg-background/50 px-2.5 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
