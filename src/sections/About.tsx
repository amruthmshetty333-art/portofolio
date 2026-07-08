import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { FaGraduationCap, FaCode, FaBrain } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-background/50 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="About Me" subtitle="My Journey" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Summary and Details */}
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg text-white font-medium leading-relaxed font-sans"
            >
              I am Amruth M Shetty, a passionate Computer Science Engineering student specializing in Data Science, AI, and Machine Learning.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lightGray/85 text-base leading-relaxed"
            >
              {portfolioData.personalInfo.summary}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lightGray/85 text-base leading-relaxed"
            >
              My coding journey focuses on building clean architectures. On the backend, I leverage Django, SQLite, and Python to create optimized, transactional databases and robust REST endpoints. For the frontend and mobile space, I enjoy translating requirements into fluid, highly accessible user interfaces. I view software engineering as a continuous process of design refinement and problem solving.
            </motion.p>
          </div>

          {/* Right Core Competencies Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid grid-cols-1 gap-6"
          >
            {/* Core Card 1 */}
            <motion.div
              variants={cardVariants}
              className="glass-panel p-6 rounded-2xl flex gap-5 border border-white/5 shadow-md hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <FaCode size={22} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Full Stack Development</h3>
                <p className="text-lightGray/70 text-sm">
                  Proficient in architecting backends with Python/Django, securing user pipelines, and engineering clean frontends.
                </p>
              </div>
            </motion.div>

            {/* Core Card 2 */}
            <motion.div
              variants={cardVariants}
              className="glass-panel p-6 rounded-2xl flex gap-5 border border-white/5 shadow-md hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <FaBrain size={22} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Data Science & AI/ML</h3>
                <p className="text-lightGray/70 text-sm">
                  Passionate about engineering predictive modeling systems, environment metric forecasting, and data-driven analysis.
                </p>
              </div>
            </motion.div>

            {/* Core Card 3 */}
            <motion.div
              variants={cardVariants}
              className="glass-panel p-6 rounded-2xl flex gap-5 border border-white/5 shadow-md hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <FaGraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Continuous Learning</h3>
                <p className="text-lightGray/70 text-sm">
                  Currently pursuing B.E. in CS (Data Science & AI/ML) at Canara Engineering College, maintaining high academic standards.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
