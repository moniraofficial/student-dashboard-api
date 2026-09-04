import { Router } from 'express';
import { getCourses } from '../controllers/course.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

router.get('/courses', verifyToken, getCourses);

export default router;
