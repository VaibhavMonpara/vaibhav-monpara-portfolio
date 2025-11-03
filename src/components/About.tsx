import { Code2, Palette, Rocket, Brain, TrendingUp, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description:
        "Expert in building scalable applications with Python, Node.js, React, and cloud technologies",
    },
    {
      icon: Palette,
      title: "Cloud & DevOps",
      description:
        "Experienced with AWS, Docker, Kubernetes, and CI/CD pipelines for reliable deployments",
    },
    {
      icon: Rocket,
      title: "Problem Solver",
      description:
        "Leading Agile teams and delivering high-impact solutions with 99% uptime",
    },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Software Engineer passionate about building distributed systems and
            scalable applications
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
              <h3 className="text-base md:text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div
            className="relative p-8 md:p-12 rounded-3xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow:
                "0 8px 32px 0 rgba(0, 0, 0, 0.1), 0 2px 8px 0 rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="max-w-3xl mx-auto relative z-10">
              {/* Key Highlights Bar */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    99% Uptime
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">
                    30% Faster Deployments
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Rocket className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    Cloud-Native Architect
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm md:text-base leading-relaxed text-foreground/95 mb-4">
                    I'm a{" "}
                    <span className="font-semibold text-primary">
                      Software Engineer
                    </span>{" "}
                    currently working at{" "}
                    <span className="font-semibold">AirKitchenz</span> in Los
                    Angeles, where I engineer distributed systems with Python
                    and Node.js, achieving{" "}
                    <span className="font-semibold text-primary">
                      99% uptime
                    </span>{" "}
                    and scalable request handling.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-foreground/95">
                    I specialize in building cloud-native architectures using
                    AWS services and implementing robust CI/CD pipelines that
                    cut deployment cycles by{" "}
                    <span className="font-semibold text-accent">30%</span>. My
                    work focuses on creating systems that are not just
                    functional, but resilient, scalable, and maintainable.
                  </p>
                </div>

                <div>
                  <p className="text-sm md:text-base leading-relaxed text-foreground/95">
                    With a{" "}
                    <span className="font-semibold">
                      Master's degree in Computer Science
                    </span>{" "}
                    from California State University, Fullerton, and previous
                    experience at Midocean Technologies, I've developed
                    expertise in full-stack development, DevOps, and leading
                    Agile teams. I'm passionate about{" "}
                    <span className="font-semibold text-primary">
                      clean code
                    </span>
                    ,{" "}
                    <span className="font-semibold text-accent">
                      mentoring peers
                    </span>
                    , and delivering high-quality solutions that make a real
                    impact.
                  </p>
                </div>
                {/* AI Agents Section */}
                <div
                  className="relative p-6 rounded-2xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(14, 165, 233, 0.1) 50%, transparent 100%)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                    boxShadow: "0 4px 16px 0 rgba(59, 130, 246, 0.1)",
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base md:text-lg font-semibold mb-2 text-foreground">
                        AI Agents & Agentic Workflows
                      </h4>
                      <p className="text-sm md:text-base leading-relaxed text-foreground/90">
                        I'm currently{" "}
                        <span className="font-semibold text-primary">
                          actively working
                        </span>{" "}
                        with AI agents and exploring agentic workflows. I'm
                        passionate about building intelligent systems that can
                        autonomously reason, plan, and execute complex tasks.
                        This cutting-edge technology represents the future of
                        software engineering, and I'm excited to be at the
                        forefront of this revolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
