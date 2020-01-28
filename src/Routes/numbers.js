const express = require('express');

const router = express.Router();
const numbersController = require('../Controllers/numbers');

router.get('/add/:number1/and/:number2', numbersController.addNumbers);

router.get('/subtract/:number1/from/:number2', numbersController.subtractNumbers);

router.post('/multiply', numbersController.multiplyNumbers);

router.post('/divide', numbersController.divideNumbers);

router.post('/remainder', numbersController.remainderOfNumbers);

module.exports = router;
