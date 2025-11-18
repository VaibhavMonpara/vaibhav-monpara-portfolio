import { Building2, ArrowRight } from "lucide-react";
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
      achievements: [
        "Designed and implemented high-availability backend systems using Python, Node.js, Express.js, and PostgreSQL, achieving 99.9% uptime while scaling to handle 50K+ daily requests during peak periods",
        "Built and owned end-to-end CI/CD pipelines with GitHub Actions, Docker, and AWS ECS, reducing deployment time from 30 minutes to under 4 minutes and enabling 15+ production releases per week",
        "Led migration of monolithic infrastructure to cloud-native AWS services (EC2, Lambda, S3, DynamoDB), cutting monthly cloud costs by 28% and improving fault tolerance with multi availability zone deployments",
        "Developed pixel-perfect, accessible frontends with React.js, TypeScript, Redux, Tailwind CSS, and WebSocket APIs, boosting user conversion rates by 22%",
        "Drove Agile/Scrum meetings (sprint planning, retrospectives, backlog refinement) for a 10 member cross-functional team using Slack, increasing team velocity by 38% and consistently delivering features ahead of schedule",
        "Established rigorous code review and testing standards (Jest, React Testing Library, PyTest), raising unit/integration test coverage to 88% and reducing production defects by 65%"
        
      ]
    },
    {
      year: "Oct 2020 - May 2022",
      role: "Software Engineer",
      company: "Midocean Technologies",
      location: "Ahmedabad, IND - On-site",
      logo: "/logos/companies/midocean.png",
      achievements: [
        "Architected and delivered modular full-stack enterprise applications using Python/Django, Java Spring Boot, React + TypeScript, and PostgreSQL, supporting 100K+ monthly transactions with 99.95% availability",
        "Owned DevOps transformation on Azure (Azure Kubernetes Service, Azure DevOps Pipelines, Docker), implementing GitOps workflows that slashed average deployment time from 45 minutes to 7 minutes",
        "Designed and deployed high-performance RESTful APIs and GraphQL services with Node.js, Express and Django REST Framework, automating manual processes that saved clients 5,000 labor hours annually",
        "Built real-time logistics tracking platform with Java Spring Boot, Redis, WebSockets, and PostgreSQL, enabling live shipment visibility across 15+ countries and reducing delivery delays by 42%",
        "Created executive analytics dashboards using React, Recharts, and Django backend that consolidated fragmented data sources, improving reporting accuracy from 68% to 99.6%"
        ]
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
          {experiences.map((exp, index) => {
            const ExperienceCard = () => {
              const [logoError, setLogoError] = useState(false);
              
              return (
                <motion.div
                  className="glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 ease-out group relative"
                  variants={itemVariants}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
                >
                  {/* Header section - responsive layout */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Company Logo */}
                      <div 
                        className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl glass-strong p-2 md:p-2.5 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105"
                      >
                        {exp.logo && !logoError ? (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain rounded-lg"
                            onError={() => setLogoError(true)}
                          />
                        ) : (
                          <Building2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <h4 className="text-foreground text-sm md:text-base font-medium mb-1">{exp.company}</h4>
                        <p className="text-xs text-muted-foreground font-light">{exp.location}</p>
                      </div>
                    </div>
                    
                    {/* Date on right side - responsive */}
                    <div className="flex-shrink-0 md:text-right">
                      <span className="text-primary font-semibold text-xs md:text-sm whitespace-nowrap">
                        {exp.year}
                      </span>
                    </div>
                  </div>
                  
                  {/* Achievements section */}
                  <div className="mt-4">
                    {/* Achievements/Bullet Points */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-foreground/90 leading-relaxed font-light"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{
                              delay: 0.3 + index * 0.2 + idx * 0.05,
                              duration: 0.4,
                              ease: "easeOut"
                            }}
                          >
                            <ArrowRight className="text-primary mt-1 md:mt-1.5 flex-shrink-0 h-3 w-3 md:h-4 md:w-4" />
                            <span className="break-words">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
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
