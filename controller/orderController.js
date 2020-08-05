const database = require('../config/database');

/**
 * Get Orders from Database and return an array of Orders.
 * @param {object} req Client request.
 * @param {object} res Client response.
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
 * @param {object} req Client request.
 * @param {object} res Client response.
 */
const getOrderByNumber = (req, res) => {
    res.send('Todo');
    // TODO
}

module.exports = { getOrders, getOrderByNumber };