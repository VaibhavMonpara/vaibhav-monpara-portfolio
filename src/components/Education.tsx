import { education } from "@/data/profile";
import { formatRange } from "@/lib/dates";
import Section from "./Section";

const Education = () => (
  <Section id="education" title="Education">
    <ol className="divide-y divide-rule">
      {education.map((e) => (
        <li key={e.degree} className="grid gap-4 py-8 first:pt-0 last:pb-0 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
          <p className="tabular text-sm font-medium">{formatRange(e.start, e.end)}</p>
          <div className="flex items-start gap-4">
            {e.logo && (
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-rule bg-white p-1.5">
                <img src={e.logo} alt="" className="h-full w-full object-contain" />
              </span>
            )}
            <div>
              <h3 className="text-xl font-semibold leading-snug tracking-tight">{e.degree}</h3>
              <p className="text-graphite">
                {e.school}, {e.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                <span className="text-ink">Coursework:</span> {e.coursework.join(", ")}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Education;
