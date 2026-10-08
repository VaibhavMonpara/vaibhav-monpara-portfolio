import { ArrowUpRight, Github } from "lucide-react";
import { profile, projects, type Project } from "@/data/profile";
import Section from "./Section";

const RepoLink = ({ project }: { project: Project }) =>
  project.repo ? (
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-cobalt hover:underline"
    >
      Source code
      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="sr-only">for {project.title} on GitHub</span>
    </a>
  ) : null;

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-x-10 gap-y-12 md:grid-cols-3">
        {featured.map((p) => (
          <li key={p.title} className="flex flex-col border-t-2 border-ink pt-5">
            <h3 className="text-lg font-semibold leading-snug tracking-tight">{p.title}</h3>
            <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-graphite">{p.summary}</p>
            <p className="mt-4 text-xs leading-relaxed text-graphite">{p.stack.join(", ")}</p>
            <div className="mt-4">
              <RepoLink project={p} />
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 text-sm font-semibold text-graphite">Earlier and academic work</h3>
      <ul className="mt-4 divide-y divide-rule border-y border-rule">
        {others.map((p) => (
          <li key={p.title} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:gap-8">
            <div>
              <p className="font-semibold">{p.title}</p>
              <p className="mt-1 text-[0.9375rem] text-graphite">{p.summary}</p>
              <p className="mt-2 text-xs text-graphite">{p.stack.join(", ")}</p>
            </div>
            <div className="sm:pt-0.5">
              <RepoLink project={p} />
            </div>
          </li>
        ))}
      </ul>

      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-cobalt"
      >
        <Github className="h-4 w-4" aria-hidden="true" />
        All repositories on GitHub
      </a>
    </Section>
  );
};

export default Projects;
