import React, { Component } from "react";
import { menuEnter, menuOut } from "./event";

export const menu = `  
<div id = "mouse-over-menu">
  <h3>Gallery Home</h3>
  <h3>Gogh’s Life</h3>
  <h3>
    Gogh Gallery
    <div>Brussel & Hague & Nuenen</div>
    <div>Paris</div>
    <div>Arles</div>
    <div>Saint Remy de Provence</div>
    <div>Auvers-Sur-Oise</div>
  </h3>
  <h3>Gogh in the Media</h3>
</div>`;

class Menu extends Component {
  render() {
    return (
      <>
        <div onMouseOver={menuEnter} onMouseLeave={menuOut} id="menu">
          Gallery Info
        </div>
      </>
    );
  }
}

export default Menu;
