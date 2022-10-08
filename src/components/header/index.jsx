import React, { useContext } from 'react';
import { Context } from '../../context/provider';
import Button from '../button';
import FormStyle from './style.js';
import totoro from '../../images/totoro.png';

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
  }

  return(
    <FormStyle>
      <div id="first-line">  
        <h1 onClick={ clickTitle }>Guide Ghibli</h1>
        <img src={ totoro } alt="tororo" />
      </div>
      <div id="seekers">
        <input
          name="input"
          type="text"
          placeholder="Type your seach"
          onChange={ captureText }
          value={ search }
        />

        <select name="type-search" onChange={ captureText }>
          <option disabled selected>Select your option</option>
          <option>Movies</option>
          <option>Characters</option>
          <option>Locations</option>
        </select>
    
        <Button textBtn="Search"/>
      </div>
    </FormStyle>
  )
}
