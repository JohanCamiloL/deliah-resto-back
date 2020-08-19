const orderController = require('../controller/orderController');
const userController = require('../controller/userController');

/**
 * 
 * @param {import('express').Express} app 
 */
module.exports = (app) => {
    app.get('/orders', orderController.getOrders);

    app.post('/orders', orderController.createOrder);

    app.get('/orders/:id', orderController.verifyIfOrderExists, orderController.getOrderById);

    app.put('/orders/:id', orderController.verifyIfOrderExists, orderController.updateOrder);

    app.delete('/orders/:id', orderController.verifyIfOrderExists, orderController.deleteOrder);

    app.get('/users/:id/orders', userController.verifyIfUserExistsById,
        orderController.verifyIfOrderExists, orderController.getUserOrders);
}