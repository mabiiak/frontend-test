import React from 'react';
import Button from '../button'

export default function Filter() {
  return(
    <div>
      <input type="text" />
      <p>Filter by</p>
      <Button nameBtn="Movies" />
      <Button nameBtn="Actors" />
      <Button nameBtn="Local" />
    </div>
  )
}
