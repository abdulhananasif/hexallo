'use client';

import {useState, useCallback} from 'react';
import TopNavbar from '@/components/TopNavbar';
import SubNav from '@/components/SubNav';
import Logo from '@/components/ui/Logo';
import MainNav from '@/components/MainNav';
import {MAIN_NAV_ITEMS, SUB_NAV_ITEMS} from '@/constants/navbar';

export default function Navbar() {
  const [activeMainNav, setActiveMainNav] = useState('Explore');

  const handleMainNavClick = useCallback((item: string) => {
    setActiveMainNav(item);
  }, []);

  return (
    <nav className="w-full">
      <TopNavbar />

      <div className="bg-[#2F251D] text-white">
        <div className="w-full mx-auto overflow-hidden">
          <div className="flex items-center h-16 px-8 gap-[109px]">
            <Logo />
            <MainNav
              items={MAIN_NAV_ITEMS}
              activeItem={activeMainNav}
              onItemClick={handleMainNavClick}
            />
          </div>
        </div>
      </div>

      <SubNav items={SUB_NAV_ITEMS} />
    </nav>
  );
}
