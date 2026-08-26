'use client';

import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/data/profile';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Sparkles,
  Terminal,
  Layers,
  CheckCircle2,
  ExternalLink,
  FileText,
  Zap,
  Globe,
} from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Dynamic ambient backgrounds */}
      <div className="aurora" aria-hidden />
      <div className="grain" aria-hidden />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" aria-hidden />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs text-emerald-400 backdrop-blur-md mb-8 shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-tight">Available for Software Engineering Roles</span>
            </div>

            {/* Main Apple-style Headline */}
            <h1 className="apple-headline text-balance text-4xl sm:text-5xl md:text-6xl lg:text-[4.3rem] text-foreground tracking-tight">
              Software Developer.
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mt-1">
                Workflow-Driven Systems.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              1+ year of engineering experience building AI-assisted web applications, full-stack APIs, and digital publishing pipelines across React, Next.js, Python, FastAPI, and PostgreSQL.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a href="#projects" className="btn-apple-primary w-full sm:w-auto">
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://finance-tracker-app-lime.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-secondary w-full sm:w-auto group border-emerald-500/30 hover:border-emerald-500/60"
              >
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <span>Live Finance App</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-emerald-400" />
              </a>

              <Link href="/resume" className="btn-apple-secondary w-full sm:w-auto">
                <FileText className="h-4 w-4 text-blue-400" />
                <span>View Résumé</span>
              </Link>
            </div>

            {/* Quick Tech Badge Stack with vibrant accents */}
            <div className="mt-10 pt-8 border-t border-border/50 w-full flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground font-mono mr-2 flex items-center gap-1">
                <Zap className="h-3.5 w-3.5 text-amber-400" /> Core Tech:
              </span>
              {[
                { name: 'React', color: 'text-sky-400 border-sky-500/20 bg-sky-500/10' },
                { name: 'Next.js', color: 'text-foreground border-border/60 bg-muted/40' },
                { name: 'TypeScript', color: 'text-blue-400 border-blue-500/20 bg-blue-500/10' },
                { name: 'Python', color: 'text-amber-400 border-amber-500/20 bg-amber-500/10' },
                { name: 'FastAPI', color: 'text-teal-400 border-teal-500/20 bg-teal-500/10' },
                { name: 'PostgreSQL', color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/10' },
                { name: 'Linux', color: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/10' },
                { name: 'AI Workflows', color: 'text-purple-400 border-purple-500/20 bg-purple-500/10' },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition hover:scale-105 ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Apple-style Interactive Bento Card / Portrait Widget */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Portrait & Identity Card */}
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-7 border border-blue-500/30 shadow-2xl shadow-blue-500/10">
              
              {/* Background gradient orb */}
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

              <div className="flex items-center gap-5 relative z-10">
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-blue-400/40 shadow-xl shadow-blue-500/20">
                  <Image
                    src={profile.headshot}
                    alt={profile.fullName}
                    fill
                    priority
                    sizes="(max-width: 768px) 120px, 150px"
                    className="object-cover object-top transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-semibold mb-1">
                    <Code2 className="h-3.5 w-3.5" />
                    <span>Full-Stack Developer</span>
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground">
                    {profile.fullName}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                    <Globe className="h-3 w-3 text-muted-foreground" />
                    {profile.location}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-2.5 py-0.5">
                      <CheckCircle2 className="h-3 w-3" />
                      1+ Year Exp.
                    </span>
                    <span className="text-[11px] font-medium text-foreground/80 bg-muted/70 rounded-full px-2.5 py-0.5 border border-border/50">
                      Bridge Connectivity
                    </span>
                  </div>
                </div>
              </div>

              {/* Dynamic Live Project Callout Card inside widget */}
              <div className="mt-6 pt-5 border-t border-border/40 relative z-10">
                <div className="rounded-2xl bg-gradient-to-br from-emerald-500/15 via-card/70 to-blue-500/15 border border-emerald-500/30 p-4 transition hover:border-emerald-500/60 shadow-lg shadow-emerald-500/5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Featured Live App
                    </span>
                    <a
                      href="https://finance-tracker-app-lime.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 transition"
                    >
                      <span>Open Demo</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <p className="mt-1.5 text-sm font-bold text-foreground">
                    Personal Finance Tracker
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    Real-time transaction tracking, budget category breakdown, and responsive spending analytics deployed on Vercel.
                  </p>
                </div>
              </div>

              {/* Fast Stats Row */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center pt-2 relative z-10">
                <div className="rounded-xl bg-card/60 p-2.5 border border-border/50">
                  <div className="text-lg font-extrabold text-blue-400">1+</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Yrs Exp</div>
                </div>
                <div className="rounded-xl bg-card/60 p-2.5 border border-border/50">
                  <div className="text-lg font-extrabold text-purple-400">5+</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Projects</div>
                </div>
                <div className="rounded-xl bg-card/60 p-2.5 border border-border/50">
                  <div className="text-lg font-extrabold text-emerald-400">100%</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Quality</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


