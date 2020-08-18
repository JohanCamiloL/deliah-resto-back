const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const express = require('express');
const app = express();

const SERVER_PORT = 8000;

app.use(cors()); // Allows requests from localhost.
app.use(bodyParser.urlencoded({ extended: true })); // Accepts data when form post is performed.
app.use(bodyParser.json());

orderRoutes(app);
productRoutes(app);
userRoutes(app);

app.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        res.json(500)
            .send({ message: 'Internal error' });
    }

    next();
});

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));