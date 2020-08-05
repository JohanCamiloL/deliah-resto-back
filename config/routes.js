const userController = require('../controller/userController');
const orderController = require('../controller/orderController');
const productController = require('../controller/productController');

module.exports = (app) => {
    app.get('/users', userController.getUsers);

    app.get('/products', productController.getProducts);

    app.get('/orders', orderController.getOrders);
}