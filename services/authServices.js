const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

/**
 * Generates a new token from the given user.
 * @param {User} user User object
 * @returns {String} Token.
 */
const generateToken = (user) => {
    return token = jwt.sign({
        id: user.id,
        username: user.username,
        email: user.email,
        rol: user.role
    }, process.env.SECRET_KEY);
}

/**
 * Verifies if the token sent in the request is valid.
 * @param {String} token Token.
 * @returns {Object} Token payload.
 */
const verifyToken = (token) => {
    try {
        const data = jwt.verify(token, process.env.SECRET_KEY);

        return data;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken
};