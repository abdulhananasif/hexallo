'use client';

import clsx from 'clsx';
import Button from '@/components/ui/Button';
import {NavItemsProps} from '@/types/navItems';

export default function NavItems({
  items,
  activeItem,
  onItemClick,
  activeClassName = '',
  inactiveClassName = '',
  itemClassName = '',
  renderItem,
}: NavItemsProps) {
  return (
    <>
      {items.map((item) => {
        const isActive = activeItem === item;
        return (
          <Button
            key={item}
            onClick={() => onItemClick(item)}
            className={clsx(
              itemClassName,
              isActive ? activeClassName : inactiveClassName
            )}
          >
            {renderItem ? renderItem(item, isActive) : item}
          </Button>
        );
      })}
    </>
  );
}
