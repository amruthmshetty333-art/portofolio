import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Education', target: 'education' },
  { label: 'Certifications', target: 'certifications' },
  { label: 'GitHub', target: 'github' },
  { label: 'Resume', target: 'resume' },
  { label: 'Contact', target: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine if background should blur
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Highlight active section on scroll
      const scrollPosition = window.scrollY + 200; // Offset for navbar height
      for (const item of navItems) {
        const el = document.getElementById(item.target);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.target);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-white/5 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('home')}
          className="cursor-pointer font-sans font-bold text-xl md:text-2xl text-white hover:opacity-80 transition-opacity"
        >
          Amruth<span className="text-secondary">.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className={`text-sm font-medium transition-colors hover:text-white ${
                activeSection === item.target 
                  ? 'text-secondary font-semibold' 
                  : 'text-lightGray/85'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-4 w-[1px] bg-white/20 mx-2" />
          <a
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightGray hover:text-white transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightGray hover:text-white transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-secondary transition-colors"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-cardBg shadow-2xl border-l border-white/10 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full justify-center px-8 space-y-6">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className={`text-left text-lg font-medium transition-colors ${
                activeSection === item.target 
                  ? 'text-secondary border-l-2 border-secondary pl-3' 
                  : 'text-lightGray pl-3'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="border-t border-white/10 pt-6 flex space-x-6 pl-3">
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightGray hover:text-white transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightGray hover:text-white transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
