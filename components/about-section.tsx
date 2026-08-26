'use client';

import { profile } from '@/data/profile';
import { education } from '@/data/education';
import { User, GraduationCap, MapPin, Clock, Mail, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="container max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
            <User className="h-3.5 w-3.5" />
            <span>Developer Overview</span>
          </div>
          <h2 className="apple-headline text-3xl sm:text-4xl md:text-5xl text-foreground">
            Engineering Background.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
            Grounded in software fundamentals, rapid prototyping, and shipping scalable web applications.
          </p>

          {/* Quick Details Bento */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="glass-card rounded-2xl p-4 border border-border/60">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                <MapPin className="h-3.5 w-3.5 text-blue-500" />
                <span>Location</span>
              </div>
              <p className="font-semibold text-sm text-foreground">{profile.location}</p>
            </div>

            <div className="glass-card rounded-2xl p-4 border border-border/60">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                <Clock className="h-3.5 w-3.5 text-blue-500" />
                <span>Timezone</span>
              </div>
              <p className="font-semibold text-sm text-foreground">{profile.timezone}</p>
            </div>

            <div className="glass-card rounded-2xl p-4 border border-border/60 col-span-2">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>Availability</span>
              </div>
              <p className="font-semibold text-sm text-foreground">{profile.availability}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Education */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Bio card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-border/60">
            <h3 className="text-lg font-bold text-foreground mb-3">About Me</h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              {profile.longBio}
            </p>
          </div>

          {/* Education card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-border/60">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.id} className="border-b border-border/40 pb-5 last:border-none last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-bold text-sm sm:text-base text-foreground">
                      {e.credential}
                    </h4>
                    <span className="text-xs font-mono text-muted-foreground">
                      {e.start} – {e.end}
                    </span>
                  </div>
                  <p className="text-sm text-blue-500 font-medium mt-0.5">
                    {e.institution}
                  </p>
                  {e.detail && (
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {e.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

