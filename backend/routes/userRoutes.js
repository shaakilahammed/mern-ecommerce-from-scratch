import express from 'express';
import {
  authUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js';
import { adminProtect, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/login', authUser);
router.post('/', registerUser);
router.get('/', protect, adminProtect, getUsers);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

export default router;
