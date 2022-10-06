import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/provider'
import fetchGhibli from '../../utils/fetch';
import CardCharacter from '../card/cardCharacter';

export default function RenderCharacteres() {
  const { search, setSearch, typeSearch, characters, setCharacters } = useContext(Context);

  const allCharacteres = async () => {
    const URL = 'https://ghibliapi.herokuapp.com/people'

    const response = await fetchGhibli(URL);
    setCharacters(response);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { allCharacteres() }, [search, typeSearch])

  return(
    <section>
      <h2 id="all-characteres">Characteres</h2>
      {
        characters.length > 0 &&
        characters.map((char) => {
          return(
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
        )})
      }
    </section>
  )
}
