import { skills } from "@/data/profile";
import Section from "./Section";

const Skills = () => (
  <Section id="skills" title="Skills">
    <dl className="divide-y divide-rule border-y border-rule">
      {skills.map((s) => (
        <div key={s.group} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-8">
          <dt className="font-semibold">{s.group}</dt>
          <dd className="text-graphite">{s.items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
