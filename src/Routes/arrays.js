const express = require('express');

const router = express.Router();
const arrayControllers = require('../Controllers/arrays');

router.post('/element-at-index/:index', arrayControllers.atIndex);

router.post('/to-string', arrayControllers.toString);

router.post('/append', arrayControllers.append);

router.post('/starts-with-vowel', arrayControllers.startsWithAVowel);

router.post('/remove-element', arrayControllers.removeElement);

module.exports = router;
