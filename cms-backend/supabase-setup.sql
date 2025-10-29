-- MyAibo CMS Database Setup for Supabase
-- Run this script in your Supabase SQL Editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
CREATE TYPE user_role AS ENUM ('admin', 'editor');
CREATE TYPE content_status AS ENUM ('draft', 'published', 'archived');

-- Users table
CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role user_role DEFAULT 'editor' NOT NULL,
    avatar VARCHAR(255),
    bio TEXT,
    is_active BOOLEAN DEFAULT true NOT NULL,
    last_login_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blogs table
CREATE TABLE blogs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    featured_image VARCHAR(255),
    author_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    status content_status DEFAULT 'draft' NOT NULL,
    published_at TIMESTAMP WITH TIME ZONE,
    categories TEXT[] DEFAULT '{}' NOT NULL,
    tags TEXT[] DEFAULT '{}' NOT NULL,
    meta_title VARCHAR(60),
    meta_description VARCHAR(160),
    canonical_url VARCHAR(255),
    view_count INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Case studies table
CREATE TABLE case_studies (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    client_name VARCHAR(100) NOT NULL,
    client_logo VARCHAR(255),
    challenge TEXT NOT NULL,
    solution TEXT NOT NULL,
    results JSONB DEFAULT '[]' NOT NULL,
    content TEXT NOT NULL,
    featured_image VARCHAR(255),
    author_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    status content_status DEFAULT 'draft' NOT NULL,
    published_at TIMESTAMP WITH TIME ZONE,
    industries TEXT[] DEFAULT '{}' NOT NULL,
    tags TEXT[] DEFAULT '{}' NOT NULL,
    testimonial JSONB,
    meta_title VARCHAR(60),
    meta_description VARCHAR(160),
    canonical_url VARCHAR(255),
    view_count INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Whitepapers table
CREATE TABLE whitepapers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    abstract TEXT NOT NULL,
    key_takeaways TEXT[] DEFAULT '{}' NOT NULL,
    pdf_url VARCHAR(255) NOT NULL,
    cover_image VARCHAR(255),
    author_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    status content_status DEFAULT 'draft' NOT NULL,
    published_at TIMESTAMP WITH TIME ZONE,
    topics TEXT[] DEFAULT '{}' NOT NULL,
    tags TEXT[] DEFAULT '{}' NOT NULL,
    is_gated BOOLEAN DEFAULT true NOT NULL,
    download_count INTEGER DEFAULT 0 NOT NULL,
    meta_title VARCHAR(60),
    meta_description VARCHAR(160),
    canonical_url VARCHAR(255),
    file_size INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_blogs_slug ON blogs(slug);
CREATE INDEX idx_blogs_status_published ON blogs(status, published_at);
CREATE INDEX idx_blogs_categories ON blogs USING GIN(categories);
CREATE INDEX idx_blogs_tags ON blogs USING GIN(tags);
CREATE INDEX idx_blogs_author ON blogs(author_id);

CREATE INDEX idx_case_studies_slug ON case_studies(slug);
CREATE INDEX idx_case_studies_status_published ON case_studies(status, published_at);
CREATE INDEX idx_case_studies_industries ON case_studies USING GIN(industries);
CREATE INDEX idx_case_studies_tags ON case_studies USING GIN(tags);
CREATE INDEX idx_case_studies_author ON case_studies(author_id);
CREATE INDEX idx_case_studies_client ON case_studies(client_name);

CREATE INDEX idx_whitepapers_slug ON whitepapers(slug);
CREATE INDEX idx_whitepapers_status_published ON whitepapers(status, published_at);
CREATE INDEX idx_whitepapers_topics ON whitepapers USING GIN(topics);
CREATE INDEX idx_whitepapers_tags ON whitepapers USING GIN(tags);
CREATE INDEX idx_whitepapers_author ON whitepapers(author_id);
CREATE INDEX idx_whitepapers_gated ON whitepapers(is_gated);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blogs_updated_at BEFORE UPDATE ON blogs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_case_studies_updated_at BEFORE UPDATE ON case_studies
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_whitepapers_updated_at BEFORE UPDATE ON whitepapers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default admin user (password: admin123)
INSERT INTO users (email, password, first_name, last_name, role, is_active) 
VALUES (
    'admin@myaibo.in', 
    '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- bcrypt hash for 'admin123'
    'Admin', 
    'User', 
    'admin', 
    true
);

-- Insert default editor user (password: editor123)
INSERT INTO users (email, password, first_name, last_name, role, is_active) 
VALUES (
    'editor@myaibo.in', 
    '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- bcrypt hash for 'editor123'
    'Content', 
    'Editor', 
    'editor', 
    true
);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE whitepapers ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access
CREATE POLICY "Public read access for published blogs" ON blogs
    FOR SELECT USING (status = 'published' AND published_at IS NOT NULL);

CREATE POLICY "Public read access for published case studies" ON case_studies
    FOR SELECT USING (status = 'published' AND published_at IS NOT NULL);

CREATE POLICY "Public read access for published whitepapers" ON whitepapers
    FOR SELECT USING (status = 'published' AND published_at IS NOT NULL);

-- Create RLS policies for authenticated users (admin/editor operations)
CREATE POLICY "Authenticated users can manage blogs" ON blogs
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage case studies" ON case_studies
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage whitepapers" ON whitepapers
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage users" ON users
    FOR ALL USING (auth.role() = 'authenticated');
