import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
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

  const skillCategories = [
    {
      category: "Backend",
      skills: ["Python", "Java", "Node.js", "Express.js", ".NET C#", ".NET Core", "RESTful APIs", "GraphQL", "SOAP APIs"]
    },
    {
      category: "Frontend",
      skills: ["React.js", "Redux", "JavaScript", "TypeScript", "Tailwind CSS", "React Native", "Flutter"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "DynamoDB", "MongoDB", "SQL", "NoSQL"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Azure"]
    },
    {
      category: "Tools & Processes",
      skills: ["Git", "Jira", "Slack", "Agile", "Scrum", "Code Reviews", "Unit Testing", "Integration Testing"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-4 relative">
      <motion.div 
        className="max-w-7xl mx-auto"
        style={{ opacity, scale, y }}
      >
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="glass p-6 rounded-2xl hover:glass-strong transition-smooth group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-primary transition-colors">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-primary/15 text-primary rounded-lg text-xs font-medium backdrop-blur-sm cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.03 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
