'use client';

import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-full shadow-lg p-2 flex gap-2">
        <Link
          href={{ pathname, query }}
          as={asPath}
          locale="en"
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            locale === 'en'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          EN
        </Link>
        <Link
          href={{ pathname, query }}
          as={asPath}
          locale="fr"
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            locale === 'fr'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          FR
        </Link>
      </div>
    </div>
  );
} 