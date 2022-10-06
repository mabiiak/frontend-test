import React, { useContext } from 'react';
import { Context } from '../../context/provider'
import Button from '../button'
import FormStyle from './style.js'

export default function Header() {
  const { search, setSearch, setTypeSearch } = useContext(Context)

  const captureText = ({ target }) => {
    const { value, name } = target
    name === 'type-search' ? setTypeSearch(value) : setSearch(value)
  }

  return(
    <FormStyle>
      <h1>Guide Ghibli</h1>
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
  
      <Button nameProp="true" textBtn="Search"/>

      <nav>
        <a href='#all-movies'>Movies</a>
        <a href='#all-characteres'>Characters</a>
        <a href='#all-locations'>Locations</a>
      </nav>
    </FormStyle>
  )
}
