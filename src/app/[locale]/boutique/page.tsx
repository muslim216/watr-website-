import { useLocale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { PageHeading, Section } from '@/components/prose';
import { BOUTIQUE } from '@/content/pages';
import { PHONE_DISPLAY, PHONE_E164 } from '@/content/brand';
import type { Locale } from '@/i18n/routing';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildMetadata } from '@/lib/metadata';
import { localBusinessSchema, JsonLd } from '@/lib/structured-data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'boutique' });
  return buildMetadata({
    locale,
    path: '/boutique',
    title: t('title'),
    description: BOUTIQUE.name[locale],
  });
}

export default async function BoutiquePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={localBusinessSchema(locale)} />
      <Boutique />
    </>
  );
}

function Boutique() {
  const t = useTranslations('boutique');
  const locale = useLocale() as Locale;
  const { coordinates, name, streetAddress, hours } = BOUTIQUE;
  const directions = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;

  return (
    <Section>
      <PageHeading>{t('title')}</PageHeading>
      <h2 className="mt-6 text-2xl text-warm-700">{name[locale]}</h2>

      <div className="mt-8 space-y-6">
        <div>
          <h3 className="text-xs tracking-widest text-warm-500 uppercase">{t('address')}</h3>
          {/* Deliberately honest: the old record shipped an empty streetAddress
              and claimed "Open 24 Hours" seven days a week. */}
          <p className="mt-2 text-warm-700">
            {streetAddress ? streetAddress[locale] : t('addressPending')}
          </p>
        </div>

        {hours && (
          <div>
            <h3 className="text-xs tracking-widest text-warm-500 uppercase">{t('hours')}</h3>
            <p className="mt-2 text-warm-700">{hours[locale]}</p>
          </div>
        )}

        <p>
          <a href={`tel:${PHONE_E164}`} dir="ltr" className="text-maroon underline underline-offset-4">
            {PHONE_DISPLAY}
          </a>
        </p>

        <a
          href={directions}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-maroon px-8 py-3 text-sm tracking-widest text-bone uppercase hover:bg-maroon-deep"
        >
          {t('directions')}
        </a>
      </div>
    </Section>
  );
}
