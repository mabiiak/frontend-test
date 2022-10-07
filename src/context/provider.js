import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
  const [search, setSearch] = useState('');
  const [typeSearch, setTypeSearch] = useState('Select your option');
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);

  const states = {
    search,
    setSearch,
    typeSearch,
    setTypeSearch,
    movies,
    setMovies,
    characters,
    setCharacters,
    locations,
    setLocations,
  };

  return (
    <Context.Provider value={ states }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
