import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaCogs, FaSitemap } from 'react-icons/fa';

export const Projects: React.FC = () => {
  const [selectedArchProject, setSelectedArchProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Featured Projects" subtitle="My Contributions" />

        <div className="space-y-16">
          {portfolioData.projects.map((project) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isFeatured ? 'border-l-4 border-primary pl-6 lg:pl-10' : ''
                }`}
              >
                {/* Left Side: Mockup / Graphic placeholder */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-cardBg shadow-xl aspect-video flex flex-col justify-center items-center text-center p-6">
                    {/* Glowing card overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
                    
                    {/* Glowing Border Hover */}
                    <div className="absolute inset-0 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                    <div className="z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                        {isFeatured ? <FaDatabase size={28} /> : <FaCogs size={28} />}
                      </div>
                      <h4 className="text-white font-bold text-lg font-mono mb-1">{project.title}</h4>
                      <span className="text-xs text-lightGray/50 font-mono">Screenshot Placeholder</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                      <span className="text-xs text-lightGray/70 font-mono">{project.date}</span>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-background/80 hover:bg-background text-lightGray hover:text-white border border-white/5 transition-all"
                            title="GitHub Repository"
                          >
                            <FaGithub size={14} />
                          </a>
                        )}
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-background/80 hover:bg-background text-lightGray hover:text-white border border-white/5 transition-all"
                            title="Live Demo"
                          >
                            <FaExternalLinkAlt size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Text & details */}
                <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                  <div>
                    {isFeatured && (
                      <span className="text-[10px] tracking-widest font-bold uppercase text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-md mb-2 inline-block">
                        Featured Project
                      </span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white font-sans">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-secondary mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Bullet points descriptions */}
                  <ul className="space-y-2 text-sm text-lightGray/85 leading-relaxed">
                    {project.description.slice(0, 4).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-white/5 border border-white/5 hover:border-white/10 text-lightGray/80 px-2.5 py-1 rounded-md transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4 pt-3 items-center">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg font-semibold bg-white/10 hover:bg-white/15 text-white flex items-center gap-2 border border-white/10 text-sm transition-all"
                      >
                        <FaGithub />
                        Source Code
                      </a>
                    )}

                    {project.architecture && (
                      <button
                        onClick={() => setSelectedArchProject(project)}
                        className="px-4 py-2 rounded-lg font-semibold bg-primary/10 hover:bg-primary/20 border border-primary/20 text-secondary flex items-center gap-2 text-sm transition-all"
                      >
                        <FaSitemap />
                        System Architecture
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* System Architecture Modal */}
      <AnimatePresence>
        {selectedArchProject && selectedArchProject.architecture && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArchProject(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-panel p-6 md:p-8 rounded-2xl border border-white/10 z-10 shadow-2xl text-left"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                    <FaSitemap className="text-primary" />
                    {selectedArchProject.title} Architecture
                  </h3>
                  <p className="text-xs text-secondary mt-1">{selectedArchProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedArchProject(null)}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-lightGray hover:text-white flex items-center justify-center transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Architecture details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2 text-accent">Overview</h4>
                  <p className="text-lightGray/85 text-sm leading-relaxed bg-background/50 p-4 rounded-xl border border-white/5 font-mono">
                    {selectedArchProject.architecture.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3 text-accent">Key Modules & System Internals</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedArchProject.architecture.modules.map((mod) => (
                      <div key={mod.name} className="bg-background/40 border border-white/5 p-4 rounded-xl space-y-2">
                        <h5 className="text-white font-bold text-sm border-b border-white/5 pb-1 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {mod.name}
                        </h5>
                        <ul className="space-y-1 text-xs text-lightGray/70 leading-relaxed list-disc list-inside">
                          {mod.details.map((detail, dIdx) => (
                            <li key={dIdx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Projects;
