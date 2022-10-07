import React, { useContext } from 'react';
import { Context } from '../../context/provider'
import CardCharacter from '../card/cardCharacter';
import DisplayCards from './style';

export default function RenderCharacteres() {
  const { characters } = useContext(Context);

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
