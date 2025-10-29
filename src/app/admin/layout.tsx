import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | MyAibo CMS',
  description: 'Content Management System for MyAibo website',
  robots: 'noindex, nofollow', // Prevent search engine indexing
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
