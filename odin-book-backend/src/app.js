const express = require('express');
const router = require('./routes/indexRouter');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/index', router);

module.exports = app;
