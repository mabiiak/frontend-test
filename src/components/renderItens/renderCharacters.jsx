import React, { useContext } from 'react';
import { Context } from '../../context/provider'
import CardCharacter from '../card/cardCharacter';
import CardEmpty from '../card/cardEmpty';
import DisplayCards from './style';

export default function RenderCharacteres() {
  const { characters } = useContext(Context);

  return(
    <DisplayCards>
      {
        characters.length !== 0 && (<h2>Characters</h2>)
      }
      <div>
        {
          characters !== 'empty' ?
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
          : (<CardEmpty />)
        }
      </div>
    </DisplayCards>
  )
}
