# MyAibo CMS System

A comprehensive Content Management System built with Next.js, Node.js, and Supabase for managing blogs, case studies, and whitepapers.

## 🎨 Design System

The CMS frontend follows your existing website's design theme:
- **Primary Color**: `#7C3BED` (Purple)
- **Font**: Inter
- **Design**: Modern, clean with rounded corners
- **Layout**: Responsive grid system with consistent spacing

## 🏗️ Architecture

### Backend (CMS API)
- **Framework**: Node.js with Express.js
- **Database**: Supabase (PostgreSQL)
- **Authentication**: JWT tokens
- **File Upload**: Multer for handling file uploads
- **Containerization**: Docker with Docker Compose

### Frontend (Admin Dashboard)
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React hooks
- **API Client**: Custom TypeScript client for CMS API

## 📁 Project Structure

```
myaibo/
├── cms-backend/                 # Backend CMS API
│   ├── src/
│   │   ├── app.ts              # Express app configuration
│   │   ├── server.ts           # Server entry point
│   │   ├── config/             # Database and Supabase config
│   │   ├── models/             # Data models
│   │   ├── routes/             # API routes
│   │   ├── middleware/         # Auth and error handling
│   │   └── utils/              # Utility functions
│   ├── supabase/               # Database migrations
│   ├── Dockerfile              # Docker configuration
│   └── docker-compose.yml      # Multi-container setup
├── src/
│   ├── app/
│   │   ├── admin/              # Admin dashboard pages
│   │   │   ├── login/          # Authentication
│   │   │   ├── dashboard/      # Main dashboard
│   │   │   ├── blogs/          # Blog management
│   │   │   ├── case-studies/   # Case study management
│   │   │   └── whitepapers/    # Whitepaper management
│   │   └── resources/          # Public resource pages
│   │       ├── blog/           # Public blog listing
│   │       ├── case-studies/   # Public case study listing
│   │       └── whitepapers/    # Public whitepaper listing
│   ├── components/
│   │   └── admin/              # Admin-specific components
│   └── lib/
│       └── api/                # API client
└── .env.local                  # Environment variables
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Docker and Docker Compose
- Supabase account and project

### 1. Backend Setup

```bash
# Navigate to backend directory
cd cms-backend

# Install dependencies
npm install

# Copy environment file
cp env.example .env

# Update .env with your Supabase credentials:
# SUPABASE_URL=your_supabase_url
# SUPABASE_SERVICE_KEY=your_service_key
# JWT_SECRET=your_jwt_secret

# Start with Docker
docker-compose up -d

# Or start locally
npm run dev
```

### 2. Frontend Setup

```bash
# Navigate to project root
cd ..

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Database Setup

The database schema is automatically created when you run the Supabase migration:

```bash
# In cms-backend directory
supabase db push
```

## 🔐 Authentication

### Default Credentials
- **Admin**: `admin@myaibo.in` / `password`
- **Editor**: `editor@myaibo.in` / `password`

### Access URLs
- **Admin Login**: `http://localhost:3000/admin/login`
- **Admin Dashboard**: `http://localhost:3000/admin/dashboard`
- **Public Resources**: `http://localhost:3000/resources`

## 📝 Content Management

### Blog Posts
- Rich text content with Markdown support
- SEO metadata (title, description, canonical URL)
- Categories and tags
- Featured images
- Draft/Published/Archived status
- View count tracking

### Case Studies
- Client information and logos
- Challenge/Solution/Results structure
- Industry categorization
- Testimonials
- Metrics and KPIs
- Featured images

### Whitepapers
- PDF file uploads
- Abstract and key takeaways
- Topic categorization
- Gated/Open access
- Download tracking
- File size management

## 🎨 Design Features

### Color Scheme
- **Primary Purple**: `#7C3BED`
- **Background**: White and light gray (`#F9FAFB`)
- **Text**: Dark gray (`#111827`)
- **Accents**: Purple variants for highlights

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Purple primary, white secondary
- **Forms**: Clean inputs with purple focus states
- **Navigation**: Responsive with dropdown menus
- **Icons**: Lucide React icons throughout

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Grid layouts that adapt to screen size
- Touch-friendly interface elements

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Content Management
- `GET /api/blog` - List blog posts
- `POST /api/blog` - Create blog post
- `PUT /api/blog/:id` - Update blog post
- `DELETE /api/blog/:id` - Delete blog post

- `GET /api/case-studies` - List case studies
- `POST /api/case-studies` - Create case study
- `PUT /api/case-studies/:id` - Update case study
- `DELETE /api/case-studies/:id` - Delete case study

- `GET /api/whitepapers` - List whitepapers
- `POST /api/whitepapers` - Create whitepaper
- `PUT /api/whitepapers/:id` - Update whitepaper
- `DELETE /api/whitepapers/:id` - Delete whitepaper

### File Upload
- `POST /api/upload` - Upload files (images, PDFs)

## 🛡️ Security Features

- JWT-based authentication
- Role-based access control (Admin/Editor)
- Protected admin routes
- File upload validation
- SQL injection prevention
- XSS protection
- CORS configuration

## 📊 Features

### Admin Dashboard
- **Overview**: Statistics and recent content
- **Content Management**: CRUD operations for all content types
- **Search & Filter**: Find content quickly
- **Bulk Operations**: Manage multiple items
- **User Management**: Role-based permissions

### Public Resources
- **Responsive Design**: Works on all devices
- **Search & Filter**: Find relevant content
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Fast loading with Next.js optimization

## 🚀 Deployment

### Backend Deployment
```bash
# Build Docker image
docker build -t myaibo-cms-backend .

# Deploy to cloud platform
# (AWS ECS, Google Cloud Run, Heroku, etc.)
```

### Frontend Deployment
```bash
# Build for production
npm run build

# Deploy to Vercel, Netlify, or other platforms
```

## 🔄 Development Workflow

1. **Content Creation**: Use admin dashboard to create content
2. **Review Process**: Draft → Review → Publish workflow
3. **SEO Optimization**: Meta tags and descriptions
4. **Analytics**: Track views and downloads
5. **Maintenance**: Regular backups and updates

## 📈 Analytics & Monitoring

- View counts for all content
- Download tracking for whitepapers
- User activity monitoring
- Performance metrics
- Error logging and monitoring

## 🛠️ Customization

### Adding New Content Types
1. Create database migration
2. Add API routes
3. Create admin interface
4. Add public display pages

### Styling Changes
- Update Tailwind config
- Modify component styles
- Adjust color scheme in CSS variables

### Feature Extensions
- Add comments system
- Implement content scheduling
- Add advanced search
- Integrate with external services

## 📞 Support

For technical support or feature requests, contact the development team or create an issue in the project repository.

---

**Built with ❤️ for MyAibo by the development team**
