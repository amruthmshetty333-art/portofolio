import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import { FaGraduationCap } from 'react-icons/fa';

export const Experience: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Education Timeline" subtitle="Academic Path" align="center" />

        <div className="relative border-l border-white/10 ml-4 md:ml-32 py-4 space-y-12">
          {portfolioData.education.map((edu, idx) => {
            return (
              <div key={edu.degree} className="relative pl-8 md:pl-12">
                {/* Timeline Icon Node */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white border-4 border-background shadow-md shadow-primary/25 z-10"
                >
                  <FaGraduationCap size={14} />
                </motion.div>

                {/* Date Left Side (Desktop Only) */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                  <span className="text-sm font-mono text-secondary font-semibold">{edu.period}</span>
                </div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-2xl border border-white/5 shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <span className="md:hidden block text-xs font-mono text-secondary font-semibold mb-1">{edu.period}</span>
                      <h3 className="text-lg md:text-xl font-bold text-white font-sans">{edu.institution}</h3>
                      <p className="text-sm font-semibold text-accent mt-0.5">{edu.degree}</p>
                    </div>
                    <span className="text-xs text-lightGray/50 font-mono mt-1 md:mt-0">{edu.location}</span>
                  </div>

                  <p className="text-lightGray/70 text-sm mt-3 leading-relaxed">
                    Focused study in key engineering concepts including Object-Oriented Programming (OOP), Data Structures and Algorithms (DSA), Database Management Systems (DBMS), and Computer Networks. Hands-on projects apply core theories to build full-stack web platforms and native mobile applications.
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Experience;
