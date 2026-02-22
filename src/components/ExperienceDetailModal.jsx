import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiCheckCircle, HiLightningBolt } from "react-icons/hi";

export default function ExperienceDetailModal({ experience, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const details = experience.details;
  if (!details) return null;

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
          className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-white dark:bg-surface-dark-alt rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="flex-shrink-0 bg-gradient-to-r from-primary to-accent p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <HiX size={20} />
            </button>
            <h2 className="text-2xl font-bold pr-10">{experience.title}</h2>
            <p className="text-white/90 font-medium mt-1">
              {experience.company} — {experience.location}
            </p>
            <p className="text-white/70 text-sm mt-1">{experience.period}</p>
          </div>

          <div className="overflow-y-auto flex-1 p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {details.summary}
            </p>

            <div className="space-y-6">
              {details.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="bg-gray-50 dark:bg-surface-dark rounded-xl p-5"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <HiLightningBolt className="text-primary dark:text-primary-light flex-shrink-0" />
                    {highlight.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {highlight.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed">
                        <HiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {details.impact && (
              <div className="mt-6 p-4 border-l-4 border-primary bg-primary/5 dark:bg-primary/10 rounded-r-lg">
                <p className="text-sm font-semibold text-primary dark:text-primary-light mb-1">
                  Impact
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {details.impact}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-6">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
