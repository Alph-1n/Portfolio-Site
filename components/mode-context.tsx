'use client';

import { createContext, useContext, useEffect, useMemo, useState, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { ModeId, RoleMode } from '@/lib/types';
import { modes, getMode } from '@/data/modes';

interface ModeContextValue {
  mode: RoleMode;
  modeId: ModeId;
  setMode: (id: ModeId) => void;
  allModes: RoleMode[];
  isPending: boolean;
}

const ModeContext = createContext<ModeContextValue | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const initial = (params.get('mode') as ModeId) || 'product';
  const [modeId, setModeId] = useState<ModeId>(initial);

  // Keep local state in sync if URL changes externally.
  useEffect(() => {
    const q = (params.get('mode') as ModeId) || 'product';
    if (q !== modeId) setModeId(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const setMode = (id: ModeId) => {
    setModeId(id);
    const sp = new URLSearchParams(params.toString());
    sp.set('mode', id);
    startTransition(() => {
      router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
    });
  };

  const value = useMemo<ModeContextValue>(
    () => ({ mode: getMode(modeId), modeId, setMode, allModes: modes, isPending }),
    [modeId, isPending],
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error('useMode must be used inside ModeProvider');
  return ctx;
}
