'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { primaryNav } from '@/data/navigation';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Github, Linkedin, FileText, Menu, X } from 'lucide-react';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5',
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={cn(
            'flex items-center justify-between gap-4 rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300',
            scrolled
              ? 'glass shadow-lg shadow-black/5 dark:shadow-black/40'
              : 'bg-background/40 backdrop-blur-md border border-border/40',
          )}
        >
          {/* Logo / Name */}
          <Link href="/" className="focus-ring group flex items-center gap-3">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-sm shadow-blue-500/20 text-white font-semibold text-xs transition duration-300 group-hover:scale-105">
              AV
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-foreground group-hover:text-blue-500 transition-colors">
                {profile.fullName}
              </span>
              <span className="text-[10px] text-muted-foreground hidden sm:inline -mt-0.5">
                Software Developer
              </span>
            </div>
          </Link>

          {/* Nav items */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {primaryNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition hover:text-foreground hover:bg-muted/60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions: Socials, Resume, Theme */}
          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex focus-ring rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex focus-ring rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <Link
              href="/resume"
              className="hidden lg:inline-flex items-center gap-1.5 focus-ring rounded-full bg-foreground text-background px-3.5 py-1.5 text-xs font-semibold transition hover:opacity-90 shadow-sm"
            >
              <FileText className="h-3.5 w-3.5 text-blue-500" />
              <span>Résumé</span>
            </Link>

            <ThemeToggle />

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden focus-ring rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 shadow-xl border border-border/80 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {primaryNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/80 transition"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-border/50 flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
                <Link
                  href="/resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-apple-primary text-xs py-1.5 px-3.5"
                >
                  View Résumé
                </Link>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}

