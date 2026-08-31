import type { Product } from '../types';

export const calma: Product = {
  slug: 'calma',
  price: { value: 275, currency: 'QAR' },
  volumeMl: 100,
  concentration: 'extrait',
  storefrontPath: { ar: '/product/6-calma', en: '/en/product/6-calma' },
  image: '/images/products/calma.jpg',
  notes: {
    top: {
      ar: ['البرغموت', 'الكريب فروت', 'الفلفل الوردي'],
      en: ['Bergamot', 'Grapefruit', 'Pink pepper'],
    },
    heart: {
      ar: ['اللافندر', 'الماندرين', 'التبغ الناعم'],
      en: ['Lavender', 'Mandarin', 'Soft tobacco'],
    },
    base: {
      ar: ['الأمبروكسان', 'الفانيليا', 'الزنجبيل'],
      en: ['Ambroxan', 'Vanilla', 'Ginger'],
    },
  },
  name: { ar: 'كالما', en: 'Calma' },
  summary: {
    ar: 'ليس العطر الذي يطلب الانتباه، بل العطر الذي يفرضه.',
    en: 'Not a fragrance that seeks attention, but one that commands it.',
  },
  story: {
    ar: [
      'ليس العطر الذي يطلب الانتباه، بل العطر الذي يفرضه.',
      'يفتتح كالما بنفحات منعشة من البرغموت والكريب فروت تتزين بلمسة من الفلفل الوردي، ثم يكشف عن قلب أنيق من اللافندر والماندرين والتبغ الناعم. وفي القاعدة يستقر الأمبروكسان والفانيليا والزنجبيل ليترك أثرًا دافئًا ونظيفًا يدوم لساعات.',
      // Restored: this paragraph existed only in the English original.
      'كالما ليس صاخبًا ليطلب الانتباه؛ بل واثق بما يكفي ليناله. عطرٌ للرجل الذي لا يحتاج أن يثبت نفسه، لأن حضوره يتحدث قبل كلماته.',
    ],
    en: [
      'Not a fragrance that seeks attention, but one that commands it.',
      'Calma opens with bright notes of bergamot and grapefruit, elevated by a refined touch of pink pepper. At its heart lies an elegant blend of lavender, fresh mandarin and smooth tobacco. The base settles into ambroxan, vanilla and ginger, creating a warm, clean trail that lingers for hours.',
      'Calma is not loud enough to demand attention; it is confident enough to earn it. A fragrance for the man who never needs to prove himself, because his presence speaks before his words.',
    ],
  },
  signature: {
    ar: 'كالما — للرجال الذين يعرفون قيمتهم.',
    en: 'Calma — For Men Who Know Their Worth.',
  },
};
