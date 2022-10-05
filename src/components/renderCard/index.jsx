import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/provider'
import fetchMovies from '../../utils/fetchMovies';
import Card from '../card';
import DisplayCards from './style';

export default function RenderCard() {
  const { search, typeSearch, data, setData } = useContext(Context);

  const itensRender = async () => {
    const response = await fetchMovies()
    setData(response)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (data.length === 0) itensRender()

    const lengthMinSearch = search.length > 0;
    const lengthMinData = data.length !== 0

    if (lengthMinData && lengthMinSearch && typeSearch === "Movies"){
      setData(data.filter((movie) => movie.title.toLowerCase().includes(search)))
    }
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
