import React, { Component }  from "react";
// import { moving} from "./event";

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
  // constructor(props) {
  //   super(props);
  //   this.moving = this.moving.bind(this);
  // }

  // moving = (e)=> {
  //   let value = 0;
  //   setInterval(function() {
  //     e.target.style.transform = 'translate3d(0px,-'+110*(value+1)+'px, 0px)';
  //     e.target.style.transition = '0.5s';
  //   value++;
  //   if(value === 4){
  //     setTimeout(function(){
  //       e.target.style.transition = '0s';
  //       e.target.style.transform = 'translate3d(0px,0px, 0px)';
  //     }, 201);
  //     value = 0;
  //   }
  // }, 1000);
  // }
  
  render(){

    return (
      <div>
        <div>Brussel & Hague & Nuenen</div>
        <div>           {/* last child */}
          <div className="slide-wrap">
            <div className="slider">
              <div className="slide-item">1</div>
              <div className="slide-item">2</div>
              <div className="slide-item">3</div>
              <div className="slide-item">4</div>
              <div className="slide-item">5</div>
            </div>
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
          <div className="slide-wrap" >
            <div className="slider">
              <div className="slide-item">1</div>
              <div className="slide-item">2</div>
              <div className="slide-item">3</div>
              <div className="slide-item">4</div>
              <div className="slide-item">5</div>
            </div>
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
          <div className="slide-wrap" >
            <div className="slider">
              <div className="slide-item">1</div>
              <div className="slide-item">2</div>
              <div className="slide-item">3</div>
              <div className="slide-item">4</div>
              <div className="slide-item">5</div>
            </div>
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
          <div className="slide-wrap">
            <div className="slider">
              <div className="slide-item">1</div>
              <div className="slide-item">2</div>
              <div className="slide-item">3</div>
              <div className="slide-item">4</div>
              <div className="slide-item">5</div>
            </div>
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
          <div className="slide-wrap" >
            <div className="slider">
              <div className="slide-item">1</div>
              <div className="slide-item">2</div>
              <div className="slide-item">3</div>
              <div className="slide-item">4</div>
              <div className="slide-item">5</div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
