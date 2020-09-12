const orderController = require('../controller/orderController');
const userController = require('../controller/userController');
const authController = require('../controller/authController');

/**
 * 
 * @param {import('express').Express} app 
 */
module.exports = (app) => {
    app.use('/orders', authController.verifyToken);

    app.get('/orders', userController.verifyUserIdRequestAndRole, orderController.getOrders);

    app.post('/orders', orderController.createOrder);

    app.get('/orders/:id', userController.verifyUserIdRequestAndRole,
        orderController.verifyIfOrderExists, orderController.getOrderById);

    app.put('/orders/:id', userController.verifyUserIdRequestAndRole,
        orderController.verifyIfOrderExists, orderController.updateOrder);

    app.delete('/orders/:id', userController.verifyUserIdRequestAndRole,
        orderController.verifyIfOrderExists, orderController.deleteOrder);

    app.get('/orders/users/:id', authController.verifyToken, userController.verifyUserIdRequestAndRole,
        userController.verifyIfUserExistsById, orderController.getUserOrders);

    app.get('/orders/:id/products', userController.verifyUserIdRequestAndRole,
        orderController.verifyIfOrderExists, orderController.getOrderProducts);
}