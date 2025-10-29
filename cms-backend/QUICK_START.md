# 🚀 MyAibo CMS - Quick Start Guide

## ✅ What's Ready

Your CMS backend is fully configured and ready to use with Supabase! Here's what we've set up:

- ✅ **Supabase Integration**: Connected to your project `prtzzptquzbivmcihudq`
- ✅ **Database Schema**: Complete migration files ready
- ✅ **Sample Data**: Seed files with example content
- ✅ **API Endpoints**: All CRUD operations for blogs, case studies, whitepapers
- ✅ **Authentication**: JWT-based auth with admin/editor roles
- ✅ **File Uploads**: Configured for Supabase Storage
- ✅ **Security**: Row Level Security policies

## 🎯 Next Steps (5 minutes to get running!)

### 1. Set up your Database (2 minutes)

1. **Go to your Supabase dashboard**: https://supabase.com/dashboard/project/prtzzptquzbivmcihudq
2. **Click "SQL Editor"** in the left sidebar
3. **Click "New Query"**
4. **Copy and paste** the contents of `supabase/migrations/20241017000000_initial_schema.sql`
5. **Click "Run"** to execute the script
6. **Create another new query**
7. **Copy and paste** the contents of `supabase/seed/seed.sql`
8. **Click "Run"** to execute the seed script

### 2. Configure Environment (1 minute)

1. **Update your `.env` file** with a secure JWT secret:
   ```env
   JWT_SECRET=your_super_secure_jwt_secret_here_change_this
   ```

### 3. Start the Server (1 minute)

```bash
npm run dev
```

### 4. Test Everything (1 minute)

1. **Health Check**: http://localhost:3001/api/health
2. **Login Test**: Use the default credentials below

## 🔑 Default Login Credentials

- **Admin**: `admin@myaibo.in` / `admin123`
- **Editor**: `editor@myaibo.in` / `editor123`

## 📡 Available API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user

### Blogs
- `GET /api/blog` - List all blogs
- `GET /api/blog/:slug` - Get blog by slug
- `POST /api/blog` - Create blog (authenticated)
- `PUT /api/blog/:id` - Update blog (authenticated)
- `DELETE /api/blog/:id` - Delete blog (authenticated)

### Case Studies
- `GET /api/case-studies` - List all case studies
- `GET /api/case-studies/:slug` - Get case study by slug
- `POST /api/case-studies` - Create case study (authenticated)
- `PUT /api/case-studies/:id` - Update case study (authenticated)
- `DELETE /api/case-studies/:id` - Delete case study (authenticated)

### Whitepapers
- `GET /api/whitepapers` - List all whitepapers
- `GET /api/whitepapers/:slug` - Get whitepaper by slug
- `POST /api/whitepapers` - Create whitepaper (authenticated)
- `PUT /api/whitepapers/:id` - Update whitepaper (authenticated)
- `DELETE /api/whitepapers/:id` - Delete whitepaper (authenticated)

## 🎯 What Gets Created

### Database Tables
- **users** - Admin and editor accounts
- **blogs** - Blog posts with categories, tags, SEO metadata
- **case_studies** - Case studies with client info, results, testimonials
- **whitepapers** - Whitepapers with abstracts, key takeaways, gating

### Sample Content
- 2 blog posts about AI and ML
- 1 case study about customer service transformation
- 2 whitepapers about AI implementation

### Security Features
- Row Level Security (RLS) policies
- JWT authentication
- Role-based access control
- Public read access for published content

## 🛠️ File Structure

```
cms-backend/
├── src/
│   ├── config/
│   │   ├── supabase.ts          # Supabase client
│   │   └── supabase-db.ts       # Database operations
│   ├── models/                  # Data models
│   ├── routes/                  # API routes
│   ├── middleware/              # Auth & error handling
│   └── utils/                   # File upload utilities
├── supabase/
│   ├── migrations/              # Database schema
│   └── seed/                    # Sample data
├── .env                         # Environment variables
└── package.json                 # Dependencies
```

## 🚀 Ready to Go!

Once you've run the SQL scripts in Supabase, your CMS will be fully functional with:

- ✅ Complete database schema
- ✅ Sample content
- ✅ Authentication system
- ✅ File upload capabilities
- ✅ API endpoints
- ✅ Security policies

**Start your server and begin building!** 🎉

## 📞 Need Help?

If you encounter any issues:
1. Check the server logs for error messages
2. Verify your Supabase project is accessible
3. Ensure the SQL scripts ran successfully
4. Check that your `.env` file is properly configured
