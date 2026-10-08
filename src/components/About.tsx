import { profile } from "@/data/profile";
import Section from "./Section";

const About = () => (
  <Section id="about" title="About">
    <div className="max-w-[40rem] space-y-5 text-xl leading-relaxed">
      {profile.about.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
    </div>

    <dl className="mt-14 grid gap-x-10 gap-y-8 border-t border-rule pt-10 sm:grid-cols-3">
      {profile.focus.map((f) => (
        <div key={f.title}>
          <dt className="font-semibold">{f.title}</dt>
          <dd className="mt-2 text-[0.9375rem] leading-relaxed text-graphite">{f.body}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default About;
