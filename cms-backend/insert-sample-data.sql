-- Insert sample users
INSERT OR IGNORE INTO users (id, email, password, first_name, last_name, role, is_active, created_at, updated_at)
VALUES
  ('550e8400-e29b-41d4-a716-446655440000', 'admin@myaibo.in', '$2a$10$hashedpassword', 'Admin', 'User', 'admin', 1, datetime('now'), datetime('now')),
  ('550e8400-e29b-41d4-a716-446655440001', 'editor@myaibo.in', '$2a$10$hashedpassword', 'Content', 'Editor', 'editor', 1, datetime('now'), datetime('now'));

-- Insert sample blogs
INSERT OR IGNORE INTO blogs (id, title, slug, excerpt, content, author_id, status, published_at, categories, tags, meta_title, meta_description, view_count, created_at, updated_at)
VALUES
  ('550e8400-e29b-41d4-a716-446655440002', 'The Rise of Agentic AI', 'the-rise-of-agentic-ai', 'Exploring how agentic AI systems are revolutionizing automation and decision-making processes across industries.', '<h2>Introduction</h2>
<p>Agentic AI represents a paradigm shift in artificial intelligence, moving beyond reactive systems to proactive, goal-oriented intelligence that can act autonomously to achieve objectives.</p>

<h2>What is Agentic AI?</h2>
<p>Unlike traditional AI systems that respond to specific inputs, agentic AI can:</p>
<ul>
<li>Initiate actions without direct human intervention</li>
<li>Learn from outcomes and adapt strategies</li>
<li>Coordinate multiple tasks simultaneously</li>
<li>Make decisions in complex, dynamic environments</li>
</ul>

<h2>Applications Across Industries</h2>
<p>Agentic AI is transforming various sectors:</p>

<h3>Healthcare</h3>
<p>AI agents can monitor patient vitals, predict complications, and coordinate treatment plans autonomously.</p>

<h3>Finance</h3>
<p>Algorithmic trading agents execute complex strategies, manage risk, and optimize portfolios in real-time.</p>

<h3>Manufacturing</h3>
<p>Smart factory agents coordinate production lines, predict maintenance needs, and optimize resource allocation.</p>

<h2>Challenges and Considerations</h2>
<p>While promising, agentic AI presents unique challenges:</p>
<ul>
<li>Ensuring alignment with human values and objectives</li>
<li>Maintaining transparency in decision-making processes</li>
<li>Managing the complexity of multi-agent systems</li>
<li>Addressing ethical concerns around autonomous decision-making</li>
</ul>

<h2>The Future of Agentic AI</h2>
<p>As agentic AI systems become more sophisticated, we can expect to see:</p>
<ul>
<li>Increased automation of complex workflows</li>
<li>More efficient resource utilization</li>
<li>New forms of human-AI collaboration</li>
<li>Emergence of AI-driven innovation ecosystems</li>
</ul>

<p>The rise of agentic AI marks a new era in human-machine interaction, where AI systems become true partners in achieving complex objectives.</p>', '550e8400-e29b-41d4-a716-446655440000', 'published', '2024-12-01 00:00:00', '["AI & ML", "Technology Trends"]', '["agentic-ai", "automation", "artificial-intelligence"]', 'The Rise of Agentic AI - MyAibo', 'Exploring how agentic AI systems are revolutionizing automation and decision-making processes across industries.', 150, datetime('now'), datetime('now')),
  ('550e8400-e29b-41d4-a716-446655440003', 'Machine Learning in 2025: Trends and Predictions', 'machine-learning-in-2025', 'A comprehensive look at the emerging trends shaping the machine learning landscape in 2025 and beyond.', '<h2>The Evolving ML Landscape</h2>
<p>As we enter 2025, machine learning continues to evolve at a rapid pace, driven by advances in computational power, data availability, and algorithmic innovation.</p>

<h2>Key Trends for 2025</h2>

<h3>1. Multimodal Learning</h3>
<p>Systems that can process and integrate information from multiple modalities - text, images, audio, and video - are becoming increasingly sophisticated.</p>

<h3>2. Edge AI and Federated Learning</h3>
<p>The need for privacy-preserving, distributed learning approaches is driving innovation in federated learning and edge computing.</p>

<h3>3. Explainable AI (XAI)</h3>
<p>As AI systems become more complex, the demand for interpretable and explainable models grows stronger.</p>

<h3>4. AI for Scientific Discovery</h3>
<p>Machine learning is increasingly being used to accelerate scientific research across disciplines.</p>

<h2>Technological Advancements</h2>

<h3>Foundation Models</h3>
<p>Large-scale foundation models continue to improve, enabling more sophisticated applications across domains.</p>

<h3>Efficient Training Techniques</h3>
<p>New approaches to model compression, quantization, and efficient training are making ML more accessible.</p>

<h3>Hardware Acceleration</h3>
<p>Specialized hardware for ML workloads continues to evolve, enabling more complex models and faster inference.</p>

<h2>Industry Applications</h2>
<p>ML is transforming industries:</p>
<ul>
<li><strong>Healthcare:</strong> Predictive diagnostics, drug discovery, personalized medicine</li>
<li><strong>Finance:</strong> Risk assessment, algorithmic trading, fraud detection</li>
<li><strong>Manufacturing:</strong> Predictive maintenance, quality control, supply chain optimization</li>
<li><strong>Transportation:</strong> Autonomous vehicles, route optimization, predictive maintenance</li>
</ul>

<h2>Challenges Ahead</h2>
<p>Despite progress, several challenges remain:</p>
<ul>
<li>Data quality and bias mitigation</li>
<li>Energy efficiency of large models</li>
<li>Regulatory frameworks for AI deployment</li>
<li>Skills gap in ML expertise</li>
</ul>

<h2>Looking Forward</h2>
<p>The next year promises continued innovation in machine learning, with focus on making AI systems more reliable, efficient, and beneficial to society.</p>', '550e8400-e29b-41d4-a716-446655440000', 'published', '2024-11-15 00:00:00', '["Machine Learning", "AI Trends"]', '["machine-learning", "2025-predictions", "ai-trends"]', 'Machine Learning in 2025: Trends and Predictions - MyAibo', 'A comprehensive look at the emerging trends shaping the machine learning landscape in 2025 and beyond.', 89, datetime('now'), datetime('now')),
  ('550e8400-e29b-41d4-a716-446655440004', 'AI Ethics and Governance: Building Responsible AI Systems', 'ai-ethics-and-governance', 'Understanding the importance of ethical AI development and the frameworks needed to ensure responsible deployment.', '<h2>The Imperative for Ethical AI</h2>
<p>As artificial intelligence becomes increasingly integrated into our daily lives and critical infrastructure, the need for ethical AI development and governance has never been more pressing.</p>

<h2>Core Ethical Principles</h2>

<h3>1. Fairness and Bias Mitigation</h3>
<p>AI systems must be designed to avoid discrimination and ensure equitable outcomes across different demographic groups.</p>

<h3>2. Transparency and Explainability</h3>
<p>Users and stakeholders should understand how AI systems make decisions and reach conclusions.</p>

<h3>3. Privacy and Data Protection</h3>
<p>AI systems must respect individual privacy rights and handle personal data responsibly.</p>

<h3>4. Accountability</h3>
<p>There must be clear accountability for AI system behavior and outcomes.</p>

<h2>Governance Frameworks</h2>

<h3>Regulatory Approaches</h3>
<p>Governments worldwide are developing AI regulations:</p>
<ul>
<li>EU AI Act classification system</li>
<li>US AI Executive Order requirements</li>
<li>China's AI governance framework</li>
</ul>

<h3>Industry Standards</h3>
<p>Organizations are developing voluntary standards:</p>
<ul>
<li>IEEE's Ethically Aligned Design</li>
<li>Partnership on AI's guidelines</li>
<li>ISO's AI management system standards</li>
</ul>

<h2>Implementing Ethical AI</h2>

<h3>Development Practices</h3>
<p>Ethical AI requires:</p>
<ul>
<li>Diverse development teams</li>
<li>Regular ethical reviews</li>
<li>Bias audits and testing</li>
<li>Stakeholder engagement</li>
</ul>

<h3>Technical Approaches</h3>
<p>Several technical methods support ethical AI:</p>
<ul>
<li>Fairness-aware algorithms</li>
<li>Explainable AI techniques</li>
<li>Differential privacy</li>
<li>Adversarial robustness testing</li>
</ul>

<h2>Challenges in Implementation</h2>

<h3>Technical Challenges</h3>
<ul>
<li>Measuring and quantifying fairness</li>
<li>Balancing accuracy with explainability</li>
<li>Handling edge cases and uncertainty</li>
</ul>

<h3>Organizational Challenges</h3>
<ul>
<li>Building ethical culture</li>
<li>Resource allocation for ethics work</li>
<li>Measuring ethical outcomes</li>
</ul>

<h2>The Future of AI Ethics</h2>
<p>As AI becomes more powerful, ethical considerations will become increasingly important. Organizations that prioritize ethical AI development will be better positioned for long-term success and societal acceptance.</p>

<p>The goal is not to hinder AI innovation, but to ensure that AI development serves humanity's best interests and creates a more equitable future.</p>', '550e8400-e29b-41d4-a716-446655440001', 'published', '2024-10-20 00:00:00', '["AI Ethics", "Governance"]', '["ai-ethics", "responsible-ai", "governance"]', 'AI Ethics and Governance: Building Responsible AI Systems - MyAibo', 'Understanding the importance of ethical AI development and the frameworks needed to ensure responsible deployment.', 67, datetime('now'), datetime('now'));
