let dishes = [];

const getAllDishes = (req, res) => {
  res.json(dishes);
};

const getDishById = (req, res) => {
  const { dishId } = req.params;
  const dish = dishes.find(dish => dish.id === dishId);
  if (!dish) {
    return res.status(404).json({ message: 'Dish not found' });
  }
  res.json(dish);
};

const createDish = (req, res) => {
  const { categoryId, title, description, photo, isPublish, ingredients, price } = req.body;
  const newDish = {
    id: Math.random().toString(36).substring(7),
    categoryId,
    title,
    description,
    photo,
    isPublish,
    ingredients,
    price
  };
  dishes.push(newDish);
  res.status(201).json(newDish);
};

const updateDish = (req, res) => {
  const { dishId } = req.params;
  const { title, description, photo, isPublish, ingredients, price } = req.body;
  const dishIndex = dishes.findIndex(dish => dish.id === dishId);
  if (dishIndex === -1) {
    return res.status(404).json({ message: 'Dish not found' });
  }
  dishes[dishIndex] = { ...dishes[dishIndex], title, description, photo, isPublish, ingredients, price };
  res.json(dishes[dishIndex]);
};

const deleteDish = (req, res) => {
  const { dishId } = req.params;
  const dishIndex = dishes.findIndex(dish => dish.id === dishId);
  if (dishIndex === -1) {
    return res.status(404).json({ message: 'Dish not found' });
  }
  dishes.splice(dishIndex, 1);
  res.sendStatus(204);
};

module.exports = {
  getAllDishes,
  getDishById,
  createDish,
  updateDish,
  deleteDish
};
