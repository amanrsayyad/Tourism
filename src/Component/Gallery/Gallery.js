import React from 'react';
import Images from './Images';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className='gallery_container'>
            <div className="gallery_card">
               <div className="gallery_border"></div>
               <h2>India The World Of Tourism</h2>
               <div className="gallery_border"></div>
            </div>        
            <div className="gallery_card">
                <Images />
            </div>        
        </div>
    </div>
  )
}

export default Gallery