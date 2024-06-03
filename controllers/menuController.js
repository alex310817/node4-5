let menus = [];

const getAllMenus = (req, res) => {
  res.json(menus);
};

const getMenuById = (req, res) => {
  const { menuId } = req.params;
  const menu = menus.find(menu => menu.id === menuId);
  if (!menu) {
    return res.status(404).json({ message: 'Menu not found' });
  }
  res.json(menu);
};

const getCategoriesByMenuId = (req, res) => {
  const { menuId } = req.params;
  // implement logic to get categories by menuId
};

const createMenu = (req, res) => {
  const { title, photo, isPublish } = req.body;
  const newMenu = {
    id: Math.random().toString(36).substring(7),
    title,
    photo,
    isPublish
  };
  menus.push(newMenu);
  res.status(201).json(newMenu);
};

const updateMenu = (req, res) => {
  const { menuId } = req.params;
  const { title, photo, isPublish } = req.body;
  const menuIndex = menus.findIndex(menu => menu.id === menuId);
  if (menuIndex === -1) {
    return res.status(404).json({ message: 'Menu not found' });
  }
  menus[menuIndex] = { ...menus[menuIndex], title, photo, isPublish };
  res.json(menus[menuIndex]);
};

const deleteMenu = (req, res) => {
  const { menuId } = req.params;
  const menuIndex = menus.findIndex(menu => menu.id === menuId);
  if (menuIndex === -1) {
    return res.status(404).json({ message: 'Menu not found' });
  }
  menus.splice(menuIndex, 1);
  res.sendStatus(204);
};

module.exports = {
  getAllMenus,
  getMenuById,
  getCategoriesByMenuId,
  createMenu,
  updateMenu,
  deleteMenu
};
