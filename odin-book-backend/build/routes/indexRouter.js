"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("../controllers/index"));
var indexRouter = _express["default"].Router();
indexRouter.get('/', _index["default"]);
var _default = indexRouter;
exports["default"] = _default;