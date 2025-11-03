import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Recruiting Agent",
      description:
        "Developed an AI-driven recruiting tool automating email outreach with responsive UI and scalable backend. Integrated Google Gemini AI for intelligent candidate matching and communication.",
      tech: ["React", "Flask", "PostgreSQL", "Google Gemini AI"],
      github: "https://github.com/VaibhavMonpara/AI-Recruiting-Agent",
      image: "/logos/projects/ai.png",
    },
    {
      title: "Energy Consumption and Sustainability Analytics",
      description:
        "Analyzed renewable energy data to forecast usage patterns. Implemented interactive Plotly Dash dashboard for visualizing energy consumption trends and sustainability metrics.",
      tech: ["Python", "Pandas", "Scikit-learn", "Plotly Dash"],
      github: "https://github.com/VaibhavMonpara/ecsa-project",
      image: "/logos/projects/esca.png",
    },
    {
      title: "Medikit",
      description:
        "Co-developed a comprehensive Django-based healthcare platform featuring pathology report management, medical articles repository, and seamless doctor-patient interaction system.",
      tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
      github: "https://github.com/VaibhavMonpara",
      image: "/logos/projects/medikit1.png",
    },
    {
      title: "PMS Project",
      description:
        "Developed a Property Management System using Python, PostgreSQL, JavaScript and XML, with integrated APIs for real-time data retrieval, improving management efficiency by 40%.",
      tech: ["Python", "JavaScript", "PostgreSQL", "XML"],
      github: "https://github.com/VaibhavMonpara/pms",
      image: "/logos/projects/pms.png",
    },
    {
      title: "Uber Review Analysis",
      description:
        "Built an analysis system to evaluate Uber customer reviews and classify feedback into positive, neutral, and negative sentiments.",
      tech: ["Python", "PySpark", "Pandas", "Numpy", "Matplotlib"],
      github: "https://github.com/VaibhavMonpara/ADV-DBM-PROJECT",
      image: "/logos/projects/uber.png",
    },
    {
      title: "E-commerce web app",
      description:
        "Developed a full-stack e-commerce application with integrated ordering, cart, and real-time tracking features. Implemented secure checkout, dynamic inventory updates, and order-status visualization to enhance user experience and streamline purchase flow.",
      tech: ["Python", "Django", "SQLite", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/VaibhavMonpara/MyAwesomeCart",
      image: "/logos/projects/ecommerce.png",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Some of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl hover:glass-strong transition-smooth hover:-translate-y-2 group animate-fade-in-up overflow-hidden flex flex-col h-[550px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image - Top Half */}
              <div className="h-1/2 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content - Bottom Half */}
              <div className="h-1/2 p-6 flex flex-col relative pb-4">
                <h3 className="text-base md:text-lg font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4 pr-14">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Icon Only - Bottom Right */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 p-2 glass hover:glass-strong rounded-lg transition-smooth hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
