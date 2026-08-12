'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { getInitials } from '@/lib/utils';
import { Heart, LogOut, MapPin, Package, Settings } from 'lucide-react';

const menuItems = [
  {
    href: '/orders',
    label: 'Comenzile mele',
    icon: Package,
  },
  {
    href: '/wishlist',
    label: 'Lista de favorite',
    icon: Heart,
  },
  {
    href: '/addresses',
    label: 'Adrese salvate',
    icon: MapPin,
  },
  {
    href: '/settings',
    label: 'Setări cont',
    icon: Settings,
  },
];

export function UserMenu() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) return null;

  async function handleSignOut() {
    await authClient.signOut();

    router.push('/');
    router.refresh();
  }

  return (
    <div className='absolute right-0 top-[calc(100%+8px)] w-52 bg-[#F7F2EA] border border-[#E0D5C5] rounded-sm shadow-lg z-50 overflow-hidden'>
      <div className='flex items-center gap-3 px-4 py-3 bg-[#EDE5D8] border-b border-[#E0D5C5]'>
        <div className='w-9 h-9 rounded-full bg-[#6B4C3B] text-[#F7F2EA] flex items-center justify-center text-sm font-medium'>
          {getInitials(session.user.name ?? '')}
        </div>

        <div className='min-w-0'>
          <p className='text-sm font-medium text-[#6B4C3B] truncate'>
            {session.user.name}
          </p>

          <p className='text-[11px] text-[#A89080] truncate'>
            {session.user.email}
          </p>
        </div>
      </div>

      <div className='p-1.5'>
        {menuItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className='flex items-center gap-2.5 px-3 py-2 rounded-sm text-[12.5px] text-[#2C1F18] hover:bg-[#EDE5D8] transition-colors'
          >
            <Icon className='w-4 h-4 text-[#9B7060]' />
            {label}
          </Link>
        ))}

        <div className='h-px bg-[#E0D5C5] my-1.5 mx-2' />

        <button
          onClick={handleSignOut}
          type='button'
          className='w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-[12.5px] text-[#C4473A] hover:bg-[#F0E0DE] transition-colors'
        >
          <LogOut className='w-4 h-4' />
          Deconectare
        </button>
      </div>
    </div>
  );
}
