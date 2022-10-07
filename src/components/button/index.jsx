import React, { useContext } from 'react';
import { Context } from '../../context/provider'
import fetchGhibli from '../../utils/fetch';

export default function Button({ textBtn, id }) {
  const { search, typeSearch, setMovies, movies, setSearch, setCharacters, } = useContext(Context);

  const filterMovies = async () => {
    const result = movies.filter((movie) => movie.title.toLowerCase().includes(search));

    setMovies(result);
    setSearch('');
  }

  const filterCharacteres = async () => {
    
    const URL = 'https://ghibliapi.herokuapp.com/people'
    
    const response = await fetchGhibli(URL);
    const result = response.filter((movie) => movie.name.toLowerCase().includes(search));
  
    setCharacters(result);
    setSearch('');
  }

  const clickButton = () => {
    if (typeSearch === 'Movies') filterMovies();
    if (typeSearch === 'Characters') filterCharacteres();
  }

  return(
    <button
      type="button"
      onClick={ clickButton }
      id={ id }
    >
      { textBtn }
    </button>
  )
}
