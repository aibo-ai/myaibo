# Supabase CMS Setup Guide

## Step 1: Set up your Supabase Database

1. **Go to your Supabase Dashboard**: https://supabase.com/dashboard/project/prtzzptquzbivmcihudq

2. **Open the SQL Editor**:
   - Click on "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Run the Database Setup Script**:
   - Copy the contents of `supabase-setup.sql` file
   - Paste it into the SQL Editor
   - Click "Run" to execute the script

   This will create:
   - All necessary tables (users, blogs, case_studies, whitepapers)
   - Indexes for performance
   - Default admin and editor users
   - Row Level Security policies

## Step 2: Set up File Storage

1. **Go to Storage** in your Supabase dashboard
2. **Create buckets**:
   - Create a bucket named `images` (public)
   - Create a bucket named `pdfs` (public)
   - Create a bucket named `uploads` (private)

3. **Set up Storage Policies**:
   - Go to Storage → Policies
   - Add the following policies:

```sql
-- Allow public read access to images
CREATE POLICY "Public read access for images" ON storage.objects
FOR SELECT USING (bucket_id = 'images');

-- Allow public read access to PDFs
CREATE POLICY "Public read access for pdfs" ON storage.objects
FOR SELECT USING (bucket_id = 'pdfs');

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated users can upload files" ON storage.objects
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to update their files
CREATE POLICY "Authenticated users can update files" ON storage.objects
FOR UPDATE USING (auth.role() = 'authenticated');

-- Allow authenticated users to delete their files
CREATE POLICY "Authenticated users can delete files" ON storage.objects
FOR DELETE USING (auth.role() = 'authenticated');
```

## Step 3: Configure Environment Variables

1. **Create a `.env` file** in the cms-backend directory:
```bash
cp env.example .env
```

2. **Update the `.env` file** with your values:
```env
# Supabase Configuration (already configured)
SUPABASE_URL=https://prtzzptquzbivmcihudq.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBydHp6cHRxdXpiaXZtY2lodWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MzI5MDMsImV4cCI6MjA3NjEwODkwM30.EowtIRQ37HX2ySgAbBsgNencY2QMWPyCBVGgiu0JTuI
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBydHp6cHRxdXpiaXZtY2lodWRxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDUzMjkwMywiZXhwIjoyMDc2MTA4OTAzfQ.zTQDZsYCdTJfh5ZxI8kkuvqHJNw1uAWdjaIJpfTXTbM

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
JWT_EXPIRES_IN=7d

# Server Configuration
PORT=3001
NODE_ENV=development

# File Upload Configuration
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads
```

## Step 4: Install Dependencies and Start the Server

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Step 5: Test the Setup

1. **Check the health endpoint**:
   - Open: http://localhost:3001/api/health
   - You should see: `{"status":"OK","timestamp":"...","environment":"development"}`

2. **Test authentication**:
   - Try logging in with:
     - Email: `admin@myaibo.in`
     - Password: `admin123`

## Default Users Created

- **Admin User**:
  - Email: `admin@myaibo.in`
  - Password: `admin123`
  - Role: `admin`

- **Editor User**:
  - Email: `editor@myaibo.in`
  - Password: `editor123`
  - Role: `editor`

## API Endpoints Available

- **Authentication**: `/api/auth/*`
- **Blogs**: `/api/blog/*`
- **Case Studies**: `/api/case-studies/*`
- **Whitepapers**: `/api/whitepapers/*`
- **Users**: `/api/users/*`

## Next Steps

1. **Test all endpoints** using Postman or similar tool
2. **Create your first blog post** via the API
3. **Set up file uploads** to Supabase Storage
4. **Configure email services** for whitepaper gating
5. **Deploy to production** when ready

## Troubleshooting

- **Database connection issues**: Check your Supabase URL and keys
- **Authentication errors**: Verify JWT_SECRET is set
- **File upload issues**: Check Supabase Storage bucket policies
- **CORS errors**: Update CORS settings in your Supabase project

## Support

If you encounter any issues, check:
1. Supabase dashboard for database errors
2. Server logs for API errors
3. Network tab in browser for request/response details
