interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  url: string;
}

class GitHubService {
  private baseUrl = "https://api.github.com";

  async getUserRepos(username: string): Promise<GitHubRepo[]> {
    const response = await fetch(`${this.baseUrl}/users/${username}/repos`);
    if (!response.ok) throw new Error("Failed to fetch repos");
    return response.json();
  }

  async getRepo(username: string, repo: string): Promise<GitHubRepo> {
    const response = await fetch(`${this.baseUrl}/repos/${username}/${repo}`);
    if (!response.ok) throw new Error("Failed to fetch repo");
    return response.json();
  }
}

export const githubService = new GitHubService();