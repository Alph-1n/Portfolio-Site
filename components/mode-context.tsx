'use client';

// Deprecated legacy mode context - unified software engineer portfolio
export const useMode = () => ({
  mode: { id: 'development', shortLabel: 'Engineering' },
  modeId: 'development',
  setMode: () => {},
  allModes: [],
  isPending: false,
});

export function ModeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

