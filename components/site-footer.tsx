import { profile } from '@/data/profile';
import { site } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.fullName}. Handcrafted with care.
        </p>
        <p className="font-mono">{site.domain}</p>
      </div>
    </footer>
  );
}
