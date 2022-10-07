import React, { useState, useEffect } from 'react';
import { CardCharacterStyle } from './style';
import fetchGhibli from '../../utils/fetch';

export default function CardLocation({ name, climate, terrain, surfaceWater, residents, films }) {
  const [listMovies, setList] = useState([]);
  const [listResidents, setResidents] = useState([]);

  const findMovies = async (URL) => {
    const response = await fetchGhibli(URL);
    setList((old) => [...old, response.title]);
  }

  const findResident = async (URL) => {
    const response = await fetchGhibli(URL);
    setResidents((old) => [...old, response.name]);
  }

  useEffect(() => {
    setList([]);
    setResidents([]);
    films.map((film) => findMovies(film));
    residents.map((res) => res !== 'TODO' && findResident(res));
  }, [])

  return(
    <CardCharacterStyle>
      <h3>{ name }</h3>
      <p>
        { climate === 'TODO' ? (<span/>) : (<p><b>Climate:</b> { name }</p>) }
      </p>
      <p>
        { terrain === 'TODO' ? (<span/>) : (<p><b>Terrain:</b>{ terrain }</p>) }
      </p>
      <p><b>Surface water: </b>{ surfaceWater }</p>
      <p><b>Residents:</b></p>
      {
        listResidents.length === 0
          ? (<p>none</p>)
          : listResidents.map((char) => (<p>{ char }</p>))
      }
      <p><b>Films</b></p>
      {
        listMovies.map((film) => <p>{film }</p>)
      }
    </CardCharacterStyle>
  )
}
