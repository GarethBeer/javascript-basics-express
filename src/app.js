const express = require('express');
const bodyParser = require('body-parser');
const stringsRouter = require('./Routes/strings');
const numbersRouter = require('./Routes/numbers');
const booleansRouter = require('./Routes/booleans');
const arraysRouter = require('./Routes/arrays');

const app = express();
app.use(bodyParser.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleansRouter);
app.use('/arrays', arraysRouter);

module.exports = app;
