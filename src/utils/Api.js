const url = 'https://restcountries.com/v3.1/all';

const fetchCountries = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchCountries;
