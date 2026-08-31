import type { Localised, StorySection } from './types';

/** Home manifesto. */
export const HOME_HEADING: Localised<string> = {
  ar: 'الوَطَر هو المراد',
  en: 'The Essence of Desire',
};

export const HOME_MANIFESTO: Localised<string[]> = {
  ar: [
    'في عالمٍ يزدحم بالتشابه، تبقى الندرة هي الفخامة الحقيقية.',
    'وَطَر علامة عطرية قطرية وُلدت من معنى الوَطَر؛ المراد والمقصود. نصنع تجارب عطرية تُجسّد الحضور، وتترجم الشخصية، وتمنح كل لحظة أثرًا يليق بها.',
    'نؤمن أن العطر ليس تفصيلًا إضافيًا، بل توقيعٌ غير مرئي يسبق الكلمات ويبقى بعد الغياب.',
    'لذلك نختار مكوناتنا بعناية، ونبتكر تركيبات تحمل طابعًا فريدًا يجمع بين الأصالة والفخامة المعاصرة.',
  ],
  en: [
    'In a world crowded with similarity, rarity becomes the ultimate luxury.',
    // The English original omitted the Qatari origin the Arabic states plainly.
    'WATR is a Qatari fragrance house, born from the meaning of waṭar — the thing intended, the thing sought. We craft fragrances that embody presence, express individuality and leave a lasting impression.',
    'To us, fragrance is not an accessory. It is an invisible signature that speaks before words and remains long after departure.',
    // Restored: this paragraph existed only in the Arabic original.
    'That is why we choose our materials with care and compose blends with a character of their own, where authenticity meets contemporary luxury.',
  ],
};

/** The house story. Absorbs the old /about, /home and /story into one narrative. */
export const STORY_SECTIONS: StorySection[] = [
  {
    heading: { ar: 'قصتنا', en: 'Our Story' },
    body: {
      ar: [
        'في عالمٍ تمتلئ فيه الخيارات، وُلدت وَطَر بفكرة بسيطة: أن يكون العطر أكثر من مجرد رائحة.',
        'نؤمن أن العطر جزء من الهوية، وتفصيلٌ صغير قادر على أن يترك أثرًا كبيرًا. لذلك صُممت عطور وَطَر بعناية لتجمع بين الفخامة، والجودة، والحضور الذي يبقى في الذاكرة.',
      ],
      en: [
        'In a world full of choices, WATR was born from a simple belief: that a fragrance should be more than just a scent.',
        'We believe perfume is part of one’s identity — a small detail capable of leaving a lasting impression. Every WATR fragrance is crafted with care, combining luxury, quality and a presence that lingers in memory.',
      ],
    },
  },
  {
    heading: { ar: 'الاسم', en: 'The Name' },
    body: {
      ar: [
        'اخترنا اسم وَطَر لأن الوَطَر هو المراد والمقصود، ولأننا نؤمن أن لكل شخص حضورًا يسعى إليه، وشعورًا يبحث عنه، وذكرى يريد أن يتركها خلفه.',
        'من هنا بدأت رحلتنا.',
      ],
      en: [
        // The live English page stops dead at "every person seeks". Completed
        // from the Arabic, which carries the full thought.
        'We chose the name WATR because the Arabic word waṭar means the desired purpose, the ultimate intention. It reflects our belief that every person seeks a presence they aspire to, a feeling they search for, and a memory they wish to leave behind.',
        'That is where our journey began.',
      ],
    },
  },
  {
    heading: { ar: 'رؤيتنا', en: 'Our Vision' },
    body: {
      ar: [
        'أن تصبح وَطَر من أبرز العلامات العطرية العربية الفاخرة، وأن تُعرف عالميًا بتقديم عطور تحمل هوية أصيلة، وجودة استثنائية، وحضورًا لا يُنسى.',
        'نسعى إلى بناء إرث عطري يجمع بين الفخامة المعاصرة والروح العربية، ليصبح اسم وَطَر مرادفًا للتميز والأناقة والحضور.',
      ],
      en: [
        'To become one of the leading luxury fragrance houses in the Arab world, and to be recognised globally for fragrances that carry an authentic identity, exceptional quality and an unforgettable presence.',
        'We aspire to build a fragrance legacy that blends contemporary luxury with an Arabian spirit, making WATR synonymous with distinction, elegance and presence.',
      ],
    },
  },
];

/** The Presence Collection. */
export const COLLECTION_NAME: Localised<string> = {
  ar: 'مجموعة الحضور',
  en: 'The Presence Collection',
};

export const COLLECTION_INTRO: Localised<string> = {
  ar: 'ثلاثة عطور، لكل منها طابعه وحضوره الخاص.',
  en: 'Three fragrances, each with its own character and presence.',
};

/**
 * The boutique. The old record had an empty streetAddress and claimed
 * "Open 24 Hours" every day of the week — untouched platform defaults.
 * Coordinates are the ones published in the live JSON-LD.
 */
export const BOUTIQUE = {
  coordinates: { lat: 25.279851857026134, lng: 51.53492652997187 },
  name: { ar: 'وَطَر — الدوحة', en: 'WATR — Doha' },
  // TODO(content): confirm the street address and real trading hours with the
  // business before launch. Deliberately left null rather than shipping the
  // placeholder values the old site carried.
  streetAddress: null as Localised<string> | null,
  hours: null as Localised<string> | null,
} as const;
