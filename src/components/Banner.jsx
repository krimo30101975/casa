import React from 'react';
import './Banner.css'
function Banner() {
  return (
    <div className='banner_container'>
        <div className='banner'>
            <img src="public/images/Image source 1.jpg" alt="image d'une falaise au bord de la mer" />
            <figcaption className="container_h1">
                <h1>Chez vous, partout et ailleurs</h1>
            </figcaption>
        </div>
    </div>
  );
}

export default Banner;