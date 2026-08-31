import type { ReactNode } from 'react';

/**
 * The locale layout owns <html>, since lang and dir are locale-dependent.
 * This root exists only to satisfy the App Router's structure.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
