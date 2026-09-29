import type { MetadataRoute } from 'next';
import { getProductionOrigin } from '@/lib/seo';
import { publishedRoutes } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getProductionOrigin();
  return origin
    ? publishedRoutes.map((route) => ({ url: new URL(route, origin).href }))
    : [];
}
