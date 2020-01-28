const {
  arrayToCSVString,
  addToArray,
  removeNthElement,
  elementsStartingWithAVowel,
} = require('../lib/src/arrays');

exports.atIndex = (req, res) => {
  const { array } = req.body;
  res.status(200).send({ result: array[req.params.index] });
};

exports.toString = (req, res) => {
  const { array } = req.body;
  const result = arrayToCSVString(array);
  res.status(200).send({ result });
};

exports.append = (req, res) => {
  const { array, value } = req.body;
  const arr = [...array];
  addToArray(value, arr);

  res.status(200).send({ result: arr });
};

exports.startsWithAVowel = (req, res) => {
  const { array } = req.body;
  const newArr = elementsStartingWithAVowel(array);

  res.status(200).send({ result: newArr });
};

exports.removeElement = (req, res) => {
  const { array } = req.body;
  const arr = [...array];
  const { index } = req.query;

  if (req.query) {
    removeNthElement(index, arr);
    return res.status(200).send({ result: arr });
  }
  removeNthElement(0, arr);
  res.status(200).send({ result: arr });
};
