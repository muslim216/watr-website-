import { Cormorant_Garamond, IBM_Plex_Sans_Arabic, Aref_Ruqaa } from 'next/font/google';

/**
 * Almarai — the previous site's only face — is a stock platform UI font with no
 * relationship to the calligraphic wordmark or the serif on the bottle labels.
 * Replaced with a pairing that answers both. All three are OFL.
 *
 * If the Figma specifies different faces, those win.
 */

/** Body and UI, both scripts, matched metrics. */
export const bodyFont = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

/** Latin display — echoes the wide-tracked serif caps in the existing lockup. */
export const displayLatin = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-display-latin',
  display: 'swap',
});

/** Arabic display — calligraphic, answering the Diwani wordmark. */
export const displayArabic = Aref_Ruqaa({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-display-arabic',
  display: 'swap',
});

export const fontVariables = [
  bodyFont.variable,
  displayLatin.variable,
  displayArabic.variable,
].join(' ');
