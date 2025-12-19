import { cmsApi, Blog } from '@/lib/api/cms';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import Image from 'next/image';
import { Metadata } from 'next';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const { slug } = params;
    const blog = await cmsApi.getBlogBySlug(slug);

    const title = blog.meta_title || blog.title;
    const description = blog.meta_description || blog.excerpt;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'article',
        publishedTime: blog.published_at,
        authors: blog.author ? [blog.author.firstName + ' ' + blog.author.lastName] : [],
        tags: blog.tags,
        images: blog.featured_image ? [{
          url: `http://localhost:3002${blog.featured_image}`,
          alt: blog.title,
        }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: blog.featured_image ? [`http://localhost:3002${blog.featured_image}`] : [],
      },
    };
  } catch {
    return {
      title: 'Blog Not Found',
      description: 'The blog post you are looking for could not be found.',
    };
  }
}

type BlogPageProps = { params: { slug: string } };

export default async function BlogDetailPage(props: BlogPageProps) {
  const { slug } = props.params;
  let blog: Blog | null = null;
  try {
    blog = await cmsApi.getBlogBySlug(slug);
    console.log("blog", blog);
  } catch (error) {
    console.error(error);
    blog = null;
  }
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
      <main className="max-w-5xl mx-auto px-4 py-12">
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
            <Image src={`http://localhost:3002${blog.featured_image}`} alt={blog.title} fill className="object-cover rounded-lg" />
          </div>
        )}
        <div className="text-gray-600 mb-6">{blog.excerpt}</div>
        <div className="prose prose-lg max-w-none mb-8 [&_p:empty]:min-h-[1rem] [&_p:empty]:block" dangerouslySetInnerHTML={{ __html: blog.content }} />
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{blog.published_at ? new Date(blog.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}</span>
          <span>{blog.view_count} views</span>
        </div>
      </main>
      <Footer />
    </>
  );
}
