import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const { personalInfo } = portfolioData;

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-lg mx-auto"
        >
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a chat about tech.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto bg-white dark:bg-surface-dark-alt rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-8 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 dark:bg-primary/20 rounded-full mb-5">
            <HiMail className="text-3xl text-primary dark:text-primary-light" />
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
            Email
          </p>
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="text-gray-700 dark:text-gray-300 font-medium hover:text-primary dark:hover:text-primary-light transition-colors"
          >
            {personalInfo.contact.email}
          </a>

          <div className="flex justify-center gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 dark:bg-surface-dark rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-sm font-medium"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 dark:bg-surface-dark rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-sm font-medium"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </a>
          </div>

          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="inline-block mt-6 px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
