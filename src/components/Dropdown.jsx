import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/Dropdown.scss";
import '../styles/_mixins.scss';
import '../styles/_variables.scss';

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="dropdownBloc">
      <div className="topBar" onClick={toggle}>
        <h3 className="TitleDropdown">{title}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`dropdown-icon ${isOpen ? "rotated" : ""}`}
        />
      </div>

      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {typeof children === "string" ? (
          <p className="dropdown-text">{children}</p>
        ) : (
          <ul>
            {children.map((item, index) => (
              <li key={index} className="dropdown-text">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
