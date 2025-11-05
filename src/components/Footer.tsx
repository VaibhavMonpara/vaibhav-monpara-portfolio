import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="py-16 px-4 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p 
          className="text-muted-foreground flex items-center justify-center gap-2 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Built with{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <Heart className="h-5 w-5 text-primary fill-primary" />
          </motion.span>{" "}
          by Vaibhav Monpara
        </motion.p>
        <motion.p 
          className="text-sm text-muted-foreground/70 mt-4 font-light"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © {new Date().getFullYear()} All rights reserved
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
