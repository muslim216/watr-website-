import { STOREFRONT_ORIGIN } from '@/content/brand';
import type { Money, Product } from '@/content/types';
import type { Locale } from '@/i18n/routing';

/**
 * Absolute URL for a product on the Mnasati storefront.
 *
 * `new URL` preserves percent-encoding verbatim, so Cálido's
 * `9-c%C3%A1lido` survives intact rather than becoming `9-c%25C3%25A1lido`.
 */
export function storefrontUrl(product: Product, locale: Locale): string {
  return new URL(product.storefrontPath[locale], STOREFRONT_ORIGIN).toString();
}

/**
 * Prices use Western numerals in both locales, per Gulf commerce convention.
 *
 * Note: the Arabic output contains U+200F marks. That is Intl applying bidi
 * isolation so the currency renders correctly beside RTL text — deliberate, and
 * unrelated to the stray marks that leaked into the old site's authored copy.
 */
export function formatPrice(money: Money, locale: Locale): string {
  return new Intl.NumberFormat(`${locale}-QA-u-nu-latn`, {
    style: 'currency',
    currency: money.currency,
    maximumFractionDigits: 0,
  }).format(money.value);
}
