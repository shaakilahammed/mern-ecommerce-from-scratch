import express from 'express';
import {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserById,
  updateUserProfile,
} from '../controllers/userController.js';
import { adminProtect, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/login', authUser);
router.post('/', registerUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.get('/', protect, adminProtect, getUsers);
router.get('/:id', protect, adminProtect, getUserById);
router.put('/:id', protect, adminProtect, updateUserById);
router.delete('/:id', protect, adminProtect, deleteUser);

export default router;
