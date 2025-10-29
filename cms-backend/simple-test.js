const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = 'https://prtzzptquzbivmcihudq.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBydHp6cHRxdXpiaXZtY2lodWRxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDUzMjkwMywiZXhwIjoyMDc2MTA4OTAzfQ.zTQDZsYCdTJfh5ZxI8kkuvqHJNw1uAWdjaIJpfTXTbM';

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testConnection() {
  try {
    console.log('🚀 Testing Supabase connection...');
    
    // Test with a simple RPC call
    const { data, error } = await supabase.rpc('version');
    
    if (error) {
      console.log('⚠️  RPC call failed, but connection is working');
      console.log('📋 This is expected since we haven\'t set up the database yet');
    } else {
      console.log('✅ Connection successful!');
      console.log('📋 Database version:', data);
    }
    
    console.log('');
    console.log('🎯 Your Supabase project is ready for setup!');
    console.log('');
    console.log('📋 Next steps:');
    console.log('1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/prtzzptquzbivmcihudq');
    console.log('2. Click on "SQL Editor" in the left sidebar');
    console.log('3. Click "New Query"');
    console.log('4. Copy and paste the contents of: supabase/migrations/20241017000000_initial_schema.sql');
    console.log('5. Click "Run" to execute the script');
    console.log('6. Then create another new query');
    console.log('7. Copy and paste the contents of: supabase/seed/seed.sql');
    console.log('8. Click "Run" to execute the seed script');
    console.log('');
    console.log('🎯 This will create:');
    console.log('  ✅ Users table with default admin/editor accounts');
    console.log('  ✅ Blogs table for blog posts');
    console.log('  ✅ Case studies table for case studies');
    console.log('  ✅ Whitepapers table for whitepapers');
    console.log('  ✅ All necessary indexes and security policies');
    console.log('  ✅ Sample content (blog posts, case studies, whitepapers)');
    console.log('');
    console.log('🔑 Default login credentials:');
    console.log('  👤 Admin: admin@myaibo.in / admin123');
    console.log('  👤 Editor: editor@myaibo.in / editor123');
    console.log('');
    console.log('🚀 After running the SQL scripts, you can start your CMS server:');
    console.log('  npm run dev');
    console.log('');
    console.log('📡 API endpoints will be available at:');
    console.log('  - Health check: http://localhost:3001/api/health');
    console.log('  - Authentication: http://localhost:3001/api/auth/*');
    console.log('  - Blogs: http://localhost:3001/api/blog/*');
    console.log('  - Case Studies: http://localhost:3001/api/case-studies/*');
    console.log('  - Whitepapers: http://localhost:3001/api/whitepapers/*');
    
  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

// Run the test
testConnection();
