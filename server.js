const routes = require('./config/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const express = require('express');
const app = express();

const SERVER_PORT = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(SERVER_PORT, () => { console.log(`Server listening on port ${SERVER_PORT}`) });