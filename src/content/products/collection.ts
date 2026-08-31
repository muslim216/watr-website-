import type { Product } from '../types';

export const watrCollection: Product = {
  slug: 'watr-collection',
  price: { value: 575, currency: 'QAR' },
  volumeMl: null,
  concentration: 'set',
  storefrontPath: {
    ar: '/product/15-watr-collection',
    en: '/en/product/15-watr-collection',
  },
  image: '/images/products/watr-collection.jpg',
  notes: null,
  name: { ar: 'مجموعة وَطَر', en: 'The WATR Collection' },
  summary: {
    ar: 'ثلاث تجارب عطرية في صندوق واحد فاخر.',
    en: 'Three fragrance experiences in a single presentation box.',
  },
  story: {
    // The original ran the Latin and Arabic together with no space
    // ("WATR Collectionلأن بعض الهدايا"). Separated here.
    ar: [
      'لأن بعض الهدايا تُنسى، وبعضها يترك أثرًا.',
      'تجمع مجموعة وَطَر ثلاثة عطور مميزة: كالما، وبروما، وكاليدو، لكل عطر طابعه وحضوره الخاص.',
      'ثلاث تجارب عطرية في صندوق واحد فاخر، صُممت لتكون هدية استثنائية تليق بمن يستحق، للمناسبات واللحظات التي نريد أن تبقى في الذاكرة.',
    ],
    en: [
      'Some gifts are forgotten. Others leave a lasting impression.',
      'The WATR Collection brings together three distinctive fragrances — Calma, Bruma and Cálido — each with its own character and presence.',
      'Three fragrance experiences presented in one box, made to be given for the occasions and moments meant to be remembered.',
    ],
  },
  signature: {
    ar: 'وَطَر — لكل مناسبة أثر، ولكل أثر عطر.',
    en: 'WATR — Every occasion leaves a mark, and every mark has a fragrance.',
  },
};
