import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyAibo | Custom AI Development Solutions & Machine Learning",
  description: "Transform your business with custom AI development services. Expert AI solutions, machine learning, automation, and intelligent systems. Get free strategy session.",
  keywords: "AI development services, custom AI solutions, machine learning development, AI automation, artificial intelligence consulting, AI integration services",
  authors: [{ name: "MyAibo" }],
  robots: "index, follow",

  // Canonical URL
  alternates: {
    canonical: "https://www.myaibo.in/"
  },

  // Open Graph
  openGraph: {
    type: "website",
    url: "https://www.myaibo.in/",
    title: "AI Development Services | Custom AI Solutions - MyAibo",
    description: "Transform your business with custom AI development services. Expert AI solutions, machine learning, automation, and intelligent systems.",
    images: [
      {
        url: "https://www.myaibo.in/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MyAibo AI Development Services"
      }
    ],
    siteName: "MyAibo"
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@my_aibo2",
    title: "AI Development Services | Custom AI Solutions - MyAibo",
    description: "Transform your business with custom AI development services. Expert AI solutions, machine learning, automation, and intelligent systems.",
    images: ["https://www.myaibo.in/images/twitter-image.jpg"]
  },

  // Additional metadata
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "language": "en",
    "distribution": "global",
    "rating": "general"
  },

  // Icons and favicons
  icons: {
    icon: [
      { url: '/MyAibo-Thumbnail.png' },
      { url: '/MyAibo-Thumbnail.png', sizes: '16x16', type: 'image/png' },
      { url: '/MyAibo-Thumbnail.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/MyAibo-Thumbnail.png', sizes: '180x180' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TQTC4S5G');`
          }}
        />
        {/* End Google Tag Manager */}

        {/* Structured Data - Organization */}
        <Script
          id="structured-data-organization"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MyAibo",
              "url": "https://www.myaibo.in",
              "logo": "https://www.myaibo.in/MyAibo-Thumbnail.png",
              "description": "Leading AI development services company providing custom AI solutions, machine learning, and intelligent automation systems for businesses.",
              "sameAs": [
                "https://www.linkedin.com/company/myaibo",
                "https://twitter.com/myaibo"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "AI Development Services",
                  "description": "Custom AI solution development and implementation"
                },
                {
                  "@type": "Service",
                  "name": "Machine Learning Development",
                  "description": "Advanced machine learning model development and deployment"
                },
                {
                  "@type": "Service",
                  "name": "AI Automation Solutions",
                  "description": "Intelligent workflow automation and process optimization"
                }
              ]
            })
          }}
        />

        {/* Structured Data - Website */}
        <Script
          id="structured-data-website"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MyAibo",
              "url": "https://www.myaibo.in",
              "description": "AI development services and custom AI solutions for business transformation",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.myaibo.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
                <link rel="icon" type="image/png" href="/MyAibo-Thumbnail.png" />

      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQTC4S5G"
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}

        {/* Start of HubSpot Embed Code */}
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          async
          defer
          src="//js-na2.hs-scripts.com/243268505.js"
        />
        {/* End of HubSpot Embed Code */}
      </body>
    </html>
  );
}
