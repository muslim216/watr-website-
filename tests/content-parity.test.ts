import { describe, expect, it } from 'vitest';
import { products } from '@/content/products';
import {
  BRAND_NAME,
  BRAND_NAME_FULL,
  STOREFRONT_ORIGIN,
  TAGLINE,
} from '@/content/brand';
import {
  COLLECTION_INTRO,
  COLLECTION_NAME,
  HOME_HEADING,
  HOME_MANIFESTO,
  STORY_SECTIONS,
} from '@/content/pages';
import { routing } from '@/i18n/routing';
import en from '@/messages/en.json';
import ar from '@/messages/ar.json';

const LOCALES = routing.locales;

/**
 * Every finding in brand-analysis.md that copy alone could reintroduce is
 * encoded here as an assertion. These are cheap and they run in CI.
 */

/** Walk any nested structure and yield every string with a readable path. */
function* strings(value: unknown, path = '$'): Generator<[string, string]> {
  if (typeof value === 'string') {
    yield [path, value];
  } else if (Array.isArray(value)) {
    for (const [i, v] of value.entries()) yield* strings(v, `${path}[${i}]`);
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) yield* strings(v, `${path}.${k}`);
  }
}

/** Every localised object in the content layer, labelled for test output. */
const localisedObjects: Array<[string, Record<string, unknown>]> = [
  ['TAGLINE', TAGLINE],
  ['BRAND_NAME', BRAND_NAME],
  ['BRAND_NAME_FULL', BRAND_NAME_FULL],
  ['HOME_HEADING', HOME_HEADING],
  ['HOME_MANIFESTO', HOME_MANIFESTO],
  ['COLLECTION_NAME', COLLECTION_NAME],
  ['COLLECTION_INTRO', COLLECTION_INTRO],
  ...STORY_SECTIONS.flatMap((s, i) => [
    [`STORY_SECTIONS[${i}].heading`, s.heading] as [string, Record<string, unknown>],
    [`STORY_SECTIONS[${i}].body`, s.body] as [string, Record<string, unknown>],
  ]),
  ...products.flatMap((p) => {
    const fields: Array<[string, Record<string, unknown>]> = [
      [`${p.slug}.name`, p.name],
      [`${p.slug}.summary`, p.summary],
      [`${p.slug}.story`, p.story],
      [`${p.slug}.signature`, p.signature],
      [`${p.slug}.storefrontPath`, p.storefrontPath],
    ];
    if (p.notes) {
      fields.push(
        [`${p.slug}.notes.top`, p.notes.top],
        [`${p.slug}.notes.heart`, p.notes.heart],
        [`${p.slug}.notes.base`, p.notes.base],
      );
    }
    return fields;
  }),
];

describe('locale parity', () => {
  it.each(localisedObjects)('%s has an entry for every locale', (_label, obj) => {
    expect(Object.keys(obj).sort()).toEqual([...LOCALES].sort());
  });

  it('message catalogues have identical key trees', () => {
    const keys = (o: unknown, prefix = ''): string[] =>
      o && typeof o === 'object' && !Array.isArray(o)
        ? Object.entries(o).flatMap(([k, v]) => [
            `${prefix}${k}`,
            ...keys(v, `${prefix}${k}.`),
          ])
        : [];
    expect(keys(ar).sort()).toEqual(keys(en).sort());
  });

  it('array-valued localised fields have matching lengths across locales', () => {
    for (const [label, obj] of localisedObjects) {
      const arrays = Object.entries(obj).filter(([, v]) => Array.isArray(v));
      if (arrays.length === 0) continue;
      const lengths = new Set(arrays.map(([, v]) => (v as unknown[]).length));
      expect(lengths.size, `${label} paragraph counts differ across locales`).toBe(1);
    }
  });
});

describe('text hygiene', () => {
  const allStrings = [
    ...localisedObjects.flatMap(([label, obj]) =>
      [...strings(obj)].map(([p, s]) => [`${label}${p.slice(1)}`, s] as const),
    ),
    ...[...strings(en)].map(([p, s]) => [`en${p.slice(1)}`, s] as const),
    ...[...strings(ar)].map(([p, s]) => [`ar${p.slice(1)}`, s] as const),
  ];

  it('contains no bidi control characters', () => {
    // U+200E/200F marks and U+202A–202E embedding controls leaked into the old
    // site's English copy and its og:description.
    const bidi = /[‎‏‪-‮⁦-⁩]/;
    const offenders = allStrings.filter(([, s]) => bidi.test(s));
    expect(offenders.map(([p]) => p)).toEqual([]);
  });

  it('contains no placeholder copy', () => {
    const placeholder = /lorem ipsum|dolor sit amet|TBD|xxx/i;
    const offenders = allStrings.filter(([, s]) => placeholder.test(s));
    expect(offenders.map(([p]) => p)).toEqual([]);
  });

  it('has no empty or whitespace-only strings', () => {
    const offenders = allStrings.filter(([, s]) => s.trim().length === 0);
    expect(offenders.map(([p]) => p)).toEqual([]);
  });

  it('has no untrimmed strings', () => {
    const offenders = allStrings.filter(([, s]) => s !== s.trim());
    expect(offenders.map(([p]) => p)).toEqual([]);
  });

  it('has no Latin text run directly into Arabic script', () => {
    // The old collection copy read "WATR Collectionلأن بعض الهدايا".
    const runOn = /[A-Za-z][؀-ۿ]|[؀-ۿ][A-Za-z]/;
    const offenders = allStrings.filter(([, s]) => runOn.test(s));
    expect(offenders.map(([p]) => p)).toEqual([]);
  });
});

describe('prose completeness', () => {
  /** Prose fields only — headings, names and note lists are fragments. */
  const proseFields = [
    ['HOME_MANIFESTO', HOME_MANIFESTO],
    ...STORY_SECTIONS.map(
      (s, i) => [`STORY_SECTIONS[${i}].body`, s.body] as const,
    ),
    ...products.map((p) => [`${p.slug}.story`, p.story] as const),
    ...products.map((p) => [`${p.slug}.summary`, p.summary] as const),
    ...products.map((p) => [`${p.slug}.signature`, p.signature] as const),
  ] as Array<readonly [string, Record<string, string | string[]>]>;

  it('every prose sentence terminates', () => {
    // The live English Story page ends mid-sentence at "every person seeks".
    const terminated = /[.!?،؟…]["»”]?$/;
    const offenders: string[] = [];
    for (const [label, obj] of proseFields) {
      for (const [path, s] of strings(obj, label)) {
        if (!terminated.test(s.trim())) offenders.push(`${path}: "…${s.slice(-40)}"`);
      }
    }
    expect(offenders).toEqual([]);
  });
});

describe('brand line', () => {
  it('defines exactly one tagline per locale', () => {
    for (const locale of LOCALES) {
      expect(typeof TAGLINE[locale]).toBe('string');
      expect(TAGLINE[locale].length).toBeGreaterThan(0);
    }
  });

  it('vocalises the Arabic wordmark', () => {
    // The fatḥas distinguish waṭar (intent) from other readings, and the
    // brand's naming story depends on that reading.
    for (const value of [BRAND_NAME.ar, BRAND_NAME_FULL.ar]) {
      expect(value, `"${value}" is missing its diacritics`).toMatch(/َ/);
    }
  });
});

describe('storefront links', () => {
  it('every product resolves to a storefront URL in every locale', () => {
    for (const product of products) {
      for (const locale of LOCALES) {
        const path = product.storefrontPath[locale];
        expect(path.startsWith('/'), `${product.slug}/${locale}`).toBe(true);
        expect(() => new URL(path, STOREFRONT_ORIGIN)).not.toThrow();
      }
    }
  });

  it('does not double-encode percent-escaped slugs', () => {
    // Cálido's storefront slug is `9-c%C3%A1lido`; re-encoding kills the link.
    for (const product of products) {
      for (const locale of LOCALES) {
        expect(product.storefrontPath[locale]).not.toMatch(/%25/);
      }
    }
  });

  it('uses unique slugs', () => {
    const slugs = products.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
