var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');
//const validationCheck = require('../validation');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', validation(), async (req, res, next) => {
  const error = validationResult(req);
  if(!error.isEmpty()){
    console.log(error.errors);
  }
  const name = req.body.user_name;
  const password = req.body.user_pass;
  const text = req.body.user_message;
  console.log(name);


  res.redirect('/');
})

function validation() {
  return [
      body('user_name').escape(),//エスケープ処理
      body('user_name').trim(),
      body('user_name').not().isEmpty(),//空でない
      body('user_name').contains(),
      body('user_name').isLength({ max:20 }).withMessage('too long!'),
      body('user_pass').escape(),
      body('user_pass').not().isEmpty(),
      body('user_pass').isLength({ max: 20 }),
      body('user_message').not().isEmpty()
    ]
}

module.exports = router;
