import React, { useState, useEffect } from 'react';
import fetchGhibli from '../../utils/fetch';
import { CardCharacterStyle } from './style';

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
    <CardCharacterStyle>
      <h3>{ name }</h3>
      <p><b>Age: </b>{ age }</p>
      <p><b>Gender: </b>{ gender }</p>
      <p><b>Eye color: </b>{ eye_color }</p>
      <p><b>Hair color: </b>{ hair_color }</p>
      <p><b>Specie: </b>{ seeSpecie }</p>
      <p id="list"><b>Films: </b></p>
        {
          listMovies.map((film) => (<p>{ film }</p>))
        }
    </CardCharacterStyle>
  )
}
