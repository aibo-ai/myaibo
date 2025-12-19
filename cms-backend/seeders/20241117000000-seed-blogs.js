'use strict';
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Read blogs from JSON file
    const blogsPath = path.join(__dirname, '../data/blogs.json');
    const blogsData = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

    // Get admin user ID
    const adminUser = await queryInterface.sequelize.query(
      "SELECT id FROM users WHERE email = 'admin@myaibo.in' LIMIT 1",
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (!adminUser || adminUser.length === 0) {
      console.log('Admin user not found, skipping blog seeding');
      return;
    }

    const adminId = adminUser[0].id;

    // Transform and insert blogs
    const blogsToInsert = blogsData.map(blog => {
      const blogStatus = blog.status || 'published';
      return {
        id: uuidv4(),
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        featured_image: blog.featured_image || null,
        featured_image_alt: blog.featured_image_alt || null,
        author_id: adminId,
        status: blogStatus,
        published_at: blogStatus === 'published' ? new Date(blog.created_at || Date.now()) : null,
      categories: JSON.stringify(blog.categories || []),
      tags: JSON.stringify(blog.tags || []),
      meta_title: blog.meta_title || null,
      meta_description: blog.meta_description || null,
      canonical_url: blog.canonical_url || null,
      view_count: blog.view_count || 0,
      created_at: new Date(blog.created_at || Date.now()),
      updated_at: new Date(blog.updated_at || Date.now())
    }));

    // Check if blogs already exist to prevent duplicates
    const existingBlogs = await queryInterface.sequelize.query(
      "SELECT slug FROM blogs WHERE slug IN (?)",
      {
        replacements: [blogsToInsert.map(b => b.slug)],
        type: Sequelize.QueryTypes.SELECT
      }
    );

    const existingSlugs = existingBlogs.map(b => b.slug);
    const newBlogs = blogsToInsert.filter(blog => !existingSlugs.includes(blog.slug));

    if (newBlogs.length > 0) {
      await queryInterface.bulkInsert('blogs', newBlogs, {});
      console.log(`Seeded ${newBlogs.length} new blogs`);
    } else {
      console.log('All blogs already exist, skipping seeding');
    }
  },

  async down(queryInterface, Sequelize) {
    // Remove only blogs authored by admin user
    const adminUser = await queryInterface.sequelize.query(
      "SELECT id FROM users WHERE email = 'admin@myaibo.in' LIMIT 1",
      { type: Sequelize.QueryTypes.SELECT }
    );
    if (adminUser && adminUser.length > 0) {
      await queryInterface.bulkDelete('blogs', {
        author_id: adminUser[0].id
      }, {});
    }
  }
};
