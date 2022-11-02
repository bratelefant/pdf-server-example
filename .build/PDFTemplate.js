"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFTemplate = void 0;
var _react = _interopRequireDefault(require("react"));
var _renderer = require("@react-pdf/renderer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PDFTemplate = function PDFTemplate(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement(_renderer.Document, null, /*#__PURE__*/_react["default"].createElement(_renderer.Page, {
    wrap: true
  }, data.map(function (_ref2) {
    var page = _ref2.page;
    return /*#__PURE__*/_react["default"].createElement(_renderer.View, {
      wrap: false
    }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, page));
  })));
};
exports.PDFTemplate = PDFTemplate;