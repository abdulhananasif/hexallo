import Image from 'next/image';
import DestinationCard from '@/components/DestinationCard';
import {DestinationsSectionProps} from '@/types/destinationsSection';

export default function DestinationsSection({
  title,
  destinations,
}: DestinationsSectionProps) {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center">
        <h2 className="font-bold text-[18px] leading-[130%] text-[#484848] font-montserrat">
          {title}
        </h2>
        <Image src="/expandable.svg" alt="Expand" width={30} height={28} />
      </div>
      <div className="grid grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </div>
  );
}

