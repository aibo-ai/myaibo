import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyAibo - Elegant AI-Powered Solutions",
  description: "At MyAibo, we harness the power of artificial intelligence to create innovative solutions that deliver impactful and measurable improvements across your organization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
