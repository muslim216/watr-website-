import { notFound } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { PageHeading, Prose, Section } from '@/components/prose';
import { BuyButton } from '@/components/buy-button';
import { getProduct, products } from '@/content/products';
import { formatPrice } from '@/lib/storefront';
import { routing, type Locale } from '@/i18n/routing';
import type { Product } from '@/content/types';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug })),
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = getProduct(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}

function ProductDetail({ product }: { product: Product }) {
  const locale = useLocale() as Locale;
  const t = useTranslations('product');

  const tiers = product.notes
    ? ([
        ['top', product.notes.top[locale]],
        ['heart', product.notes.heart[locale]],
        ['base', product.notes.base[locale]],
      ] as const)
    : [];

  return (
    <Section>
      <div className="grid gap-14 md:grid-cols-2">
        <div className="aspect-4/5 bg-cream">
          {/* TODO(assets): per-product photography. */}
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-4xl text-gold">{product.name[locale]}</span>
          </div>
        </div>

        <div>
          <PageHeading>{product.name[locale]}</PageHeading>
          <p className="mt-3 text-sm text-warm-500">
            {product.concentration === 'set' ? t('set') : t('extrait')}
            {product.volumeMl ? ` · ${t('volume', { ml: product.volumeMl })}` : ''}
          </p>

          <div className="mt-8">
            <Prose paragraphs={product.story[locale]} />
          </div>

          {tiers.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xs tracking-widest text-warm-500 uppercase">{t('notes')}</h2>
              <dl className="mt-4 space-y-3">
                {tiers.map(([tier, values]) => (
                  <div key={tier} className="flex gap-4">
                    <dt className="w-20 shrink-0 text-sm text-warm-500">{t(tier)}</dt>
                    <dd className="text-sm text-warm-700">{values.join('، ')}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <p className="mt-10 font-display text-xl text-maroon">{product.signature[locale]}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <BuyButton product={product} />
            <span className="text-lg text-warm-700">{formatPrice(product.price, locale)}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
