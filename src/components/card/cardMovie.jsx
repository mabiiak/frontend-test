import React from 'react';
import { CardMovieStyle } from './style';

export default function CardMovie({ image, title, director, year }) {
  return(
    <CardMovieStyle>
      <img src={ image } alt={`banner from movie ${ title }`} />
      <div id="informations">
        <h3>{ title }</h3>
        <p>{ year }</p>
        <p>{ director }</p>
      </div>
    </CardMovieStyle>
  )
}
