const orderServices = require('../services/orderServices');

/**
 * Get Orders from Database and return an array of Orders.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getOrders = async (req, res) => {
    const orders = orderServices.getOrders();

    res.status(200).json({ orders });
}

/**
 * Get order by number.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getOrderById = (req, res) => {
    const { id } = req.params;
    const order = orderServices.getOrderById(id);

    res.status(200).json({ order });
}

/**
 * Create a new order.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const createOrder = (req, res) => {
    const { description, time, state, wayToPay, total } = req.body;

    if (description && time && state && wayToPay && total) {
        const orderId = orderServices.createOrder({ description, time, state, wayToPay, total });

        res.status(201).json({ orderId });
    } else {
        res.status(400).json({ message: 'Malformed body request' });
    }
}

/**
 * Update an order.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const updateOrder = (req, res) => {
    const orderProps = req.body;
    const { id } = req.params;

    orderServices.updateOrder(id, orderProps);

    res.status(200).json({ id });
}

/**
 * Delete an order.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const deleteOrder = (req, res) => {
    const { id } = req.params

    orderServices.deleteOrder(id);

    res.status(200).json({ id });
}

/**
 * Get orders from the given user.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getUserOrders = (req, res) => {
    const { id } = req.params;

    const orders = orderServices.getUserOrders(id);

    res.status(200).json({ orders });
}

/**
 * Middleware to verify if a product already exists.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const verifyIfOrderExists = (req, res, next) => {
    const { id } = req.params;
    const order = orderServices.getOrderById(id);

    if (!order) {
        res.status(404).json({ message: `Order with id ${id} not found` });
    }

    next();
}

module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    getUserOrders,
    verifyIfOrderExists
};