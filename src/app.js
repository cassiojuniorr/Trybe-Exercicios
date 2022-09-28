const express = require('express');

const app = express();
app.listen(3001, () => console.log('started'));
app.use(express.json());

module.exports = app;