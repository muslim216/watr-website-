import { useLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { PageHeading, Prose, Section } from '@/components/prose';
import { STORY_SECTIONS } from '@/content/pages';
import { TAGLINE } from '@/content/brand';
import type { Locale } from '@/i18n/routing';

export default async function StoryPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Story />;
}

/**
 * One origin story. The old site told it three times — /about, /home and
 * /story — in three different ways, and the English /story stopped mid-sentence.
 */
function Story() {
  const locale = useLocale() as Locale;
  const [first, ...rest] = STORY_SECTIONS;

  return (
    <>
      <Section>
        <PageHeading>{first!.heading[locale]}</PageHeading>
        <div className="mt-8">
          <Prose paragraphs={first!.body[locale]} />
        </div>
      </Section>

      {rest.map((section) => (
        <Section key={section.heading.en} className="border-t border-warm-200">
          <h2 className="text-3xl text-maroon">{section.heading[locale]}</h2>
          <div className="mt-6">
            <Prose paragraphs={section.body[locale]} />
          </div>
        </Section>
      ))}

      <Section className="border-t border-warm-200 text-center">
        <p className="font-display text-2xl text-maroon">{TAGLINE[locale]}</p>
      </Section>
    </>
  );
}
