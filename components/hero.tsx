import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-3.5rem)] overflow-hidden">
      <Image
        fill={true}
        src="/hero-bg-02.jpg"
        alt="Background"
        quality={100}
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative z-10 flex flex-col gap-4 justify-center h-full">
        <h1 className="font-semibold tracking-tight text-5xl sm:text-8xl md:text-9xl text-white">
          Toro Marketing
        </h1>
        <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">
          Grow Your Business
        </h2>
        <div className="flex-row gap-4 flex md:items-center">
          <Link
            href={'/'}
            className={buttonVariants({
              variant: 'default',
              size: 'lg',
            })}
          >
            Our Services
          </Link>
          <Link
            href={'/'}
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
            })}
          >
            Free Audit <ArrowRight className="ml-2 h-4 w-4 text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};
