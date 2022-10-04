import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
  const [search, setSearch] = useState('');

  const states = { search, setSearch };

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
