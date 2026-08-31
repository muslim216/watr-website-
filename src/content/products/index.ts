import type { Product } from '../types';
import { calma } from './calma';
import { bruma } from './bruma';
import { calido } from './calido';
import { watrCollection } from './collection';

/** Display order: the three singles, then the set. */
export const products: Product[] = [calma, bruma, calido, watrCollection];

export const productsBySlug = new Map(products.map((p) => [p.slug, p]));

export function getProduct(slug: string): Product | undefined {
  return productsBySlug.get(slug);
}

export { calma, bruma, calido, watrCollection };
