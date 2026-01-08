#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

(async () => {
  try {
    const sqlPath = process.argv[2] || path.join(__dirname, '..', 'supabase-setup.sql');
    if (!process.env.DATABASE_URL) {
      console.error('ERROR: DATABASE_URL env var is required');
      process.exit(1);
    }
    const sql = fs.readFileSync(sqlPath, 'utf8');

    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false, require: true },
    });

    await client.connect();
    console.log(`Connected. Applying SQL from ${sqlPath} ...`);

    // Some servers require enabling multiple statements in one query; pg supports semicolon-separated
    await client.query(sql);

    console.log('SQL applied successfully.');
    await client.end();
  } catch (err) {
    console.error('Failed to apply SQL:', err);
    process.exit(1);
  }
})();
