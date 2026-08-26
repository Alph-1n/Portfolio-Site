import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects, getProjectBySlug } from '@/data/projects';
import { site } from '@/data/site';
import { profile } from '@/data/profile';
import { ArrowLeft, ArrowUpRight, Github, Sparkles, CheckCircle2, Terminal, Layers } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';

interface Params { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const title = `${project.title} — Software Architecture`;
  return {
    title,
    description: project.subtitle,
    openGraph: {
      title,
      description: project.subtitle,
      url: `${site.url}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="relative isolate min-h-screen">
      {/* Header bar */}
      <div className="fixed inset-x-0 top-0 z-40 py-4">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <div className="glass flex items-center justify-between rounded-full px-5 py-2.5 shadow-lg">
            <Link
              href="/#projects"
              className="focus-ring inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Projects</span>
            </Link>
            <span className="text-xs font-semibold text-foreground truncate max-w-[200px]">
              {project.title}
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="aurora" aria-hidden />
        <div className="grain" aria-hidden />
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
              {project.category}
            </span>
            <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
            {project.isWorkingDemo && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-500 backdrop-blur-md">
                <Sparkles className="h-3 w-3" />
                Live Demo
              </span>
            )}
          </div>

          <h1 className="apple-headline text-balance text-4xl sm:text-5xl md:text-6xl text-foreground">
            {project.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {project.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-primary text-sm"
              >
                <span>Open Live Application</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-secondary text-sm"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Content & Architecture Breakdown */}
      <section className="container max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Description & Highlights */}
          <div className="lg:col-span-8 space-y-8">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-border/60">
              <h2 className="text-lg font-bold text-foreground mb-4">Project Overview</h2>
              <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
                {project.description}
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-border/60">
              <h2 className="text-lg font-bold text-foreground mb-4">Technical Highlights & Implementation</h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Tech Stack & Meta */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card rounded-3xl p-6 border border-border/60">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 border border-border/60">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Developer Contact
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Have questions regarding the architecture or implementation of this project?
              </p>
              <a
                href={`mailto:${profile.email}?subject=Regarding%20${encodeURIComponent(project.title)}`}
                className="btn-apple-secondary text-xs w-full justify-center"
              >
                Inquire via Email
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Other Projects */}
      <section className="container max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border/40">
        <h2 className="apple-headline text-2xl font-bold text-foreground mb-6">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.slug}`}
              className="glass-card group p-6 rounded-3xl border border-border/60 hover:border-blue-500/40 transition block"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-medium text-blue-500">{p.category}</span>
                <span className="text-xs text-muted-foreground font-mono">{p.year}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-blue-500 transition-colors">
                {p.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                {p.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
