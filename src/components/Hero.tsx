import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router";

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const navigate = useNavigate();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    // setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding py-32 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10  w-full flex flex-col items-center text-center space-y-12">
        {/* Headline */}
        <h1 className="font-display text-foreground leading-[0.9] tracking-tight text-6xl md:text-8xl lg:text-9xl">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            Building software
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease }}
          >
            that feels{" "}
            <span className="italic text-primary font-medium">inevitable.</span>
          </motion.span>
        </h1>

        {/* Lede & CTAs */}
        <div className="max-w-xl flex flex-col items-center space-y-10">
          <motion.p
            className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease }}
          >
            I design and build thoughtful, elegant interfaces that bring ideas
            to life. Focused on creating meaningful user experiences through
            clean code and creative design.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.54, ease }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-foreground text-background rounded-full font-body text-sm font-medium tracking-wide hover:opacity-90 transition-all"
            >
              Selected work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "contact")}
              className="px-8 py-4 border border-border text-foreground rounded-full font-body text-sm font-medium tracking-wide hover:bg-muted transition-all"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
      {/* Meta row
      <motion.div
        className="w-full flex flex-col md:flex-row items-center justify-between border-b border-border pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="font-body text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mt-2 md:mt-0">
          Software Engineer / Creative Technologist
        </div>
        <div className="font-body text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mt-2 md:mt-0">
          SF • Remote
        </div>
      </motion.div> */}
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
