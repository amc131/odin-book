"use strict";

var express = require('express');
var router = require('./routes/indexRouter');
require('dotenv').config();
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/index', router);
module.exports = app;