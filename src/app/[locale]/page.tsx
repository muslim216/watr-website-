import { useLocale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Prose, Section } from '@/components/prose';
import { ProductCard } from '@/components/product-card';
import { products } from '@/content/products';
import { COLLECTION_INTRO, COLLECTION_NAME, HOME_HEADING, HOME_MANIFESTO } from '@/content/pages';
import { TAGLINE } from '@/content/brand';
import type { Locale } from '@/i18n/routing';

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Home />;
}

/** One home page. The old site had two, both titled "Home". */
function Home() {
  const locale = useLocale() as Locale;
  const t = useTranslations('product');

  return (
    <>
      <Section className="text-center">
        <p className="text-xs tracking-widest text-gold uppercase">{TAGLINE[locale]}</p>
        <h1 className="mt-6 text-5xl text-maroon md:text-6xl">{HOME_HEADING[locale]}</h1>
        <div className="mx-auto mt-10 flex justify-center">
          <Prose paragraphs={HOME_MANIFESTO[locale]} />
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <h2 className="text-3xl text-maroon">{COLLECTION_NAME[locale]}</h2>
            <p className="mt-2 text-warm-700">{COLLECTION_INTRO[locale]}</p>
          </div>
          <Link
            href="/collection"
            className="text-sm text-maroon underline underline-offset-4"
          >
            {t('viewAll')}
          </Link>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>
    </>
  );
}
