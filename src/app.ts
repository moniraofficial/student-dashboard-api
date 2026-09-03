import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/error.middleware';

const app: Application =express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Student Dashboard API is running!' });
});

// Global Error Handler
app.use(errorHandler);

export default app;