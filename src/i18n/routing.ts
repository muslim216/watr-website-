import { defineRouting } from 'next-intl/routing';

/**
 * Arabic is the default locale. The existing site already declares the Arabic
 * tree as `x-default`, and the brand is Qatari-first; English is the secondary
 * market locale.
 */
export const routing = defineRouting({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];

export const LOCALE_DIRECTION: Record<Locale, 'rtl' | 'ltr'> = {
  ar: 'rtl',
  en: 'ltr',
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  ar: 'ar-QA',
  en: 'en-QA',
};
