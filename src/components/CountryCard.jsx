import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import '../styles/CountryCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function CountryCard({
  id, name, population, flag,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="country">
      <div className="country-flag">
        <img src={flag} alt={name} />
      </div>
      <div className="country-name">
        <h3>{name}</h3>
        <p className="population">
          <span>Population: </span>
          {population}
        </p>
        <button type="button" className="details-btn" onClick={handleClick}>
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </button>
      </div>
    </div>
  );
}

CountryCard.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  population: propTypes.number.isRequired,
  flag: propTypes.string.isRequired,
};

export default CountryCard;
