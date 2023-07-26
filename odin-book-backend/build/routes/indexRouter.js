"use strict";

var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
  return res.status(200).json({
    message: 'Welcome to Express API'
  });
});
module.exports = router;