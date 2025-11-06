import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Cloud, Wrench, Layers } from "lucide-react";

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
      icon: Code,
      skills: ["Python", "Java", "Node.js", "Express.js", ".NET C#", ".NET Core", "RESTful APIs", "GraphQL", "SOAP APIs"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/20",
      badgeBg: "bg-blue-500/20"
    },
    {
      category: "Frontend",
      icon: Layers,
      skills: ["React.js", "Redux", "JavaScript", "TypeScript", "Tailwind CSS", "React Native", "Flutter"],
      gradient: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-500/20",
      badgeBg: "bg-purple-500/20"
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "DynamoDB", "MongoDB", "SQL", "NoSQL"],
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconBg: "bg-emerald-500/20",
      badgeBg: "bg-emerald-500/20"
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Azure"],
      gradient: "from-orange-500/20 to-amber-500/20",
      iconBg: "bg-orange-500/20",
      badgeBg: "bg-orange-500/20"
    },
    {
      category: "Tools & Processes",
      icon: Wrench,
      skills: ["Git", "Jira", "Slack", "Agile", "Scrum", "Code Reviews", "Unit Testing", "Integration Testing"],
      gradient: "from-indigo-500/20 to-blue-500/20",
      iconBg: "bg-indigo-500/20",
      badgeBg: "bg-indigo-500/20"
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 tracking-tight">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div 
                key={categoryIndex}
                className="glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 ease-out group relative overflow-hidden border-2 border-transparent hover:border-primary/30"
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
              >
                {/* Animated gradient background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon and Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div 
                      className={`p-3 rounded-xl ${category.iconBg} group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <IconComponent className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.category}
                    </h3>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className={`px-3 py-1.5 ${category.badgeBg} text-primary rounded-lg text-xs font-semibold backdrop-blur-sm cursor-default border border-primary/20 hover:border-primary/40 transition-all duration-200`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                        transition={{ 
                          delay: 0.2 + categoryIndex * 0.05 + skillIndex * 0.02,
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                        whileHover={{ scale: 1.08, y: -1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
