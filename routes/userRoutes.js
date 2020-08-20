const userController = require('../controller/userController');
const authController = require('../controller/authController');

/**
 * 
 * @param {import('express').Express} app 
 */
module.exports = (app) => {
    app.get('/users', authController.verifyToken, userController.verifyUserIdRequestAndRole,
        userController.getUsers);

    app.post('/users', userController.createUser);

    app.put('/users/:id', authController.verifyToken, userController.verifyUserIdRequestAndRole,
        userController.verifyIfUserExistsById, userController.updateUser);

    app.get('/users/:id', authController.verifyToken, userController.verifyUserIdRequestAndRole,
        userController.verifyIfUserExistsById, userController.getUserById);

    app.delete('/users/:id', authController.verifyToken, userController.verifyUserIdRequestAndRole,
        userController.verifyIfUserExistsById, userController.deleteUser);
}