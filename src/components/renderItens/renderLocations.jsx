import React, { useContext } from 'react';
import { Context } from '../../context/provider'
import CardLocation from '../card/cardLocation';
import CardEmpty from '../card/cardEmpty'
import DisplayCards from './style';

export default function RenderLocations() {
  const { locations } = useContext(Context);

  return(
    <section>
      <DisplayCards>
        {
          locations !== 'empty' ?
          locations.map((local) => (
            <CardLocation
              key={ local.id }
              name={ local.name }
              climate={ local.climate }
              terrain={ local.terrain }
              surfaceWater={ local.surface_water }
              residents={ local.residents }
              films={ local.films }
            />
          ))
          : (<CardEmpty />)
        }
      </DisplayCards>
    </section>
  )
}
