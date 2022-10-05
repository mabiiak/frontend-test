import React, { useContext } from 'react';
import { Context } from '../../context/provider'
import fetchMovies from '../../utils/fetchMovies';

export default function Button({ nameBtn }) {
  const { setSearch, setData } = useContext(Context)

  const resetData = async () => {
    const response = await fetchMovies()
    setData(response)
  }

  const clickButton = () => {
    setSearch('')
    resetData()
  }

  return(
    <button type="button" onClick={ clickButton }>
      { nameBtn }
    </button>
  )
}
