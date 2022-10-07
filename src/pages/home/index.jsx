import React from 'react';
import Header from '../../components/header'
import RenderMovies from '../../components/renderItens/renderMovies';
import RenderCharacteres from '../../components/renderItens/renderCharacters';
import HomeStyle from './style';

export default function Home() {
  return(
    <HomeStyle>
      <Header />
      <RenderMovies />
      <RenderCharacteres />
    </HomeStyle>
  )
}
