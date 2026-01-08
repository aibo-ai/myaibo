-- Seed a sample published blog referencing the default admin user
WITH admin AS (
  SELECT id FROM users WHERE email = 'admin@myaibo.in' LIMIT 1
)
INSERT INTO blogs (
  id, title, slug, excerpt, content, featured_image, author_id, status, published_at,
  categories, tags, meta_title, meta_description, canonical_url, view_count, created_at, updated_at
)
SELECT
  gen_random_uuid(),
  'Neon Integration Successful',
  'neon-integration-successful',
  'We have migrated to Neon Postgres and the API is live.',
  'This is a sample blog post created during the migration to Neon Postgres. You can remove it anytime from the admin UI.',
  NULL,
  admin.id,
  'published',
  NOW(),
  ARRAY['migration','announcement']::text[],
  ARRAY['neon','postgres']::text[],
  'Neon Integration Successful',
  'MyAibo CMS is now backed by Neon Postgres. This is a test post.',
  NULL,
  0,
  NOW(),
  NOW()
FROM admin
WHERE admin.id IS NOT NULL
ON CONFLICT (slug) DO NOTHING;
