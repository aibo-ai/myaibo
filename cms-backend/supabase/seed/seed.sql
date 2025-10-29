-- Seed data for MyAibo CMS
-- This file contains initial data to populate the database

-- Sample blog posts
INSERT INTO blogs (title, slug, excerpt, content, author_id, status, published_at, categories, tags, meta_title, meta_description) VALUES
(
    'Getting Started with AI in Your Business',
    'getting-started-with-ai-in-your-business',
    'Learn how to implement AI solutions that drive real business value and competitive advantage.',
    'Artificial Intelligence is no longer a futuristic concept—it''s a present-day necessity for businesses looking to stay competitive. In this comprehensive guide, we''ll explore practical ways to integrate AI into your business operations, from customer service automation to predictive analytics.

## Why AI Matters for Your Business

AI can transform your business in multiple ways:
- **Automation**: Reduce manual tasks and human error
- **Insights**: Uncover patterns in your data
- **Personalization**: Deliver tailored experiences to customers
- **Efficiency**: Streamline operations and reduce costs

## Getting Started: A Step-by-Step Approach

### 1. Identify Use Cases
Start by identifying repetitive tasks or areas where data-driven decisions could improve outcomes.

### 2. Start Small
Begin with pilot projects that have clear success metrics.

### 3. Scale Gradually
Once you see success, gradually expand AI implementation across your organization.

## Common AI Applications

- **Chatbots**: Improve customer service
- **Recommendation Systems**: Increase sales
- **Predictive Analytics**: Forecast trends
- **Process Automation**: Reduce manual work

Ready to transform your business with AI? Contact our experts for a personalized consultation.',
    (SELECT id FROM users WHERE email = 'admin@myaibo.in'),
    'published',
    NOW() - INTERVAL '5 days',
    ARRAY['AI', 'Business Strategy'],
    ARRAY['artificial intelligence', 'business transformation', 'automation'],
    'Getting Started with AI in Your Business | MyAibo',
    'Learn how to implement AI solutions that drive real business value and competitive advantage. Practical guide for business leaders.'
),
(
    'The Future of Machine Learning in E-commerce',
    'future-of-machine-learning-in-ecommerce',
    'Discover how ML is revolutionizing online retail and what it means for your business.',
    'Machine Learning is reshaping the e-commerce landscape at an unprecedented pace. From personalized product recommendations to dynamic pricing strategies, ML algorithms are creating more engaging and profitable online shopping experiences.

## Key ML Applications in E-commerce

### Personalization
ML algorithms analyze customer behavior to deliver highly personalized experiences:
- Product recommendations based on browsing history
- Personalized email marketing campaigns
- Dynamic content that adapts to user preferences

### Inventory Management
Predictive analytics help optimize inventory:
- Demand forecasting
- Automated reorder points
- Seasonal trend analysis

### Customer Service
AI-powered chatbots and virtual assistants provide 24/7 support:
- Instant responses to common queries
- Escalation to human agents when needed
- Multilingual support capabilities

## Implementation Strategies

1. **Data Collection**: Gather comprehensive customer and transaction data
2. **Model Training**: Develop ML models specific to your business needs
3. **Integration**: Seamlessly integrate ML solutions into existing systems
4. **Monitoring**: Continuously monitor and optimize model performance

## Success Metrics

Track these KPIs to measure ML implementation success:
- Conversion rate improvements
- Average order value increases
- Customer satisfaction scores
- Operational cost reductions

The future of e-commerce is intelligent, personalized, and data-driven. Is your business ready?',
    (SELECT id FROM users WHERE email = 'editor@myaibo.in'),
    'published',
    NOW() - INTERVAL '3 days',
    ARRAY['Machine Learning', 'E-commerce'],
    ARRAY['machine learning', 'e-commerce', 'personalization', 'recommendation systems'],
    'The Future of Machine Learning in E-commerce | MyAibo',
    'Discover how ML is revolutionizing online retail with personalization, inventory management, and customer service automation.'
);

-- Sample case studies
INSERT INTO case_studies (title, slug, client_name, challenge, solution, results, content, author_id, status, published_at, industries, tags, testimonial, meta_title, meta_description) VALUES
(
    'AI-Powered Customer Service Transformation',
    'ai-powered-customer-service-transformation',
    'TechCorp Solutions',
    'TechCorp was struggling with high customer service costs and long response times. Their support team was overwhelmed with repetitive queries, leading to customer dissatisfaction and increased operational expenses.',
    'We implemented an AI-powered chatbot system integrated with their existing CRM. The solution included natural language processing, automated ticket routing, and seamless escalation to human agents when needed.',
    '[
        {"metric": "Response Time", "value": "85", "unit": "%", "description": "reduction in average response time"},
        {"metric": "Customer Satisfaction", "value": "40", "unit": "%", "description": "increase in CSAT scores"},
        {"metric": "Cost Savings", "value": "60", "unit": "%", "description": "reduction in support costs"},
        {"metric": "Query Resolution", "value": "75", "unit": "%", "description": "of queries resolved without human intervention"}
    ]',
    'TechCorp Solutions, a leading software company, was facing significant challenges in their customer service operations. With a growing customer base and increasing support ticket volume, they needed a scalable solution that could maintain high service quality while reducing costs.

## The Challenge

- **High Support Costs**: Manual support was expensive and not scalable
- **Long Response Times**: Customers waited hours for responses to simple queries
- **Repetitive Queries**: 70% of support tickets were for common issues
- **Agent Burnout**: Support staff were overwhelmed with routine tasks

## Our Solution

We developed a comprehensive AI-powered customer service system that included:

### Intelligent Chatbot
- Natural language processing for understanding customer intent
- Context-aware responses based on customer history
- Multi-language support for global customers

### Automated Ticket Routing
- Smart categorization of incoming queries
- Priority-based routing to appropriate agents
- Escalation protocols for complex issues

### Integration with Existing Systems
- Seamless CRM integration
- Knowledge base connectivity
- Real-time analytics dashboard

## Results

The implementation delivered exceptional results:

- **85% reduction** in average response time
- **40% increase** in customer satisfaction scores
- **60% reduction** in support operational costs
- **75% of queries** resolved without human intervention

## Client Testimonial

"The AI solution transformed our customer service operations. We can now provide instant, accurate responses while significantly reducing costs. Our customers love the improved experience." - Sarah Johnson, VP of Customer Success, TechCorp Solutions

## Key Learnings

This case study demonstrates how AI can revolutionize customer service operations, delivering both cost savings and improved customer experience. The key to success was understanding the specific needs of TechCorp''s customer base and designing a solution that seamlessly integrated with their existing workflows.',
    (SELECT id FROM users WHERE email = 'admin@myaibo.in'),
    'published',
    NOW() - INTERVAL '7 days',
    ARRAY['Technology', 'Software'],
    ARRAY['AI', 'customer service', 'chatbot', 'automation'],
    '{"quote": "The AI solution transformed our customer service operations. We can now provide instant, accurate responses while significantly reducing costs.", "author": "Sarah Johnson", "position": "VP of Customer Success", "company": "TechCorp Solutions"}',
    'AI-Powered Customer Service Transformation Case Study | MyAibo',
    'How TechCorp Solutions achieved 85% faster response times and 60% cost reduction with AI-powered customer service automation.'
);

-- Sample whitepapers
INSERT INTO whitepapers (title, slug, abstract, key_takeaways, pdf_url, author_id, status, published_at, topics, tags, is_gated, meta_title, meta_description) VALUES
(
    'The Complete Guide to AI Implementation in Enterprise',
    'complete-guide-ai-implementation-enterprise',
    'This comprehensive whitepaper provides enterprise leaders with a strategic framework for implementing AI solutions that drive measurable business value. Covering everything from initial assessment to full-scale deployment, this guide includes real-world case studies, ROI calculations, and best practices from industry leaders.',
    '[
        "Strategic AI assessment framework for enterprise decision-making",
        "Step-by-step implementation roadmap with timeline and milestones",
        "ROI calculation methodologies and cost-benefit analysis",
        "Risk mitigation strategies and compliance considerations",
        "Change management approaches for successful AI adoption",
        "Performance measurement and optimization techniques"
    ]',
    'https://example.com/whitepapers/ai-implementation-enterprise.pdf',
    (SELECT id FROM users WHERE email = 'admin@myaibo.in'),
    'published',
    NOW() - INTERVAL '10 days',
    ARRAY['AI Strategy', 'Enterprise Implementation', 'Digital Transformation'],
    ARRAY['artificial intelligence', 'enterprise', 'implementation', 'strategy', 'ROI'],
    true,
    'The Complete Guide to AI Implementation in Enterprise | MyAibo',
    'Strategic framework for implementing AI solutions in enterprise environments. Includes ROI calculations, case studies, and best practices.'
),
(
    'Machine Learning for Business: A Practical Approach',
    'machine-learning-for-business-practical-approach',
    'This whitepaper demystifies machine learning for business leaders, providing practical insights into how ML can be applied across different industries and use cases. Learn about common ML algorithms, implementation challenges, and success factors that drive business value.',
    '[
        "Understanding ML algorithms and their business applications",
        "Industry-specific use cases and implementation examples",
        "Data requirements and preparation strategies",
        "Common pitfalls and how to avoid them",
        "Measuring ML project success and ROI",
        "Building internal ML capabilities and team structure"
    ]',
    'https://example.com/whitepapers/ml-for-business.pdf',
    (SELECT id FROM users WHERE email = 'editor@myaibo.in'),
    'published',
    NOW() - INTERVAL '5 days',
    ARRAY['Machine Learning', 'Business Applications', 'Data Science'],
    ARRAY['machine learning', 'business', 'algorithms', 'implementation', 'ROI'],
    true,
    'Machine Learning for Business: A Practical Approach | MyAibo',
    'Practical guide to implementing machine learning in business. Learn about algorithms, use cases, and success factors for ML projects.'
);
