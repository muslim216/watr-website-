import type { Locale } from '@/i18n/routing';

/** Text that must exist in every locale. Parity is enforced in tests. */
export type Localised<T> = Record<Locale, T>;

export interface Money {
  value: number;
  currency: 'QAR';
}

export interface NotePyramid {
  top: Localised<string[]>;
  heart: Localised<string[]>;
  base: Localised<string[]>;
}

export interface Product {
  /** Slug on this site. Not the storefront slug. */
  slug: string;
  price: Money;
  volumeMl: number | null;
  concentration: 'extrait' | 'set';
  /**
   * Exact, already-encoded path on the Mnasati storefront, per locale.
   * Cálido's storefront slug contains a percent-encoded accent
   * (`9-c%C3%A1lido`), so these are used verbatim and never re-encoded.
   */
  storefrontPath: Localised<string>;
  image: string;
  notes: NotePyramid | null;
  name: Localised<string>;
  /** One-line positioning shown on cards. */
  summary: Localised<string>;
  /** Body copy paragraphs. */
  story: Localised<string[]>;
  /** The em-dash sign-off. The house's signature device. */
  signature: Localised<string>;
}

export interface StorySection {
  heading: Localised<string>;
  body: Localised<string[]>;
}
