const productServices = require('../services/productServices');

/**
 * Get Products from Database and return an Array of Products.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const getProducts = async (req, res, next) => {
    try {
        const products = await productServices.getProducts();

        res.status(200).json({ data: products });
    } catch (error) {
        next(error);
    }
}

/**
 * Get product by its ID.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const getProductById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const product = await productServices.getProductById(id);

        res.status(200).json({ data: product });
    } catch (error) {
        next(error);
    }
}

/**
 * Creates a new product on db.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const createProduct = async (req, res, next) => {
    const { name, price, amount } = req.body;

    try {
        const productByName = await productServices.getProductByName(name);

        if (productByName) {
            res.status(409).json({ error: `A product with name ${name} already exists` });
            return;
        }

        if (name && price && amount) {
            const productId = await productServices.createProduct(req.body);

            res.status(201).json({ data: productId });
        } else {
            res.status(400).json({ error: 'Malformed request' });
        }

    } catch (error) {
        next(error);
    }
}

/**
 * Updates a product.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const updateProduct = async (req, res, next) => {
    const { id } = req.params;

    try {
        await productServices.updateProduct(id, req.body);

        res.status(200).json({ data: id });
    } catch (error) {
        next(error);
    }
}

/**
 * Delete a product.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const deleteProduct = async (req, res, next) => {
    const { id } = req.params;

    try {
        await productServices.deleteProduct(id);

        res.status(200).json({ data: id });
    } catch (error) {
        next(error);
    }
}

/**
 * Verifies if a product with a given id already exists.
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 * @param {import('express').NextFunction} next Next function
 */
const verifyIfProductExistsById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const product = await productServices.getProductById(id);

        if (!product) {
            res.status(404).json({ error: `Product with id ${id} not found` });
        } else {
            next();
        }

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    verifyIfProductExistsById
};