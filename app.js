const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.json());

// Routes
const menuRoutes = require('./routes/menu');
const categoryRoutes = require('./routes/category');
const dishRoutes = require('./routes/dish');

// Routes Middleware
app.use('/menus', menuRoutes);
app.use('/categories', categoryRoutes);
app.use('/dishes', dishRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the restaurant API!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
