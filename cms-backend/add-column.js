const { default: sequelize } = require('./dist/config/database');

async function addColumn() {
  try {
    console.log('Adding objectives column to case_studies table...');

    await sequelize.query(`
      ALTER TABLE case_studies
      ADD COLUMN IF NOT EXISTS objectives TEXT;
    `);

    console.log('✅ Column added successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error adding column:', error);
    process.exit(1);
  }
}

addColumn();
