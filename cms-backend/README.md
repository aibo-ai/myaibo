# MyAibo CMS Backend

A robust Content Management System backend for the MyAibo website, built with Node.js, Express.js, TypeScript, and PostgreSQL.

## Features

- **Blog Management**: Create, edit, and publish blog posts with rich text content
- **Case Studies**: Manage client success stories with metrics and testimonials
- **Whitepapers**: Handle downloadable resources with gated access
- **User Management**: Role-based access control (Admin/Editor)
- **File Uploads**: Support for images and PDFs with size validation
- **SEO Optimization**: Meta tags, slugs, and structured data
- **API-First**: RESTful APIs for frontend integration

## Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JWT-based with bcrypt password hashing
- **File Upload**: Multer with disk storage
- **Validation**: Built-in Sequelize validation
- **Security**: Helmet, CORS, rate limiting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository and navigate to the CMS backend directory:
```bash
cd cms-backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env
```

4. Update the `.env` file with your database credentials and other configurations.

5. Set up the database:
```bash
# Create database
createdb myaibo_cms

# Run migrations (tables will be created automatically on first run)
npm run dev
```

6. Seed the database with admin user:
```bash
npm run db:seed
```

### Default Admin Credentials

- **Email**: admin@myaibo.in
- **Password**: admin123

### Running the Application

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm run build
npm start
```

The server will start on `http://localhost:3001` (or the port specified in your `.env` file).

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:slug` - Get single blog post
- `POST /api/blog` - Create blog post (Protected)
- `PUT /api/blog/:id` - Update blog post (Protected)
- `DELETE /api/blog/:id` - Delete blog post (Protected)
- `GET /api/blog/meta/categories` - Get blog categories
- `GET /api/blog/meta/tags` - Get blog tags

### Case Studies
- `GET /api/case-studies` - Get all case studies
- `GET /api/case-studies/:slug` - Get single case study
- `POST /api/case-studies` - Create case study (Protected)
- `PUT /api/case-studies/:id` - Update case study (Protected)
- `DELETE /api/case-studies/:id` - Delete case study (Protected)
- `GET /api/case-studies/meta/industries` - Get industries
- `GET /api/case-studies/meta/tags` - Get tags

### Whitepapers
- `GET /api/whitepapers` - Get all whitepapers
- `GET /api/whitepapers/:slug` - Get single whitepaper
- `POST /api/whitepapers/:slug/download` - Download whitepaper
- `POST /api/whitepapers` - Create whitepaper (Protected)
- `PUT /api/whitepapers/:id` - Update whitepaper (Protected)
- `DELETE /api/whitepapers/:id` - Delete whitepaper (Protected)
- `GET /api/whitepapers/meta/topics` - Get topics
- `GET /api/whitepapers/meta/tags` - Get tags

### Users (Admin Only)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `PUT /api/users/:id/toggle-status` - Toggle user status

## Database Schema

### Users
- id, email, password, firstName, lastName, role, avatar, bio, isActive, lastLoginAt, timestamps

### Blogs
- id, title, slug, excerpt, content, featuredImage, authorId, status, publishedAt, categories, tags, metaTitle, metaDescription, canonicalUrl, viewCount, timestamps

### Case Studies
- id, title, slug, clientName, clientLogo, challenge, solution, results (JSONB), content, featuredImage, authorId, status, publishedAt, industries, tags, testimonial (JSONB), metaTitle, metaDescription, canonicalUrl, viewCount, timestamps

### Whitepapers
- id, title, slug, abstract, keyTakeaways, pdfUrl, coverImage, authorId, status, publishedAt, topics, tags, isGated, downloadCount, metaTitle, metaDescription, canonicalUrl, fileSize, timestamps

## File Upload

The system supports file uploads for:
- **Images**: JPEG, PNG, GIF, WebP (max 10MB)
- **PDFs**: PDF files (max 10MB)

Files are stored in:
- `./uploads/images/` - For images
- `./uploads/pdfs/` - For PDFs

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control
- File type validation
- File size limits
- CORS protection
- Helmet security headers
- Input validation and sanitization

## Environment Variables

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myaibo_cms
DB_USER=postgres
DB_PASSWORD=your_password

# JWT
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# Server
PORT=3001
NODE_ENV=development

# File Upload
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads

# Email (for whitepaper gating)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Mailchimp (for lead capture)
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_LIST_ID=your_list_id
```

## Development

### Project Structure
```
src/
├── config/          # Database configuration
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/          # Sequelize models
├── routes/          # API routes
├── seeders/         # Database seeders
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── app.ts           # Express app configuration
└── server.ts        # Server entry point
```

### Adding New Features

1. Create model in `src/models/`
2. Add routes in `src/routes/`
3. Update associations in models
4. Add validation and middleware as needed
5. Test endpoints with API client

## Deployment

### Docker (Recommended)
```bash
# Build image
docker build -t myaibo-cms .

# Run container
docker run -p 3001:3001 --env-file .env myaibo-cms
```

### Manual Deployment
1. Build the application: `npm run build`
2. Set up PostgreSQL database
3. Configure environment variables
4. Run migrations: `npm run db:migrate`
5. Start the application: `npm start`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.
