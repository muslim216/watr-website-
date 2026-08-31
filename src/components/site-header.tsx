import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { NAV_ITEMS } from '@/lib/nav';
import { Wordmark } from './wordmark';
import { LocaleSwitcher } from './locale-switcher';

export function SiteHeader() {
  const t = useTranslations('nav');

  return (
    <header className="border-b border-warm-200 bg-bone/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5">
        <Wordmark />

        <nav aria-label={t('openMenu')} className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-sm text-warm-700 underline-offset-4 transition-colors hover:text-maroon hover:underline"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <LocaleSwitcher />
        </div>
      </div>

      {/* Compact nav for small screens; no drawer needed at five items. */}
      <nav aria-label={t('openMenu')} className="border-t border-warm-200 md:hidden">
        <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.key} className="shrink-0">
              <Link href={item.href} className="text-sm text-warm-700">
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
