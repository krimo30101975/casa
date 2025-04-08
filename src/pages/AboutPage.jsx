import React, { useState } from 'react';
import '../styles/AboutPage.scss';
import '../styles/_mixins.scss';
import '../styles/_variables.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function AboutPage() {
  const dropdownData = [
    { title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', content: 'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.' },
    { title: 'Sécurité', content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' }
  ];

  const [dropdownStates, setDropdownStates] = useState(
    dropdownData.map(() => false)
  );

  const toggleDropdown = (index) => {
    setDropdownStates((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="about_container">
      <div className="banner">
        <img
          src="src/assets/images/Image source 2.jpg"
          alt="image d'une falaise au bord de la mer"
        />
      </div>

      <div className="blocDropdown">
        {dropdownData.map((item, index) => (
          <div
            className={`dropdown ${dropdownStates[index] ? 'open' : ''}`}
            key={index}
          >
            <div className="top_bar" onClick={() => toggleDropdown(index)}>
              <h3 className="TitleDropdown">{item.title}</h3>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`dropdown-icon ${dropdownStates[index] ? 'rotated' : ''}`}
              />
            </div>

            <div className="dropdown-content">
              <p className="dropdown-text">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
