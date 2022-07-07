"use strict";

var _function_obj = require("./function_obj");

var _this = void 0;

var size = ['90px', '100px', '125px', '130px'];
var txt = ['Gogh’s Life', 'Gogh’s Gallery', 'Gogh in the media'];

var mouseover = function mouseover(e) {
  _function_obj.functionObj.size(e.target, size[3], size[3]);
};

var mouseout = function mouseout(e) {
  for (var i = 0; i < txt.length; i++) {
    _function_obj.functionObj.size(e.target[i], _this.state.size[i], _this.state.size[i]);
  }
};

function divLoop() {
  var arr = [];
} // function App (){
//   function 반복된UI(){
//     var 어레이 = [];
//     for (var i = 0; i < 3; i++) {
//       어레이.push(<div>안녕</div>)
//     }
//     return 어레이
//   }
//   return (
//     <div>
//       HTML 잔뜩있는 곳
//       { 반복된UI() }
//     </div>
//   )
// }