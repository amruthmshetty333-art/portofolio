import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import { 
  FaJava, FaDatabase, FaLaptopCode, FaCodeBranch, 
  FaBrain, FaCubes, FaSync, FaCogs, FaNetworkWired,
  FaChartBar
} from 'react-icons/fa';
import { 
  SiPython, SiCplusplus, SiJavascript, SiSqlite, 
  SiHtml5, SiCss, SiDjango, SiPostman, SiBootstrap, 
  SiFirebase, SiNumpy, SiPandas, 
  SiScikitlearn, SiGit, SiGithub, 
  SiAndroidstudio, SiAndroid, SiJupyter, SiGooglecolab 
} from 'react-icons/si';

// Helper to resolve icon components dynamically
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'SiPython': return <SiPython className="w-6 h-6 text-[#3776AB]" />;
    case 'FaJava': return <FaJava className="w-6 h-6 text-[#5382a1]" />;
    case 'SiCplusplus': return <SiCplusplus className="w-6 h-6 text-[#00599C]" />;
    case 'SiJavascript': return <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />;
    case 'SiSqlite': return <SiSqlite className="w-6 h-6 text-[#003B57]" />;
    case 'SiHtml5': return <SiHtml5 className="w-6 h-6 text-[#E34F26]" />;
    case 'SiCss3': return <SiCss className="w-6 h-6 text-[#1572B6]" />;
    case 'SiDjango': return <SiDjango className="w-6 h-6 text-[#092E20]" />;
    case 'SiPostman': return <SiPostman className="w-6 h-6 text-[#FF6C37]" />;
    case 'SiBootstrap': return <SiBootstrap className="w-6 h-6 text-[#7952B3]" />;
    case 'SiFirebase': return <SiFirebase className="w-6 h-6 text-[#FFCA28]" />;
    case 'FaDatabase': return <FaDatabase className="w-6 h-6 text-[#38BDF8]" />;
    case 'SiNumpy': return <SiNumpy className="w-6 h-6 text-[#013243]" />;
    case 'SiPandas': return <SiPandas className="w-6 h-6 text-[#150458]" />;
    case 'SiMatplotlib': return <FaChartBar className="w-6 h-6 text-[#11557c]" />;
    case 'SiScikitlearn': return <SiScikitlearn className="w-6 h-6 text-[#F7931E]" />;
    case 'SiGit': return <SiGit className="w-6 h-6 text-[#F05032]" />;
    case 'SiGithub': return <SiGithub className="w-6 h-6 text-white" />;
    case 'SiVisualstudiocode': return <FaLaptopCode className="w-6 h-6 text-[#007ACC]" />;
    case 'SiAndroidstudio': return <SiAndroidstudio className="w-6 h-6 text-[#3DDC84]" />;
    case 'SiAndroid': return <SiAndroid className="w-6 h-6 text-[#3DDC84]" />;
    case 'FaLaptopCode': return <FaLaptopCode className="w-6 h-6 text-accent" />;
    case 'SiJupyter': return <SiJupyter className="w-6 h-6 text-[#F37626]" />;
    case 'SiGooglecolab': return <SiGooglecolab className="w-6 h-6 text-[#F9AB00]" />;
    case 'FaCodeBranch': return <FaCodeBranch className="w-6 h-6 text-primary" />;
    case 'FaBrain': return <FaBrain className="w-6 h-6 text-accent" />;
    case 'FaCubes': return <FaCubes className="w-6 h-6 text-secondary" />;
    case 'FaSync': return <FaSync className="w-6 h-6 text-lightGray" />;
    case 'FaCogs': return <FaCogs className="w-6 h-6 text-[#CBD5E1]" />;
    case 'FaNetworkWired': return <FaNetworkWired className="w-6 h-6 text-primary" />;
    default: return <FaLaptopCode className="w-6 h-6 text-accent" />;
  }
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(portfolioData.skills[0].category);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  const activeCategorySkills = portfolioData.skills.find(
    (cat) => cat.category === activeTab
  )?.skills || [];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader title="Technical Skills" subtitle="My Toolbox" />

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 pb-4 border-b border-white/5 overflow-x-auto scrollbar-none">
          {portfolioData.skills.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === cat.category
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-cardBg/40 hover:bg-cardBg/80 text-lightGray border border-white/5'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Tab Content Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
          >
            {activeCategorySkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ y: -6, borderColor: 'rgba(56, 189, 248, 0.4)', boxShadow: '0 10px 20px -10px rgba(56, 189, 248, 0.15)' }}
                className="glass-panel p-5 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-background/80 flex items-center justify-center shadow-inner border border-white/5">
                  {getIconComponent(skill.icon)}
                </div>
                <span className="text-white text-sm font-medium tracking-tight font-sans">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Skills;
