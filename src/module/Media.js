import React, { Component } from "react";
import Menu from "./menu";
import TitleText from "./title_text";

class Media extends Component {
  render(){
    return(
      <>
      <section className="section1">
        <TitleText></TitleText>
      </section>
      <section className="no-bgc-section2">
          <button>left</button>
          <div className="slide-container">
            <div data-slide="0">0</div>
            <div data-slide="1">1</div>
            <div data-slide="2">2</div>
          </div>
          <button>right</button>
        <Menu></Menu>
      </section>
      </>
    )
  }
}

export default Media;