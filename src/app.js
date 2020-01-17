const express = require('express');
const strings = require('./lib/src/strings');

const app = express();

app.get('/strings/hello/world', (req, res) => {
  res.json({ result: strings.sayHello('world') });
});

app.get('/strings/upper/hello', (req, res) => {
  res.json({ result: strings.uppercase('hello') });
});

app.get('/strings/lower/HELLO', (req, res) => {
  res.json({ result: strings.lowercase('HELLO') });
});

app.get('/strings/first-characters/hello', (req, res) => {
  res.json({ result: strings.firstCharacter('h') });
});

app.get('/strings/first-characters/sd32fg45', (req, res) => {
  res.json({ result: strings.firstCharacters('sd32fg45') });
});
module.exports = app;
