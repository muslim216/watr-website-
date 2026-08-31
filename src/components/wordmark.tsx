import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { BRAND_NAME_FULL } from '@/content/brand';
import type { Locale } from '@/i18n/routing';

/**
 * TODO(assets): replace with the traced SVG wordmark. The calligraphic mark
 * currently exists only as a 350px PNG (declared as 512x512 in the live
 * structured data) with no vector source anywhere.
 */
export function Wordmark({ className = '' }: { className?: string }) {
  const locale = useLocale() as Locale;

  return (
    <Link
      href="/"
      className={`font-display text-maroon ${className}`}
      aria-label={BRAND_NAME_FULL[locale]}
    >
      <span
        className={
          locale === 'ar'
            ? 'text-2xl leading-none'
            : 'text-xl leading-none tracking-[--tracking-wordmark] uppercase'
        }
      >
        {BRAND_NAME_FULL[locale]}
      </span>
    </Link>
  );
}
