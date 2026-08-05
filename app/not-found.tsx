import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">404</p>
      <h1 className="mt-4 headline text-5xl sm:text-6xl">Project not found.</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The case study you were looking for may have moved. Head back home to browse featured work.
      </p>
      <Link href="/" className="btn-primary mt-8 text-sm">
        Return home
      </Link>
    </main>
  );
}
