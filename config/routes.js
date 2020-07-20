const controller = require('../controller/controller')

/**
 * Generate Express routes
 * @param {Express} app 
 */
const routes = (app) => {
    app.get('/products', controller.getProducts);

    app.get('/users', controller.getUsers);

    app.get('/orders', controller.getOrders);
}

module.exports = routes;