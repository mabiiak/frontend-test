import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/provider'
import fetchMovies from '../../utils/fetchMovies';
import Card from '../card';
import DisplayCards from './style';

export default function RenderCard() {
  const { search, setSearch, typeSearch, data, setData } = useContext(Context);

  const allMovies = async () => {
    const response = await fetchMovies();
    setData(response);
    setSearch('');
  }

  const filterMovies = async () => {
    const response = await fetchMovies()
    const result = response.filter((movie) => movie.title.toLowerCase().includes(search))

    setData(result)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (typeSearch === "findMovie") filterMovies()
    if (typeSearch === "allMovies") allMovies()
  }, [search, typeSearch])

  return(
    <DisplayCards>
      {
        data.length > 0 &&
          data.map((movie) => (
            <Card
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
  )
}
