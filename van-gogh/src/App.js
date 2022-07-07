import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import MainSection1Content from "./module/main_section1_content";
import BasicSection from "./module/BasicSection";
import GallerySection from "./module/GallerySection";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div id="container">
          {/* {window.location.hash === ""
            ? console.log("nohash")
            : console.log("hash")} */}
          <Routes>
            <Route path="/" element={<MainSection1Content />}></Route>
            <Route path="/life/*" element={<BasicSection />}></Route>
            <Route path="/gallery/*" element={<GallerySection />}></Route>
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
