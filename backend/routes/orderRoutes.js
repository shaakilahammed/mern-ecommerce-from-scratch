import express from 'express';
import { addOrder, getOrderById } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', protect, addOrder);
router.get('/:id', protect, getOrderById);

export default router;
