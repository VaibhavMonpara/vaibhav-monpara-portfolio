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
      description: "Engineered distributed systems with Python and Node.js, enabling 99% uptime and scalable request handling. Built CI/CD pipelines with GitHub Actions, cutting deployment cycles by 30%. Spearheaded infrastructure migration to cloud-native AWS architecture (EC2, S3, Lambda, RDS), reducing costs by 20% and enhancing fault tolerance.",
      achievements: [
        "Engineered distributed systems with Python and Node.js, enabling 99% uptime and scalable request handling",
        "Built CI/CD pipelines with GitHub Actions, cutting deployment cycles by 30% and ensuring reliable releases",
        "Spearheaded infrastructure migration to cloud-native AWS architecture (EC2, S3, Lambda, RDS), reducing costs by 20% and enhancing fault tolerance",
        "Led cross-functional Agile teams through sprints, retrospectives, and backlog grooming, improving velocity by 25%",
        "Delivered responsive, accessible React.js frontends, improving conversion and user adoption by 15%",
        "Mentored peers and enforced clean code practices through structured code reviews, decreasing post-deployment issues by 40%",
        "Implemented unit/integration testing frameworks, resulting in 25% fewer regressions across new feature deployments",
        "Led full-lifecycle projects within Agile Scrum, driving on-time delivery rates up by 20% and improving client satisfaction by 15%"
      ]
    },
    {
      year: "Oct 2020 - May 2022",
      role: "Software Engineer",
      company: "Midocean Technologies",
      location: "Ahmedabad, IND - On-site",
      logo: "/logos/companies/midocean.png",
      description: "Developed modular full-stack solutions in Python (Django), C#, .NET Core, and Java, improving system scalability and maintainability. Designed and deployed RESTful APIs and process automation tools, reducing manual workloads by 30%. Managed end-to-end DevOps delivery using Azure, integrating CI/CD for faster and more reliable deployments.",
      achievements: [
        "Developed modular full-stack solutions in Python, Django, Javascript, PostgreSQL improving system scalability and maintainability across multiple client projects",
        "Managed end-to-end DevOps delivery using Azure, integrating CI/CD for faster and more reliable deployments",
        "Designed and deployed RESTful APIs and process automation tools, reducing manual workloads by 30%",
        "Architected analytics dashboards and tracking systems to centralize insights and increase data accuracy by 35%",
        "Built a logistics management system using Java and Spring Boot, enabling real-time shipment tracking and improving operational visibility across delivery networks"
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
