import { motion } from "framer-motion";
import { HiBriefcase, HiAcademicCap, HiOfficeBuilding } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";

const { personalInfo } = portfolioData;

const stats = [
  {
    icon: HiBriefcase,
    label: "3+ Years",
    sublabel: "Experience",
  },
  {
    icon: HiAcademicCap,
    label: "B.Tech",
    sublabel: "IIIT Allahabad",
  },
  {
    icon: HiOfficeBuilding,
    label: "SDE II",
    sublabel: "Sixt R&D",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-surface-dark-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center mb-10"
        >
          {personalInfo.bio}
        </motion.p>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-4 rounded-xl bg-white dark:bg-surface-dark shadow-md hover:shadow-lg transition-shadow"
            >
              <stat.icon className="mx-auto text-primary dark:text-primary-light text-2xl mb-2" />
              <p className="font-bold text-gray-900 dark:text-white text-sm">
                {stat.label}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
