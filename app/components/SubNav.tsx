'use client';

import {useState} from 'react';
import NavItems from '@/components/NavItems';
import {SubNavProps} from '@/types/subNav';

export default function SubNav({items}: SubNavProps) {
  const [activeSubNav, setActiveSubNav] = useState('Home');

  return (
    <div className="bg-[#F2F2F2] border-b border-gray-200 flex items-center h-12 px-8">
      <div className="flex items-center space-x-6 overflow-x-auto scrollbar-hide flex-1">
        <NavItems
          items={items}
          activeItem={activeSubNav}
          onItemClick={setActiveSubNav}
          itemClassName="relative whitespace-nowrap px-3 py-2 text-sm transition-colors box-border"
          activeClassName="text-gray-900 font-medium border-b-[3px] border-[#AE6F28] shadow-[0_4px_4.3px_0_rgba(174,111,40,0.1)]"
          inactiveClassName="text-gray-600 hover:text-gray-900"
        />
      </div>
    </div>
  );
}
