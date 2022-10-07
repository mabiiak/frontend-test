import styled from 'styled-components'
import { bgCardColor } from '../../colors'

const CardMovieStyle = styled.div`
  background-color: ${bgCardColor};
  border-radius: 1.5%;
  display: flex;
  flex-direction: column;
  height: 340px;
  margin: 0.5%;
  width: 11%;
  padding: 0.2%;

  img {
    padding: 2.5%;
    width: 95%;
  }
  
  #informations {
    align-items: left;
    display: flex;
    flex-direction: column;

    p {
      text-align: left;
    }

    h3 {
      text-align: left;
      width: 90%;
      margin-bottom: 2%;
    }
  }
`

const CardCharacterStyle = styled.div`
  background-color: ${bgCardColor};
  border-radius: 1.5%;
  display: flex;
  flex-direction: column;
  height: 270px;
  margin: 0.5%;
  width: 11%;
  padding: 0.2%;

  h3 {
    margin-bottom: 5%;
  }
  
  p {
    /* text-align: left; */
    width: 90%;
    word-wrap: break-word;
    margin-bottom: 2%;
  }

  #list, ul {
    margin-top: 5%;
  }

`

export { CardMovieStyle, CardCharacterStyle }
