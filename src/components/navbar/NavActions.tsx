'use client';

import { Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { getInitials } from '@/lib/utils';

interface NavActionsProps {
  openMobileMenu: boolean;
  openUserMenu: boolean;
  onUserMenuToggle: () => void;
  onMobileMenuToggle: () => void;
}

export function NavActions({
  openMobileMenu,
  openUserMenu,
  onUserMenuToggle,
  onMobileMenuToggle,
}: NavActionsProps) {
  const { data: session, isPending } = authClient.useSession();

  return (
    <div className='flex items-center gap-2'>
      <button
        type='button'
        aria-label='Favorite'
        className='w-9 h-9 flex items-center justify-center rounded-sm text-brand-text hover:bg-[#EDE5D8] transition-colors'
      >
        <Heart className='w-5 h-5' />
      </button>

      <button
        type='button'
        aria-label='Coș de cumpărături'
        className='relative w-9 h-9 flex items-center justify-center rounded-sm text-brand-text hover:bg-[#EDE5D8] transition-colors'
      >
        <ShoppingBag className='w-5 h-5' />
        <span className='absolute top-1 right-1 w-3.5 h-3.5 bg-brand-accent text-slate-100 rounded-full text-[8px] flex items-center justify-center font-medium'>
          3
        </span>
      </button>

      <div className='hidden md:block w-px h-5 bg-[#E0D5C5] mx-1' />

      {session == null && !isPending && (
        <div className='hidden md:flex items-center gap-2'>
          <Link
            href='/auth/sign-in'
            className='text-xs font-medium text-[#6B4C3B] border border-[#D5C8B5] rounded-sm px-3 py-1.5 hover:border-[#9B7060] transition-colors'
          >
            conectare
          </Link>

          <Link
            href='/auth/sign-up'
            className='text-xs font-medium bg-brand-accent text-slate-100 rounded-sm px-3 py-1.5 hover:opacity-90 transition-opacity'
          >
            cont nou
          </Link>
        </div>
      )}

      {session && (
        <button
          onClick={onUserMenuToggle}
          type='button'
          aria-label='Meniu cont'
          aria-expanded={openUserMenu}
          className='hidden md:flex items-center gap-2 border border-[#E0D5C5] rounded-sm pl-1 pr-2.5 py-1 hover:bg-[#EDE5D8] hover:border-[#D5C8B5] transition-all'
        >
          <div className='w-7 h-7 rounded-full bg-[#6B4C3B] text-[#F7F2EA] flex items-center justify-center text-[10px] font-medium'>
            {getInitials(session.user.name ?? '')}
          </div>

          <span className='text-[12.5px] text-[#2C1F18] font-medium'>
            {session.user.name?.split(' ')[0]}
          </span>

          <svg
            width='10'
            height='6'
            viewBox='0 0 10 6'
            fill='none'
            className='text-[#A89080]'
          >
            <path
              d='M1 1l4 4 4-4'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
        </button>
      )}

      {isPending && (
        <div className='hidden md:flex'>
          <div className='w-20 h-8 bg-[#EDE5D8] rounded-sm animate-pulse' />
        </div>
      )}

      <button
        className='md:hidden w-9 h-9 flex items-center justify-center rounded-sm text-[#6B4C3B] hover:bg-[#EDE5D8] transition-colors'
        onClick={onMobileMenuToggle}
        aria-label='Meniu mobil'
        type='button'
        aria-expanded={openMobileMenu}
      >
        {openMobileMenu ? (
          <X className='w-5 h-5' />
        ) : (
          <Menu className='w-5 h-5' />
        )}
      </button>
    </div>
  );
}
