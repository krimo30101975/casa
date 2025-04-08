import React, { useState } from "react";

export function DropdownDescription(logement) {
    const [isContentVisible, setContentVisible] = useState[false];

    const toggleDropdown = () => {
        setContentVisible(!isContentVisible);
    }
    return (

            
        <div className="blocDropdown_appartement">

            {/* Dropdown Équipements */}
            <div vlassName = "dropdownBloc">
                <div className="topBar" onClick={toggleDropdown}>
                    <h3 className="TitleDropdown">Équipements</h3> 
                    <FontAwesomeIcon icon={faChevronUp} className= "dropdown-icon, rotated" />
                </div>
                {activeDropdownEquipements && <div className={"dropdown-content"}>
                    <ul>
                        {logement.equipments.map((equip, index) => (
                            <li className="dropdown-text" key={index}>{equip}</li>
                        ))}
                    </ul>
                </div>}
            </div>

            {/* Dropdown Description */}
            <div vlassName = "dropdownBloc">
                <div className="topBar" onClick={toggleDropdown}>
                    <h3 className="TitleDropdown">Équipements</h3> 
                    <FontAwesomeIcon icon={faChevronUp} className= "dropdown-icon, rotated" />
                </div>
                {isContentVisible && <p className="dropdown-content">{logement.description}</p>}
            </div>
        </div>
    );
}