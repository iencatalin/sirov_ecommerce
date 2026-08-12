import { mainLinks } from '@/constants';
import Link from 'next/link';

export function MobileMenu() {
  return (
    <div className='md:hidden'>
      <div className='absolute right-5 w-48 bg-brand-muted py-5 shadow-md rounded-md p-4 text-slate-100 text-center z-50'>
        <ul className='flex flex-col gap-5'>
          {mainLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
