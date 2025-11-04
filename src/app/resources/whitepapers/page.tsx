'use client';

import { useState, useEffect } from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import { cmsApi, Whitepaper } from '../../../../cms-backend/src/lib/api/cms';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';

export default function WhitepapersPage() {
  const [whitepapers, setWhitepapers] = useState<Whitepaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [topics, setTopics] = useState<string[]>([]);

  useEffect(() => {
    const fetchWhitepapers = async () => {
      try {
        const response = await cmsApi.getWhitepapers({ status: 'published' });
        setWhitepapers(response.data);
        
        // Extract unique topics
        const uniqueTopics = Array.from(
          new Set(response.data.flatMap(wp => wp.topics))
        );
        setTopics(uniqueTopics);
      } catch (error) {
        console.error('Failed to fetch whitepapers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWhitepapers();
  }, []);

  const filteredWhitepapers = whitepapers.filter(whitepaper => {
    const matchesSearch = whitepaper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         whitepaper.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === 'all' || whitepaper.topics.includes(selectedTopic);
    return matchesSearch && matchesTopic;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#7C3BED' }}></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: '#7C3BED' }}>
              Whitepapers
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              In-depth research and insights on AI, technology trends, and business transformation strategies.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <input
                type="text"
                placeholder="Search whitepapers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Topics</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredWhitepapers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWhitepapers.map((whitepaper) => (
                <article key={whitepaper.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  {whitepaper.cover_image && (
                    <div className="aspect-video relative">
                      <Image
                        src={whitepaper.cover_image}
                        alt={whitepaper.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {whitepaper.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800"
                        >
                          {topic}
                        </span>
                      ))}
                      {whitepaper.is_gated && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                          Gated
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {whitepaper.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {whitepaper.abstract}
                    </p>
                    
                    {/* Key Takeaways Preview */}
                    {whitepaper.key_takeaways && whitepaper.key_takeaways.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Takeaways:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {whitepaper.key_takeaways.slice(0, 2).map((takeaway, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-purple-600 mr-2">•</span>
                              <span className="line-clamp-2">{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{formatDate(whitepaper.published_at || whitepaper.created_at)}</span>
                      <span>{whitepaper.download_count} downloads</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {formatFileSize(whitepaper.file_size)}
                      </span>
                      <a
                        href={whitepaper.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#7C3BED' }}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No whitepapers found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm || selectedTopic !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'No whitepapers have been published yet.'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}