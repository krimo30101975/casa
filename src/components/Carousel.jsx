import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../styles/Carousel.scss";
import '../styles/_mixins.scss';
import '../styles/_variables.scss';

export default function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);

  // Fonction pour afficher l'image précédente dans le carrousel
  const prevImage = () => {
    // Si l'index actuel est 0 (première image), on passe à la dernière image (boucle)
    // Sinon, on décrémente l'index pour aller à l'image précédente
    setIndex(index === 0 ? pictures.length - 1 : index - 1);
  };

// Fonction pour afficher l'image suivante dans le carrousel
  const nextImage = () => {
    // Si l'index actuel est égal au dernier index (dernière image), on repasse à la première image (boucle)
    // Sinon, on incrémente l'index pour aller à l'image suivante
    setIndex(index === pictures.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="carousel">
          <img src={pictures[index]} alt={`Slide ${index + 1}`} className="carousel-img" />

      {/* Flèches gauche/droite + afficher que si superieur à image */}
      {pictures.length > 1 && (
        <>
          <button onClick={prevImage} className="carousel-btn left"><FontAwesomeIcon icon={faChevronUp} className={`dropdown-icon "rotated" : ""}`} /></button>
          <button onClick={nextImage} className="carousel-btn right"><FontAwesomeIcon icon={faChevronUp} className={`dropdown-icon "rotated" : ""}`} /></button>
        </>
      )}
        {/* Compteur + afficher que si superieur à image */}
        {pictures.length > 1 && (
            <div className="carousel-counter">
                {index + 1} / {pictures.length}
            </div>
        )}
    </div>
  );
}
