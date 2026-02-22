import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaImages } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";
import ProjectDetailModal from "./ProjectDetailModal";

const { projects } = portfolioData;

const gradients = [
  "from-amber-500 to-orange-600",
  "from-blue-600 to-cyan-500",
  "from-purple-600 to-pink-500",
  "from-emerald-600 to-teal-500",
  "from-rose-500 to-red-600",
];

function ProjectCard({ project, index, onClick }) {
  const firstImage = project.media?.find((m) => m.type === "image");
  const youtubeThumb = project.media?.find((m) => m.type === "youtube");
  const thumbUrl = youtubeThumb
    ? `https://img.youtube.com/vi/${youtubeThumb.url.split("/").pop()}/hqdefault.jpg`
    : null;
  const previewUrl = project.image || firstImage?.url || thumbUrl || null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      onClick={onClick}
      className="group relative bg-white dark:bg-surface-dark-alt rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      <div
        className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center relative overflow-hidden`}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt={project.title}
            className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <span className="text-white/30 text-6xl font-black group-hover:scale-110 transition-transform duration-500">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </span>
        )}

        {project.media && project.media.length > 0 && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-full z-10">
            <FaImages size={12} />
            {project.media.length}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                <FaGithub /> Code
              </a>
            )}
            {project.live && project.live !== project.github && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>
          <span className="text-xs text-primary dark:text-primary-light font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View Details &rarr;
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
