const express = require('express');
const errors = require('./middlewares/erro');
const { nameValidation, priceValidation, descValidation } = require('./middlewares/validations');
require('express-async-errors');
const router = require('./routes');

const app = express();
app.use(express.json());

app.use(nameValidation);
app.use(priceValidation);
app.use(descValidation);

app.use(router);

// middle erro

app.use(errors);

module.exports = app;