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
          <h1 className="font-semibold tracking-tight text-4xl md:text-5xl text-muted-foreground">
            The <span className="text-primary">marketing</span> your company
            deserves.
          </h1>
          <h2 className="tracking-tight text-xl md:text-3xl mb-1">
            No More Missed Opportunities,
            <br />
            Only Gains.
          </h2>
          <div className=" max-w-96">
            <TextGenerateEffect
              words=" Drive growth with our integrated marketing solutions, fusing technology, branding, and customer journeys for powerful results."
              className="text-base md:text-xl text-muted-foreground tracking-tight"
            />
          </div>

          <div className=" flex flex-col gap-4 ">
            <Link
              href="/"
              className={`${buttonVariants({
                variant: 'round',
                size: 'default',
              })}`}
            >
              Free Consultation
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
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
