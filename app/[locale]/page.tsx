'use client';

import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/routing';

export default function Home() {
  const t = useTranslations('home');
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-2">{t('title')}</h1>
        <p className="text-xl text-gray-600">{t('subtitle')}</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => router.push('/', { locale: 'en' })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          English
        </button>
        <button
          onClick={() => router.push('/', { locale: 'ar' })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          العربية
        </button>
      </div>
    </div>
  );
}
