import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const { personalInfo } = portfolioData;

function useTypingEffect(strings, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[stringIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setStringIndex((stringIndex + 1) % strings.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stringIndex, strings, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.titles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/background.png')` }}
      />
      {/* Overlay only behind the text side, not the image */}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-white font-bold mb-3 drop-shadow-md"
            >
              Hi there, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold mb-5 text-white drop-shadow-lg"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-10 mb-8"
            >
              <span className="text-xl md:text-2xl text-white font-bold drop-shadow-md">
                {typedText}
              </span>
              <span className="animate-pulse text-white">|</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center md:justify-start gap-6 mb-10"
            >
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-2xl drop-shadow-md"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-2xl drop-shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${personalInfo.social.email}`}
                className="text-white/80 hover:text-white transition-colors text-2xl drop-shadow-md"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              href="#projects"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              View My Work
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-gray-400 dark:text-gray-500 animate-bounce block">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
