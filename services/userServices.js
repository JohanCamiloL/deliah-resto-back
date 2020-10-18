const { executeQuery } = require('../config/database');

/**
 * Get all users from database.
 * @returns {Array} Users array.
 */
const getUsers = async () => {
    const query = 'SELECT * FROM User;';
    const results = await executeQuery(query, true);

    return results;
}

/**
 * Get user by the given id from the database.
 * @param {String} id User id.
 * @returns {User} User object.
 */
const getUserById = async (id) => {
    const query = 'SELECT * FROM User WHERE id = :id;';
    const results = await executeQuery(query, true, { id });

    return results[0];
}

/**
 * Creates an user on database.
 * @param {Object} userProps Users object.
 * @returns {String} User id.
 */
const createUser = async (userProps) => {
    const query = `INSERT INTO User (username, fullname, email, phone, address, password) 
        VALUES (:username, :fullname, :email, :phone, :address, :password);`;

    const result = await executeQuery(query, false, userProps);

    return result[0];
}

/**
 * Get user by its username.
 * @param {String} username User username.
 * @returns {User} User.
 */
const getUserByUsername = async (username) => {
    const query = `SELECT * FROM User WHERE username = :username`;
    const results = await executeQuery(query, true, { username });

    return results[0];
}

/**
 * Get user by its email.
 * @param {String} email User email.
 * @returns {User} User object.
 */
const getUserByEmail = async (email) => {
    const query = `SELECT * FROM User WHERE email = :email`;
    const results = await executeQuery(query, true, { email });

    return results[0];
}

/**
 * Updates an user by the given id.
 * @param {String} id User id.
 * @param {Object} properties New user properties.
 */
const updateUser = async (id, properties) => {
    const { username, fullname, email, phone, address, password } = properties;
    const user = await getUserById(id);

    const query = `
        UPDATE User
        SET username = '${username || user.username}',
        fullname = '${fullname || user.fullname}',
        email = '${email || user.email}',
        phone = '${phone || user.phone}',
        address = '${address || user.address}',
        password = '${password || user.password}'
        WHERE id = ${id}`;

    await executeQuery(query);
}

/**
 * Deletes an user by the given id.
 * @param {String} id User id.
 */
const deleteUserById = async (id) => {
    const query = `DELETE FROM User WHERE id = ${id}`;

    await executeQuery(query);
}

/**
 * Verify user email and password.
 * @param {String} email User email.
 * @param {String} password User password.
 * @returns {Boolean} User exists.
 */
const verifyEmailAndPassword = async (email, password) => {
    const user = await getUserByEmail(email);

    if (!user) return false;

    return (user.password === password) ? user : false;
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    getUserByUsername,
    getUserByEmail,
    updateUser,
    deleteUserById,
    verifyEmailAndPassword
};