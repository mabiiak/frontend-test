import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/provider'
import fetchMovies from '../../utils/fetchMovies';
import Card from '../card';
import DisplayCards from './style';

export default function RenderCard() {
  const { data, setData } = useContext(Context)

  const itensRender = async () => {
    const response = await fetchMovies()
    setData(response)
  }

  useEffect(() => { itensRender() }, [])

  return(
    <DisplayCards>
      {
        data.map((movie) => (
          <Card
            image={ movie.image }
            title={ movie.title }
            description={ movie.description }
            director={ movie.director }
            year={ movie.release_date }
          />
        ))
      }
    </DisplayCards>
  )
}
