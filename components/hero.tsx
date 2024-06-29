import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-3.5rem)] overflow-hidden">
      <Image
        fill={true}
        src="/hero-bg-01.jpg"
        alt="Background"
        quality={80}
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="container relative z-10 flex flex-col gap-8 md:gap-12 justify-center h-full">
        <h1 className="font-semibold tracking-tight text-5xl md:text-7xl text-white uppercase max-w-[700px]">
          Unlock Your Competitive Edge
        </h1>
        <h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white">
          Marketing to Scale Your Business
        </h2>
        <div className="flex-col md:flex-row gap-4 flex md:items-center">
          <Link
            href={'/services'}
            className={`border-none rounded-none ${buttonVariants({
              variant: 'default',
              size: 'lg',
            })}`}
          >
            Our Solutions
          </Link>
          <Link
            href={'/'}
            className={`border-none rounded-none ${buttonVariants({
              variant: 'outline',
              size: 'lg',
            })}`}
          >
            Free Consultation
            <ArrowRight className="ml-2 h-4 w-4 text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};
