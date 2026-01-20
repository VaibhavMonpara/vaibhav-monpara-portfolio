import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Cloud, Wrench, Layers, Brain } from "lucide-react";

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
      skills: [
        "Python",
        "Node.js",
        "Express.js",
        "Django",
        "Flask",
        "FastAPI",
        "REST APIs",
        "GraphQL",
        "gRPC",
        "Microservices",
        "Serverless Architecture",
        "Asynchronous Processing"
      ],
      gradient: "from-[#4285F4]/20 to-[#4285F4]/10",
      iconBg: "bg-[#4285F4]/20",
      badgeBg: "bg-[#4285F4]/20",
      iconColor: "text-[#4285F4]",
      badgeColor: "text-[#4285F4]"
    },
    {
      category: "Frontend",
      icon: Layers,
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "Redux",
        "Material UI",
        "HTML",
        "CSS",
        "Next.js",
        "Webpack",
        "Jest"
      ],
      gradient: "from-[#EA4335]/20 to-[#EA4335]/10",
      iconBg: "bg-[#EA4335]/20",
      badgeBg: "bg-[#EA4335]/20",
      iconColor: "text-[#EA4335]",
      badgeColor: "text-[#EA4335]"
    },
    {
      category: "Databases",
      icon: Database,
      skills: [
        "PostgreSQL",
        "DynamoDB",
        "MongoDB",
        "MySQL",
        "Redis",
        "NoSQL",
        "Data Modeling",
        "Query Optimization",
        "Database Indexing",
        "ETL"
      ],
      gradient: "from-[#FBBC05]/20 to-[#FBBC05]/10",
      iconBg: "bg-[#FBBC05]/20",
      badgeBg: "bg-[#FBBC05]/20",
      iconColor: "text-[#FBBC05]",
      badgeColor: "text-[#FBBC05]"
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        "AWS (Lambda, ECS, API Gateway, SQS, IAM, CloudWatch)",
        "Docker",
        "Containerization",
        "CI/CD Pipelines",
        "GitHub Actions",
        "Serverless Deployments",
        "Load Balancing",
        "Auto Scaling"
      ],
      gradient: "from-[#34A853]/20 to-[#34A853]/10",
      iconBg: "bg-[#34A853]/20",
      badgeBg: "bg-[#34A853]/20",
      iconColor: "text-[#34A853]",
      badgeColor: "text-[#34A853]"
    },
    {
      category: "AI / GenAI",
      icon: Brain,
      skills: [
        "LLM APIs",
        "Retrieval-Augmented Generation (RAG)",
        "Text Embeddings",
        "Ranking Algorithms",
        "NLP Pipelines",
        "AI-Assisted Decision Systems",
        "Model Deployment",
        "A/B Testing",
        "PyTorch",
        "Machine Learning"
      ],
      gradient: "from-[#9333EA]/20 to-[#9333EA]/10",
      iconBg: "bg-[#9333EA]/20",
      badgeBg: "bg-[#9333EA]/20",
      iconColor: "text-[#9333EA]",
      badgeColor: "text-[#9333EA]"
    },
    {
      category: "Testing & Processes",
      icon: Wrench,
      skills: [
        "Unit Testing",
        "Integration Testing",
        "API Testing",
        "End-to-End Testing",
        "Git",
        "CI/CD Automation",
        "Release Validation",
        "Agile",
        "Scrum",
        "Jira"
      ],
      gradient: "from-[#4285F4]/20 to-[#4285F4]/10",
      iconBg: "bg-[#4285F4]/20",
      badgeBg: "bg-[#4285F4]/20",
      iconColor: "text-[#4285F4]",
      badgeColor: "text-[#4285F4]"
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
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
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
                className="glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 ease-out group relative overflow-hidden border-2 border-transparent"
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
                onMouseEnter={(e) => {
                  const color = category.iconColor.replace('text-[#', '#').replace(']', '');
                  e.currentTarget.style.borderColor = color + '4D';
                  const h3 = e.currentTarget.querySelector('h3');
                  if (h3) {
                    h3.style.color = color;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  const h3 = e.currentTarget.querySelector('h3');
                  if (h3) {
                    h3.style.color = '';
                  }
                }}
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
                      <IconComponent className={`h-6 w-6 ${category.iconColor}`} />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground transition-colors">
                      {category.category}
                    </h3>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className={`px-3 py-1.5 ${category.badgeBg} ${category.badgeColor} rounded-lg text-xs font-semibold backdrop-blur-sm cursor-default border transition-all duration-200`}
                        style={{
                          borderColor: category.iconColor.replace('text-[#', '#').replace(']', '') + '33',
                        } as React.CSSProperties}
                        onMouseEnter={(e) => {
                          const color = category.iconColor.replace('text-[#', '#').replace(']', '');
                          e.currentTarget.style.borderColor = color + '66';
                        }}
                        onMouseLeave={(e) => {
                          const color = category.iconColor.replace('text-[#', '#').replace(']', '');
                          e.currentTarget.style.borderColor = color + '33';
                        }}
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
