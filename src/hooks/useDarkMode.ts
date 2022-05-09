import { useEffect, useState } from 'react';

import type { Mode } from '@/types';

export const useDarkMode = (
  usePreferences: boolean
): [
  Mode,
  React.Dispatch<React.SetStateAction<Mode>> | null,
  (() => void) | null
] => {
  const [mode, setMode] = useState<Mode>(null);

  useEffect(() => {
    const userPreference =
      !!window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    setMode(
      // use stored theme; fallback to user preference
      window.localStorage.getItem('theme') ||
        (userPreference ? 'dark' : 'light')
    );
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem('theme', mode);
      document.documentElement.classList.add(mode);
    }
  }, [mode]);

  const toggleMode = () => {
    if (mode === 'light') {
      document.documentElement.className = '';
      document.documentElement.classList.add('dark');
      setMode('dark');
    } else {
      document.documentElement.className = '';
      document.documentElement.classList.add('light');
      setMode('light');
    }
  };
  if (!usePreferences) return [null, null, null];
  return [mode, setMode, toggleMode];
};

export default useDarkMode;
