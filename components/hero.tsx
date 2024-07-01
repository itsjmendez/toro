import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ContainerEdgeCross from './ui/container-edge-cross';

export const HeroSection = () => {
  return (
    <ContainerEdgeCross>
      <div className="relative p-4 md:p-6 h-[calc(100svh-8svh)]">
        <div className="relative flex flex-col gap-8 h-full justify-center md:items-center text-center ">
          <h1 className="font-semibold tracking-tight text-4xl md:text-5xl">
            Get the marketing your company deserves.
          </h1>
          <h2 className="tracking-tight text-xl md:text-3xl font-semibold mb-1">
            No More Missed Opportunities,
            <br />
            More Success.
          </h2>
          <p className="text-lg text-muted-foreground tracking-tight">
            Boost visibility with our integrated marketing that blends
            <br />
            technology, branding, and customer journeys for impactful results.
          </p>

          <div className="flex flex-col gap-4 md:items-center">
            <span>
              <Link
                href="/"
                className={`rounded-3xl ${buttonVariants({
                  variant: 'default',
                  size: 'default',
                })}`}
              >
                Free Consultation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </span>
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
