/**
 * One navigation for the whole site.
 *
 * The old site ran two separate front-ends with different headers — one with
 * HOME/MENU/OUR STORY/LOCATION, another with HOME/BRANCHES/ABOUT US/PRIVACY
 * POLICY/LOGIN — so "Home" resolved to two different pages and Our Story was
 * reachable only from a footer.
 */
export const NAV_ITEMS = [
  { key: 'story', href: '/story' },
  { key: 'collection', href: '/collection' },
  { key: 'boutique', href: '/boutique' },
  { key: 'contact', href: '/contact' },
] as const;

export const LEGAL_ITEMS = [
  { key: 'privacy', href: '/legal/privacy' },
  { key: 'terms', href: '/legal/terms' },
  { key: 'returns', href: '/legal/returns' },
  { key: 'shipping', href: '/legal/shipping' },
] as const;

export type LegalDoc = (typeof LEGAL_ITEMS)[number]['key'];
