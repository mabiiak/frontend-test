import React, { useContext } from 'react';
import { Context } from '../../context/provider'
import fetchGhibli from '../../utils/fetch';

export default function Button({ textBtn, id }) {
  const {
    search,
    typeSearch,
    setMovies,
    setSearch,
    setCharacters,
    setLocations,
    setTypeSearch,
  } = useContext(Context);

  const filterMovies = async () => {
    const URL = 'https://ghibliapi.herokuapp.com/films'
    
    const response = await fetchGhibli(URL);
    const result = response.filter((movie) => movie.title.toLowerCase().includes(search));
    
    result.length === 0 ? setMovies("empty") : setMovies(result);
    setSearch('');
  }

  const filterCharacteres = async () => {
    const URL = 'https://ghibliapi.herokuapp.com/people'
    
    const response = await fetchGhibli(URL);
    const result = response.filter((movie) => movie.name.toLowerCase().includes(search));
  
    result.length === 0 ? setCharacters("empty") : setCharacters(result);
    setSearch('');
  }

  const filterLocations = async () => {
    const URL = 'https://ghibliapi.herokuapp.com/locations'
    
    const response = await fetchGhibli(URL);
    const result = response.filter((movie) => movie.name.toLowerCase().includes(search));
  
    result.length === 0 ? setLocations("empty") : setLocations(result);
    setSearch('');
  }

  const clickButton = () => {
    if (typeSearch === 'Movies') filterMovies();
    if (typeSearch === 'Characters') filterCharacteres();
    if (typeSearch === 'Locations') filterLocations();

    const options = document.querySelectorAll('select option')
    for (let i = 0; i < options.length; i++) {
      options[i].selected = options[i].defaultSelected;
    }

    setTypeSearch('Select your option')
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
