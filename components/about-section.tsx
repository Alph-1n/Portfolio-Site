import { profile } from '@/data/profile';
import { education } from '@/data/education';

export function AboutSection() {
  return (
    <section id="about" className="container relative py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
          <h2 className="mt-3 headline text-balance text-4xl sm:text-5xl">
            The <span className="italic">quiet</span> details.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-balance text-lg leading-relaxed text-foreground/90 sm:text-xl">
            {profile.longBio}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 text-sm sm:grid-cols-4">
            <div>
              <p className="text-muted-foreground">Based in</p>
              <p className="mt-1 font-medium">{profile.location}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Timezone</p>
              <p className="mt-1 font-medium">{profile.timezone}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Availability</p>
              <p className="mt-1 font-medium">{profile.availability}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Email</p>
              <p className="mt-1 font-medium">
                <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Education</p>
            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li key={e.id} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/60 pb-4 last:border-none">
                  <div>
                    <p className="font-medium">{e.credential}</p>
                    <p className="text-sm text-muted-foreground">{e.institution}</p>
                    {e.detail && <p className="mt-1 text-xs text-muted-foreground">{e.detail}</p>}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {e.start} – {e.end}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
