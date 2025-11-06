import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Education = () => {
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

  const education = [
    {
      degree: "Master of Science, Computer Science",
      institution: "California State University, Fullerton",
      location: "Fullerton, CA, USA",
      period: "Aug 2022 - May 2024",
      logo: "/logos/universities/csuf.png",
      coursework: [
        "Advanced Database Management",
        "Advanced Algorithm",
        "Software Management",
        "System & Software Standards",
        "Computer System Architecture",
        "Mobile Development Programming"
      ]
    },
    {
      degree: "Bachelor of Engineering, Computer Engineering",
      institution: "Gujarat Technological University",
      location: "Ahmedabad, GJ, IND",
      period: "Aug 2016 - July 2020",
      logo: "/logos/universities/gtu.png",
      coursework: [
        "Data Structure",
        "Database Management System",
        "Operating System",
        "Object Oriented Programming",
        "System Programming",
        "Computer Networks",
        "Web Technology",
        "Data Mining and Business Intelligence"
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="education" ref={sectionRef} className="py-32 px-4 relative">
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
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            My academic background and qualifications
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => {
            const EducationCard = () => {
              const [logoError, setLogoError] = useState(false);
              
              return (
                <motion.div
                  className="glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 ease-out group relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      {/* University Logo */}
                      <div 
                        className="flex-shrink-0 w-16 h-16 rounded-xl glass-strong p-2.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      >
                        {edu.logo && !logoError ? (
                          <img
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            className="w-full h-full object-contain rounded-lg"
                            onError={() => setLogoError(true)}
                          />
                        ) : (
                          <GraduationCap className="w-8 h-8 text-primary" />
                        )}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <h4 className="text-base font-medium mb-1.5">{edu.institution}</h4>
                        <p className="text-muted-foreground text-xs mb-1 font-light">{edu.location}</p>
                        <p className="text-muted-foreground text-xs font-medium">{edu.period}</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold mb-3 text-foreground/90">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, courseIndex) => (
                          <motion.span
                            key={courseIndex}
                            className="px-2.5 py-1 bg-primary/15 text-primary rounded-lg text-xs font-medium backdrop-blur-sm cursor-default"
                            initial={{ opacity: 0, y: 8 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                            transition={{ 
                              delay: 0.3 + index * 0.1 + courseIndex * 0.02,
                              duration: 0.3,
                              ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.08, y: -1 }}
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            };
            
            return <EducationCard key={index} />;
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
