import React, { Component, useEffect, useState, useRef }  from "react";


// onScroll={slideTimer}

// useEffect(() => {
//   const interval = setInterval(() => {
//     console.log('This will be called every 2 seconds');
//   }, 2000);

//   return () => clearInterval(interval);
// }, []);


// function ExampleCounter() {

//   useEffect(() => {
//     const interval = setInterval(() => {
//       slider();
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

// }



export class GalleryContents1 extends Component{
  constructor(props) {
    super(props);
    this.testRef = React.createRef();
  }
  scrollToElement = () => this.testRef.current.scrollIntoView();
  render(){
    console.log(this.testRef);
    // offsetTop:-7
    // offsetHeight:1087
    // scrollHeight:1087
    // scrollTop:0

    return (
      <div>
      <div>Brussel & Hague & Nuenen</div>
      <div>
        <div ref={this.testRef}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </div>
    )
  }
}

// export const GalleryContents1 = ()=>{
//   return (
//     <div>
//     <div>Brussel & Hague & Nuenen</div>
//     <div>
//       <div>
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>4</div>
//         <div>5</div>
//       </div>
//     </div>
//   </div>
//   )
// }

export class GalleryContents2 extends Component{
  render(){
    return (
      <div>
      <div>Paris</div>
      <div>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </div>
    )
  }
}

export class GalleryContents3 extends Component{
  render(){
    return (
      <div>
      <div>Arles</div>
      <div>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </div>
    )
  }
}

export class GalleryContents4 extends Component{
  render(){
    return (
      <div>
      <div>Saint Remy de Provence</div>
      <div>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </div>
    )
  }
}

export class GalleryContents5 extends Component{
  render(){
    return (
      <div>
      <div>Auvers-Sur-Oise</div>
      <div>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </div>
    )
  }
}
