import styled from 'styled-components'
import { bgCards } from '../../colors'

const CardMovieStyle = styled.div`
  align-items: center;
  background-color: ${bgCards};
  border-radius: 1.5%;
  display: flex;
  flex-direction: column;
  height: 440px;
  margin: 0.5%;
  padding: 1%;
  width: 47%;

  img {
    padding: 0.5%;
    width: 95%;
  }

  p {
    text-align: center;
  }

  h3 {
    text-align: center;
    width: 95%;
    margin: 2%;
  }
`

const CardCharacterStyle = styled.div`
  align-items: center;
  background-color: ${bgCards};
  border-radius: 1.5%;
  display: flex;
  flex-direction: column;
  height: 340px;
  justify-content: space-evenly;
  margin: 0.5%;
  padding: 1%;
  width: 47%;

  h3 {
    margin-bottom: 5%;
  }
  
  p {
    width: 90%;
    word-wrap: break-word;
    margin-bottom: 2%;
  }

  #list {
    margin-top: 5%;
  }
`

const CardLocalStyle = styled.div`
  align-items: center;
  background-color: ${bgCards};
  border-radius: 1.5%;
  display: flex;
  flex-direction: column;
  height: 340px;
  justify-content: space-evenly;
  margin: 0.5%;
  padding: 1%;
  width: 47%;

  h3 {
    margin-bottom: 3%;
  }
  
  p {
    width: 90%;
    word-wrap: break-word;
    margin-bottom: 0.7%;
  }
`

export { CardMovieStyle, CardCharacterStyle, CardLocalStyle }
