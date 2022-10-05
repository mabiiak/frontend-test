import React, { useContext } from 'react';
import { Context } from '../../context/provider'
import Button from '../button'
import FormStyle from './style.js'

export default function Seekers() {
  const { setSearch, setTypeSearch } = useContext(Context)

  const captureText = ({ target, name }) => {
    const { value } = target

    name === 'seekers' ? setTypeSearch(value) : setSearch(value)
  }

  return(
    <FormStyle>
      <input
        type="text"
        placeholder="Type your seach"
        onChange={ captureText }
      />

      <p>Search by:</p>

      <select name="seekers" onChange={ captureText }>
        <option>Movies</option>
        <option>Characters:</option>
        <option>Locations</option>
      </select>

      <Button nameBtn="See all" />
    </FormStyle>
  )
}
