import type { MetadataRoute } from 'next';
import { getProductionOrigin } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const origin = getProductionOrigin();
  return origin
    ? {
        rules: { userAgent: '*', allow: '/' },
        sitemap: new URL('/sitemap.xml', origin).href,
      }
    : { rules: { userAgent: '*', disallow: '/' } };
}
