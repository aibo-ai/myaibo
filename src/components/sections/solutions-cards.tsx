"use client";

import Image from "next/image";

const solutionsData = [
  {
    title: "AI/ML Development",
    description:
      "We build custom AI solutions—intelligent chatbots, recommendation engines, and predictive models—that automate processes, reduce costs, and unlock data-driven insights.",
    image: "/home-aiml.jpg",
    link: "/solutions/ai-ml",
  },
  {
    title: "Custom Full Stack Development",
    description:
      "We create cloud-native platforms with embedded AI features that automate workflows, personalize experiences, and accelerate release cycles.",
    image: "/home-fullstack.jpg",
    link: "/solutions/full-stack-development",
  },
  {
    title: "Search Engine Optimization",
    description:
      "We drive measurable revenue with strategic SEO that combines technical excellence and conversion-focused content to connect your business with actively searching buyers.",
    image: "/home-seo.jpg",
    link: "/solutions/seo",
  },
  {
    title: "Content Marketing",
    description:
      "We generate qualified leads with strategic, multi-format content aligned to business outcomes that costs 62% less than paid ads while building lasting brand authority.",
    image: "/home-content.jpg",
    link: "/solutions/content-marketing",
  },
];

export function SolutionsCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[48px] font-extrabold mb-12 text-center">
          <span className="text-gray-900">Solutions we</span> <span style={{ color: "#7c3bed" }}>build</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.map(({ title, description, image, link }) => (
            <a
              key={title}
              href={link}
              className="block rounded-lg shadow-lg overflow-hidden h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#7c3bed" }}
            >
              <div className="grid lg:grid-cols-2 gap-0 h-full">
                <div className="order-1 lg:order-1">
                  <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={250}
                    className="w-full h-48 lg:h-full object-cover"
                  />
                </div>
                <div className="order-2 lg:order-2 p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">{title}</h3>
                  <p className="text-white text-sm lg:text-base leading-relaxed opacity-95">{description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
