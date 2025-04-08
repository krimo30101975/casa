import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Navbar.scss';
import '../styles/_mixins.scss';
import '../styles/_variables.scss';
function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar_logo">
        <img src="src/assets/logo/LOGO_kasa_orange.png" alt="logo kasa couleur orange" />
      </div>
      <ul className="navbar_link">
        <li><NavLink to="/" className="link_acueil">Accueil</NavLink></li>
        <li><NavLink to="/about" className="link_acueil">A Propos</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;