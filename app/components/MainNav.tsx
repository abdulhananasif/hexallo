'use client';

import NavItems from '@/components/NavItems';
import {MainNavProps} from '@/types/mainNav';

export default function MainNav({
  items,
  activeItem,
  onItemClick,
}: MainNavProps) {
  return (
    <div className="flex items-center justify-between flex-1 min-w-0">
      <NavItems
        items={items}
        activeItem={activeItem}
        onItemClick={onItemClick}
        itemClassName="relative whitespace-nowrap shrink-0 flex-none px-0 py-0 rounded-none hover:opacity-100 box-border"
        activeClassName="font-semibold border-b-4 border-[#EFC96D] shadow-[0_4px_4.3px_0_rgba(174,111,40,0.1)]"
        renderItem={(item) => (
          <span className="font-inter font-normal text-xs leading-[140%] text-white">
            {item}
          </span>
        )}
      />
    </div>
  );
}
