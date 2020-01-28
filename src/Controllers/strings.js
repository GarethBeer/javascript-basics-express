const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/src/strings');

exports.hello = (req, res) => {
  const { string } = req.params;
  res.send({ result: sayHello(string) });
};

exports.upper = (req, res) => {
  const { string } = req.params;
  const result = uppercase(string);
  res.send({ result });
};

exports.lower = (req, res) => {
  const { string } = req.params;
  const result = lowercase(string);
  res.send({ result });
};

exports.firstCharacters = (req, res) => {
  const { string } = req.params;
  if (req.query.length) {
    return res.send({ result: firstCharacters(string, req.query.length) });
  }
  return res.send({ result: firstCharacter(string) });
};
