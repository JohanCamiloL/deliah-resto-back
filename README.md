# Delilah resto Backend
Backend developed with NodeJS which comprends the Deliah Restaurant logic

# Installation
- Clone the repository on your local machine.
- This project uses a remote MySQL engine instance on remotemysql.com, so you don't have to install MySQL on your localmachine, if you prefer to use local MySQL engine you have to set the host on config/database.js file to localhost.

```
const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
    host: 'localhost',
    dialect: 'mysql'
});
```

- We have created a .env file to don't put critical information on the source code, this file contains 4 variables, 3 related to Database connection and 1 to create the JWT Token. You have to create this file called `.env`
 and put the next variables on it: `DATABASE_USER`, `DATABASE_NAME`, `DATABASE_PASSWORD` and `SECRET_KEY`, this file should be created on the root folder. The file should look like this:
 ```
DATABASE_USER=MyDatabaseUser
DATABASE_NAME=MyDatabaseName
DATABASE_PASSWORD=MyDatabasePassword
SECRET_KEY=MySecretKey
 ```

- Once you have the file created, you can install all the necessary dependencies running the next script `npm install` on the root folder and this will download the dependencies (You have to install npm if you don't have it).

- If you are using a new database, you have to run a file called `databaseInit.js` with the script `node databaseInit.js` placed on the config folder, this will create all the tables on the given database.
- If you are not using a new database, you can use the next evironment variables to connect to the remote MySQL engine:
```
DATABASE_USER=yFmHfRwPkD
DATABASE_NAME=yFmHfRwPkD
DATABASE_PASSWORD=YWB9yBWPoH
```

- You have to consider that you have to create the environment variable `SECRET_KEY` no matter if you are or aren't using a remote MySQL engine.

# How to use
- Once you have all the dependencies installed and files created you can run the server, this will run the express server and create the database connection to run all the neccesary queries. To run the server, you have to run the script `node server.js` on the root folder, this will show you on the terminal the port where the server is listening for requests and the database connection message.
- To use a user as admin, yo have to run an own database query to create a user with admin role. You can execute this example query or create yor own. With this, you can test all the admin requirements.
```
INSERT INTO User VALUES ('admin', 'Admin full name', 'admin@mail.com', '3124124342', 'Admin address', 'admin', 'adminPassword');
```
- The API specification is on this link https://www.getpostman.com/collections/a1c86e96801c42103e2d. If you take a look over the API definition, there are some environment variables, this variables are the base url when the API is running local and the adminToken that is generated when you login with an admin account. There is a third variable named userToken which is the user token generated when login is performed. You can create this variables or use the values directly in the request headers.
