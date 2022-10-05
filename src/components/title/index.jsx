import React from 'react';
import logo from '../../images/logo-ghibli.png'
import HeaderStyle from './style'

export default function Title() {
  return(
    <HeaderStyle>
      <img src={ logo } alt="logo studio ghibli" />
    </HeaderStyle>
  )
}
