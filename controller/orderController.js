const orderServices = require('../services/orderServices');

/**
 * Get Orders from Database and return an array of Orders.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const getOrders = async (req, res, next) => {
    try {
        const orders = await orderServices.getOrders();

        res.status(200).json({ data: orders });
    } catch (error) {
        next(error);
    }
}

/**
 * Get order by id.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const getOrderById = (req, res, next) => {
    const { id } = req.params;

    try {
        const order = orderServices.getOrderById(id);

        res.status(200).json({ data: order });
    } catch (error) {
        next(error);
    }
}

/**
 * Create a new order.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const createOrder = async (req, res, next) => {
    const { id } = req.userData;
    const { description, time, state, wayToPay, total, products } = req.body;

    if (description && time && state && wayToPay && total && products) {
        try {
            const orderId = await orderServices.createOrder(id, req.body);

            res.status(201).json({ data: orderId });
        } catch (error) {
            next(error);
        }
    } else {
        res.status(400).json({ message: 'Malformed body request' });
    }
}

/**
 * Update an order.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const updateOrder = async (req, res, next) => {
    const orderProps = req.body;
    const { id } = req.params;

    try {
        await orderServices.updateOrder(parseInt(id), orderProps);

        res.status(200).json({ data: id });
    } catch (error) {
        next(error);
    }
}

/**
 * Delete an order.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const deleteOrder = async (req, res, next) => {
    const { id } = req.params

    try {
        await orderServices.deleteOrder(id);

        res.status(200).json({ data: id });
    } catch (error) {
        next(error);
    }
}

/**
 * Get orders from the given user.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const getUserOrders = async (req, res, next) => {
    const { id } = req.params;

    try {
        const orders = await orderServices.getUserOrders(id);

        res.status(200).json({ data: orders });
    } catch (error) {
        next(error);
    }
}

/**
 * Get all products from the given order.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const getOrderProducts = async (req, res, next) => {
    const { id } = req.params;

    try {
        const products = await orderServices.getOrderProducts(id);

        res.status(200).json({ data: products });
    } catch (error) {
        next(error);
    }
}

/**
 * Middleware to verify if a product already exists.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const verifyIfOrderExists = async (req, res, next) => {
    const { id } = req.params;

    try {
        const order = await orderServices.getOrderById(id);

        if (!order) {
            res.status(404).json({ error: `Order with id ${id} not found` });
        } else {
            next();
        }

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    getUserOrders,
    verifyIfOrderExists,
    getOrderProducts
};