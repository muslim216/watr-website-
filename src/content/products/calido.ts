import type { Product } from '../types';

export const calido: Product = {
  slug: 'calido',
  price: { value: 275, currency: 'QAR' },
  volumeMl: 100,
  concentration: 'extrait',
  /**
   * The storefront slug carries a percent-encoded accent. Used verbatim —
   * re-encoding produces `9-c%25C3%25A1lido` and a dead link.
   */
  storefrontPath: {
    ar: '/product/9-c%C3%A1lido',
    en: '/en/product/9-c%C3%A1lido',
  },
  image: '/images/products/calido.jpg',
  notes: {
    top: {
      ar: ['الكركديه', 'النعناع', 'القرفة'],
      en: ['Hibiscus', 'Peppermint', 'Cinnamon'],
    },
    heart: { ar: ['الفلفل الوردي'], en: ['Pink pepper'] },
    base: {
      ar: ['المسك الأبيض', 'الفانيليا', 'الجلد'],
      en: ['White musk', 'Vanilla', 'Leather'],
    },
  },
  name: { ar: 'كاليدو', en: 'Cálido' },
  summary: {
    ar: 'ليس مجرد عطر، بل شعور بالدفء يرافقك أينما ذهبت.',
    en: 'More than a fragrance — a feeling of warmth that stays with you.',
  },
  story: {
    ar: [
      'ليس مجرد عطر، بل شعور بالدفء يرافقك أينما ذهبت.',
      'يفتتح كاليدو بنفحات منعشة من الكركديه والنعناع تتناغم مع دفء القرفة، ثم يكشف عن قلب نابض بالفلفل الوردي يضفي لمسة حيوية وآسرة. وفي القاعدة يمتزج المسك الأبيض مع الفانيليا والجلد ليترك أثرًا دافئًا، أنيقًا، ولا يُنسى.',
    ],
    en: [
      'More than a fragrance — a feeling of warmth that stays with you.',
      'Cálido opens with refreshing notes of hibiscus and peppermint, enriched by the comforting warmth of cinnamon. At its heart, pink pepper adds a vibrant and captivating character. The fragrance settles into a rich base of white musk, vanilla and leather, leaving behind a warm, elegant and unforgettable trail.',
    ],
  },
  signature: {
    ar: 'كاليدو — الدفء الذي تتذكره.',
    en: 'Cálido — The Warmth You Remember.',
  },
};
