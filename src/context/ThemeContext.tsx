'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  theme: 'light' | 'dark' | 'system';
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);

    const root = window.document.documentElement;
    root.classList.toggle('dark', prefersDark);

    setMounted(true);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newPrefersDark = e.matches;
      setIsDarkMode(newPrefersDark);
      root.classList.toggle('dark', newPrefersDark);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // theme is set to 'system' since we're reflecting system preference only
  const theme: 'system' = 'system';
  const resolvedTheme: 'light' | 'dark' = isDarkMode ? 'dark' : 'light';

  const value: ThemeContextType = {
    isDarkMode,
    theme,
    resolvedTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={mounted ? 'contents' : 'hidden'}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
