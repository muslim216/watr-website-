import { useLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { PageHeading, Section } from '@/components/prose';
import { ProductCard } from '@/components/product-card';
import { products } from '@/content/products';
import { COLLECTION_INTRO, COLLECTION_NAME } from '@/content/pages';
import type { Locale } from '@/i18n/routing';

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Collection />;
}

function Collection() {
  const locale = useLocale() as Locale;

  return (
    <Section>
      <PageHeading>{COLLECTION_NAME[locale]}</PageHeading>
      <p className="mt-4 max-w-prose text-warm-700">{COLLECTION_INTRO[locale]}</p>
      <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </Section>
  );
}
