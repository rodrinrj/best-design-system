import React, { useState } from 'react';
import { baseTheme, darkTheme, type Tokens } from './tokens';

export const Themes = {
  LIGHT: baseTheme,
  DARK: darkTheme,
} as const;
type ThemeOptions = (typeof Themes)[keyof typeof Themes];

interface ThemeProviderProps {
  theme?: Tokens;
  children: React.ReactNode;
}

const ThemeContext = React.createContext<{ theme: Tokens; setTheme: (name: ThemeOptions) => void }>(
  { theme: baseTheme, setTheme: () => null },
);

export function ThemeProvider({ theme = Themes.LIGHT, children }: ThemeProviderProps) {
  const [currentTheme, setTheme] = useState<ThemeOptions>(theme);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside a ThemeProvider');
  return context;
}
