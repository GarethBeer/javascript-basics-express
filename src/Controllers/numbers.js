const { add, subtract, multiply, divide, remainder } = require('../lib/src/numbers');

exports.addNumbers = (req, res) => {
  const num1 = Number(req.params.number1);
  const num2 = Number(req.params.number2);
  if (!Number.isInteger(add(num1, num2))) {
    res.status(400);
    res.send({
      error: 'Parameters must be valid numbers.',
    });
  } else {
    res.status(200);
    res.send({
      result: add(num1, num2),
    });
  }
};

exports.subtractNumbers = (req, res) => {
  const num1 = Number(req.params.number1);
  const num2 = Number(req.params.number2);
  const total = subtract(num2, num1);
  if (Number.isInteger(total)) {
    res.send({ result: subtract(num2, num1) });
  } else {
    res.status(400);
    res.send({ error: 'Parameters must be valid numbers.' });
  }
};

exports.multiplyNumbers = (req, res) => {
  const { a, b } = req.body;
  const isSumANumber = multiply(Number(a), Number(b));
  if (isSumANumber) {
    res.status(200);
    res.send({ result: isSumANumber });
  } else if (!a || !b) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
};

exports.divideNumbers = (req, res) => {
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
  return res.status(200).send({ result: divide(Number(a), Number(b)) });
};

exports.remainderOfNumbers = (req, res) => {
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

  return res.status(200).send({ result: remainder(Number(a), Number(b)) });
};
