import { profile } from "@/data/profile";

const NAV = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const SiteHeader = () => (
  <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-sm">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
    >
      Skip to content
    </a>
    <div className="container flex h-16 items-center justify-between gap-6">
      <a href="#top" className="font-semibold tracking-tight">
        {profile.name}
      </a>
      <nav aria-label="Sections" className="flex items-center gap-1 sm:gap-6">
        <ul className="hidden items-center gap-6 text-sm text-graphite sm:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-ink px-3.5 py-2 text-sm font-medium text-paper transition-colors hover:bg-cobalt"
        >
          Email me
        </a>
      </nav>
    </div>
  </header>
);

export default SiteHeader;
