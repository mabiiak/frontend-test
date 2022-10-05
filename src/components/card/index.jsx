import React from 'react';

export default function Card({ image, title, description, director, year }) {
  return(
    <div>
      <img src={ image } alt={`banner from movie ${ title }`} />
      <p>{ year }</p>
      <h3>{ title }</h3>
      <p>{ description }</p>
    </div>
  )
}
