import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LEGAL_ITEMS, NAV_ITEMS } from '@/lib/nav';
import {
  BRAND_NAME_FULL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  TAGLINE,
} from '@/content/brand';
import type { Locale } from '@/i18n/routing';

export function SiteFooter() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tLegal = useTranslations('legal');
  const tContact = useTranslations('contact');
  const locale = useLocale() as Locale;

  return (
    <footer className="mt-24 border-t border-warm-200 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <p className="font-display text-lg text-maroon">{BRAND_NAME_FULL[locale]}</p>
          <p className="mt-2 text-sm text-warm-700">{TAGLINE[locale]}</p>
        </div>

        <nav aria-labelledby="footer-pages">
          <h2 id="footer-pages" className="text-xs tracking-widest text-warm-500 uppercase">
            {t('pages')}
          </h2>
          <ul className="mt-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="text-sm text-warm-700 hover:text-maroon">
                  {tNav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-legal">
          <h2 id="footer-legal" className="text-xs tracking-widest text-warm-500 uppercase">
            {t('legalHeading')}
          </h2>
          <ul className="mt-4 space-y-2">
            {LEGAL_ITEMS.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="text-sm text-warm-700 hover:text-maroon">
                  {tLegal(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs tracking-widest text-warm-500 uppercase">{t('social')}</h2>
          <ul className="mt-4 space-y-2">
            <li>
              {/* The old site printed this number as plain text on one page and
                  offered no mailto, tel or WhatsApp link anywhere. */}
              <a href={`tel:${PHONE_E164}`} dir="ltr" className="text-sm text-warm-700 hover:text-maroon">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                rel="noopener noreferrer"
                target="_blank"
                className="text-sm text-warm-700 hover:text-maroon"
              >
                {tContact('instagram')}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-warm-200 py-5">
        <p className="mx-auto max-w-6xl px-5 text-xs text-warm-500">
          {t('rights')} &copy; {new Date().getFullYear()} {BRAND_NAME_FULL[locale]}
        </p>
      </div>
    </footer>
  );
}
