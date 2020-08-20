const authServices = require('../services/authServices');
const userServices = require('../services/userServices');

/**
 * User login.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const login = (req, res) => {
    const { email, password } = req.body;

    const user = userServices.verifyEmailAndPassword(email, password);

    if (user) {
        const token = authServices.generateToken(user);

        res.status(200).json({ token });
    } else {
        res.status(401).json({ message: `Email or password incorrect` });
    }
}

/**
 * Verify if the token set is correct as middleware.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 * @param {import('express').NextFunction} next Next function
 */
const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;

    const token = authorization && authorization.split(' ')[1];
    const userData = authServices.verifyToken(token);

    if (userData) {
        req.userData = userData;

        next();
    } else {
        res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = {
    login,
    verifyToken
}