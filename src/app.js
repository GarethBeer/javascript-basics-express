const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/src/strings');

const numbers = require('./lib/src/numbers');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    return res.json({ result: firstCharacters(req.params.string, req.query.length) });
  }
  return res.json({ result: firstCharacter(req.params.string) });
});

app.get('/numbers/add/:number1/and/:number2', (req, res) => {
  if (typeof req.params.number1 === 'string' ||) {
    res.json({
      result: numbers.add(parseInt(req.params.number1, 10), parseInt(req.params.number2, 10)),
    });
  } else {
    res.status(400);
    res.json({
      error: 'Parameters must be valid numbers.',
    });
  }
});

module.exports = app;
