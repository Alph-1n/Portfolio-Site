'use client';

import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 z-50 p-4 sm:p-6">
      <ThemeToggle />
    </header>
  );
}
