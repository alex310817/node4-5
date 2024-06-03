let dishes = [];
export const getAllDishes = () => {
    // Ваш код здесь
};
export const getDishById = (req, res) => {
    const dishId = req.params.dishId;
    const dish = dishes.find((dish) => dish.id === dishId);
    res.json(dish);
};
export const createDish = (req, res) => {
    const newDish = req.body;
    dishes.push(newDish);
    res.json(newDish);
};
export const updateDish = (req, res) => {
    const dishId = req.params.dishId;
    const { title, description, photo, isPublish, ingredients, price } = req.body;
    const dishIndex = dishes.findIndex((dish) => dish.id === dishId);
    dishes[dishIndex] = { ...dishes[dishIndex], title, description, photo, isPublish, ingredients, price };
    res.json(dishes[dishIndex]);
};
export const deleteDish = (req, res) => {
    const dishId = req.params.dishId;
    const dishIndex = dishes.findIndex((dish) => dish.id === dishId);
    dishes.splice(dishIndex, 1);
    res.json({ message: 'Dish deleted successfully' });
};
//# sourceMappingURL=dishController.js.map