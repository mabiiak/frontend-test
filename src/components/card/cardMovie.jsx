import React from 'react';
import CardMovieStyle from './style';

export default function CardMovie({ image, title, description, director, year }) {
  return(
    <CardMovieStyle>
      <img src={ image } alt={`banner from movie ${ title }`} />
      <div id="informations">
        <h2>{ title }</h2>
        <p>{ year }</p>
        <p>Director: { director }</p>
        <p>{ description }</p>
      </div>
    </CardMovieStyle>
  )
}
