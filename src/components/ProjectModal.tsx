import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Check,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Project } from "@/data/projects";
import YouTube from "react-youtube";
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) return null;

  const hasMedia = project.media && project.media.length > 0;

  const nextMedia = () => {
    if (project.media) {
      setCurrentMediaIndex((prev) => (prev + 1) % project.media!.length);
    }
  };

  const prevMedia = () => {
    if (project.media) {
      setCurrentMediaIndex(
        (prev) => (prev - 1 + project.media!.length) % project.media!.length,
      );
    }
  };

  return (
    <AnimatePresence>
      {/* Lightbox */}
      {lightboxOpen &&
        project.media &&
        project.media[currentMediaIndex].type === "image" && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-foreground/10 backdrop-blur-sm border border-border text-foreground hover:bg-foreground/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              src={project.media[currentMediaIndex].url}
              alt={project.media[currentMediaIndex].caption || project.title}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-sm border border-border text-foreground hover:bg-background transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="relative aspect-video overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Year */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                {project.title}
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground text-sm shrink-0">
                <Calendar className="w-4 h-4" />
                {project.year}
              </div>
            </div>

            {/* Description */}
            <p
              className="text-muted-foreground text-lg leading- mb-8"
              style={{ whiteSpace: "pre-line" }}
            >
              {project.longDescription}
            </p>

            {/* Media Gallery */}
            {hasMedia && (
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold mb-4">
                  Gallery
                </h3>
                <div className="relative rounded-xl overflow-hidden bg-secondary/30">
                  {/* Current Media */}
                  <div className="relative aspect-video">
                    {project.media![currentMediaIndex].type === "image" ? (
                      <img
                        src={project.media![currentMediaIndex].url}
                        alt={
                          project.media![currentMediaIndex].caption ||
                          `${project.title} media ${currentMediaIndex + 1}`
                        }
                        className="w-full h-full object-cover cursor-zoom-in"
                        onClick={() => setLightboxOpen(true)}
                      />
                    ) : (
                      <YouTube
                        videoId={project.media![currentMediaIndex].url}
                        opts={{
                          width: "100%",
                          height: "100%",
                          playerVars: {
                            autoplay: 0,
                            controls: 1,
                            modestbranding: 1,
                            rel: 0,
                          },
                        }}
                        className="w-full h-full"
                      />
                    )}

                    {/* Media type indicator */}
                    {project.media![currentMediaIndex].type === "video" && (
                      <div className="absolute top-3 left-3 px-2 py-1 bg-background/70 backdrop-blur-sm rounded-md flex items-center gap-1.5 text-xs font-medium">
                        <Play className="w-3 h-3" />
                        Video
                      </div>
                    )}
                  </div>

                  {/* Navigation arrows */}
                  {project.media!.length > 1 && (
                    <>
                      <button
                        onClick={prevMedia}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-background/70 backdrop-blur-sm border border-border hover:bg-background transition-colors"
                        aria-label="Previous media"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextMedia}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-background/70 backdrop-blur-sm border border-border hover:bg-background transition-colors"
                        aria-label="Next media"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Caption */}
                  {project.media![currentMediaIndex].caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                      <p className="text-sm text-foreground/90">
                        {project.media![currentMediaIndex].caption}
                      </p>
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                {project.media!.length > 1 && (
                  <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                    {project.media!.map((media, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMediaIndex(index)}
                        className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentMediaIndex
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        {media.type === "image" ? (
                          <img
                            src={media.url}
                            alt={media.caption || `Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-secondary flex items-center justify-center">
                            <Play className="w-4 h-4 text-primary" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-display text-xl font-semibold mb-4">
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                  >
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/20">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
