'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cmsApi, CaseStudy } from '@/lib/api/cms';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [industries, setIndustries] = useState<string[]>([]);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await cmsApi.getCaseStudies({ status: 'published' });
        const normalizedCaseStudies = response.data.map((cs: Partial<CaseStudy>) => {
          const industries = Array.isArray(cs.industries)
            ? cs.industries
            : typeof cs.industries === 'string'
              ? (() => {
                  try {
                    const parsed = JSON.parse(cs.industries);
                    return Array.isArray(parsed) ? parsed : [];
                  } catch {
                    return cs.industries ? [cs.industries] : [];
                  }
                })()
              : [];

          const results = Array.isArray(cs.results)
            ? cs.results
            : typeof cs.results === 'string'
              ? (() => {
                  try {
                    const parsed = JSON.parse(cs.results);
                    return Array.isArray(parsed) ? parsed : [];
                  } catch {
                    return [];
                  }
                })()
              : [];

          return {
            ...cs,
            industries,
            results,
          } as CaseStudy;
        });

        setCaseStudies(normalizedCaseStudies);
        
        // Extract unique industries
        const uniqueIndustries = Array.from(
          new Set(normalizedCaseStudies.flatMap(cs => cs.industries))
        );
        setIndustries(uniqueIndustries);
      } catch (error) {
        console.error('Failed to fetch case studies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  const filteredCaseStudies = caseStudies.filter(caseStudy => {
    const matchesSearch = caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.client_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry =
      selectedIndustry === 'all' ||
      (Array.isArray(caseStudy.industries) && caseStudy.industries.includes(selectedIndustry));
    return matchesSearch && matchesIndustry;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
              Case Studies
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real success stories from our clients. See how we&apos;ve helped businesses transform with AI and technology.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Industries</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCaseStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((caseStudy) => (
                <Link
                  href={`/resources/case-studies/${caseStudy.slug}`}
                  key={caseStudy.id}
                  className="block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {caseStudy.featured_image && (
                    <div className="aspect-video relative">
                      <Image
                        src={`http://localhost:3002${caseStudy.featured_image}`}
                        alt={caseStudy.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {Array.isArray(caseStudy.industries) && caseStudy.industries.map((industry, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      Client: {caseStudy.client_name}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {caseStudy.challenge}
                    </p>
                    
                    {/* Results Preview */}
                    {caseStudy.results && caseStudy.results.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                        <div className="space-y-1">
                          {caseStudy.results.slice(0, 2).map((result, index) => (
                            <div key={index} className="text-sm text-gray-600">
                              <span className="font-semibold" style={{ color: '#7C3BED' }}>
                                {result.value}{result.unit}
                              </span>
                              {' '}{result.description}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{caseStudy.published_at ? formatDate(caseStudy.published_at) : 'Draft'}</span>
                      <span>{caseStudy.view_count} views</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No case studies found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm || selectedIndustry !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'No case studies have been published yet.'
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
