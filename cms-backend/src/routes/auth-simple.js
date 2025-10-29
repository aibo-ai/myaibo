const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Auth routes are working!' });
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email & password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an email and password'
      });
    }

    // Simple hardcoded check for demo
    if (email === 'admin@myaibo.in' && password === 'admin123') {
      const jwtSecret = process.env.JWT_SECRET || 'fallback-secret';
      const token = jwt.sign(
        { id: '85abbdd6-2cce-4819-a2a3-f017bd6913bf', email: email, role: 'admin' },
        jwtSecret,
        { expiresIn: '7d' }
      );

      return res.json({
        success: true,
        token,
        user: {
          id: '85abbdd6-2cce-4819-a2a3-f017bd6913bf',
          email: email,
          firstName: 'Admin',
          lastName: 'User',
          role: 'admin',
          avatar: null,
          bio: null,
          isActive: true
        }
      });
    }

    if (email === 'editor@myaibo.in' && password === 'admin123') {
      const jwtSecret = process.env.JWT_SECRET || 'fallback-secret';
      const token = jwt.sign(
        { id: 'editor-id', email: email, role: 'editor' },
        jwtSecret,
        { expiresIn: '7d' }
      );

      return res.json({
        success: true,
        token,
        user: {
          id: 'editor-id',
          email: email,
          firstName: 'Editor',
          lastName: 'User',
          role: 'editor',
          avatar: null,
          bio: null,
          isActive: true
        }
      });
    }

    return res.status(401).json({
      success: false,
      message: 'Invalid credentials'
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
router.get('/me', async (req, res) => {
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
    const decoded = jwt.verify(token, jwtSecret);
    console.log('Token decoded for user:', decoded.id);
    
    // Return user data based on token
    const user = {
      id: decoded.id,
      email: decoded.email,
      firstName: decoded.role === 'admin' ? 'Admin' : 'Editor',
      lastName: 'User',
      role: decoded.role,
      avatar: null,
      bio: null,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    return res.json({
      success: true,
      user: user
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
