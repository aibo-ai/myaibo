// Frontend CMS API Client
const API_BASE_URL = process.env.NEXT_PUBLIC_CMS_API_URL || 'http://localhost:3002/api';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'editor';
  avatar?: string;
  bio?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  featured_image_alt?: string;
  author_id: string;
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  categories: string[];
  tags: string[];
  meta_title?: string;
  meta_description?: string;
  canonical_url?: string;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  user: User;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

class CMSApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor() {
    this.baseURL = API_BASE_URL;
    // Get token from localStorage if available
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('cms_token');
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    // Create AbortController for timeout handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorData: Record<string, unknown> = {};
        try {
          errorData = await response.json();
        } catch {
          // Response body is not JSON, use default error
        }
        throw new Error(
          typeof errorData.message === 'string'
            ? errorData.message
            : `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  // Authentication
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await this.request<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (response.success && response.token) {
      this.token = response.token;
      if (typeof window !== 'undefined') {
        localStorage.setItem('cms_token', response.token);
      }
    }
    return response;
  }

  async logout(): Promise<void> {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cms_token');
    }
  }

  async getCurrentUser(): Promise<User> {
    return this.request<User>('/auth-simple/me');
  }

  // Blogs
  async getBlogs(params?: {
    page?: number;
    limit?: number;
    status?: string;
    category?: string;
    tag?: string;
    search?: string;
  }): Promise<{ data: Blog[]; count: number }> {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    return this.request(`/blog${queryString ? `?${queryString}` : ''}`);
  }

  async getBlog(slug: string): Promise<Blog> {
    return this.request(`/blog/${slug}`);
  }

  async createBlog(blog: Partial<Blog>): Promise<Blog> {
    return this.request('/blog', {
      method: 'POST',
      body: JSON.stringify(blog),
    });
  }

  async updateBlog(id: string, blog: Partial<Blog>): Promise<Blog> {
    return this.request(`/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(blog),
    });
  }

  async deleteBlog(id: string): Promise<void> {
    return this.request(`/blog/${id}`, {
      method: 'DELETE',
    });
  }

  // File upload
  async uploadFile(file: File, type: 'image' | 'pdf'): Promise<{ url: string }> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    const headers: Record<string, string> = {};
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    // Create AbortController for timeout handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
      const response = await fetch(`${this.baseURL}/upload`, {
        method: 'POST',
        headers,
        body: formData,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorData: Record<string, unknown> = {};
        try {
          errorData = await response.json();
        } catch {
          // Response body is not JSON, use default error
        }
        throw new Error(
          typeof errorData.message === 'string'
            ? errorData.message
            : `Upload failed: ${response.status}`
        );
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }
}

export const cmsApi = new CMSApiClient();
