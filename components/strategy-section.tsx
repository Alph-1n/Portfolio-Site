'use client';

import { profile } from '@/data/profile';

export function StrategySection() {
  return (
    <section id="about" className="border-t border-border">
      <div className="container max-w-[1400px] px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="section-heading text-coral">Strategy</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I build applications that are fast, maintainable, and made to last. Using modern
              standards and AI-assisted tooling, I ensure they work smoothly across browsers and
              devices.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">{profile.longBio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
