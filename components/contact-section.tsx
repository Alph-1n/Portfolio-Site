'use client';

import { profile } from '@/data/profile';
import { socialLinks } from '@/data/social';
import { ThemeToggle } from './theme-toggle';

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="container max-w-[1400px] px-4 sm:px-6 py-16 sm:py-24">
        {/* Play / personalize row */}
        <div className="mb-16 sm:mb-24">
          <h2 className="section-heading text-coral mb-4">Play</h2>
          <p className="text-muted-foreground max-w-xl mb-8">
            Personalise your web experience. More customisation options coming soon.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bento-card p-6 sm:p-8 flex flex-col min-h-[200px]">
              <span className="text-5xl font-semibold leading-none mb-auto">Aa</span>
              <h3 className="font-semibold mt-6">Typeface</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Currently viewing DM Sans. Clean, geometric, and built for screens.
              </p>
            </div>
            <div className="bento-card p-6 sm:p-8 flex flex-col min-h-[200px]">
              <div className="flex gap-2 mb-auto">
                <span className="h-8 w-8 rounded-full bg-coral" />
                <span className="h-8 w-8 rounded-full bg-emerald-400" />
                <span className="h-8 w-8 rounded-full bg-muted" />
                <span className="h-8 w-8 rounded-full bg-foreground" />
              </div>
              <h3 className="font-semibold mt-6">Palette</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Switch between dark and light mode to suit your preference.
              </p>
              <div className="mt-4">
                <ThemeToggle />
              </div>
            </div>
            <div className="bento-card p-6 sm:p-8 flex flex-col min-h-[200px]">
              <div className="flex items-end gap-1 h-10 mb-auto">
                {[3, 5, 2, 7, 4, 6, 3, 5].map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 rounded-full bg-coral"
                    style={{ height: `${h * 4}px` }}
                  />
                ))}
              </div>
              <h3 className="font-semibold mt-6">Stack</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                React, Next.js, Python, FastAPI — the tools behind every project here.
              </p>
            </div>
            <div className="bento-card p-6 sm:p-8 flex flex-col min-h-[200px]">
              <span className="text-3xl mb-auto">🇮🇳</span>
              <h3 className="font-semibold mt-6">Remote Mode</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Based in New Delhi, working with teams across time zones — {profile.timezone}.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl">
          <h2 className="section-heading text-balance">
            It&apos;s time to build your next project. Let&apos;s work together.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block mt-8 text-2xl sm:text-3xl font-medium link-coral no-underline hover:opacity-80"
          >
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-coral"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
