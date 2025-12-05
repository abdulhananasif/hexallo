import Image from 'next/image';
import {LogoProps} from '@/types/logo';

export default function Logo({
  src = '/hexalloLogo.svg',
  alt = 'Hexallo Logo',
  width = 97,
  height = 24.38,
}: LogoProps) {
  return (
    <div className="flex items-center shrink-0 w-[97px] h-[24.38px]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-[97px] h-[24.38px]"
      />
    </div>
  );
}
