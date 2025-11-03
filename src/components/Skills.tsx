const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Express", "REST APIs", "GraphQL"]
    },
    {
      category: "Database & Cloud",
      skills: ["PostgreSQL", "MongoDB", "SQL", "AWS", "Firebase"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "CI/CD", "Jest", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass p-6 rounded-2xl hover:glass-strong transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
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
