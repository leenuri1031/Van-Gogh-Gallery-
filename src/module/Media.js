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
        <Menu></Menu>
      </section>
      </>
    )
  }
}

export default Media;