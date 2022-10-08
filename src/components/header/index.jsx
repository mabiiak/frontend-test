import React, { useContext } from 'react';
import { Context } from '../../context/provider';
import Button from '../button';
import FormStyle from './style.js';

export default function Header() {
  const { search, setSearch, setTypeSearch, setMovies, setCharacters, setLocations } = useContext(Context)

  const captureText = ({ target }) => {
    const { value, name } = target;
    name === 'type-search' ? setTypeSearch(value) : setSearch(value);
  }

  const clickTitle = () => {
    setTypeSearch('Select your option');
    setSearch('');
    setMovies([]);
    setCharacters([]);
    setLocations([]);
    
    const options = document.querySelectorAll('select option')
    for (let i = 0; i < options.length; i++) {
      options[i].selected = options[i].defaultSelected;
    }
  }

  return(
    <FormStyle>
      <h1 onClick={ clickTitle }>Guide Ghibli</h1>
      <div id="seekers">
        <input
          id="type-search"
          name="input"
          type="text"
          placeholder="Type your seach"
          onChange={ captureText }
          value={ search }
        />

        <select name="type-search" onChange={ captureText }>
          <option selected>Select your option</option>
          <option value="Movies">Movies</option>
          <option>Characters</option>
          <option>Locations</option>
        </select>
    
        <Button textBtn="Search"/>
      </div>
    </FormStyle>
  )
}
