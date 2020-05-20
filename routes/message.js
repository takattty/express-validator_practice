'use strict';
var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');
//const validationFront = require('../validationFront');

router.get('/', (req, res, next) => {
  const message = '<script>';
  res.render('message', {title: 'validation message', message: message})
});

module.exports = router;