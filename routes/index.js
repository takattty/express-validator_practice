var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');
const validationCheck = require('../validation');
const validationFront = require('../validationFront')
const validator = require('validator');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/submit', validationCheck, async (req, res, next) => {
  const error = validationResult(req);
  if(!error.isEmpty()){
    console.info(error.errors);
  }
  const name = req.body.user_name;
  const password = req.body.user_pass;
  const text = req.body.user_message;
  console.log(password, text);
  console.log(validator.isEmail('hoo@bar.com'));
  res.redirect('/message');
});

module.exports = router;