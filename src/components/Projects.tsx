import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Recruiting Agent",
      description: "Developed an AI-driven recruiting tool automating email outreach with responsive UI and scalable backend. Integrated Google Gemini AI for intelligent candidate matching and communication.",
      tech: ["React", "Flask", "PostgreSQL", "Google Gemini AI"],
      github: "https://github.com/VaibhavMonpara",
      live: "https://vaibhavmonpara.netlify.app"
    },
    {
      title: "Energy Consumption and Sustainability Analytics",
      description: "Analyzed renewable energy data to forecast usage patterns. Implemented interactive Plotly Dash dashboard for visualizing energy consumption trends and sustainability metrics.",
      tech: ["Python", "Pandas", "Scikit-learn", "Plotly Dash"],
      github: "https://github.com/VaibhavMonpara",
      live: "https://vaibhavmonpara.netlify.app"
    },
    {
      title: "Medikit",
      description: "Co-developed a comprehensive Django-based healthcare platform featuring pathology report management, medical articles repository, and seamless doctor-patient interaction system.",
      tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
      github: "https://github.com/VaibhavMonpara",
      live: "https://vaibhavmonpara.netlify.app"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:glass-strong transition-smooth hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="glass hover:glass-strong transition-smooth"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 transition-smooth"
                  asChild
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
