const routes = require('./config/routes');

const express = require('express');
const app = express();

const SERVER_PORT = 8001;

routes(app);

app.listen(SERVER_PORT, () => { console.log(`Server listening on port ${SERVER_PORT}`) });