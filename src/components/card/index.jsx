import React from 'react';
import CardMovie from './style';

export default function Card({ image, title, description, director, year }) {
  return(
    <CardMovie>
      <img src={ image } alt={`banner from movie ${ title }`} />
      <div id="informations">
        <h2>{ title }</h2>
        <p>{ year }</p>
        <p>Director: { director }</p>
        <p>{ description }</p>
      </div>
    </CardMovie>
  )
}
