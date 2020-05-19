'use strict';
const { body } = require('express-validator');

const validationCheck = [
  body('user_name').escape(),//エスケープ処理
  body('user_name').trim(),
  body('user_name').not().isEmpty(),//空でない
  body('user_name').isLength({ max:20 }).withMessage('too long!'),
  body('user_pass').escape(),
  body('user_pass').not().isEmpty(),
  body('user_pass').isLength({ max: 20 }),
  body('user_pass').matches(/[a-z]+/).withMessage('add a-z'),
  body('user_pass').matches(/\d+/).withMessage('add num'),//正規表現
  body('user_pass').matches(/[!#$%&\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]+/).withMessage('add 記号'),
  body('user_message').escape(),
  body('user_message').not().isEmpty(),
  body('user_message').isLength({ max: 200 })
]

module.exports = validationCheck;
//exportのみじゃ、配列をエクスポート出来なかった。