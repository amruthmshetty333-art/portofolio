import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component imports
import Navbar from './components/Navbar';
import ParticleCanvas from './components/ParticleCanvas';

// Section imports
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import GithubStats from './sections/GithubStats';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) library with default settings
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  return (
    <div className="relative min-h-screen text-white bg-background font-sans selection:bg-primary/30 selection:text-white">
      {/* Background Interactive Particles */}
      <ParticleCanvas />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections Wrapper */}
      <main className="relative z-10">
        <Hero />
        
        {/* Wrap sections in structured containers with AOS scroll animations */}
        <div data-aos="fade-up">
          <About />
        </div>
        
        <div data-aos="fade-up">
          <Skills />
        </div>
        
        <div data-aos="fade-up">
          <Projects />
        </div>
        
        <div data-aos="fade-up">
          <Experience />
        </div>
        
        <div data-aos="fade-up">
          <Certifications />
        </div>
        
        <div data-aos="fade-up">
          <GithubStats />
        </div>
        
        <div data-aos="fade-up">
          <Resume />
        </div>
        
        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>

      {/* Footer copyright and social links */}
      <Footer />
    </div>
  );
};

export default App;
