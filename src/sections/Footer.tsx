import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background border-t border-white/5 py-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo/Name */}
        <div className="text-lightGray/85 font-semibold text-base font-sans">
          Amruth<span className="text-secondary">.</span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-lightGray/50 font-mono text-center md:order-2">
          &copy; {currentYear} Amruth M Shetty. Designed & Developed with React & Tailwind.
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-6 md:order-3">
          <div className="flex gap-4">
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightGray/60 hover:text-white transition-colors"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightGray/60 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="text-lightGray/60 hover:text-white transition-colors"
              title="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>

          <div className="w-[1px] h-4 bg-white/10" />

          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-lightGray/80 hover:text-white flex items-center justify-center transition-all"
            title="Back to Top"
          >
            <FaChevronUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
