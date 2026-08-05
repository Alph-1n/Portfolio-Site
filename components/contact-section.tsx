'use client';

import { useMode } from './mode-context';
import { socialLinks } from '@/data/social';
import { Github, Linkedin, Mail, Twitter, Globe, ArrowUpRight, Download } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  website: Globe,
} as const;

export function ContactSection() {
  const { mode } = useMode();

  return (
    <section id="contact" className="container relative py-24 sm:py-32">
      <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl"
        />
        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <h2 className="mt-3 headline text-balance text-4xl sm:text-5xl md:text-6xl">
              Have a <span className="italic">quiet</span> problem worth solving?
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              I reply within a day or two. Short notes preferred.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:hello@yourname.dev" className="btn-primary focus-ring text-sm">
                Say hello
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={mode.resumeUrl} className="btn-ghost focus-ring text-sm">
                Download résumé ({mode.shortLabel})
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</p>
            <ul className="mt-4 divide-y divide-border/60">
              {socialLinks.map((s) => {
                const Icon = iconMap[s.icon] ?? Globe;
                return (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{s.label}</span>
                        <span className="text-sm text-muted-foreground">{s.handle}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
