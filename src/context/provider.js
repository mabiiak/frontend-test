import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
  const [search, setSearch] = useState('');
  const [typeSearch, setTypeSearch] = useState('all');
  const [data, setData] = useState([]);

  const states = {
    search,
    setSearch,
    data,
    setData,
    typeSearch,
    setTypeSearch
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
