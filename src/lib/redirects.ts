import type { NextConfig } from 'next';

type Redirects = NonNullable<NextConfig['redirects']>;

/**
 * The live site's URLs, mapped onto the new structure.
 *
 * Arabic previously lived at the unprefixed root (/about, /story, …) and
 * English under /en. Both trees now use an explicit locale prefix, so every
 * old URL needs a home. Commerce paths hand off to the storefront rather than
 * resolving here.
 */
const PAGE_MAP: Record<string, string> = {
  '/about': '/story',
  '/story': '/story',
  '/home': '',
  '/branches': '/boutique',
  '/menu': '/collection',
  '/policy': '/legal/privacy',
  '/policy/terms': '/legal/terms',
  '/category/6-presence-collection': '/collection',
};

/** Paths that belong to the storefront, not this site. */
const STOREFRONT_PREFIXES = ['/product', '/checkout', '/cart', '/order', '/login', '/lookup'];

export const redirects: Redirects = async () => {
  const storefront = process.env.NEXT_PUBLIC_STOREFRONT_ORIGIN ?? 'https://watrqa.com';

  const pageRedirects = Object.entries(PAGE_MAP).flatMap(([from, to]) => [
    // The old Arabic tree lived unprefixed, so this always redirects.
    { source: from, destination: `/ar${to}`, permanent: true },
    // The English tree was already prefixed. Where a path keeps its name
    // (/en/story), emitting a redirect would point the URL at itself and
    // 308-loop, so only paths that actually move get one.
    ...(from === to ? [] : [{ source: `/en${from}`, destination: `/en${to}`, permanent: true }]),
  ]);

  const storefrontRedirects = STOREFRONT_PREFIXES.flatMap((prefix) => [
    {
      source: `${prefix}/:path*`,
      destination: `${storefront}${prefix}/:path*`,
      permanent: false,
    },
    {
      source: `/en${prefix}/:path*`,
      destination: `${storefront}/en${prefix}/:path*`,
      permanent: false,
    },
  ]);

  return [...pageRedirects, ...storefrontRedirects];
};
