import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Animated background elements with parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity: useTransform(scrollY, [0, 500], [1, 0.3]) }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      <motion.div 
        className="max-w-6xl mx-auto text-center relative z-10"
        style={{ opacity, scale, y }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div 
          className="mb-12 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-60"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img 
              src={profileImage} 
              alt="Vaibhav Monpara" 
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-[3px] border-white/20 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <motion.span 
            className="inline-block px-6 py-3 rounded-full glass text-sm font-medium text-muted-foreground backdrop-blur-xl"
            whileHover={{ scale: 1.05 }}
          >
            👋 Welcome to my portfolio
          </motion.span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
          variants={itemVariants}
        >
          Hi, I'm{" "}
          <span className="gradient-text block mt-2">Vaibhav Monpara</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light tracking-wide"
          variants={itemVariants}
        >
          Software Engineer
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground/70 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          variants={itemVariants}
        >
          Building digital experiences that blend logic with design
        </motion.p>

        <motion.div 
          className="flex gap-6 justify-center"
          variants={itemVariants}
        >
          <motion.a 
            href="https://github.com/VaibhavMonpara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 glass rounded-full hover:glass-strong backdrop-blur-xl"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/vaibhav-monpara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 glass rounded-full hover:glass-strong backdrop-blur-xl"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a 
            href="mailto:vaibhav98patel@gmail.com"
            className="p-4 glass rounded-full hover:glass-strong backdrop-blur-xl"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Mail className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
