import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
// import Image from 'next/image';
import ContainerEdgeCross from './ui/container-edge-cross';

export const HeroSection = () => {
  return (
    <div className="relative">
      <ContainerEdgeCross tr={true} tl={true} bl={true} br={true}>
        <div className="container relative h-[calc(100vh-3.5rem)] overflow-hidden">
          {/* <Image
          fill={true}
          src="/hero-bg-01.jpg"
          alt="Background"
          quality={80}
          priority
          style={{ objectFit: 'cover' }}
          /> */}
          {/* <div className="absolute inset-0 bg-black opacity-50" /> */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute top-0 left-0  z-[-2] h-screen w-screen  bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          <div className="container relative flex flex-col gap-8 md:gap-12 justify-center h-full">
            <h1 className="font-semibold tracking-tight text-4xl md:text-7xl uppercase max-w-[700px]">
              Unlock Your Competitive Edge
            </h1>
            <h2 className="text-2xl md:text-4xl font-normal tracking-tight ">
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
                className={` rounded-none ${buttonVariants({
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
      </ContainerEdgeCross>
    </div>
  );
};
