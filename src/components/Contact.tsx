import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/nitagashi", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/albenita-gashi",
    label: "LinkedIn",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-6">
            Let's work
            <span className="text-gradient"> together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Have a project in mind or just want to chat? I'm always open to
            discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="mailto:albenitagashi76@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-medium text-lg rounded-xl hover:bg-primary/90 transition-all hover:scale-105 glow-primary"
          >
            <Mail className="w-5 h-5" />
            albenitagashi76@gmail.com
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
