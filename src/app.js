const express = require('express');
const errors = require('./middlewares/erro');
require('express-async-errors');
const router = require('./routes');

const app = express();
app.use(express.json());

app.use('/activities', router);
// middle erro

app.use(errors);

module.exports = app;