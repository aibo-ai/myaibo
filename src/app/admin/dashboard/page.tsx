'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { cmsApi, User, Blog, CaseStudy } from '@/lib/api/cms';
import Image from 'next/image';
import Link from 'next/link';

interface DashboardStats {
  totalBlogs: number;
  publishedBlogs: number;
  totalCaseStudies: number;
  publishedCaseStudies: number;
  totalWhitepapers: number;
  publishedWhitepapers: number;
  totalViews: number;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
  const [recentCaseStudies, setRecentCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // For now, use mock user data since the /me endpoint is not working
        const mockUser = {
          id: '85abbdd6-2cce-4819-a2a3-f017bd6913bf',
          email: 'admin@myaibo.in',
          firstName: 'Admin',
          lastName: 'User',
          role: 'admin' as const,
          avatar: null,
          bio: null,
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        setUser(mockUser as unknown as User);
        
        // For now, use mock data since the API endpoints are not fully working
        const mockBlogs = [] as unknown as Blog[];
        const mockCaseStudies = [] as unknown as CaseStudy[];
        // const mockWhitepapers = [];

        setRecentBlogs(mockBlogs);
        setRecentCaseStudies(mockCaseStudies);

        setStats({
          totalBlogs: 0,
          publishedBlogs: 0,
          totalCaseStudies: 0,
          publishedCaseStudies: 0,
          totalWhitepapers: 0,
          publishedWhitepapers: 0,
          totalViews: 0
        });

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load dashboard data');
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await cmsApi.logout();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#7C3BED' }}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => router.push('/admin/login')}
            className="px-4 py-2 rounded-lg text-white"
            style={{ backgroundColor: '#7C3BED' }}
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/MyAibo_Logo.png"
                alt="MyAibo"
                width={120}
                height={40}
                className="mr-4"
              />
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user?.firstName} {user?.lastName}
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                {user?.role}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#7C3BED20' }}>
                <svg className="w-6 h-6" style={{ color: '#7C3BED' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Blogs</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.totalBlogs || 0}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#7C3BED20' }}>
                <svg className="w-6 h-6" style={{ color: '#7C3BED' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Case Studies</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.totalCaseStudies || 0}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#7C3BED20' }}>
                <svg className="w-6 h-6" style={{ color: '#7C3BED' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Whitepapers</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.totalWhitepapers || 0}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#7C3BED20' }}>
                <svg className="w-6 h-6" style={{ color: '#7C3BED' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.totalViews || 0}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/admin/blogs/new"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
            >
              <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#7C3BED20' }}>
                <svg className="w-5 h-5" style={{ color: '#7C3BED' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">New Blog Post</h3>
                <p className="text-sm text-gray-600">Create a new blog article</p>
              </div>
            </Link>

            <Link
              href="/admin/case-studies/new"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
            >
              <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#7C3BED20' }}>
                <svg className="w-5 h-5" style={{ color: '#7C3BED' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">New Case Study</h3>
                <p className="text-sm text-gray-600">Add a client success story</p>
              </div>
            </Link>

            <Link
              href="/admin/whitepapers/new"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
            >
              <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#7C3BED20' }}>
                <svg className="w-5 h-5" style={{ color: '#7C3BED' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">New Whitepaper</h3>
                <p className="text-sm text-gray-600">Upload a research document</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Blogs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Blog Posts</h2>
                <Link
                  href="/admin/blogs"
                  className="text-sm font-medium"
                  style={{ color: '#7C3BED' }}
                >
                  View all
                </Link>
              </div>
            </div>
            <div className="p-6">
              {recentBlogs.length > 0 ? (
                <div className="space-y-4">
                  {recentBlogs.map((blog) => (
                    <div key={blog.id} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium text-white" style={{ backgroundColor: '#7C3BED' }}>
                          {blog.title.charAt(0).toUpperCase()}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {blog.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(blog.created_at).toLocaleDateString()} • {blog.view_count} views
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          blog.status === 'published' 
                            ? 'bg-green-100 text-green-800' 
                            : blog.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {blog.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No blog posts yet</p>
              )}
            </div>
          </div>

          {/* Recent Case Studies */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Case Studies</h2>
                <Link
                  href="/admin/case-studies"
                  className="text-sm font-medium"
                  style={{ color: '#7C3BED' }}
                >
                  View all
                </Link>
              </div>
            </div>
            <div className="p-6">
              {recentCaseStudies.length > 0 ? (
                <div className="space-y-4">
                  {recentCaseStudies.map((caseStudy) => (
                    <div key={caseStudy.id} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium text-white" style={{ backgroundColor: '#7C3BED' }}>
                          {caseStudy.client_name.charAt(0).toUpperCase()}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {caseStudy.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {caseStudy.client_name} • {new Date(caseStudy.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          caseStudy.status === 'published' 
                            ? 'bg-green-100 text-green-800' 
                            : caseStudy.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {caseStudy.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No case studies yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
