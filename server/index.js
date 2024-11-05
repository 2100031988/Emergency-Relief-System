import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sequelize from './config/database.js';
import User from './models/User.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Registration endpoint
app.post('/api/auth/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, dateOfBirth } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !password || !phone || !dateOfBirth) {
      return res.status(400).json({
        message: 'All fields are required',
        errors: {
          firstName: !firstName ? 'First name is required' : '',
          lastName: !lastName ? 'Last name is required' : '',
          email: !email ? 'Email is required' : '',
          password: !password ? 'Password is required' : '',
          phone: !phone ? 'Phone is required' : '',
          dateOfBirth: !dateOfBirth ? 'Date of birth is required' : ''
        }
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        message: 'Email already registered',
        errors: { email: 'Email already exists' }
      });
    }

    // Create new user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      phone,
      dateOfBirth,
      isVerified: false
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'your_jwt_secret',
      { expiresIn: '1h' }
    );

    res.status(201).json({
      message: 'Registration successful! Please check your email for verification.',
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    
    // Handle Sequelize validation errors
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.reduce((acc, err) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
      
      return res.status(400).json({
        message: 'Validation failed',
        errors
      });
    }

    res.status(500).json({
      message: 'Registration failed. Please try again.',
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});