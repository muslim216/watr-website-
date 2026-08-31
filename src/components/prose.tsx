import type { ReactNode } from 'react';

export function Section({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`mx-auto max-w-6xl px-5 py-16 md:py-24 ${className}`}>{children}</section>;
}

/** Measure capped for readability; Arabic leading is handled in base styles. */
export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-prose space-y-5">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-warm-700">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export function PageHeading({ children }: { children: ReactNode }) {
  return <h1 className="text-4xl text-maroon md:text-5xl">{children}</h1>;
}
