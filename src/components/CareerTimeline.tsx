import { education, experience } from "@/data/profile";
import { formatRange, toMonthIndex } from "@/lib/dates";
import { slug } from "@/lib/utils";

/** "2018-11" → "2018"; spans collapse to "2018–20", "2024", "2026–now". */
function yearSpan(start: string, end: string | null): string {
  const s = start.slice(0, 4);
  if (end === null) return `${s}–now`;
  const e = end.slice(0, 4);
  return s === e ? s : `${s}–${e.slice(2)}`;
}

/**
 * Proportional career line built from profile data. Each role is a segment on a
 * hairline track, labelled above with the company and years; degrees run as a
 * dashed line underneath so overlaps with work stay readable.
 */
const CareerTimeline = () => {
  const now = toMonthIndex(null);
  const firstWork = Math.min(...experience.map((r) => toMonthIndex(r.start)));
  const axisStart = firstWork - 2;
  const axisEnd = now + 1;
  const span = axisEnd - axisStart;
  const pct = (m: number) => ((Math.min(Math.max(m, axisStart), axisEnd) - axisStart) / span) * 100;

  const roles = [...experience].sort((a, b) => toMonthIndex(a.start) - toMonthIndex(b.start));
  const longest = Math.max(...roles.map((r) => toMonthIndex(r.end) - toMonthIndex(r.start) + 1));

  return (
    <figure className="mt-16 md:mt-20">
      <figcaption className="mb-6 text-sm text-graphite">Career so far</figcaption>

      {/* Phones: newest first, bar length proportional to time in role */}
      <ol className="space-y-4 sm:hidden">
        {[...roles].reverse().map((r) => {
          const months = toMonthIndex(r.end) - toMonthIndex(r.start) + 1;
          const current = r.end === null;
          return (
            <li key={r.company}>
              <a href={`#role-${slug(r.company)}`} className="block">
                <span className="flex items-baseline justify-between gap-4">
                  <span className={`text-sm font-semibold ${current ? "text-cobalt" : "text-ink"}`}>
                    {r.company.replace(" Technologies", "")}
                  </span>
                  <span className="tabular text-xs text-graphite">{yearSpan(r.start, r.end)}</span>
                </span>
                <span className="mt-1.5 block h-px bg-rule">
                  <span
                    className={`block h-1.5 -translate-y-[2.5px] origin-left animate-grow-x rounded-full ${
                      current ? "bg-cobalt" : "bg-ink"
                    }`}
                    style={{ width: `${Math.max((months / longest) * 100, 6)}%` }}
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ol>

      <div className="hidden sm:block">
        <div className="relative pr-12">
          {/* Work */}
          <ol className="relative h-[4.75rem]">
            {roles.map((r, i) => {
              const next = roles[i + 1];
              // A role ending the month the next one starts shouldn't overlap it.
              const endMonth = Math.min(
                toMonthIndex(r.end) + 1,
                next ? toMonthIndex(next.start) : Infinity,
              );
              const left = pct(toMonthIndex(r.start));
              const width = pct(endMonth) - left;
              const current = r.end === null;
              return (
                <li key={r.company} className="absolute inset-y-0" style={{ left: `${left}%`, width: `${width}%` }}>
                  <a
                    href={`#role-${slug(r.company)}`}
                    title={`${r.role} at ${r.company}, ${formatRange(r.start, r.end)}`}
                    className="group flex h-full flex-col justify-end"
                  >
                    <span
                      className={`whitespace-nowrap text-sm font-semibold leading-tight transition-colors group-hover:text-cobalt ${
                        current ? "text-cobalt" : "text-ink"
                      }`}
                    >
                      {r.company.replace(" Technologies", "")}
                    </span>
                    <span className="tabular whitespace-nowrap text-xs leading-tight text-graphite">
                      {yearSpan(r.start, r.end)}
                    </span>
                    <span className="mt-2 h-3 w-px bg-rule" aria-hidden="true" />
                    <span
                      className={`h-1.5 origin-left animate-grow-x rounded-full transition-colors ${
                        current ? "bg-cobalt" : "bg-ink group-hover:bg-cobalt"
                      } ${i < roles.length - 1 ? "mr-[3px]" : ""}`}
                      style={{ animationDelay: `${120 + i * 110}ms` }}
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      {r.role} at {r.company}, {formatRange(r.start, r.end)}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>

          {/* Track the segments sit on */}
          <div className="absolute inset-x-0 top-[calc(4.75rem-3.5px)] -z-10 h-px bg-rule" aria-hidden="true" />

          {/* Study */}
          <ol className="relative mt-4 h-9">
            {education.map((e) => {
              const left = pct(toMonthIndex(e.start));
              const width = pct(toMonthIndex(e.end) + 1) - left;
              const short = e.degree.split(" ")[0];
              return (
                <li
                  key={e.degree}
                  className="absolute top-0"
                  style={{ left: `${left}%`, width: `${width}%` }}
                  title={`${e.degree}, ${e.school}, ${formatRange(e.start, e.end)}`}
                >
                  <span className="block h-0 border-t-2 border-dashed border-graphite/40" aria-hidden="true" />
                  <span className="mt-2 block whitespace-nowrap text-xs text-graphite">
                    {short}, {e.school.split(",")[0].replace("Gujarat Technological University", "GTU")}
                  </span>
                  <span className="sr-only">
                    {e.degree}, {e.school}, {formatRange(e.start, e.end)}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </figure>
  );
};

export default CareerTimeline;
