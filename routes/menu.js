const express = require('express');
const router = express.Router();

// Controllers
const {
  getAllMenus,
  getMenuById,
  getCategoriesByMenuId,
  createMenu,
  updateMenu,
  deleteMenu
} = require('../controllers/menuController');

// Routes
router.get('/', getAllMenus);
router.get('/:menuId', getMenuById);
router.get('/:menuId/categories', getCategoriesByMenuId);
router.post('/', createMenu);
router.put('/:menuId', updateMenu);
router.delete('/:menuId', deleteMenu);

module.exports = router;
