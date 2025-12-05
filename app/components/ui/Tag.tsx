import {TagProps} from '@/types/tag';
import clsx from 'clsx';

export default function Tag({title, className = ''}: TagProps) {
  return (
    <span
      className={clsx(
        'w-fit rounded-[8px] bg-[#F7E4B6] pt-[5px] pr-[9px] pb-[5px] pl-[9px] font-normal text-[11px] leading-[120%] text-[#000000] font-montserrat',
        className
      )}
    >
      {title}
    </span>
  );
}

