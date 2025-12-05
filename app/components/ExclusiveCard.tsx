import Image from 'next/image';
import {ExclusiveCardProps} from '@/types/exclusiveCard';

export default function ExclusiveCard({
  image,
  title,
  description,
  ctaText,
}: ExclusiveCardProps) {
  return (
    <div className="relative w-full h-[400px] rounded-[16px] overflow-hidden group">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4 opacity-90">{description}</p>
        <div className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity">
          <span>{ctaText}</span>
          <Image
            src="/direction.svg"
            alt="Arrow"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
}

