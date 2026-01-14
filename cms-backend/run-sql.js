const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  logging: console.log,
});

async function runSQL() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    const sqlPath = path.join(__dirname, 'alter-case-study-columns.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    console.log('Running SQL migration...');
    await sequelize.query(sql);
    console.log('SQL migration completed successfully.');

  } catch (error) {
    console.error('Error running SQL:', error);
  } finally {
    await sequelize.close();
  }
}

runSQL();
