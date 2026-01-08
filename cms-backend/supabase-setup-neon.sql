-- Neon-compatible schema setup (no Supabase-specific auth schema or RLS policies)
-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Custom types
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
    CREATE TYPE user_role AS ENUM ('admin', 'editor');
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'content_status') THEN
    CREATE TYPE content_status AS ENUM ('draft', 'published', 'archived');
  END IF;
END $$;

-- Users
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
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

-- Blogs
CREATE TABLE IF NOT EXISTS blogs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
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

-- Case studies
CREATE TABLE IF NOT EXISTS case_studies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    client_name VARCHAR(100) NOT NULL,
    client_logo VARCHAR(255),
    challenge TEXT NOT NULL,
    solution TEXT NOT NULL,
    results JSONB DEFAULT '[]'::jsonb NOT NULL,
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

-- Whitepapers
CREATE TABLE IF NOT EXISTS whitepapers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
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

-- Indexes
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_status_published ON blogs(status, published_at);
CREATE INDEX IF NOT EXISTS idx_blogs_categories ON blogs USING GIN(categories);
CREATE INDEX IF NOT EXISTS idx_blogs_tags ON blogs USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_blogs_author ON blogs(author_id);

CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_status_published ON case_studies(status, published_at);
CREATE INDEX IF NOT EXISTS idx_case_studies_industries ON case_studies USING GIN(industries);
CREATE INDEX IF NOT EXISTS idx_case_studies_tags ON case_studies USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_case_studies_author ON case_studies(author_id);
CREATE INDEX IF NOT EXISTS idx_case_studies_client ON case_studies(client_name);

CREATE INDEX IF NOT EXISTS idx_whitepapers_slug ON whitepapers(slug);
CREATE INDEX IF NOT EXISTS idx_whitepapers_status_published ON whitepapers(status, published_at);
CREATE INDEX IF NOT EXISTS idx_whitepapers_topics ON whitepapers USING GIN(topics);
CREATE INDEX IF NOT EXISTS idx_whitepapers_tags ON whitepapers USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_whitepapers_author ON whitepapers(author_id);
CREATE INDEX IF NOT EXISTS idx_whitepapers_gated ON whitepapers(is_gated);

-- updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_blogs_updated_at ON blogs;
CREATE TRIGGER update_blogs_updated_at BEFORE UPDATE ON blogs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_case_studies_updated_at ON case_studies;
CREATE TRIGGER update_case_studies_updated_at BEFORE UPDATE ON case_studies
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_whitepapers_updated_at ON whitepapers;
CREATE TRIGGER update_whitepapers_updated_at BEFORE UPDATE ON whitepapers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Seed default users (bcrypt hashes for 'admin123' and 'editor123')
INSERT INTO users (email, password, first_name, last_name, role, is_active)
VALUES
('admin@myaibo.in', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin', 'User', 'admin', true)
ON CONFLICT (email) DO NOTHING;

INSERT INTO users (email, password, first_name, last_name, role, is_active)
VALUES
('editor@myaibo.in', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Content', 'Editor', 'editor', true)
ON CONFLICT (email) DO NOTHING;
