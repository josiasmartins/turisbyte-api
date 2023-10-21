import express from 'express';
import { getUserProfile } from '../controller/user-controller';
// import { authMiddleware } from '../middleware/';

const router = express.Router();

// router.get('/profile', authMiddleware, getUserProfile);

export default router;