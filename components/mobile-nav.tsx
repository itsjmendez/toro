import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { services } from '@/content/services';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const MobileNav = () => {
  return (
    <div className=" md:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="flex flex-row gap-1 text-primary font-semibold uppercase">
            {/* Icon to open mobile navigation menu */}
            {/* <Menu className="h-[1.4rem] w-[1.4rem]" /> */}
            <span>Menu</span>
          </div>
        </SheetTrigger>
        <SheetContent side={'left'} className="border-none">
          <SheetHeader className="text-start">
            <SheetTitle className="font-extrabold">Toro Marketing</SheetTitle>
            <SheetDescription>
              Marketing that grows your business
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col space-y-2 pt-4 font-semibold">
            <Separator />
            <Link href="/services">Home</Link>
            <Separator />
            <Link href="/about">Services</Link>
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services/"
                className="text-muted-foreground font-normal text-sm p-2"
              >
                {service.title}
              </Link>
            ))}
            <Separator />
            <Link href="/about">Company</Link>
            <Separator />
            <Link href="/about">Work</Link>
            <Separator />
            <Link href="/contact">About</Link>
            <Separator className="my-2" />
            <Link
              href={'/'}
              className={buttonVariants({
                variant: 'default',
                size: 'default',
              })}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
