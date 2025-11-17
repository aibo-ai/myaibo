import { cmsApi, Blog } from '../../../../cms-backend/src/lib/api/cms';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import Image from 'next/image';

interface BlogDetailProps {
  params: { slug: string };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  let blog: Blog | null = null;
  try {
    blog = await cmsApi.getBlogBySlug(params.slug);
    console.log("blog", blog);
  } catch (error) {
    blog = null;
  }
console.log("blog in slug page", blog);
  if (!blog) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Blog Not Found</h2>
            <p className="text-gray-500">The blog you are looking for does not exist.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#7C3BED' }}>{blog.title}</h1>
        <div className="flex gap-2 mb-4">
          {blog.categories.map((category, idx) => (
            <span key={`${blog.slug}-${category}-${idx}`} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
              {category}
            </span>
          ))}
        </div>
        {blog.featured_image && (
          <div className="mb-6 relative aspect-video">
            <Image src={blog.featured_image} alt={blog.title} fill className="object-cover rounded-lg" />
          </div>
        )}
        <div className="text-gray-600 mb-6">{blog.excerpt}</div>
        <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: blog.content }} />
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{blog.published_at ? new Date(blog.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}</span>
          <span>{blog.view_count} views</span>
        </div>
      </main>
      <Footer />
    </>
  );
}
