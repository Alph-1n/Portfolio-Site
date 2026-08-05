import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects, getProjectBySlug } from '@/data/projects';
import { getCaseStudy } from '@/data/case-studies';
import { site } from '@/data/site';
import { profile } from '@/data/profile';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';

interface Params { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const title = `${project.title} — Case study`;
  return {
    title,
    description: project.subtitle,
    openGraph: {
      title,
      description: project.subtitle,
      url: `${site.url}/projects/${project.slug}`,
      images: project.images.length ? [project.images[0].src] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const caseStudy = project ? getCaseStudy(project.id) : undefined;
  if (!project || !caseStudy) notFound();

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.hero.title,
    author: { '@type': 'Person', name: profile.fullName },
    description: caseStudy.hero.lede,
    datePublished: `${project.year}-01-01`,
    mainEntityOfPage: `${site.url}/projects/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <div className="relative isolate">
        {/* Header */}
        <div className="fixed inset-x-0 top-0 z-40 py-4">
          <div className="container">
            <div className="glass-thin flex items-center justify-between rounded-full px-4 py-2">
              <Link href="/" className="focus-ring inline-flex items-center gap-2 text-sm text-foreground/90 hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Link>
              <span className="text-xs text-muted-foreground">{project.title}</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
          <div className="aurora" aria-hidden />
          <div className="grain" aria-hidden />
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{caseStudy.hero.eyebrow}</p>
              <h1 className="mt-6 headline text-balance text-5xl sm:text-6xl md:text-7xl">
                {caseStudy.hero.title}
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {caseStudy.hero.lede}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary focus-ring text-sm">
                    Visit live
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.sourceCodeUrl && (
                  <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost focus-ring text-sm">
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Cover image */}
        <section className="container relative">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/60">
            <div aria-hidden className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
            {project.images[0] && (
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                priority
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="relative z-10 object-cover mix-blend-luminosity opacity-90"
              />
            )}
          </div>
        </section>

        {/* Metrics */}
        <section className="container relative py-20">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {caseStudy.hero.metrics.map((m) => (
              <div key={m.label} className="glass-thin rounded-2xl p-6">
                <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{m.label}</dt>
                <dd className="mt-3 headline text-3xl sm:text-4xl">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 grid grid-cols-1 gap-6 text-sm sm:grid-cols-3">
            {caseStudy.timeline && (
              <div>
                <p className="text-muted-foreground">Timeline</p>
                <p className="mt-1 font-medium">{caseStudy.timeline}</p>
              </div>
            )}
            {caseStudy.team && (
              <div>
                <p className="text-muted-foreground">Team</p>
                <p className="mt-1 font-medium">{caseStudy.team}</p>
              </div>
            )}
            {caseStudy.myRole && (
              <div>
                <p className="text-muted-foreground">My role</p>
                <p className="mt-1 font-medium">{caseStudy.myRole}</p>
              </div>
            )}
          </div>
        </section>

        {/* Overview + Problem */}
        <section className="container relative py-8 sm:py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Overview</p>
            </div>
            <p className="lg:col-span-8 text-balance text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              {caseStudy.overview}
            </p>
          </div>

          <div className="my-16 hairline mx-auto max-w-6xl" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The problem</p>
            </div>
            <p className="lg:col-span-8 text-balance text-lg leading-relaxed text-foreground/90 sm:text-xl">
              {caseStudy.problem}
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="container relative py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Approach</p>
          <h2 className="mt-3 headline text-balance text-4xl sm:text-5xl">
            How the <span className="italic">work</span> was shaped.
          </h2>

          <div className="mt-12 space-y-10">
            {caseStudy.approach.map((s, i) => (
              <article key={i} className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs text-muted-foreground">0{i + 1}</p>
                  <h3 className="mt-2 headline text-2xl sm:text-3xl">{s.heading}</h3>
                </div>
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">{s.body}</p>
                  {s.bullets && (
                    <ul className="space-y-2 pt-2">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tech + Responsibilities */}
        <section className="container relative py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tech</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Responsibilities</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                {project.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="container relative py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Outcomes</p>
          <h2 className="mt-3 headline text-balance text-4xl sm:text-5xl">
            What <span className="italic">actually</span> shipped.
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {caseStudy.outcomes.map((o, i) => (
              <li key={i} className="glass-thin rounded-2xl p-6">
                <p className="font-mono text-xs text-muted-foreground">Result 0{i + 1}</p>
                <p className="mt-3 text-base leading-relaxed text-foreground/90">{o}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Reflections */}
        <section className="container relative py-20">
          <div className="glass rounded-[2rem] p-8 sm:p-14">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Reflections</p>
            <p className="mt-6 headline text-balance text-3xl italic leading-tight text-foreground/90 sm:text-4xl md:text-5xl">
              “{caseStudy.reflections}”
            </p>
            <p className="mt-8 text-sm text-muted-foreground">— {profile.fullName}</p>
          </div>
        </section>

        {/* Next projects */}
        <section className="container relative py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Keep reading</p>
          <h2 className="mt-3 headline text-balance text-4xl sm:text-5xl">Other work.</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                className="focus-ring group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/30 p-6 transition hover:bg-card/60 sm:p-8"
              >
                <div className={`mb-6 aspect-[16/9] w-full rounded-2xl bg-gradient-to-br ${p.accent}`} />
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="headline text-2xl">{p.title}</h3>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.subtitle}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  Read case study
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
