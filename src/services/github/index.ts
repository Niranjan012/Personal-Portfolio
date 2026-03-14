// services/github/index.ts
import { ApiService } from '@/services/api';
import { GitHubRepo, GitHubUser, GitHubCommit } from '@/types/api';

/**
 * GitHub Service - Handles GitHub API interactions
 * Follows Single Responsibility Principle - only handles GitHub operations
 */
export class GitHubService {
  private static readonly BASE_URL = 'https://api.github.com';

  /**
   * Configure GitHub service with token if available
   */
  static configure(token?: string): void {
    ApiService.configure({
      baseURL: this.BASE_URL,
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-App',
        ...(token && { 'Authorization': `token ${token}` }),
      },
    });
  }

  /**
   * Get user profile information
   */
  static async getUser(username: string): Promise<GitHubUser | null> {
    const response = await ApiService.get<GitHubUser>(`/users/${username}`);

    if (response.success && response.data) {
      return response.data;
    }

    return null;
  }

  /**
   * Get user's repositories
   */
  static async getUserRepos(username: string, options?: {
    sort?: 'created' | 'updated' | 'pushed' | 'full_name';
    direction?: 'asc' | 'desc';
    per_page?: number;
    page?: number;
  }): Promise<GitHubRepo[]> {
    const params = new URLSearchParams();

    if (options?.sort) params.append('sort', options.sort);
    if (options?.direction) params.append('direction', options.direction);
    if (options?.per_page) params.append('per_page', options.per_page.toString());
    if (options?.page) params.append('page', options.page.toString());

    const queryString = params.toString();
    const endpoint = `/users/${username}/repos${queryString ? `?${queryString}` : ''}`;

    const response = await ApiService.get<GitHubRepo[]>(endpoint);

    if (response.success && response.data) {
      return response.data;
    }

    return [];
  }

  /**
   * Get repository information
   */
  static async getRepo(owner: string, repo: string): Promise<GitHubRepo | null> {
    const response = await ApiService.get<GitHubRepo>(`/repos/${owner}/${repo}`);

    if (response.success && response.data) {
      return response.data;
    }

    return null;
  }

  /**
   * Get repository commits
   */
  static async getRepoCommits(owner: string, repo: string, options?: {
    sha?: string;
    path?: string;
    author?: string;
    since?: string;
    until?: string;
    per_page?: number;
    page?: number;
  }): Promise<GitHubCommit[]> {
    const params = new URLSearchParams();

    if (options?.sha) params.append('sha', options.sha);
    if (options?.path) params.append('path', options.path);
    if (options?.author) params.append('author', options.author);
    if (options?.since) params.append('since', options.since);
    if (options?.until) params.append('until', options.until);
    if (options?.per_page) params.append('per_page', options.per_page.toString());
    if (options?.page) params.append('page', options.page.toString());

    const queryString = params.toString();
    const endpoint = `/repos/${owner}/${repo}/commits${queryString ? `?${queryString}` : ''}`;

    const response = await ApiService.get<GitHubCommit[]>(endpoint);

    if (response.success && response.data) {
      return response.data;
    }

    return [];
  }

  /**
   * Get repository languages
   */
  static async getRepoLanguages(owner: string, repo: string): Promise<Record<string, number>> {
    const response = await ApiService.get<Record<string, number>>(`/repos/${owner}/${repo}/languages`);

    if (response.success && response.data) {
      return response.data;
    }

    return {};
  }

  /**
   * Search repositories
   */
  static async searchRepos(query: string, options?: {
    sort?: 'stars' | 'forks' | 'help-wanted-issues' | 'updated';
    order?: 'asc' | 'desc';
    per_page?: number;
    page?: number;
  }): Promise<{ items: GitHubRepo[]; total_count: number }> {
    const params = new URLSearchParams();
    params.append('q', query);

    if (options?.sort) params.append('sort', options.sort);
    if (options?.order) params.append('order', options.order);
    if (options?.per_page) params.append('per_page', options.per_page.toString());
    if (options?.page) params.append('page', options.page.toString());

    const response = await ApiService.get<{ items: GitHubRepo[]; total_count: number }>(`/search/repositories?${params}`);

    if (response.success && response.data) {
      return response.data;
    }

    return { items: [], total_count: 0 };
  }
}