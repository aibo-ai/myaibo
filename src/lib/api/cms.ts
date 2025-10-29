// CMS API Client
const API_BASE_URL = process.env.NEXT_PUBLIC_CMS_API_URL || 'http://localhost:3001/api';

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

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client_name: string;
  client_logo?: string;
  challenge: string;
  solution: string;
  results: Array<{
    metric: string;
    value: string;
    unit: string;
    description?: string;
  }>;
  content: string;
  featured_image?: string;
  author_id: string;
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  industries: string[];
  tags: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  meta_title?: string;
  meta_description?: string;
  canonical_url?: string;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export interface Whitepaper {
  id: string;
  title: string;
  slug: string;
  abstract: string;
  key_takeaways: string[];
  pdf_url: string;
  cover_image?: string;
  author_id: string;
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  topics: string[];
  tags: string[];
  is_gated: boolean;
  download_count: number;
  meta_title?: string;
  meta_description?: string;
  canonical_url?: string;
  file_size: number;
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
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('cms_token') || this.getCookie('cms_token');
    }
  }

  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      (headers as Record<string, string>).Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
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
        // Also set cookie for middleware
        document.cookie = `cms_token=${response.token}; path=/; max-age=${7 * 24 * 60 * 60}; secure; samesite=strict`;
      }
    }

    return response;
  }

  async logout(): Promise<void> {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cms_token');
      // Clear cookie
      document.cookie = 'cms_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  }

  async getCurrentUser(): Promise<User> {
    return this.request<User>('/auth/me');
  }

  // Health check
  async healthCheck(): Promise<{ status: string; timestamp: string; environment: string }> {
    return this.request('/health');
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

  async getBlogById(id: string): Promise<Blog> {
    return this.request(`/blog/id/${id}`);
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

  // Case Studies
  async getCaseStudies(params?: {
    page?: number;
    limit?: number;
    status?: string;
    industry?: string;
    outcome?: string;
    search?: string;
  }): Promise<{ data: CaseStudy[]; count: number }> {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const queryString = searchParams.toString();
    return this.request(`/case-studies${queryString ? `?${queryString}` : ''}`);
  }

  async getCaseStudy(slug: string): Promise<CaseStudy> {
    return this.request(`/case-studies/${slug}`);
  }

  async createCaseStudy(caseStudy: Partial<CaseStudy>): Promise<CaseStudy> {
    return this.request('/case-studies', {
      method: 'POST',
      body: JSON.stringify(caseStudy),
    });
  }

  async updateCaseStudy(id: string, caseStudy: Partial<CaseStudy>): Promise<CaseStudy> {
    return this.request(`/case-studies/${id}`, {
      method: 'PUT',
      body: JSON.stringify(caseStudy),
    });
  }

  async deleteCaseStudy(id: string): Promise<void> {
    return this.request(`/case-studies/${id}`, {
      method: 'DELETE',
    });
  }

  // Whitepapers
  async getWhitepapers(params?: {
    status?: string;
    topic?: string;
    search?: string;
  }): Promise<{ data: Whitepaper[] }> {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const queryString = searchParams.toString();
    return this.request(`/whitepapers${queryString ? `?${queryString}` : ''}`);
  }

  async getWhitepaper(slug: string): Promise<Whitepaper> {
    return this.request(`/whitepapers/${slug}`);
  }

  async createWhitepaper(whitepaper: Partial<Whitepaper>): Promise<Whitepaper> {
    return this.request('/whitepapers', {
      method: 'POST',
      body: JSON.stringify(whitepaper),
    });
  }

  async updateWhitepaper(id: string, whitepaper: Partial<Whitepaper>): Promise<Whitepaper> {
    return this.request(`/whitepapers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(whitepaper),
    });
  }

  async deleteWhitepaper(id: string): Promise<void> {
    return this.request(`/whitepapers/${id}`, {
      method: 'DELETE',
    });
  }

  // File upload
  async uploadFile(file: File, type: 'image' | 'pdf'): Promise<{ url: string }> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    const response = await fetch(`${this.baseURL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.status}`);
    }

    return response.json();
  }
}

export const cmsApi = new CMSApiClient();
