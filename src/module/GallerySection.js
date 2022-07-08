import React, { Component } from "react";
import TitleText from "./title_text";
import Menu from "./menu";

class GallerySection extends Component {
  render() {
    console.log(window.location.hash);
    return (
      <>
        <section className="section1">
          <TitleText></TitleText>
        </section>
        <section className="no-bgc-section2">
          <Menu></Menu>
        </section>
      </>
    );
  }
}

export default GallerySection;
