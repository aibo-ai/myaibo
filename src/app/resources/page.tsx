'use client';

import { useState, useEffect } from 'react';
import { cmsApi, CaseStudy } from '@/lib/api/cms';
import Image from 'next/image';

interface DownloadFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  agreeToTerms: boolean;
}

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'case-study';
  itemId: string;
}

function DownloadModal({ isOpen, onClose, type, itemId }: DownloadModalProps) {  
  const [formData, setFormData] = useState<DownloadFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    agreeToTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Here you would typically send the form data to your backend
      // and then trigger the download
      console.log('Download request:', { ...formData, itemId, type });
      
      // For now, we'll just simulate a successful download
      alert('Thank you! Your download will begin shortly.');
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process download request');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Download now to read!</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name *
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your company name"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              required
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
              By clicking you agree to our{' '}
              <a href="/terms" className="text-purple-600 hover:text-purple-700 underline">
                Terms & Conditions
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-purple-600 hover:text-purple-700 underline">
                Privacy Policy
              </a>
              . Rest assured your data is safe with us. *
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Download Now'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloadModal, setDownloadModal] = useState<{
    isOpen: boolean;
    title: string;
    type: 'case-study';
    itemId: string;
  }>({
    isOpen: false,
    title: '',
    type: 'case-study',
    itemId: ''
  });

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const caseStudiesResponse = await cmsApi.getCaseStudies({ status: 'published' });
        setCaseStudies(caseStudiesResponse.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const openDownloadModal = (title: string, itemId: string) => {
    setDownloadModal({
      isOpen: true,
      title,
      type: 'case-study',
      itemId
    });
  };

  const closeDownloadModal = () => {
    setDownloadModal({
      isOpen: false,
      title: '',
      type: 'case-study',
      itemId: ''
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading resources...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources & <span style={{ color: '#7C3BED' }}>Case Studies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we&apos;ve helped businesses transform their operations with AI and technology solutions.
          </p>
        </div>

        {/* Case Studies Section */}
        {caseStudies.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {caseStudy.featured_image && (
                    <div className="h-48 bg-gray-200">
                      <Image
                        src={caseStudy.featured_image}
                        alt={caseStudy.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {caseStudy.challenge}
                    </p>
                    {caseStudy.objectives && (
                      <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                        <span className="font-semibold">Objectives: </span>
                        {caseStudy.objectives}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {caseStudy.view_count} views
                      </span>
                      <button
                        onClick={() => openDownloadModal(caseStudy.title, caseStudy.id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                      >
                        Download Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {caseStudies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📄</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Resources Available</h3>
            <p className="text-gray-600">
              Check back soon for case studies.
            </p>
          </div>
        )}
      </div>

      <DownloadModal
        isOpen={downloadModal.isOpen}
        onClose={closeDownloadModal}
        title={downloadModal.title}
        type={downloadModal.type}
        itemId={downloadModal.itemId}
      />
    </div>
  );
}
