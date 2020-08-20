const Order = require('../model/Order');

let fakeOrders = [
    new Order('Description1', 'Time1', 'State1', 'WayToPay1', 1),
    new Order('Description2', 'Time2', 'State2', 'WayToPay2', 2),
    new Order('Description3', 'Time3', 'State3', 'WayToPay3', 3)
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
    const query = '';
    const order = new Order(description, time, state, wayToPay, total);

    fakeOrders.push(order);

    return 0;
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
    const filteredOrders = fakeOrders.find(order => order.id == id);

    fakeOrders = filteredOrders;
}

/**
 * Get all orders from the given user.
 * @param {String} userId User id.
 * @returns {Array} Orders array.
 */
const getUserOrders = (userId) => {
    const query = '';
}

module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    getUserOrders
}