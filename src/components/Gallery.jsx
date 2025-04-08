import React from 'react';
import { Link } from "react-router-dom";
import logements from "../data/logements"; // Import du JSON
import '../styles/Gallery.scss';
import '../styles/_mixins.scss';
import '../styles/_variables.scss';
function Gallery() {
  return (
    <div className='gallery'>
            <div className="galerie">
            {logements.map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id} className="galerie-item">
                <img src={logement.cover} alt={logement.title} className="galerie-image" />
                <h2 className="galerie-title">{logement.title}</h2>
                </Link>
            ))}
            </div>
    </div>
  );
}

export default Gallery;