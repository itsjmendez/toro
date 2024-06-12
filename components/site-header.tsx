import { MainNav } from './main-nav';
import { ThemeToggle } from './theme-toggle';
import MobileNav from './mobile-nav';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w- border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* todo: add social medias */}
          <div>in</div>
          <div>x</div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
