import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

// Use environment variable to control database type, default to SQLite for development
const useSQLite = process.env.USE_SQLITE === 'true';

let sequelize: Sequelize;

if (useSQLite) {
  // Use SQLite for local development
  const dbPath = path.join(__dirname, '../../database.sqlite');
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
  });
  console.log('Using SQLite database for local development');
} else {
  // Use Supabase for production
  const supabaseUrl = process.env.SUPABASE_URL;
  if (!supabaseUrl) {
    throw new Error('SUPABASE_URL is not defined in the environment variables');
  }

  const dbUrl = new URL(supabaseUrl);
  const dbHost = dbUrl.hostname;
  const dbPort = parseInt(dbUrl.port || '5432');
  const dbName = dbUrl.pathname.split('/')[1];
  const dbUser = dbUrl.username;
  const dbPassword = dbUrl.password;

  sequelize = new Sequelize({
    host: dbHost,
    port: dbPort,
    database: dbName,
    username: dbUser,
    password: dbPassword,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Supabase requires this
      },
    },
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
}

export const connectDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully');

    // For SQLite, sync tables automatically. For Supabase, use migrations
    if (useSQLite) {
      // Temporarily disable sync to avoid migration issues
      // await sequelize.sync({ alter: process.env.NODE_ENV === 'development' });
      console.log('✅ SQLite database connection ready (sync disabled)');
    } else {
      console.log('✅ Using Supabase migrations for schema management');
    }
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    throw error;
  }
};

export default sequelize;
