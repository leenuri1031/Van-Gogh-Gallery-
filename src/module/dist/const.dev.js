"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["boolean"] = exports.desktopWidth = exports.tabletWidth = exports.mobileWidth = exports.root = void 0;
var root = document.getElementById('root');
exports.root = root;
var mobileWidth = window.matchMedia("(max-width: 600px)");
exports.mobileWidth = mobileWidth;
var tabletWidth = window.matchMedia("(min-width: 600px)");
exports.tabletWidth = tabletWidth;
var desktopWidth = window.matchMedia("(min-width: 1000px)");
exports.desktopWidth = desktopWidth;
var _boolean = true;
exports["boolean"] = _boolean;