import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

/** Two-column section: a sticky title rail on the left, content on the right. */
const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} aria-labelledby={`${id}-title`} className="border-t border-rule">
    <div className="container grid gap-6 py-16 md:grid-cols-[11rem_1fr] md:gap-12 md:py-24">
      <h2
        id={`${id}-title`}
        className="text-sm font-semibold text-graphite md:sticky md:top-24 md:self-start"
      >
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </div>
  </section>
);

export default Section;
