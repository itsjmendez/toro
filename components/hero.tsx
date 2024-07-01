import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ContainerEdgeCross from './ui/container-edge-cross';
import { TextGenerateEffect } from './ui/text-generate-effect';

export const HeroSection = () => {
  return (
    <ContainerEdgeCross>
      <div className="relative p-4 md:p-6 h-[calc(100svh-8svh)]">
        <div className="relative flex flex-col gap-8 h-full justify-center md:items-center text-center ">
          <h1 className="font-bold tracking-tight text-4xl md:text-5xl">
            The marketing your company deserves.
          </h1>
          <h2 className="tracking-tight text-xl md:text-3xl font-semibold">
            No More Missed Opportunities, Only Gains.
          </h2>
          <div className="md:px-0 max-w-96">
            <TextGenerateEffect
              words="Drive growth with our integrated marketing solutions, fusing technology, branding, and customer journeys for powerful results."
              className="text-base md:text-xl text-muted-foreground tracking-tight"
            />
          </div>
          <div className="px-12 flex flex-col gap-4">
            <ContainerEdgeCross trc={true} blc={true}>
              <Link
                href="/"
                className={`w-full ${buttonVariants({
                  variant: 'default',
                  size: 'default',
                })}`}
              >
                Free Consultation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </ContainerEdgeCross>
            <Link
              href="/services"
              className={`underline ${buttonVariants({
                variant: 'link',
                size: 'default',
              })}`}
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </ContainerEdgeCross>
  );
};
