import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../data/logements"; 
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import '../styles/LogementPage.scss';
import '../styles/_mixins.scss';
import '../styles/_variables.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function LogementPage() {
    const { id } = useParams(); 
    const navigate = useNavigate();
  
    const logement = logements.find((item) => item.id === id);
  
    if (!logement) {
        navigate("/error", { replace: true });
        return null;
    }

    const renderStars = (rating) => {
        const numericRating = parseInt(rating, 10);
        return Array.from({ length: 5 }, (_, i) => (
            <FontAwesomeIcon 
                key={i} 
                icon={faStar} 
                className={`star ${i < numericRating ? 'red' : 'gray'}`} 
            />
        ));
    };

    // 👇 Préparation des données pour les dropdowns
    const dropdownData = [
        {
            title: "Description",
            content: logement.description,
        },
        {
            title: "Équipements",
            content: logement.equipments,
        }
    ];

    return (
        <div className="logement-page">
            <Carousel pictures={logement.pictures} />

            <div className="bloc_infos">
                <div className="bloc_text_host">
                    <div className="bloc_text">
                        <div className="titleLocation">
                            <h1>{logement.title}</h1>
                            <p>{logement.location}</p>
                        </div>
                        <ul>
                            {logement.tags.map((tag, index) => (
                                <li className="tag_list" key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bloc_host">
                        <div className="host">
                            <div className="host-info">
                                {logement.host.name.split(" ").map((part, index) => (
                                    <span key={index} className="host-name">{part}</span>
                                ))}
                            </div>
                            <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
                        </div>

                        <div className="rating">
                            {renderStars(logement.rating)}
                        </div>
                    </div>
                </div>

                <div className="Dropdown_container">
                    <Dropdown title="Description">
                        {logement.description}
                    </Dropdown>

                    <Dropdown title="Équipements">
                        {logement.equipments}
                    </Dropdown>
                </div>
            </div>
        </div>
    );
}

export default LogementPage;
