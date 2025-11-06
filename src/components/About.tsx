import { Code2, Palette, Rocket, Brain, TrendingUp, Award } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
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

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description:
        "Expert in building scalable applications with Python, Node.js, React, and cloud technologies",
    },
    {
      icon: Palette,
      title: "Cloud & DevOps",
      description:
        "Experienced with AWS, Docker, Kubernetes, and CI/CD pipelines for reliable deployments",
    },
    {
      icon: Rocket,
      title: "Problem Solver",
      description:
        "Leading Agile teams and delivering high-impact solutions with 99% uptime",
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
    <section id="about" ref={sectionRef} className="py-32 px-4 relative">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Software Engineer passionate about building distributed systems and
            scalable applications
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 ease-out group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative z-10">
                <div 
                  className="mb-4 p-3 rounded-xl bg-primary/10 w-fit group-hover:glow-primary transition-all duration-300"
                >
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative p-10 md:p-16 rounded-3xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)",
              backdropFilter: "blur(30px) saturate(180%)",
              WebkitBackdropFilter: "blur(30px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              boxShadow:
                "0 20px 60px 0 rgba(0, 0, 0, 0.1), 0 8px 24px 0 rgba(0, 0, 0, 0.08)",
            }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="max-w-4xl mx-auto relative z-10">
              {/* Key Highlights Bar */}
              <motion.div 
                className="flex flex-wrap gap-4 mb-12 justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div 
                  className="flex items-center gap-2 px-6 py-3 bg-primary/15 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-base font-semibold text-primary">
                    99% Uptime
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 px-6 py-3 bg-accent/15 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span className="text-base font-semibold text-accent">
                    30% Faster Deployments
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 px-6 py-3 bg-primary/15 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Rocket className="h-5 w-5 text-primary" />
                  <span className="text-base font-semibold text-primary">
                    Cloud-Native Architect
                  </span>
                </motion.div>
              </motion.div>

              {/* Main Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/95 mb-6 font-light">
                    I'm a{" "}
                    <span className="font-semibold text-primary">
                      Software Engineer
                    </span>{" "}
                    currently working at{" "}
                    <span className="font-semibold">AirKitchenz</span> in Los
                    Angeles, where I engineer distributed systems with Python
                    and Node.js, achieving{" "}
                    <span className="font-semibold text-primary">
                      99% uptime
                    </span>{" "}
                    and scalable request handling.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/95 font-light">
                    I specialize in building cloud-native architectures using
                    AWS services and implementing robust CI/CD pipelines that
                    cut deployment cycles by{" "}
                    <span className="font-semibold text-accent">30%</span>. My
                    work focuses on creating systems that are not just
                    functional, but resilient, scalable, and maintainable.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/95 font-light">
                    With a{" "}
                    <span className="font-semibold">
                      Master's degree in Computer Science
                    </span>{" "}
                    from California State University, Fullerton, and previous
                    experience at Midocean Technologies, I've developed
                    expertise in full-stack development, DevOps, and leading
                    Agile teams. I'm passionate about{" "}
                    <span className="font-semibold text-primary">
                      clean code
                    </span>
                    ,{" "}
                    <span className="font-semibold text-accent">
                      mentoring peers
                    </span>
                    , and delivering high-quality solutions that make a real
                    impact.
                  </p>
                </motion.div>
                {/* AI Agents Section */}
                <motion.div
                  className="relative p-8 rounded-3xl overflow-hidden mt-8"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(14, 165, 233, 0.15) 50%, transparent 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    boxShadow: "0 8px 32px 0 rgba(59, 130, 246, 0.15)",
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-xl bg-primary/25 flex-shrink-0"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Brain className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                        AI Agents & Agentic Workflows
                      </h4>
                      <p className="text-base md:text-lg leading-relaxed text-foreground/90 font-light">
                        I'm currently{" "}
                        <span className="font-semibold text-primary">
                          actively working
                        </span>{" "}
                        with AI agents and exploring agentic workflows. I'm
                        passionate about building intelligent systems that can
                        autonomously reason, plan, and execute complex tasks.
                        This cutting-edge technology represents the future of
                        software engineering, and I'm excited to be at the
                        forefront of this revolution.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
