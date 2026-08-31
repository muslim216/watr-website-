import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Product } from '@/content/types';
import type { Locale } from '@/i18n/routing';
import { formatPrice } from '@/lib/storefront';

export function ProductCard({ product }: { product: Product }) {
  const locale = useLocale() as Locale;
  const t = useTranslations('product');

  return (
    <article className="group">
      <Link href={`/collection/${product.slug}`}>
        <div className="aspect-4/5 overflow-hidden bg-cream">
          {/* TODO(assets): per-product photography. */}
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-3xl text-gold">{product.name[locale]}</span>
          </div>
        </div>
        <h3 className="mt-4 text-xl text-maroon">{product.name[locale]}</h3>
      </Link>
      <p className="mt-1 max-w-prose text-sm text-warm-700">{product.summary[locale]}</p>
      <p className="mt-2 text-sm text-warm-500">
        {formatPrice(product.price, locale)}
        {product.volumeMl ? ` · ${t('volume', { ml: product.volumeMl })}` : ` · ${t('set')}`}
      </p>
    </article>
  );
}
