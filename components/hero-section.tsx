'use client';

import { useMode } from './mode-context';
import { ModeSelector } from './mode-selector';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const { mode } = useMode();

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="aurora" aria-hidden />
      <div className="grain" aria-hidden />

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/30 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            {mode.heroKicker}
          </div>

          <h1 className="headline text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {mode.heroHeadline.split(' ').map((word, i, arr) => {
              const isLastTwo = i >= arr.length - 2;
              return (
                <span
                  key={i}
                  className={isLastTwo ? 'italic text-foreground/80' : ''}
                >
                  {word}
                  {i < arr.length - 1 ? ' ' : ''}
                </span>
              );
            })}
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {mode.tagline}
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link href={mode.primaryCta.href} className="btn-primary focus-ring text-sm">
              {mode.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={mode.secondaryCta.href} className="btn-ghost focus-ring text-sm">
              {mode.secondaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 w-full">
            <ModeSelector />
          </div>
        </div>
      </div>
    </section>
  );
}
