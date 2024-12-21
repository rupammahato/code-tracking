'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ThemeInitializer() {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    // Set initial theme on mount to prevent flashing
    if (!theme) {
      setTheme('dark');
    }
  }, [setTheme, theme]);

  return null;
}
