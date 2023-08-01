import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import fetchCountries from '../../utils/Api';

const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const countries = await fetchCountries();
  const response = countries.map((country) => ({
    id: uuidv4(),
    name: country.name.common,
    capital: country.capital,
    region: country.region,
    currency: country.currencies,
    language: country.languages,
    timezone: country.timezones,
    population: country.population,
    flag: country.flags.png,
    singleFlag: country.flag,
    map: country.maps.googleMaps,
  }));
  return response;
});

const initialState = {
  countries: [],
  status: null,
  error: null,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.status = 'success';
      state.countries = action.payload;
    });
    builder.addCase(getCountries.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export { getCountries };
export default countrySlice.reducer;
