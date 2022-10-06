import styled from 'styled-components'
import { btnColor, bgColor, bgCardColor, textColor } from '../../colors'

const FormStyle = styled.header`
  display: flex;
  flex-direction: row;
  height: 5vh;
  justify-content: space-around;
  margin: 0 3vw;
  padding: 0.5%;

  h1 {
    color: ${ bgCardColor };
    padding: 0.4%;
    width: 14%;
  }

  input {
    background-color: ${ bgColor };
    border: solid 1px ${ bgCardColor };
    color: ${ bgCardColor };
    text-align: center;
    width: 30%;
  }

  input::placeholder {
    color: ${textColor};
  }

  select {
    background-color: ${ bgColor };
    border: solid 1px ${ bgCardColor };
    border-left: none;
    text-align: center;
    width: 20%;
  }
  
  button {
    background: ${ bgColor };
    border: solid 1px ${ bgCardColor };
    border-left: none;
    color: ${ btnColor };
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    width: 10%;
  }

  button:hover {
    cursor: grab
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: right;
    width: 25%;
  }

  a {
    color: ${ btnColor };
    font-size: 16px;
    font-weight: bold;
    padding: 3%;
    text-decoration: none;
    text-transform: uppercase;
  }
`

export default FormStyle
