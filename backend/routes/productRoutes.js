import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../controllers/productController.js';
import { adminProtect, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', protect, adminProtect, createProduct);
router.get('/:id', getProductById);
router.put('/:id', protect, adminProtect, updateProduct);
router.delete('/:id', protect, adminProtect, deleteProduct);

export default router;
