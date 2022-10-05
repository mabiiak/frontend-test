import React, { useContext } from 'react';
import { Context } from '../../context/provider'
import Button from '../button'
import FormStyle from './style.js'

export default function Seekers() {
  const { search, setSearch, setTypeSearch } = useContext(Context)

  const captureText = ({ target }) => {
    const { value, name } = target
    if (name === 'seekers') setTypeSearch(value)
    if (name === 'input') setSearch(value)
  }

  return(
    <FormStyle>
      <input
        name="input"
        type="text"
        placeholder="Type your seach"
        onChange={ captureText }
        value={ search }
      />

      <p>Search by:</p>

      <select name="seekers" onChange={ captureText }>
        <option disabled selected>Select your option</option>
        <option>Movies</option>
        <option>Characters</option>
        <option>Locations</option>
      </select>

      <Button nameBtn="See all" />
    </FormStyle>
  )
}
