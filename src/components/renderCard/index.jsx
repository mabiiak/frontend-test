import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/provider'
import fetchMovies from '../../utils/fetchMovies';
import fetchLocations from '../../utils/fetchLocations';
import fetchPeople from '../../utils/fetchPeople';
import CardMovie from '../card/cardMovie';
import CardCharacter from '../card/cardCharacter';
import DisplayCards from './style';

export default function RenderCard() {
  const { search, setSearch, typeSearch, data, setData } = useContext(Context);

  const allMovies = async () => {
    const URL = 'https://ghibliapi.herokuapp.com/films'
    const response = await fetchMovies(URL);
    setData(response);
    setSearch('');
  }

  const allLocations = async () => {
    const response = await fetchLocations();
    setData(response);
    setSearch('');
  }

  const allCharacteres = async () => {
    const URL = 'https://ghibliapi.herokuapp.com/people'

    const response = await fetchPeople(URL);
    setData(response);
    setSearch('');
  }

  const filterMovies = async () => {
    const URL = 'https://ghibliapi.herokuapp.com/films'
    const response = await fetchMovies(URL);
    const result = response.filter((movie) => movie.title.toLowerCase().includes(search));

    setData(result);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (typeSearch === "findMovie") filterMovies();
    if (typeSearch === "allMovies") allMovies();
    if (typeSearch === "allLocations") allLocations();
    if (typeSearch === "allCharacteres") allCharacteres();
  }, [search, typeSearch])

  return(
    <DisplayCards>
      {
        typeSearch.toLowerCase().includes('movie')
        && data.length > 0 ?
          data.map((movie) => (
            <CardMovie
              key={ movie.id }
              image={ movie.image }
              title={ movie.title }
              description={ movie.description }
              director={ movie.director }
              year={ movie.release_date }
            />
          ))
          : data.map((char) => (
            <CardCharacter
              name={ char.name }
              age={ char.age }
              gender={ char.gender }
              eye_color={ char.eye_color }
              hair_color={ char.hair_color }
              specie={ char.species }
              films={ char.films }
            />
          ))
      }
    </DisplayCards>
  )
}
