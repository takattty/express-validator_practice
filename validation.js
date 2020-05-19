'use strict';
const { body } = require('express-validator');

const validationCheck = [
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

module.exports = validationCheck;
//exportのみじゃ、配列をエクスポート出来なかった。