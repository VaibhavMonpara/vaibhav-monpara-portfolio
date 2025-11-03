import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "Expert in building scalable applications with Python, Node.js, React, and cloud technologies"
    },
    {
      icon: Palette,
      title: "Cloud & DevOps",
      description: "Experienced with AWS, Docker, Kubernetes, and CI/CD pipelines for reliable deployments"
    },
    {
      icon: Rocket,
      title: "Problem Solver",
      description: "Leading Agile teams and delivering high-impact solutions with 99% uptime"
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
            Software Engineer passionate about building distributed systems and scalable applications
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
              I'm a Software Engineer currently working at AirKitchenz in Los Angeles, where I engineer distributed 
              systems with Python and Node.js, achieving 99% uptime and scalable request handling. I specialize in 
              building cloud-native architectures using AWS services and implementing robust CI/CD pipelines.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              With a Master's degree in Computer Science from California State University, Fullerton, and previous 
              experience at Midocean Technologies, I've developed expertise in full-stack development, DevOps, and 
              leading Agile teams. I'm passionate about clean code, mentoring peers, and delivering high-quality 
              solutions that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
