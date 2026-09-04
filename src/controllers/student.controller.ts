import { Request, Response, NextFunction } from 'express';
import pool from '../config/database';

// Get all students
export const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await pool.query('SELECT id, name, email, created_at FROM students');
    res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
};

// Get single student by id
export const getStudentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT id, name, email, created_at FROM students WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};
