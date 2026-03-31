import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.article
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl bg-card border border-border glow-card hover:border-primary/30 transition-colors">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg text-sm">
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="section-padding py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Selected Works
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
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
