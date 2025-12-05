import Image from 'next/image';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import {EventCardProps} from '@/types/eventCard';

export default function EventCard({
  image,
  category,
  eventName,
  date,
  time,
  location,
  price,
}: EventCardProps) {
  return (
    <Card className="flex flex-col items-center">
      <div className="relative w-[318px] h-[222px] mb-4">
        <Image
          src={image}
          alt={eventName}
          fill
          className="object-cover rounded-[16px]"
        />
      </div>
      <div className="w-[318px] flex flex-col space-y-1">
        <Tag title={category} />
        <h3 className="font-semibold text-[12px] leading-[24px] text-[#2D3134] font-montserrat">
          {eventName}
        </h3>
        <span className="font-normal text-[11.9px] leading-[120%] text-[#5B5F62] font-montserrat">
          {date}
        </span>
        <span className="font-normal text-[11.9px] leading-[120%] text-[#5B5F62] font-montserrat">
          {time}
        </span>
        <span className="font-normal text-[11.9px] leading-[120%] text-[#5B5F62] font-inter">
          {location}
        </span>
        <span className="font-normal text-[11.9px] leading-[20px] text-[#2D3134] font-montserrat">
          From <span className="font-semibold">{price}</span>
        </span>
      </div>
    </Card>
  );
}
