"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { cmsApi, CaseStudy } from "@/lib/api/cms";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export default function CaseStudyPage() {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const slug = params?.slug as string;

  useEffect(() => {
    if (slug) {
      const fetchCaseStudy = async () => {
        try {
          const response = await cmsApi.getCaseStudy(slug);
          setCaseStudy(response);
        } catch (error) {
          console.error("Failed to fetch case study:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchCaseStudy();
    }
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: "#7C3BED" }}></div>
        </div>
        <Footer />
      </>
    );
  }

  if (!caseStudy) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-xl text-gray-600">Case study not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">{caseStudy.title}</h1>
          <p className="text-lg text-gray-600 mb-4">Client: {caseStudy.client_name}</p>

          {caseStudy.objectives && (
            <div className="mb-8 p-4 rounded-lg bg-purple-50 border border-purple-100">
              <h2 className="text-xl font-semibold mb-2 text-purple-800">Objectives</h2>
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: caseStudy.objectives }}
              />
            </div>
          )}

          {caseStudy.featured_image && (
            <div className="aspect-video relative mb-8">
              <Image
                src={`http://localhost:3002${caseStudy.featured_image}`}
                alt={caseStudy.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
        </div>
      </section>
      <Footer />
    </>
  );
}
