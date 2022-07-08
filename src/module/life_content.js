import React, { Component } from "react";
import { life1, life2 } from "./text";
import Menu from "./menu";

class LifeContent extends Component {
  render() {
    return (
      <>
        <div id="content-box">
          <div>
            <div>{life1}</div>
            <div></div>
          </div>
          <div>
            <div>{life1}</div>
            <div></div>
          </div>
          <div>
            <div>{life2}</div>
            <div></div>
          </div>
          <Menu></Menu>
        </div>
      </>
    );
  }
}

export default LifeContent;
