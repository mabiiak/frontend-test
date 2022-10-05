import React, { useContext } from 'react';
import { Context } from '../../context/provider'
import Button from '../button'
import FormStyle from './style.js'

export default function Seekers() {
  const { search, setSearch } = useContext(Context)

  const captureText = ({ target }) => {
    const { value } = target
    setSearch(value)
  }

  return(
    <FormStyle>
      <div id="all">
        <Button nameProp="allMovies" textBtn="All Movies" />
        <Button nameProp="" textBtn="All Characters" />
        <Button nameProp="" textBtn="All Locations" />
      </div>
      <div id="filter">
        <input
          name="input"
          type="text"
          placeholder="Type your seach"
          onChange={ captureText }
          value={ search }
        />
        <Button nameProp="findMovie" textBtn="Search movies"/>
        <Button nameProp="findCharacters" textBtn="Search characters"/>
        <Button nameProp="findLocations" textBtn="Search locations"/>
      </div>
    </FormStyle>
  )
}
