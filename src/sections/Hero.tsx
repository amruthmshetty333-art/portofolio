import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const titles = [
  "Computer Science Engineering Student",
  "Full Stack Django Developer",
  "Python Developer",
  "AI & Data Science Enthusiast"
];

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: number;
    const currentFullTitle = titles[titleIndex];

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setDisplayText(currentFullTitle.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setDisplayText(currentFullTitle.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentFullTitle) {
      // Finished typing, pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      // Finished deleting, move to next title
      setIsDeleting(false);
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-semibold tracking-widest text-sm uppercase px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 inline-block mb-4">
              Available for Internships
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-4 font-sans"
          >
            Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{portfolioData.personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium text-lightGray mb-6 h-8 flex items-center"
          >
            <span className="mr-2">I'm a</span>
            <span className="text-accent font-semibold relative">
              {displayText}
              <span className="animate-pulse absolute -right-1.5 bottom-1 h-5 w-[2px] bg-accent" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lightGray/80 max-w-xl text-base md:text-lg mb-8 leading-relaxed"
          >
            Software engineering student specializing in Full Stack and Data Science. I build secure, scalable databases, backends, and responsive frontend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center mb-8"
          >
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-lg font-semibold bg-primary hover:bg-primary/95 text-white flex items-center gap-2 group transition-all duration-300 shadow-lg shadow-primary/25"
            >
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="./resume.pdf"
              download
              className="px-6 py-3 rounded-lg font-semibold bg-white/10 hover:bg-white/15 text-white flex items-center gap-2 transition-all duration-300 border border-white/10"
            >
              Download Resume
              <FaFileDownload />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4"
          >
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 text-lightGray hover:text-white transition-all duration-300 border border-white/5"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 text-lightGray hover:text-white transition-all duration-300 border border-white/5"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 text-lightGray hover:text-white transition-all duration-300 border border-white/5"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Graphic/Headshot Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Glowing borders */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary to-accent opacity-20 blur-xl animate-pulse" />
            
            {/* Main Outer container */}
            <div className="absolute inset-2 rounded-3xl border border-white/10 overflow-hidden bg-cardBg flex items-center justify-center shadow-2xl">
              {/* Photo placeholder graphics */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
              
              {/* Custom SVG tech graphics */}
              <svg className="w-48 h-48 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              
              <div className="absolute bottom-6 left-6 right-6 text-center z-10">
                <span className="text-white/80 font-mono text-sm block mb-1">&lt;Developer /&gt;</span>
                <span className="text-xs text-lightGray/60 font-mono">portfolio.src.amruth</span>
              </div>
            </div>
            
            {/* Floating micro animations */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-cardBg/80 backdrop-blur px-3 py-1.5 rounded-lg border border-white/5 shadow-lg flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
              <span className="text-xs font-mono text-lightGray font-semibold">Python / Django</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-cardBg/80 backdrop-blur px-3 py-1.5 rounded-lg border border-white/5 shadow-lg flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <span className="text-xs font-mono text-lightGray font-semibold">Data Science</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
