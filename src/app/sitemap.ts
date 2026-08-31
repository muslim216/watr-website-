import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_ORIGIN } from '@/lib/metadata';
import { products } from '@/content/products';
import { LEGAL_ITEMS, NAV_ITEMS } from '@/lib/nav';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    ...NAV_ITEMS.map((i) => i.href),
    ...products.map((p) => `/collection/${p.slug}`),
    ...LEGAL_ITEMS.map((i) => i.href),
  ];

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${SITE_ORIGIN}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE_ORIGIN}/${l}${path}`]),
        ),
      },
    })),
  );
}
