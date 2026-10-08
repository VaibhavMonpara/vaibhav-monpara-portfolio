import { education, experience } from "@/data/profile";
import { formatRange, toMonthIndex } from "@/lib/dates";
import { slug } from "@/lib/utils";

type Bar = {
  key: string;
  label: string;
  detail: string;
  start: number;
  end: number;
  href?: string;
  current?: boolean;
};

/**
 * Proportional timeline of every role and degree, built from profile data.
 * Work sits on the top lane, study on the bottom lane, so overlaps stay readable.
 */
const CareerTimeline = () => {
  const now = toMonthIndex(null);
  const firstWork = Math.min(...experience.map((r) => toMonthIndex(r.start)));
  const axisStart = firstWork - 3;
  const axisEnd = now + 3;
  const span = axisEnd - axisStart;

  const pct = (m: number) => ((Math.max(m, axisStart) - axisStart) / span) * 100;

  const work: Bar[] = [...experience]
    .sort((a, b) => toMonthIndex(a.start) - toMonthIndex(b.start))
    .map((r) => ({
      key: r.company,
      label: r.company.replace(" Technologies", ""),
      detail: `${r.role} at ${r.company}, ${formatRange(r.start, r.end)}`,
      start: toMonthIndex(r.start),
      end: toMonthIndex(r.end) + 1,
      href: `#role-${slug(r.company)}`,
      current: r.end === null,
    }));

  const study: Bar[] = education.map((e) => ({
    key: e.degree,
    label: e.degree.split(" ")[0],
    detail: `${e.degree}, ${e.school}, ${formatRange(e.start, e.end)}`,
    start: toMonthIndex(e.start),
    end: toMonthIndex(e.end) + 1,
  }));

  const firstYear = Math.ceil(axisStart / 12);
  const years: number[] = [];
  for (let y = firstYear; y * 12 <= axisEnd; y++) {
    const at = pct(y * 12);
    if (at > 2 && at < 97) years.push(y);
  }

  const renderLane = (bars: Bar[], kind: "work" | "study") => (
    <ol className="relative h-11">
      {bars.map((bar, i) => {
        const left = pct(bar.start);
        const width = pct(bar.end) - left;
        const tone =
          kind === "study"
            ? "hatch bg-paper text-ink ring-1 ring-inset ring-rule"
            : bar.current
              ? "bg-cobalt text-white"
              : "bg-ink text-paper hover:bg-graphite";
        const Tag = bar.href ? "a" : "span";
        return (
          <li
            key={bar.key}
            className="absolute inset-y-0"
            style={{ left: `${left}%`, width: `${width}%` }}
          >
            <Tag
              {...(bar.href ? { href: bar.href } : {})}
              title={bar.detail}
              className={`flex h-full origin-left animate-grow-x items-center overflow-hidden whitespace-nowrap rounded-[3px] px-2 text-xs font-medium transition-colors ${tone}`}
              style={{ animationDelay: `${150 + i * 110}ms` }}
            >
              <span aria-hidden="true">{bar.label}</span>
              <span className="sr-only">{bar.detail}</span>
            </Tag>
          </li>
        );
      })}
    </ol>
  );

  return (
    <figure className="mt-14 md:mt-20">
      <figcaption className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-sm text-graphite">
        <span>Career so far</span>
        <span className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-ink" aria-hidden="true" /> Work
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-cobalt" aria-hidden="true" /> Current
          </span>
          <span className="flex items-center gap-1.5">
            <span className="hatch h-2.5 w-2.5 rounded-sm ring-1 ring-inset ring-rule" aria-hidden="true" /> Study
          </span>
        </span>
      </figcaption>

      <div className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
        <div className="min-w-[38rem] space-y-1.5">
          {renderLane(work, "work")}
          {renderLane(study, "study")}

          <div className="relative h-6 border-t border-rule" aria-hidden="true">
            {years.map((y) => (
              <span
                key={y}
                className="tabular absolute top-0 -translate-x-1/2 pt-1.5 text-xs text-graphite before:absolute before:left-1/2 before:top-0 before:h-1.5 before:w-px before:bg-rule"
                style={{ left: `${pct(y * 12)}%` }}
              >
                {y}
              </span>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
};

export default CareerTimeline;
