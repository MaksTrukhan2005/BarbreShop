import React , {useEffect, useState} from 'react'
import './photo.css'

function Photos() {
  const [showPhoto, setShowPhoto]= useState(false)
  const [randomPhoto , setRandomPhoto] = useState(null)

  const libraryOfPhotos = [
    require('../Page1/css/image/hairStyle2.jpg'),
    require('../Page1/css/image/hairStyle3.jpg'),
    require('../Page1/css/image/hairStyle4.jpg')
  ];

useEffect(() =>{
  const photos = document.getElementById('photos')
  if(photos) {
    const updatePhoto = () => {

      const randomIndex = Math.floor(Math.random() * libraryOfPhotos.length);
      setRandomPhoto(libraryOfPhotos[randomIndex]) 
    }
    updatePhoto()
    const intervalId = setInterval(updatePhoto, 3000)

    photos.addEventListener('click', function slideShow() {
      setShowPhoto(!showPhoto)
    }, []);
    return () => clearInterval(intervalId);
    

  }

}, [showPhoto])
return (
  <div>
    {
      <img className='hairStyle' src={randomPhoto} alt="Random Photo" />
    }
  </div>
);
}

export default Photos
