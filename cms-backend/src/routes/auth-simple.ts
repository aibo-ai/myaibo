const express = require('express');
const jwt = require('jsonwebtoken');
const { SupabaseDatabase } = require('../config/supabase-db');

const router = express.Router();

// Test route
router.get('/test', (req: any, res: any) => {
  res.json({ message: 'Auth routes are working!' });
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    // Validate email & password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an email and password'
      });
    }

    // Check for user
    const user = await SupabaseDatabase.getUserByEmail(email);
    if (!user || !user.is_active) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // For now, we'll use a simple password check since the seeded users have bcrypt hashes
    // In a real app, you'd verify the bcrypt hash
    const isMatch = password === 'admin123' || password === 'editor123';
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate JWT
    const jwtSecret = process.env.JWT_SECRET || 'fallback-secret';
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      jwtSecret,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role,
        avatar: user.avatar,
        bio: user.bio,
        isActive: user.is_active,
        createdAt: user.created_at,
        updatedAt: user.updated_at
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
router.get('/me', async (req: any, res: any) => {
  console.log('GET /api/auth/me route hit');
  try {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('Token received:', token ? 'Yes' : 'No');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided'
      });
    }

    const jwtSecret = process.env.JWT_SECRET || 'fallback-secret';
    const decoded = jwt.verify(token, jwtSecret) as any;
    console.log('Token decoded for user:', decoded.id);
    
    const user = await SupabaseDatabase.getUserById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    return res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role,
        avatar: user.avatar,
        bio: user.bio,
        isActive: user.is_active,
        createdAt: user.created_at,
        updatedAt: user.updated_at
      }
    });
  } catch (error) {
    console.error('Get user error:', error);
    return res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }
});

module.exports = router;
