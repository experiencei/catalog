import React from 'react';
import './App.css';
import Search from './Components/Search';
// import Error from './Components/Error';
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {

  
  return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search />
      </div>
    </div> 
  );
}

export default App;


// import React, { Component, Fragment } from 'react';

// class Thumbs extends Component {
//     constructor(props){
//         super(props);
//         this.onImageSelect = this.onImageSelect.bind(this);
//     }

//     onImageSelect(event) {
//         this.props.selectedCatalog(event.target.id);
//     }

//   render() {
//     return (
//         <Fragment>
//             {
//                 this.props.items.map((catalog, idx) => (
//                     <span   
//                         id={idx} 
//                         key={idx} 
//                         onClick={this.onImageSelect}
//                         data-testid={'thumb-button-' + idx}
//                     >
//                         <span 
//                             className={'inline-flex w-90 pa-4 image-thumb ' + 
//                                 (idx === this.props.activeIndex ? 'thumb-selected' : '')} 
//                         >
//                             <span 
//                                 className='mx-5 thumb' 
//                                 id={idx} 
//                                 style={{ backgroundImage: 'url('+ catalog.thumb + ')' }}
//                             />
//                         </span>
//                     </span>
//                 ))
//             }

//         </Fragment>
//     );
//   }
// }

// export default Thumbs;


// import React, { Component } from 'react';


// class Viewer extends Component {

//   constructor(props){
//     super(props);
//   }

//   render() {
//     return (
//         <div className='layout-row justify-content-center'>
//       <img 
//         alt='catalog-view' 
//         className='w-75' 
//         src={this.props.catalogImage}
//         data-testid='catalog-view' 
//       />
//     </div>
//     );
//   }
// }

// export default Viewer;



// import React, { Component ,Fragment, useState } from 'react'
// import 'h8k-components'

// import { image1, image2, image3, image4 } from './assets/images'
// import { Thumbs, Viewer } from './components/index'

// const catalogs = [
//   {
//     thumb: image1,
//     image: image1
//   },
//   {
//     thumb: image2,
//     image: image2
//   },
//   {
//     thumb: image3,
//     image: image3
//   },
//   {
//     thumb: image4,
//     image: image4
//   }
// ];

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       title: 'Catalog Viewer',
//       catalogs: [...catalogs],
//       currentIndex: 0,
//       catalogSelected: catalogs[0],
//       slideActive: false,
//       slideTimer: null,
//       slideDuration: 3000,
//       slideInterval: '',
//     };
//     this.selectedCatalog = this.selectedCatalog.bind(this);
//     this.previousClick = this.previousClick.bind(this);
//     this.nextClick = this.nextClick.bind(this);
//     this.slideChange = this.slideChange.bind(this);
//     this.resetSlideTimer = this.resetSlideTimer.bind(this);
//     this.onSlideChange = this.onSlideChange.bind(this);
//   }

//   selectedCatalog(index) {
//     this.setState({currentIndex: index, catalogSelected: this.state.catalogs[index]});
//   }

//   previousClick() {
//     let previousIndex = this.state.currentIndex == 0 ? this.state.catalogs.length - 1 : parseInt(this.state.currentIndex)-1;
//     this.setState({currentIndex: previousIndex, catalogSelected: this.state.catalogs[previousIndex]});
//   }

//   nextClick() {
//     let nextIndex = this.state.currentIndex == this.state.catalogs.length -1 ? 0 : parseInt(this.state.currentIndex)+1;
//     this.setState({currentIndex: nextIndex, catalogSelected: this.state.catalogs[nextIndex]});
//   }

//   slideChange(event) {
//     this.resetSlideTimer(!this.state.slideActive);
//     if (event.target.checked == true) {
//       this.onSlideChange();
//     }
//     else if (this.state.slideInterval != '' && event.target.checked == false){
//       clearInterval(this.state.slideInterval);
//     }
//   }

//   resetSlideTimer(isActive = false) {
//     this.setState({slideActive: isActive});
//   }

//   onSlideChange() {
//     let interval = setInterval ( () => {
//                     this.nextClick()}, this.state.slideDuration);
//     this.setState({slideInterval: interval});
//   }

//   render() {
//     return (
//     <Fragment>
//       <h8k-navbar header={this.state.title}></h8k-navbar>
//       <div className='layout-column justify-content-center mt-75'>
//         <div className='layout-row justify-content-center'>
//           <div className='card pt-25'>
//             <Viewer catalogImage={this.state.catalogSelected.image} />
//             <div className='layout-row justify-content-center align-items-center mt-20'>
//             <button 
//               className="icon-only outlined"
//               data-testid="prev-slide-btn"
//               onClick={this.previousClick}
//             >
//               <i className="material-icons">arrow_back</i>
//             </button>
//               <Thumbs 
//                 items={this.state.catalogs} 
//                 activeIndex={this.state.currentIndex} 
//                 selectedCatalog={this.selectedCatalog}  
//               />
//             <button 
//               className="icon-only outlined"
//               data-testid="next-slide-btn"
//               onClick={this.nextClick}
//             >
//               <i className="material-icons">arrow_forward</i>
//             </button>
//             </div>
//           </div>
//         </div>
//         <div className='layout-row justify-content-center mt-25'>
//           <input 
//             type='checkbox'
//             data-testid='toggle-slide-show-button'
//             onChange={this.slideChange}
//           /> 
//           <label className='ml-6'>Start Slide Show</label>
//         </div>
//       </div>
//     </Fragment>
//     );
//   }
// }

// export default App;

