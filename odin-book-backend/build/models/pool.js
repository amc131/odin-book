"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _pg = require("pg");
var _dotenv = _interopRequireDefault(require("dotenv"));
var connectionString = process.env.CONNECTION_STRING;
_dotenv["default"].config();
var pool = new _pg.Pool({
  connectionString: connectionString
});
var _default = pool;
exports["default"] = _default;