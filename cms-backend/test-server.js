const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple health endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    message: 'MyAibo CMS API is running successfully!'
  });
});

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an email and password'
      });
    }

    const { createClient } = require('@supabase/supabase-js');
    const supabaseUrl = 'https://prtzzptquzbivmcihudq.supabase.co';
    const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBydHp6cHRxdXpiaXZtY2lodWRxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDUzMjkwMywiZXhwIjoyMDc2MTA4OTAzfQ.zTQDZsYCdTJfh5ZxI8kkuvqHJNw1uAWdjaIJpfTXTbM';
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user || !user.is_active) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Simple password check for demo
    const isMatch = password === 'admin123' || password === 'editor123';
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    const jwt = require('jsonwebtoken');
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    );

    res.json({
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
        isActive: user.is_active
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Test Supabase connection
app.get('/api/test-supabase', async (req, res) => {
  try {
    const { createClient } = require('@supabase/supabase-js');
    
    const supabaseUrl = 'https://prtzzptquzbivmcihudq.supabase.co';
    const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBydHp6cHRxdXpiaXZtY2lodWRxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDUzMjkwMywiZXhwIjoyMDc2MTA4OTAzfQ.zTQDZsYCdTJfh5ZxI8kkuvqHJNw1uAWdjaIJpfTXTbM';
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Test connection by querying users table
    const { data, error } = await supabase
      .from('users')
      .select('id, email, first_name, last_name, role')
      .limit(1);
    
    if (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
        details: error
      });
    }
    
    res.json({
      success: true,
      message: 'Supabase connection successful!',
      userCount: data ? data.length : 0,
      sampleUser: data && data.length > 0 ? data[0] : null
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      stack: error.stack
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Test server running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔗 Supabase test: http://localhost:${PORT}/api/test-supabase`);
});
