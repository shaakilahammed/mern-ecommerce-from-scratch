import express from 'express';
import {
  addOrder,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
} from '../controllers/orderController.js';
import { adminProtect, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', protect, addOrder);
router.get('/', protect, adminProtect, getOrders);
router.get('/myorders', protect, getMyOrders);
router.get('/:id', protect, getOrderById);
router.put('/:id/pay', protect, updateOrderToPaid);
router.put('/:id/deliver', protect, adminProtect, updateOrderToDelivered);

export default router;
