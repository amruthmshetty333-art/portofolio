import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { FaFileDownload, FaExternalLinkAlt, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';

export const Resume: React.FC = () => {
  const atsScoreHighlight = 98;
  const lastUpdated = "July 2026";

  return (
    <section id="resume" className="py-24 px-6 md:px-12 bg-background/50 relative overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader title="Resume" subtitle="Documents" align="center" />

        <div className="glass-panel p-6 md:p-10 rounded-3xl border border-white/5 shadow-2xl flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Side: Mock document visualizer */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <motion.div
              initial={{ rotate: -3, scale: 0.95 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-56 h-80 bg-slate-900 border border-white/10 rounded-xl p-4 shadow-2xl overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              {/* Glowing vertical header */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent" />
              
              {/* Simulated lines */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="h-4 w-28 bg-white/20 rounded-md" />
                  <div className="h-2 w-10 bg-white/10 rounded-md" />
                </div>
                <div className="h-2 w-full bg-white/10 rounded-md" />
                <div className="h-2 w-3/4 bg-white/10 rounded-md" />
                <div className="h-[1px] w-full bg-white/10 my-4" />
                <div className="h-3 w-16 bg-white/25 rounded-md" />
                <div className="space-y-1.5 pl-2">
                  <div className="h-2 w-full bg-white/10 rounded-md" />
                  <div className="h-2 w-5/6 bg-white/10 rounded-md" />
                  <div className="h-2 w-4/5 bg-white/10 rounded-md" />
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-lightGray/40 font-mono">
                <span>ATS-Optimized</span>
                <span>PDF Document</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Details and CTA */}
          <div className="w-full lg:w-3/5 space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white font-sans">
                Professional Resume
              </h3>
              <p className="text-sm text-secondary mt-1">
                Optimized for technical recruiting and software engineering opportunities
              </p>
            </div>

            <p className="text-lightGray/80 text-sm md:text-base leading-relaxed">
              My resume outlines my educational credentials, technical expertise across Python, Django, Kotlin, and Databases, and practical experiences engineering e-commerce products and Android solutions. It is designed to be highly readable, brief, and structured for ATS screening algorithms.
            </p>

            {/* Resume metadata stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background/40 border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <FaCheckCircle className="text-accent text-xl flex-shrink-0" />
                <div>
                  <div className="text-white font-bold text-sm font-mono">{atsScoreHighlight}%</div>
                  <div className="text-[10px] uppercase text-lightGray/50 font-semibold font-mono">ATS Compatibility</div>
                </div>
              </div>
              
              <div className="bg-background/40 border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <FaCalendarAlt className="text-primary text-xl flex-shrink-0" />
                <div>
                  <div className="text-white font-bold text-sm font-mono">{lastUpdated}</div>
                  <div className="text-[10px] uppercase text-lightGray/50 font-semibold font-mono">Last Updated</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="./resume.pdf"
                download
                className="px-6 py-3 rounded-lg font-semibold bg-primary hover:bg-primary/95 text-white flex items-center gap-2 group transition-all duration-300 shadow-lg shadow-primary/20 text-sm"
              >
                <FaFileDownload />
                Download PDF Resume
              </a>

              <a
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold bg-white/10 hover:bg-white/15 text-white flex items-center gap-2 border border-white/10 text-sm transition-all duration-300"
              >
                <FaExternalLinkAlt />
                View Full Screen
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Resume;
