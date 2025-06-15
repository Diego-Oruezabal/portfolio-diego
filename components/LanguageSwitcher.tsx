'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const isSpanish = pathname.startsWith('/es');
  const switchTo = isSpanish
    ? pathname.replace(/^\/es/, '/en')
    : pathname.replace(/^\/en/, '/es');
  const flagSrc = isSpanish ? '/USA.png' : '/ES.png';
  const altText = isSpanish ? 'Switch to English' : 'Cambiar a Español';
  return (
    <Link
      href={switchTo}
      className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary"
    >
           <Image
        src={flagSrc}
        alt={altText}
        width={35}
        height={35}
        className="rounded-full"
      />
    </Link>
  );
}
