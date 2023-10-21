// src/routes/authRoutes.ts
import express from 'express';
import { loginUser, registerUser } from '../controller/auth-controller';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;