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
      className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary border border-red-500"
    >
           <Image
        src={flagSrc}
        alt={altText}
        width={0}
        height={0}
        sizes="(max-width: 768px) 24px, 35px"
        className="w-6 md:w-9 h-auto rounded-full"
      />
    </Link>
  );
}
