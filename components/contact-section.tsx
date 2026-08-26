'use client';

import { useState } from 'react';
import Link from 'next/link';
import { profile } from '@/data/profile';
import { socialLinks } from '@/data/social';
import { Github, Linkedin, Mail, ArrowUpRight, Download, Check, Copy, MessageSquare, FileText } from 'lucide-react';


const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="container max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 relative">
      <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14 border border-border/70 shadow-2xl">
        {/* Specular gradient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent blur-3xl"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Main CTAs */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Get in Touch</span>
            </div>
            
            <h2 className="apple-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
              Let&apos;s build something <span className="text-blue-500">exceptional</span>.
            </h2>
            
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Open for full-time Software Engineer, Frontend Engineer, and Full-Stack opportunities. Feel free to reach out directly via email or LinkedIn.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="btn-apple-primary text-sm py-3 px-6 shadow-md"
              >
                <Mail className="h-4 w-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={copyEmail}
                className="btn-apple-secondary text-sm py-3 px-5"
                aria-label="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span className="text-emerald-500">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-muted-foreground" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <Link
                href="/resume"
                className="btn-apple-secondary text-sm py-3 px-5"
              >
                <FileText className="h-4 w-4 text-blue-400" />
                <span>View Résumé</span>
              </Link>

            </div>
          </div>

          {/* Right Column: Social Links Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
              Connect Directly
            </p>
            
            {socialLinks.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Mail;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card group flex items-center justify-between p-4 rounded-2xl border border-border/60 hover:border-blue-500/40 transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/60 text-foreground group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground group-hover:text-blue-500 transition-colors">
                        {s.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {s.handle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-500" />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

