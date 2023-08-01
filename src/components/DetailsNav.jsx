import React from 'react';
import '../styles/NavBar.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faMicrophone,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <nav>
      <p className="year">
        <button type="button" className="back">
          <FontAwesomeIcon icon={faAngleLeft} onClick={handleClick} />
        </button>
      </p>
      <p className="title">Country Details</p>
      <div className="icons">
        <FontAwesomeIcon icon={faGear} />
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
    </nav>
  );
}

export default NavBar;
