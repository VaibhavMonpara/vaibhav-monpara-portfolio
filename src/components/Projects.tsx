import { Github } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center", "end start"],
  });

  // Hero-style fade effect: fade in as section enters, fade out as it leaves
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AI-Powered Recruiting Agent",
      description:
        "Developed an AI-driven recruiting tool automating email outreach with responsive UI and scalable backend. Integrated Google Gemini AI for intelligent candidate matching and communication.",
      tech: ["React", "Flask", "PostgreSQL", "Google Gemini AI"],
      github: "https://github.com/VaibhavMonpara/AI-Recruiting-Agent",
      image: "/logos/projects/ai.png",
    },
    {
      title: "Energy Consumption and Sustainability Analytics",
      description:
        "Analyzed renewable energy data to forecast usage patterns. Implemented interactive Plotly Dash dashboard for visualizing energy consumption trends and sustainability metrics.",
      tech: ["Python", "Pandas", "Scikit-learn", "Plotly Dash"],
      github: "https://github.com/VaibhavMonpara/ecsa-project",
      image: "/logos/projects/esca.png",
    },
    {
      title: "Medikit",
      description:
        "Co-developed a comprehensive Django-based healthcare platform featuring pathology report management, medical articles repository, and seamless doctor-patient interaction system.",
      tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
      github: "https://github.com/VaibhavMonpara",
      image: "/logos/projects/medikit1.png",
    },
    {
      title: "PMS Project",
      description:
        "Developed a Property Management System using Python, PostgreSQL, JavaScript and XML, with integrated APIs for real-time data retrieval, improving management efficiency by 40%.",
      tech: ["Python", "JavaScript", "PostgreSQL", "XML"],
      github: "https://github.com/VaibhavMonpara/pms",
      image: "/logos/projects/pms.png",
    },
    {
      title: "Uber Review Analysis",
      description:
        "Built an analysis system to evaluate Uber customer reviews and classify feedback into positive, neutral, and negative sentiments.",
      tech: ["Python", "PySpark", "Pandas", "Numpy", "Matplotlib"],
      github: "https://github.com/VaibhavMonpara/ADV-DBM-PROJECT",
      image: "/logos/projects/uber.png",
    },
    {
      title: "E-commerce web app",
      description:
        "Developed a full-stack e-commerce application with integrated ordering, cart, and real-time tracking features. Implemented secure checkout, dynamic inventory updates, and order-status visualization to enhance user experience and streamline purchase flow.",
      tech: ["Python", "Django", "SQLite", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/VaibhavMonpara/MyAwesomeCart",
      image: "/logos/projects/ecommerce.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-4 relative">
      <motion.div className="max-w-7xl mx-auto" style={{ opacity, scale, y }}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Some of my recent work and side projects
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass rounded-3xl overflow-hidden flex flex-col h-[500px] group relative"
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.8,
              }}
            >
              {/* Image - Top Half with overlay */}
              <div className="h-2/5 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content - Bottom Half */}
              <div className="h-3/5 p-6 flex flex-col relative bg-gradient-to-b from-transparent to-primary/5">
                <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow font-light line-clamp-3">
                  {project.description}
                </p>

                {/* Skills and GitHub container - aligned at bottom */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4 pr-12">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2.5 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium backdrop-blur-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 10 }
                        }
                        transition={{
                          delay: 0.3 + index * 0.05 + techIndex * 0.03,
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                        whileHover={{ scale: 1.08, y: -1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* GitHub Link - Bottom Right */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 p-2.5 glass hover:glass-strong rounded-lg transition-all duration-300 ease-out group/link"
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Github className="h-4 w-4 group-hover/link:text-primary transition-colors" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
