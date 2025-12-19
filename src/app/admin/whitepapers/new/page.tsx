'use client';

import Link from 'next/link';

export default function NewWhitepaperPage() {
  // Whitepaper creation has been removed from the CMS.
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">Whitepapers Removed</h1>
        <p className="text-gray-600 mb-6">
          Creating new whitepapers is no longer supported in the MyAibo CMS.
          Please use blogs and case studies to publish your content.
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
