"use strict";

var _react = _interopRequireDefault(require("react"));
var _renderer = _interopRequireDefault(require("@react-pdf/renderer"));
var _PDFTemplate = require("./PDFTemplate");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var data = [];
for (var index = 0; index < 200; index++) {
  data.push({
    page: "Page " + index
  });
}
_renderer["default"].renderToFile( /*#__PURE__*/_react["default"].createElement(_PDFTemplate.PDFTemplate, {
  data: data
}), "/tmp/test.pdf");