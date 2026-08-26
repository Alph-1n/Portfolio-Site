import { profile } from '@/data/profile';
import { site } from '@/data/site';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/50 py-12 bg-background/50 backdrop-blur-md">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
          <span className="hidden sm:inline text-border">•</span>
          <p className="flex items-center gap-1">
            Engineered with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

