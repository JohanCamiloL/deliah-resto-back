const User = require('../model/User');

let fakeUsers = [
    new User(1, 'name1', 'fullname1', 'email1', 'phone1', 'address1', 'password1'),
    new User(2, 'name2', 'fullname2', 'email2', 'phone2', 'address2', 'password2'),
    new User(3, 'Admin', 'Admin', 'adminmail', 'Adminphone', 'Adminaddress', 'password3', 'admin'),
];

/**
 * Get all users from database.
 * @returns {Array} Users array.
 */
const getUsers = () => {
    const query = '';

    return fakeUsers;
}

/**
 * Get user by the given id from the database.
 * @param {String} id User id.
 * @returns {User} User object.
 */
const getUserById = (id) => {
    const query = '';

    return fakeUsers.find(user => user.id == id);
}

/**
 * Creates an user on database.
 * @param {Object} userProps Users object.
 * @returns {String} User id.
 */
const createUser = (userProps) => {
    const { username, fullname, email, phone, address, password } = userProps;
    const userId = fakeUsers[fakeUsers.length - 1].id + 1;

    const user = new User(userId, username, fullname, email, phone, address, password);

    const query = '';

    fakeUsers.push(user);

    return 0;
}

/**
 * Get user by its username.
 * @param {String} username User username.
 * @returns {User} User.
 */
const getUserByUsername = (username) => {
    const query = '';

    return fakeUsers.find(user => user.username == username);
}

/**
 * Get user by its email.
 * @param {String} email User email.
 * @returns {User} User object.
 */
const getUserByEmail = (email) => {
    const query = '';

    return fakeUsers.find(user => user.email == email);
}

/**
 * Updates an user by the given id.
 * @param {String} id User id.
 * @param {Object} properties New user properties.
 */
const updateUser = (id, properties) => {
    const { username, fullname, email, phone, address, password } = properties;
    const query = '';

    const user = getUserById(id);

    user.username = username | user.username;
    user.fullname = fullname | user.fullname;
    user.email = email | user.email;
    user.phone = phone | user.phone;
    user.address = address | user.address;
    user.password = password | user.password;
}

/**
 * Deletes an user by the given id.
 * @param {String} id User id.
 */
const deleteUserById = (id) => {
    const filteredUsers = fakeUsers.filter(user => user.id != id);

    fakeUsers = filteredUsers;
}

/**
 * Verify user email and password.
 * @param {String} email User email.
 * @param {String} password User password.
 * @returns {Boolean} User exists.
 */
const verifyEmailAndPassword = (email, password) => {
    const user = getUserByEmail(email);

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