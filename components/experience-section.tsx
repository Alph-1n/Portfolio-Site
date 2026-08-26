'use client';

import { experience } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="container max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Career & Experience</span>
          </div>
          <h2 className="apple-headline text-3xl sm:text-4xl md:text-5xl text-foreground">
            Work Experience.
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
          Hands-on software development experience across production web applications, publishing pipelines, and machine learning prototypes.
        </p>
      </div>

      {/* Timeline items */}
      <div className="relative border-l-2 border-blue-500/30 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
        {experience.map((e) => (
          <div key={e.id} className="relative group">
            {/* Glowing Timeline node dot */}
            <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-background border-2 border-blue-500 shadow-md shadow-blue-500/50 group-hover:scale-125 transition-transform">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            </div>

            <div className="glass-card rounded-[2rem] p-6 sm:p-8 border border-border/70 shadow-xl group-hover:border-blue-500/40">
              {/* Header: Role + Company + Dates */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground group-hover:text-blue-400 transition-colors">
                    {e.role}
                  </h3>
                  <div className="text-sm font-bold text-blue-400 mt-0.5 flex items-center gap-1.5">
                    <Building className="h-3.5 w-3.5" />
                    <span>{e.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                  {e.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-blue-400" />
                      {e.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1 font-mono bg-muted/60 px-2.5 py-1 rounded-full border border-border/40">
                    <Calendar className="h-3 w-3 text-blue-400" />
                    {e.start} – {e.end}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-foreground/90 leading-relaxed mb-5">
                {e.summary}
              </p>

              {/* Highlights */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground mb-6">
                {e.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span className="text-foreground/85">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/60 bg-muted/60 px-2.5 py-0.5 text-[11px] font-semibold text-foreground/80 hover:border-blue-400 hover:text-blue-400 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


