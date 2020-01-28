const express = require('express');

const router = express.Router();

const stringsController = require('../Controllers/strings');

router.get('/hello/:string', stringsController.hello);

router.get('/upper/:string', stringsController.upper);

router.get('/lower/:string', stringsController.lower);

router.get('/first-characters/:string', stringsController.firstCharacters);

module.exports = router;
