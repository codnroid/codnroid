export const siteConfig = {
  name: 'Codnroid',
  description:
    'Codnroid designs and engineers high-performance websites, apps, SaaS platforms and e-commerce experiences built for ambitious businesses.',
  googleFormUrl: '',
  productionOrigin: 'https://codnroid.com',
} as const;

export interface NavigationItem {
  label: string;
  href: string;
}
export const navigation: NavigationItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
];

export function getProjectLink(formUrl: string = siteConfig.googleFormUrl) {
  if (formUrl) {
    try {
      const url = new URL(formUrl);
      if (
        url.protocol === 'https:' &&
        (url.hostname === 'forms.gle' ||
          (url.hostname === 'docs.google.com' &&
            url.pathname.startsWith('/forms/')))
      ) {
        return {
          href: url.href,
          target: '_blank' as const,
          rel: 'noopener noreferrer',
          external: true,
        };
      }
    } catch {
      /* Invalid configuration uses the contact section. */
    }
  }
  return { href: '#contact', external: false };
}
