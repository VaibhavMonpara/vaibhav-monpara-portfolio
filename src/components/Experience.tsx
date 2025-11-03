const Experience = () => {
  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      description: "Leading development of scalable microservices architecture and mentoring junior developers. Built high-performance APIs handling millions of requests daily."
    },
    {
      year: "2021 - 2023",
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed and maintained multiple client-facing applications. Implemented CI/CD pipelines and improved application performance by 40%."
    },
    {
      year: "2020 - 2021",
      role: "Frontend Developer",
      company: "Creative Web Studio",
      description: "Created responsive web applications with modern frameworks. Collaborated with designers to implement pixel-perfect UI components."
    },
    {
      year: "2019 - 2020",
      role: "Junior Developer",
      company: "StartUp Ventures",
      description: "Contributed to full-stack development projects. Learned best practices in software development and agile methodologies."
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 animate-fade-in-up ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 -ml-2 rounded-full bg-primary glow-primary"></div>

              <div className="ml-16 md:ml-0">
                <div className="glass p-6 rounded-2xl hover:glass-strong transition-smooth hover:-translate-y-1 group">
                  <span className="text-primary font-semibold text-sm">{exp.year}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-1 group-hover:text-primary transition-smooth">
                    {exp.role}
                  </h3>
                  <h4 className="text-muted-foreground font-medium mb-3">{exp.company}</h4>
                  <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
