const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Supabase configuration
const supabaseUrl = 'https://prtzzptquzbivmcihudq.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBydHp6cHRxdXpiaXZtY2lodWRxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDUzMjkwMywiZXhwIjoyMDc2MTA4OTAzfQ.zTQDZsYCdTJfh5ZxI8kkuvqHJNw1uAWdjaIJpfTXTbM';

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function applyMigration() {
  try {
    console.log('🚀 Starting database migration...');
    
    // Read the migration file
    const migrationPath = path.join(__dirname, 'supabase', 'migrations', '20241017000000_initial_schema.sql');
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8');
    
    console.log('📄 Migration file loaded successfully');
    
    // Execute the migration
    const { data, error } = await supabase.rpc('exec_sql', { sql: migrationSQL });
    
    if (error) {
      console.error('❌ Migration failed:', error);
      return;
    }
    
    console.log('✅ Migration applied successfully!');
    
    // Now apply the seed data
    console.log('🌱 Applying seed data...');
    
    const seedPath = path.join(__dirname, 'supabase', 'seed', 'seed.sql');
    const seedSQL = fs.readFileSync(seedPath, 'utf8');
    
    const { data: seedData, error: seedError } = await supabase.rpc('exec_sql', { sql: seedSQL });
    
    if (seedError) {
      console.error('❌ Seed data failed:', seedError);
      return;
    }
    
    console.log('✅ Seed data applied successfully!');
    console.log('🎉 Database setup complete!');
    
    // Test the setup by querying users
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('*');
    
    if (usersError) {
      console.error('❌ Error querying users:', usersError);
      return;
    }
    
    console.log('👥 Users created:', users.length);
    users.forEach(user => {
      console.log(`  - ${user.email} (${user.role})`);
    });
    
  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

// Run the migration
applyMigration();
