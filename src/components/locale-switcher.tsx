'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

/** Switches locale while preserving the current path and its params. */
export function LocaleSwitcher() {
  const t = useTranslations('locale');
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const current = params.locale as string;
  const other = routing.locales.find((l) => l !== current) ?? routing.defaultLocale;

  return (
    <button
      type="button"
      lang={other}
      aria-label={t('label')}
      onClick={() => router.replace(pathname, { locale: other })}
      className="text-sm text-warm-700 underline-offset-4 transition-colors hover:text-maroon hover:underline"
    >
      {t('switchTo')}
    </button>
  );
}
