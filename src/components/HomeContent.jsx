import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountryCard from './CountryCard';
import { getCountries } from '../redux/countries/CountrySlice';
import '../styles/HomeContent.css';
import NavBar from './NavBar';

function HomeContent() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch, countries]);

  const searchLocation = (e) => {
    setLocation(e.target.value);
  };

  const sortedCountries = countries.filter(
    (country) => country.name.toLowerCase().includes(location.toLowerCase())
      || country.region.toLowerCase().includes(location.toLowerCase()),
  );

  const filteredCountries = sortedCountries.map((country) => (
    <CountryCard
      key={country.id}
      id={country.id}
      name={country.name}
      population={country.population}
      flag={country.flag}
    />
  ));

  return (
    <>
      <NavBar />
      <div>
        <div className="hero-section">
          <div className="hero-section-image">
            <h1>Basic Country Info</h1>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              onChange={searchLocation}
              value={location}
              onKeyDown={searchLocation}
            />
          </div>
        </div>
        <div className="stats">
          <p className="stats-text">stats by country</p>
        </div>
        <ul className="country-list">{filteredCountries}</ul>
      </div>
    </>
  );
}

export default HomeContent;
