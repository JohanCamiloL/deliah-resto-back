const database = require('../config/database');

/**
 * Get Products from Database and return an Array of Products.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getProducts = async (req, res) => {
    const { results, error } = await database.getAllProductsFromDB();
    if (error) {
        res.status(400)
            .json(error);
    } else {
        res.status(400)
            .json(results);
    }
}

/**
 * Get product by its ID.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getProductById = (req, res) => {
    res.send('Todo');
    //TODO
}

module.exports = { getProducts, getProductById };