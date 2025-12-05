import {CardProps} from '@/types/card';
import clsx from 'clsx';

export default function Card({children, className = ''}: CardProps) {
  return (
    <div
      className={clsx(
        'bg-[#FAF8ED] border-2 border-[#FFFFFF] shadow-[0_22px_90px_0_rgba(192,188,161,0.22)] rounded-[16px] pt-[8px] pr-[7px] pb-[11px] pl-[7px] gap-[14px]',
        className
      )}
    >
      {children}
    </div>
  );
}
