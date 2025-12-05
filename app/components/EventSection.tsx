import Image from 'next/image';
import EventCard from '@/components/EventCard';
import {EventSectionProps} from '@/types/eventSection';

export default function EventSection({title, events}: EventSectionProps) {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center">
        <h2 className="w-[179px] h-[23px] font-bold text-[18px] leading-[130%] text-[#484848] flex-none order-0 grow-0 font-montserrat">
          {title}
        </h2>
        <Image src="/expandable.svg" alt="Expand" width={30} height={28} />
      </div>
      <div className="grid grid-cols-4 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
