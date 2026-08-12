'use client';

import { mainLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className='flex gap-10 max-md:hidden'>
      {mainLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                'font-sans font-normal text-sm transition-colors relative',
                isActive
                  ? 't after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1.5px] after:bg-brand-accent'
                  : 'text-brand-text hover:text-brand-accent',
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
