'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { services } from '@/constants/services';

export function MainNav() {
  return (
    <div className="hidden md:flex">
      <LargeMenuItem />
    </div>
  );
}

export const LargeMenuItem = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <h3
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === '/' ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                Home
              </h3>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname?.startsWith('/services')
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            <Link href="/services" legacyBehavior passHref>
              <h3
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname?.startsWith('/services')
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                Services
              </h3>
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/work" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <h3
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname?.startsWith('/work')
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                Work
              </h3>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <h3
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname?.startsWith('/about')
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                About
              </h3>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li className="hover:bg-muted p-2 rounded-sm">
      <Link href={href ? href : '/'}>
        <NavigationMenuLink asChild>
          <a ref={ref} {...props}>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});
ListItem.displayName = 'ListItem';
