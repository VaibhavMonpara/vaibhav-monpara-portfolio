const Skills = () => {
  const skillCategories = [
    {
      category: "Backend",
      skills: ["Python", "Java", "Node.js", "Express.js", ".NET C#", ".NET Core", "RESTful APIs", "GraphQL", "SOAP APIs"]
    },
    {
      category: "Frontend",
      skills: ["React.js", "Redux", "JavaScript", "TypeScript", "Tailwind CSS", "React Native", "Flutter"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "DynamoDB", "MongoDB", "SQL", "NoSQL"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Azure"]
    },
    {
      category: "Tools & Processes",
      skills: ["Git", "Jira", "Slack", "Agile", "Scrum", "Code Reviews", "Unit Testing", "Integration Testing"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass p-6 rounded-2xl hover:glass-strong transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-base md:text-lg font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary transition-smooth cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
