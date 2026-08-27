'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { profile } from '@/data/profile';
import { highlights } from '@/data/highlights';
import { skillCategories } from '@/data/skills';
import { experience } from '@/data/experience';
import { Marquee } from './marquee';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        }),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const date = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'Asia/Kolkata',
  });

  return (
    <div className="mt-auto pt-8 border-t border-border">
      <p className="text-xs text-muted-foreground">{date}</p>
      <p className="text-2xl font-semibold tracking-tight tabular-nums mt-1">{time || '—'}</p>
      <p className="text-xs text-muted-foreground mt-1">{profile.timezone}</p>
    </div>
  );
}

export function OverviewSection() {
  const [activeHighlight, setActiveHighlight] = useState(0);
  const frontend = skillCategories.find((s) => s.id === 'frontend');
  const backend = skillCategories.find((s) => s.id === 'backend');

  const allSkills = skillCategories.flatMap((c) => c.skills);
  const companies = experience.map((e) => e.company);

  const prev = () => setActiveHighlight((i) => (i === 0 ? highlights.length - 1 : i - 1));
  const next = () => setActiveHighlight((i) => (i === highlights.length - 1 ? 0 : i + 1));

  return (
    <section id="overview" className="border-t border-border">
      <div className="container max-w-[1400px] px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="sr-only">Overview</h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 auto-rows-auto">
          {/* Overview card */}
          <div className="bento-card p-6 sm:p-8 flex flex-col xl:col-span-3 xl:row-span-2 min-h-[320px]">
            <p className="text-coral text-lg sm:text-xl font-medium leading-snug text-balance">
              {profile.title} experienced in building AI-assisted, workflow-driven applications.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              If you&apos;re looking for a software engineer to join your team or collaborate on a
              project, get in touch to discuss your requirements.
            </p>
            <a href={`mailto:${profile.email}`} className="btn-pill w-fit mt-6 text-sm">
              Say hello
            </a>
            <LiveClock />
          </div>

          {/* Highlight carousel */}
          <div className="bento-card p-6 sm:p-10 flex flex-col justify-between xl:col-span-6 xl:row-span-2 min-h-[320px]">
            <blockquote className="text-xl sm:text-2xl lg:text-[1.65rem] font-medium leading-snug tracking-tight text-balance">
              &ldquo;{highlights[activeHighlight].quote}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-end justify-between gap-4">
              <div>
                <p className="font-semibold text-sm">{highlights[activeHighlight].source}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {highlights[activeHighlight].context}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 mr-2">
                  {highlights.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveHighlight(i)}
                      className={cn(
                        'h-1.5 rounded-full transition-all',
                        i === activeHighlight ? 'w-6 bg-foreground' : 'w-1.5 bg-muted-foreground/40',
                      )}
                      aria-label={`Go to highlight ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={prev}
                  className="p-2 rounded-full border border-border hover:bg-muted transition"
                  aria-label="Previous highlight"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full border border-border hover:bg-muted transition"
                  aria-label="Next highlight"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Frontend card */}
          <div className="bento-card p-6 sm:p-8 xl:col-span-3 min-h-[180px]">
            <h3 className="text-lg font-semibold">{frontend?.name ?? 'Frontend'}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {frontend?.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {frontend?.skills.slice(0, 6).map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Backend card */}
          <div className="bento-card p-6 sm:p-8 xl:col-span-3 min-h-[180px]">
            <h3 className="text-lg font-semibold">{backend?.name ?? 'Backend'}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {backend?.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {backend?.skills.slice(0, 6).map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Marquee items={allSkills} />
      <Marquee items={companies} speed="slow" />
    </section>
  );
}
