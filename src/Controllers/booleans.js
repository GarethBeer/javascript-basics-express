const { negate, truthiness, isOdd, startsWith } = require('../lib/src/booleans');

exports.negate = (req, res) => {
  const { value } = req.body;
  res.status(200).send({ result: negate(value) });
};
exports.truthiness = (req, res) => {
  const { value } = req.body;
  res.status(200).send({ result: truthiness(value) });
};

exports.isOdd = (req, res) => {
  const { number } = req.params;
  const result = isOdd(number);
  const value = Number(number);
  if (value) {
    res.status(200).send({ result });
  } else {
    res.status(400).send({ error: 'Parameter must be a number.' });
  }
};

exports.startsWith = (req, res) => {
  const { character, string } = req.params;
  const result = startsWith(character, string);

  if (character.length > 1) {
    return res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  }
  return res.status(200).send({ result });
};
