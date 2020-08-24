const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const databaseName = process.env.DATABASE_NAME;
const databaseUser = process.env.DATABASE_USER;
const databasePassword = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

/**
 * Execute the given query on database.
 * @param {String} query SQL Query.
 * @returns {Object} Query results promise.
 */
const executeQuery = async (query) => {
    return sequelize.query(query, { raw: true });
}

module.exports = {
    executeQuery
};