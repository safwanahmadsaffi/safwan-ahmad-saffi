import { useState, useEffect } from "react";

interface GitHubStats {
  followers: number;
  following: number;
  publicRepos: number;
  totalStars: number;
  isLoading: boolean;
  error: string | null;
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
}

export const useGitHubStats = (username: string) => {
  const [stats, setStats] = useState<GitHubStats>({
    followers: 0,
    following: 0,
    publicRepos: 0,
    totalStars: 0,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch user profile
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error("Failed to fetch user data");
        const userData = await userResponse.json();

        // Fetch repositories to calculate total stars
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );
        if (!reposResponse.ok) throw new Error("Failed to fetch repos");
        const reposData: GitHubRepo[] = await reposResponse.json();

        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        setStats({
          followers: userData.followers,
          following: userData.following,
          publicRepos: userData.public_repos,
          totalStars,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setStats((prev) => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : "Unknown error",
        }));
      }
    };

    fetchStats();
  }, [username]);

  return stats;
};
