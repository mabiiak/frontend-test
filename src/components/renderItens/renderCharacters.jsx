import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/provider'
import fetchGhibli from '../../utils/fetch';
import CardCharacter from '../card/cardCharacter';
import DisplayCards from './style';

export default function RenderCharacteres() {
  const { search, typeSearch, characters, setCharacters } = useContext(Context);

  const allCharacteres = async () => {
    const URL = 'https://ghibliapi.herokuapp.com/people'

    const response = await fetchGhibli(URL);
    setCharacters(response);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => { allCharacteres() }, [])

  return(
    <DisplayCards>
      <span id="all-characteres"/>
      {
        characters.length > 0 &&
        characters.map((char) => (
          <CardCharacter
            key={ char.name }
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
