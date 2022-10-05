import React from 'react';
import Title from '../../components/title'
import Filter from '../../components/filter'
import RenderCard from '../../components/renderCard';

export default function Home() {
  return(
    <div>
      <Title />
      <Filter />
      <RenderCard />
    </div>
  )
}
