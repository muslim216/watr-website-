# WATR Perfumes — watrqa.com

Bilingual (Arabic-first) brand site for WATR Perfumes / وَطَر للعطور, a Qatari
fragrance house.

Background and rationale for the rebuild are in [`brand-analysis.md`](./brand-analysis.md).

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind v4 · next-intl · Vitest.
Every route is statically prerendered in both locales.

## Commands

```bash
npm run dev        # local dev server
npm run build      # production build
npm run check      # typecheck + lint + tests
```

## Architecture

**Locales.** Arabic is the default (`/ar`), English secondary (`/en`); `/`
redirects to `/ar`. Direction and fonts switch by locale in
`src/app/[locale]/layout.tsx`.

**Commerce is not here.** Cart, checkout (SkipCash and cash on delivery), the
gift flow, accounts and order status stay on the Mnasati storefront. Buy
buttons deep-link out via `src/lib/storefront.ts`. Set
`NEXT_PUBLIC_STOREFRONT_ORIGIN` when the storefront moves to its own subdomain.

**Content lives in `src/content/`**, not in components — typed modules with one
entry per locale. `src/content/brand.ts` is the single source of truth for the
brand line; the previous site ran eleven variants of it.

## The parity tests are load-bearing

`tests/content-parity.test.ts` encodes the content defects found on the live
site so they cannot return: locale key parity, matching paragraph counts, no
bidi control characters, no placeholder copy, prose that terminates, no Latin
running into Arabic, and storefront paths that are never double-encoded.
`tests/redirects.test.ts` guards the redirect map against self-redirects and
shadowed routes.

If one of these fails, the fix is the content, not the test.

## RTL

Use logical properties only — `ms/me`, `ps/pe`, `start/end`, `text-start/end`,
`border-s/e`, `rounded-s/e`. Physical-direction utilities (`ml-`, `text-left`,
…) fail lint, because they silently break the Arabic layout. Mirror navigation
and directional icons; never mirror the wordmark or product photography.

## Environment

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_ORIGIN` | `https://watrqa.com` | Canonical URLs, hreflang, sitemap |
| `NEXT_PUBLIC_STOREFRONT_ORIGIN` | `https://watrqa.com` | Storefront deep links and commerce redirects |

## Open items

- **Figma tokens.** The palette, type scale and spacing in
  `src/app/globals.css` are placeholders derived from the brand analysis.
  Only `--color-maroon` (`#751239`) is confirmed. Publish the Figma Make
  project and the tokens get replaced from it.
- **Legal content** in `src/content/legal.ts` is drafted from observable facts
  and marked `reviewed: false`. Pages show a review notice until the business
  approves the text. Do not flip the flag without that approval.
- **Boutique address and hours** are `null` pending confirmation; the page says
  so rather than repeating the placeholder values in the live record.
- **Assets.** The wordmark exists only as a 350px PNG and needs tracing to SVG;
  product photography and favicons are still to come.
- **English tagline** in `src/content/brand.ts` is a recommendation, not a
  final decision. Alternatives are listed alongside it.
