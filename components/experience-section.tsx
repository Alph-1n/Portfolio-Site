import { experience } from '@/data/experience';

export function ExperienceSection() {
  return (
    <section id="experience" className="container relative py-20 sm:py-28">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
        <h2 className="mt-3 headline text-balance text-4xl sm:text-5xl">
          A short arc of <span className="italic">deliberate</span> work.
        </h2>
      </div>

      <ol className="relative border-l border-border/60 pl-6 sm:pl-10">
        {experience.map((e) => (
          <li key={e.id} className="mb-12 last:mb-0">
            <span
              aria-hidden
              className="absolute -left-1.5 mt-1.5 inline-flex h-3 w-3 rounded-full bg-foreground/80 ring-4 ring-background"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-medium tracking-tight">
                {e.role}
                <span className="text-muted-foreground">&nbsp;· {e.company}</span>
              </h3>
              <span className="text-sm text-muted-foreground">
                {e.start} – {e.end}
              </span>
            </div>
            <p className="mt-2 text-sm text-foreground/85">{e.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {e.highlights.map((h, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {e.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/60 px-2 py-0.5 text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
