import express from 'express';
const router = express.Router();

// Controllers
const {
  getAllCategories,
  getCategoryById,
  getDishesByCategoryId,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');

// Routes
router.get('/', getAllCategories);
router.get('/:categoryId', getCategoryById);
router.get('/:categoryId/dishes', getDishesByCategoryId);
router.post('/', createCategory);
router.put('/:categoryId', updateCategory);
router.delete('/:categoryId', deleteCategory);

module.exports = router;
export default router;