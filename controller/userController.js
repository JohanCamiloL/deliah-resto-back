const database = require('../config/database');

/**
 * Get Users from Database and return an Array of Users.
 * @param {object} req Client request.
 * @param {object} res Client response.
 */
const getUsers = async (req, res) => {
    const { results, error } = await database.getAllUsersFromDB();
    if (error) {
        res.status(400)
            .json(error);
    } else {
        res.status(200)
            .json(results);
    }
}

/**
 * Get user by its ID.
 * @param {object} req Client request.
 * @param {object} res Client response.
 */
const getUserById = (req, res) => {
    res.send('Todo');
    //TODO
}

module.exports = { getUserById, getUsers };