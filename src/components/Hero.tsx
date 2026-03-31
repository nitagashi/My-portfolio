import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding py-20">
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
            Creative Developer
          </p>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Crafting digital
          <br />
          <span className="text-gradient">experiences</span> that
          <br />
          inspire.
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          I design and build thoughtful, elegant interfaces that bring ideas to life. 
          Focused on creating meaningful user experiences through clean code and creative design.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
