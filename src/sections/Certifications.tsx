import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import { FaJava, FaCode, FaBrain, FaChartBar, FaAward } from 'react-icons/fa';

const getCertIcon = (iconType: string) => {
  switch (iconType) {
    case 'java': return <FaJava className="w-6 h-6 text-[#5382a1]" />;
    case 'ai': return <FaBrain className="w-6 h-6 text-accent" />;
    case 'code': return <FaCode className="w-6 h-6 text-[#38BDF8]" />;
    case 'data': return <FaChartBar className="w-6 h-6 text-primary" />;
    default: return <FaAward className="w-6 h-6 text-secondary" />;
  }
};

export const Certifications: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 bg-background/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Certifications" subtitle="Credentials" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolioData.certifications.map((cert) => {
            return (
              <motion.div
                key={cert.name}
                variants={cardVariants}
                whileHover={{ y: -6, borderColor: 'rgba(20, 184, 166, 0.4)' }}
                className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between transition-all duration-300 group relative"
              >
                {/* Micro badge decoration */}
                <div className="absolute top-4 right-4 text-white/10 group-hover:text-accent/20 transition-colors">
                  <FaAward size={36} />
                </div>

                <div className="space-y-4">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center border border-white/5 shadow-inner">
                    {getCertIcon(cert.iconType)}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base md:text-lg leading-tight group-hover:text-accent transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-lightGray/60 mt-1 font-mono">{cert.issuer}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-secondary font-mono">
                    Verified Credential
                  </span>
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Certifications;
