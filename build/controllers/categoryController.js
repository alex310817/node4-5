let categories = [];
export const getAllCategories = () => {
    // Ваш код здесь
};
export const getCategoryById = (req, res) => {
    const categoryId = req.params.categoryId;
    const category = categories.find((category) => category.id === categoryId);
    res.json(category);
};
export const getDishesByCategoryId = (req, res) => {
    const categoryId = req.params.categoryId;
    // Assuming you have a dishes array somewhere.
    // Replace dishes with your actual array of dishes.
    const dishes = []; // Replace this with your actual dishes array.
    const filteredDishes = dishes.filter((dish) => dish.categoryId === categoryId);
    res.json(filteredDishes);
};
export const createCategory = (req, res) => {
    const newCategory = req.body;
    categories.push(newCategory);
    res.json(newCategory);
};
export const updateCategory = (req, res) => {
    const categoryId = req.params.categoryId;
    const { title, photo, isVisible } = req.body;
    const categoryIndex = categories.findIndex((category) => category.id === categoryId);
    categories[categoryIndex] = { ...categories[categoryIndex], title, photo, isVisible };
    res.json(categories[categoryIndex]);
};
export const deleteCategory = (req, res) => {
    const categoryId = req.params.categoryId;
    const categoryIndex = categories.findIndex((category) => category.id === categoryId);
    categories.splice(categoryIndex, 1);
    res.json({ message: 'Category deleted successfully' });
};
//# sourceMappingURL=categoryController.js.map