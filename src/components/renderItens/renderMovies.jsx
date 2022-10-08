import React, { useContext } from 'react';
import { Context } from '../../context/provider'
import CardMovie from '../card/cardMovie';
import CardEmpty from '../card/cardEmpty';
import DisplayCards from './style';

export default function RenderMovies() {
  const { movies } = useContext(Context);

  return(
    <DisplayCards>
      {
        movies !== 'empty' ?
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
        : (<CardEmpty />)
      }
    </DisplayCards>
  )
}
