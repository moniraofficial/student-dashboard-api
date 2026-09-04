import { Router } from 'express';
import { getAssignments } from '../controllers/assignment.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

router.get('/assignments', verifyToken, getAssignments);

export default router;