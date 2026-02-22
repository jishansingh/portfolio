import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const { personalInfo } = portfolioData;

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-50 dark:bg-surface-dark-alt border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with
            React.
          </p>

          <div className="flex gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
