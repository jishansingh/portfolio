import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDetailModal({ project, onClose }) {
  const [currentMedia, setCurrentMedia] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && project.media?.length > 1)
        setCurrentMedia((p) => (p + 1) % project.media.length);
      if (e.key === "ArrowLeft" && project.media?.length > 1)
        setCurrentMedia(
          (p) => (p - 1 + project.media.length) % project.media.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, project.media]);

  const media = project.media || [];
  const hasMedia = media.length > 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white dark:bg-surface-dark-alt rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white truncate pr-4">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <HiX size={20} />
            </button>
          </div>

          <div className="overflow-y-auto flex-1 p-6">
            {hasMedia && (
              <div className="mb-6">
                <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-center min-h-[250px] sm:min-h-[350px]">
                    {media[currentMedia].type === "youtube" ? (
                      <iframe
                        src={media[currentMedia].url}
                        title={media[currentMedia].caption}
                        className="w-full aspect-video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : media[currentMedia].type === "video" ? (
                      <video
                        src={media[currentMedia].url}
                        controls
                        className="max-w-full max-h-[400px] object-contain"
                      />
                    ) : (
                      <img
                        src={media[currentMedia].url}
                        alt={media[currentMedia].caption}
                        className="max-w-full max-h-[400px] object-contain"
                      />
                    )}
                  </div>

                  {media.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setCurrentMedia(
                            (p) =>
                              (p - 1 + media.length) % media.length
                          )
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                        aria-label="Previous"
                      >
                        <HiChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentMedia(
                            (p) => (p + 1) % media.length
                          )
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                        aria-label="Next"
                      >
                        <HiChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {media[currentMedia].caption && (
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {media[currentMedia].caption}
                  </p>
                )}

                {media.length > 1 && (
                  <div className="flex justify-center gap-2 mt-3">
                    {media.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentMedia(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          i === currentMedia
                            ? "bg-primary"
                            : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to media ${i + 1}`}
                      />
                    ))}
                  </div>
                )}

                {media.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                    {media.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentMedia(i)}
                        className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                          i === currentMedia
                            ? "border-primary shadow-md"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        {item.type === "youtube" || item.type === "video" ? (
                          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                            </svg>
                          </div>
                        ) : (
                          <img
                            src={item.url}
                            alt={item.caption}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {project.detailDescription || project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                >
                  <FaGithub size={16} /> View on GitHub
                </a>
              )}
              {project.live && project.live !== project.github && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
                >
                  <FaExternalLinkAlt size={14} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
