'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CaseStudy, cmsApi } from '../../../../../cms-backend/src/lib/api/cms';
import Image from 'next/image';

interface CaseStudyFormData {
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  pdf_file: File | null;
  pdf_url: string;
  client_name: string;
  industry: string;
  project_duration: string;
  technologies: string[];
  results: string;
  status: 'draft' | 'published';
  meta_title: string;
  meta_description: string;
  tags: string[];
  download_count: number;
}

export default function NewCaseStudyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<CaseStudyFormData>({
    title: '',
    slug: '',
    excerpt: '',
    featured_image: '',
    pdf_file: null,
    pdf_url: '',
    client_name: '',
    industry: '',
    project_duration: '',
    technologies: [],
    results: '',
    status: 'draft',
    meta_title: '',
    meta_description: '',
    tags: [],
    download_count: 0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (name: keyof Pick<CaseStudyFormData, 'technologies' | 'tags'>, value: string) => {
    const items = value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({
      ...prev,
      [name]: items
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      pdf_file: file
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
        alert('Please select a valid image file (PNG or JPG)');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size must be less than 5MB');
        return;
      }
      
      setImageFile(file);
      
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let pdfUrl = formData.pdf_url;
      let featuredImageUrl = formData.featured_image;
      
      // Upload PDF file if provided
      if (formData.pdf_file) {
        const uploadResponse = await cmsApi.uploadFile(formData.pdf_file, 'pdf');
        pdfUrl = uploadResponse.url;
      }

      // Upload image file if provided
      if (imageFile) {
        const imageUploadResponse = await cmsApi.uploadFile(imageFile, 'image');
        featuredImageUrl = imageUploadResponse.url;
      }

      // Create case study with PDF URL and featured image URL
      const caseStudyData = {
        ...formData,
        pdf_url: pdfUrl,
        featured_image: featuredImageUrl,
        pdf_file: undefined // Remove file object before sending
      };
      
      await cmsApi.createCaseStudy(caseStudyData as unknown as Partial<CaseStudy>);
      router.push('/admin/case-studies');
    } catch (err) {
      setError('Failed to create case study');
      console.error('Error creating case study:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Create New Case Study</h1>
            <p className="mt-1 text-sm text-gray-600">
              Upload a PDF case study that visitors can download after providing their details
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter case study title"
                />
              </div>

              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  required
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="case-study-slug"
                />
              </div>
            </div>

            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt *
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                required
                rows={3}
                value={formData.excerpt}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Brief description of the case study"
              />
            </div>

            <div>
              <label htmlFor="pdf_file" className="block text-sm font-medium text-gray-700 mb-2">
                Case Study PDF File *
              </label>
              <input
                type="file"
                id="pdf_file"
                name="pdf_file"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="mt-1 text-sm text-gray-500">
                Upload a PDF file containing your case study. This will be the downloadable content.
              </p>
            </div>

            <div>
              <label htmlFor="pdf_url" className="block text-sm font-medium text-gray-700 mb-2">
                Or PDF URL
              </label>
              <input
                type="url"
                id="pdf_url"
                name="pdf_url"
                value={formData.pdf_url}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="https://example.com/case-study.pdf"
              />
              <p className="mt-1 text-sm text-gray-500">
                Alternative: Provide a direct URL to the PDF file instead of uploading.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="client_name" className="block text-sm font-medium text-gray-700 mb-2">
                  Client Name
                </label>
                <input
                  type="text"
                  id="client_name"
                  name="client_name"
                  value={formData.client_name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Client company name"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Healthcare, Finance, E-commerce"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="project_duration" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Duration
                </label>
                <input
                  type="text"
                  id="project_duration"
                  name="project_duration"
                  value={formData.project_duration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 3 months, 6 weeks"
                />
              </div>

              <div>
                <label htmlFor="technologies" className="block text-sm font-medium text-gray-700 mb-2">
                  Technologies (comma-separated)
                </label>
                <input
                  type="text"
                  id="technologies"
                  value={formData.technologies.join(', ')}
                  onChange={(e) => handleArrayChange('technologies', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="React, Node.js, AWS, etc."
                />
              </div>
            </div>

            <div>
              <label htmlFor="results" className="block text-sm font-medium text-gray-700 mb-2">
                Results & Impact
              </label>
              <textarea
                id="results"
                name="results"
                rows={4}
                value={formData.results}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Describe the results, metrics, and impact achieved"
              />
            </div>

            <div>
              <label htmlFor="featured_image" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Thumbnail Image
              </label>
              <input
                type="file"
                id="featured_image"
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="mt-2 text-sm text-gray-500">
                Upload a PNG or JPG image (max 5MB). This will be used as the case study thumbnail.
              </p>
              
              {imagePreview && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image Preview
                  </label>
                  <div className="relative inline-block">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      width={128}
                      height={128}
                      className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview(null);
                        setFormData(prev => ({ ...prev, featured_image: '' }));
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="meta_title" className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  id="meta_title"
                  name="meta_title"
                  value={formData.meta_title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="SEO title for search engines"
                />
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="meta_description" className="block text-sm font-medium text-gray-700 mb-2">
                Meta Description
              </label>
              <textarea
                id="meta_description"
                name="meta_description"
                rows={3}
                value={formData.meta_description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Brief description for search engines"
              />
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="tags"
                value={formData.tags.join(', ')}
                onChange={(e) => handleArrayChange('tags', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="AI, Machine Learning, Automation, etc."
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => router.push('/admin/case-studies')}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#7C3BED' }}
              >
                {loading ? 'Creating...' : 'Create Case Study'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
