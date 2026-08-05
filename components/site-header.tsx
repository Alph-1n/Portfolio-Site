'use client';

import Link from 'next/link';
import { useMode } from './mode-context';
import { ThemeToggle } from './theme-toggle';
import { primaryNav } from '@/data/navigation';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function SiteHeader() {
  const { mode } = useMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="container">
        <div
          className={cn(
            'flex items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-300',
            scrolled ? 'glass-thin shadow-sm' : 'bg-transparent',
          )}
        >
          <Link href="/" className="focus-ring flex items-center gap-2 py-1">
            <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary/40">
              <span className="absolute inset-[3px] rounded-full bg-background/70 backdrop-blur" />
              <span className="relative text-[10px] font-medium tracking-tight">
                {profile.shortName.replace('.', '')}
              </span>
            </span>
            <span className="text-sm font-medium tracking-tight">{profile.fullName}</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">
              &nbsp;· {mode.shortLabel}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={mode.resumeUrl}
              className="hidden focus-ring rounded-full border border-border/70 bg-card/40 px-3.5 py-1.5 text-xs font-medium backdrop-blur-md transition hover:bg-muted md:inline-flex"
            >
              Résumé
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
