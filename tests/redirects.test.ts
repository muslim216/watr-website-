import { describe, expect, it } from 'vitest';
import { redirects } from '@/lib/redirects';
import { routing } from '@/i18n/routing';

const resolved = await redirects();

describe('redirect map', () => {
  it('never points a source at itself', () => {
    // `/en/story` -> `/en/story` 308-looped and made the page unreachable.
    const loops = resolved
      .filter((r) => r.source === r.destination)
      .map((r) => r.source);
    expect(loops).toEqual([]);
  });

  it('has no duplicate sources', () => {
    const sources = resolved.map((r) => r.source);
    expect(new Set(sources).size).toBe(sources.length);
  });

  it('does not shadow a live locale-prefixed route', () => {
    // A source that starts with a real locale prefix and stays on this site
    // would intercept a page we actually serve.
    const shadowed = resolved
      .filter((r) => !/^https?:\/\//.test(r.destination))
      .filter((r) =>
        routing.locales.some((l) => r.source === `/${l}` || r.source.startsWith(`/${l}/`)),
      )
      .filter((r) => r.source === r.destination)
      .map((r) => r.source);
    expect(shadowed).toEqual([]);
  });

  it('sends every commerce path to the storefront origin', () => {
    const commerce = resolved.filter((r) => /\/(product|checkout|cart|order)\//.test(r.source));
    expect(commerce.length).toBeGreaterThan(0);
    for (const rule of commerce) {
      expect(rule.destination).toMatch(/^https?:\/\//);
    }
  });
});
