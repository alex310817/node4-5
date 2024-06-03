import express from 'express';
const router = express.Router();

// Controllers
const {
  getAllDishes,
  getDishById,
  createDish,
  updateDish,
  deleteDish
} = require('../controllers/dishController');

// Routes
router.get('/', getAllDishes);
router.get('/:dishId', getDishById);
router.post('/', createDish);
router.put('/:dishId', updateDish);
router.delete('/:dishId', deleteDish);

module.exports = router;
export default router;