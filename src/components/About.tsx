import { motion } from "framer-motion";

const skills = [
  "React.js",
  "TypeScript",
  "C#",
  "HTML",
  "CSS/SCSS",
  "GraphQL",
  "JavaScript",
  "Node.js",
  "Python",
  ".NET",
  "Vue.js",
  "Next.js",
  "React Native (Expo Go)",
  "MSSQL",
  "MongoDB",
  "Firebase",
  "MySQL",
  "PostgreSQL",
  "Jest",
  "E2E Play-wright",
  "Git",
  "Azure",
  "Bitbucket",
  "Jira",
  "Agile",
  "Rust",
  "Tauri",
  "Android",
  "SQLite",
];

const About = () => {
  return (
    <section id="about" className="section-padding py-24 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-1 gap-32 items-center text-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Passionate about creating
              <span className="text-gradient"> meaningful</span> digital
              products
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Detail-oriented Software Engineer with experience in
                designing, developing, and maintaining web and mobile
                applications. Skilled in modern frameworks, clean code
                practices, and problem-solving. Passionate about building
                efficient, user-focused software solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-6">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-5 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg border border-border hover:border-primary/50 transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="font-display text-4xl font-semibold text-gradient">
                  5+
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-gradient">
                  50+
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Projects Completed
                </p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-gradient">
                  30+
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Happy Clients
                </p>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
