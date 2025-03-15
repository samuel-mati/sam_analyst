'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'light' | 'dark' | 'system';

interface ThemeContextType {
  isDarkMode: boolean;
  theme: ThemeType;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('system');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Apply theme based on system or selected value
  useEffect(() => {
    const applyTheme = () => {
      const root = document.documentElement;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const useDark = theme === 'dark' || (theme === 'system' && prefersDark);

      root.classList.toggle('dark', useDark);
      setIsDarkMode(useDark);
    };

    applyTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    setMounted(true);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const resolvedTheme: 'light' | 'dark' = isDarkMode ? 'dark' : 'light';

  const value: ThemeContextType = {
    theme,
    isDarkMode,
    resolvedTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={mounted ? 'contents' : 'hidden'}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
