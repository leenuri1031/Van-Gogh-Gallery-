"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menu = menu;

// import { functionObj } from "./style-function";
function menu() {
  var section2 = document.getElementById('section2');
  console.log(section2);
  var menues = Array.from(document.getElementsByClassName('circle-menu')); // console.log(menues);

  menues[0].innerHTML = "test";
}