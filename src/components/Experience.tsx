import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience, type Role } from "@/data/profile";
import { formatDuration, formatRange } from "@/lib/dates";
import { slug } from "@/lib/utils";
import Section from "./Section";

const VISIBLE = 3;

const Logo = ({ src, alt }: { src?: string; alt: string }) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-rule bg-white text-sm font-semibold">
        {alt.charAt(0)}
      </span>
    );
  }
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-rule bg-white p-1.5">
      <img src={src} alt="" className="h-full w-full object-contain" onError={() => setFailed(true)} />
    </span>
  );
};

const RoleEntry = ({ role }: { role: Role }) => {
  const [expanded, setExpanded] = useState(false);
  const hidden = role.highlights.length - VISIBLE;
  const shown = expanded ? role.highlights : role.highlights.slice(0, VISIBLE);
  const listId = `role-${slug(role.company)}-highlights`;

  return (
    <li id={`role-${slug(role.company)}`} className="grid gap-4 py-10 first:pt-0 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
      <div className="tabular text-sm text-graphite">
        <p className={role.end === null ? "font-medium text-cobalt" : "font-medium text-ink"}>
          {formatRange(role.start, role.end)}
        </p>
        <p className="mt-0.5">{formatDuration(role.start, role.end)}</p>
      </div>

      <div className="min-w-0">
        <div className="flex items-start gap-4">
          <Logo src={role.logo} alt={role.company} />
          <div>
            <h3 className="text-xl font-semibold leading-snug tracking-tight">
              {role.role}, {role.company}
            </h3>
            <p className="text-sm text-graphite">{role.location}</p>
          </div>
        </div>

        <ul id={listId} className="mt-5 space-y-3">
          {shown.map((h) => (
            <li
              key={h}
              className="relative pl-5 text-[0.9875rem] leading-relaxed before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-2.5 before:bg-graphite"
            >
              {h}
            </li>
          ))}
        </ul>

        {hidden > 0 && (
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 inline-flex items-center gap-1 pl-5 text-sm font-medium text-cobalt hover:underline"
          >
            {expanded ? "Show less" : `Show ${hidden} more`}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`Technologies used at ${role.company}`}>
          {role.stack.map((s) => (
            <li key={s} className="rounded border border-rule bg-white/70 px-2 py-0.5 text-xs text-graphite">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const Experience = () => (
  <Section id="experience" title="Experience">
    <ol className="divide-y divide-rule">
      {experience.map((role) => (
        <RoleEntry key={role.company} role={role} />
      ))}
    </ol>
  </Section>
);

export default Experience;
