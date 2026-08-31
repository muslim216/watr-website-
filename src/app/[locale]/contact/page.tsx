import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { PageHeading, Section } from '@/components/prose';
import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from '@/content/brand';
import type { Locale } from '@/i18n/routing';

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Contact />;
}

/**
 * The old site had no contact page at all: "Contact Us" pointed at the branches
 * list, and there was no tel:, mailto: or WhatsApp link anywhere on the site.
 */
function Contact() {
  const t = useTranslations('contact');

  const links = [
    { href: WHATSAPP_URL, label: t('whatsapp'), external: true },
    { href: `tel:${PHONE_E164}`, label: t('call', { number: PHONE_DISPLAY }), external: false },
    { href: INSTAGRAM_URL, label: t('instagram'), external: true },
  ];

  return (
    <Section>
      <PageHeading>{t('title')}</PageHeading>
      <p className="mt-4 max-w-prose text-warm-700">{t('intro')}</p>

      <ul className="mt-10 space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-block border border-warm-300 px-6 py-3 text-sm text-maroon transition-colors hover:border-maroon"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
