import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Globe } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const ease = [0.22, 1, 0.36, 1] as const;

const StatusBadge = ({ project }: { project: Project }) => {
  if (project.inProgress) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/40 text-primary text-[11px] font-body font-medium tracking-wide">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
        </span>
        In Progress
      </span>
    );
  }
  if (project.liveUrl) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border text-muted-foreground text-[11px] font-body font-medium tracking-wide">
        <Globe className="w-3 h-3 text-primary" />
        Live Demo
      </span>
    );
  }
  return null;
};

const FeaturedProject = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => (
  <motion.article
    className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease }}
    onClick={onClick}
  >
    <div className="lg:col-span-7 relative overflow-hidden rounded-lg border border-border">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>
      <div className="absolute top-4 left-4">
        <StatusBadge project={project} />
      </div>
    </div>

    <div className="lg:col-span-5 flex flex-col justify-center">
      <div className="flex items-center gap-4 mb-5">
        <span className="font-body text-[11px] tracking-[0.3em] uppercase text-primary">
          Featured
        </span>
        <span className="h-px flex-1 bg-border" />
        <span className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          {project.year}
        </span>
      </div>
      <h3 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[0.95] mb-5 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      <p className="font-body text-muted-foreground leading-relaxed mb-6 max-w-md">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-body bg-secondary text-secondary-foreground rounded-full border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-2 font-body font-medium text-foreground">
        View case study
        <ArrowUpRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
  </motion.article>
);

const ShowcaseCard = ({
  project,
  index,
  span,
  onClick,
}: {
  project: Project;
  index: number;
  span: string;
  onClick: () => void;
}) => (
  <motion.article
    className={`group relative cursor-pointer ${span}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay: index * 0.08, ease }}
    onClick={onClick}
  >
    <div className="relative h-full overflow-hidden rounded-lg border border-border ">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover grayscale-[0.3] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-80" />
      <div className="absolute top-4 left-4">
        <StatusBadge project={project} />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
            {project.tags.slice(0, 2).join(" · ")}
          </p>
        </div>
        <span className="w-10 h-10 shrink-0 rounded-full border border-border flex items-center justify-center text-foreground translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  </motion.article>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featured = projects[0];
  const showcase = projects.slice(1, 5);
  const spans = [
    "md:col-span-7",
    "md:col-span-5",
    "md:col-span-5",
    "md:col-span-7",
  ];

  return (
    <section id="projects" className="section-padding py-28 md:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-10">
            {/* Watermark */}
            <span
              aria-hidden
              className="absolute -top-12 -left-4 md:-left-8 font-display italic text-[8rem] md:text-[14rem] lg:text-[18rem] leading-none text-foreground/[0.03] select-none pointer-events-none"
            >
              Projects
            </span>

            {/* Left: eyebrow + headline */}
            <motion.div
              className="relative flex flex-col gap-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="flex items-center gap-4">
                <span className="font-body text-primary text-xs font-bold tracking-[0.3em] uppercase">
                  (01)
                </span>
                <span className="h-px w-12 bg-primary/40" />
                <span className="font-body text-muted-foreground text-xs font-bold tracking-[0.3em] uppercase">
                  Selected Works
                </span>
              </div>

              <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.85]">
                Things I've{" "}
                <span className="italic font-light opacity-90">built</span>
              </h2>
            </motion.div>

            {/* Right: link */}
            <motion.div
              className="relative md:mb-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 font-body text-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] border-b border-transparent group-hover:border-primary pb-1 transition-all">
                  View all projects
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Bottom hairline with accent sweep */}
          <div className="relative h-px w-full bg-border overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </motion.div>

        {/* Featured */}
        <div className="mb-16 md:mb-24">
          <FeaturedProject
            project={featured}
            onClick={() => setSelectedProject(featured)}
          />
        </div>

        {/* Showcase grid with varying sizes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {showcase.map((project, index) => (
            <ShowcaseCard
              key={project.id}
              project={project}
              index={index}
              span={spans[index]}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
