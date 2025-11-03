import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "Expert in building scalable applications with modern technologies"
    },
    {
      icon: Palette,
      title: "Design Enthusiast",
      description: "Crafting beautiful, user-centric interfaces that delight"
    },
    {
      icon: Rocket,
      title: "Problem Solver",
      description: "Transforming complex challenges into elegant solutions"
    }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate software engineer who loves building products that combine backend logic with delightful front-end experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-2xl hover:glass-strong transition-smooth hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit group-hover:glow-primary transition-smooth">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-strong p-8 md:p-12 rounded-3xl">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              I'm a software engineer with a passion for creating elegant solutions to complex problems. 
              My journey in tech has been driven by curiosity and a love for learning new technologies.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              When I'm not coding, you'll find me exploring new frameworks, contributing to open source, 
              or designing the next big thing. I believe in writing clean, maintainable code that makes 
              a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
