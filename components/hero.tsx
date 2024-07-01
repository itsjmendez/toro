import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ContainerEdgeCross from './ui/container-edge-cross';

export const HeroSection = () => {
  return (
    <ContainerEdgeCross>
      <div className="relative p-4 md:p-6 overflow-hidden">
        <div className="relative flex flex-col gap-8 justify-center h-full">
          <h1 className="font-semibold tracking-tight text-4xl md:text-5xl lg:text-6xl uppercase">
            Elevate your brand
          </h1>
          <div>
            <h2 className="tracking-tight text-2xl md:text-3xl font-semibold mb-1">
              Get modern strategies.
            </h2>
            <p className="text-xl text-muted-foreground">
              Sell more with integrated marketing.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:items-center">
            <Link
              href="/services"
              className={`border-none rounded-none ${buttonVariants({
                variant: 'default',
                size: 'lg',
              })}`}
            >
              Our Solutions
            </Link>
            <Link
              href="/"
              className={`rounded-none ${buttonVariants({
                variant: 'outline',
                size: 'lg',
              })}`}
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 text-primary" />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <video
          className="object-cover h-[70svh] w-full"
          loop
          autoPlay={true}
          preload="auto"
          muted={true}
        >
          <source src="./hero-1.mp4" type="video/mp4" />
        </video>
      </div>
    </ContainerEdgeCross>
  );
};
