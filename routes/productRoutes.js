const productController = require('../controller/productController');

/**
 * 
 * @param {import('express').Express} app 
 */
module.exports = (app) => {
    app.get('/products', productController.getProducts);

    app.post('/products', productController.createProduct);

    app.get('/products/:id', productController.verifyIfProductExistsById, productController.getProductById);

    app.put('/products/:id', productController.verifyIfProductExistsById, productController.updateProduct);

    app.delete('/products/:id', productController.verifyIfProductExistsById, productController.deleteProduct);
}