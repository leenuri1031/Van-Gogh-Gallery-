import React, { Component } from "react";

const sub = [
  "Brussel & Hague & Nuenen",
  "Paris",
  "Arles",
  "Saint Remy de Provence",
  "Auvers-Sur-Oise",
  "Lust For Life, 1956",
  "Van Gogh, 1991",
  "Loving Vincent, 2017",
  "At Eternity’s Gate, 2018",
  "Doctor Who, 2010 episod 10 : Vincent and the Doctor",
];

class SubText extends Component {
  render() {
    return (
      <>
        <div>{sub[0]}</div>
      </>
    );
  }
}

export default SubText;
