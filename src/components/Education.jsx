import { motion } from "framer-motion";
import { HiAcademicCap, HiLocationMarker } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";

const { education } = portfolioData;

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-surface-dark-alt"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </span>
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-white dark:bg-surface-dark rounded-2xl shadow-md p-8 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl flex-shrink-0">
                  <HiAcademicCap className="text-primary dark:text-primary-light text-3xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-primary dark:text-primary-light font-semibold mb-2">
                    {edu.degree}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <HiLocationMarker className="text-base" />
                      {edu.location}
                    </span>
                    <span>{edu.period}</span>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
