import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Toro Consulting',
  description: 'Grow your business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/niz3wqz.css" />
      </head>
      <body className="font-neueHaasGroteskText">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
