import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Separator } from './ui/separator';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div>
      <div className="my-10 md:my-20 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="container font-semibold tracking-tight text-5xl sm:text-8xl md:text-9xl lg:text-10xl uppercase">
            Toro Marketing
          </h1>
          <div className="w-full h-96 relative md:hidden">
            <Image
              fill={true}
              src={'/el-toro.jpg'}
              alt="Bull"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h3 className="container text-3xl font-normal tracking-tight first:mt-0 text-muted-foreground font-mono">
            Grow Your Business
          </h3>
        </div>
        <div className="container flex-row gap-4 flex md:items-center">
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
      <Separator />
    </div>
  );
}
