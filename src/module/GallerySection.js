import React, { Component } from "react";
import TitleText from "./title_text";
import Menu from "./menu";
import { GalleryContents1,GalleryContents2,GalleryContents3,GalleryContents4,GalleryContents5 } from "./GalleryContents";

// const subText = [
//       "Brussel & Hague & Nuenen",
//       "Paris",
//       "Arles",
//       "Saint Remy de Provence",
//       "Auvers-Sur-Oise"
// ]

// console.log(Array.isArray(subText));
class GallerySection extends Component {

  render() {
    // console.log(window.location.hash);
    return (
      <>
        <section className="section1">
          <TitleText></TitleText>
        </section>
        <section className="no-bgc-section2">
          <div  id="gallery-main">
            <GalleryContents1></GalleryContents1>
            {/* <GalleryContents2></GalleryContents2>
            <GalleryContents3></GalleryContents3>
            <GalleryContents4></GalleryContents4>
            <GalleryContents5></GalleryContents5> */}
          </div>
          <Menu></Menu>
        </section>
      </>
    );
  }
}

export default GallerySection;
