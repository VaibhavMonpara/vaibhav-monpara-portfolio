import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-up">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 animate-pulse"></div>
            <img 
              src={profileImage} 
              alt="Vaibhav Monpara" 
              className="relative w-40 h-40 rounded-full object-cover border-4 border-card glass-strong shadow-2xl"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-4">
            👋 Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
          Hi, I'm{" "}
          <span className="gradient-text">Vaibhav Monpara</span>
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground mb-4 font-light">
          Software Engineer
        </p>
        
        <p className="text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Building digital experiences that blend logic with design
        </p>

        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/VaibhavMonpara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:glass-strong hover:glow-primary transition-smooth hover:scale-110"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/vaibhav-monpara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:glass-strong hover:glow-primary transition-smooth hover:scale-110"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="mailto:vaibhav98patel@gmail.com"
            className="p-3 glass rounded-full hover:glass-strong hover:glow-primary transition-smooth hover:scale-110"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection("about")}>
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
