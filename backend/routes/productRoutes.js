import express from 'express';
import {
  deleteProduct,
  getProductById,
  getProducts,
} from '../controllers/productController.js';
import { adminProtect, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getProductById);
router.delete('/:id', protect, adminProtect, deleteProduct);

export default router;
