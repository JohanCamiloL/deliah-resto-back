const Product = require('../model/Product');

let fakeProducts = [
    new Product('name1', 1, 1),
    new Product('name2', 2, 2),
];

/**
 * Get all products.
 */
const getProducts = () => {
    const query = '';

    return fakeProducts;
}

/**
 * Get product by the given id.
 * @param {String} id Product id.
 * @returns {Product} Product object.
 */
const getProductById = (id) => {
    const query = '';

    return fakeProducts.find(product => product.id == id);
}

/**
 * Create a new product.
 * @param {Object} productProps Product properties.
 * @returns {String} Product id.
 */
const createProduct = (productProps) => {
    const { name, price, amount } = productProps;
    const query = '';
    const product = new Product(name, price, amount);

    fakeProducts.push(product);

    return 0;
}

/**
 * Updates a product by the given Id.
 * @param {String} id Product id.
 * @param {Object} productProps Product props.
 */
const updateProduct = (id, productProps) => {
    const { name, price, amount } = productProps;
    const query = '';
    const product = getProductById(id);

    product.name = name | product.name;
    product.price = price | product.price;
    product.amount = amount | product.amount;
}

/**
 * Delete a product by the given id.
 * @param {String} id Product id.
 */
const deleteProduct = (id) => {
    const query = '';
    const filteredProducts = fakeProducts.filter(product => product.id != id);

    fakeProducts = filteredProducts;
}

/**
 * Get product by the given name.
 * @param {String} name Product name.
 * @returns {Product} Product.
 */
const getProductByName = (name) => {
    const query = '';

    return fakeProducts.find(product => product.name == name);
}

module.exports = {
    getProductById,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByName
};