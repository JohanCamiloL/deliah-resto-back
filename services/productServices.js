const Product = require('../model/Product');
const database = require('../config/database');

/**
 * Get all products.
 */
const getProducts = async () => {
    const query = 'SELECT * FROM Product;';

    const result = await database.executeQuery(query, true);

    return result;
}

/**
 * Get product by the given id.
 * @param {String} id Product id.
 * @returns {Promise} Product object.
 */
const getProductById = async (id) => {
    const query = 'SELECT * FROM Product WHERE id = :id;';

    const result = await database.executeQuery(query, true, { id });

    return result[0];
}

/**
 * Create a new product.
 * @param {Object} productProps Product properties.
 * @returns {String} Product id.
 */
const createProduct = async (productProps) => {
    const query = `
        INSERT INTO Product (name, price, amount)
        VALUES (:name, :price, :amount);
    `;

    const result = await database.executeQuery(query, false, productProps);

    return result[0];
}

/**
 * Updates a product by the given Id.
 * @param {String} id Product id.
 * @param {Object} productProps Product props.
 */
const updateProduct = async (id, productProps) => {
    const { name, price, amount } = productProps;
    const product = await getProductById(id);

    const query = `
        UPDATE Product
        SET name = '${name || product.name}',
        price = ${price || product.price},
        amount = ${amount || product.amount}
        WHERE id = ${id};
    `;

    await database.executeQuery(query);
}

/**
 * Delete a product by the given id.
 * @param {String} id Product id.
 */
const deleteProduct = async (id) => {
    const query = 'DELETE FROM Product WHERE id = :id;';

    await database.executeQuery(query, false, { id });
}

/**
 * Get product by the given name.
 * @param {String} name Product name.
 * @returns {Product} Product.
 */
const getProductByName = async (name) => {
    const query = 'SELECT * FROM Product WHERE name = :name;';

    const result = await database.executeQuery(query, true, { name });

    return result[0];
}

module.exports = {
    getProductById,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByName
};