import React from 'react';
import './Barnav.css'
function Barnav() {
  return (
    <nav className='navbar'>
      <div className="navbar_logo">
        <img src="public/logo/LOGO_kasa_orange.png" alt="logo kasa couleur orange" />
      </div>
      <div className="navbar_link">
        <ul>
          <li><a className="link_acueil active" href="">Accueil</a></li>
          <li><a className="link_a_propos" href="">A Propos</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Barnav;