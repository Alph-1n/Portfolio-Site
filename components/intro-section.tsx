'use client';

import { useMode } from './mode-context';
import { profile } from '@/data/profile';

export function IntroSection() {
  const { mode } = useMode();

  return (
    <section className="container relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Introduction
        </p>
        <p className="mt-6 text-balance text-2xl leading-relaxed tracking-tight text-foreground/90 sm:text-3xl">
          {mode.introduction}
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          Based in {profile.location} · {profile.availability}
        </p>
      </div>
    </section>
  );
}
