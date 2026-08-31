import { useLocale, useTranslations } from 'next-intl';
import type { Product } from '@/content/types';
import type { Locale } from '@/i18n/routing';
import { storefrontUrl } from '@/lib/storefront';

/**
 * Hands off to the Mnasati storefront, which owns cart, checkout (SkipCash and
 * cash on delivery), the gift flow and order status.
 */
export function BuyButton({ product }: { product: Product }) {
  const t = useTranslations('product');
  const locale = useLocale() as Locale;

  return (
    <a
      href={storefrontUrl(product, locale)}
      rel="noopener"
      aria-label={t('buyAria', { name: product.name[locale] })}
      className="inline-block bg-maroon px-8 py-3 text-sm tracking-widest text-bone uppercase transition-colors hover:bg-maroon-deep"
    >
      {t('buy')}
    </a>
  );
}
