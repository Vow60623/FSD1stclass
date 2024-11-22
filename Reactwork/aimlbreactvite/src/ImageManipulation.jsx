import React from 'react'
import './image.css';
import cat from './download.jpg';
function ImageManipulation() {
  return (
    <div className='imageCard'>

        <div className='catDiv'>
        <img src={cat} alt="cat img" height={75} width={80}/>
        </div>
        <div className='buttonDiv'>
            <button>Enhance Height</button>
         
            
            <button>Enhance Width</button>
            
            <button>Image Rotate</button>
            
            <button>Color Change</button>
            
        </div>
        
    </div>

  )
}

export default ImageManipulation