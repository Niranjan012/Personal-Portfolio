// services/api/index.ts
import { ApiResponse, ApiError, ApiConfig } from '@/types/api';

/**
 * API Service - Handles all external API communications
 * Follows Single Responsibility Principle - only handles HTTP requests
 */
export class ApiService {
  private static config: ApiConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_URL || '',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  /**
   * Configure API service
   */
  static configure(config: Partial<ApiConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Generic GET request
   */
  static async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.config.baseURL}${endpoint}`, {
        method: 'GET',
        headers: this.config.headers,
        signal: AbortSignal.timeout(this.config.timeout),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return {
        data,
        success: true,
      };
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  /**
   * Generic POST request
   */
  static async post<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.config.baseURL}${endpoint}`, {
        method: 'POST',
        headers: this.config.headers,
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(this.config.timeout),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return {
        data,
        success: true,
      };
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  /**
   * Generic PUT request
   */
  static async put<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.config.baseURL}${endpoint}`, {
        method: 'PUT',
        headers: this.config.headers,
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(this.config.timeout),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return {
        data,
        success: true,
      };
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  /**
   * Generic DELETE request
   */
  static async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.config.baseURL}${endpoint}`, {
        method: 'DELETE',
        headers: this.config.headers,
        signal: AbortSignal.timeout(this.config.timeout),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return {
        data,
        success: true,
      };
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  /**
   * Handle API errors
   */
  private static handleError<T>(error: any): ApiResponse<T> {
    const apiError: ApiError = {
      code: 'API_ERROR',
      message: error.message || 'An unexpected error occurred',
      status: 500,
    };

    // Log error for debugging (in development)
    if (process.env.NODE_ENV === 'development') {
      console.error('API Error:', error);
    }

    return {
      data: null as T,
      success: false,
      error: apiError.message,
    };
  }

  /**
   * Set authorization header
   */
  static setAuthToken(token: string): void {
    this.config.headers['Authorization'] = `Bearer ${token}`;
  }

  /**
   * Clear authorization header
   */
  static clearAuthToken(): void {
    delete this.config.headers['Authorization'];
  }
}