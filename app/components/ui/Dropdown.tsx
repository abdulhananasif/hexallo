'use client';

import {useRef, useEffect} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import {DROPDOWN_MENU} from '@/constants/navbar';
import {DropdownProps} from '@/types/dropdown';

export default function Dropdown({
  isOpen,
  onToggle,
  children,
  menuContent,
  minWidth = 'min-w-[200px]',
}: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onToggle();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div className="relative" ref={ref}>
      <div
        className="flex items-center space-x-1.5 cursor-pointer"
        onClick={onToggle}
      >
        {children}
        <Image
          src="/dropdown.svg"
          alt="Dropdown"
          width={15}
          height={21}
          className={clsx('w-[15px] h-[21px] transition-transform', {
            'rotate-180': isOpen,
          })}
        />
      </div>
      {isOpen && (
        <div className={clsx(DROPDOWN_MENU, minWidth)}>{menuContent}</div>
      )}
    </div>
  );
}
