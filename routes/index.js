var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');
const validationCheck = require('../validation');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', validationCheck, async (req, res, next) => {
  const error = validationResult(req);
  if(!error.isEmpty()){
    console.log(error.errors);
  }
  const name = req.body.user_name;
  const password = req.body.user_pass;
  const text = req.body.user_message;
  res.redirect('/');
})

module.exports = router;