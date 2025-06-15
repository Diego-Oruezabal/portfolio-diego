'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const isSpanish = pathname.startsWith('/es');
  const switchTo = isSpanish
    ? pathname.replace(/^\/es/, '/en')
    : pathname.replace(/^\/en/, '/es');

  const flagSrc = isSpanish ? '/usa.png' : '/es.png';
  const altText = isSpanish ? 'Switch to English' : 'Cambiar a Español';

  return (
    <Link
      href={switchTo}
      className="px-3 py-2 rounded-full hover:bg-secondary flex items-center justify-center"
    >
      <img
        src={flagSrc}
        alt={altText}
        className="w-9 h-9 rounded-full object-cover"
      />
    </Link>
  );
}
