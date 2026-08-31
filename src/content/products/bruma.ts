import type { Product } from '../types';

export const bruma: Product = {
  slug: 'bruma',
  price: { value: 275, currency: 'QAR' },
  volumeMl: 100,
  concentration: 'extrait',
  storefrontPath: { ar: '/product/12-bruma', en: '/en/product/12-bruma' },
  image: '/images/products/bruma.jpg',
  notes: {
    top: { ar: ['الكركديه', 'النعناع'], en: ['Hibiscus', 'Peppermint'] },
    heart: { ar: ['الورد الدمشقي'], en: ['Damask rose'] },
    base: {
      ar: ['المسك الأبيض', 'الفانيليا', 'الجلد الناعم'],
      en: ['White musk', 'Vanilla', 'Soft leather'],
    },
  },
  name: { ar: 'بروما', en: 'Bruma' },
  summary: {
    ar: 'بعض الذكريات لا تُنسى، ليس لأنها كانت الأجمل، بل لأنها تركت شيئًا منها فينا.',
    en: 'Some memories stay with us — not because they were the greatest, but because they left a part of themselves within us.',
  },
  story: {
    ar: [
      'بعض الذكريات لا تُنسى، ليس لأنها كانت الأجمل، بل لأنها تركت شيئًا منها فينا.',
      'يفتتح بروما بنفحات ناعمة من الكركديه والنعناع، ثم يتفتح على قلب من الورد الدمشقي الغني بالأناقة والرقة. وفي القاعدة يحتضن المسك الأبيض والفانيليا والجلد الناعم المكونات ليصنع أثرًا دافئًا ومخمليًا يدوم.',
      'بروما ليس عطرًا يُشم فحسب، بل شعورٌ يعود كلما مرّت رائحته.',
    ],
    en: [
      'Some memories stay with us — not because they were the greatest, but because they left a part of themselves within us.',
      'Bruma opens with delicate notes of hibiscus and peppermint, unfolding into a heart of rich Damask rose. In the base, white musk, vanilla and soft leather embrace the fragrance, leaving behind a warm, velvety trail that lingers.',
      'Bruma is not simply a fragrance to wear, but a feeling that returns every time its scent is remembered.',
    ],
  },
  signature: {
    ar: 'بروما — ليست ذكرى، بل شعور.',
    en: 'Bruma — Not a Memory. A Feeling.',
  },
};
