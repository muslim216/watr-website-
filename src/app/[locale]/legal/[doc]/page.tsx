import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { PageHeading, Prose, Section } from '@/components/prose';
import { LEGAL_DOCUMENTS } from '@/content/legal';
import { LEGAL_ITEMS, type LegalDoc } from '@/lib/nav';
import { routing, type Locale } from '@/i18n/routing';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    LEGAL_ITEMS.map((item) => ({ locale, doc: item.key })),
  );
}

function isLegalDoc(value: string): value is LegalDoc {
  return LEGAL_ITEMS.some((item) => item.key === value);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; doc: string }>;
}): Promise<Metadata> {
  const { locale, doc } = await params;
  if (!isLegalDoc(doc)) return {};
  const document = LEGAL_DOCUMENTS[doc];
  return buildMetadata({
    locale,
    path: `/legal/${doc}`,
    title: document.title[locale],
    description: document.body[locale][0]!,
  });
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: Locale; doc: string }>;
}) {
  const { locale, doc } = await params;
  setRequestLocale(locale);
  if (!isLegalDoc(doc)) notFound();
  return <LegalContent doc={doc} />;
}

function LegalContent({ doc }: { doc: LegalDoc }) {
  const locale = useLocale() as Locale;
  const document = LEGAL_DOCUMENTS[doc];

  return (
    <Section>
      <PageHeading>{document.title[locale]}</PageHeading>

      {!document.reviewed && (
        <p
          role="note"
          className="mt-6 max-w-prose border-s-2 border-gold bg-cream px-4 py-3 text-sm text-warm-700"
        >
          {locale === 'ar'
            ? 'هذه مسوّدة قيد المراجعة ولم تُعتمد بعد كوثيقة نهائية.'
            : 'This is a draft under review and is not yet approved as final policy.'}
        </p>
      )}

      <div className="mt-8">
        <Prose paragraphs={document.body[locale]} />
      </div>
    </Section>
  );
}
