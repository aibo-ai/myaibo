# Neon Migration & Render Fixes (summary)

This document records the changes made during the Neon Postgres migration and Render deployment fixes.

What I changed:

- Added Neon-compatible SQL schema/seed files (cms-backend/supabase-setup-neon.sql, cms-backend/seed-neon.sql).
- Added a small apply-sql helper (cms-backend/scripts/apply-sql.js) used to apply SQL directly to Neon.
- Updated backend DB config to prefer DATABASE_URL and force IPv4 DNS lookup to avoid ENETUNREACH on Render (cms-backend/src/config/database.ts).
- Seeded a sample published blog and reset admin/editor passwords for initial access (admin@myaibo.in / admin123). Please change the password from the admin UI.
- Updated repo with infra changes and removed local secrets from the repo (local .env removed from index; Render dashboard should host secrets).
- Rotated JWT_SECRET and verified health, blog, and auth endpoints.

Next steps (recommended):

1. Ensure the following environment variables are set in the Render dashboard (Production):
   - DATABASE_URL (Neon connection string)
   - JWT_SECRET (rotate regularly)
   - USE_SQLITE=false

2. Change the seeded admin password from the admin UI and remove the sample blog.
3. Remove any local secret files and confirm secrets only exist in Render.
4. (Optional) Open a PR to document these changes for team review.

If anything here looks incorrect or you want me to change admin credentials or create a PR, I can proceed.


PR: create docs PR