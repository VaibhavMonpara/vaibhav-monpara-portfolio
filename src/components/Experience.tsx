import { Building2 } from "lucide-react";
import { useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center", "end start"]
  });
  
  // Hero-style fade effect: fade in as section enters, fade out as it leaves
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const experiences = [
    {
      year: "Aug 2024 - Present",
      role: "Software Engineer",
      company: "AirKitchenz",
      location: "Los Angeles, CA - Hybrid",
      logo: "/logos/companies/airkitchenz.png",
      description: "Engineered distributed systems with Python and Node.js, enabling 99% uptime and scalable request handling. Built CI/CD pipelines with GitHub Actions, cutting deployment cycles by 30%. Spearheaded infrastructure migration to cloud-native AWS architecture (EC2, S3, Lambda, RDS), reducing costs by 20% and enhancing fault tolerance."
    },
    {
      year: "Oct 2020 - May 2022",
      role: "Software Engineer",
      company: "Midocean Technologies",
      location: "Ahmedabad, IND - On-site",
      logo: "/logos/companies/midocean.png",
      description: "Developed modular full-stack solutions in Python (Django), C#, .NET Core, and Java, improving system scalability and maintainability. Designed and deployed RESTful APIs and process automation tools, reducing manual workloads by 30%. Managed end-to-end DevOps delivery using Azure, integrating CI/CD for faster and more reliable deployments."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-4 relative">
      <motion.div 
        className="max-w-5xl mx-auto"
        style={{ opacity, y }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            My professional journey in software development
          </p>
        </motion.div>

        <motion.div 
          className="space-y-6 relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-accent/30 to-primary/30 hidden md:block" />
          
          {experiences.map((exp, index) => {
            const ExperienceCard = () => {
              const [logoError, setLogoError] = useState(false);
              
              return (
                <motion.div
                  className="glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 ease-out group relative md:pl-20"
                  variants={itemVariants}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-lg hidden md:block" />
                  
                  <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    <div 
                      className="flex-shrink-0 w-16 h-16 rounded-xl glass-strong p-2.5 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    >
                      {exp.logo && !logoError ? (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain rounded-lg"
                          onError={() => setLogoError(true)}
                        />
                      ) : (
                        <Building2 className="w-8 h-8 text-primary" />
                      )}
                    </div>

                    <div className="flex-1">
                      <span className="text-primary font-semibold text-sm inline-block mb-1.5">
                        {exp.year}
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold mt-1.5 mb-1.5 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-foreground text-base font-medium mb-1.5">{exp.company}</h4>
                      <p className="text-xs text-muted-foreground mb-3 font-light">{exp.location}</p>
                      <p className="text-sm text-foreground/90 leading-relaxed font-light">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            };
            
            return <ExperienceCard key={index} />;
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
