import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="container">
      <div className="pt-20 text-center ">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
          Toro Marketing
        </h1>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-muted-foreground">
          Marketing That Grows Your Business
        </h2>
        <div className="mt-4 gap-4 flex items-center justify-center">
          <Link
            href={'/'}
            className={buttonVariants({ variant: 'default', size: 'default' })}
          >
            Our Services
          </Link>
          <Link
            href={'/'}
            className={buttonVariants({ variant: 'outline', size: 'default' })}
          >
            Free Audit <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
