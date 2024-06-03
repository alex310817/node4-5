let categories: any[] = [];

export const getAllCategories = () => {
  // Ваш код здесь
};

export const getCategoryById = (req: any, res: any) => {
    const categoryId = req.params.categoryId;
    const category = categories.find((category: any) => category.id === categoryId);
    res.json(category);
};

export const getDishesByCategoryId = (req: any, res: any) => {
    const categoryId = req.params.categoryId;
    // Assuming you have a dishes array somewhere.
    // Replace dishes with your actual array of dishes.
    const dishes: any[] = []; // Replace this with your actual dishes array.
    const filteredDishes = dishes.filter((dish: any) => dish.categoryId === categoryId);
    res.json(filteredDishes);
};

export const createCategory = (req: any, res: any) => {
    const newCategory = req.body;
    categories.push(newCategory);
    res.json(newCategory);
};

export const updateCategory = (req: any, res: any) => {
    const categoryId = req.params.categoryId;
    const { title, photo, isVisible } = req.body;
    const categoryIndex = categories.findIndex((category: any) => category.id === categoryId);
    categories[categoryIndex] = { ...categories[categoryIndex], title, photo, isVisible };
    res.json(categories[categoryIndex]);
};

export const deleteCategory = (req: any, res: any) => {
    const categoryId = req.params.categoryId;
    const categoryIndex = categories.findIndex((category: any) => category.id === categoryId);
    categories.splice(categoryIndex, 1);
    res.json({ message: 'Category deleted successfully' });
};

