"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mouseout3 = exports.mouseout2 = exports.mouseout1 = exports.mouseover = exports.menuOut = exports.menuEnter = void 0;

var _function_obj = require("./function_obj");

var menuEnter = function menuEnter(e) {
  _function_obj.functionObj.size(e.target, "30%", "70%");

  e.target.style.left = "62.5%";
  e.target.style.bottom = "10%";
  e.target.innerHTML = "";
};

exports.menuEnter = menuEnter;

var menuOut = function menuOut(e) {
  _function_obj.functionObj.size(e.target, "5%", "20%");

  e.target.style.left = "87.5%";
  e.target.style.bottom = "57%";
  e.target.innerHTML = "Gallery Info";
};

exports.menuOut = menuOut;

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