let menus = [];
export const getAllMenus = () => {
    // Ваш код здесь
};
export const getMenuById = (req, res) => {
    const menuId = req.params.menuId;
    const menu = menus.find((menu) => menu.id === menuId);
    res.json(menu);
};
export const getCategoriesByMenuId = (req, res) => {
    const menuId = req.params.menuId;
    // Assuming you have a categories array somewhere.
    // Replace categories with your actual array of categories.
    const categories = []; // Replace this with your actual categories array.
    const filteredCategories = categories.filter((category) => category.menuId === menuId);
    res.json(filteredCategories);
};
export const createMenu = (req, res) => {
    const newMenu = req.body;
    menus.push(newMenu);
    res.json(newMenu);
};
export const updateMenu = (req, res) => {
    const menuId = req.params.menuId;
    const { title, photo, isPublish } = req.body;
    const menuIndex = menus.findIndex((menu) => menu.id === menuId);
    menus[menuIndex] = { ...menus[menuIndex], title, photo, isPublish };
    res.json(menus[menuIndex]);
};
export const deleteMenu = (req, res) => {
    const menuId = req.params.menuId;
    const menuIndex = menus.findIndex((menu) => menu.id === menuId);
    menus.splice(menuIndex, 1);
    res.json({ message: 'Menu deleted successfully' });
};
//# sourceMappingURL=menuController.js.map