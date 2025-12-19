module.exports = {
  development: {
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE || './data/local.db',
    logging: process.env.NODE_ENV === 'development' ? console.log : false
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
  },
  production: {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    logging: false,
    dialectOptions: {
      ssl: process.env.DB_SSL !== 'false' ? {
        require: true,
        rejectUnauthorized: false, // Required for Supabase
      } : false,
    },
    pool: {
      max: parseInt(process.env.DB_POOL_MAX || '10'),
      min: parseInt(process.env.DB_POOL_MIN || '1'),
      acquire: parseInt(process.env.DB_POOL_ACQUIRE || '60000'),
      idle: parseInt(process.env.DB_POOL_IDLE || '20000'),
    },
    // Connection timeout settings
    retry: {
      max: 3,
    },
  }
};
