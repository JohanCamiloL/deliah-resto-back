const User = require('../model/User');

let fakeUsers = [
    new User('name1', 'fullname1', 'email1', 'phone1', 'address1', 'password1'),
    new User('name2', 'fullname2', 'email2', 'phone2', 'address2', 'password2')
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
    const user = new User(username, fullname, email, phone, address, password);

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

module.exports = {
    getUsers,
    getUserById,
    createUser,
    getUserByUsername,
    getUserByEmail,
    updateUser,
    deleteUserById
};