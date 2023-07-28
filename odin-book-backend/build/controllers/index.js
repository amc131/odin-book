"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var indexPage = function indexPage(req, res) {
  return res.status(200).json({
    message: 'Hello from index'
  });
};
var _default = indexPage;
exports["default"] = _default;