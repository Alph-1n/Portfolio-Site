'use client';

import { experience } from '@/data/experience';

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="container max-w-[1400px] px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          <h2 className="section-heading">Experience</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed self-end">
            Hands-on software development across production web applications, publishing pipelines,
            and machine learning prototypes.
          </p>
        </div>

        <div className="space-y-4">
          {experience.map((e) => (
            <article key={e.id} className="bento-card p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{e.role}</h3>
                  <p className="text-coral font-medium mt-1">{e.company}</p>
                </div>
                <div className="text-sm text-muted-foreground shrink-0">
                  <p>{e.location}</p>
                  <p className="tabular-nums">
                    {e.start} – {e.end}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{e.summary}</p>

              <ul className="space-y-3 mb-6">
                {e.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border">
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
