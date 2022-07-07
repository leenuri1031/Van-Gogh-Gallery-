"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functionObj = void 0;
var functionObj = {
  flex: function flexStyling(target, justi, ali) {
    var flexDirection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "row";
    target.style.display = "flex";
    target.style.justifyContent = justi;
    target.style.alignItems = ali;
    target.style.flexDirection = flexDirection;
  },
  position: function positionSetting(target, posi) {
    var left = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var top = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var zIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    target.style.position = posi;
    target.style.left = left;
    target.style.top = top;
    target.style.zIndex = zIndex;
  },
  size: function size(target, w, h) {
    target.style.width = w;
    target.style.height = h;
  },
  boxStyle: function boxStyling(target, w, h, bgc) {
    var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '0%';
    target.style.width = w;
    target.style.height = h;
    target.style.backgroundColor = bgc;
    target.style.borderRadius = radius;
  },
  container: function containerStyle(target, w, h) {
    var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'column';
    target.style.width = w;
    target.style.height = h;
    target.style.display = 'flex';
    target.style.justifyContent = 'space-evenly';
    target.style.alignItems = 'center';
    target.style.flexDirection = direction;
  },
  font: function fontstyle(target, rem, bold) {
    target.style.fontSize = rem;
    target.style.fontWeight = bold;
  },
  createElement: function createElement(tag, parent) {
    var objName = document.createElement(tag);
    parent.appendChild(objName);
  },
  createBefore: function createBefore(newTag, parent, tag) {
    var tagName = document.createElement(newTag);
    parent.insertBefore(tagName, tag);
  },
  iAmPageTextBox: function textBoxStyle(target) {
    var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '35%';
    var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '95%';
    target.style.width = w;
    target.style.height = h;
    target.style.display = 'flex';
    target.style.justifyContent = 'flex-start';
    target.style.alignItems = 'center';
  },
  nowIPageTextBox: function textBoxStyle(target) {
    var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '35%';
    target.style.width = '100%';
    target.style.height = h;
    target.style.display = 'flex';
    target.style.justifyContent = 'flex-start';
    target.style.alignItems = 'center';
  },
  borderRound: function raoundBorderStyle(target, w, h, radius) {
    var col = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'gray';
    target.style.width = w;
    target.style.height = h;
    target.style.display = 'flex';
    target.style.justifyContent = 'center';
    target.style.alignItems = 'center';
    target.style.border = "solid 1px ".concat(col);
    target.style.borderRadius = radius;
  },
  bgiStyle: function imageStyle(target, url, posi, size, opac) {
    var repeat = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'no-repeat';
    target.style.backgroundImage = "url(".concat(url, ")");
    target.style.backgroundPosition = posi;
    target.style.backgroundSize = size;
    target.style.opacity = opac;
    target.style.backgroundRepeat = repeat;
  },
  txtStyle: function textStyle(target, col) {
    var rem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "1rem";
    var bold = arguments.length > 3 ? arguments[3] : undefined;
    target.style.color = col;
    target.style.fontSize = rem;
    target.style.fontWeight = bold;
    target.style.textAlign = 'justify';
    target.style.lineHeight = '200%';
  }
};
exports.functionObj = functionObj;