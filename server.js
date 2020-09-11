const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const authRouts = require('./routes/authRoutes');
const { sequelize } = require('./config/database');

const express = require('express');
const app = express();

const SERVER_PORT = 3000;

app.use(cors()); // Allows requests from localhost.
app.use(bodyParser.urlencoded({ extended: true })); // Accepts data when form post is performed.
app.use(bodyParser.json());

userRoutes(app);
orderRoutes(app);
productRoutes(app);
authRouts(app);

/**
 * General error handler middleware.
 */
app.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        res.json(500).send({ message: 'Internal error' });
    }

    next();
});

/**
 * Server listening on the given port and database authentication.
 */
app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);

    sequelize.authenticate()
        .then(console.log('Database conenction succesfull'))
        .catch(error => console.log(error));
});