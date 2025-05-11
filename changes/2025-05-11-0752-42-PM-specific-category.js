import express from 'express';
import {
  addBulkCategories,
  deleteCategory,
  updateCategory,
  getCategoriesByField
} from '../../controllers/specificCategory.js';

import { protect } from '../../middleware/auth.js'; // Import the protect middleware

const router = express.Router();

// Apply the protect middleware to all routes
router.use(protect);

// Route to add bulk categories to a specific field (domain or mindset)
router.post('/specific-category', addBulkCategories);

// Route to delete a category from a specific field (domain or mindset)
router.delete('/specific-category', deleteCategory);

// Route to update a category in a specific field (domain or mindset)
router.put('/specific-category', updateCategory);

// Route to get categories of a specific field (domain or mindset)
router.get('/specific-category/:field', getCategoriesByField);

export default router;