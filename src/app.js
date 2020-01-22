const express = require('express');
const bodyParser = require('body-parser');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/src/strings');

const numbers = require('./lib/src/numbers');

const app = express();
app.use(bodyParser.json());

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
  const num1 = parseInt(req.params.number1, 10);
  const num2 = parseInt(req.params.number2, 10);
  if (!Number.isInteger(numbers.add(num1, num2))) {
    res.status(400);
    res.json({
      error: 'Parameters must be valid numbers.',
    });
  } else {
    res.status(200);
    res.json({
      result: numbers.add(num1, num2),
    });
  }
});

app.get('/numbers/subtract/:number1/from/:number2', (req, res) => {
  const num1 = parseInt(req.params.number1, 10);
  const num2 = parseInt(req.params.number2, 10);
  const total = numbers.subtract(num2, num1);
  if (Number.isInteger(total)) {
    res.json({ result: numbers.subtract(num2, num1) });
  } else {
    res.status(400);
    res.json({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  const isSumANumber = numbers.multiply(parseInt(a, 10), parseInt(b, 10));
  if (isSumANumber) {
    res.status(200);
    res.json({ result: isSumANumber });
  } else if (!a || !b) {
    res.status(400);
    res.json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400);
    res.json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;

  if (typeof a === `undefined` || typeof b === `undefined`) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  if (Number(b) === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  res.status(200).send({ result: numbers.divide(Number(a), Number(b)) });
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.query;

  if (typeof a === `undefined` || typeof b === `undefined`) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  if (Number(b) === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }

  return res.status(200).send({ result: numbers.remainder(Number(a), Number(b)) });
});

module.exports = app;
