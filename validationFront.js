'use strict';
const { body } = require('express-validator');

const validationFront = [
  body('user_message').unescape()//ここでエラーが発生。
]

module.exports = validationFront;