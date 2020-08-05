const Sequelize = require('sequelize');

//const sequelize = new Sequelize('');

/**
 * Get users from DB.
 * @returns {Object} Query state.
 */
const getAllUsersFromDB = async () => {
    const query = '';
    //TODO
    return await makeRequestOnDatabase(query);
}

/**
 * Get products from DB.
 * @returns {Object} Query state.
 */
const getAllProductsFromDB = async () => {
    const query = '';
    //TODO
    return await makeRequestOnDatabase(query);
}

/**
 * Get orders from DB.
 * @returns {Object} Query state.
 */
const getAllOrdersFromDB = async () => {
    const query = '';
    //TODO
    return await makeRequestOnDatabase(query);
}

/**
 * Saves an user on DB.
 * @param {Object} userObject User object.
 * @returns {Object} Query state.
 */
const saveUserOnDB = async (userObject) => {
    const { userName, fullName, email, phone, address, password } = userObject;

    const query = '';

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
    getAllOrdersFromDB,
    saveUserOnDB
}