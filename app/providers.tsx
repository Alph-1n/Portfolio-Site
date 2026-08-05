'use client';

import { ThemeProvider } from 'next-themes';
import { Suspense } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Suspense fallback={null}>{children}</Suspense>
    </ThemeProvider>
  );
}
