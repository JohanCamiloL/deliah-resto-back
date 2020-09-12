const database = require('../config/database');

/**
 * Get all orders.
 * @returns {Array} Orders array.
 */
const getOrders = async () => {
    const query = 'SELECT * FROM ResOrder';

    const result = await database.executeQuery(query, true);

    return result;
}

/**
 * Get an order by the given id.
 * @param {String} id Order id.
 * @returns {Order} Order object.
 */
const getOrderById = async (id) => {
    const query = 'SELECT * FROM ResOrder WHERE id = :id';

    const result = await database.executeQuery(query, true, { id });

    return result[0];
}

/**
 * Create a new order.
 * @param {Number} userId User id
 * @param {Object} orderProps Order properties.
 * @returns {String} Order id.
 */
const createOrder = async (userId, orderProps) => {
    orderProps.userId = userId;

    const query = `
        INSERT INTO ResOrder (userId, description, time, state, wayToPay, total)
        VALUES (:userId, :description, :time, :state, :wayToPay, :total);
    `;


    const result = await database.executeQuery(query, false, orderProps);

    const orderProductQuery = `
        INSERT INTO OrderProduct (orderId, productId)
        VALUES (:orderId, :productId)
    `;

    orderProps.products.forEach(async productId => {
        await database.executeQuery(orderProductQuery, false, { orderId: result[0], productId });
    });

    return result[0];
}

/**
 * Update the order by the given id.
 * @param {String} id Order id.
 * @param {Object} orderProps 
 */
const updateOrder = async (id, orderProps) => {
    const { description, state } = orderProps;
    const order = await getOrderById(id);

    const query = `
        UPDATE ResOrder
        SET description = '${description || order.description}',
        state = '${state || order.state}'
        WHERE id = :id
    `;

    await database.executeQuery(query, false, { id });
}

/**
 * Delete an order with the given id.
 * @param {String} id Order id.
 */
const deleteOrder = async (id) => {
    const query = 'DELETE FROM ResOrder WHERE id = :id';

    await database.executeQuery(query, false, { id });
}

/**
 * Get all orders from the given user.
 * @param {String} userId User id.
 * @returns {Array} Orders array.
 */
const getUserOrders = async (userId) => {
    const query = 'SELECT * FROM ResOrder WHERE userId = :userId';
    const result = await database.executeQuery(query, true, { userId });

    return result;
}

/**
 * Get products from order.
 * @param {Number} orderId Order id.
 * @returns {Array} Order products list.
 */
const getOrderProducts = async (orderId) => {
    const query = `
        SELECT name, price FROM Product
        JOIN OrderProduct ON Product.id = OrderProduct.productId
        WHERE OrderProduct.orderId = :orderId;
    `;

    const result = database.executeQuery(query, true, { orderId });

    return result;
}

module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    getUserOrders,
    getOrderProducts
}