'use strict';

const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Check if users already exist to prevent duplicate key errors
    const existingUsers = await queryInterface.sequelize.query(
      "SELECT email FROM users WHERE email IN ('admin@myaibo.in', 'editor@myaibo.in')",
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (existingUsers.length > 0) {
      console.log('Admin and editor users already exist, skipping seeder');
      return;
    }

    // Load passwords from environment variables with secure defaults
    const adminPassword = process.env.ADMIN_DEFAULT_PASSWORD || 'admin123';
    const editorPassword = process.env.EDITOR_DEFAULT_PASSWORD || 'editor123';

    // Warn about default passwords in development
    if (!process.env.ADMIN_DEFAULT_PASSWORD) {
      console.warn('WARNING: Using default admin password. Set ADMIN_DEFAULT_PASSWORD environment variable for production.');
    }
    if (!process.env.EDITOR_DEFAULT_PASSWORD) {
      console.warn('WARNING: Using default editor password. Set EDITOR_DEFAULT_PASSWORD environment variable for production.');
    }

    // Hash passwords separately for security
    const adminHashedPassword = await bcrypt.hash(adminPassword, 10);
    const editorHashedPassword = await bcrypt.hash(editorPassword, 10);

    await queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        email: 'admin@myaibo.in',
        password: adminHashedPassword,
        first_name: 'Admin',
        last_name: 'User',
        role: 'admin',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        email: 'editor@myaibo.in',
        password: editorHashedPassword,
        first_name: 'Content',
        last_name: 'Editor',
        role: 'editor',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Only delete the seeded users, not all users
    await queryInterface.bulkDelete('users', {
      email: {
        [Sequelize.Op.in]: ['admin@myaibo.in', 'editor@myaibo.in']
      }
    }, {});
  }
};
