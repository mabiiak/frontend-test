import React, { useContext } from 'react';
import { Context } from '../../context/provider'

export default function Button({ textBtn, nameProp }) {
  const { setTypeSearch } = useContext(Context)

  const clickButton = ({ target }) => {
    const { name } = target;
    setTypeSearch(name)
  }

  return(
    <button
      type="button"
      name={ nameProp }
      onClick={ clickButton }
    >
      { textBtn }
    </button>
  )
}
