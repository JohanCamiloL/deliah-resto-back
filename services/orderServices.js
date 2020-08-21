const Order = require('../model/Order');

let fakeOrders = [
    new Order(500000, 1, 'Description1', 'Time1', 'State1', 'WayToPay1', 1),
    new Order(500001, 2, 'Description2', 'Time2', 'State2', 'WayToPay2', 2),
    new Order(500002, 3, 'Description3', 'Time3', 'State3', 'WayToPay3', 3)
];

/**
 * Get all orders.
 * @returns {Array} Orders array.
 */
const getOrders = () => {
    const query = '';

    return fakeOrders;
}

/**
 * Get an order by the given id.
 * @param {String} id Order id.
 * @returns {Order} Order object.
 */
const getOrderById = (id) => {
    const query = '';

    return fakeOrders.find(order => order.id == id);
}

/**
 * Create a new order.
 * @param {Object} orderProps Order properties.
 * @returns {String} Order id.
 */
const createOrder = (orderProps) => {
    const { description, time, state, wayToPay, total } = orderProps;
    const { id } = req.userData;
    const query = '';
    const orderId = fakeOrders[fakeOrders.length - 1].id + 1;
    const order = new Order(orderId, id, description, time, state, wayToPay, total);

    fakeOrders.push(order);

    return orderId;
}

/**
 * Update the order by the given id.
 * @param {String} id Order id.
 * @param {Object} orderProps 
 */
const updateOrder = (id, orderProps) => {
    const { description, time, state, wayToPay, total } = orderProps;
    const query = '';
    const order = getOrderById(id);

    order.description = description || order.description;
    order.time = time || order.time;
    order.state = state || order.state;
    order.wayToPay = wayToPay || order.wayToPay;
    order.total = total || order.total;
}

/**
 * Delete an order with the given id.
 * @param {String} id Order id.
 */
const deleteOrder = (id) => {
    const query = '';
    const filteredOrders = fakeOrders.filter(order => order.id != id);

    fakeOrders = filteredOrders;
}

/**
 * Get all orders from the given user.
 * @param {String} userId User id.
 * @returns {Array} Orders array.
 */
const getUserOrders = (userId) => {
    const query = '';
    const orders = fakeOrders.filter(order => order.userId == userId);

    return orders;
}

module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    getUserOrders
}