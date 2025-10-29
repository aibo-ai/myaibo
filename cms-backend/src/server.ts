import app from './app';
import { connectDatabase } from './config/database';

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    // Skip database connection since we're using Supabase
    // await connectDatabase();
    
    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 CMS Server running on port ${PORT}`);
      console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
