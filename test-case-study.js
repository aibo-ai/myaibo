const fetch = require('node-fetch');

const payload = {
  title: "Multilingual AI Video Generation Platform ",
  challenge: "MyAibo developed an automated video production pipeline that revolutionized multilingual marketing content creation, reducing production time from 5 days to 4 hours while cutting costs by 90%. The platform enables simultaneous video generation in 8 languages using AI-powered avatars and natural text-to-speech technology, delivering a 10x increase in content output.",
  client_name: "Confidential",
  content: "MyAibo developed an automated video production pipeline that revolutionized multilingual marketing content creation, reducing production time from 5 days to 4 hours while cutting costs by 90%. The platform enables simultaneous video generation in 8 languages using AI-powered avatars and natural text-to-speech technology, delivering a 10x increase in content output.",
  featured_image: "http://myaibo.onrender.com/uploads/file-1767934660787-232932520.jpg",
  industries: ["Logistics"],
  meta_description: "Discover how MyAibo's AI-powered video generation platform reduced production time from 5 days to 4 hours, cut costs by 90%, and enabled simultaneous creation across 8 languages. A transformative marketing technology case study.",
  meta_title: "Multilingual AI Video Platform Case Study | 96% Faster Production | MyAibo",
  objectives: "Transform multilingual marketing video production from a resource-intensive, time-consuming manual process into an automated, scalable platform. Enable marketing teams to create consistent, high-quality video content across 8 Indian regional languages simultaneously, reducing dependency on external vendors while maintaining brand consistency and accelerating campaign launches. Deliver cost-effective video production that supports regional market expansion and enables data-driven A/B testing at scale.",
  results: [{ metric: "Production Time", value: "5 days to 4 hours", unit: "reduction", description: "96% faster production" }],
  slug: "multilingual-ai-video-generation-platform",
  solution: "Transform multilingual marketing video production from a resource-intensive, time-consuming manual process into an automated, scalable platform. Enable marketing teams to create consistent, high-quality video content across 8 Indian regional languages simultaneously, reducing dependency on external vendors while maintaining brand consistency and accelerating campaign launches. Deliver cost-effective video production that supports regional market expansion and enables data-driven A/B testing at scale.",
  status: "draft",
  tags: ["AI Video Generation", "Multilingual Content", "Marketing Automation", "Text-to-Speech"]
};

async function testCaseStudy() {
  try {
    console.log('Testing case study creation...');
    console.log('Payload meta_title length:', payload.meta_title.length);
    console.log('Payload meta_description length:', payload.meta_description.length);

    const response = await fetch('http://localhost:3002/api/case-studies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add auth header if needed
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    console.log('Response status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));

    if (response.ok) {
      console.log('✅ Case study created successfully!');
    } else {
      console.log('❌ Case study creation failed');
    }
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testCaseStudy();
