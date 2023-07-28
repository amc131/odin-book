"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _indexRouter = _interopRequireDefault(require("./routes/indexRouter"));
require('dotenv').config();
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use('/index', _indexRouter["default"]);
var _default = app;
exports["default"] = _default;