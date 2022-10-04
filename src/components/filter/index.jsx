import React, { useContext } from 'react';
import { Context } from '../../context/provider'
import Button from '../button'
import FilterStyle from './style.js'

export default function Filter() {
  const { search, setSearch } = useContext(Context)

  const captureTextSearch = ({ target }) => {
    const { value } = target
    setSearch(value)
  }

  return(
    <FilterStyle>
      <input
        type="text"
        placeholder="Insert"
        onChange={ captureTextSearch }
      />
      <p>Filter by:</p>
      <Button nameBtn="Movies" />
      <Button nameBtn="Actors" />
      <Button nameBtn="Local" />
    </FilterStyle>
  )
}
