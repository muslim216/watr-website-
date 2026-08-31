import { BOUTIQUE } from '@/content/pages';
import { BRAND_NAME_FULL, INSTAGRAM_URL, PHONE_E164 } from '@/content/brand';
import { products } from '@/content/products';
import { SITE_ORIGIN } from './metadata';
import { storefrontUrl } from './storefront';
import type { Locale } from '@/i18n/routing';

export function organisationSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND_NAME_FULL[locale],
    url: `${SITE_ORIGIN}/${locale}`,
    telephone: PHONE_E164,
    sameAs: [INSTAGRAM_URL],
    address: { '@type': 'PostalAddress', addressCountry: 'QA' },
  };
}

/**
 * Only emitted once the boutique's real address is known. The live site
 * publishes a LocalBusiness record with an empty streetAddress and 24/7 hours
 * on every day, which is worse than publishing nothing.
 */
export function localBusinessSchema(locale: Locale) {
  if (!BOUTIQUE.streetAddress) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: BOUTIQUE.name[locale],
    telephone: PHONE_E164,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'QA',
      streetAddress: BOUTIQUE.streetAddress[locale],
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BOUTIQUE.coordinates.lat,
      longitude: BOUTIQUE.coordinates.lng,
    },
  };
}

export function productSchema(slug: string, locale: Locale) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name[locale],
    description: product.summary[locale],
    brand: { '@type': 'Brand', name: BRAND_NAME_FULL[locale] },
    offers: {
      '@type': 'Offer',
      price: product.price.value,
      priceCurrency: product.price.currency,
      availability: 'https://schema.org/InStock',
      url: storefrontUrl(product, locale),
    },
  };
}

export function JsonLd({ data }: { data: object | null }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
