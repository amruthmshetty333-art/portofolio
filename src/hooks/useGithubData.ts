import { useState, useEffect } from 'react';

export interface GithubProfile {
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
  html_url: string;
}

export interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  languages_url: string;
}

export function useGithubData(username: string) {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Backup data in case of API rate limit
  const backupProfile: GithubProfile = {
    name: "Amruth M Shetty",
    avatar_url: "https://avatars.githubusercontent.com/u/148816772?v=4", // fallback standard GitHub avatar or similar, or dynamic
    followers: 12,
    following: 15,
    public_repos: 8,
    bio: "Computer Science Engineering Student | Django Full Stack Developer | AI & Data Science Enthusiast",
    html_url: `https://github.com/${username}`
  };

  const backupRepos: GithubRepo[] = [
    {
      name: "bluecart",
      description: "Full Stack E-Commerce Web Application using Django and Python. Implemented shopping cart, custom authentication, dynamic ReportLab invoice generator and transaction row-locking.",
      html_url: `https://github.com/${username}/bluecart`,
      stargazers_count: 5,
      forks_count: 2,
      language: "Python",
      languages_url: ""
    },
    {
      name: "poultry-farm-management",
      description: "Android application developed in Kotlin with Firebase integration to manage logs, feed metrics, and weight predictions in real-time.",
      html_url: `https://github.com/${username}/poultry-farm-management`,
      stargazers_count: 3,
      forks_count: 1,
      language: "Kotlin",
      languages_url: ""
    },
    {
      name: "data-science-portfolio",
      description: "Collection of data science and machine learning projects including predictive modeling, data analysis, and visualizations.",
      html_url: `https://github.com/${username}/data-science-portfolio`,
      stargazers_count: 4,
      forks_count: 1,
      language: "Jupyter Notebook",
      languages_url: ""
    }
  ];

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ]);

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error('Failed to fetch from GitHub API');
        }

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        // Map relevant fields
        setProfile({
          name: profileData.name || username,
          avatar_url: profileData.avatar_url,
          followers: profileData.followers,
          following: profileData.following,
          public_repos: profileData.public_repos,
          bio: profileData.bio || "",
          html_url: profileData.html_url
        });

        const sortedRepos = reposData
          .filter((repo: any) => !repo.fork)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || "",
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            language: repo.language || "TypeScript",
            languages_url: repo.languages_url
          }));

        setRepos(sortedRepos.length > 0 ? sortedRepos : backupRepos);
        setError(null);
      } catch (err: any) {
        console.warn("GitHub API error (possibly rate limited), using local backup: ", err.message);
        // Load fallback backup data
        setProfile(backupProfile);
        setRepos(backupRepos);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { profile, repos, loading, error };
}
