const userServices = require('../services/userServices');

/**
 * Get Users from Database and return an Array of Users.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getUsers = async (req, res) => {
    const users = userServices.getUsers();

    res.status(200).json({ users });
}

/**
 * Get user by its ID.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getUserById = (req, res) => {
    const { id } = req.params;

    const user = userServices.getUserById(id);

    res.status(200).json({ user });
}

/**
 * Creates a new user.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const createUser = (req, res) => {
    const { username, fullname, email, phone, address, password } = req.body;

    if (username && fullname && email && phone && address && password) {
        const userByUsername = userServices.getUserByUsername(username);
        const userByEmail = userServices.getUserByEmail(email);

        if (userByUsername) {
            res.status(409).json({ message: `User with username ${username} already exists` });
        } else if (userByEmail) {
            res.status(409).json({ message: `User with email ${email} already exists` });
        } else {
            const userId = userServices.createUser({ username, fullname, email, phone, address, password });

            res.status(201).json({ userId });
        }
    } else {
        res.status(400).json({ message: 'Malformed body' });
    }
}

/**
 * Updates an user.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const updateUser = (req, res) => {
    const { id } = req.params;
    const properties = req.body;

    userServices.updateUser(id, properties);

    res.status(200).json({ id });
}

/**
 * Delete user by the given id.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const deleteUser = (req, res) => {
    const { id } = req.params;

    userServices.deleteUserById(id);

    res.status(200).json({ id });
}

/**
 * Verifies if an user exists by the given id.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const verifyIfUserExistsById = (req, res, next) => {
    const { id } = req.params;

    const user = userServices.getUserById(id);

    if (user) {
        next();
    } else {
        res.status(404).json({ message: `User with id ${id} not found` });
    }
}

/**
 * Verify if the user that sends the request is the same that the id in the path params
 * or has admin role.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const verifyUserIdRequestAndRole = (req, res, next) => {
    const { id } = req.params;
    const userId = req.userData.id;
    const { rol } = req.userData;

    console.log(req.userData);

    if (id == userId || rol === 'admin') {
        next();
    } else {
        res.status(401).json({ error: 'You can\'t look at other users info' });
    }
}

module.exports = {
    getUserById,
    getUsers,
    createUser,
    updateUser,
    verifyIfUserExistsById,
    deleteUser,
    verifyUserIdRequestAndRole
};