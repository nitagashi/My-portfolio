import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter, X, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import { projects, allTechnologies, Project } from "@/data/projects";

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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onClick}
      layout
    >
      <div
        className={`relative overflow-hidden rounded-xl bg-card border transition-colors ${
          project.inProgress
            ? "border-primary/60 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] hover:border-primary"
            : "border-border glow-card hover:border-primary/30"
        }`}
      >
        {project.inProgress && (
          <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 backdrop-blur-md border border-primary/40 text-primary text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Working on
          </div>
        )}
        {project.liveUrl && (
          <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/70 backdrop-blur-md border border-border text-foreground text-xs font-medium">
            <Globe className="w-3 h-3 text-primary" />
            Live Demo
          </div>
        )}
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg text-sm">
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2.5 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsPage = () => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showFilters, setShowFilters] = useState(true);

  const filteredProjects = useMemo(() => {
    if (selectedTech.length === 0) return projects;
    return projects.filter((project) =>
      selectedTech.some((tech) => project.tags.includes(tech)),
    );
  }, [selectedTech]);

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  const clearFilters = () => {
    setSelectedTech([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="section-padding pt-32 pb-24">
        <div className=" mx-auto">
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              My Work
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold mb-4">
              All Projects
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A collection of projects I've worked on, ranging from web
              applications to mobile apps and everything in between.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filter by Technology
                {selectedTech.length > 0 && (
                  <span className="ml-1 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                    {selectedTech.length}
                  </span>
                )}
              </button>

              {selectedTech.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Filter chips */}
            {showFilters && (
              <motion.div
                className="flex flex-wrap gap-2 p-4 bg-card border border-border rounded-xl"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {allTechnologies.map((tech) => {
                  const isSelected = selectedTech.includes(tech);
                  return (
                    <button
                      key={tech}
                      onClick={() => toggleTech(tech)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {tech}
                    </button>
                  );
                })}
              </motion.div>
            )}

            {/* Active filters */}
            {selectedTech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedTech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm"
                  >
                    {tech}
                    <button
                      onClick={() => toggleTech(tech)}
                      className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Results count */}
          <motion.p
            className="text-muted-foreground text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Showing {filteredProjects.length} of {projects.length} projects
          </motion.p>

          {/* Projects Grid */}
          <motion.div
            className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground text-lg mb-4">
                No projects found with the selected filters.
              </p>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
