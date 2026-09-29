import { siteConfig } from './site';

export function getProductionOrigin(
  value: string = siteConfig.productionOrigin,
): URL | undefined {
  try {
    const url = new URL(value);
    if (
      url.protocol !== 'https:' ||
      url.hostname === 'localhost' ||
      url.hostname === '127.0.0.1' ||
      url.pathname !== '/' ||
      url.search ||
      url.hash ||
      url.username ||
      url.password
    )
      return undefined;
    return new URL(url.origin);
  } catch {
    return undefined;
  }
}
