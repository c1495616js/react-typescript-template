/* eslint-disable react/require-default-props */
import React from 'react';

import type { Mode } from '@/types';
import defaultTheme from '@/themes/default';

interface ThemeContextInterface {
  theme: any;
  mode?: Mode;
  toggleMode?: any;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
  theme: defaultTheme,
});

interface ThemeProviderProps {
  children: React.ReactNode;
  value?: any;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  value,
}) => <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
