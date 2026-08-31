import type { Metadata } from 'next';
import { BRAND_NAME_FULL, TAGLINE } from '@/content/brand';
import { routing, type Locale } from '@/i18n/routing';

export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://watrqa.com';

const OG_LOCALE: Record<Locale, string> = { ar: 'ar_QA', en: 'en_QA' };

/**
 * Builds per-page metadata with correct hreflang across both locales.
 *
 * Deliberately omits a `keywords` tag. The live site serves one Arabic keyword
 * list to both locales, including عطور فرنسية (French perfumes) — a category
 * the house does not sell and which contradicts its own positioning.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  /** Locale-less path, e.g. '/story' or '' for home. */
  path: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = `${SITE_ORIGIN}/${locale}${path}`;
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_ORIGIN}/${l}${path}`]),
  );

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, 'x-default': `${SITE_ORIGIN}/${routing.defaultLocale}${path}` },
    },
    openGraph: {
      type: 'website',
      siteName: BRAND_NAME_FULL[locale],
      title,
      description,
      url: canonical,
      locale: OG_LOCALE[locale],
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export function defaultDescription(locale: Locale): string {
  return TAGLINE[locale];
}
