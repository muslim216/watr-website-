import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';
import { redirects } from './src/lib/redirects';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  redirects,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ksacdn4.mnasaticdn.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default withNextIntl(nextConfig);
