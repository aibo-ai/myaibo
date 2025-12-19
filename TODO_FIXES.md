# Code Review Fixes - TODO List

## Security & Configuration Issues
- [ ] 1. SSL Certificate Validation (database.ts): Verify if Supabase requires rejectUnauthorized: false
- [ ] 2. URL Parsing Validation (database.ts): Add try-catch around URL parsing
- [ ] 3. Hard-coded SQLite Flag (database.ts): Replace with environment variable USE_SQLITE

## Logging & Console Issues
- [ ] 4. Misleading Console Logs (app.ts): Comment out logs for disabled routes
- [ ] 7. Debug Console Log (cms.ts): Remove console.log exposing auth token

## Database & Model Issues
- [ ] 5. Published_at Logic (seed-blogs.js): Fix inconsistent status/published_at logic
- [ ] 6. Seeding Down Method (seed-blogs.js): Change bulkDelete to admin-authored only
- [ ] 10. Missing Database Field (Blog.ts): Add featured_image_alt field definition

## Frontend Security & UX Issues
- [ ] 8. Cookie Security (cms.ts): Add Secure and SameSite attributes
- [ ] 11. Object URL Revocation (BlogEditor.tsx): Add URL.revokeObjectURL before clearing

## Data & Type Issues
- [ ] 9. Missing Featured Image (blogs.json): Add to published blog entry
- [ ] 12. Unsafe Type Cast (logger-final.ts): Handle non-string messages safely
