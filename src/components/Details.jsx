import React from 'react';
import '../styles/Details.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailsNav from './DetailsNav';

function Details() {
  const { id } = useParams();
  const countries = useSelector((state) => state.countries.countries);

  const country = countries.filter((item) => item.id === id)[0];

  return (
    <>
      <DetailsNav />
      <div className="details">
        <div className="details-hero">
          <h1>{country.name}</h1>
          <div className="country-flag">
            <img src={country.flag} alt="hero" className="flag" />
          </div>
        </div>
        <div className="details-stats">
          <div className="details-stats-item">
            <p className="first">capital</p>
            <p>{country.capital}</p>
          </div>
          <div className="details-stats-item">
            <p className="first">region</p>
            <p>{country.region}</p>
          </div>
          <div className="details-stats-item">
            <p className="first">time zone</p>
            <p className="zone">{country.timezone.join(',')}</p>
          </div>
          <div className="details-stats-item">
            <p className="first">population</p>
            <p>{country.population}</p>
          </div>
          <div className="details-stats-item">
            <p className="first">location</p>
            <a href={country.map}>map</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
