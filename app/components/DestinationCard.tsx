import Image from 'next/image';
import Card from '@/components/ui/Card';
import {DestinationCardProps} from '@/types/destinationCard';
import clsx from 'clsx';

export default function DestinationCard({
  image,
  title,
  checkIns,
  description,
}: DestinationCardProps) {
  return (
    <Card
      className={clsx(
        'flex flex-col bg-transparent p-0! shadow-[4.7px_4.7px_29.4px_0_rgba(0,0,0,0.1)] w-[329.3px] border-0'
      )}
    >
      <div className="relative w-full h-[246.97px] mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-tl-[17.64px] rounded-tr-[17.64px] rounded-br-[5.88px] rounded-bl-[5.88px]"
        />
      </div>
      <div className="flex flex-col space-y-2 px-5 pb-5">
        <h3 className="font-semibold text-[13.1272px] leading-[16px] text-[#000000] font-inter">
          {title}
        </h3>
        <span className="font-medium text-[13.0178px] leading-[16px] text-black/50 font-montserrat">
          {checkIns}
        </span>
        <p className="font-medium text-[13.0178px] leading-[120%] text-black/50 font-montserrat">
          {description}
        </p>
      </div>
    </Card>
  );
}
