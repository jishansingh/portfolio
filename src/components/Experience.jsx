import { useState } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiBriefcase, HiArrowRight } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";
import ExperienceDetailModal from "./ExperienceDetailModal";

const { experience } = portfolioData;

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <>
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Work{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <VerticalTimeline lineColor="var(--color-primary)">
            {experience.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                date={exp.period}
                dateClassName="text-gray-500 dark:text-gray-400"
                contentStyle={{
                  background: "var(--timeline-bg, #ffffff)",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  borderRadius: "1rem",
                  padding: "1.5rem 2rem",
                  cursor: exp.details ? "pointer" : "default",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid var(--timeline-bg, #ffffff)",
                }}
                iconStyle={{
                  background: "var(--color-primary)",
                  color: "#fff",
                  boxShadow: "0 0 0 4px var(--color-primary-light)",
                }}
                icon={<HiBriefcase />}
                onTimelineElementClick={
                  exp.details ? () => setSelectedExp(exp) : undefined
                }
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <h4 className="text-primary dark:text-primary-light font-semibold text-sm mb-1">
                  {exp.company} — {exp.location}
                </h4>
                <ul className="mt-3 space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {exp.details && (
                  <button
                    onClick={() => setSelectedExp(exp)}
                    className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary dark:text-primary-light hover:underline"
                  >
                    View Details <HiArrowRight size={14} />
                  </button>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      {selectedExp && (
        <ExperienceDetailModal
          experience={selectedExp}
          onClose={() => setSelectedExp(null)}
        />
      )}
    </>
  );
}
