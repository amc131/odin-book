"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _pg = require("pg");
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();

// const connectionString = process.env.DATABASE_URL;

// console.log(connectionString);

// const pool = new Pool({ connectionString });

var databaseURL = 'postgres://summer_wave_2612:nRe9oQqX3udKiK8@summer-wave-2612-db.flycast:5432/summer_wave_2612?sslmode=disable';
var pool = new _pg.Pool({
  connectionString: databaseURL
});
var _default = pool;
exports["default"] = _default;