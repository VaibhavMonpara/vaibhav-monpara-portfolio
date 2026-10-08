import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import CareerTimeline from "./CareerTimeline";

const button =
  "inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[0.9375rem] font-medium transition-colors";

const Hero = () => (
  <section id="top" className="container pb-16 pt-16 md:pb-24 md:pt-28">
    <div className="max-w-[46rem]">
      <h1 className="text-[clamp(2.25rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg font-medium text-graphite">
        {profile.title}, {profile.location}
      </p>
      <p className="mt-8 text-[clamp(1.25rem,2.4vw,1.5rem)] leading-snug">{profile.intro}</p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a href="#contact" className={`${button} bg-ink text-paper hover:bg-cobalt`}>
          <Mail className="h-4 w-4" aria-hidden="true" />
          Get in touch
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`${button} border border-rule bg-white/60 hover:border-ink`}
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" />
          LinkedIn
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${button} border border-rule bg-white/60 hover:border-ink`}
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
      </div>
    </div>

    <CareerTimeline />
  </section>
);

export default Hero;
