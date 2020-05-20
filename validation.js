'use strict';
const { check } = require('express-validator');

const validationCheck = [
  check('user_name').escape(),//エスケープ処理
  check('user_name').trim(),
  check('user_name').not().isEmpty(),//空でない
  check('user_name').isLength({ max:20 }).withMessage('too long!'),
  check('user_pass').not().isEmpty(),
  check('user_pass').isLength({ max: 20 }),
  check('user_pass').matches(/[a-z]+/).withMessage('add a-z'),
  check('user_pass').matches(/\d+/).withMessage('add num'),//正規表現
  check('user_pass').matches(/[!#$%&\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]+/).withMessage('add 記号'),
  check('user_pass').escape(),
  check('user_message').escape(),
  check('user_message').not().isEmpty(),
  check('user_message').isLength({ max: 200 })
]

module.exports = validationCheck;
//exportのみじゃ、配列をエクスポート出来なかった。