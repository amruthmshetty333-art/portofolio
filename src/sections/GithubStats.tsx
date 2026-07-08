import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { useGithubData } from '../hooks/useGithubData';
import { FaGithub, FaStar, FaCodeBranch, FaUserFriends, FaBook, FaCircle } from 'react-icons/fa';

// Map of language colors
const languageColors: Record<string, string> = {
  Python: '#3776AB',
  Kotlin: '#A97BFF',
  Java: '#b07219',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  "Jupyter Notebook": '#DA5B0B'
};

export const GithubStats: React.FC = () => {
  const { profile, repos, loading } = useGithubData('amruth-shetty');

  // Hardcode static statistics for the graph view (as contribution graph iframe or simulation)
  const simulatedLanguages = [
    { name: 'Python', percentage: 55, color: '#3776AB' },
    { name: 'Kotlin', percentage: 25, color: '#A97BFF' },
    { name: 'Java', percentage: 12, color: '#b07219' },
    { name: 'Other', percentage: 8, color: '#14B8A6' }
  ];

  return (
    <section id="github" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader title="GitHub Integration" subtitle="Activity & Repositories" />

        {loading ? (
          /* Loading Skeleton */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 glass-panel p-6 rounded-2xl animate-pulse h-64 bg-cardBg/40 border border-white/5" />
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl animate-pulse h-40 bg-cardBg/40 border border-white/5" />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: GitHub Profile Summary Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-white/5 space-y-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={profile?.avatar_url}
                  alt={profile?.name || 'GitHub Avatar'}
                  className="w-16 h-16 rounded-full border-2 border-primary shadow-lg"
                />
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight font-sans">
                    {profile?.name}
                  </h3>
                  <a
                    href={profile?.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-secondary font-mono flex items-center gap-1 mt-1 hover:underline"
                  >
                    <FaGithub />
                    @amruth-shetty
                  </a>
                </div>
              </div>

              <p className="text-sm text-lightGray/70 leading-relaxed font-sans italic">
                "{profile?.bio}"
              </p>

              {/* GitHub statistics counts */}
              <div className="grid grid-cols-3 gap-2 bg-background/50 border border-white/5 rounded-xl p-4 text-center">
                <div className="space-y-1">
                  <FaBook className="mx-auto text-secondary text-sm" />
                  <div className="text-white font-bold text-sm font-mono">{profile?.public_repos}</div>
                  <div className="text-[10px] uppercase text-lightGray/50 font-semibold font-mono">Repos</div>
                </div>
                <div className="space-y-1 border-x border-white/5">
                  <FaUserFriends className="mx-auto text-accent text-sm" />
                  <div className="text-white font-bold text-sm font-mono">{profile?.followers}</div>
                  <div className="text-[10px] uppercase text-lightGray/50 font-semibold font-mono">Followers</div>
                </div>
                <div className="space-y-1">
                  <FaStar className="mx-auto text-yellow-500 text-sm" />
                  <div className="text-white font-bold text-sm font-mono">
                    {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
                  </div>
                  <div className="text-[10px] uppercase text-lightGray/50 font-semibold font-mono">Stars</div>
                </div>
              </div>

              {/* Simulated Language breakdown chart */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-lightGray/60 font-semibold uppercase tracking-wider">
                  Most Used Languages
                </h4>
                <div className="h-3 w-full rounded-full bg-background flex overflow-hidden border border-white/5">
                  {simulatedLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color
                      }}
                      title={`${lang.name}: ${lang.percentage}%`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                  {simulatedLanguages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-1.5 text-xs text-lightGray/80 font-mono">
                      <FaCircle style={{ color: lang.color }} className="w-2.5 h-2.5" />
                      <span>{lang.name}</span>
                      <span className="text-lightGray/40 text-[10px]">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={profile?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl font-semibold bg-white/5 hover:bg-white/10 text-white flex items-center justify-center gap-2 border border-white/5 transition-all text-sm font-mono"
                >
                  <FaGithub />
                  Visit GitHub Profile
                </a>
              </div>
            </motion.div>

            {/* Right Column: Repository Cards */}
            <div className="lg:col-span-8 space-y-4">
              <h4 className="text-sm font-mono text-secondary font-semibold uppercase tracking-widest pl-1 mb-4">
                Recent Repositories
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {repos.map((repo, idx) => {
                  return (
                    <motion.div
                      key={repo.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="glass-panel p-5 rounded-xl border border-white/5 hover:border-primary/25 hover:shadow-lg flex flex-col justify-between h-44 transition-all duration-300"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-secondary font-bold text-base tracking-tight leading-tight truncate max-w-[70%] font-sans"
                          >
                            {repo.name}
                          </a>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-lightGray/60 font-mono">
                            Public
                          </span>
                        </div>
                        <p className="text-xs text-lightGray/70 leading-relaxed font-sans line-clamp-3">
                          {repo.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-lightGray/60 font-mono">
                        <div className="flex items-center gap-1.5">
                          <FaCircle style={{ color: languageColors[repo.language] || '#CBD5E1' }} className="w-2.5 h-2.5" />
                          <span>{repo.language}</span>
                        </div>
                        <div className="flex gap-4">
                          <span className="flex items-center gap-1">
                            <FaStar className="text-yellow-500" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCodeBranch />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default GithubStats;
