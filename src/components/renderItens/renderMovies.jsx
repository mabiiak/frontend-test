import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/provider'
import fetchGhibli from '../../utils/fetch';
import CardMovie from '../card/cardMovie';
import DisplayCards from './style';

export default function RenderMovies() {
  const { typeSearch, movies, setMovies } = useContext(Context);

  const allMovies = async () => {
    const URL = 'https://ghibliapi.herokuapp.com/films'
    const response = await fetchGhibli(URL);
    setMovies(response);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    allMovies();
    if (typeSearch === 'Select your option') allMovies();
  }, [])

  return(
    <section>
      <span id="all-movies"/>
      <DisplayCards>
        {
          movies.length > 0 &&
          movies.map((movie) => (
              <CardMovie
                key={ movie.id }
                image={ movie.image }
                title={ movie.title }
                description={ movie.description }
                director={ movie.director }
                year={ movie.release_date }
              />
            ))
        }
      </DisplayCards>
    </section>
  )
}
