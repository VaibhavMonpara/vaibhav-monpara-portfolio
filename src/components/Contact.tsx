import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.", {
      description: "Thank you for reaching out!"
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
    hidden: { opacity: 0, y: 30 },
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
    <section id="contact" ref={sectionRef} className="py-32 px-4 relative">
      <motion.div 
        className="max-w-6xl mx-auto"
        style={{ opacity, scale, y }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 tracking-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Have a project in mind? Let's work together
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.div 
              className="glass p-8 rounded-3xl hover:glass-strong transition-all duration-300 ease-out group"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-4 rounded-2xl bg-primary/15"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Mail className="h-7 w-7 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-base text-muted-foreground font-light">vaibhav98patel@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass p-8 rounded-3xl hover:glass-strong transition-smooth group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-4 rounded-2xl bg-accent/15"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MessageSquare className="h-7 w-7 text-accent" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Let's Chat</h3>
                  <p className="text-base text-muted-foreground font-light">Always open to discussing new projects and opportunities</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass-strong p-10 rounded-3xl"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="text-base text-foreground/90 leading-relaxed font-light">
                Whether you have a question, a project idea, or just want to say hi, 
                feel free to reach out. I'll do my best to get back to you as soon as possible!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="glass-strong p-10 rounded-3xl"
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass border-border/50 focus:border-primary transition-smooth"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass border-border/50 focus:border-primary transition-smooth"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="glass border-border/50 focus:border-primary transition-smooth resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.div 
                whileHover={{ scale: 1.01 }} 
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 ease-out group text-base py-6"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </div>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
