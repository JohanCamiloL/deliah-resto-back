const productServices = require('../services/productServices');

/**
 * Get Products from Database and return an Array of Products.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getProducts = async (req, res) => {
    const products = productServices.getProducts();
    res.status(200).json({ products });
}

/**
 * Get product by its ID.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getProductById = (req, res) => {
    const { id } = req.params;
    const product = productServices.getProductById(id);

    res.status(200).json({ product });
}

/**
 * Creates a new product on db.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const createProduct = (req, res) => {
    const { name, price, amount } = req.body;

    const productByName = productServices.getProductByName(name);

    if (productByName) {
        res.status(409).json({ message: `A product with name ${name} already exists` });
    }

    if (name && price && amount) {
        const productId = productServices.createProduct({ name, price, amount });

        res.status(201).json({ productId });
    } else {
        res.status(400).json({ message: 'Malformed request' });
    }
}

/**
 * Updates a product.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const updateProduct = (req, res) => {
    const { id } = req.params;
    const properties = req.body;

    productServices.updateProduct(id, properties);

    res.status(200).json({ id });
}

/**
 * Delete a product.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const deleteProduct = (req, res) => {
    const { id } = req.params;

    productServices.deleteProduct(id);

    res.status(200).json({ id });
}

/**
 * Verifies if a product with a given id already exists.
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 * @param {import('express').NextFunction} next Next function
 */
const verifyIfProductExistsById = (req, res, next) => {
    const { id } = req.params;
    const product = productServices.getProductById(id);

    if (!product) {
        res.status(404).json({ message: `Product with id ${id} not found` });
    }

    next();
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    verifyIfProductExistsById
};