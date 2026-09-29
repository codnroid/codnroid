import { services } from './content';

/** Reserved for future content. Do not expose these as links until pages exist. */
export const futureRoutes = [
  ...services.map(({ route }) => route),
  '/work',
  '/about',
  '/process',
  '/insights',
  '/contact',
] as const;
export const publishedRoutes = ['/'] as const;
