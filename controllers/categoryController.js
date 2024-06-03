let categories = [];

const getAllCategories = (req, res) => {
  res.json(categories);
};

const getCategoryById = (req, res) => {
  const { categoryId } = req.params;
  const category = categories.find(category => category.id === categoryId);
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  res.json(category);
};

const getDishesByCategoryId = (req, res) => {
  const { categoryId } = req.params;
  // implement logic to get dishes by categoryId
};

const createCategory = (req, res) => {
  const { menuId, title, photo, isVisible } = req.body;
  const newCategory = {
    id: Math.random().toString(36).substring(7),
    menuId,
    title,
    photo,
    isVisible
  };
  categories.push(newCategory);
  res.status(201).json(newCategory);
};

const updateCategory = (req, res) => {
  const { categoryId } = req.params;
  const { title, photo, isVisible } = req.body;
  const categoryIndex = categories.findIndex(category => category.id === categoryId);
  if (categoryIndex === -1) {
    return res.status(404).json({ message: 'Category not found' });
  }
  categories[categoryIndex] = { ...categories[categoryIndex], title, photo, isVisible };
  res.json(categories[categoryIndex]);
};

const deleteCategory = (req, res) => {
  const { categoryId } = req.params;
  const categoryIndex = categories.findIndex(category => category.id === categoryId);
  if (categoryIndex === -1) {
    return res.status(404).json({ message: 'Category not found' });
  }
  categories.splice(categoryIndex, 1);
  res.sendStatus(204);
};

module.exports = {
  getAllCategories,
  getCategoryById,
  getDishesByCategoryId,
  createCategory,
  updateCategory,
  deleteCategory
};
