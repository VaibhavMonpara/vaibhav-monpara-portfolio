import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { profile } from "@/data/profile";
import CareerTimeline from "./CareerTimeline";

const Hero = () => {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="top" className="container pb-16 pt-14 md:pb-24 md:pt-24">
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(3.25rem,10vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
            {first}
            <br />
            {rest.join(" ")}
          </h1>
          <p className="mt-8 text-xl font-medium md:text-2xl">
            {profile.title}, {profile.location}
          </p>
          <p className="mt-3 max-w-[38rem] text-lg text-graphite">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 font-medium sm:px-5 sm:py-3 text-paper transition-colors hover:bg-cobalt"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get in touch
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-rule bg-white/60 px-4 py-2.5 font-medium sm:px-5 sm:py-3 transition-colors hover:border-ink"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-rule bg-white/60 px-4 py-2.5 font-medium sm:px-5 sm:py-3 transition-colors hover:border-ink"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <img
          src={profileImage}
          alt={`Portrait of ${profile.name}`}
          width={896}
          height={1194}
          className="h-40 w-32 shrink-0 rounded-md object-cover object-top grayscale-[15%] md:h-60 md:w-48"
        />
      </div>

      <CareerTimeline />
    </section>
  );
};

export default Hero;
