import React, { Fragment, useState } from 'react'
import 'h8k-components'

// import { image1, image2, image3 } from './assets/images/thumb/'

import Viewer from './Components/Viewer'
import Thumbs from './Components/Thumb'
import image1 from "./assets/images/thumb/white-light-thumb.jpeg"
import image2 from "./assets/images/thumb/tea-light-thumb.jpeg"
import image3 from "./assets/images/thumb/pink-light-thumb.jpeg"
const title = 'Catalog Viewer'

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1
    },
    {
      thumb: image2,
      image: image2
    },
    {
      thumb: image3,
      image: image3
    }
  ]
  // const catalogSelected.image = 
  // catalogsList[activeIndex].image
  const [ catalogs ] = useState([...catalogsList])
  const [ activeIndex, setActiveIndex ] = useState(0)
//   const [ slideTimer, setSlideTimer ] = useState(null)
  const [ slideDuration ] = useState(1500)
  const [catalogSelected , setCatalogSelected] = useState(catalogsList[2])
  const [slideActive, setSlideActive] = useState(false)
  const [slideInterval, setSlideInterval] = useState("")
   
  const selectedCatalog = (index) => {
     setActiveIndex(index)
     setCatalogSelected(catalogs[index])
  }

 const previousClick = () => {
   let previousIndex = activeIndex === 0 ? catalogs.length - 1 : parseInt(activeIndex)-1;
   setActiveIndex(previousIndex)
   setCatalogSelected(catalogs[previousIndex])
 }

 const nextClick = () => {
   let nextIndex = activeIndex === catalogs.length - 1 ? 0 : parseInt(activeIndex)+1;
   setActiveIndex(nextIndex)
   setCatalogSelected(catalogs[nextIndex])
 }

 const slideChange = (event) => {
    resetSlideTimer(!slideActive);
    if(event.target.checked === true) {
       onSlideChange();
    }
    else if(slideInterval !== '' && event.target.checked === false) {
      clearInterval(slideInterval);
    }
 }

 const resetSlideTimer = (isActive = false) =>  {
  setSlideActive(isActive)
}

const onSlideChange = () => {
  let interval = setInterval (() => {
     nextClick()
  } , slideDuration);
  setSlideInterval(interval);
}
  return (
    <Fragment>
      <h8k-navbar header={ title }></h8k-navbar>
      <div className='layout-column justify-content-center mt-75'>
        <div className='layout-row justify-content-center'>
          <div className='card pt-25'>
            <Viewer catalogImage={ catalogSelected.image } />
            <div className='layout-row justify-content-center align-items-center mt-20'>
            <button 
              className="icon-only outlined"
              data-testid="prev-slide-btn"
              onClick={() => previousClick() }
            >
              <i className="material-icons">arrow_back</i>
            </button>
              <Thumbs
                items={ catalogs } 
                currentIndex={ activeIndex } 
                selectedCatalog={selectedCatalog} 
              />
            <button 
              className="icon-only outlined"
              data-testid="next-slide-btn"
              onClick={() => nextClick()}
            >
              <i className="material-icons">arrow_forward</i>
            </button>
            </div>
          </div>
        </div>
        <div className='layout-row justify-content-center mt-25'>
          <input 
            type='checkbox'
            data-testid='toggle-slide-show-button'
            onChange={(e) => slideChange(e)}
          /> 
          <label className='ml-6'>Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  )
}

export default App

