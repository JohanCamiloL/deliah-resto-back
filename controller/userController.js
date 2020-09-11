const userServices = require('../services/userServices');

/**
 * Get Users from Database and return an Array of Users.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const getUsers = async (req, res, next) => {
    try {
        const users = await userServices.getUsers();

        res.status(200).json({ users });
    } catch (error) {
        next(error);
    }
}

/**
 * Get user by its ID.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const getUserById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const user = await userServices.getUserById(id);

        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
}

/**
 * Creates a new user.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const createUser = async (req, res, next) => {
    const { username, fullname, email, phone, address, password } = req.body;

    if (username && fullname && email && phone && address && password) {
        const userByUsername = await userServices.getUserByUsername(username);
        const userByEmail = await userServices.getUserByEmail(email);

        if (userByUsername) {
            res.status(409).json({ message: `User with username ${username} already exists` });
        } else if (userByEmail) {
            res.status(409).json({ message: `User with email ${email} already exists` });
        } else {
            try {
                const userId = await userServices.createUser(req.body);

                res.status(201).json({ userId });
            } catch (error) {
                next(error);
            }
        }
    } else {
        res.status(400).json({ message: 'Malformed body' });
    }
}

/**
 * Updates an user.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const properties = req.body;

    try {
        await userServices.updateUser(id, properties);

        res.status(200).json({ id });
    } catch (error) {
        next(error);
    }
}

/**
 * Delete user by the given id.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const deleteUser = async (req, res, next) => {
    const { id } = req.params;

    try {
        await userServices.deleteUserById(id);

        res.status(200).json({ id });
    } catch (error) {
        next(error);
    }
}

/**
 * Verifies if an user exists by the given id.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const verifyIfUserExistsById = async (req, res, next) => {
    const { id } = req.params;

    let user;

    try {
        user = await userServices.getUserById(id);
    } catch (error) {
        next(error);
    }

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

    if (id == userId || rol === 'admin') {
        next();
    } else {
        res.status(401).json({ error: 'You don\'t have rights to make this request' });
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