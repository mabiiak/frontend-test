import React from 'react';
import Header from '../../components/header'
import RenderMovies from '../../components/renderItens/renderMovies';
import RenderCharacteres from '../../components/renderItens/renderCharacters';
import RenderLocations from '../../components/renderItens/renderLocations';
import HomeStyle from './style';

export default function Home() {
  return(
    <HomeStyle>
      <Header />
      <RenderMovies />
      <RenderCharacteres />
      <RenderLocations />
    </HomeStyle>
  )
}
