'use client';
import React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from './theme-toggle';

// - Marketing Business Operations: `/marketing-business-operations`
// - Digital Marketing: `/digital-marketing`
// - Martech and AI: `/martech-ai`
// - Strategy and Analytics: `/strategy-analytics`
// - Brand, Messaging and Creative: `/brand-messaging-creative`
// - Lifecycle Marketing: `/lifecycle-marketing`

const services: { title: string; href: string; description: string }[] = [
  {
    title: 'Marketing Business Operations',
    href: '/marketing-business-operations',
    description:
      'Comprehensive solutions to streamline and enhance your marketing operations.',
  },
  {
    title: 'Digital Marketing',
    href: '/digital-marketing',
    description:
      'Expert digital marketing strategies to elevate your online presence and drive engagement.',
  },
  {
    title: 'Martech and AI',
    href: '/martech-ai',
    description:
      'Advanced Martech and AI integrations for innovative and efficient marketing campaigns.',
  },
  {
    title: 'Strategy Analytics',
    href: '/strategy-analytics',
    description:
      'Data-driven strategy development and analytics to maximize your marketing ROI.',
  },
  {
    title: 'Brand, Messaging and Creative',
    href: '/brand-messaging-creative',
    description:
      'Creative services to develop impactful brand messaging and compelling content.',
  },
  {
    title: 'Lifecycle Marketing',
    href: '/lifecycle-marketing',
    description:
      'Tailored lifecycle marketing strategies to foster and maintain strong customer relationships.',
  },
];

// Home Page
// Services
// Marketing Business Operations
// Digital Marketing
// Martech and AI
// Strategy and Analytics
// Brand, Messaging and Creative
// Lifecycle Marketing
// Company
// Work
// About
// Insights (Future) - site to askthetoro.com - See example for https://doingmoretoday.com/ or https://www2.deloitte.com/us/en/insights.html
// Training (Future) see example for https://thefutur.com/shop or https://www.ovrdrv.com/overdrive-u/

export default function SiteHeader() {
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
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
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
