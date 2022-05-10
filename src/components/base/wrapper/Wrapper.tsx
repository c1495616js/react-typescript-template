/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */
import React, { useLayoutEffect, useMemo } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import defaultTheme from '@/themes/default';
import { mergeDeep } from '@/utils/mergeDeep';
import { useDarkMode } from '@/hooks';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * Defines the styles used throughout the library
   */
  theme?: Record<string, unknown>;
  /**
   * Defines dark mode as the default theme
   */
  dark?: boolean;
  /**
   * Allows the change of theme, reading user's preferences and saving them
   */
  usePreferences?: boolean;
}

const Wrapper: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  theme: customTheme,
  dark,
  usePreferences = false,
}) => {
  const mergedTheme = mergeDeep(defaultTheme, customTheme);
  const [mode, setMode, toggleMode] = useDarkMode(usePreferences);

  useLayoutEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode('dark');
      }
    } else if (setMode != null) {
      setMode('light');
    }
  }, [dark]);

  const value = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default Wrapper;
