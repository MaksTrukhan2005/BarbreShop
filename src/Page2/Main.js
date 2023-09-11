import React, {useState , useEffect} from 'react'
import Photos from './photos.js'
import Prices from './prices.js'
import SpecialOrder from './specialOrder.js'
import './Main.css'
import Introduction from '../Page1/introduction.js'
import Arrow from '../Page1/css/image/arrow.png'

function Main() {
 const [showPhoto, setShowPhoto]= useState(false)
 const [showPrice, setShowPrice] = useState(false)
 const [showCopyBook, setShowCopyBook] = useState(false);

 const [exitStyle, setExitStyle] = useState(false)
 const togglePhoto = () => {
  setShowPhoto(!showPhoto)
  setShowPrice(false);
  setShowCopyBook(false);
 }

 const togglePrice = () => {
  setShowPrice(!showPrice)
  setShowPhoto(false);
  setShowCopyBook(false);
 }

 const toggleBook = () => {
  setShowCopyBook(!showCopyBook)
  setShowPhoto(false);
  setShowPrice(false);
 }
 const exit = () => {
  setExitStyle(true)
}
  return (
    <div className='Main'>
        <div className='main_wrapper'>
          <div className='exitButton'>
            <button onClick={exit}>
              <img src={Arrow} alt='arrow'/>
            </button>
          </div>
          <div className='links_block'>
            <a id='photos' onClick={togglePhoto}>
              photos
            </a>
            <a id='price' onClick={togglePrice}>
              prices
            </a>
            <a id='order' onClick={toggleBook}>
              special order
            </a>
          </div>
        </div>
        <div id ="showWindow">
          { showPhoto && <Photos />}
          { showPrice && <Prices />}
          { showCopyBook && <SpecialOrder />}
        </div>
        {exitStyle && < Introduction />}
    </div>
  )
}

export default Main
