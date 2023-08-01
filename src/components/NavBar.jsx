import React from 'react';
import '../styles/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav>
      <p className="year">2023</p>
      <p className="title">Country Details</p>
      <div className="icons">
        <FontAwesomeIcon icon={faGear} />
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
    </nav>
  );
}

export default NavBar;
