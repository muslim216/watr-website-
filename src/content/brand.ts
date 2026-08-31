import type { Localised } from './types';

/**
 * The single source of truth for the brand line.
 *
 * The previous site ran eleven concurrent variants ("Luxury Crafted for
 * Presence", "Luxury Defined by Presence", "Because Desire Deserves
 * Distinction", and more). Everything imports from here so that cannot recur;
 * `tests/content-parity.test.ts` asserts exactly one line per locale.
 *
 * The Arabic line plays on the name itself — وَطَر means the thing intended —
 * which is the brand's strongest piece of writing. The English is built from
 * the same idea rather than substituting a different one.
 *
 * TODO(brand): confirm the English line. Alternatives considered:
 *   - "Named for What You Seek."      ← current
 *   - "The Presence You Intended."
 *   - "Every Presence Has a Purpose."
 */
export const TAGLINE: Localised<string> = {
  ar: 'لأن الوَطَر هو المراد.',
  en: 'Named for What You Seek.',
};

/**
 * The wordmark. Arabic is always vocalised — the fatḥas are what distinguish
 * waṭar (desire, intent) from other readings of the same three letters, and the
 * brand's entire naming story rests on that reading. The old site dropped them
 * in the header, half the titles and the logo.
 */
export const BRAND_NAME: Localised<string> = {
  ar: 'وَطَر',
  en: 'WATR',
};

export const BRAND_NAME_FULL: Localised<string> = {
  ar: 'وَطَر للعطور',
  en: 'WATR Perfumes',
};

/** Verified from the live site. Kept as the single brand contact number. */
export const PHONE_E164 = '+97472232225';
export const PHONE_DISPLAY = '+974 7223 2225';
export const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace('+', '')}`;
export const INSTAGRAM_URL = 'https://www.instagram.com/watr.qa';

/**
 * The Mnasati storefront. Owns cart, checkout (SkipCash + cash on delivery),
 * the gift flow, accounts and order status. Moves to shop.watrqa.com once
 * Mnasati re-points the storefront domain.
 */
export const STOREFRONT_ORIGIN =
  process.env.NEXT_PUBLIC_STOREFRONT_ORIGIN ?? 'https://watrqa.com';
