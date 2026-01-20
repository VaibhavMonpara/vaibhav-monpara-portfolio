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
        "Built the customer-facing kitchen discovery and booking platform from scratch using React and Material UI with a Node.js (Express) backend, enabling end-to-end flows for live food sellers",
        "Designed and implemented backend APIs using Node.js and Python with DynamoDB to manage kitchen availability, pricing rules, and booking state, keeping core API response times under 300 ms",
        "Set up automated CI/CD pipelines using GitHub Actions and AWS, reducing manual release effort and cutting average deployment time from 30 minutes to under 10 minutes",
        "Implemented an AI-driven kitchen matching workflow using Python and LLM APIs, ranking kitchens by location, availability, and seller requirements, reducing manual shortlisting effort by 40%",
        "Architected an early RAG prototype using Python, embeddings, and vector search to answer seller questions about kitchen rules and onboarding, reducing onboarding support follow-ups by 25%"
      ]
    },
    {
      year: "Jan 2024 - Jul 2024",
      role: "AI Backend Engineer",
      company: "Intuit",
      location: "Los Angeles, CA",
      logo: "/logos/companies/intuit.png",
      achievements: [
        "Designed Python-based backend services to ingest, normalize, and validate large-scale tax and financial documents, processing millions of records per filing season",
        "Implemented LLM-powered classification and data extraction pipelines using Python, AWS Lambda, and SQS, reducing manual review workload for tax operations teams by 32% during peak periods",
        "Built an internal RAG service using Python, embeddings, and vector search on AWS-managed storage, cutting analyst tax policy lookup time from minutes to seconds",
        "Integrated AI services with core Intuit platforms via REST APIs deployed on AWS API Gateway and ECS, enforcing IAM-based access control, audit logging, and stable latency during seasonal traffic spikes",
        "Added production monitoring, confidence checks, and safety fallbacks using CloudWatch and Python-based validation logic, reducing incorrect AI-assisted suggestions by 18%"
      ]
    },
    {
      year: "Oct 2020 - May 2022",
      role: "Software Engineer",
      company: "Midocean Technologies",
      location: "Ahmedabad, IND - On-site",
      logo: "/logos/companies/midocean.png",
      achievements: [
        "Delivered modular enterprise applications using Python (Django), React with TypeScript, and PostgreSQL, supporting 100K+ monthly transactions with 99.95% uptime",
        "Reworked CI/CD and environment workflows using Git-based pipelines and AWS, reducing average deployment time from 45 minutes to 7 minutes and minimizing rollback incidents",
        "Developed REST and GraphQL APIs using Django REST Framework and Node.js (Express), replacing manual business workflows and saving over 5,000 client labor hours annually",
        "Implemented a real-time logistics and shipment tracking system using Python, Flask, WebSockets, and PostgreSQL, enabling live visibility across 15+ countries and reducing delivery delays by 42%",
        "Built executive reporting dashboards with React and Recharts backed by Django APIs, consolidating fragmented data sources and improving reporting accuracy from 68% to 99.6%"
      ]
    },
    {
      year: "Nov 2018 - Sep 2020",
      role: "Full-stack Developer",
      company: "Infinite Infolab",
      location: "Ahmedabad, IND - On-site",
      logo: "/logos/companies/infiniteinfolab.png",
      achievements: [
        "Developed complex user-facing dashboards using React and JavaScript, implementing multi-step forms, role-based views, and client-side state management that reduced task completion time by 35%",
        "Built backend services using Node.js and Express to handle authentication, authorization, and transactional workflows, supporting 1,000+ concurrent active users without session conflicts",
        "Designed and optimized relational data models in PostgreSQL, improving query performance through indexing and join optimization and reducing slow API responses by 40%",
        "Integrated third-party services including payment gateways, email notifications, and file uploads using Node.js, cutting manual operational effort for internal teams by over 50%",
        "Collaborated closely with product and QA teams to ship weekly releases through Git-based workflows, steadily reducing post-release defects over time"
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
