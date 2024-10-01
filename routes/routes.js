const CategoryController = require('../controllers/category.controller');

const routes = (req, res) => {
    if (req.method === 'GET' && req.url === '/categories') {
        CategoryController.getAllCategories(req, res);
    } else if (req.method === 'POST' && req.url === '/categories') {
        CategoryController.createCategory(req, res);
    }
};

module.exports = routes;
