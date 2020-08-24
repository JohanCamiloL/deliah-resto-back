const database = require('./database');

/**
 * Execute a new query on database.
 * @param {String} query SQL Query.
 */
const executeQuery = async (query) => {
    try {
        await database.query(query, { raw: true });
    } catch (error) {
        console.log(error.message);
    }
}

(async () => {
    await executeQuery(`CREATE TABLE User (
        id int primary key auto_increment, 
        username varchar(60) not null, 
        fullname varchar(60) not null, 
        email varchar(60) not null, 
        phone varchar(20) not null, 
        address varchar(60) not null, 
        role varchar(10) not null default 'user', 
        password varchar(60) not null, 
        constraint user_unique_constraint UNIQUE(username, email, phone)
    );`);

    await executeQuery(`CREATE TABLE ResOrder (
        id int primary key auto_increment,
        userId int unsigned,
        description text not null, 
        time varchar(10) not null, 
        state varchar(20) not null, 
        wayToPay varchar(10) not null, 
        total int not null);`)

    await executeQuery(`CREATE TABLE Product (
        id int primary key auto_increment,
        name varchar(60) unique not null,
        price int unsigned,
        amount int unsigned
    );`);

    await executeQuery(`CREATE TABLE OrderProduct (
        orderId int not null,
        productId int not null,
        primary key(orderId, productId)
    );`);
})();