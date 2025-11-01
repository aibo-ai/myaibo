import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';

// Import routes
const authRoutes = require('./routes/auth-simple');
import uploadRoutes from './routes/upload';
import blogRoutes from './routes/blog-simple';
import caseStudyRoutes from './routes/caseStudy-simple';
import whitepaperRoutes from './routes/whitepaper-simple';
// import userRoutes from './routes/user';

// Import middleware
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';

// Load environment variables
dotenv.config();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: '*',
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
app.use(morgan('combined'));

// Static file serving for uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// API routes
console.log('Registering auth routes...');
app.use('/api/auth', authRoutes);
console.log('Auth routes registered');

console.log('Registering upload routes...');
app.use('/api/upload', uploadRoutes);
console.log('Upload routes registered');

console.log('Registering case study routes...');
app.use('/api/case-studies', caseStudyRoutes);
console.log('Case study routes registered');

console.log('Registering whitepaper routes...');
app.use('/api/whitepapers', whitepaperRoutes);
console.log('Whitepaper routes registered');

console.log('Registering blog routes...');
app.use('/api/blog', blogRoutes);
console.log('Blog routes registered');

// app.use('/api/users', userRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;
