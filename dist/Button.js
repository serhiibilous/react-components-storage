"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button() {
  return _react.default.createElement("div", null, _react.default.createElement("button", {
    type: "button"
  }, "Button"));
}