import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="glass-card p-10 sm:p-14 rounded-3xl border border-border/70 max-w-md w-full shadow-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">404 Error</p>
        <h1 className="apple-headline text-4xl sm:text-5xl text-foreground font-extrabold">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          The requested page could not be located.
        </p>
        <Link href="/" className="btn-apple-primary mt-6 text-xs inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    </main>
  );
}

