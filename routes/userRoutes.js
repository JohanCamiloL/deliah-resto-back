const userController = require('../controller/userController');

/**
 * 
 * @param {import('express').Express} app 
 */
module.exports = (app) => {
    app.get('/users', userController.getUsers);

    app.post('/users', userController.createUser);

    app.put('/users/:id', userController.verifyIfUserExistsById, userController.updateUser);

    app.get('/users/:id', userController.verifyIfUserExistsById, userController.getUserById);

    app.delete('/users/:id', userController.verifyIfUserExistsById, userController.deleteUser);
}