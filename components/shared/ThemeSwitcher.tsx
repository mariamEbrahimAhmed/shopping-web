'use client';

import { useTheme } from '@/hooks/useTheme';
import { useTranslations } from 'next-intl';

export function ThemeSwitcher() {
  const { theme, toggleTheme, mounted } = useTheme();
  const t = useTranslations('theme');

  if (!mounted) {
    return (
      <button
        disabled
        aria-label="Loading theme"
        className="p-2 rounded-lg bg-gray-200"
      >
        ◐
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={t('toggle')}
      className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
