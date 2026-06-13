'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { ThemeSwitcher } from '@/components/shared/ThemeSwitcher';

export default function Home() {
  const t = useTranslations('home');
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>

      <div className="text-center">
        <h1 className="text-5xl font-bold mb-2">{t('title')}</h1>
        <p className="text-xl text-gray-600">{t('subtitle')}</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => router.push('/', { locale: 'en' })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          English
        </button>
        <button
          onClick={() => router.push('/', { locale: 'ar' })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          العربية
        </button>
      </div>
    </div>
  );
}
