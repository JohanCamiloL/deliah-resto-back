const database = require('../config/database');

/**
 * Get Orders from Database and return an array of Orders.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getOrders = async (req, res) => {
    const { results, error } = await database.getAllOrdersFromDB();

    if (error) {
        res.status(400)
            .json(error);
    } else {
        res.status(200)
            .json(results);
    }
}

/**
 * Get order by number.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getOrderByNumber = (req, res) => {
    res.send('Todo');
    // TODO
}

module.exports = { getOrders, getOrderByNumber };