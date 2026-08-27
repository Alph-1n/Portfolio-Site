'use client';

import { profile } from '@/data/profile';
import { education } from '@/data/education';

export function AboutSection() {
  return (
    <section className="border-t border-border">
      <div className="container max-w-[1400px] px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bento-card p-6 sm:p-8">
            <h3 className="text-lg font-semibold mb-4">Location & Availability</h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Location</dt>
                <dd className="font-medium mt-0.5">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Timezone</dt>
                <dd className="font-medium mt-0.5">{profile.timezone}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Availability</dt>
                <dd className="font-medium mt-0.5">{profile.availability}</dd>
              </div>
            </dl>
          </div>

          <div className="bento-card p-6 sm:p-8">
            <h3 className="text-lg font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.id} className="border-b border-border pb-5 last:border-none last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-semibold">{e.credential}</h4>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {e.start} – {e.end}
                    </span>
                  </div>
                  <p className="text-sm text-coral mt-0.5">{e.institution}</p>
                  {e.detail && (
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{e.detail}</p>
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
