import React from 'react';
import Title from '../../components/title'
import Seekers from '../../components/seekers'
import RenderCard from '../../components/renderCard';

export default function Home() {
  return(
    <div>
      <Title />
      <Seekers />
      <RenderCard />
    </div>
  )
}
