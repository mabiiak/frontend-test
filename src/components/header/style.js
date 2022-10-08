import styled from 'styled-components'
import { bgButton, bgPrincipal, bgCards, colorTitle } from '../../colors'

const FormStyle = styled.header`
  align-items: center;
  background-color: ${bgPrincipal};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 30vh;
  width: 99vw;
  margin-bottom: 2%;

  h1 {
    align-items: flex-end;
    color: ${ colorTitle };
    display: flex;
    font-size: 52px;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
  }

  h1:hover {
    cursor: grab
  }

  #seekers {
    display:flex;
    align-items: stretch;
    height: 8vh;
    width: 100%;

    input {
      background-color: ${ bgPrincipal };
      border: solid 1px ${ colorTitle };
      color: ${ colorTitle };
      text-align: center;
      width: 50%;
      height: 100%;
      font-size: 15px;
    }
  
    input::placeholder {
      color: ${colorTitle};
    }

    input:active {
      border: solid 1px ${ bgCards };
    }
  
    select {
      background-color: ${ bgPrincipal };
      border: solid 1px ${ colorTitle };
      border-left: none;
      border-right: none;
      text-align: center;
      width: 29.6%;
      height: 107%;
      color: ${colorTitle};
      font-size: 15px;
    }

    option {
      background-color: ${bgCards};
    }
    
    button {
      background: ${ bgButton };
      border: none;
      font-size: 20px;
      text-align: center;
      text-transform: uppercase;
      width: 20%;
      height: 108%;
      color: ${ colorTitle };
      font-family: 'Oswald', sans-serif;
    }
  
    button:hover {
      cursor: grab
    }
  }
`

export default FormStyle
