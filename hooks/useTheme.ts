'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/utils/theme-provider';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
