'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const HISTORY_PATH = {
  CURRENT: 'currentPath',
  PREV: 'prevPath',
  TARGET: 'targetPath',
};

const usePathHistory = () => {
  const pathname = usePathname();

  useEffect(() => {
    storePathValues();
  }, [pathname]);

  const storePathValues = () => {
    const storage = globalThis?.sessionStorage;

    if (!storage) return;

    const prevPath = storage.getItem(HISTORY_PATH.CURRENT);
    storage.setItem(HISTORY_PATH.PREV, prevPath || pathname);
    storage.setItem(HISTORY_PATH.CURRENT, globalThis.location.pathname);
  };
};

export default usePathHistory;
