import styled from 'styled-components'
import { bgButton, bgHeader, bgCards, colorTitle } from '../../colors'

const FormStyle = styled.header`
  align-items: center;
  background-color: ${bgHeader};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 30vh;
  width: 100vw;
  margin-bottom: 2%;

  #first-line {
    display: flex;
    justify-content: center;
    margin-left: 40%;
    /* background-color: orange; */
    /* width: 30%; */

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

    img {
      width: 30%;
      margin-left: 40%;
    }
  }

  #seekers {
    display:flex;
    align-items: stretch;
    height: 8vh;
    width: 100%;

    input {
      background-color: ${ bgHeader };
      border: solid 1px ${ bgCards };
      color: ${ bgCards };
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
      background-color: ${ bgHeader };
      border: solid 1px ${ bgCards };
      border-left: none;
      text-align: center;
      width: 29.6%;
      height: 107.5%;
      color: ${colorTitle};
      font-size: 15px;
    }
    
    button {
      background: ${ bgButton };
      border: solid 1px ${ bgCards };
      border-left: none;
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
