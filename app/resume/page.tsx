'use client';

import Link from 'next/link';
import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { skillCategories } from '@/data/skills';
import { education } from '@/data/education';
import { projects } from '@/data/projects';
import {
  ArrowLeft,
  Printer,
  Download,
  Mail,
  MapPin,
  Linkedin,
  Github,
  CheckCircle2,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      {/* Non-printable Sticky Navigation Bar */}
      <nav className="print:hidden sticky top-0 z-50 py-4 glass border-b border-border/40 backdrop-blur-xl">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-xs font-medium text-foreground hover:bg-muted transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="btn-apple-primary text-xs py-2 px-4 shadow-md shadow-blue-500/20"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download / Print PDF</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Resume Canvas Container */}
      <main className="container max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 print:p-0 print:max-w-none">
        {/* Printable Resume Sheet */}
        <div className="glass-card rounded-[2rem] p-6 sm:p-12 border border-border/70 shadow-2xl shadow-black/40 bg-card/90 print:bg-white print:text-black print:p-6 print:border-none print:shadow-none print:rounded-none">
          
          {/* Header */}
          <header className="border-b border-border/60 pb-6 mb-6 print:border-neutral-300">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground print:text-black">
                  {profile.fullName.toUpperCase()}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-blue-500 print:text-blue-700 mt-1">
                  Software Developer & Full-Stack Engineer | AI-Assisted Workflows
                </p>
              </div>
              
              <div className="text-xs text-muted-foreground print:text-neutral-700 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-blue-500 print:text-neutral-600" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-blue-500 print:text-neutral-600" />
                  <a href={`mailto:${profile.email}`} className="hover:underline">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-3 pt-1">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 hover:underline inline-flex items-center gap-1"
                  >
                    <Linkedin className="h-3 w-3" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 hover:underline inline-flex items-center gap-1"
                  >
                    <Github className="h-3 w-3" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Statement */}
            <p className="mt-4 text-xs sm:text-sm text-foreground/85 print:text-neutral-800 leading-relaxed">
              {profile.bio} Comfortable across React, Next.js, TypeScript, Python, FastAPI, and PostgreSQL with a strong track record of using AI tools to accelerate development, rapid prototyping, and workflow validation.
            </p>
          </header>

          {/* Section: Professional Experience */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-blue-500 print:text-neutral-900 border-b border-border/40 print:border-neutral-300 pb-1.5">
              <Briefcase className="h-4 w-4" />
              <span>Professional Experience</span>
            </div>

            <div className="space-y-6">
              {experience.map((e) => (
                <div key={e.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base font-bold text-foreground print:text-black">
                      {e.role} <span className="font-medium text-blue-500 print:text-neutral-700">· {e.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground print:text-neutral-600">
                      {e.start} – {e.end} {e.location ? `| ${e.location}` : ''}
                    </span>
                  </div>

                  <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-foreground/80 print:text-neutral-800 list-disc list-outside ml-4">
                    {e.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Key Projects */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-blue-500 print:text-neutral-900 border-b border-border/40 print:border-neutral-300 pb-1.5">
              <Code2 className="h-4 w-4" />
              <span>Key Software Projects</span>
            </div>

            <div className="space-y-5">
              {projects.map((p) => (
                <div key={p.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground print:text-black text-sm">
                        {p.title}
                      </span>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="print:hidden text-[11px] text-emerald-500 hover:underline inline-flex items-center gap-0.5"
                        >
                          [Live Demo <ExternalLink className="h-2.5 w-2.5" />]
                        </a>
                      )}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground print:text-neutral-600">
                      {p.technologies.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <p className="mt-1 text-foreground/80 print:text-neutral-800 leading-relaxed">
                    {p.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Technical Skills */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-blue-500 print:text-neutral-900 border-b border-border/40 print:border-neutral-300 pb-1.5">
              <Sparkles className="h-4 w-4" />
              <span>Technical Skills & Tooling</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-3 rounded-xl bg-muted/30 border border-border/40 print:bg-transparent print:p-0 print:border-none">
                  <span className="font-bold text-foreground print:text-black block mb-1">
                    {cat.name}:
                  </span>
                  <span className="text-muted-foreground print:text-neutral-800 leading-relaxed">
                    {cat.skills.join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Education */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-blue-500 print:text-neutral-900 border-b border-border/40 print:border-neutral-300 pb-1.5">
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              {education.map((e) => (
                <div key={e.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-bold text-foreground print:text-black">{e.credential}</span>
                    <span className="text-muted-foreground print:text-neutral-700"> — {e.institution}</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground print:text-neutral-600">
                    {e.start} – {e.end}
                  </span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
