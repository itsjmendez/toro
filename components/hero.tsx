import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Separator } from './ui/separator';

export function HeroSection() {
  return (
    <div>
      <div className="container my-20 flex flex-col gap-4">
        <h1 className="font-semibold tracking-tight text-5xl sm:text-8xl md:text-9xl lg:text-10xl uppercase">
          Toro Marketing
        </h1>
        <h3 className="text-3xl font-normal tracking-tight first:mt-0 text-muted-foreground">
          Grow Your Business
        </h3>
        <div className="gap-4 flex md:items-center">
          <Link
            href={'/'}
            className={buttonVariants({
              variant: 'default',
              size: 'default',
            })}
          >
            Our Services
          </Link>
          <Link
            href={'/'}
            className={buttonVariants({
              variant: 'outline',
              size: 'default',
            })}
          >
            Free Audit <ArrowRight className="ml-2 h-4 w-4 text-primary" />
          </Link>
        </div>
      </div>
      <Separator />
    </div>
  );
}
