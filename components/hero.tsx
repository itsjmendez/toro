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
          <TextGenerateEffect
            words="The marketing your company deserves."
            className="text-4xl md:text-5xl font-semibold tracking-tight"
          />
          <h2 className="tracking-tight text-xl md:text-3xl font-semibold mb-1">
            No More Missed Opportunities,
            <br />
            Only Gains.
          </h2>
          <p className="text-lg text-muted-foreground tracking-tight">
            Drive growth with our integrated marketing solutions,
            <br />
            fusing technology, branding, and customer journeys for powerful
            results.
          </p>

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
