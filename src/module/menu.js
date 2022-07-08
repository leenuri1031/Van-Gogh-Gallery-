import React, { Component } from "react";
import { functionObj } from "./function_obj";

export const menu = `  
<div id = "mouse-over-menu">
  <a href="/"> <h3>Gallery Home</h3> </a>
  <a href="/#/life/"> <h3>Gogh’s Life</h3> </a>
  <a href="/#/gallery/main"> <h3>Gogh Gallery</h3> </a>
    <a href="/"> <div>Brussel & Hague & Nuenen</div> </a>
    <a href="/"> <div>Paris</div> </a>
    <a href="/"> <div>Arles</div> </a>
    <a href="/"> <div>Saint Remy de Provence</div> </a>
    <a href="/"> <div>Auvers-Sur-Oise</div> </a>
  <a href="/"> <h3>Gogh in the Media</h3> </a>
</div>`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleOver = this.handleOver.bind(this);
    this.handleOut = this.handleOut.bind(this);
  }

  handleOver = (e)=> {
    functionObj.size(e.target, "30%", "70%");
    e.target.style.left = "62.5%";
    e.target.style.bottom = "10%";
    e.target.innerHTML = menu;
    e.target.style.writingMode = 'horizontal-tb';
  }

  handleOut = (e) => {
    functionObj.size(e.target, "5%", "20%");
    e.target.style.left = "87.5%";
    e.target.style.bottom = "57%";
    e.target.innerHTML = "Gallery Info";
    e.target.style.writingMode = 'vertical-lr';
  };
  
  render() {
    return (
      <>
        <div onMouseEnter={this.handleOver} onMouseLeave={this.handleOut} id="menu">
          Gallery Info
        </div>
      </>
    );
  }
}

export default Menu;
