# Delilah resto Backend
Backend developed with NodeJS which comprends the Deliah Restaurant logic

# Installation
- Clone the repository on your local machine.
- This project uses an remote MySQL engine instance on remotemysql.com, so you don't have to install MySQL on your localmachine, if you prefer to use local MySQL engine you have to set the host on config/database to localhost.

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

- Once you have the file created, you can install all the necessary dependencies running the next script `npm install` on the root folder and this will download the dependencies.

- If you are using a new database, you have to run a file called `databaseInit.js` with the script `node databaseInit.js` on the config file, this will create all the tables on the given database.
- If you are not using a new database, you can use the next evironment variables to connect to the remote MySQL engine<br>
DATABASE_USER=yFmHfRwPkD<br>
DATABASE_NAME=yFmHfRwPkD
DATABASE_PASSWORD=YWB9yBWPoH

- You have to consider that you have to create the environment variable `SECRET_KEY` no matter if you are or aren't using a remote MySQL engine.

# How to use
- Once you have all the dependencies installed and files created you can run the server, this will run the express server and create the database connectio to run all the neccesary queries. To run the server, you have to run the next script `node server.js` on the root folder, this will show you on the terminal the port where the server is listening for requests.

# Tests and evidences

