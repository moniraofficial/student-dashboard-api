import { Router } from 'express';
import { getStudents, getStudentById } from '../controllers/student.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

// Protected routes using verifyToken middleware
router.get('/students', verifyToken, getStudents);
router.get('/students/:id', verifyToken, getStudentById);

export default router;