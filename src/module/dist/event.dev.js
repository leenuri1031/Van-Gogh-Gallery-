"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slider = exports.mouseout3 = exports.mouseout2 = exports.mouseout1 = exports.mouseover = void 0;

var _function_obj = require("./function_obj");

var mouseover = function mouseover(e) {
  _function_obj.functionObj.size(e.target, "140px", "140px");
};

exports.mouseover = mouseover;

var mouseout1 = function mouseout1(e) {
  _function_obj.functionObj.size(e.target, "90px", "90px");
};

exports.mouseout1 = mouseout1;

var mouseout2 = function mouseout2(e) {
  _function_obj.functionObj.size(e.target, "100px", "100px");
};

exports.mouseout2 = mouseout2;

var mouseout3 = function mouseout3(e) {
  _function_obj.functionObj.size(e.target, "125px", "125px");
};

exports.mouseout3 = mouseout3;
var heightValue = 0;
var _boolean = true;

var slider = function slider(e) {
  if (_boolean === true) {
    heightValue = heightValue + 230;
    e.target.scrollTo({
      top: heightValue,
      behavior: "smooth"
    });

    if (heightValue >= 900) {
      _boolean = false;
    }
  } else {
    heightValue = 0;
    e.target.scrollTo({
      top: heightValue,
      behavior: "smooth"
    });
    _boolean = true;
  }
}; // export const slideTimer = setInterval(slider, 100);


exports.slider = slider;