const Experience = () => {
  const experiences = [
    {
      year: "Aug 2024 - Present",
      role: "Software Engineer",
      company: "AirKitchenz",
      location: "Los Angeles, CA - Hybrid",
      description: "Engineered distributed systems with Python and Node.js, enabling 99% uptime and scalable request handling. Built CI/CD pipelines with GitHub Actions, cutting deployment cycles by 30%. Spearheaded infrastructure migration to cloud-native AWS architecture (EC2, S3, Lambda, RDS), reducing costs by 20% and enhancing fault tolerance."
    },
    {
      year: "Oct 2020 - May 2022",
      role: "Software Engineer",
      company: "Midocean Technologies",
      location: "Ahmedabad, IND - On-site",
      description: "Developed modular full-stack solutions in Python (Django), C#, .NET Core, and Java, improving system scalability and maintainability. Designed and deployed RESTful APIs and process automation tools, reducing manual workloads by 30%. Managed end-to-end DevOps delivery using Azure, integrating CI/CD for faster and more reliable deployments."
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
                  <h4 className="text-muted-foreground font-medium mb-1">{exp.company}</h4>
                  <p className="text-sm text-muted-foreground/70 mb-3">{exp.location}</p>
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
