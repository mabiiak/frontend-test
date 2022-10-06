import React, { useState, useEffect } from 'react';
import fetchGhibli from '../../utils/fetch';

export default function CardCharacter({ name, age, gender, eye_color, hair_color, specie, films }) {
  const [listMovies, setList] = useState([]);
  const [seeSpecie, setSpecie] = useState('');

  const findMovies = async (URL) => {
    const response = await fetchGhibli(URL);
    setList((old) => [...old, response.title]);
  }

  const findSpecie = async (URL) => {
    const response = await fetchGhibli(URL);
    setSpecie(response.name);
  }

  useEffect(() => {
    setList([]);
    films.map((film) => findMovies(film));
    findSpecie(specie);
  }, [])

  return(
    <div>
      <h3>Name: { name }</h3>
      <p>Age: { age }</p>
      <p>Gender: { gender }</p>
      <p>Eye color: { eye_color }</p>
      <p>Hair color: { hair_color }</p>
      <p>Specie: { seeSpecie }</p>
      <p>Films:</p>
      <ul>
        {
          listMovies.map((film) => (<li>{ film }</li>))
        }
      </ul>
    </div>
  )
}
