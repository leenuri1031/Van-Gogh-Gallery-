import React, { Component } from "react";
import TitleText from "./title_text";
import LifeContent from "./life_content";

class BasicSection extends Component {
  render() {
    return (
      <>
        <section className="section1">
          <TitleText></TitleText>
        </section>
        <section className="no-bgc-section2">
          <LifeContent></LifeContent>
        </section>
      </>
    );
  }
}

export default BasicSection;
