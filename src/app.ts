

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/error.middleware';
import authRoutes from './routes/auth.routes';
import studentRoutes from './routes/student.routes';
import courseRoutes from './routes/course.routes';
import assignmentRoutes from './routes/assignment.routes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', authRoutes);
app.use('/api', studentRoutes);
app.use('/api', courseRoutes);
app.use('/api', assignmentRoutes);

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Student Dashboard API is running!' });
});

// Global Error Handler
app.use(errorHandler);

export default app;