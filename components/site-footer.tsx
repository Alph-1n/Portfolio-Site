import { profile } from '@/data/profile';

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <div className="container max-w-[1400px] px-4 sm:px-6">
        <p className="text-2xl font-semibold tracking-tight">{profile.shortName.toLowerCase()}</p>
        <p className="mt-3 text-xs text-muted-foreground max-w-md leading-relaxed">
          © {new Date().getFullYear()} {profile.fullName}. Software Developer & Full-Stack Engineer.
          Built with Next.js, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
