const express = require('express');
const strings = require('./lib/src/strings');

const app = express();

app.get('/strings/hello/world', (req, res) => {
  res.json({ result: strings.sayHello('world') });
});

module.exports = app;
