const Sequelize = require('sequelize');

const sequelize = Sequelize('');

/**
 * Get users from DB.
 * @returns {Object} Users list.
 */
const getAllUsersFromDB = async () => {
    const query = '';
    //TODO
    return await makeRequestOnDatabase(query);
}

/**
 * Get products from DB.
 * @returns {Object} Products list.
 */
const getAllProductsFromDB = async () => {
    const query = '';
    //TODO
    return await makeRequestOnDatabase(query);
}

/**
 * Get orders from DB.
 * @returns {Object} Orders list.
 */
const getAllOrdersFromDB = async () => {
    const query = '';
    //TODO
    return await makeRequestOnDatabase(query);
}

/**
 * Executes a query on Database.
 * @param {String} query SQL Query.
 * @returns {Object} Object with results or error.
 */
const makeRequestOnDatabase = async (query) => {
    try {
        const [results] = await sequelize.query(query, { raw: true });

        return { results };
    } catch (err) {
        return { error: err.original.sqlMessage };
    }
}

module.exports = {
    getAllUsersFromDB,
    getAllProductsFromDB,
    getAllOrdersFromDB
}