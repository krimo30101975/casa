import React from 'react';
import './Gallery.css';
function Gallery() {
  return (
    <div className="gallery">
        <div className="gallery_container">
            {[...Array(6)].map((_, index) => (
                <figure className="gallery_card" key={index}>
                    <figcaption className="card_title">
                        <h2>Titre de la location</h2>
                    </figcaption>
                </figure>
            ))}
        </div>
    </div>
  );
}

export default Gallery;