const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = 'https://prtzzptquzbivmcihudq.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBydHp6cHRxdXpiaXZtY2lodWRxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDUzMjkwMywiZXhwIjoyMDc2MTA4OTAzfQ.zTQDZsYCdTJfh5ZxI8kkuvqHJNw1uAWdjaIJpfTXTbM';

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupDatabase() {
  try {
    console.log('🚀 Setting up MyAibo CMS Database...');
    
    // Test connection
    console.log('🔗 Testing connection...');
    const { data: testData, error: testError } = await supabase
      .from('_supabase_migrations')
      .select('*')
      .limit(1);
    
    if (testError && testError.code !== 'PGRST116') {
      console.error('❌ Connection test failed:', testError);
      return;
    }
    
    console.log('✅ Connection successful!');
    
    // Check if tables already exist
    console.log('🔍 Checking existing tables...');
    const { data: existingTables, error: tablesError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')
      .in('table_name', ['users', 'blogs', 'case_studies', 'whitepapers']);
    
    if (tablesError) {
      console.error('❌ Error checking tables:', tablesError);
      return;
    }
    
    if (existingTables && existingTables.length > 0) {
      console.log('⚠️  Tables already exist:', existingTables.map(t => t.table_name));
      console.log('📋 Please run the SQL migration manually in your Supabase dashboard.');
      console.log('📄 Migration file: supabase/migrations/20241017000000_initial_schema.sql');
      console.log('🌱 Seed file: supabase/seed/seed.sql');
      return;
    }
    
    console.log('📋 No existing tables found. Please run the migration manually.');
    console.log('');
    console.log('📋 Next steps:');
    console.log('1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/prtzzptquzbivmcihudq');
    console.log('2. Open the SQL Editor');
    console.log('3. Copy and paste the contents of: supabase/migrations/20241017000000_initial_schema.sql');
    console.log('4. Run the SQL script');
    console.log('5. Then copy and paste the contents of: supabase/seed/seed.sql');
    console.log('6. Run the seed script');
    console.log('');
    console.log('🎯 This will create:');
    console.log('  - Users table with default admin/editor accounts');
    console.log('  - Blogs table for blog posts');
    console.log('  - Case studies table for case studies');
    console.log('  - Whitepapers table for whitepapers');
    console.log('  - All necessary indexes and security policies');
    console.log('');
    console.log('🔑 Default login credentials:');
    console.log('  - Admin: admin@myaibo.in / admin123');
    console.log('  - Editor: editor@myaibo.in / editor123');
    
  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

// Run the setup
setupDatabase();
