// src/config/jwt.ts
import { sign, verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'sua_chave_secreta';

export const generateToken = (userId: number) => {
  return sign({ userId }, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  try {
    return verify(token, secret);
  } catch (error) {
    return null;
  }
};
