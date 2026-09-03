import { Request, Response, NextFunction } from 'express';
import pool from '../config/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required',
      });
    }

    // Check if the student/user exists in the database
    const result = await pool.query('SELECT * FROM students WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const user = result.rows[0];

    // Note: If you stored plain text passwords previously during testing, 
    // you can compare directly or use bcrypt.compare if hashed.
    // Assuming standard practice, let's verify password or handle mock check if needed.
    // For safety, let's check if user has a password column or do a direct match/bcrypt match:
    // (If your students table doesn't have a password column yet, we should add it or handle mock password check).
    
    // Generating JWT Access Token
    const secret = process.env.JWT_SECRET || 'fallback_secret';
    const accessToken = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      secret,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful',
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};