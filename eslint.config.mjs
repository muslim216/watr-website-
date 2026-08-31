import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

/**
 * The site is bilingual (Arabic default, English secondary) and must mirror
 * cleanly. Physical-direction utilities silently break RTL, so they fail lint
 * rather than review. Use logical equivalents: ms/me, ps/pe, start/end,
 * text-start/text-end, border-s/border-e, rounded-s/rounded-e.
 */
const PHYSICAL_DIRECTION_UTILITIES =
  /(^|\s)(-?(ml|mr|pl|pr)-|(left|right)-|text-(left|right)(\s|$)|float-(left|right)(\s|$)|clear-(left|right)(\s|$)|border-[lr](-|\s|$)|rounded-[lr](-|\s|$))/;

const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'coverage/**'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: `JSXAttribute[name.name='className'] Literal[value=${PHYSICAL_DIRECTION_UTILITIES}]`,
          message:
            'Physical-direction utility breaks RTL. Use the logical equivalent (ms/me, ps/pe, start/end, text-start/text-end, border-s/border-e, rounded-s/rounded-e).',
        },
        {
          selector: `JSXAttribute[name.name='className'] TemplateElement[value.raw=${PHYSICAL_DIRECTION_UTILITIES}]`,
          message:
            'Physical-direction utility breaks RTL. Use the logical equivalent (ms/me, ps/pe, start/end, text-start/text-end, border-s/border-e, rounded-s/rounded-e).',
        },
      ],
    },
  },
];

export default config;
