import { cmsApi, Blog } from '@/lib/api/cms';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPage() {
  let blogs: Blog[] = [];
  let error: string | null = null;

  try {
    const response = await cmsApi.getBlogs({ status: 'published', limit: 20 });
    blogs = response.data;
  } catch (err) {
    console.error('Error fetching blogs:', err);
    error = 'Failed to load blogs';
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span style={{ color: '#7C3BED' }}>Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on AI, technology, and digital transformation.
            </p>
          </div>

          {error ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Blogs</h3>
              <p className="text-gray-600">{error}</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Blogs Available</h3>
              <p className="text-gray-600">
                Check back soon for the latest insights and articles.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {blog.featured_image && (
                    <div className="h-48 bg-gray-200">
                      <Image
                        src={`http://localhost:3001${blog.featured_image}`}
                        alt={blog.featured_image_alt || blog.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {blog.categories.slice(0, 2).map((category, idx) => (
                        <span key={`${blog.id}-cat-${idx}`} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
                          {category}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blog/${blog.slug}`}>
                      <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-purple-600 transition-colors cursor-pointer">
                        {blog.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{blog.published_at ? new Date(blog.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}</span>
                      <span>{blog.view_count} views</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
