import Image from 'next/image';
import ExclusiveCard from '@/components/ExclusiveCard';
import {ExclusivesSectionProps} from '@/types/exclusivesSection';

export default function ExclusivesSection({
  title,
  cards,
}: ExclusivesSectionProps) {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center">
        <h2 className="font-bold text-[18px] leading-[130%] text-[#484848] font-montserrat">
          {title}
        </h2>
        <Image src="/expandable.svg" alt="Expand" width={30} height={28} />
      </div>
      <div className="grid grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <ExclusiveCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
