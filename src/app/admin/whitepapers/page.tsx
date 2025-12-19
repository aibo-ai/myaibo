'use client';

import Link from 'next/link';

export default function AdminWhitepapersPage() {
  // Whitepaper management has been removed from the CMS.
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">Whitepapers Removed</h1>
        <p className="text-gray-600 mb-6">
          The whitepapers section has been retired from the MyAibo CMS. You can continue managing
          content using blogs and case studies.
        </p>
        <Link
          href="/admin/dashboard"
          className="inline-flex items-center px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#7C3BED' }}
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
