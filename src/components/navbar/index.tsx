'use client';

import { useState } from 'react';

import { NavActions } from './NavActions';
import { UserMenu } from './UserMenu';
import { MobileMenu } from './MobileMenu';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';

export function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  return (
    <nav className='border-b border-brand-text/30'>
      <div className='main-container flex justify-between items-center py-2 relative'>
        <NavLogo />
        <NavLinks />

        <NavActions
          openMobileMenu={openMobileMenu}
          openUserMenu={openUserMenu}
          onUserMenuToggle={() => setOpenUserMenu((prev) => !prev)}
          onMobileMenuToggle={() => setOpenMobileMenu((prev) => !prev)}
        />

        {openUserMenu && <UserMenu />}
      </div>

      {openMobileMenu && <MobileMenu />}
    </nav>
  );
}

export default Navbar;
