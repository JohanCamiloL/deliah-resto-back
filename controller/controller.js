const Pedido = require('../model/Order');
const Producto = require('../model/Product');
const Usuario = require('../model/User');

/**
 * Get Users from Database and return an Array of Users.
 * @param {object} req Client request.
 * @param {object} res Client response.
 */
const getUsers = (req, res) => {
    res.send('Todo');
    //TODO
}

/**
 * Get Products from Database and return an Array of Products.
 * @param {object} req Client request.
 * @param {object} res Client response.
 */
const getProducts = (req, res) => {
    res.send('Todo');
    //TODO
}

/**
 * Get Orders from Database and return an array of Orders.
 * @param {object} req Client request.
 * @param {object} res Client response.
 */
const getOrders = (req, res) => {
    res.send('Todo');
    //TODO
}
/**
 * Get user by its ID.
 * @param {object} req Client request.
 * @param {object} res Client response.
 */
const getUserById = (req, res) => {
    res.send('Todo');
    //TODO
}

/**
 * Get product by its ID.
 * @param {object} req Client request.
 * @param {object} res Client response.
 */
const getProductoById = (req, res) => {
    res.send('Todo');
    //TODO
}

/**
 * Get order by number.
 * @param {object} req Client request.
 * @param {object} res Client response.
 */
const getOrderByNumber = (req, res) => {
    res.send('Todo');
    // TODO
}

module.exports = {
    getUsers,
    getUserById,
    getProducts,
    getProductoById,
    getOrders,
    getOrderByNumber
}