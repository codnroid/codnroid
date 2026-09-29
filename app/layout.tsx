import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { siteConfig } from '@/lib/site';
import { getProductionOrigin } from '@/lib/seo';
import './globals.css';
const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});
const origin = getProductionOrigin();
const title = 'Codnroid — Digital Product Studio';
export const metadata: Metadata = {
  title,
  description: siteConfig.description,
  robots: { index: Boolean(origin), follow: Boolean(origin) },
  icons: { icon: '/images/codnroid-logo.webp' },
  ...(origin ? { metadataBase: origin, alternates: { canonical: '/' } } : {}),
  openGraph: {
    title,
    description: siteConfig.description,
    siteName: 'Codnroid',
    type: 'website',
    locale: 'en_US',
    ...(origin
      ? {
          url: origin.href,
          images: [
            {
              url: new URL('/images/codnroid-logo.png', origin).href,
              width: 1536,
              height: 1024,
              alt: 'Codnroid — Digital Product Studio',
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: siteConfig.description,
    ...(origin
      ? { images: [new URL('/images/codnroid-logo.png', origin).href] }
      : {}),
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organization = origin
    ? {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Codnroid',
        url: origin.href,
        logo: new URL('/images/codnroid-logo.png', origin).href,
        description: siteConfig.description,
      }
    : null;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('codnroid-theme');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){}})()`,
          }}
        />
      </head>
      <body className={manrope.variable}>
        {organization && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organization).replace(/</g, '\\u003c'),
            }}
          />
        )}
        {children}
      </body>
    </html>
  );
}
